import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);
    }, [windowSize]); 

    return windowSize;
}

export default useWindowSize;

// use this in another component:

// import { useWindowSize } from "./useWindowSize";
// function App() {
//     const size = useWindowSize();
//     return (
//       <div>
//         {size.width}px / {size.height}px
//       </div>
//     );
//   }