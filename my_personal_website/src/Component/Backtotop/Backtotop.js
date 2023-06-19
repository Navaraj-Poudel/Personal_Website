import React from 'react'
import './style.css'
import {MdOutlineArrowUpward} from 'react-icons/md';
const Backtotop = () => {
  return (
    <div className='upwardarrow' >
    <a href="#home">
       <p>
         <MdOutlineArrowUpward/>
        </p>
    </a>
    </div>
  )
}

export default Backtotop
