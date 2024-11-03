'use client';

import { useState } from 'react';
import Modal from '../ui/modal';
import PrivacyPolicy from './legal/privacy-policy';
import TermsOfService from './legal/terms-of-service';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default function Footer() {
  const [showTOS, setShowTOS] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const copyrightName = 'modamosaic' || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p>
            <a href="modamosaic">twitter</a>
          </p>
          <div className="md:ml-auto flex gap-4 items-center">
            <button
              className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
              onClick={() => setShowTOS(true)}
            >
              Terms of Service
            </button>
            <button
              className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
              onClick={() => setShowPrivacy(true)}
            >
              Privacy Policy
            </button>
            <p>corporate@modamosaic.org</p>
          </div>
        </div>
      </div>

      <Modal isOpen={showTOS} onClose={() => setShowTOS(false)}>
        <TermsOfService />
      </Modal>

      <Modal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)}>
        <PrivacyPolicy />
      </Modal>
    </footer>
  );
}
