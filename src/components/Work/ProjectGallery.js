import React, {useReducer} from 'react';
import { workData } from '../../constants/data';
import SectionWrapper from '../Global/SectionWrapper';
import Tabs from './Tabs';
import Project from './Project';
import FilteredProject from './FilteredProject';

const initialState = {
    showAll: true,
    active: 'show_all'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "show_all":
            return {
                ...state,
                showAll: true,
                active: 'show_all'
            }
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
                    {state.showAll &&
                        <Project 
                            projectProp={workData}
                        />
                    }

                    {state.active && 
                        <FilteredProject 
                            filteredProjectProp={workData}
                            stateProp={state}
                        />
                    }
                </ul>
            </div>
        </SectionWrapper>
    )
}