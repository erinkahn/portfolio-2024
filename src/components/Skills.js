import React from 'react';
import SectionWrapper from './Global/SectionWrapper';
import { skillsData } from '../constants/data';

export default function Skills() {
    return (
        <SectionWrapper>
            <div className="skills-container">
                <h2 className="section-title">{skillsData.sectionTitle}</h2>
            </div>
        </SectionWrapper>
    )
}