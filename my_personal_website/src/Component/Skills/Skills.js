import React, { useEffect } from 'react'
import './style.css'
import Html from '../images/html.png'
import Cplus from  '../images/c++.png'
import C from  '../images/c.png'
import Python from  '../images/python.png'
import Tailwindcss from '../images/tailwind.png'
import Materialui from '../images/materialui.png'
import Git from '../images/git3.png'
import Github from '../images/github1.png'
import react from '../images/react1.png'
import Figma from '../images/figma2.png'
import 'aos/dist/aos.css'
import Aos from 'aos'
const Skills = () => {
    useEffect(()=>{
        Aos.init();
    },[])
  return (
    <>
      <div class="skills-section">
    <div class="skills-header" data-aos="flip-right" data-aos-duration = "200">
     <h1>Skills</h1>   
     </div><br /><br /><br />

     <div className="skills-box-title" data-aos="fade-right" data-aos-duration = "1000">
        <h2>Programming Skills</h2>
     </div><br />


     <div class="skills-container" data-aos="fade-right" data-aos-duration = "2000">
       
       <div class="skills-box">
        <div class="skills-title">
        <div class="skills-img">
         <img src={C}  alt="" class="skills-icons"/>
         </div>
          <h3>C</h3>
         </div>
         
        </div>
        
        
         <div class="skills-box">
        <div class="skills-title">
        <div class="skills-img">
         <img src= {Cplus} alt="" class="skills-icons"/>
         </div>
         <h3>C++</h3>
         </div>
            
        </div>
        
        
         <div class="skills-box">
        <div class="skills-title">
        <div class="skills-img">
        <img src="https://icon-library.net/images/javascript-icon-png/javascript-icon-png-23.jpg" alt="" class="skills-icons"/>
         </div>
         <h3>JAVASCRIPT</h3>
         </div>
         
        </div>
 {/*        
           <div class="skills-box">
        <div class="skills-title">
        <div class="skills-img">
         <img src="https://javascriptforwp.com/wp-content/uploads/2019/03/badge-gatsby.png" alt="" class="skills-icons"/>
         </div>
         <h3>GATSBY.JS</h3>
         </div>
         
        </div> */}
        
        
        </div><br /><br /><br /><br />



        <div className="skills-box-title"  data-aos="fade-left" data-aos-duration = "1000">
        <h2>Web Development Skills</h2>
     </div> <br />

     <div class="skills-container"  data-aos="fade-left" data-aos-duration = "2000">
       
      <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src={Html}  alt="" class="skills-icons"/>
        </div>
         <h3>HTML 5</h3>
        </div>
        
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" alt="" class="skills-icons"/>
        </div>
        <h3>CSS3</h3>
        </div>
           
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src={Tailwindcss} alt="" class="skills-icons"/>
        </div>
        <h3>TAILWIND CSS</h3>
        </div>
        
       </div>
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://icon-library.net/images/javascript-icon-png/javascript-icon-png-23.jpg" alt="" class="skills-icons"/>
        </div>
        <h3>JAVASCRIPT</h3>
        </div>
        
       </div>
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src={react} alt="" class="skills-icons"/>
        </div>
        <h3>REACT</h3>
        </div>
        
       </div>
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src={Materialui} alt="" class="skills-icons"/>
        </div>
        <h3>MATERIAL-UI</h3>
        </div>
        
       </div>
       
       
       </div><br /><br /><br /><br />
       
       <div className="skills-box-title"  data-aos="fade-up" data-aos-duration = "2000">
        <h2>Other Skills</h2>
     </div> <br />


       <div class="skills-container"  data-aos="fade-down" data-aos-duration = "2000">
       
       <div class="skills-box">
        <div class="skills-title">
        <div class="skills-img">
         <img src={Git}  alt="" class="skills-icons"/>
         </div>
          <h3>GIT</h3>
         </div>
         
        </div>
        
        
         <div class="skills-box">
        <div class="skills-title">
        <div class="skills-img">
         <img src= {Github} alt="" class="skills-icons"/>
         </div>
         <h3>GITHUB</h3>
         </div>
            
        </div>
        
        
         <div class="skills-box">
        <div class="skills-title">
        <div class="skills-img">
        <img src={Figma} alt="" class="skills-icons"/>
         </div>
         <h3>Figma</h3>
         </div>
         
        </div>

        </div>
    

     </div>
    </>
  )
}

export default Skills
