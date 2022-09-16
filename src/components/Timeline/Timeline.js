import React from 'react';
import SectionWrapper from '../Global/SectionWrapper';
import Year from './Year';
import {timelineData} from '../../constants/data';

export default function Timeline() {
    return (
        <SectionWrapper>
            <div className="timeline-container">
                <h2>{timelineData.sectionTitle}</h2>
                <Year/>
            </div>
        </SectionWrapper>
    )
}