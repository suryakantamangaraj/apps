import { useEffect, useState, useRef } from 'react';

const TypingHeading = ({ text, className, Element = 'h2', style = {} }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            let index = 0;
            const interval = setInterval(() => {
                setDisplayedText(text.slice(0, index + 1));
                index++;
                if (index > text.length) {
                    clearInterval(interval);
                }
            }, 50);

            return () => clearInterval(interval);
        } else {
            setDisplayedText('');
        }
    }, [isVisible, text]);

    return (
        <Element ref={elementRef} className={className} style={{ ...style, minHeight: '1.2em' }}>
            <span style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
                {isVisible ? displayedText : text}
            </span>
            {isVisible && displayedText.length < text.length && <span className="typing-cursor">&nbsp;</span>}
            {isVisible && displayedText.length === text.length && <span className="typing-cursor blinking">&nbsp;</span>}
        </Element>
    );
};

export default TypingHeading;
