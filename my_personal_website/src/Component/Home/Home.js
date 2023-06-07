import React from 'react'
import './style.css'
import H from '../images/home.JPG'
import L from '../images/linkdin.png'
import G from '../images/github1.png'
import About from '../About/About'
import Typed from 'react-typed'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
const Home = () => {
  const typed = useTypewriter({
    words : ['Developer','dkdjd','kdkdkd'],
    loop : {},
  });
  return (
    <>
    
    <div className='Home'>

    
    <div className='home-details'>
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
        <div className='home-button'>  
      <button>Resume</button> 
         </div>
    </div>

       <div className="homeimages">
        <img src={H} alt="" />
       </div>
       

    </div>
    <div className="homelink">
      <a href=""><img src={L}alt="linkdin_images" /></a>
        <a href="https://github.com/Navaraj-Poudel"><img src={G} alt="github_images" /></a>
    </div>
    </>
  )
}

export default Home
