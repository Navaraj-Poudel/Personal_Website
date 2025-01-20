import { React, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import Ehrms from "../images/ehrms.png";
import Newsapp from "../images/newsapp.jpg";
import TextUtils from "../images/textutils3.jpg";
import Trekimages from "../images/trek.JPG";
import Agrobot from "../images/agrobot.jpg";

const Project = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div id="project">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="projecttitle" data-aos="flip-right" data-aos-duration="200">
          Projects
        </div>
        <br />
        <br />
        <br />
        <div className="project" data-aos="fade-right" data-aos-duration="2000">
          {/* First Row */}
          <div className="projectbox">
            <a href="https://github.com/Navaraj-Poudel/Electronic_Health_Record_Management_System_Using_RFID_Card.git" target="_blank" rel="noopener noreferrer" className="project-card">
              <img src={Ehrms} alt="" />
              <div className="projectdescription">
                <br />
                <h2>Electronic Health Record Management System using RFID: Improving Efficiency and Accuracy in Healthcare</h2>
                <br />
                <p>
                  EHRMS integrates RFID for automated patient ID and record Management,
                  enhancing efficiency and care. Real-time access to record revolutionizes
                  healthcare management.
                </p>
              </div>
            </a>
          </div>

          <div className="projectbox">
            <a href="https://github.com/yogijagdish/minor-project" target="_blank" rel="noopener noreferrer" className="project-card">
              <img src={Trekimages} alt="" />
              <div className="projectdescription">
                <br />
                <h2>Trek Monitoring System: Enhancing Safety and Adventure in the Outdoors using Arduino UNO and 
                NodeMCU</h2>
                <br />
                <p>
                  It is a system where the sensor captures the information regarding the health of the trekkers 
                  and displays it in the website in remote computer.
                </p>
              </div>
            </a>
          </div>

          <div className="projectbox">
            <a href="https://github.com/Navaraj-Poudel/Newsapps" target="_blank" rel="noopener noreferrer" className="project-card">
              <img src={Newsapp} alt="" />
              <div className="projectdescription">
                <br />
                <h2>
                Comprehensive News Aggregator App: Gathering and Presenting Articles from Diverse Sources</h2>
                <br />
                <p>
                  News apps gather articles and news stories from various sources,
                  such as newspapers, magazines, blogs, and online news outlets, and present them in a website.
                </p>
              </div>
            </a>
          </div>

          {/* Second Row */}
          <div className="projectbox">
            <a href="https://github.com/Navaraj-Poudel/TextUtils" target="_blank" rel="noopener noreferrer" className="project-card">
            <img src={TextUtils} alt="" />
            <div className="projectdescription">
                <br />
                <h2>
                TextUtils</h2>
                <br />
                <p>
                TextUtils is an app with features like case conversion (upper/lower), text copying, extra space removal. It also provides word and character counting functionality.
                </p>
              </div>
            </a>
          </div>

          <div className="projectbox">
            <a rel="noopener noreferrer" className="project-card">
              <img src={Agrobot} alt="" />
              <div className="projectdescription">
                <br />
                <h2> Agrobot : Multi-Function Agricultural Robot
                </h2>
                <br />
                <p>
                Developed a prototype of a multifunctional agricultural robot, operated via remote control, capable of plowing fields, sowing seeds, and watering plants
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
