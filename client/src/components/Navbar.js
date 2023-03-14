import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from './Cart';
import $ from 'jquery'

const Navbar = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  useEffect(() => {
    if (show) {
      $('#cart').addClass('left-slide')
    } else {
      $('#cart').removeClass('left-slide')
    }
  }, [show])

  return (
    <div id = 'navbar'>
        <div></div>
        <div className = 'center-links'>
            <span className = 'nav-link nav-link-ltr'>About</span>
            <span className = 'nav-title'><a href = '/'>Julia's Closet</a></span>
            <span className = 'nav-link nav-link-ltr'><a href = '/shop'>Shop</a></span>
        </div>
        <div>
            <ShoppingCartIcon className = 'cart-icon' onClick = {handleClick}/>
        </div>
        {show && <div>
          <Cart closeCart = {handleClick}/>
          <div className = 'dark'></div>
        </div>}
    </div>
  )
}

export default Navbar