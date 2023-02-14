import {useState} from 'react';

export default function Project(props) {
    // console.log(props)
    const [activeThumb, setActiveThumb] = useState(1);

    const expandThumbnail = (e) => {
        // console.log(e.currentTarget.parentNode.getAttribute('id'))
        if (e.currentTarget.parentElement.classList.contains('active-thumb')) {
            e.currentTarget.parentElement.classList.remove('active-thumb')
        } else {
            e.currentTarget.parentElement.classList.add('active-thumb')
        }
    }

    return (
        <>
            {props.projectProp.projects.map((project, p) => (
                <li 
                    key={`project-${project.id}-${p}`}   
                    aria-labelledby="all"
                    role="tabpanel" 
                    id={project.id}
                    className={`project-item ${p === activeThumb ? 'active-thumb' : ''}`}
                >
                    <button 
                        tabIndex="0" 
                        
                        onClick={expandThumbnail}
                        // href={project.url} 
                        // target="_blank" 
                        rel="noreferrer"
                        className="project-image" 
                        style={{backgroundImage: `url(${project.img})`}}
                    >                        
                        <span className="project-link sr-only">
                            {project.title}
                        </span> 
                    </button>
                </li>  
            ))}
{/*             
            {props.projectProp.projects.filter((proj) => proj.id === 2).map(filteredThumb => (
                <li>{filteredThumb}</li>
            ))} */}
        </>
    )
}