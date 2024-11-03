'use client';

import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import Modal from 'components/ui/modal';
import { Product } from 'lib/shopify/types';
import { useState } from 'react';
import { ProductDisplay } from '../product/product-display';

export function ProductGrid({ products }: { products: Product[] }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
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
    </>
  );
} 