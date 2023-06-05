import React from "react";
import "./style.css";
import A1 from "../images/about.JPG";
const About = () => {
  return (
    <>
      <div className="abouttitle">About</div>
      <div className="aboutsection">
        <div className="aboutPhoto">
          <img src={A1} alt="about_Photo" />
        </div>

        <div className="aboutmyself">
          <h2>I am Navaraj Poudel</h2>
          <p>
            I have completed my BSc.(Hons) Computer Science from the University
            of Wolverhampton. I have worked on both individual and group
            projects. I love to do challenging tasks.I am a quick learner and
            ready to take new challenges to give better performance.
          </p>
          <br />
          <div className="abouteducation">
            <br />
            <h2>Bachelor in electronics engineering</h2>
            <p>Pashchimanchal Campus Pokhara</p>
            <span>2018--------------------------2023</span>
            <br />
            <br /> <br />
            <h2>+2 Science</h2>
            <p>Kanti higher secondary school</p>
            <span>2015--------------------------2018</span>
            <br />
            <br />
            <br />
            <h2>SLC(School Leaving Certificate)</h2>
            <p>Pashchimanchal Campus Pokhara</p>
            <span>2005--------------------------2015</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
