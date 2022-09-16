import { useEffect, useLayoutEffect, useState } from 'react'

export default function useLockBodyScroll() {
    const [locked, setLocked] = useState(false);

    useLayoutEffect(() => {
        if (!locked) {
            return
        }
        const originalOverflow = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = originalOverflow;
    }, [locked]); 


    useEffect(() => {
        if (locked) {
            setLocked(true)
        }
    }, [locked])

    return [locked, setLocked];
}
