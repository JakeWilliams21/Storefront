import React from 'react'
import { Close } from '@mui/icons-material'
import CartItem from './CartItem'

const Cart = ( {closeCart} ) => {

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
                <CartItem/>
                <CartItem/>
            </div>
            <hr/>
            <div className = 'subtotal'>
                <span>Subtotal:</span>
                <span>$90</span>
            </div>
        </div>
    </div>
  )
}

export default Cart