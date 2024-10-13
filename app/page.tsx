import Link from 'next/link';
import { DisposableDroidBB } from './fonts';

export default function Home() {
  return (
    <div className="min-h-screen bg-white-300 p-4 sm:p-8">
      <main className="border-black border-4 sm:border-8 p-4 sm:p-8 min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-4rem)]">
        <div className="mb-6 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold">MODAMOSAIC</h1>
        </div>
        
        <div className="mb-8 sm:mb-16">
          <h2 className={`${DisposableDroidBB.className} mb-4 sm:mb-8 text-4xl sm:text-8xl text-white bg-blue-600 inline-block px-1 py-2 sm:px-4 sm:py-2 font-bold`}>
            windowscigarettesgifs x
          </h2>
          <br />
          <h2 className={`font-bold mb-4 sm:mb-8 text-4xl sm:text-8xl text-white bg-blue-600 inline-block px-1 py-1 sm:px-4 sm:py-2`}>
            MODMOSAIC
          </h2>
          <p className="font-italic text-xl sm:text-3xl mb-4 sm:mb-8">10/12/2024</p>
          <Link href="/shop" className="inline-block group">
            <span className="bg-black text-white px-4 sm:px-8 py-2 sm:py-4 text-xl sm:text-3xl font-bold transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:filter group-hover:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] sm:group-hover:drop-shadow-[8px_8px_0_rgba(0,0,0,1)] active:translate-y-0 active:translate-x-0 active:filter-none">
              SHOP NOW →
            </span>
          </Link>
        </div>
        
        <hr className="border-t-2 sm:border-t-4 border-black mb-8 sm:mb-16" />
        
        <div className="text-3xl sm:text-6xl font-bold space-y-2 sm:space-y-4">
          <Link href="/explore" className="block w-fit">
            <span className="relative group">
              EXPLORE
              <span className="absolute bottom-0 left-0 w-0 h-0.5 sm:h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link href="/socials" className="block w-fit">
            <span className="relative group">
              SOCIALS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 sm:h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link href="/connect" className="block w-fit">
            <span className="relative group">
              CONNECT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 sm:h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
