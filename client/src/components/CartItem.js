import React from 'react'
import { Buffer } from 'buffer'
import { Close } from '@mui/icons-material'

const CartItem = (props) => {

  const handleClick = () => {
    console.log(props);
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []

    const newCart = savedCart.filter(cartItem => cartItem._id !== props.id)

    localStorage.setItem('cart', JSON.stringify(newCart))

    props.change()
  }

  return (
    <div className = 'cart-item'>
        <div className = 'cart-item-content'>
        {props.img && <img src={`data:${props.img.contentType};base64,${Buffer.from(props.img.data.data).toString('base64')}`} alt='jeans' className="item-image" />}
            <div className = 'cart-item-detail'>
                <span>{props.name}</span>
                <span>${props.price}</span>
            </div>
        </div>
        
        <Close onClick = {handleClick}/>
    </div>
  )
}

export default CartItem