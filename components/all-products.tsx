'use client';

import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { ProductDisplay } from 'components/product/product-display';
import Modal from 'components/ui/modal';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (event: React.MouseEvent<HTMLAnchorElement>, product: Product) => {
    event.preventDefault();
    setSelectedProduct(product);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">All Products</h1>
      </div>
      
      <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Grid.Item key={product.id} className="animate-fadeIn">
            <Link
              className="relative inline-block h-full w-full"
              href={`/product/${product.handle}`}
              onClick={(e) => handleProductClick(e, product)}
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
            </Link>
          </Grid.Item>
        ))}
      </Grid>

      <Modal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        className="w-full max-w-4xl mx-auto"
      >
        {selectedProduct && (
          <div className="p-4">
            <ProductDisplay product={selectedProduct} />
          </div>
        )}
      </Modal>
    </div>
  );
} 