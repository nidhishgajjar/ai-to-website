import React, { useState, useEffect } from 'react';

const TypingText = ({ texts }) => {
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        let i = -1;
        if (isTyping) {
            setText('');
            const typing = setInterval(() => {
                if (i < texts[textIndex].length - 1) {
                    i++;
                    setText((prevText) => prevText + texts[textIndex][i]);
                } else {
                    setIsTyping(false);
                    clearInterval(typing);
                }
            }, 100);
            return () => clearInterval(typing);
        } else {
            const erasing = setInterval(() => {
                if (i >= 0) {
                    setText((prevText) => prevText.slice(0, -1));
                    i--;
                } else {
                    setIsTyping(true);
                    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                    clearInterval(erasing);
                }
            }, 1500);
            return () => clearInterval(erasing);
        }
    }, [isTyping, textIndex, texts]);

    return (
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 text-shadow tracking-wide leading-snug">
            {text}
        </h1>
    );
}

export default TypingText;