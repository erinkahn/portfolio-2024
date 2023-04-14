import SectionWrapper from "../../components/SectionWrapper";
import { timelineData } from "../../constants/data";

export default function Timeline() {
    return (
        <SectionWrapper>
            <div className="timeline-container">
                <ul className="inner-wrapper">
                    {timelineData.years.map((date, d) => (
                        <li key={`date-${d}`}>
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