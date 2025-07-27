import nameLogo from "../../assets/Logo.jpg"
import NavDark from "../../assets/NavDark.jpg"
import { Link } from "react-scroll"
import "./index.css"
import {useSelector,useDispatch}  from "react-redux"
import PortfolioSlice from "../redux/PortfolioSlice"
import { TiWeatherSunny } from "react-icons/ti";
import { FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const actions = PortfolioSlice.actions
const Navbar = () => {
  
  const dispatch = useDispatch()
  const darkMode = useSelector((store)=>store.modeState.darkMode)
  
  const changeMode = ()=>{
        dispatch(actions.changeMode())
  }

  const mediumScreen = ()=>{
         dispatch(actions.setMediumNavbar())
  }
  
  return (
  
      
      <nav className={`nav-bar fixed top-0 left-0 w-full bg-white z-50 ${darkMode?"nav-dark medium-nav":"medium-nav"}`}>
        <Link to="home" smooth={true}>
            <div className="home-logo-name-container">
                <div className="name-logo-container">
                  <img src={darkMode?NavDark:nameLogo} className="name-logo" alt="name-icon" />
                </div>
                <p className={`${darkMode?'home-name home-name-dark':'home-name'}`}>BALAJI SUGUR</p>
            </div>
        </Link>

        <div className="nav-content-toggle-container">

          <div className={`${darkMode?'nav-content-dark nav-content':'nav-content'}`}>
          
            <Link
              to="home"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={-70}
            >
              <p>Home</p>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={-70}
            >
              <p>About</p>
            </Link>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={-70}
            >
              <p onClick={()=>window.location.href="/Balaji2025_.pdf"}>Resume</p>
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={-70}
            >
              <p>Skills</p>
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={-70}
            >
             <p>Projects</p> 
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={-70}
              
            >
             <p>Contact</p> 
            </Link>
          </div>



          <div className="toggle-container" onClick={changeMode}>
            
            { darkMode?
            <TiWeatherSunny className="sunny sunny-large" style={{'color':'yellow','fontSize':'35px'}}/>
            :
            <FaMoon className="Moon" style={{'fontSize':'35px'}}/>
             }
          </div>

          <div className="medium-container-sidebar" onClick={mediumScreen}>
             { darkMode?<GiHamburgerMenu style={{'color':'white','fontSize':'26px','marginTop':'4px'}}/>:<GiHamburgerMenu style={{'fontSize':'25px'}}/>}
          </div>
         
          
        </div>
      </nav>
    
   
  )
}

export default Navbar
