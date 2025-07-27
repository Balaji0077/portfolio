import Rectangle from "../../assets/Rectangle.jpg"
import HandDark from "../../assets/HandDark.png"
import Vector1 from "../../assets/Vector4.jpg"
import Vector2 from "../../assets/Vector5.jpg"
import Vector1Dark from "../../assets/Vector4Dark.png"
import Vector2Dark from "../../assets/Vector5Dark.png"

import "./index.css"
import {useSelector}  from "react-redux"

const About = ()=>{
    const darkMode = useSelector((store)=>store.modeState.darkMode)
    return (
        <>
       <div className="about-component">
        <div className="hand-container">
            <img src={darkMode?HandDark:Rectangle} alt="hand" className="hand-image"/>
            <div className="vector-images-container">
             <img src={darkMode?Vector1Dark:Vector1} alt="hand" className="vector-image"/>
             <img src={darkMode?Vector2Dark:Vector2} alt="hand" className="vector-image vector-image2"/>
            </div> 
            <h1 className={`${darkMode?'this-is-text-medium text-5xl font-bold p-5 text-white':'this-is-text-medium text-5xl font-bold p-5'}`}>This is it. ;)</h1>
        </div>
            <div className="about-me-container">
                <h1 className={`${darkMode?'this-is-text text-5xl font-bold p-5 text-white':'this-is-text text-5xl font-bold p-5'}`}>This is it. ;)</h1>
                <p className={`${darkMode?'about-me-content text-xl p-3 text-lg/7 text-white':'about-me-content text-xl p-3 text-lg/7'}`}>
                    Hi, I'm <span className="font-bold">Balaji</span>— a passionate <span className="font-bold">Full Stack Developer</span> dedicated to building scalable, high-performance, and user-friendly web applications.
                </p>
                <p className={`${darkMode?'about-me-content text-xl p-3 text-lg/7 text-white':'about-me-content text-xl p-3 text-lg/7'}`}>
                     I specialize in front-end development using <span className="font-bold">HTML, CSS, JavaScript, and React.js,</span> crafting seamless and interactive user interfaces. On the back-end, I work with <span className="font-bold">Node.js and Express.js,</span> building efficient server-side logic and integrating robust databases like MongoDB and MySQL for effective data management.
                </p>
                <p className={`${darkMode?'about-me-content text-xl p-3 text-lg/7 text-white':'about-me-content text-xl p-3 text-lg/7'}`}>
                       I enjoy developing end-to-end solutions, optimizing performance, and solving real-world problems through code. My strength lies in breaking down complex challenges into clean, maintainable, and scalable solutions.
                </p>
                <p className={`${darkMode?'about-me-content text-xl p-3 text-lg/7 text-white':'about-me-content text-xl p-3 text-lg/7'}`}>
                      I'm always eager to <span className="font-bold">learn new technologies,</span> take on new challenges, and contribute to meaningful and impactful projects.
                </p>
                <p className={`${darkMode?'about-me-content text-xl p-3 text-lg/7 text-white':'about-me-content text-xl p-3 text-lg/7'}`}>
                        Let's build something awesome together!
                </p>
                
            </div>
        </div>   
       </>
    )
}

export default About