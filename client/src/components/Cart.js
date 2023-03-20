import React, { useState, useEffect } from 'react'
import { Close } from '@mui/icons-material'
import CartItem from './CartItem'

const Cart = ( {closeCart, changeAmount} ) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [change, setChange] = useState(false)

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'))
        console.log(savedCart);
        if (savedCart) {
            setCart(savedCart)
        }
    }, [change])

    useEffect(() => {

        setTotal(0)
        
        for (let i = 0; i < cart.length; i++) {
            setTotal((total) => total + cart[i].price)
        }

        changeAmount()

    }, [cart, change])

    const inactChange = () => {
        setChange(!change)
        console.log('changed');
    }
    

    const handleClick = () => {
        closeCart()
    }   

  return (
    <div id = 'cart'>
        <div className = 'cart-content'>
            <div className = 'cart-top'>
                <span>Your Cart</span>
                <Close onClick = {handleClick} className = 'close-icon' fontSize='large'/>
            </div>
            <div className = 'cart-items'>
                <ul>
                    {cart && cart.map((item, index) => (
                        <li key = {index}>
                            <CartItem key = {index} name = {item.name} price = {item.price} img = {item.img} id = {item._id} change = {inactChange}/>
                        </li>
                    ))}
                </ul>
            </div>
            <hr/>
            <div className = 'subtotal'>
                <span>Subtotal:</span>
                <span>${total}</span>
            </div>
            <div style = {{'display': 'flex', 'width': '100%', 'justifyContent': 'center'}}><a href = '/checkout'><button>Checkout</button></a></div>
        </div>
    </div>
  )
}

export default Cart