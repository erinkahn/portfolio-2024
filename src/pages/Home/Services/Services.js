import { useRef } from 'react';
import SectionWrapper from '../../../components/SectionWrapper';
import Typewriter from "./Typewriter";
import { servicesData } from '../../../constants/data';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

export default function Services() {
    const iref = useRef();
    const { isVisible } = useIntersectionObserver(iref);

    return (  
        <SectionWrapper>
            <Typewriter />
            <div className="services-container">
                {servicesData.services.map((service, i) => (
                    <div 
                        key={`service-${i}`} 
                        className={`service ${isVisible ? 'fade-in-up' : 'fade-out-down'}`}
                    >
                        <div className="service-img-container" ref={iref}>
                            <img 
                                src={service.icon} 
                                alt={service.alt} 
                                width={48} 
                                height={48}
                            />
                        </div>
                        <h3>{service.serviceTitle}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    )
};

