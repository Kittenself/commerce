import Footer from 'components/layout/footer';
import { Navbar } from 'components/layout/navbar';
import { Suspense } from 'react';

export const metadata = {
  title: 'Shop All Products',
  description: 'Browse all our amazing products'
};

export default async function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-screen-2xl px-4 py-8">
        <h1 className="mb-8 text-5xl font-bold">Shop All Products</h1>
        <Suspense fallback={<div>Loading products...</div>}>
          
          
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
