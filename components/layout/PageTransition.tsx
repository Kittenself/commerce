import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100%',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '100%',
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const { asPath } = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={asPath}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
