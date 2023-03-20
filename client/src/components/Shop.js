import React, { useState, useEffect } from 'react'
import Item from './Item'
import Navbar from './Navbar'
import axios from 'axios'

const Shop = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('https://storefront-database.herokuapp.com/shop').then((res) => {
      setItems(res.data)
    })
  }, [])

  useEffect(() => {
    window.history.scrollRestoration = 'manual'

    // $(window).on('scroll', () => {
    //   const windowTop = $(window).scrollTop()
    //   $('.storefront-item').each(function(){
    //     const position = $(this).offset().top
    //     if (position < windowTop + $(window).height()) {
    //       $(this).addClass('animation-class')
    //       $(this).removeClass('hide')
    //     } 
    //   })
    // })
  }, [])

  return (
    <div>
        <Navbar/>
        <div id = 'shop'>
            <div className = 'shop-container'>
                <ul className = 'shop-container'>
                  {items.map((item, index) => (
                    <li key = {index} >
                      <Item key = {item._id} name = {item.name} price = {item.price} id = {item._id} img = {item.img}/>
                    </li>
                  ))}
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default Shop