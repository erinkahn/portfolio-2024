import { useState, useEffect } from 'react';
import {typewriterData} from '../../constants/data';

const words = typewriterData.typewriter;

export default function Typewriter() {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    // console.log(words)
    // when you get to this section, then start the animation....

    useEffect(() => {
        if (index === words.length - 1 && subIndex === words[index].length) {
            return;
        }
        if (
            subIndex === words[index].length + 1 && 
            index !== words.length - 1 && 
            !reverse 
        ) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 85 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);


    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 300);

        return () => clearTimeout(timeout2);
    }, []);

    return (
        <div className="typewriter-container">
            <h2 className="i-am section-title">I am a</h2>
            <h2 className="type-wrapper">
                <span className="type section-title">{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</span>
            </h2>
        </div>
    )
}