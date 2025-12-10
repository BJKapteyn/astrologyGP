import { useEffect } from "react";

export const PrivacyPolicy = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = "Privacy Policy | The Vibe Collective";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Introduction</h2>
            <p className="text-foreground/90">
              The Vibe Collective ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
              This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              www.thevibecollective.co and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Information We Collect</h2>
            <h3 className="text-xl font-medium mb-2 text-foreground">Personal Information</h3>
            <p className="text-foreground/90 mb-3">
              We may collect personal information that you voluntarily provide to us, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/90">
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Profile information and preferences</li>
              <li>Communications with us</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 mt-4 text-foreground">Automatically Collected Information</h3>
            <p className="text-foreground/90 mb-3">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/90">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">How We Use Your Information</h2>
            <p className="text-foreground/90 mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/90">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, updates, and security alerts</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Send marketing and promotional communications (with your consent)</li>
              <li>Monitor and analyze usage trends and preferences</li>
              <li>Detect, prevent, and address technical issues and fraudulent activity</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Cookies and Tracking Technologies</h2>
            <p className="text-foreground/90">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. 
              Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct 
              your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept 
              cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Third-Party Services</h2>
            <p className="text-foreground/90 mb-3">
              We may share your information with third-party service providers who perform services on our behalf, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/90">
              <li>Analytics providers (e.g., Google Analytics)</li>
              <li>Social media platforms (e.g., TikTok, Facebook, Instagram)</li>
              <li>Payment processors</li>
              <li>Email service providers</li>
              <li>Hosting and infrastructure providers</li>
            </ul>
            <p className="text-foreground/90 mt-3">
              These third parties have access to your personal information only to perform specific tasks on our behalf and 
              are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Social Media Integration</h2>
            <p className="text-foreground/90">
              Our website may include social media features and widgets, such as TikTok integration. These features may collect 
              your IP address, track which pages you visit on our site, and may set cookies. Social media features are either 
              hosted by a third party or hosted directly on our website. Your interactions with these features are governed by 
              the privacy policy of the company providing them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Data Security</h2>
            <p className="text-foreground/90">
              We implement appropriate technical and organizational security measures to protect your personal information. 
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to 
              use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Your Rights and Choices</h2>
            <p className="text-foreground/90 mb-3">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/90">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
              <li>The right to opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Children's Privacy</h2>
            <p className="text-foreground/90">
              Our services are not directed to children under the age of 13 (or 16 in certain jurisdictions). We do not 
              knowingly collect personal information from children. If you are a parent or guardian and believe your child 
              has provided us with personal information, please contact us so we can delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">International Data Transfers</h2>
            <p className="text-foreground/90">
              Your information may be transferred to and maintained on computers located outside of your state, province, 
              country, or other governmental jurisdiction where data protection laws may differ. By using our services, 
              you consent to such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Changes to This Privacy Policy</h2>
            <p className="text-foreground/90">
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new 
              privacy policy on this page and updating the "Last Updated" date. You are advised to review this privacy 
              policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Contact Us</h2>
            <p className="text-foreground/90 mb-3">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="text-foreground/90">
              <p>The Vibe Collective</p>
              <p>Email: privacy@thevibecollective.co</p>
              <p>Website: www.thevibecollective.co</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <a 
            href="/" 
            className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
          >
            ← Back to Home
          </a>
        </div>
      </article>
    </main>
  );
};