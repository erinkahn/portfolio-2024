import React, {useState} from 'react';
import SectionWrapper from './Global/SectionWrapper';
import {testimonialData} from '../constants/data';

export default function Testimonials() {
    const [isActive, setIsActive] = useState(0);

    return (
        <SectionWrapper>
            <div className="testimonials-container" id="testimonials">
                <div className="inner-wrap">
                    <h5 className="section-title">{testimonialData.sectionTitle}</h5>
                    {testimonialData.testimonials.map((testimonial, t) => (
                        <div 
                            aria-hidden={t === 0 ? false : true} 
                            key={`testim-${testimonial.id}`} 
                            className={`testimonial ${t === isActive ? 'show' : ''}`}>
                            <p>{testimonial.text}</p>

                            <p className="person"><em>{testimonial.person}</em></p>
                        </div>
                    ))}

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