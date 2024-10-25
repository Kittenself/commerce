import dynamic from 'next/dynamic';
import { WindowProvider } from 'windows/windowcontext';
import styles from './explore.module.css';

const WindowContent = dynamic(() => import('components/WindowContent'), { ssr: false });

export const metadata = {
  description: 'Explore our interactive content.',
  openGraph: {
    type: 'website',
    images: '/pictures/vhm_1725304893.png',
  }
};

export default function ExplorePage() {
  return (
    <WindowProvider>
      <div className={styles.backgroundContainer}>
        <main className={styles.mainContent}>
          <WindowContent />
        </main>
      </div>
    </WindowProvider>
  );
}
