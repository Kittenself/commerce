'use client';

import { Gallery } from 'components/product/gallery';
import { ProductProvider } from 'components/product/product-context';
import { ProductDescription } from 'components/product/product-description';
import { Product } from 'lib/shopify/types';
import { Suspense } from 'react';


interface ProductDisplayProps {
  product: Product;
  isModal?: boolean;
}

export function ProductDisplay({ product, isModal }: ProductDisplayProps) {
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <ProductProvider>
      {!isModal && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productJsonLd)
          }}
        />
      )}
      <div className={`flex flex-col border border-neutral-200 bg-white ${
        isModal ? 'p-4 md:p-6' : 'p-8 md:p-12'
      } lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-white`}>
        <div className="h-full w-full basis-full lg:basis-4/6">
          <Suspense
            fallback={
              <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
            }
          >
            <Gallery
              images={product.images.slice(0, 5).map((image) => ({
                src: image.url,
                altText: image.altText
              }))}
            />
          </Suspense>
        </div>

        <div className="basis-full lg:basis-2/6">
          <Suspense fallback={null}>
            <ProductDescription product={product} />
          </Suspense>
        </div>
      </div>
    </ProductProvider>
  );
}
