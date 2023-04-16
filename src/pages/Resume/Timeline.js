import { useRef } from "react";
import SectionWrapper from "../../components/SectionWrapper";
import { timelineData } from "../../constants/data";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function Timeline() {
    const dateRef = useRef();
    const { isVisible } = useIntersectionObserver(dateRef);

    return (
        <SectionWrapper>
            <div className="timeline-container">
                <ul className="inner-wrapper" ref={dateRef}>
                    {timelineData.years.map((date, d) => (
                        <li 
                            key={`date-${d}`}
                            className={isVisible ? 'fade-in' : 'fade-out'}
                        >
                            <h2 className="year">{date.year}</h2>
                            <p className="company">{date.company}</p>
                            <p className="title"><em>{date.position}</em></p>
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    )
}