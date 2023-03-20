import React from 'react'
import alley from '../images/Alley.jpg'
import Navbar from './Navbar'

const About = () => {
  return (
    <div>
        <Navbar/>
        <div id = 'about'>
            <div className = 'about-content'>
                <img style = {{'width': '375px'}} src = {alley} alt = 'Julia'/>
                <span style = {{'fontSize': 'x-large'}}>Hi, I'm Julia</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
            </div>
        </div>
    </div>
  )
}

export default About