"use client";
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface WindowState {
  [key: string]: {
    zIndex: number;
    isVisible: boolean;
  };
}

interface WindowContextType {
  windowState: WindowState;
  showWindow: (id: string) => void;
  hideWindow: (id: string) => void;
  bringToFront: (id: string) => void;
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

export const WindowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [windowState, setWindowState] = useState<WindowState>({});

  const showWindow = (id: string) => {
    setWindowState(prev => ({
      ...prev,
      [id]: { 
        zIndex: prev[id]?.zIndex ?? 0,
        isVisible: true 
      },
    }));
    bringToFront(id);
  };

  const hideWindow = (id: string) => {
    setWindowState(prev => ({
      ...prev,
      [id]: { 
        zIndex: prev[id]?.zIndex ?? 0,
        isVisible: false 
      },
    }));
  };

  const bringToFront = (id: string) => {
    const highestZIndex = Math.max(...Object.values(windowState).map(w => w.zIndex), 0);
    setWindowState(prev => ({
      ...prev,
      [id]: { 
        zIndex: highestZIndex + 1,
        isVisible: prev[id]?.isVisible ?? true
      },
    }));
  };

  return (
    <WindowContext.Provider value={{ windowState, showWindow, hideWindow, bringToFront }}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowContext = () => {
  const context = useContext(WindowContext);
  if (context === undefined) {
    throw new Error('useWindowContext must be used within a WindowProvider');
  }
  return context;
};
