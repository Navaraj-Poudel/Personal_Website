import React, { useState } from 'react'
import './style.css'
import Button from '@mui/material/Button';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
const Contact = () => {
  const[name,setName] = useState("Name")
  console.log({name})
  const[email,setEmail] = useState("Email address")
  console.log({email})

  const[message,setMessage] = useState("Message")
  console.log({message})
  const handleChange = (event)=>{
    setName(event.target.value)  }
    const emailChange = (event)=>{
      setEmail(event.target.value)
    }
    const messagechange = (event)=>{
      setMessage(event.target.value)
    }
  return (
    <>
    <div className="contact_title">
     Contact
    </div><br /> <br />
    <div className='box'>
        <input
        placeholder={name}
        onClick={()=>setName("")}
        onChange={handleChange}
        /> <br /> <br /> <br /><br />
        <input
        placeholder={email}
        onClick={()=>setEmail("")}
        onChange={emailChange}
        />
          </div><br /> <br /> <br /><br />
          <div className="textarea">
            <textarea 
            placeholder={message}
            onChange={messagechange}
            onClick={()=>setMessage("")}
            />
          </div><br /><br /><br />

          <div className="contact_button">
          <Button  variant="contained">Submit</Button>
          </div><br /><br />
          <div className="footer"><br /><br />
             <div className="footer_title">
             <p> Get In Touch</p>
             </div>
             <div className="socialmediaicon">
              <div className="facebook">
                <Link to="/about">
                  <p>

                <BsFacebook/>
                  </p>
                </Link>
              </div>
              <div className="facebook">
              <Link to="/about">
                <p>

                <BsInstagram/>
                </p>
                </Link>
             
              </div>
              <div className="facebook">
              <Link to="/about">
                <p>

                <BsLinkedin/>
                </p>
                </Link>
             
              </div>
              <div className="facebook">
              <Link to="/about"> 
              <p>

              <BsGithub/>
              </p>
              </Link>

            
              </div>
              <div className="facebook">
              <Link to="/about"> 
              <p>
              <BsTwitter/>
              </p>
              </Link>

              </div>
             </div><br />
             <div className="footer_bottom">
            <p>  @ 2022 copyright all right reserved</p>
             </div>
          </div>
          
    </>
  )
}

export default Contact
