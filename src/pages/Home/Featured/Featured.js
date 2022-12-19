import React, {useState} from 'react';
import SectionWrapper from "../../../components/SectionWrapper";
import { featuredData } from '../../../constants/data';
import FeaturedImage from './FeaturedImage';

export default function Featured() {
    const [isActive, setIsActive] = useState(0);

    return (
        <SectionWrapper>
            <div className="featured-container" id="featured">
                <div className="inner-wrap">
                    <div className="col text">
                        <h4 className="section-title">
                            {featuredData.sectionTitle}
                            {featuredData.featured.map((featNum, n) => (
                                <span 
                                    key={`slide-${n}`} 
                                    className={`slide-num ${n === isActive ? 'active' : ''}`}>
                                    {featNum.slideNum}
                                </span>
                            ))}
                        </h4>
                    </div>

                    <div className="btns-container">
                        {featuredData.featured.map((featuredBtn, b) => (
                            <button 
                                onClick={(e) => {
                                    setIsActive(b)
                                }} 
                                key={`btn-${b}`} 
                                role="tab"
                                id={featuredBtn.id}
                                aria-label={`Navigate to slide ${b}`}
                                aria-controls={`${featuredBtn.client}-tab`}
                                aria-selected={b === isActive ? true : false}
                                className={`featured-btn ${b === isActive ? 'active' : ''}`}>
                            </button>
                        ))}
                    </div>

                    <div className="col right">
                        <div className="image-container">                          
                            <FeaturedImage featuredData={featuredData} isActive={isActive} />                          
                        </div>
                    </div>
                </div>

                <div className="content-container">
                    {featuredData.featured.map((content, c) => (
                        <div 
                            className={`content ${c === isActive ? 'active' : ''}`} 
                            key={`content-${c}`}
                            aria-hidden={c === isActive ? false : true}
                        >
                            <h5>{content.client}</h5>
                            <p><span>Stack:</span> {content.tech}</p>
                            <p>{content.content}</p>
                            <p><span>My Role:</span> {content.role}</p>
                            <p><span>Co-Developers:</span> {content.devs}</p>
                            
                            <a 
                                className={`site-link ${c === isActive ? 'active' : ''}`}
                                href={content.url} 
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Live Site
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}