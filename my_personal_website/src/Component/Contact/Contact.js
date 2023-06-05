import React, { useState } from 'react'
import './style.css'
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
          </div>
          <div className="textarea">
            <textarea 
            placeholder={message}
            onChange={messagechange}
            onClick={()=>setMessage("")}
            />
          </div>
    </>
  )
}

export default Contact
