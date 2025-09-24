
function ProjectList({ projects }) {
    return (
        <div className="project-list">
            
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <img src={project.img}></img>
                    </div>
                ))}
         
        </div>
    )
}

export default ProjectList;