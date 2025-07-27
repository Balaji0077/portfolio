import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { Link } from "react-scroll"
import NavDark from "./assets/NavDark.jpg"
import LogoDark from "./assets/LogoDark.png"
import { IoCloseSharp } from "react-icons/io5";
import { useSelector , useDispatch} from "react-redux"
import PortfolioSlice from "./components/redux/PortfolioSlice"
import { IoMdDownload } from "react-icons/io";
import './App.css'

const actions = PortfolioSlice.actions
function App() {
        const mediumNavbar = useSelector((store)=>store.modeState.mediumNavbar)
        const darkMode = useSelector((store)=>store.modeState.darkMode)
        const dispatch = useDispatch()
        const closeMedium = ()=>{
             dispatch(actions.setMediumNavbar())
        }

       return (
      <div className="App-container"> 
            <Navbar/>
            <Home/>
           {
             mediumNavbar&&
             <div className={`${darkMode?"medium-navbar-dark z-100":"medium-navbar z-100"}`} onClick={closeMedium}>
                   <Link to="home" smooth={true} onClick={closeMedium}>
                  <div className="wrong-app-container">
                    
                    <div className="app-container-wrong-btn">
                      <img src={darkMode?NavDark:LogoDark} className="name-logo" alt="name-icon" />
                    </div> 
                    
                     <h1 className={`${darkMode?"app-name font-bold text-white":"app-name font-bold"}`}>BALAJI SUGUR</h1>
                    <div onClick={closeMedium}>
                       <IoCloseSharp style={darkMode?{"fontSize":"40px","color":"white"}:{"fontSize":"40px"}} onClick={closeMedium}/>
                    </div>  
                  </div>
                  </Link>  
                  

                  <div className={`${darkMode?"font-medium medium-nav-content medium-nav-content-dark":"font-medium medium-nav-content"}`}>
                     <Link
                      to="about"
                      smooth={true}
                      duration={500}
                      activeClass="active"
                      spy={true}
                      offset={-70}
                      onClick={closeMedium}
                      > <h1>About Me</h1>
                      </Link>
                     <Link
                      to="skills"
                      smooth={true}
                      duration={500}
                      activeClass="active"
                      spy={true}
                      offset={-70}
                      onClick={closeMedium}
                      >   <h1>Skills</h1>
                      </Link>

                     <Link
                      to="projects"
                      smooth={true}
                      duration={500}
                      activeClass="active"
                      spy={true}
                      offset={-70}
                      onClick={closeMedium}
                      > <h1>Projects</h1>
                      </Link>
                  
                      <Link
                      to="contact"
                      smooth={true}
                      duration={500}
                      activeClass="active"
                      spy={true}
                      offset={-70}
                      onClick={closeMedium}
                      ><h1>Contact</h1></Link>
                     <button className={`${darkMode?"download-app-button download-app-button-dark":"download-app-button"}`} onClick={()=>{closeMedium ; window.location.href="/Balaji2025_.pdf"}}>Download CV <IoMdDownload className="download-icon"/></button>
                  </div>
                  
             </div>
    
           }
         
      </div> 
       )
  
}

export default App
