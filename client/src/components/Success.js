import React from 'react'
import Navbar from './Navbar'

const Success = () => {
  return (
    <div>
        <Navbar />
        <div style = {{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'paddingTop': '24px'}}>
            <h1>Thank you!</h1>
            <p>Your order was successful, you will recieve your package in 10-12 business days.</p>
        </div>
        
    </div>
  )
}

export default Success