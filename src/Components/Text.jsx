import React from "react";
import { useState, useEffect } from "react";
const TextChange = () => {
  const texts = [" I'm Karuna", " I'm Frontend Developer", " I'm Backend Developer"];
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true)
  useEffect(() => {
    const currentString = texts[textIndex];

    const interval = setInterval(() => {
      if (isTyping) {
        // Typing effect
        if (charIndex < currentString.length) {
          setCurrentText(currentString.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          // Pause before deleting
          setIsTyping(false);
          setTimeout(() => {}, 1000); // 1-second pause
        }
      } else {
        // Deleting effect
        if (charIndex > 0) {
          setCurrentText(currentString.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          // Move to next text
          setIsTyping(true);
          setTextIndex((prev) => (prev + 1) % texts.length); // Cycle texts
        }
      }
    }, 100); // Typing speed

    return () => clearInterval(interval);
  }, [charIndex, isTyping, textIndex]);

  return <div className="transition ease duration-300"> {currentText}
  <span className="animate-pulse">|</span>
  </div>;
};

export default TextChange;