"use client";

import React from 'react';
import Window from 'windows/windows';

const WindowContent: React.FC = () => {
  return (
    <>
      <Window windowId="sampleWindow" title="Sample Window">
        <div>
          <p>This is a sample window content.</p>
          <button onClick={() => alert('Hello!')}>Click Me</button>
        </div>
      </Window>

      <Window windowId="anotherWindow" title="Another Window"> {/* New window added */}
        <div>
          <p>This is another window content.</p>
          <button onClick={() => alert('Hello from another window!')}>Click Me Too</button>
        </div>
      </Window>
    </>
  );
};

export default WindowContent;
