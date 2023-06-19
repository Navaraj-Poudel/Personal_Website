import {React,useEffect} from 'react'
import './style.css'
import H from '../images/home.JPG'
import L from '../images/linkdin.png'
import G from '../images/github1.png'
import { BsArrowUpRightCircleFill } from "react-icons/bs";
// import { Link } from 'react-router-dom'
import About from '../About/About'
import Typed from 'react-typed'
import Aos from 'aos'
import 'aos/dist/aos.css'
// import { useTypewriter} from 'react-simple-typewriter'
import Project from '../Project/Project'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Backtotop from '../Backtotop/Backtotop'
// import Navbar from '../Navbar/Navbar'
const Home = () => {
  // const typed = useTypewriter({
  //   words : ['Developer','dkdjd','kdkdkd'],
  //   loop : {},
  // });
  useEffect(()=>{
    Aos.init()
  },[]);

  useEffect(()=>{
    document.title = "Navaraj Poudel"
  },[])
  return (
    <>
    <div className='Home'id='home'>
    <div className='home-details' data-aos="fade-right" data-aos-duration="1000">
        <p>
            Hi,<br />
            It's me <span> Navaraj Poudel</span><br />
            I am a <span>
            <Typed
            strings={[
              "Frontend Developer",
              "Web Designer",
              "Web Developer",
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
            />
            </span>
        </p>
        {/* <div className='home-button'>  
        <a href= 'Navaraj Resume.pdf'
        download='Navaraj Resume.pdf'
        > 
      <button>Resume</button> 
        </a>
         </div> */}
          <div className='h-button' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">  
        <a href= 'Navaraj Resume.pdf'
        download='Navaraj Resume.pdf'
        > 
      <button className='btn btn-success'> Download Resume <BsArrowUpRightCircleFill /></button> 
        </a>
         </div>
    </div>

       <div className="homeimages" data-aos="zoom-in" data-aos-duration = "100">
        <img src={H} alt="" />
       </div>
       

    </div>
    <div className="homelink">
      <a href="" ><img src={L}alt="linkdin_images" /></a>
        <a href="https://github.com/Navaraj-Poudel"><img src={G} alt="github_images" /></a>
    </div>
    <About/>
    <Backtotop/>
    <Project/>
    <Skills/>
    <Contact/>
  
    </>
  )
}

export default Home
