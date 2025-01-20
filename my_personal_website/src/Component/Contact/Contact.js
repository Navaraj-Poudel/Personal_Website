import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState("typing");

  const handleChange = (event) => setName(event.target.value);
  const emailChange = (event) => setEmail(event.target.value);
  const messageChange = (event) => setMessage(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable("submitted");

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");

    document.getElementById("submitrelated").innerHTML = "Your information has been submitted successfully!";

    emailjs
      .sendForm('service_0gmgmck', 'template_w5aa0bo', form.current, 'Iyitp58rKkYfmMyAT')
      .then(
        (result) => {
          console.log("Message sent:", result.text);
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="contact" id="contact">
      <br />
      <br />
      <div className="contact_title" data-aos="flip-right" data-aos-duration="500">
        Contact
      </div>
      <br />
      <br />
      <form ref={form} data-aos-duration="3000">
        <div className="box">
          <input
            placeholder="Name"
            type="text"
            name="user_name"
            value={name}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            placeholder="Email address"
            type="email"
            name="user_email"
            value={email}
            onChange={emailChange}
          />
        </div>
        <br />
        <div className="textarea">
          <textarea
            placeholder="Message"
            name="message"
            value={message}
            onChange={messageChange}
          />
        </div>
        <br />
        <div className="contact_button">
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={name.length === 0 || email.length === 0 || message.length === 0 || disable === "submitted"}
          >
            Submit
          </Button>
        </div>
        <br />
        <p id="submitrelated"></p>
      </form>
      <div className="footer">
        <br />
        <div className="footer_content" data-aos-duration="3000">
          <div className="footer_title">
            <p>Find Me Here:</p>
          </div>
          <div className="footer_description">
            <p>
              Email : 
              <a href="mailto:poudelnavaraj90@gmail.com" style={{ color: 'white', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                poudelnavaraj90@gmail.com
              </a>
            </p>
          </div>
          <div className="socialmediaicon">
            <Link to="https://www.linkedin.com/in/navaraj-poudel/" target="_blank">
              <BsLinkedin />
            </Link>
            <Link to="https://github.com/Navaraj-Poudel?tab=repositories" target="_blank">
              <BsGithub />
            </Link>
            <Link to="https://www.instagram.com/navarajpoudel9/" target="_blank">
              <BsInstagram />
            </Link>
            <Link to="https://www.facebook.com/nawaraj.poudel.775" target="_blank">
              <BsFacebook />
            </Link>
            <a href="https://twitter.com/navarajpoudel9" target="_blank" rel="noopener noreferrer">
              <BsTwitter />
            </a>
          </div>
          <div className="footer_bottom">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
