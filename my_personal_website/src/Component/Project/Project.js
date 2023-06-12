import {React,useEffect} from "react";
import "./style.css";
import { Link } from 'react-router-dom'
import H from "../images/home.JPG";
import 'aos/dist/aos.css'
import Aos from 'aos'
import Newsapp from "../images/newsapp2.jpg";
import TextUtils from "../images/textutils3.jpg";
import Trekimages from "../images/trekking.jpg";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const Project = () => {
    useEffect(()=>{
        Aos.init()
      },[]);
  return (
    <>
      <div className="projecttitle" data-aos="flip-right" data-aos-duration = "200">Projects</div>
      <br />
      <br />
      <div className="project" data-aos="zoom-in-down" data-aos-duration="2000">
        <div className="projectbox">
          <div className="project-card">
            <img src={Newsapp} alt="" />
            <div className="projectdescription">
              <br />
              <h2>News App</h2>
              <br />
              <p>
                News apps gather articles and news stories from various sources,
                such as newspapers, magazines, blogs, and online news
                outlets,and present them in website.
              </p>
            </div>
            <div className="button">
            <Link to="https://github.com/Navaraj-Poudel/Newsapps">
              <button className="btn btn-dark"> 
               Code <BsArrowUpRightCircleFill />
              </button>
            </Link>

            </div>
          </div>
        </div>

        <div className="projectbox">
          <div className="project-card">
            <img src={Trekimages} alt="" />
            <div className="projectdescription">
              <br />
              <h2>Trek Monitoring system</h2>
              <br />
              <p>
                It is a  system where the sensor
                captures the information regarding the health of the trekkers
                and displays it in the website in remote computer.(Minor
                Project)
              </p>
            </div>
            <div className="button">
            <Link to="https://github.com/yogijagdish/minor-project">
              <button className="btn btn-dark"> 
               Code <BsArrowUpRightCircleFill />
              </button>
            </Link>

            </div>
          </div>
        </div>

        <div className="projectbox">
          <div className="project-card">
            <img src={TextUtils} alt="" />
            <div className="projectdescription">
              <br />
              <h2>TextUtils</h2>
              <br />
              <p>
                TextUtils is an app with features like case conversion
                (upper/lower), text copying, extra space removal.It also
                provides word and character counting functionality.
              </p>
            </div>
            <div className="button">
            <Link to="https://github.com/Navaraj-Poudel/TextUtils">
              <button className="btn btn-dark"> 
               Code <BsArrowUpRightCircleFill />
              </button>
            </Link>

            </div>
          </div>
        </div>
      </div>{" "}
      <br />
      <br />
      <br />
      <br />
      <div className="projectsecond"  data-aos="fade-right" data-aos-duration="2000">
        <div className="projectbox">
          <div className="project-card">
            <img src={Newsapp} alt="" />
            <div className="projectdescription">
              <br />
              <h2>EHRMS</h2>
              <br />
              <p>
                EHRMS integrates RFID for automated patient ID and record
                management, enhancing efficiency and care. Real-time access to
                records revolutionizes healthcare management.
              </p>
            </div>
            <div className="button">
            <Link to="https://github.com/Navaraj-Poudel/Electronic_Health_Record_Management_System_Using_RFID_Card">
              <button className="btn btn-dark"> 
               Code <BsArrowUpRightCircleFill />
              </button>
            </Link>

            </div>
          </div>
        </div>

        <div className="projectbox">
          <div className="project-card">
            <img src={Trekimages} alt="" />
            <div className="projectdescription">
              <br />
              <h2>News App</h2>
              <br />
              <p>
                Nepali Music Streaming Platform with a focus on genre based
                music classification and genre based music recommendation.(Final
                Year Project).
              </p>
            </div>
            <div className="button">
            <Link to="https://github.com/yogijagdish/minor-project">
              <button className="btn btn-dark"> 
               Code <BsArrowUpRightCircleFill />
              </button>
            </Link>

            </div>
          </div>
        </div>

        <div className="projectbox">
          <div className="project-card">
            <img src={Newsapp} alt="" />
            <div className="projectdescription">
              <br />
              <h2>News App</h2>
              <br />
              <p>
                Nepali Music Streaming Platform with a focus on genre based
                music classification and genre based music recommendation.(Final
                Year Project).
              </p>
            </div>
            <div className="button">
            <Link to="https://github.com/yogijagdish/minor-project">
              <button className="btn btn-dark"> 
               Code <BsArrowUpRightCircleFill />
              </button>
            </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
