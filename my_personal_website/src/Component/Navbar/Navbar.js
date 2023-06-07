import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import H from '../images/home.JPG'
import './style.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='navbar-logo'>
            <img src={H} alt="" />
            <p>Navaraj Poudel</p>
        </div>

        <div className="navbar-item">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/contact">Contact</Link>
         </div>
         <div className='minimize-button'>
         <FontAwesomeIcon icon={faBars} size ="2xl"/>
        </div>
    </div>
  )
}

export default Navbar
