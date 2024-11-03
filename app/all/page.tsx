import AllProducts from 'components/all-products';
import Footer from 'components/layout/footer';
import { Navbar } from 'components/layout/navbar';

export default function AllPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="mt-4" />
        <AllProducts />
        <div className="mt-4" />
      </main>
      <Footer />
    </div>
  );
} 