import React from 'react'
import jeans from '../images/jeans.webp'
import { Buffer } from 'buffer'
import { Close } from '@mui/icons-material'

const CartItem = (props) => {
  return (
    <div className = 'cart-item'>
        <div className = 'cart-item-content'>
        {props.img && <img src={`data:${props.img.contentType};base64,${Buffer.from(props.img.data.data).toString('base64')}`} alt='jeans' className="item-image" />}
            <div className = 'cart-item-detail'>
                <span>{props.name}</span>
                <span>${props.price}</span>
            </div>
        </div>
        
        <Close/>
    </div>
  )
}

export default CartItem