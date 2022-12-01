import SectionWrapper from "../Global/SectionWrapper";
import { featuredData } from "../../constants/data";

export default function Featured() {
    return (
        <SectionWrapper>
            <div className="featured-container">
                <div className="inner-wrap">
                    <div className="col text">
                        <h4 className="section-title">{featuredData.sectionTitle}</h4>

                        <div className="content-container">
                            {featuredData.featured.map((project, p) => (<>
                                <h5>{project.client}</h5>
                                <p>{project.tech}</p>
                                <p>{project.content}</p>
                                <p>{project.role}</p>
                                
                                <a className="site-link" href={project.url} target="_blank">View Live Site</a>
                            </>))}
                        </div>
                    </div>
                    <div className="col img">
                        {featuredData.featured.map((project, p) => (
                            <img
                                key={`project-${p}`}
                                src={project.url} 
                                alt={project.alt} 
                                width="851"
                                height="1085"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}