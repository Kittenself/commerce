"use client";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { WindowProvider } from 'windows/windowcontext';
import styles from './explore.module.css';

const WindowContent = dynamic(() => import('components/WindowContent'), { ssr: false });
const PageTransition = dynamic(() => import('components/PageTransition'), {
  ssr: false
});

export default function ExplorePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleTransitionComplete = () => {
    if (isLoading) {
      setIsLoading(false);
    } else if (isTransitioning) {
      setIsTransitioning(false);
      isTransitioningRef.current = false;
    }
  };

  return (
    <div className={styles.pageContainer} onScroll={handleScroll}>
      <div style={{ visibility: isLoading || isTransitioning ? 'hidden' : 'visible' }}>
        {/* Windows Interface Section */}
        <section className={styles.windowsSection}>
          <WindowProvider>
            <div className={styles.windowsContainer}>
              <WindowContent />
            </div>
          </WindowProvider>
        </section>
        
        {/* Pixelated Game Section */}
        <section className={styles.gameSection}>
          <div className={styles.gameContent}>
            <div className={styles.gamePreview}>
              <Image 
                src="/pictures/b9BHV.png" 
                alt="Game Preview"
                width={300}
                height={300}
                className={styles.pixelImage}
              />
              <Image 
                src="/pictures/idkyete.png"
                alt="Game Preview 2"
                width={300}
                height={300}
                className={styles.pixelImage}
              />
            </div>
            <div className={styles.gameText}>
              <h2>Modamosaic</h2>
              <ul>
                <li>MEOW MEOW MEOW</li>
                <li>MEOW MEOW MEOWMEOW MEOW MEOWMEOW MEOW MEOWMEOW MEOW MEOWMEOW MEOW MEOW</li>
                <li>MEOW MEOW MEOWMEOW MEOW MEOWMEOW MEOW MEOWMEOW MEOW MEOW</li>
                <li>meows</li>
              </ul>
              <p>meowdy!!</p>
            </div>
          </div>
        </section>

        {/* Third Section */}
        <section className={styles.thirdSection}>
        </section>
      </div>
      
      {(isLoading || isTransitioning) && (
        <PageTransition 
          isCollapsing={isTransitioning}
          onTransitionComplete={handleTransitionComplete}
        />
      )}
    </div>
  );
}
