"use client";
import React, { useEffect, useRef } from 'react';
import { Rnd } from 'react-rnd';
import styles from './Windows31.module.css';
import { useWindowContext } from './windowcontext';

interface WindowProps {
  windowId: string;
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Window: React.FC<WindowProps> = ({ windowId, title, children, style }) => {
  const rndRef = useRef(null);
  const { windowState, bringToFront, hideWindow } = useWindowContext();

  useEffect(() => {
    if (!windowState[windowId]) {
      bringToFront(windowId);
    }
  }, [windowId, bringToFront, windowState]);

  const handleMouseDown = () => {
    bringToFront(windowId);
  };

  const handleCloseClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the click from bubbling up
    hideWindow(windowId);
  };

  if (!windowState[windowId]?.isVisible) {
    return null;
  }

  return (
    <Rnd
      ref={rndRef}
      default={{
        x: 100,
        y: 100,
        width: 500,
        height: 'auto',
      }}
      bounds="parent"
      dragHandleClassName={styles.windowHeader} // Ensure this matches the CSS class
      className={`window ${styles.window} ${windowState[windowId]?.zIndex === Math.max(...Object.values(windowState).map(w => w.zIndex)) ? styles.selectedWindow : ''}`}
      style={{ zIndex: windowState[windowId]?.zIndex || 1, ...style }}
      onMouseDown={handleMouseDown}
    >
      <div className={styles.windowHeader}>
        <div className={styles.windowClose} onDoubleClick={handleCloseClick}></div> {/* Changed to onDoubleClick */}
        <div className={styles.windowTitle}>{title}</div>
      </div>
      <div className={styles.windowInner}>{children}</div>
    </Rnd>
  );
};

export default Window;

