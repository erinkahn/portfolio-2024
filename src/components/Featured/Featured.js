import React, {useState, lazy} from 'react';
import SectionWrapper from "../Global/SectionWrapper";
import { featuredData } from '../../constants/data';
// const FeaturedImage = lazy(() => import('./FeaturedImage'));
import FeaturedImage from './FeaturedImage';

export default function Featured() {
    const [isActive, setIsActive] = useState(0);

    return (
        <SectionWrapper>
            <div className="featured-container">
                <div className="inner-wrap">
                    <div className="col text">
                        <h4 className="section-title">{featuredData.sectionTitle}</h4>
                        <div className="content-container">
                            {featuredData.featured.map((content, c) => (
                                <div 
                                    className={c === isActive ? 'active' : ''} 
                                    key={`content-${content.id}`}
                                    aria-hidden={c === isActive ? false : true}
                                >
                                    <h5>{content.client}</h5>
                                    <p>{content.tech}</p>
                                    <p>{content.content}</p>
                                    <p>{content.role}</p>
                                    
                                    <a className="site-link" href={content.url} target="_blank">View Live Site</a>
                                </div>
                            ))}
                        </div>
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
            </div>
        </SectionWrapper>
    )
}