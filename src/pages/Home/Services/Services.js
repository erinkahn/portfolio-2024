import { useRef } from "react";
import SectionWrapper from "../../../components/SectionWrapper";
// import Typewriter from "./Typewriter";
import { servicesData } from "../../../constants/data";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

export default function Services() {
  const iref = useRef();
  const { isVisible } = useIntersectionObserver(iref);

  return (
    <SectionWrapper sectionid="1">
      {/* <Typewriter /> */}
      <div className="services-container" id="services">
        {servicesData.services.map((service, i) => (
          <div
            key={`service-${i}`}
            className={`service ${isVisible ? "fade-in-up" : "fade-out-down"}`}
          >
            <div className="service-img-container" ref={iref}>
              {service.icon}
            </div>
            <h3>{service.serviceTitle}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
