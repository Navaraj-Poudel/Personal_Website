import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import H from '../images/home.JPG'
import Nav from '../images/nav.jpg'
import './style.css'
// import { Link } from 'react-router-dom'
const Navbar = () => {
  const [toggle,setTogggle] = useState(false)
  const handleToggle =()=>{
    setTogggle(!toggle)
    console.log(toggle)
  }
  return (
    <div className='Navbar'>
        <div className='navbar-logo'>
            <img src={H} alt="" />
            <p> <span>N</span>avaraj Poudel</p>
        </div>

        <div className="navbar-item">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#project">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
         </div>
     {(toggle)?<div className="navbar-item1" data-aos="fade-right" data-aos-duration="500" onClick={()=> setTogggle(!toggle)}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#project">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
         </div> : null}
         

         <div className='minimize-button' onClick={handleToggle}>
         <FontAwesomeIcon icon={faBars} size ="2xl"/>
         
          
        </div>
    </div>
  )
}

export default Navbar