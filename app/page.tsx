import Footer from 'components/layout/footer';
import Image from 'next/image';
import Link from 'next/link';
import SampleWindow from 'windows/windows';
import styles from './Logo.module.css';

export default function HomePage() {
  return (
    <>
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
      <SampleWindow />
      
      <Footer />
    </>
  );
}
