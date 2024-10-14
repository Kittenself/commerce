import CartModal from 'components/cart/modal';
import { ClientTextCarousel } from 'components/client-text-carousel';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import { AnimatedText } from '../../AnimatedText';
import { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  const outlineStyle = {
    textShadow: `-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff`,
  };

  const cartOutlineStyle = {
    textShadow: `-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff`,
  };

  return (
    <nav className="relative flex flex-col items-center justify-between p-4 lg:px-6">
      <div className="flex w-full items-center">
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            
          </Suspense>
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link
              href="/"
              prefetch={true}
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <div className="ml-2 flex-none text-lg font-extrabold uppercase md:hidden lg:block text-black px-3 py-1" style={outlineStyle}>
                <AnimatedText text="MODA/collection/baseball" />
              </div>
            </Link>
            {menu.length ? (
              <ul className="hidden gap-6 text-sm md:flex md:items-center">
                {menu.map((item: Menu) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      prefetch={true}
                      className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <Suspense fallback={<SearchSkeleton />}>
              {/* Your search component here */}
            </Suspense>
          </div>
          <div className="flex justify-end md:w-1/3">
            <div className="text-black px-3 py-1" style={cartOutlineStyle}>
              <CartModal />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-2">
        <ClientTextCarousel />
      </div>
    </nav>
  );
}
