import { useState, useLayoutEffect, createRef } from "react";

const useDimensions = () => {
    const [dimensions, setDimensions] = useState({});
    const newRef = createRef();

    useLayoutEffect(() => {
        const getDimensions = () => {
            setDimensions(newRef.current.getBoundingClientRect().toJSON());
        }
        window.addEventListener("resize", getDimensions);
        return () => window.removeEventListener("resize", getDimensions);
    }, [newRef.current]);

    return [ dimensions, newRef ];
}

export default useDimensions;