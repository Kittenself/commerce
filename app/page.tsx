import Footer from 'components/layout/footer';
import WindowContent from 'components/WindowContent';
import Image from 'next/image';
import Link from 'next/link';
import { WindowProvider } from 'windows/windowcontext';
import styles from './Logo.module.css';

export default function HomePage() {
  return (
    <WindowProvider>
      <nav style={{ position: 'relative', height: '50px' }}>
        <Link href="/" className={styles.logoLink}>
          <Image 
            src="/pictures/asciilogo.png" 
            alt="Logo" 
            width={100}
            height={50}
            className={styles.logo}
            priority
          />
        </Link>
      </nav>

      <main style={{ minHeight: 'calc(100vh - 100px)' }}>
        <WindowContent />
      </main>
      
      <Footer />
    </WindowProvider>
  );
}
