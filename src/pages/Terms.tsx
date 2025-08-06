import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p className="text-sm text-muted-foreground">Last updated: December 2024</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Acceptance of Terms</h2>
            <p>By accessing and using EverGrow Digital's AI chatbot services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Service Description</h2>
            <p>EverGrow Digital provides AI-powered chatbot solutions for customer service, sales, and automation across various messaging platforms including WhatsApp, Facebook Messenger, and Instagram.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and current information</li>
              <li>Use the service in compliance with applicable laws</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Not misuse or abuse the AI chatbot services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Intellectual Property</h2>
            <p>All content, features, and functionality of our services are owned by EverGrow Digital and are protected by copyright, trademark, and other intellectual property laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitation of Liability</h2>
            <p>EverGrow Digital shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
            <p>For questions regarding these terms, please contact us at:</p>
            <p>Email: tellus@evergrowdigital.com<br />
            Phone: +971562432412</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;