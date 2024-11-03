export default function PrivacyPolicy() {
  return (
    <div className="prose prose-sm max-w-none text-black dark:text-white">
      <h2 className="text-xl font-bold">Privacy Policy</h2>
      <div className="mt-4 space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <p>
            At Modamosaic, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, 
            use, disclose, and safeguard your information when you visit our website. By using our site, you consent 
            to the practices described in this policy.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold">Information We Collect</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> We may collect personal information that you provide directly 
              to us, such as your name, email address, phone number, and any other details you choose to share 
              when you contact us or sign up for our services.
            </li>
            <li>
              <strong>Usage Data:</strong> We automatically collect information about your interactions with our 
              site. This may include your IP address, browser type, pages visited, time spent on those pages, 
              and other diagnostic data.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies 
              to monitor activity on our site and store certain information. You can manage your cookie preferences 
              through your browser settings.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold">How We Use Your Information</h3>
          <p>Modamosaic may use your information for various purposes, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>To Provide and Maintain Our Service:</strong> We use your personal information to fulfill 
              your requests and provide customer support.
            </li>
            <li>
              <strong>To Improve Our Website:</strong> We analyze usage data to enhance our website and its 
              functionality.
            </li>
            <li>
              <strong>To Communicate with You:</strong> We may send you newsletters, marketing communications, 
              or other information that may interest you. You can opt out of these communications at any time.
            </li>
            <li>
              <strong>To Comply with Legal Obligations:</strong> We may use your information as required by law 
              or to protect our rights and the rights of others.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold">Sharing Your Information</h3>
          <p>
            We do not sell or rent your personal information to third parties. We may share your information in 
            the following situations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service Providers:</strong> We may employ third-party companies and individuals to facilitate 
              our services, provide support, or perform services on our behalf. These third parties have access to 
              your personal information only to perform these tasks and are obligated not to disclose or use it 
              for any other purpose.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your personal information if required to do so 
              by law or in response to valid requests by public authorities.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold">Data Security</h3>
          <p>
            We strive to use commercially acceptable means to protect your personal information. However, no method 
            of transmission over the internet or electronic storage is 100% secure. While we aim to protect your 
            personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold">Your Rights</h3>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access, correct, or delete your personal information.</li>
            <li>The right to restrict or object to our processing of your personal information.</li>
            <li>The right to data portability.</li>
          </ul>
          <p>
            If you wish to exercise these rights, please contact us at{' '}
            <a href="mailto:corporate@modamosaic.org" className="text-blue-600 dark:text-blue-400">
              corporate@modamosaic.org
            </a>
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold">Shopify and Third-Party Services</h3>
          <p>
            We use Shopify to power our online store. Your personal information may be stored through Shopify's 
            data storage, databases, and general application. They store your data on secure servers behind a firewall.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Payment Information:</strong> Shopify processes your payment information in accordance with 
              their privacy policy. We do not store your credit card information or other payment details.
            </li>
            <li>
              <strong>Cookies and Tracking:</strong> Shopify uses cookies to provide a more personalized shopping 
              experience. For more information, please refer to Shopify's Privacy Policy.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p>
            If you have any questions or concerns regarding this Privacy Policy, please contact us at:{' '}
            <a href="mailto:corporate@modamosaic.org" className="text-blue-600 dark:text-blue-400">
              corporate@modamosaic.org
            </a>
          </p>
        </section>
      </div>
    </div>
  );
} 