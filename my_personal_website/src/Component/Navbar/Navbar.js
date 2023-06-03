import React, { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import './style.css'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='navbar-logo'>
            <p>Navaraj Poudel</p>
        </div>

        <div className="navbar-item">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Work</a>
            <a href="">Skills</a>
            <a href="">Contact</a>
         </div>
         <div className='minimize-button'>
         <FontAwesomeIcon icon={faBars} size ="2xl"/>
        </div>
    </div>
  )
}

export default Navbar
