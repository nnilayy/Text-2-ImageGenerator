import React, { useEffect, useState } from 'react';

const TypingAnimation = ({ text, speed, onComplete }) => {
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let interval;
    if (text) {
      let i = 0;
      let prevText=""
      interval = setInterval(() => {
        prevText = prevText + text.charAt(i);
        setTypingText(prevText);
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setShowCursor(false);
          setTimeout(onComplete, 2000);
        }
      }, speed);
    }
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prevShowCursor => !prevShowCursor);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="typing-animation">
      <span className="typing-text">{typingText}</span>
      {showCursor && <span className="cursor">█</span>}
    </div>
  );
};

export default TypingAnimation;
