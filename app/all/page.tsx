import AllProducts from 'components/all-products';
import Footer from 'components/layout/footer';
import { Navbar } from 'components/layout/navbar';

export default function AllPage() {
  return (
    <>
      <Navbar />
      <div className="mt-4" />
      <AllProducts />
      <div className="mt-4" />
      <Footer />
    </>
  );
} 