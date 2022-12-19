import { useRef } from 'react';
import useImageOnLoad from '../../../hooks/useImageOnLoad';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import {isWebpSupported} from 'react-image-webp/dist/utils';

export default function AboutImage(props) {
    const { handleImageOnLoad, imageStyles, lowResStyle, highResStyle } = useImageOnLoad();
    const imageRef = useRef();
    const { isVisible } = useIntersectionObserver(imageRef);

    return (
        <div 
            className="img-wrapper"
            style={imageStyles.wrapper} 
            ref={imageRef}
        >
            <img 
                loading="lazy"
                className="about-img" 
                src={isWebpSupported ? props.aboutProp.src : props.aboutProp.lowRes} 
                alt={props.aboutProp.alt} 
                width="250" 
                height="255"
                style={lowResStyle}
            />
            {isVisible && 
                <img 
                    loading="lazy"
                    className="about-img" 
                    src={isWebpSupported ? props.aboutProp.src : props.aboutProp.fallback} 
                    alt={props.aboutProp.alt} 
                    width="350" 
                    height="355"
                    style={highResStyle}
                    onLoad={handleImageOnLoad}
                />
            }
        </div> 
    )
}