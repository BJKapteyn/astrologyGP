import { useEffect } from "react";
import "./PrivacyPolicy.css";
import { ActionButton } from "../PageElements/ActionButton/ActionButton";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
    useEffect(() => {
        // Set page title for SEO
        document.title = "Privacy Policy | The Vibe Collective";
    }, []);
    
    return (
        <main className="privacy-main">
            <article className="privacy-article">
                <header className="privacy-header">
                    <h1 className="privacy-title">Privacy Policy</h1>
                    <p className="privacy-date">Last Updated: {new Date("12/11/2025").toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </header>

                <div className="privacy-content">
                    <section className="privacy-section">
                        <h2 className="privacy-heading">Introduction</h2>
                        <p className="privacy-text">
                            The Vibe Collective ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.
                            This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                            www.thevibecollective.co and use our services.
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2 className="privacy-heading">Information We Collect</h2>
                        <h3 className="privacy-subheading">Personal Information</h3>
                        <p className="privacy-text">
                            We may collect personal information that you voluntarily provide to us, including but not limited to:
                        </p>
                        <ul className="privacy-list">
                            <li className="privacy-list-item">Name and contact information (email address, phone number)</li>
                            <li className="privacy-list-item">Account credentials</li>
                            <li className="privacy-list-item">Payment information</li>
                            <li className="privacy-list-item">Profile information and preferences</li>
                            <li className="privacy-list-item">Communications with us</li>
                        </ul>

                        <h3 className="privacy-subheading">Automatically Collected Information</h3>
                        <p className="privacy-text">
                            When you visit our website, we automatically collect certain information about your device, including:
                        </p>
                        <ul className="privacy-list">
                            <li className="privacy-list-item">IP address</li>
                            <li className="privacy-list-item">Browser type and version</li>
                            <li className="privacy-list-item">Device information</li>
                            <li className="privacy-list-item">Usage data and analytics</li>
                            <li className="privacy-list-item">Cookies and similar tracking technologies</li>
                        </ul>
                    </section>

                    <section className="privacy-section">
                        <h2 className="privacy-heading">How We Use Your Information</h2>
                        <p className="privacy-text">We use the information we collect to:</p>
                        <ul className="privacy-list">
                            <li className="privacy-list-item">Provide, maintain, and improve our services</li>
                            <li className="privacy-list-item">Process transactions and send related information</li>
                            <li className="privacy-list-item">Send administrative information, updates, and security alerts</li>
                            <li className="privacy-list-item">Respond to your comments, questions, and customer service requests</li>
                            <li className="privacy-list-item">Send marketing and promotional communications (with your consent)</li>
                            <li className="privacy-list-item">Monitor and analyze usage trends and preferences</li>
                            <li className="privacy-list-item">Detect, prevent, and address technical issues and fraudulent activity</li>
                            <li className="privacy-list-item">Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className="privacy-section">
                        <h2 className="privacy-heading">Cookies and Tracking Technologies</h2>
                        <p className="privacy-text">
                            We use cookies and similar tracking technologies to track activity on our website and store certain information.
                            Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct
                            your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept
                            cookies, you may not be able to use some portions of our website.
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2 className="privacy-heading">Third-Party Services</h2>
                        <p className="privacy-text">
                            We may share your information with third-party service providers who perform services on our behalf, including:
                        </p>
                        <ul className="privacy-list">
                            <li className="privacy-list-item">Analytics providers (e.g., Google Analytics)</li>
                            <li className="privacy-list-item">Social media platforms (e.g., TikTok, Facebook, Instagram)</li>
                            <li className="privacy-list-item">Payment processors</li>
                            <li className="privacy-list-item">Email service providers</li>
                            <li className="privacy-list-item">Hosting and infrastructure providers</li>
                        </ul>
                        <p className="privacy-text">
                            These third parties have access to your personal information only to perform specific tasks on our behalf and
                            are obligated not to disclose or use it for any other purpose.
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2 className="privacy-heading">Social Media Integration</h2>
                        <p className="privacy-text">
                            Our website may include social media features and widgets, such as TikTok integration. These features may collect
                            your IP address, track which pages you visit on our site, and may set cookies. Social media features are either
                            hosted by a third party or hosted directly on our website. Your interactions with these features are governed by
                            the privacy policy of the company providing them.
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2 className="privacy-heading">Data Security</h2>
                        <p className="privacy-text">
                            We implement appropriate technical and organizational security measures to protect your personal information.
                            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to
                            use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2 className="privacy-heading">Your Rights and Choices</h2>
                        <p className="privacy-text">
                            Depending on your location, you may have certain rights regarding your personal information, including:
                        </p>
                        <ul className="privacy-list">
                            <li className="privacy-list-item">The right to access your personal information</li>
                            <li className="privacy-list-item">The right to correct inaccurate or incomplete information</li>
                            <li className="privacy-list-item">The right to delete your personal information</li>
                            <li className="privacy-list-item">The right to restrict or object to processing</li>
                            <li className="privacy-list-item">The right to data portability</li>
                            <li className="privacy-list-item">The right to withdraw consent</li>
                            <li className="privacy-list-item">The right to opt-out of marketing communications</li>
                        </ul>
                    </section>

                    <section className="privacy-section">
                        <h2 className="privacy-heading">Children's Privacy</h2>
                        <p className="privacy-text">
                            Our services are not directed to children under the age of 13 (or 16 in certain jurisdictions). We do not
                            knowingly collect personal information from children. If you are a parent or guardian and believe your child
                            has provided us with personal information, please contact us so we can delete such information.
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2 className="privacy-heading">International Data Transfers</h2>
                        <p className="privacy-text">
                            Your information may be transferred to and maintained on computers located outside of your state, province,
                            country, or other governmental jurisdiction where data protection laws may differ. By using our services,
                            you consent to such transfers.
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2 className="privacy-heading">Changes to This Privacy Policy</h2>
                        <p className="privacy-text">
                            We may update our privacy policy from time to time. We will notify you of any changes by posting the new
                            privacy policy on this page and updating the "Last Updated" date. You are advised to review this privacy
                            policy periodically for any changes.
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2 className="privacy-heading">Contact Us</h2>
                        <p className="privacy-text">
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                        </p>
                        <div className="privacy-contact">
                            <p className="privacy-text">The Vibe Collective</p>
                            <p className="privacy-text">Email: info@thevibecollective.co</p>
                            <p className="privacy-text">Website: www.thevibecollective.co</p>
                        </div>
                    </section>
                </div>

                <div className="privacy-back">
                    <Link to="/">
                        <ActionButton buttonSettings={{ buttonText: "Back to Home" }} />
                    </Link>
                </div>
            </article>
        </main>
    );
};