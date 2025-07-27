import { useAnimationFrame } from "motion/react"
import { useRef } from "react" 
import {useSelector}  from "react-redux"

export function UseAnimationFrame() {
    const ref = useRef(null)

    useAnimationFrame((t) => {
        if (!ref.current) return

        const rotate = Math.sin(t / 10000) * 200
        const y = (1 + Math.sin(t / 1000)) * -50
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
    })

    return (
        <div className="container">
            <div className="cube" ref={ref}>
                  <div className="side front">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                 </div>
                <div className="side left" >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
                </div>   
                <div className="side right">  
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                 </div>   
                <div className="side top">
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
                </div>    
                <div className="side bottom">    
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                </div>    
                <div className="side back">
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                </div>    
            </div>
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {

    return (
        <style>{`
            
        .container {
            margin-top:100px;
            perspective: 1000px;
            width: 200px;
            height: 200px;
        }

        .cube {
            width: 200px;
            height: 200px;
            position: relative;
            transform-style: preserve-3d;
        }

        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: red;
            opacity: 1;
            display: flex;
            align-items: center;
           justify-content: center;
           font-size: 1.2rem;
           font-weight: bolder;
           color: white;
            
               background: linear-gradient(135deg, #000000, #333);
               border: 1px solid rgba(255, 255, 255, 0.2);
            
        }

        .front {
            transform: rotateY(0deg) translateZ(100px);
            background-color: rgba(255, 0, 0, 0.6);
        }
        .right {
            transform: rotateY(90deg) translateZ(100px);
            background-color: rgba(0, 255, 0, 0.6);;
        }
        .back {
            transform: rotateY(180deg) translateZ(100px);
            background-color: rgba(0, 0, 255, 0.6); ;
        }
        .left {
            transform: rotateY(-90deg) translateZ(100px);
            background-color: rgba(255, 255, 0, 0.6); 
        }
        .top {
            transform: rotateX(90deg) translateZ(100px);
           background-color: rgba(0, 255, 255, 0.6);
        }
        .bottom {
            transform: rotateX(-90deg) translateZ(100px);
             background-color: rgba(255, 0, 255, 0.6);
        }
             
}


    `}</style>
    )
}




import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { SiRedux, SiFramer } from "react-icons/si";

const skills = [
  [<FaReact />, "React", 340, 10],
  [<FaNodeJs />, "Node.js", 20, 40],
  [<FaJs />, "JavaScript", 60, 90],
  [<FaDatabase />, "SQL", 80, 120],
  [<FaPython />, "Python", 100, 140],
  [<FaHtml5 />, "HTML", 205, 245],
  [<FaCss3Alt />, "CSS", 260, 290],
  [<FaGitAlt />, "Git", 290, 320],
  [<SiRedux />, "Redux", 120, 180],
  [<SiFramer />, "Framer Motion", 180, 220],
];

const hue = (h) => `hsl(${h}, 85%, 60%)`;

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

function Card({ emoji, label, hueA, hueB }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <div className="card-content">
          <div className="icon">{emoji}</div>
          <div className="label">{label}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ScrollTriggered() {
   const darkMode = useSelector((store)=>store.modeState.darkMode)
  return (
    <>
      <style>
        {`
          .scroll-area {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 40px 20px;
            background-color:#e6e6e6;
            min-height: 100vh;
            gap: 20px;
          }
            .scroll-area-dark{
               background-color:#000000;
            }

          .card-container {
            position: relative;
            width: 180px;
            height: 180px;
            border-radius: 20px;
            overflow: hidden;
            transition: transform 0.3s ease;
          }

          .card-container:hover {
            transform: scale(1.05);
            cursor: pointer;
          }

          .splash {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            filter: blur(20px);
            z-index: 1;
          }

          .card {
            position: relative;
            background: rgba(0, 0, 0, 0.85);
            border-radius: 20px;
            height: 100%;
            z-index: 2;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: box-shadow 0.3s ease;
            
          }

          .card:hover {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          }

          .card-content {
            text-align: center;
            color: #fff;
            padding-bottom:18px;
          }

          .icon {
            font-size: 55px;
            transition: transform 0.3s;
          }

          .card-container:hover .icon {
            transform: scale(1.2);
          }

          .label {
            font-size: 18px;
            font-weight: bold;
            margin-top: 10px;
          }

          @media (max-width: 768px) {
            .card-container {
              width: 45%;
              height: 160px;
            }
          }

          @media (max-width: 480px) {
            .card-container {
              width: 100%;
              height: 160px;
            }

            .icon {
              font-size: 40px;
            }

            .label {
              font-size: 16px;
            }
          }
        `}
      </style>

      <div className={`${darkMode?'scroll-area scroll-area-dark':'scroll-area'}`}>
        {skills.map(([icon, label, hueA, hueB]) => (
          <Card
            key={label}
            emoji={icon}
            label={label}
            hueA={hueA}
            hueB={hueB}
          />
        ))}
      </div>
    </>
  );
}

///////////////////////////////////////////////////




