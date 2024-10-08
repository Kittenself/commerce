

"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import styles from './Windows31.module.css';
import { useWindowContext } from './windowcontext';

interface WindowProps {
  windowId: string;
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  startPosition?: { x: number; y: number };
  startSize?: { width: number | string; height: number | string };
}

const Window: React.FC<WindowProps> = ({ 
  windowId, 
  title, 
  children, 
  style, 
  startPosition = { x: 100, y: 100 },
  startSize = { width: 500, height: 'auto' }
}) => {
  const rndRef = useRef(null);
  const { windowState, bringToFront, hideWindow } = useWindowContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!windowState[windowId]) {
      bringToFront(windowId);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [windowId, bringToFront, windowState]);

  const handleMouseDown = () => {
    bringToFront(windowId);
  };

  const handleCloseClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    hideWindow(windowId);
  };

  if (!windowState[windowId]?.isVisible) {
    return null;
  }

  return (
    <Rnd
      ref={rndRef}
      default={{
        x: startPosition.x,
        y: startPosition.y,
        width: startSize.width,
        height: startSize.height,
      }}
      bounds="parent"
      dragHandleClassName={styles.windowHeader}
      className={`window ${styles.window} ${windowState[windowId]?.zIndex === Math.max(...Object.values(windowState).map(w => w.zIndex)) ? styles.selectedWindow : ''}`}
      style={{ 
        zIndex: windowState[windowId]?.zIndex || 1, 
        ...style,
        ...(isMobile ? { width: '100%', height: '100%', position: 'fixed', top: 0, left: 0 } : {})
      }}
      onMouseDown={handleMouseDown}
      disableDragging={isMobile}
      enableResizing={!isMobile}
    >
      <div className={styles.windowHeader}>
        <div className={styles.windowClose} onDoubleClick={handleCloseClick}></div>
        <div className={styles.windowTitle}>{title}</div>
      </div>
      <div className={styles.windowInner}>{children}</div>
    </Rnd>
  );
};

export default Window;
