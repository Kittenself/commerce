"use client"
import React, { useEffect, useRef, useState } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|;:,.<>?';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isInitialAnimationRunning, setIsInitialAnimationRunning] = useState(true);
  const animationRef = useRef<number | null>(null);

  const runAnimation = (isInitial: boolean = false) => {
    const animate = () => {
      setDisplayText(prevText =>
        prevText
          .split('')
          .map((_, index) => {
            if (isInitial || isHovering) {
              return characters[Math.floor(Math.random() * characters.length)];
            }
            return text[index];
          })
          .join('')
      );

      if (isInitial || isHovering) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isInitialAnimationRunning) {
      runAnimation(true);
      const timer = setTimeout(() => {
        setIsInitialAnimationRunning(false);
        setDisplayText(text);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      }, 2000); // Run initial animation for 20 seconds

      return () => {
        clearTimeout(timer);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [isInitialAnimationRunning]);

  useEffect(() => {
    if (isHovering && !isInitialAnimationRunning) {
      runAnimation();
    } else if (!isInitialAnimationRunning) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setDisplayText(text);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [text, isHovering, isInitialAnimationRunning]);

  return (
    <span
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
    </span>
  );
};

export { AnimatedText };

