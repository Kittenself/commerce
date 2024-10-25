import WindowContent from 'components/WindowContent';
import { WindowProvider } from 'windows/windowcontext';
import styles from './explore.module.css';
import { mediaContents } from './mediaContent';

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
          {/* Debugging information */}
          <div style={{position: 'fixed', bottom: 0, left: 0, background: 'white', padding: '10px'}}>
            Number of windows: {mediaContents.length}
          </div>
        </main>
      </div>
    </WindowProvider>
  );
}
