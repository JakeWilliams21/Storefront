import React, { useState, useEffect } from 'react'
import CartItem from './CartItem'
import { useNavigate } from 'react-router';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutPayment = () => {
     const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
        email: ''
      });
    const [cart, setCart] = useState([])
    const [change, setChange] = useState(false)
    const [total, setTotal] = useState(0)
    const [ship, setShip] = useState([])
    const navigate = useNavigate()

    const stripe = useStripe()
    const elements = useElements()

      useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'))
        const savedShip = JSON.parse(localStorage.getItem('shipping'))
        if (savedCart) {
            setCart(savedCart)
        }

        if (savedShip) {
          setShip(savedShip)
        }
      }, [change])

      useEffect(() => {

        setTotal(0)
        
        for (let i = 0; i < cart.length; i++) {
            setTotal((total) => total + cart[i].price)
        }
    }, [cart, change])

      const inactChange = () => {
        setChange(!change)
        console.log('changed');
    }
    
      const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };

      const submitShipping = (e) => {
        e.preventDefault()
        localStorage.setItem('shipping', JSON.stringify(formData))
        navigate('/checkout/payment')
      }

      const validateForm = () => {
        const {firstName, lastName, address1, city, state, zipCode } = formData
        if (
          firstName.trim() === '' ||
          lastName.trim() === '' ||
          address1.trim() === '' ||
          city.trim() === '' ||
          state.trim() === '' ||
          zipCode.trim() === ''
        ) {
          return false
        }
  
        return true
      }

      const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
          alert('Please fill out all required fields')
          return;
        }
        
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card: elements.getElement(CardElement),
          billing_details: {
            address: {
              line2: formData.address2,
              line1: formData.address1,
              state: formData.state,
              city: formData.city,
              country: 'US'
            },
            name: `${formData.firstName} ${formData.lastName}`
          }
        })

        if (!error) {
          // Send Payment method to server
          const submission = {
            amount: total * 100,
            paymentMethod: paymentMethod.id,
            billingAddress: formData,
            orderInfo: {
              items: cart,
              shipping: ship,
              orderDate: new Date(),
              name: `${ship.firstName} ${ship.lastName}`,
              amount: total,
              email: formData.email
            }
          }

          try {
            const res = axios.post('http://localhost:5000/payments', submission)
            console.log(res);
            localStorage.clear()
            navigate('/checkout/payment/success')
          } catch (error) {
            console.log(error);
            alert('There was an issue with your payment')
          }
        }
      }

  return (
    <div>
        <div className = 'checkout-top'>
            <span><a href = '/'>Julia's Closet</a></span>
        </div>
        <div className = 'checkout-content'>
            <div className = 'left'>
    <form onSubmit={handleSubmit} className="credit-card-form">
    <span style = {{'fontSize': 'x-large'}}>Payment Info</span>
    <div className = 'card-info'>
      <CardElement/>
    </div>
    <input name = 'email' placeholder = 'example@email.com' onChange = {handleChange} value = {formData.email} id = 'email' className = 'form-input' type = 'text' style = {{'marginTop': '24px'}}/> 
    </form>
            <form className="form-container">
            <span style = {{'fontSize': 'x-large'}}>Billing Address</span>
            <div className="form-input-row">
                <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
                placeholder = 'First Name'
                />
                <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
                placeholder = 'Last Name'
                />
            </div>
            <div className="form-input-row">
                <input
                type="text"
                id="address1"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                className="form-input"
                placeholder = 'Address'
                />
            </div>
            <div className="form-input-row">
                <input
                type="text"
                id="address2"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                className="form-input"
                placeholder = 'Apartment, Suite, etc'
                />
            </div>
            <div className="form-input-row">
                <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-input"
                placeholder = 'City'
                />
                <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="form-input"
                placeholder = 'State'
                />
                  <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="form-input"
                placeholder = 'Zip Code'
                />
            </div>
            <div style = {{'display': 'flex', 'justifyContent': 'right', 'width': '100%'}}><button type="submit" onClick = {handleSubmit}>Purchase</button></div>
            </form>
            </div>
            <div className = 'right'>
            <div className = 'checkout-items'>
            {cart.map((item, index) => (
                <CartItem key = {index} name = {item.name} price = {item.price} img = {item.img} id = {item._id} change = {inactChange} />
              ))}
            </div>
              <hr style = {{'backgroundColor': 'black', 'border': 'solid'}}/>
              <div className = 'order-info'>
                <span>Subtotal:</span>
                <span>$ {total}</span>
              </div>
              <div className = 'order-info'>
                <span>Shipping:</span>
                <span>$ 7.50</span>
              </div>
              <hr style = {{'backgroundColor': 'black', 'border': 'solid'}}/>
              <div className = 'order-info'>
                <span>Total:</span>
                <span>$ {total + 7.50}</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutPayment