import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme/ThemeContext";

export default function ProjectModal(props) {
    const themeName = useContext(ThemeContext);

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
                                            <p><span>My Role:</span>{filteredPro.role}</p>
                                            {filteredPro.designers &&
                                                <p><span>Designer:</span>{filteredPro.designers}</p>
                                            }
                                            {filteredPro.devs &&
                                                <p><span>Co-Devs:</span>{filteredPro.devs}</p>
                                            }
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="tools">
                                            <p><span>Tools:</span></p>
                                            <ul>
                                                {filteredPro.icons.map((icon, i) => (
                                                    <li key={`icon-${i}`}>
                                                        <img src={icon.img} alt={icon.alt}/>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {filteredPro.url &&
                                            <div className="button-col">
                                                <div className="button-wrapper">
                                                    <a 
                                                        target="_blank" 
                                                        aria-label={`Click to see ${filteredPro.title}'s live site`} 
                                                        href={filteredPro.url}
                                                    >
                                                        <div aria-hidden="true">Live Site 
                                                            <img className="arrow" src={`/images/icons/arrow-${themeName.theme}.svg`} alt=""/>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        }
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