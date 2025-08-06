import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p className="text-sm text-muted-foreground">Last updated: December 2024</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, contact us, or use our AI chatbot services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our AI chatbot services</li>
              <li>To communicate with you about our services</li>
              <li>To analyze usage patterns and optimize performance</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Services</h2>
            <p>Our services may integrate with third-party platforms like WhatsApp, Facebook Messenger, and Instagram. These integrations are subject to the respective platforms' privacy policies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>Email: tellus@evergrowdigital.com<br />
            Phone: +971562432412</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;