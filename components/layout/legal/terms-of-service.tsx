export default function TermsOfService() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h2 className="text-2xl font-bold text-center mb-6">Terms of Service</h2>
      <div className="space-y-6">
        <p className="text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <p className="text-center">
          Welcome to the Modamosaic website. By accessing or using this website, you agree to be bound 
          by the following Terms of Service. Please read them carefully before using the site.
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h3>
          <p>
            By using this website, you agree to these Terms of Service. If you do not agree, you must 
            stop using the site immediately. We reserve the right to modify these terms at any time 
            without notice. Continued use of the website following the posting of changes means you 
            accept the updated terms.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">2. Use of Site</h3>
          <p>
            The content on this site is for informational purposes only and should not be interpreted 
            as professional advice. You agree to use the website in a lawful manner, and refrain from 
            using it for any prohibited activities, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Disrupting the functionality of the site.</li>
            <li>Attempting to gain unauthorized access to any part of the site.</li>
            <li>Using the site for unlawful purposes or in violation of applicable laws.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">3. Intellectual Property</h3>
          <p>
            All content, including text, images, logos, and media, is owned by or licensed to 
            Modamosaic. You may not copy, reproduce, distribute, or use any of this content without 
            explicit permission from Modamosaic. Unauthorized use of the materials on this site may 
            violate copyright, trademark, and other applicable laws.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">4. User-Generated Content</h3>
          <p>
            If users are allowed to post content (such as comments or media), you retain ownership of 
            your content but grant Modamosaic a non-exclusive, royalty-free, and irrevocable license 
            to use, display, modify, and distribute this content for the purposes of operating the 
            site. You are responsible for the content you upload and agree that it does not violate 
            any third-party rights or applicable laws.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">5. Privacy</h3>
          <p>
            Your privacy is important to us. Please refer to our Privacy Policy to understand how we 
            collect, use, and share your personal information. By using this site, you agree to the 
            terms outlined in the Privacy Policy.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">6. Third-Party Links</h3>
          <p>
            This website may contain links to third-party websites. These links are provided for your 
            convenience, but Modamosaic is not responsible for the content, privacy practices, or 
            accuracy of any third-party websites. Visiting these sites is at your own risk.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">7. Disclaimer of Warranties</h3>
          <p>
            The website and its content are provided "as is" without warranties of any kind, either 
            express or implied. Modamosaic does not guarantee that the site will be uninterrupted, 
            error-free, or free of viruses or harmful components. Use of the site is at your own risk.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">8. Limitation of Liability</h3>
          <p>
            Modamosaic will not be held liable for any direct, indirect, incidental, consequential, 
            or punitive damages arising from your use or inability to use the site, including loss of 
            data or business interruption, even if we have been advised of the possibility of such 
            damages.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">9. Changes to the Site</h3>
          <p>
            Modamosaic reserves the right to modify, suspend, or discontinue any part of the website 
            at any time without notice. We are not liable for any changes or disruptions to the site.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">10. Governing Law</h3>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of 
            Canada, without regard to its conflict of law provisions. You agree to submit to the 
            jurisdiction of the courts in British Columbia, Canada for any disputes related to these 
            terms or your use of the website.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">11. Termination</h3>
          <p>
            Modamosaic reserves the right to terminate your access to the site at any time, for any 
            reason, without notice.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>
            If you have any questions or concerns regarding these Terms of Service, please contact us 
            at <a href="mailto:corporate@modamosaic.org" className="text-blue-600 dark:text-blue-400 hover:underline">
            corporate@modamosaic.org</a>
          </p>
        </section>
      </div>
    </div>
  );
} 