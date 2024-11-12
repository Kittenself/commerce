'use client';

import { useEffect, useRef } from 'react';
import styles from './PageTransition.module.css';

interface PageTransitionProps {
  isCollapsing: boolean;
  onTransitionComplete: () => void;
}

export default function PageTransition({ isCollapsing, onTransitionComplete }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pixelSize = 20;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const cols = Math.ceil(width / pixelSize);
    const rows = Math.ceil(height / pixelSize);
    const centerX = width / 2;
    const centerY = height / 2;

    // Create pixel grid
    const pixels: HTMLDivElement[] = [];
    
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const pixel = document.createElement('div');
        const posX = x * pixelSize;
        const posY = y * pixelSize;

        // Calculate distance from center for color variation
        const distanceFromCenter = Math.sqrt(
          Math.pow((posX - centerX) / width, 2) + 
          Math.pow((posY - centerY) / height, 2)
        );

        // Create a gradient effect
        const brightness = Math.floor((1 - distanceFromCenter) * 255);
        
        pixel.style.cssText = `
          position: absolute;
          left: ${posX}px;
          top: ${posY}px;
          width: ${pixelSize}px;
          height: ${pixelSize}px;
          background-color: rgb(${brightness}, ${brightness}, ${brightness});
          transform-origin: center;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${Math.random() * 300}ms;
        `;

        container.appendChild(pixel);
        pixels.push(pixel);
      }
    }

    // Trigger animation after a short delay
    requestAnimationFrame(() => {
      pixels.forEach((pixel) => {
        const rect = pixel.getBoundingClientRect();
        if (isCollapsing) {
          pixel.style.transform = `translate(${centerX - rect.left - pixelSize/2}px, ${centerY - rect.top - pixelSize/2}px) scale(0)`;
        } else {
          pixel.style.transform = 'translate(0, 0) scale(1)';
        }
      });
    });

    // Cleanup after animation
    const timer = setTimeout(() => {
      onTransitionComplete();
    }, 1000);

    return () => {
      clearTimeout(timer);
      container.innerHTML = '';
    };
  }, [isCollapsing, onTransitionComplete]);

  return <div ref={containerRef} className={styles.transitionContainer} />;
} 