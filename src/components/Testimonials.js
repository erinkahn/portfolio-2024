import React, {useState} from 'react';
import SectionWrapper from './Global/SectionWrapper';
import {testimonialData} from '../constants/data';

export default function Testimonials() {
    const [isActive, setIsActive] = useState(0);

    return (
        <SectionWrapper>
            <div className="testimonials-container">
                <div className="inner-wrap">
                    <h2 className="section-title">{testimonialData.sectionTitle}</h2>
                    {testimonialData.testimonials.map((testimonial, i) => (<>
                        <div 
                            aria-hidden={i === 0 ? false : true} 
                            key={`testim-${testimonial.id}`} 
                            className={`testimonial ${i === isActive ? 'show' : ''}`}>
                            {testimonial.text}
                        </div>
                    </>))}

                    <div className="btns-container">
                        {testimonialData.testimonials.map((testiBtn, s) => (
                            <button 
                                onClick={(e) => {
                                    setIsActive(s)
                                }} 
                                key={`btn-${s}`} 
                                role="tab"
                                id={testiBtn.id}
                                aria-label={`Navigate to testimonial ${s}`}
                                aria-selected={s === isActive ? true : false}
                                className={`testimonial-btn ${s === isActive ? 'active' : ''}`}>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}