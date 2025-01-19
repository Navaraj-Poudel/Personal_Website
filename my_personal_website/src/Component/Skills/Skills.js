import React, { useEffect } from 'react';
import './style.css';
import Html from '../images/html.png';
import Cplus from '../images/c++.png';
import C from '../images/c.png';
import Tailwindcss from '../images/tailwind.png';
import Materialui from '../images/materialui.png';
import Git from '../images/git3.png';
import Github from '../images/github1.png';
import react from '../images/react1.png';
import Figma from '../images/figma4.png';
import Powerbi from '../images/powerbi1.jpg';
import Bash from '../images/bash.webp';
import Python from '../images/python2.webp';
import Javascript from '../images/javascript2.jpg';
import Mysql from '../images/mysql2.png';
import Mongodb from '../images/mongodb.svg';
import Adobephotoshop from '../images/adobephotoshop.png';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="skills-section" id="skills"> 
        <div className="skills-header" data-aos="flip-right" data-aos-duration="200">
          <h1>Skills</h1>
        </div> <br/> <br/> <br/>

        <div className="skills-box-title" data-aos="fade-right" data-aos-duration="1000">
          <h2>Programming Skills</h2>
        </div>

        <div className="skills-container" data-aos="fade-right" data-aos-duration="2000">
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img src={C} alt="" className="skills-icons" />
              </div>
              <h3>C</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img src={Cplus} alt="" className="skills-icons" />
              </div>
              <h3>C++</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
              <img src={Javascript} alt="" className="skills-icons" />
              </div>
              <h3>JAVASCRIPT</h3>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
              <img src={Python} alt="" className="skills-icons" />
              </div>
              <h3>Python</h3>
            </div>
          </div>

        </div> <br/>

        <div className="skills-box-title" data-aos="fade-right"data-aos-duration="1000">
          <h2>Web Development</h2>
        </div>

        <div className="skills-container" data-aos="fade-right" data-aos-duration="2000">
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img src={Html} alt="" className="skills-icons" />
              </div>
              <h3>HTML 5</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" alt="" className="skills-icons" />
              </div>
              <h3>CSS3</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img src={Tailwindcss} alt="" className="skills-icons" />
              </div>
              <h3>TAILWIND CSS</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img src={react} alt="" className="skills-icons" />
              </div>
              <h3>REACT JS</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img src={Materialui} alt="" className="skills-icons" />
              </div>
              <h3>MATERIAL-UI</h3>
            </div>
          </div>
        </div>
        

        <div className="skills-box-title" data-aos="fade-right" data-aos-duration="1000">
          <h2>Other Skills</h2>
        </div>

        <div className="skills-container" data-aos="fade-right" data-aos-duration="1000">
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img src={Git} alt="" className="skills-icons" />
              </div>
              <h3>GIT</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img src={Github} alt="" className="skills-icons" />
              </div>
              <h3>GITHUB</h3>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img src={Mysql} alt="" className="skills-icons" />
              </div>
              <h3>MY SQL</h3>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img src={Mongodb} alt="" className="skills-icons" />
              </div>
              <h3>MongoDB</h3>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img src={Adobephotoshop} alt="" className="skills-icons" />
              </div>
              <h3>Adobe Photoshop</h3>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img src={Figma} alt="" className="skills-icons" />
              </div>
              <h3>Figma</h3>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img src={Powerbi} alt="" className="skills-icons" />
              </div>
              <h3>Power BI</h3>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-title">
              <div className="skills-img">
                <img src={Bash} alt="" className="skills-icons" />
              </div>
              <h3>Bash</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
