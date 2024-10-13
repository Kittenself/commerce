import type { AppProps } from 'next/app';
import PageTransition from '../components/layout/PageTransition';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageTransition>
      <Component {...pageProps} />
    </PageTransition>
  );
}

export default MyApp;
