import { useState } from 'react'

const useImageOnLoad = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    const handleImageOnLoad = () => setIsLoaded(true)

    const transitionStyles = {
        lowRes: {
            opacity: isLoaded ? 0 : 1,
            filter: 'blur(2px)',
            transition: 'opacity 500ms ease-out 300ms',
        },
        highRes: {
            opacity: isLoaded ? 1 : 0.2,
            transition: 'opacity 500ms ease-in 300ms',
        },
    }

    const imageStyles = {
        wrapper: {
            position: 'relative',
            width: '100%',
            height: '0',
        },
        image: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectPosition: 'center 100%',
            objectFit: 'cover',
        },
    }

    const lowResStyle = {
        ...imageStyles.image,
        ...transitionStyles.lowRes,
    }
    
    const highResStyle = {
        ...imageStyles.image,
        ...transitionStyles.highRes,
    }

    return { handleImageOnLoad, imageStyles, lowResStyle, highResStyle }
}

export default useImageOnLoad