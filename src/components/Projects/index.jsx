import "./index.css"

const projectArray = [
{name:"NxtTrends-Ecommerce",body:"A dynamic and user-friendly e-commerce platform built using React.js. This project showcases key features of a modern e-commerce site while emphasizing responsive design and interactive user experiences.",skills:['JAVASCRIPT','REACT','NODE','SQL','GIT'],link:"https://balajinxttrends.ccbp.tech/login"},
{name:"EmojiGame",body:"Test your memory and attention with the Emoji Click Challenge! In this game, each emoji should be clicked only once to increase your score. With every unique click, you move closer to victory, but if you click the same emoji twice, the game ends. Successfully clicking each emoji without repeating any will display the You Won!.",skills:['HTML','CSS','JAVASCRIPT','REACT'],link:"https://balajigame.ccbp.tech/"},
{name:"Rapido-Clone",body:"This project is a clone of the Rapido website, created with enhanced features and a responsive design. The project is developed using HTML, CSS, Bootstrap, and JavaScript. It is intended for educational purposes only.",skills:['HTML','CSS','JAVASCRIPT'],link:"https://balaji0077.github.io/Rapido-Clone/"}]
const Projects = ()=>{
     return (
         <>
            <ul className="projects-list">
              {
                 projectArray.map((each)=>{
                    return <li key={each.name} className="card-project">
                        <h1 className="text-3xl font-bold text-center p-3 card-name-medium">{each.name}</h1>
                        <p className="text-wrap text-lg w-sm text-left p-2 leading-[1.6] card-body-medium">{each.body}</p>
                        <ul className="skill-btns-containers">
                        {
                            each.skills.map(skill=>{
                               return <button key={skill} className="skill-btn">{skill}</button>
                            })
                        }
                        </ul>
                        <div className="p-3 text-left">
                        <button className="view-btn"><a href={each.link} target="_blank" className="font-bold"> View Project</a></button>
                       </div> 
                    </li>
                 })
              } 
            </ul>   

         </>
        )
}

export default Projects
