import Footer from 'components/layout/footer';
import { Navbar } from 'components/layout/navbar';
import WindowContent from 'components/WindowContent';
import { WindowProvider } from 'windows/windowcontext';

export default function HomePage() {
  return (
    <WindowProvider>
      <Navbar />
      <main 
        className="flex flex-col min-h-screen" 
        style={{ 
          backgroundImage: "url('/pictures/vhm_1725304893.png')", 
          backgroundSize: 'contain', // Ensure the image is at full resolution
          backgroundRepeat: 'no-repeat', // Prevent the image from repeating
          backgroundPosition: 'center', // Center the image
          flexGrow: 1 // Allow the main content to grow and push the footer down
        }}
      >
        <div className="flex-grow">
          <WindowContent />
        </div>
      </main>
      <Footer />
    </WindowProvider>
  );
}
