import Footer from 'components/layout/footer';
import { Navbar } from 'components/layout/navbar';
import WindowContent from 'components/WindowContent';
import { WindowProvider } from 'windows/windowcontext';

export default function HomePage() {
  return (
    <WindowProvider>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/pictures/vhm_1725304893.png')" }}>
        <div className="flex-grow">
          <WindowContent />
        </div>
      </main>
      <Footer />
    </WindowProvider>
  );
}
