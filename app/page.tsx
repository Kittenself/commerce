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
    <div className="h-screen bg-white-300 p-4 sm:p-3 flex items-center justify-center">
      <motion.main
        className="border-black border-4 sm:border-8 p-4 sm:p-8 w-full h-full max-h-[calc(100vh-4rem)] flex flex-col justify-between"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-col justify-between flex-grow" variants={itemVariants}>
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-6xl lg:text-5xl font-bold mb-6 sm:mb-8">
              <AnimatedText text="MODAMOSAIC" />
            </h1>
          </motion.div>
          
          <motion.div className="flex-grow flex flex-col justify-center space-y-6 sm:space-y-8" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <Link href="/explore" className="inline-block group">
                <span className={`bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-2xl sm:text-5xl lg:text-4xl transition-all duration-100 ease-in-out transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:filter group-hover:drop-shadow-[7px_7px_0_rgba(0,0,0,1)] active:translate-y-0 active:translate-x-0 active:filter-none ${jacquardFont.className}`}>
                  Explore →
                </span>
              </Link>
            </motion.div>
            <motion.h2 
              className={`text-5xl sm:text-9xl lg:text-8xl font-italic text-white bg-blue-600 px-4 py-2 sm:px-6 sm:py-3 ${jacquardFont.className}`} 
              variants={itemVariants}
            >
              <AnimatedText text="BASEBALL" />
            </motion.h2>

            <motion.h2 className="text-5xl sm:text-9xl lg:text-8xl font-italic font-bold text-white bg-blue-600 px-4 py-2 sm:px-6 sm:py-3" variants={itemVariants}>
              <AnimatedText text="MODAMOSAIC" />
            </motion.h2>

            <motion.p className="text-1xl sm:text-2xl lg:text-3xl px-4 py-2 sm:px-6 sm:py-3" variants={itemVariants}>
              <AnimatedText text="last-updated:11/7/2024" />
            </motion.p>
            <motion.div variants={itemVariants} className="flex justify-between items-center">
              <Link href="/shop" className="inline-block group">
                <span className={`bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-2xl sm:text-5xl lg:text-4xl transition-all duration-100 ease-in-out transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:filter group-hover:drop-shadow-[7px_7px_0_rgba(0,0,0,1)] active:translate-y-0 active:translate-x-0 active:filter-none ${jacquardFont.className}`}>
                  Shop Now →
                </span>
              </Link>
              <Link href="/all" className="inline-block group">
                <span className={`bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-2xl sm:text-5xl lg:text-4xl transition-all duration-100 ease-in-out transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:filter group-hover:drop-shadow-[7px_7px_0_rgba(0,0,0,1)] active:translate-y-0 active:translate-x-0 active:filter-none ${jacquardFont.className}`}>
                  Shop All →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div className="mt-5 sm:mt-5 flex-grow-0 flex flex-col justify-end" variants={itemVariants}>
          <motion.hr className="border-t-2 sm:border-t-4 border-black mb-6 sm:mb-8" variants={itemVariants} />
          
          <motion.div className="text-2xl sm:text-3xl lg:text-4xl font-bold space-y-3 sm:space-y-4" variants={itemVariants}>
         
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
