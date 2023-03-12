import React from 'react'
import jeans from '../images/jeans.webp'
import Navbar from './Navbar'

const Detail = () => {
  return (
    <div>
        <Navbar/>
        <div id = 'detail'>
        <div className = 'detail-content'>
            <span className = 'detail-title'>Levis 505</span>
            <img src = {jeans} alt = 'item' className = 'detail-image'/>
            <span className = 'detail-description'>This is a description of the item that is being displayed on the screen</span>
            <hr/>
            <div className = 'detail-item-details'>
                <span>Size: 32W 30L</span>
                <span>Price: $45</span>
                <span>Brand: Levis</span>
            </div>
            <hr/>
            <button>Add to Cart</button>
        </div>
    </div>
    </div>
    
  )
}

export default Detail