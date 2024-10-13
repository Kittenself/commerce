import type { AppProps } from 'next/app';
import '../app/globals.css'; // Updated import path
import PageTransition from '../components/layout/PageTransition';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageTransition>
      <Component {...pageProps} />
    </PageTransition>
  );
}

export default MyApp;
