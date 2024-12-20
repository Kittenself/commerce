"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Rnd, RndDragCallback, RndResizeCallback } from 'react-rnd';
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
  const rndRef = useRef<Rnd>(null);
  const { windowState, bringToFront, hideWindow } = useWindowContext();
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState(startPosition);
  const [size, setSize] = useState(startSize);

  useEffect(() => {
    if (!windowState[windowId]) {
      bringToFront(windowId);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const checkBounds = () => {
      const rndCurrent = rndRef.current;
      if (!rndCurrent) return;

      const parent = rndCurrent.getParent();
      const selfElement = rndCurrent.getSelfElement();
      
      if (!parent || !selfElement) return;

      const parentRect = parent.getBoundingClientRect();
      const windowRect = selfElement.getBoundingClientRect();

      let newX = position.x;
      let newY = position.y;

      if (newX < 0) newX = 0;
      if (newY < 0) newY = 0;
      if (newX + windowRect.width > parentRect.width) {
        newX = parentRect.width - windowRect.width;
      }
      if (newY + windowRect.height > parentRect.height) {
        newY = parentRect.height - windowRect.height;
      }

      if (newX !== position.x || newY !== position.y) {
        setPosition({ x: newX, y: newY });
      }
    };

    checkMobile();
    checkBounds();
    
    const handleResize = () => {
      checkMobile();
      checkBounds();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowId, bringToFront, windowState, position]);

  const handleMouseDown = useCallback(() => {
    bringToFront(windowId);
  }, [bringToFront, windowId]);

  const handleDragStop: RndDragCallback = useCallback((_e, d) => {
    setPosition({ x: d.x, y: d.y });
    bringToFront(windowId);
  }, [bringToFront, windowId]);

  const handleResize: RndResizeCallback = useCallback((_e, _direction, ref, _delta, position) => {
    setSize({ width: ref.style.width, height: ref.style.height });
    setPosition(position);
  }, []);

  const handleCloseClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    hideWindow(windowId);
  }, [hideWindow, windowId]);

  return (
    <Rnd
      ref={rndRef}
      default={{
        x: startPosition.x,
        y: startPosition.y,
        width: startSize.width,
        height: startSize.height,
      }}
      position={position}
      size={size}
      bounds="parent"
      dragHandleClassName={styles.windowHeader}
      className={`window ${styles.window} ${windowState[windowId]?.zIndex === Math.max(...Object.values(windowState).map(w => w.zIndex)) ? styles.selectedWindow : ''}`}
      style={{ 
        zIndex: windowState[windowId]?.zIndex || 1, 
        ...style,
        visibility: windowState[windowId]?.isVisible ? 'visible' : 'hidden',
      }}
      onMouseDown={handleMouseDown}
      onDragStop={handleDragStop}
      onResize={handleResize}
      disableDragging={isMobile}
      enableResizing={!isMobile}
    >
      <div className={styles.windowHeader}>
        <div className={styles.windowClose} onDoubleClick={handleCloseClick}></div>
        <div className={styles.windowTitle}>{title}</div>
      </div>
      <div className={styles.windowContent} style={{ height: 'calc(100% - 24px)', overflow: 'auto' }}>
        {children}
      </div>
    </Rnd>
  );
};

export default Window;
