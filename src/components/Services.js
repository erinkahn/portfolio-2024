import React from 'react';
import SectionWrapper from './Global/SectionWrapper';
import { servicesData } from '../constants/data';

export default function Services() {
    return (
        <SectionWrapper>
            <div className="services-container">
                <h2 className="section-title">{servicesData.sectionTitle}</h2>
            </div>
        </SectionWrapper>
    )
}