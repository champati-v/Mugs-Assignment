import "@/styles/Project.css";

function Projects() {
  return (
    <div className="projects" id="Projects" >
        <div className="project-text">
            <h1>My Projects</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, saepe!</p>
            <p>consectetur adipisicing elit. Labore, saepe!</p>
        </div>

        <div className="project-buttons">
            <button className="project-btn">All</button>
            <button className="project-btn">UI/UX</button>
            <button className="project-btn active">Web Design</button>
            <button className="project-btn">App Design</button>
            <button className="project-btn">Graphic Design</button>
        </div>

        <div className="project-images">
            <div className="project1">
                <img src="/assets/project-1.svg" alt="" />
            </div>  

            <div className="project2">
                <img src="/assets/project-2.svg" alt="" />
            </div>

            <div className="project3">
                <img src="/assets/project-3.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Projects