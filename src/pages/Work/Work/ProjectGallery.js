import React, {useReducer, useState, useEffect} from 'react';
import { workData } from '../../../constants/data';
import SectionWrapper from '../../../components/SectionWrapper';
import Tabs from './Tabs';
// import Project from './Project';
import FilteredProject from './FilteredProject';
import ProjectModal from './ProjectModal';

const initialState = {
    showAll: true,
    active: 'show_websites'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        // case "show_all":
        //     return {
        //         ...state,
        //         showAll: true,
        //         active: 'show_all'
        //     }
        case 'show_websites':
            return {
                ...state,
                showAll: false,
                active: 'show_websites'
            }
        case 'show_designs':
            return {
                ...state,
                showAll: false,
                active: 'show_designs'
            }
        case 'show_art':
            return {
                ...state,
                showAll: false,
                active: 'show_art'
            }
        default:
            throw new Error();
    }
}

export default function ProjectGallery() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [modalShowing, setModalShowing] = useState(false);
    const [projectSelected, setProjectSelected] = useState("");

    const showProjectModal = (e) => {
        if (e.target.classList.contains('project-image')) {
            setModalShowing(true)
        }

        console.log(e.target.id) // continue here
    }

    const detectOutsideClick = (e) => {
        if (!e.target.classList.contains('project-image')) {
            setModalShowing(false)
        }
    }
    useEffect(() => {
        document.addEventListener('click', detectOutsideClick)
        return () => {
            document.removeEventListener('click', detectOutsideClick)
        }
    })

    const closeModal = (e) => {
        if (e.target.classList.contains('close-btn')) {
            setModalShowing(false)
        }
    }

    return (
        <SectionWrapper>
            <div className="gallery-container">
                <div className="filter-bar">
                    <div className="tabs-wrapper" 
                        role="tablist" 
                        aria-label="Work Categories"
                    >
                        <Tabs 
                            stateProp={state}
                            reducerProp={dispatch} 
                            tabProp={workData}
                        />
                    </div>
                    <h2 className="section-title">{workData.sectionTitle}</h2>
                </div>

                <ul className={`project-grid ${state.active}`}>
                    {state.active && 
                        <FilteredProject 
                            filteredProjectProp={workData}
                            stateProp={state}
                            showProjectModal={showProjectModal}
                        />
                    }
                </ul>

                {modalShowing &&
                    <ProjectModal 
                        showProjectModal={showProjectModal}
                        closeModal={closeModal}
                    />
                }

            </div>
        </SectionWrapper>
    )
}