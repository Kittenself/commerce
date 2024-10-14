'use client';

import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import Link from 'next/link';
import { AnimatedText } from '../components/AnimatedText';

// Import the custom font
const jacquardFont = localFont({ src: '../fonts/Jacquard12-Regular.ttf' });

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="h-screen bg-white-300 p-4 sm:p-8 flex items-center justify-center">
      <motion.main
        className="border-black border-4 sm:border-8 p-4 sm:p-8 w-full h-full max-h-[calc(100vh-4rem)] flex flex-col justify-between"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-col justify-between flex-grow" variants={itemVariants}>
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl sm:text-5xl lg:text-4xl font-bold mb-4 sm:mb-6">
              <AnimatedText text="MODAMOSAIC" />
            </h1>
          </motion.div>
          
          <motion.div className="flex-grow flex flex-col justify-center" variants={itemVariants}>
            <motion.h2 
              className={`mb-2 sm:mb-2 text-5xl sm:text-8xl lg:text-8xl font-italic  text-white bg-blue-600 px-2 py-1 sm:px-8 sm:py-6 relative before:absolute before:content-[''] before:bg-black before:top-2 before:left-2 before:right-[-8px] before:bottom-[-8px] before:-z-10 before:rotate-2 ${jacquardFont.className}`} 
              variants={itemVariants}
            >
              <AnimatedText text="Windows Cigs" />
            </motion.h2>
            <motion.h2 className="mb-2 sm:mb-2 text-5xl sm:text-8xl lg:text-6xl font-italic text-white bg-blue-600 px-2 py-1 sm:px-9 sm:py-6 relative before:absolute before:content-[''] before:bg-black before:top-2 before:left-2 before:right-[-8px] before:bottom-[-8px] before:-z-10 before:rotate-2" variants={itemVariants}>
              <AnimatedText text="x" />
            </motion.h2>
            <motion.h2 className="mb-3 sm:mb-6 text-5xl sm:text-6xl lg:text-7xl font-italic font-bold text-white bg-blue-600 px-2 py-1 sm:px-9 sm:py-6 relative before:absolute before:content-[''] before:bg-black before:top-2 before:left-2 before:right-[-8px] before:bottom-[-8px] before:-z-10 before:rotate-2" variants={itemVariants}>
              <AnimatedText text="MODAMOSAIC" />
            </motion.h2>
            <motion.p className="text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6 font-bold bg-green-300" variants={itemVariants}>
              <AnimatedText text="LATEST RELEASE!!!!!!!" />
            </motion.p>
            <motion.p className="text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6 px-4" variants={itemVariants}>
              <AnimatedText text="10/13/2024" />
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/shop" className="inline-block group">
                <span className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 text-xl sm:text-2xl lg:text-3xl font-bold transition-all duration-100 ease-in-out transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:filter group-hover:drop-shadow-[7px_7px_0_rgba(0,0,0,1)] active:translate-y-0 active:translate-x-0 active:filter-none">
                  <AnimatedText text='SHOP NOW →' />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div className="mt-6 sm:mt-8 flex-grow-0 flex flex-col justify-end" variants={itemVariants}>
          <motion.hr className="border-t-2 sm:border-t-4 border-black mb-6 sm:mb-8" variants={itemVariants} />
          
          <motion.div className="text-2xl sm:text-3xl lg:text-4xl font-bold space-y-3 sm:space-y-4" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <Link href="/explore" className="block w-fit">
                <span className="relative group">
                  <AnimatedText text="EXPLORE" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 sm:h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/socials" className="block w-fit">
                <span className="relative group">
                  <AnimatedText text="SOCIALS" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 sm:h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/connect" className="block w-fit">
                <span className="relative group">
                  <AnimatedText text="CONNECT" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 sm:h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
}
