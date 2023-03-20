import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Checkout from './components/Checkout'
import CheckoutPayment from './components/CheckoutPayment'
import Detail from './components/Detail'
import Shop from './components/Shop'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Success from './components/Success'
import About from './components/About'

const stripePromise = loadStripe('pk_test_51MlDaaHKsllx80r4zt96EoElx7fz2crGaTQBxMnFEij4UwWStFmMkIzxwMrhnfeDoB0vKdGm0BcMFBeqGFxZl4Z500UcQ4uFNX')

const RouteSwitch = () => {
  return (
      <Elements stripe = {stripePromise}>
        <BrowserRouter>
          <Routes>
                  <Route path = '/' element = {<App/>}/>
                  <Route path = '/shop' element = {<Shop/>}/>
                  <Route path = '/detail/:id' element = {<Detail/>}/>
                  <Route path = '/checkout' element = {<Checkout/>}/>
                  <Route path = '/checkout/payment' element = {<CheckoutPayment/>}/>
                  <Route path = '/checkout/payment/success' element = {<Success/>}/>
                  <Route path = '/about' element = {<About/>}/>
          </Routes>
        </BrowserRouter>  
      </Elements>
        
  )
}

export default RouteSwitch