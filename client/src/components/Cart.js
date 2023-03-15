import React, { useState, useEffect } from 'react'
import { Close } from '@mui/icons-material'
import CartItem from './CartItem'
import useCart from './useCart'

const Cart = ( {closeCart} ) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'))
        if (savedCart) {
            setCart(savedCart)
        }
    }, [])

    useEffect(() => {
        
        for (let i = 0; i < cart.length; i++) {
            setTotal((total) => total + cart[i].price)
        }
    }, [cart])
    

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
                            <CartItem key = {index} name = {item.name} price = {item.price} img = {item.img}/>
                        </li>
                    ))}
                </ul>
            </div>
            <hr/>
            <div className = 'subtotal'>
                <span>Subtotal:</span>
                <span>${total}</span>
            </div>
        </div>
    </div>
  )
}

export default Cart