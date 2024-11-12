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
    initialPosition: { x: window?.innerWidth > 768 ? 50 : 20, y: 50 },
    initialSize: { 
      width: window?.innerWidth > 768 ? 300 : 280, 
      height: window?.innerWidth > 768 ? 200 : 150 
    },
  },
  {
    id: 'image1',
    type: 'gif',
    content: '/pictures/animesher.com_madoka-magica-manga-ascii-699264.gif',
    title: 'Sample Image',
    initialPosition: { x: window?.innerWidth > 768 ? 400 : 20, y: window?.innerWidth > 768 ? 100 : 220 },
    initialSize: { 
      width: window?.innerWidth > 768 ? 400 : 280, 
      height: window?.innerWidth > 768 ? 300 : 200 
    },
  },
  {
    id: 'gif1',
    type: 'gif',
    content: '/pictures/tumblr_mj7qs6yQ7u1s6mbrfo1_500.gif',
    title: 'Funny GIF',
    initialPosition: { x: window?.innerWidth > 768 ? 100 : 20, y: window?.innerWidth > 768 ? 400 : 440 },
    initialSize: { 
      width: window?.innerWidth > 768 ? 250 : 280, 
      height: window?.innerWidth > 768 ? 250 : 250 
    },
  },
  {
    id: 'page1',
    type: 'page',
    content: '/shop',
    title: 'Latest release',
    initialPosition: { x: window?.innerWidth > 768 ? 700 : 20, y: window?.innerWidth > 768 ? 50 : 660 },
    initialSize: { 
      width: window?.innerWidth > 768 ? 600 : 280, 
      height: window?.innerWidth > 768 ? 900 : 400 
    },
  },
  {
    id: 'youtube1',
    type: 'youtube',
    content: '2pyops3UGr4',
    title: 'im god',
    initialPosition: { x: window?.innerWidth > 768 ? 300 : 20, y: window?.innerWidth > 768 ? 300 : 880 },
    initialSize: { 
      width: window?.innerWidth > 768 ? 560 : 280, 
      height: window?.innerWidth > 768 ? 315 : 200 
    },
  },
  // Add more media content items as needed
];
