import React, {lazy, Suspense} from 'react';
import SectionWrapper from '../Global/SectionWrapper';
import { aboutData } from '../../constants/data';
const AboutImage = lazy(() => import('./AboutImage'));

export default function About() {
    return (
        <SectionWrapper>
            <div className="about-container" id="about">
                <div className="col text">
                    <h5 className="section-title">{aboutData.sectionTitle}</h5>
                    <p>{aboutData.content}</p>
                    <p>{aboutData.content2}</p>
                </div>
                <div className="col right">
                    <div className="image-container">
                        <Suspense fallback={<div>Loading images...</div>}>
                            <AboutImage aboutProp={aboutData.img} />
                        </Suspense>    
                    </div> 
                </div>        
            </div>
        </SectionWrapper>
    )
}