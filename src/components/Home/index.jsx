"use client"
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import {UseAnimationFrame} from "../Animations/UseAnimationFrame"
import About from "../About"
import Projects from "../Projects"
import "./index.css"
import {Element} from "react-scroll"
import Skills from "../Skills"
import Contact from "../Contact"
import { Link } from "react-scroll"
import {useSelector}  from "react-redux"


const Home = ()=>{
     const mediumNavbar = useSelector((store)=>store.modeState.mediumNavbar)
     const darkMode = useSelector((store)=>store.modeState.darkMode)
     return (
       <div className={`${darkMode?'All-containers-dark':'All-containers'}`}>
      
        <Element name="home" className="Home-container">
           
             <div className="social-media-accounts">
                 <div>
                    <a href={`${import.meta.env.VITE_FACEBOOK}`} target="_blank"><FaFacebook style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}} /></a>
                 </div>
                 <div>
                     <a href={`${import.meta.env.VITE_GITHUB}`} target="_blank"> <FaGithub style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}}/></a>
                  </div>
                 <div>
                    <a href={`${import.meta.env.VITE_LINKEDIN}`} target="_blank"> <FaLinkedin style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}}/></a>
                  </div>
                 <div>
                     <a href={`${import.meta.env.VITE_INSTAGRAM}`} target="_blank"> <FaInstagramSquare  style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}}/></a>
                  </div>
                 <div>
                    <a href={`${import.meta.env.VITE_TELEGRAM}`} target="_blank"> <FaTelegram style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}}/> </a> 
                  </div>
                 <div>
                      <a href={`${import.meta.env.VITE_TWITTER}`} target="_blank"><FaSquareXTwitter  style={darkMode?{'fontSize':'35px','color':'white'}:{'fontSize':'35px'}}/> </a>
                 </div>
             </div>

             <div className="introduce-section">
                <div className="profile-photo-container">
                    <div>
                        <img src={`${import.meta.env.VITE_PROFILE}`} alt="profile-photo" className={`${darkMode?'profile-photo profile-photo-dark':'profile-photo'}`}/>
                   </div> 
                   <div className="hello-container">
                        <h1 className={`${darkMode?'text-5xl text-white font-medium hello-medium':'text-5xl font-medium hello-medium'}`}>Hello!</h1>
                        <h1 className={`${darkMode?'name text-white font-medium Iam-medium':'name font-medium Iam-medium'}`}>I'm <span className={`${darkMode?'name-special font-extrabold name-special-dark':'name-special font-extrabold'}`}>Balaji</span> 👋</h1>
                   </div>
                  
                </div>  
                 <p className={`${darkMode?'career career-dark':'career'}`}>A passionate Full Stack Developer with expertise in <br/>building user-friendly web applications</p>
                <div>
                 <button className="download-cv" onClick={()=>window.location.href="/Balaji2025_.pdf"}>Download CV </button>
                 <Link to="contact" smooth={true} duration={500}><button className="download-cv get-in-touch-btn">Get In Touch!</button></Link>
                </div> 
             </div>
              
             <div> 
             </div>

             <div className="animation-container">
                  <UseAnimationFrame/>
             </div>

             <div className="gmail-container">
                  
                   <div className={`${darkMode?'vertical-email vertical-email-dark':'vertical-email'}`}>
                        <span>b</span>
                        <span>a</span>
                        <span>l</span>
                        <span>a</span>
                        <span>j</span>
                        <span>i</span>
                        <span>s</span>
                        <span>u</span>
                        <span>g</span>
                        <span>u</span>
                        <span>r</span>
                        <span>@</span>
                        <span>g</span>
                        <span>m</span>
                        <span>a</span>
                        <span>i</span>
                        <span>l</span>
                        <span>.</span>
                        <span>c</span>
                        <span>o</span>
                        <span>m</span>
                   </div>
                   <div className="line-container">
                        <hr className={`${darkMode?'line line-dark':'line'}`}/>
                   </div>
             </div>
             
        </Element>

        <Element name="about" className="About-container">
           <About/>
        </Element>

        <Element name="skills" className={`${darkMode?'skills-container skill-container-dark':'skills-container'}`}>
            <h1 className={`${darkMode?'skill-text-medium text-4xl font-bold text-white':'skill-text-medium text-4xl font-bold'}`}>SKILLS</h1>
            <Skills/> 
        </Element>

        <Element name="projects" className="project-container">
            <h1 className={`${darkMode?'project-text-medium text-5xl text-shadow-lg font-bold text-white':"project-text-medium text-5xl font-bold "}`}>PROJECTS</h1>
            <Projects/>
        </Element>

        <Element name="contact" className={`${darkMode?'contact-container-dark contact-container':'contact-container'}`}>
           <Contact/>
        </Element>

     </div>
     
    ) 
}


export default Home
