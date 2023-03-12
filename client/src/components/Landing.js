import React from 'react'
import alley from '../images/Alley.jpg'
import apples from '../images/Apples.jpg'

const Landing = () => {
  return (
    <div id = 'landing'>
        <div className = 'landing-content'>
            <div className = 'landing-images'>
                <img src = {apples} className = 'apples' alt = 'Apple Picking'/>
                <img src = {alley} className = 'alley' alt = 'Alley Pose'/>
            </div>
            <div className = 'button-container'>
                <a href = '/shop'><button className = 'shop-now'>Shop Now</button></a>
            </div>
            
        </div>
    </div>
  )
}

export default Landing