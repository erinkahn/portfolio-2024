import React, {useRef, useState} from 'react';
import SectionWrapper from '../../components/SectionWrapper';
import {testimonialData} from '../../constants/data';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function Testimonials() {
    const [isActive, setIsActive] = useState(0);
    const titleRef = useRef();
    const { isVisible } = useIntersectionObserver(titleRef);

    return (
        <SectionWrapper>
            <div className={`testimonials-container ${isVisible ? 'animate' : ''}`} id="testimonials">
                <div className="inner-wrap" ref={titleRef}>
                    <h5 className="section-title">{testimonialData.sectionTitle}</h5>
                    {testimonialData.testimonials.map((testimonial, t) => (
                        <div 
                            aria-hidden={t === 0 ? false : true} 
                            aria-label={`testimonial ${t+1} of 3`}
                            aria-labelledby={testimonial.id}
                            id={`testimonial${testimonial.id}`}
                            key={`testim-${testimonial.id}`} 
                            className={`testimonial ${t === isActive ? 'show' : ''}`}>
                            <p>{testimonial.text}</p>

                            <p className="person"><em>{testimonial.person}</em></p>
                        </div>
                    ))}

                    <div className="btns-container" role="tablist">
                        {testimonialData.testimonials.map((testiBtn, s) => (
                            <button 
                                onClick={(e) => {
                                    setIsActive(s)
                                }} 
                                key={`btn-${s}`} 
                                role="tab"
                                id={testiBtn.id}
                                aria-controls={`testimonial${testiBtn.id}`}
                                aria-label={`Navigate to testimonial ${s}`}
                                aria-selected={s === isActive ? true : false}
                                className={`testimonial-btn ${s === isActive ? 'active' : ''} ${isVisible ? 'fade-in-up' : 'fade-out-down'}`}>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}