import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Detail from './components/Detail'
import Landing from './components/Landing'
import Shop from './components/Shop'

const RouteSwitch = () => {
  return (
      <BrowserRouter>
        <Routes>
                <Route path = '/' element = {<App/>}/>
                <Route path = '/shop' element = {<Shop/>}/>
                <Route path = '/detail/:id' element = {<Detail/>}/>
        </Routes>
      </BrowserRouter>    
  )
}

export default RouteSwitch