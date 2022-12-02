import { useRef } from 'react';
import useImageOnLoad from '../../hooks/useImageOnLoad';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import {isWebpSupported} from 'react-image-webp/dist/utils';

export default function InstaPost({instaProp}) {
    const { handleImageOnLoad, imageStyles, lowResStyle, highResStyle } = useImageOnLoad();
    const imageRef = useRef();
    const { isVisible } = useIntersectionObserver(imageRef);

    return (<>
        {instaProp.posts.map((image, i) => (
            <li key={`post-${i}`} style={{backgroundImage: image.img}} className="insta-post">
                <a href={`http://instagram.com/${instaProp.username}`}        
                    target="_blank" 
                    rel="noreferrer"
                    className="img-link icon instagram"
                    style={imageStyles.wrapper} ref={imageRef}>
                        
                    <img 
                        loading="lazy" 
                        className="img-post" 
                        src={isWebpSupported() ? image.img : image.fallback} 
                        alt={image.alt} 
                        width="188" 
                        height="189" 
                        style={lowResStyle}
                    />

                    {isVisible && 
                        <img 
                            onLoad={handleImageOnLoad} 
                            loading="lazy" 
                            className="img-post" 
                            src={isWebpSupported() ? image.img : image.fallback} 
                            alt={image.alt} 
                            width="288" 
                            height="289" 
                            style={highResStyle}
                        />
                    }
                </a>   
            </li>
        ))}
    </>)
}