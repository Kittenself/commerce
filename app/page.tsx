import Footer from 'components/layout/footer';
import { Navbar } from 'components/layout/navbar';
import WindowContent from 'components/WindowContent';
import { WindowProvider } from 'windows/windowcontext';



export const metadata = {
  description: 'meow meow meow.',
  openGraph: {
    type: 'website',
    images: '/pictures/animesher.com_madoka-magica-manga-ascii-699264.gif',
  }
};


export default function HomePage() {
  return (
    <WindowProvider>
    <Navbar />

      <main style={{ minHeight: 'calc(100vh - 100px)' }}>
        <WindowContent />
      </main>
      
      <Footer />
    </WindowProvider>
    
  );
}
