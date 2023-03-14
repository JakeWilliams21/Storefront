import React from 'react'
import jeans from '../images/jeans.webp'
import { Close } from '@mui/icons-material'

const CartItem = () => {
  return (
    <div className = 'cart-item'>
        <div className = 'cart-item-content'>
            <img src = {jeans} alt = 'Cart Item'/>
            <div className = 'cart-item-detail'>
                <span>Levis 505</span>
                <span>$45</span>
            </div>
        </div>
        
        <Close/>
    </div>
  )
}

export default CartItem