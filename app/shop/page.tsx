import Footer from 'components/layout/footer';
import { Navbar } from 'components/layout/navbar';
import { ProductDisplay } from 'components/product/product-display';
import { getProduct } from 'lib/shopify';
import styles from 'windows/Windows31.module.css';

export const metadata = {
  title: 'Shop Featured Products',
  description: 'Browse our featured products'
};

// Hardcoded product handles or names
const FEATURED_PRODUCT_HANDLES = [
  'cool-zip-up',
  'cool-zip-up',
  'cool-zip-up',
  'cool-zip-up',
  'cool-zip-up'
];

export default async function ShopPage() {
  const productPromises = FEATURED_PRODUCT_HANDLES.map(handle => getProduct(handle));
  const products = await Promise.all(productPromises);

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/pictures/download (7).png')" }}>
      <Navbar />
      <main className="mx-auto max-w-screen-2xl px-4 py-8 mt-16">
        <h1 className="mb-8 text-5xl font-italic text-white bg-blue-600 inline-block px-4 py-2">
          baseball's super duper shop
        </h1>
        <h2 className="mb-8 text-2xl font-italic text-white bg-yellow-300 inline-block px-4 py-2">
        i like windows and lily chou chou and zip ups
        </h2>
        <div className="space-y-8">
          {products.map((product, index) => 
            product ? (
              <div 
                key={product.id} 
                className={`${styles.window} ${styles.windowBlueHighlight} ${index === 0 ? styles.selectedWindow : ''}`}
              >
                <div className={styles.windowHeader}>
                  <span className={styles.windowClose}>×</span>
                  <span className={styles.windowTitle}>{product.title}</span>
                </div>
                <div className={styles.windowContent}>
                  <ProductDisplay product={product} />
                </div>
              </div>
            ) : null
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
