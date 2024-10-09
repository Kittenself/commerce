"use client"; // Marking this file as a Client Component

import CartModal from 'components/cart/modal';
import { ClientTextCarousel } from 'components/client-text-carousel';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import { Suspense, useEffect, useState } from 'react';
import MobileMenu from './mobile-menu';
import { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;

export function Navbar() { // Removed async since it's not needed for a Client Component
  const pathname = usePathname(); // Get the current pathname
  const currentPageName = pathname.split('/').pop() || ''; // Extract the current page name

  const [menu, setMenu] = useState<Menu[]>([]); // State to hold menu data

  useEffect(() => {
    const fetchMenu = async () => {
      const fetchedMenu = await getMenu('next-js-frontend-header-menu');
      setMenu(fetchedMenu); // Update state with fetched menu
    };
    fetchMenu(); // Call the fetch function
  }, []); // Empty dependency array to run once on mount

  return (
    <nav className="relative flex flex-col items-center justify-between p-4 lg:px-6">
      <div className="flex w-full items-center">
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link
              href="/"
              prefetch={true}
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <div className="ml-2 flex-none text-lg font-extrabold uppercase md:hidden lg:block">
                {`${SITE_NAME}/${currentPageName}`} {/* Updated to include current page name */}
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
            <CartModal />
          </div>
        </div>
      </div>
      <div className="w-full mt-2">
        <ClientTextCarousel />
      </div>
    </nav>
  );
}
