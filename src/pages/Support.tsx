import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, MessageCircle, Clock, HelpCircle } from 'lucide-react';

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Support Center</h1>
          <p className="text-xl text-muted-foreground">Get help with your AI chatbot solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Options */}
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-lg font-semibold text-foreground">Email Support</h3>
            </div>
            <p className="text-muted-foreground mb-4">Send us an email and we'll respond within 24 hours</p>
            <a href="mailto:tellus@evergrowdigital.com" className="text-primary hover:underline">
              tellus@evergrowdigital.com
            </a>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-center mb-4">
              <Phone className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-lg font-semibold text-foreground">Phone Support</h3>
            </div>
            <p className="text-muted-foreground mb-4">Call us during business hours</p>
            <a href="tel:+971562432412" className="text-primary hover:underline">
              +971562432412
            </a>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-center mb-4">
              <MessageCircle className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-lg font-semibold text-foreground">WhatsApp Support</h3>
            </div>
            <p className="text-muted-foreground mb-4">Chat with us on WhatsApp</p>
            <a 
              href="https://wa.me/971562432412" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline"
            >
              Start WhatsApp Chat
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center">
              <HelpCircle className="h-6 w-6 mr-3" />
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-semibold text-foreground mb-2">How do I get started with AI chatbots?</h3>
                <p className="text-muted-foreground">Contact us for a free consultation and demo. We'll help you identify the best AI agent solution for your business needs.</p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-semibold text-foreground mb-2">What platforms do you support?</h3>
                <p className="text-muted-foreground">We support WhatsApp, Facebook Messenger, Instagram Direct, and website chatbots.</p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-semibold text-foreground mb-2">How long does implementation take?</h3>
                <p className="text-muted-foreground">Implementation typically takes 2-4 weeks depending on complexity and integration requirements.</p>
              </div>
            </div>
          </div>

          {/* Business Hours & Location */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center">
              <Clock className="h-6 w-6 mr-3" />
              Business Hours & Location
            </h2>
            
            <div className="bg-card p-6 rounded-lg border">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (GMT+4)</p>
                  <p className="text-muted-foreground">Weekend: By appointment only</p>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Office Location</h3>
                    <p className="text-muted-foreground">
                      EVERGROW DIGITAL MARKETING<br />
                      MANAGEMENT LLC<br />
                      Al Khaleej Building, Near Karama Park<br />
                      M6. Dubai, UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;