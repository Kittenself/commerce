import React, { useRef } from 'react';
import { Rnd } from 'react-rnd';
import styles from 'Windows31.module.css';

interface WindowProps {
  windowId: string;
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Window: React.FC<WindowProps> = ({ windowId, title, children, style }) => {
  const rndRef = useRef(null);

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
      dragHandleClassName={`.${styles.windowHeader}`}
      className={`window ${styles.window}`}
      style={{ zIndex: 1, ...style }}
    >
      <div className={styles.windowHeader}>
        <div className={styles.windowClose}></div>
        <div className={styles.windowTitle}>{title}</div>
      </div>
      <div className={styles.windowInner}>{children}</div>
    </Rnd>
  );
};

const SampleWindow = () => {
  return (
    <Window windowId="sampleWindow" title="Sample Window">
      <div>
        <p>This is a sample window content.</p>
        <button onClick={() => alert('Hello!')}>Click Me</button>
      </div>
    </Window>
  );
};

export default SampleWindow;