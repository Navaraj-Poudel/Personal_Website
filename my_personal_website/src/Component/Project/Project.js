import React from 'react'
import './style.css';
import H from '../images/home.JPG'
import Newsapp from '../images/newsapp.jpg'
import {BsArrowUpRightCircleFill} from 'react-icons/bs';
const Project = () => {
  return (
    <>
    <div className='projecttitle'>
        Projects
    </div><br /><br />
     <div className="project">
     <div className="projectbox">
        <div className="project-card">
            <img src={Newsapp} alt="" /> 
            <div className="projectdescription"><br />
                <h2>News App</h2><br />
                <p>Nepali Music Streaming Platform with a focus on genre based music classification and genre based music recommendation.(Final Year Project).</p>
            </div>
            <div className="button">
                <button className='btn btn-dark'>Preview <BsArrowUpRightCircleFill/></button>
            </div>
        </div>
     </div>

     <div className="projectbox">
        <div className="project-card">
            <img src={Newsapp} alt="" />
        </div>
     </div>

     <div className="projectbox">
        <div className="project-card">
            <img src={Newsapp} alt="" />
        </div>
     </div>

     </div>
    </>
  )
}

export default Project
