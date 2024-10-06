import Footer from 'components/layout/footer';
import { Navbar } from 'components/layout/navbar';
import WindowContent from 'components/WindowContent';
import { WindowProvider } from 'windows/windowcontext';

export default function HomePage() {
  return (
    <WindowProvider>
      <Navbar />
      <main className="bg-cover bg-center" style={{ minHeight: 'calc(100vh - 100px)', backgroundImage: "url('public/pictures/vhm_1725304893.png)" }}>
        <WindowContent />
      </main>
      <Footer />
    </WindowProvider>
  );
}
