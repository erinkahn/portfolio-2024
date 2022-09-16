export default function Project(props) {
    return (
        <>
            {props.projectProp.projects.map((project) => (
                <li 
                    key={`project-${project.id}`} 
                    aria-labelledby="all"
                    role="tabpanel" 
                    className="project-wrapper" 
                    style={{backgroundImage: `url(${project.img})`}}
                >
                    <a 
                        tabIndex="0" 
                        href={project.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="project-link sr-only"
                    >
                        {project.title}
                    </a>
                </li>
            ))}
        </>
    )
}