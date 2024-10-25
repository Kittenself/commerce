"use client";
import React, { useCallback, useEffect, useRef } from 'react';
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
  const rndRef = useRef<Rnd>(null);
  const { windowState, bringToFront, hideWindow } = useWindowContext();

  useEffect(() => {
    if (!windowState[windowId]) {
      bringToFront(windowId);
    }
  }, [windowId, bringToFront, windowState]);

  const handleMouseDown = useCallback(() => {
    bringToFront(windowId);
  }, [bringToFront, windowId]);

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
      bounds="parent"
      dragHandleClassName={styles.windowHeader}
      className={`window ${styles.window} ${windowState[windowId]?.zIndex === Math.max(...Object.values(windowState).map(w => w.zIndex)) ? styles.selectedWindow : ''}`}
      style={{ 
        zIndex: windowState[windowId]?.zIndex || 1, 
        ...style,
        visibility: windowState[windowId]?.isVisible ? 'visible' : 'hidden',
      }}
      onMouseDown={handleMouseDown}
    >
      <div className={styles.windowHeader}>
        <div className={styles.windowClose} onDoubleClick={handleCloseClick}></div>
        <div className={styles.windowTitle}>{title}</div>
      </div>
      <div className={styles.windowContent}>
        {children}
      </div>
    </Rnd>
  );
};

export default Window;
