import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white-300 p-8">
      <main className="border-black border-8 p-8 min-h-[calc(100vh-4rem)]">
        <div className="mb-12">
          <h1 className="text-5xl font-bold">MODAMOSAIC</h1>
        </div>
        
        <div className="mb-16">
          <h2 className="mb-8 text-8xl font-italic text-white bg-blue-600 px-4 py-2">THE WINDOWS CIG</h2>
          <h2 className="mb-8 text-8xl font-italic text-white bg-blue-600 px-4 py-2">SPNNING GIF AESTHETIC COLLECTION</h2>
          <p className="text-3xl mb-8">LATEST RELEASE!!!!!!!</p>
          <Link href="/shop" className="inline-block group">
            <span className="bg-black text-white px-8 py-4 text-3xl font-bold transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:filter group-hover:drop-shadow-[8px_8px_0_rgba(0,0,0,1)] active:translate-y-0 active:translate-x-0 active:filter-none">
              SHOP NOW →
            </span>
          </Link>
        </div>
        
        <hr className="border-t-4 border-black mb-16" />
        
        <div className="text-6xl font-bold space-y-4">
          <Link href="/explore" className="block w-fit">
            <span className="relative group">
              EXPLORE
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link href="/socials" className="block w-fit">
            <span className="relative group">
              SOCIALS
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link href="/connect" className="block w-fit">
            <span className="relative group">
              CONNECT
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
