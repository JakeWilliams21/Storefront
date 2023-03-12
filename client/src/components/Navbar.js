import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div id = 'navbar'>
        <div></div>
        <div className = 'center-links'>
            <span className = 'nav-link nav-link-ltr'>About</span>
            <span className = 'nav-title'><a href = '/'>Julia's Closet</a></span>
            <span className = 'nav-link nav-link-ltr'><a href = '/shop'>Shop</a></span>
        </div>
        <div>
            <ShoppingCartIcon className = 'cart-icon'/>
        </div>
    </div>
  )
}

export default Navbar