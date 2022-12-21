import React, {useState} from 'react';
import SectionWrapper from "../../../components/SectionWrapper";
import { featuredData } from '../../../constants/data';
import FeaturedImage from './FeaturedImage';

export default function Featured() {
    const [isActive, setIsActive] = useState(0);

    return (
        <SectionWrapper>
            <div className="featured-container" id="featured" aria-label="carousel">
                <div className="title-carousel-wrapper">            
                    <div className="slide-title">
                        <h4 className="section-title">
                            {featuredData.sectionTitle}
                            {featuredData.featured.map((featNum, n) => (
                                <span 
                                    key={`slide-${n}`} 
                                    className={`slide-num ${n === isActive ? 'active' : ''}`}>
                                    <span className='sr-only'>slide number</span>
                                    {featNum.slideNum}
                                </span>
                            ))}
                        </h4>
                    </div>

                    <div className="btns-container" role="tablist">
                        {featuredData.featured.map((featuredBtn, b) => (
                            <button 
                                key={`btn-${b}`} 
                                className={`pager-btn ${b === isActive ? 'active' : ''}`}
                                aria-label={`Navigate to slide ${b}`}
                                aria-controls={`panel${(featuredBtn.client).replaceAll(" ", "")}`}
                                aria-current={b === isActive ? true : false}
                                role="tab"
                                id={featuredBtn.client}
                                onClick={(e) => {
                                    setIsActive(b)
                                }}>
                            </button>
                        ))}
                    </div>
                </div> 

                <div className="slide-images">
                    <div className="image-container">                          
                        <FeaturedImage featuredData={featuredData} isActive={isActive} />                          
                    </div>
                </div>

                <div className="content-container">
                    {featuredData.featured.map((content, c) => (
                        <div 
                            className={`content ${c === isActive ? 'active' : ''}`} 
                            key={`content-${c}`}
                            aria-current={c === isActive ? true : false}
                            aria-hidden={c === isActive ? false : true}
                            aria-label={`content ${c+1} of 4`}
                            aria-labelledby={content.client}
                            role="tabpanel"
                            id={`panel${(content.client).replaceAll(" ", "")}`}
                        >
                            <h5>{content.client}</h5>
                            <p><span>Stack:</span> {content.tech}</p>
                            <p>{content.content}</p>
                            <p><span>My Role:</span> {content.role}</p>
                            <p><span>Co-Developers:</span> {content.devs}</p>
                        </div>
                    ))}
                    {featuredData.featured.map((content, l) => (
                        <a 
                            className={`site-link ${l === isActive ? 'active' : ''}`}
                            href={content.url} 
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Live Site
                        </a>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}