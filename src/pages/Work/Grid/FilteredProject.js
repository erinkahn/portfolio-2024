export default function FilteredProject(props) {
    return (
        <>
            {props.filteredProjectProp.projects.filter(
                (project) => project.show === props.stateProp.active).map(
                    (filteredPr, f) => (
                        <li 
                        key={`item-${f}`} 
                        aria-labelledby={filteredPr.type}
                        className="project-item"
                        >
                            <button 
                                tabIndex="0" 
                                onClick={props.openModal}
                                className="project-image" 
                                id={filteredPr.id}
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