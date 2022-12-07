import SectionWrapper from '../Global/SectionWrapper';
import Typewriter from "./Typewriter";
import { servicesData } from '../../constants/data';

export default function Services() {
    return (  
        <SectionWrapper>
            <Typewriter />
            <div className="services-container">
                {servicesData.services.map((service, i) => (
                    <div key={`service-${i}`} className="service">
                        <div className="service-img-container">
                            <img src={service.icon} alt={service.alt}/>
                        </div>
                        <h3>{service.serviceTitle}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    )
};

