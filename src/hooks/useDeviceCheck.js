import {useEffect, useState} from 'react';

const useDeviceCheck = () => {
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent;

        console.log(`user's device is: ${window.navigator.userAgent}`);

        const mobile = Boolean(
            userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
        );

        setMobile(mobile);
    }, [isMobile]);

    return { isMobile }
}

export default useDeviceCheck