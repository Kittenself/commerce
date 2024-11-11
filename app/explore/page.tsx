import dynamic from 'next/dynamic';
import Image from 'next/image';
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
    <div className={styles.pageContainer}>
      {/* Windows Interface Section */}
      <section className={styles.windowsSection}>
        <WindowProvider>
          <div className={styles.windowsContainer}>
            <WindowContent />
          </div>
        </WindowProvider>
      </section>
      
      {/* Pixelated Game Section */}
      <section className={styles.gameSection}>
        <div className={styles.gameContent}>
          <div className={styles.gamePreview}>
            <Image 
              src="/pictures/b9BHV.png" 
              alt="Game Preview"
              width={300}
              height={300}
              className={styles.pixelImage}
            />
            <Image 
              src="/pictures/idkyete.png"
              alt="Game Preview 2"
              width={300}
              height={300}
              className={styles.pixelImage}
            />
          </div>
          <div className={styles.gameText}>
            <h2>Modamosaic</h2>
            <ul>
              <li>MEOW MEOW MEOW</li>
              <li>MEOW MEOW MEOWMEOW MEOW MEOWMEOW MEOW MEOWMEOW MEOW MEOWMEOW MEOW MEOW</li>
              <li>MEOW MEOW MEOWMEOW MEOW MEOWMEOW MEOW MEOWMEOW MEOW MEOW</li>
              <li>meows</li>
            </ul>
            <p>meowdy!!</p>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className={styles.thirdSection}>
      </section>
    </div>
  );
}
