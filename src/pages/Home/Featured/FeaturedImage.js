import { useRef, Suspense } from 'react';
import useImageOnLoad from '../../../hooks/useImageOnLoad';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import {isWebpSupported} from 'react-image-webp/dist/utils';

export default function FeaturedImage(props) {
    const { handleImageOnLoad, imageStyles, lowResStyle, highResStyle } = useImageOnLoad();
    const imageRef = useRef();
    const { isVisible } = useIntersectionObserver(imageRef);

    return (<>
        {props.featuredData.featured.map((project, p) => (
            <Suspense 
                key={`featured-${p}`} 
                fallback={<div>Loading images...</div>}
            >
                <div 
                    className={`img-wrapper ${props.isActive === p  ? 'show' : ''}`}
                    style={imageStyles.wrapper} 
                    ref={imageRef}
                    aria-current={p === props.isActive ? true : false}
                    aria-hidden={p === props.isActive ? false : true}
                    aria-label={`image ${p+1} of 4`}
                    aria-labelledby={project.client}
                    role="tabpanel"
                >
                    <img 
                        loading="lazy"
                        className="ft-img" 
                        src={isWebpSupported ? project.src : project.lowRes} 
                        alt={project.alt} 
                        width="609" 
                        height="792"
                        style={lowResStyle}
                    />
                    {/* {isVisible &&  */}
                        <img 
                            loading="lazy"
                            className="ft-img" 
                            src={isWebpSupported ? project.src : project.fallback} 
                            alt={project.alt} 
                            width="709" 
                            height="892"
                            style={highResStyle}
                            onLoad={handleImageOnLoad}
                        />
                    {/* } */}
                </div> 
            </Suspense>
        ))}
    </>)
}