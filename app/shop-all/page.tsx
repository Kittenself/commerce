'use client';

import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import Footer from 'components/layout/footer';
import { Navbar } from 'components/layout/navbar';
import { ProductDisplay } from 'components/product/product-display';
import Modal from 'components/ui/modal';
import { Product } from 'lib/shopify/types';
import { useEffect, useState } from 'react';

export default function ShopAllPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-2xl px-4">
        <h1 className="text-5xl font-bold mb-8">Shop All</h1>
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Grid.Item key={product.handle} className="animate-fadeIn">
              <button
                className="relative inline-block h-full w-full"
                onClick={() => setSelectedProduct(product)}
              >
                <GridTileImage
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.priceRange.maxVariantPrice.amount,
                    currencyCode: product.priceRange.maxVariantPrice.currencyCode
                  }}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </button>
            </Grid.Item>
          ))}
        </Grid>

        <Modal
          isOpen={selectedProduct !== null}
          onClose={() => setSelectedProduct(null)}
          className="w-full max-w-7xl mx-auto"
        >
          {selectedProduct && <ProductDisplay product={selectedProduct} isModal={true} />}
        </Modal>
      </div>
      <Footer />
    </>
  );
} 