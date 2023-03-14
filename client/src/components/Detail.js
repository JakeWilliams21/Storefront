import React, { useContext, useEffect, useState } from 'react'
import jeans from '../images/jeans.webp'
import Navbar from './Navbar'
import { CartContext } from '../CartContext'
import axios from 'axios'
import { useParams } from 'react-router'
import { Buffer } from 'buffer'

const Detail = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext)
  const [item, setItem] = useState([])

  let { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:5000/detail/${id}`).then((res) => {
      setItem(res.data)
    })

    console.log(item);
  }, [])

  const handleClick = () => {
    addToCart({

    })
  }

  return (
    <div>
        <Navbar/>
        <div id = 'detail'>
        <div className = 'detail-content'>
            <span className = 'detail-title'>{item.name}</span>
            {item.img && <img src = {`data:${item.img.contentType};base64,${Buffer.from(item.img.data.data).toString('base64')}`} alt = 'item' className = 'detail-image'/>}
            <span className = 'detail-description'>{item.description}</span>
            <hr/>
            <div className = 'detail-item-details'>
                <span>Size: {item.size}</span>
                <span>Price: ${item.price}</span>
                <span>Brand: {item.brand}</span>
            </div>
            <hr/>
            <button onClick = {handleClick}>Add to Cart</button>
        </div>
    </div>
    </div>
    
  )
}

export default Detail