import { useRef } from 'react';
import useImageOnLoad from '../../hooks/useImageOnLoad';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import {isWebpSupported} from 'react-image-webp/dist/utils';

export default function StatImage(props) {
    const { handleImageOnLoad, imageStyles, lowResStyle, highResStyle } = useImageOnLoad();
    const imageRef = useRef();
    const { isVisible } = useIntersectionObserver(imageRef);

    return (
        <>
            {props.statProp.img.map((img, s) => (
                <div key={`img-${s}`} 
                    className={`img-wrapper wrap-${s}`}
                    style={imageStyles.wrapper} 
                    ref={imageRef}
                >
                    <img 
                        loading="lazy"
                        className="stat-img" 
                        src={isWebpSupported ? img.src : img.lowRes} 
                        alt={img.alt} 
                        width="370" 
                        height="458"
                        style={lowResStyle}
                    />
                    {isVisible && 
                        <img 
                            loading="lazy"
                            className="stat-img" 
                            src={isWebpSupported ? img.src : img.fallback} 
                            alt={img.alt} 
                            width="470" 
                            height="558"
                            style={highResStyle}
                            onLoad={handleImageOnLoad}
                        />
                    }
                </div> 
            ))}
        </>
    )
}