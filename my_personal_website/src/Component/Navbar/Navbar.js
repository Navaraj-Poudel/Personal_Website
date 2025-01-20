import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import H from '../images/home.JPG';
import './style.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="Navbar">
      <div className="navbar-logo">
        <img src={H} alt="Logo" />
        <p>
          <span>N</span>avaraj Poudel
        </p>
      </div>

      <div className="navbar-item">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      {toggle && (
        <div
          className="navbar-item1"
          data-aos="fade-right"
          data-aos-duration="500"
          onClick={() => setToggle(false)} // Close the menu when an item is clicked
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      )}

      <div className="minimize-button" onClick={handleToggle}>
        <FontAwesomeIcon icon={toggle ? faTimes : faBars} size="2xl" />
      </div>
    </div>
  );
};

export default Navbar;
