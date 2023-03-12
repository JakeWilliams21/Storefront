import React from 'react'
import Item from './Item'
import Navbar from './Navbar'

const Shop = () => {
  return (
    <div>
        <Navbar/>
        <div id = 'shop'>
            <div className = 'shop-container'>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    </div>
    
  )
}

export default Shop