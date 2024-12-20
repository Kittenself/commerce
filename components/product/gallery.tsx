'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const getGridClass = (imageCount: number) => {
    if (imageCount === 1) return "grid-cols-1";
    if (imageCount === 2) return "grid-cols-1 md:grid-cols-2";
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <div className="w-full">
      <div className={`grid gap-4 ${getGridClass(images.length)}`}>
        {images.map((image, index) => (
          <div 
            key={image.src} 
            className={`relative group cursor-zoom-in ${images.length === 1 ? 'max-w-2xl mx-auto' : 'aspect-square'}`}
            onClick={() => setZoomedIndex(index)}
          >
            <Image
              src={image.src}
              alt={image.altText}
              width={1000}
              height={1000}
              className={`object-cover w-full h-full ${images.length > 1 ? 'aspect-square' : 'aspect-auto'}`}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <MagnifyingGlassIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

      {zoomedIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setZoomedIndex(null)}
        >
          <div className="relative w-full h-full max-w-4xl max-h-4xl">
            <Image
              fill
              sizes="100vw"
              alt={images[zoomedIndex]?.altText || ''}
              src={images[zoomedIndex]?.src || ''}
              className="object-contain"
            />
          </div>
          <button 
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setZoomedIndex(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
