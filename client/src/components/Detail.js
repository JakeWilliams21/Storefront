import React, { useContext, useEffect, useState } from 'react'
import jeans from '../images/jeans.webp'
import Navbar from './Navbar'
import axios from 'axios'
import { useParams } from 'react-router'
import { Buffer } from 'buffer'
import useCart from './useCart'

const Detail = () => {
  const [item, setItem] = useState([])
  const [added, setAdded] = useState(false)

  let { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:5000/detail/${id}`).then((res) => {
      setItem(res.data)
    })
  }, [])

  const handleClick = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []

    const newCart = [...savedCart, item]

    localStorage.setItem('cart', JSON.stringify(newCart))
    setAdded(true)
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
            <button onClick = {handleClick}>{added ? 'Added!' : 'Add to Cart'}</button>
        </div>
    </div>
    </div>
    
  )
}

export default Detail