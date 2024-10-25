"use client";

import { mediaContents } from 'app/explore/mediaContent';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Window from 'windows/windows';

const WindowContent: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  if (!isClient) {
    return null; // or a loading indicator
  }

  return (
    <>
      {mediaContents.map((content) => (
        <Window
          key={content.id}
          windowId={content.id}
          title={content.title}
          startPosition={content.initialPosition}
          startSize={content.initialSize}
        >
          {content.type === 'text' && <p>{content.content}</p>}
          {content.type === 'image' && !imageErrors[content.id] && (
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image 
                src={content.content} 
                alt={content.title} 
                layout="fill" 
                objectFit="contain"
                onError={() => handleImageError(content.id)}
              />
            </div>
          )}
          {content.type === 'gif' && !imageErrors[content.id] && (
            <img 
              src={content.content} 
              alt={content.title} 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              onError={() => handleImageError(content.id)}
            />
          )}
          {content.type === 'page' && (
            <iframe
              src={content.content}
              title={content.title}
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
          )}
          {content.type === 'youtube' && (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${content.content}`}
              title={content.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {imageErrors[content.id] && (
            <p>Error loading image. Please check the file path.</p>
          )}
        </Window>
      ))}
      {/* Debugging information */}
      <div style={{position: 'fixed', top: 0, right: 0, background: 'white', padding: '10px'}}>
        Windows rendered: {mediaContents.length}
      </div>
    </>
  );
};

export default WindowContent;
