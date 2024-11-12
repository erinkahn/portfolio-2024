import { useRef } from "react";
import SectionWrapper from "../../components/SectionWrapper";
import { timelineData } from "../../constants/data";
import {motion as m} from 'framer-motion';

export default function Timeline() {
    const dateRef = useRef();

    return (
        <SectionWrapper>
            <div className="timeline-container">
                <ul className="inner-wrapper">
                    {timelineData.years.map((date, d) => (
                        <m.li 
                            ref={dateRef}
                            key={`date-${d}`}
                            initial={{ opacity: 0, Y: 0 }}
                            whileInView={{ opacity: 1, y: '100%' }}
                            transition={{transition: .25, ease: "easeInOut", delay: .1}}
                        >
                            <h2 className="year">{date.year}</h2>

                            {date.url ? (
                                <a 
                                    className="link" 
                                    href={date.url} 
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className="company">{date.company}</p>
                                </a>
                            ) : (
                                <p className="company">{date.company}</p>
                            )}
                            <p className="title"><em>{date.position}</em></p>
                            <p className="summary">{date.summary}</p>
                        </m.li>
                    ))}
                </ul>
                <div className="img-wrapper">
                    <img width="130px" height="504px" src="../../images/timeline/grad.png" alt="graduate student"/>
                    <img width="130px" height="504px" src="../../images/timeline/cert.png" alt="certification"/>
                    <img width="130px" height="504px" src="../../images/timeline/headshot.png" alt="headshot"/>
                    <img width="130px" height="504px" src="../../images/timeline/code.png" alt="code"/>
                </div>
            </div>
        </SectionWrapper>
    )
}