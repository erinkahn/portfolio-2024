import { Suspense } from 'react';

export default function FeaturedImage(props) {
    return (<>
        {props.featuredData.featured.map((project, p) => (
            <Suspense 
                key={`featured-${p}`} 
                fallback={<div>Loading images...</div>}
            >
                <div 
                    className={`img-wrapper ${props.isActive === p  ? 'show' : ''}`}
                    aria-current={p === props.isActive ? true : false}
                    aria-hidden={p === props.isActive ? false : true}
                    aria-label={`image ${p+1} of 4`}
                    aria-labelledby={project.client}
                    role="tabpanel"
                >
                    <img 
                        loading="lazy"
                        className="ft-img" 
                        src={project.mobile} 
                        width={974}
                        height={1299}
                        srcSet={`${project.mobile} 300w, ${project.tablet} 768w, ${project.desktop} 1280w`} 
                        alt={project.alt}
                    />
                </div> 
            </Suspense>
        ))}
    </>)
}