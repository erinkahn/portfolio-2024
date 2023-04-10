import { useEffect, useLayoutEffect, useState } from 'react'

export default function useLockBodyScroll() {
    const [locked, setLocked] = useState(false);

    useLayoutEffect(() => {
        if (!locked) {
            return
        }
        const htmlDoc = document.documentElement;
        const originalOverflow = window.getComputedStyle(htmlDoc).overflow;
        htmlDoc.style.overflow = 'hidden';
        return () => {
            htmlDoc.style.overflow = originalOverflow;
        }
    }, [locked]); 


    useEffect(() => {
        if (locked) {
            setLocked(true)
        }
    }, [locked])

    return [locked, setLocked];
}
