import { useRef, Suspense } from 'react';
import useImageOnLoad from '../../../hooks/useImageOnLoad';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import {isWebpSupported} from 'react-image-webp/dist/utils';

export default function FeaturedImage(props) {
    const { handleImageOnLoad, imageStyles, lowResStyle, highResStyle } = useImageOnLoad();
    const imageRef = useRef();
    const { isVisible } = useIntersectionObserver(imageRef);

    return (<>

    {/* may need to use srcset here */}

        {props.featuredData.featured.map((project, p) => (
            <Suspense 
                key={`featured-${p}`} 
                fallback={<div>Loading images...</div>}
            >
                <div 
                    className={`img-wrapper ${props.isActive === p  ? 'show' : ''}`}
                    style={imageStyles.wrapper} 
                    ref={imageRef}
                >
                    <img 
                        loading="lazy"
                        className="about-img" 
                        src={isWebpSupported ? project.src : project.lowRes} 
                        alt={project.alt} 
                        width="609" 
                        height="792"
                        style={lowResStyle}
                    />
                    {isVisible && 
                        <img 
                            loading="lazy"
                            className="about-img" 
                            src={isWebpSupported ? project.src : project.fallback} 
                            alt={project.alt} 
                            width="709" 
                            height="892"
                            style={highResStyle}
                            onLoad={handleImageOnLoad}
                        />
                    }
                </div> 
            </Suspense>
        ))}
    </>)
}