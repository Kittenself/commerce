import Footer from 'components/layout/footer';
import Link from 'next/link';

export const metadata = {
  title: 'Shl0ms Security',
  description: 'Welcome to the Shl0ms Security exhibition.',
};

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-300 text-black">
      <main className="text-center">
        <h1 className="text-5xl font-bold mb-2">Shl0ms</h1>
        <h2 className="text-4xl font-semibold mb-4">Security</h2>
        <p className="text-lg mb-6">October 9, 2024</p>
        <Link href="/explore" className="inline-block px-6 py-3 border-2 border-black rounded-lg hover:bg-black hover:text-yellow-300 transition-colors duration-300 font-semibold" aria-label="Explore the exhibition">
          EXPLORE ➔
        </Link>
      </main>
      <nav className="mt-12 mb-8">
        <ul className="flex flex-col sm:flex-row gap-6">
          {['Artists', 'Exhibitions', 'News'].map((item) => (
            <li key={item}>
              <a href={`/${item.toLowerCase()}`} className="text-2xl font-bold hover:underline">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Footer />
    </div>
  );
}