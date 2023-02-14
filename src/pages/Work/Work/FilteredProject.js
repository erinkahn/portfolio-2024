export default function FilteredProject(props) {
    return (
        <>
            {props.filteredProjectProp.projects.filter(
                (project) => project.show === props.stateProp.active).map(
                    (filteredPr, f) => (
                        <li 
                        key={`item-${f}`} 
                        aria-labelledby={filteredPr.type}
                        role="tabpanel" 
                        className={`project-item ${f === 1 ? 'active-thumb' : ''}`}
                        >
                            <button 
                                tabIndex="0" 
                                // href={filteredPr.url} 
                                // target="_blank" 
                                className="project-image" 
                                style={{backgroundImage: `url(${filteredPr.img})`}}
                            >
                                <span className="project-link sr-only">
                                    {filteredPr.title}
                                </span>
                            </button>
                        </li>
                    )
                )
            }
        </>
    )
}