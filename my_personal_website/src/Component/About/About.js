import { React, useEffect } from "react";
import "./style.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div id="about">
        <br /><br /><br /><br /><br />
        <div className="abouttitle" data-aos="flip-left">About</div>
        
        <div className="aboutsection">
          <div className="aboutmyself">
            <p>
            I am a graduated from the Institute of Engineering, Paschimanchal Campus, 
            with hands-on experience in system and network engineering. Over the course of my career,
             I have gained valuable experience in managing and securing network infrastructures. 
             I have also contributed to the field with the publication of two research papers and am passionate about advancing my knowledge through research. 
             Additionally, I hold certifications such as TestOut: Hybrid Server Pro Core and TestOut: Ethical Hacker Pro, which further strengthen my expertise in cybersecurity.
            </p>
          </div> <br/>

          <div className="abouteducation">
            <h3>Education</h3>
            <div className="educationbox">
              <div className="boxcontent">
                <h2>St. Cloud State University - St. Cloud, Minnesota</h2>
                <p>Master of Science in Information Assurance</p>
                <span>Aug 2024 - Present</span>
              </div>

              <div className="boxcontent">
              <h2>Tribhuvan University (TU) Paschimanchal Campus- Pokhara, Nepal</h2>
              <p> Bachelor of Engineering in Electronic,Communication & Information Engineering</p>
                <span>Nov 2018 - May 2023</span>
              </div>

            </div>
          </div> <br/>

          <div className="aboutexperience">
            <h3>Experience</h3>
            <div className="experiencebox">
              <div className="boxcontent">
                <h2>Network and System Engineer | Wepro Technology</h2>             
                 <p>
                • Implemented and managed computer networks, including the configuration of network devices.<br/>
                • Improved network security by performing vulnerability assessments and recommending new technologies. 
                </p>
                <span>May 2023 - Nov 2023</span>
              </div>

              <div className="boxcontent">
                <h2>System Administrator Intern | Wepro Technology </h2>
                <p>
                • Configured and maintained servers, ensuring smooth operation and timely updates.<br/>
                • Monitored and resolved system issues to maintain high availability and performance. 
                </p>
                <span>May 2022 - Oct 2022</span>              </div>
            </div>
          </div> <br/>

          <div className="aboutpublications">
            <h3>Publications</h3>
            <div className="publicationbox">
              <div className="boxcontent">
                <h2>Trek Monitoring System : Enhancing Safety and Adventure in the Outdoors using Arduino UNO and 
                NodeMCU</h2>
                <p>The Trek Monitoring System ensures trekker safety through health monitoring, GPS tracking, and real-time weather updates, enabling prompt assistance and secure trekking</p>
                <span>16 Aug 2023</span>   
                           </div>

              <div className="boxcontent">
                <h2>Electronic Health Record Management System using RFID: Improving Efficiency and Accuracy in 
                Healthcare</h2>
                <p>This study introduces an RFID-based EHRMS to enhance data accuracy, streamline patient records, and improve healthcare outcomes</p>
                <span>02 Sep 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
