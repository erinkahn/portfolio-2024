export default function ProjectModal(props) {
    console.log(props.filteredProjectProp.projects)

    return (
        <div className="project-modal">
            <button 
                className="close-btn" 
                onClick={props.closeModal}
                aria-label="Close Modal"
            >
                <span className="sr-only">Close Modal</span>
            </button>

            <div className="inner-wrapper">
                <div className="dialog-content">
                    {props.filteredProjectProp.projects.filter(project => project.id === props.projectSelected).map(
                        (filteredPro, m) => (
                            <div 
                                key={`modal-${m}`}
                                aria-labelledby={`dialogTitle${m}`}
                                aria-describedby={`dialogDescription${m}`}
                                role="dialog"
                            >
                                <h2 className="section-title" id={`dialogTitle${m}`}>{filteredPro.title}</h2>
                                <div className="row">
                                    <div className="col">
                                        <p className="desc" id={`dialogDescription${m}`}>{filteredPro.description}</p>

                                        <div className="roles">
                                            <p><span>My Role:</span>...insert role here</p>
                                            <p><span>Designer:</span>...insert others here</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p><span>Tech Stack:</span></p>
                                        <ul>
                                            <li>icon</li>
                                            <li>icon</li>
                                            <li>icon</li>
                                            <li>icon</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}