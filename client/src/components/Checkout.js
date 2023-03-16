import React, { useState, useEffect } from 'react'
import CartItem from './CartItem';
import { useNavigate } from 'react-router';

const Checkout = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
      });
    const [cart, setCart] = useState([])
    const [change, setChange] = useState(false)
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()

      useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'))
        if (savedCart) {
            setCart(savedCart)
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


  return (
    <div>
        <div className = 'checkout-top'>
            <span><a href = '/'>Julia's Closet</a></span>
        </div>
        <div className = 'checkout-content'>
            <div className = 'left'>
                <span style = {{'fontSize': 'x-large'}}>Shipping Address</span>
                <form className="form-container">
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
                <div style = {{'display': 'flex', 'justifyContent': 'right', 'width': '100%'}}><button type="submit" onClick = {submitShipping}>Continue to Payment</button></div>
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

export default Checkout