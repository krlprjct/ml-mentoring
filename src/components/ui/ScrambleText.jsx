import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CHARS = "-_~`!@#$%^&*()+=[]{}|;:,.<>?";

const ScrambleText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    let interval;
    let iteration = 0;
    
    // Задержка перед стартом
    const startDelay = setTimeout(() => {
        interval = setInterval(() => {
        setDisplayText(prev => 
            text
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                return text[index];
                }
                return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) { 
            clearInterval(interval);
        }
        
        iteration += 1 / 3; // Скорость расшифровки
        }, 30);
    }, 500);

    return () => {
        clearTimeout(startDelay);
        clearInterval(interval);
    }
  }, [text]);

  return (
    <motion.span className={className}>
      {displayText}
    </motion.span>
  );
};

export default ScrambleText;