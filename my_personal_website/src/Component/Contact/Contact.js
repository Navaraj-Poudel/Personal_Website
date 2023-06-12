import React, { useEffect, useState } from 'react'
import './style.css'
import Button from '@mui/material/Button';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'
import TextField from '@mui/material/TextField';
const Contact = () => {
  const[name,setName] = useState("")
  // console.log({name})
  const[email,setEmail] = useState("")
  // console.log({email})

  const[message,setMessage] = useState("")
  // console.log({message})
  const[disable,setDisable] = useState("typing")
  const handleChange = (event)=>{
    setName(event.target.value)  }
    const emailChange = (event)=>{
      setEmail(event.target.value)
    }
    const messagechange = (event)=>{
      setMessage(event.target.value)
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(`Name : ${name}`)
      console.log(`Email Address : ${email}`)
      console.log(`Message : ${message}`)
      setDisable('submitted');
      document.getElementById("submitrelated").innerHTML = "Your infromation have been submitted successfully!!!"
    }
    useEffect(()=>{
      Aos.init()
    },[])
  return (
    <>
    <div className="contact" id='contact'><br /><br /><br /><br /><br />
    <div className="contact_title" data-aos = "flip-right" data-aos-duration="500">
     Contact
    </div><br /> <br />
    <form data-aos = "fade-right" data-aos-duration="3000" >

    <div className='box'>
        <input
        placeholder= "Name"
        type='text'
        id='name'
        onClick={()=>setName("")}
        onChange={handleChange}
        /> <br /> <br /> <br /><br />
        <input
        placeholder="Email address"
        type='email'
        id='email'
        onClick={()=>setEmail("")}
        onChange={emailChange}
        />
          </div><br /> <br /> <br /><br />
          <div className="textarea">
            <textarea 
            placeholder="Message"
            type = 'text'
            id='message'
            onChange={messagechange}
            onClick={()=>setMessage("")}
            />
          </div><br /><br /><br />
          <div className="contact_button">
          <Button  variant="contained" onClick={handleSubmit} disabled = {name.length==0 || email.length==0 || message.length==0|| disable ==="submitted"}>Submit</Button>
          </div><br /><br />
          <p id='submitrelated'></p>
          </form>
          <div className="footer"><br /><br />
          <div className="fottersecond" data-aos = "fade-down" data-aos-duration="3000">

          
             <div className="footer_title">
             <p> Get In Touch</p>
             </div>
             <div className="socialmediaicon"  >
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
             </div>
             <div className="footer_bottom">
            <p> @ 2022 copyright all right reserved</p>
             </div>

             </div>

          </div>
          </div>

    </>
  )
}

export default Contact
