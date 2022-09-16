import React from 'react';
import SectionWrapper from './Global/SectionWrapper';
import {testimonialData} from '../constants/data';

export default function Testimonials() {
    return (
        <SectionWrapper>
            <div className="testimonials-container">
                <h2 className="section-title">{testimonialData.sectionTitle}</h2>
            </div>
        </SectionWrapper>
    )
}