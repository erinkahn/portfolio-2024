import React, {useState, useEffect} from 'react';

export default function ProgressBar() {
    const [ scrolled, setScrolled ] = useState(0);
    
    const handleProgressBar = (e) => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = `${totalScroll / windowHeight}`;
        setScrolled(scroll);      
        document.documentElement.style.setProperty('--scroll', scroll);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleProgressBar)

        return () => {
            window.removeEventListener('scroll', handleProgressBar)
        }
    }, [scrolled]) 

    return (
        <div className={`scroll-tracker ${scrolled > 0 ? 'scrolled' : ''}`}></div>
    )
}