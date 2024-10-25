'use client';
export interface MediaContent {
  id: string;
  type: 'text' | 'image' | 'gif' | 'page' | 'youtube';
  content: string;
  title: string;
  initialPosition: { x: number; y: number };
  initialSize: { width: number; height: number };
}

export const mediaContents: MediaContent[] = [
  {
    id: 'text1',
    type: 'text',
    content: 'TESTING TESTING TESTING TESTING TESTING TESTING MEOW MEOW MEOW',
    title: 'meow meow meow',
    initialPosition: { x: 50, y: 50 },
    initialSize: { width: 300, height: 200 },
  },
  {
    id: 'image1',
    type: 'gif',
    content: '/pictures/animesher.com_madoka-magica-manga-ascii-699264.gif',
    title: 'Sample Image',
    initialPosition: { x: 400, y: 100 },
    initialSize: { width: 400, height: 300 },
  },
  {
    id: 'gif1',
    type: 'gif',
    content: '/pictures/tumblr_mj7qs6yQ7u1s6mbrfo1_500.gif',
    title: 'Funny GIF',
    initialPosition: { x: 100, y: 400 },
    initialSize: { width: 250, height: 250 },
  },
  {
    id: 'page1',
    type: 'page',
    content: '/shop',  // This will load the /shop page
    title: 'Latest release',
    initialPosition: { x: 700, y: 50 },
    initialSize: { width: 600, height: 400 },
  },
  {
    id: 'youtube1',
    type: 'youtube',
    content: '2pyops3UGr4', // YouTube video ID
    title: 'im god',
    initialPosition: { x: 300, y: 300 },
    initialSize: { width: 560, height: 315 },
  },
  // Add more media content items as needed
];
