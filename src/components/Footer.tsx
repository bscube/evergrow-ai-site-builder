
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-grey-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-brand-green-500">EverGrow</span>
              <span className="text-2xl font-bold">Digital</span>
            </div>
            <p className="text-grey-300 text-sm">
              Transforming customer experiences with AI-powered chatbots across every channel and industry.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/evergrow-digital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-grey-500 hover:text-brand-green-500 transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/evergrowdigital/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-grey-500 hover:text-brand-green-500 transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/evergrowdigital/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-grey-500 hover:text-brand-green-500 transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* AI Agents */}
          <div className="space-y-4">
            <Link to="/ai-agents" className="text-lg font-semibold text-white hover:text-brand-green-500 transition-colors duration-300 block">AI Agents</Link>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ai-agents/support" className="text-grey-300 hover:text-brand-green-500 transition-colors">AI Support Agent</Link></li>
              <li><Link to="/ai-agents/sales" className="text-grey-300 hover:text-brand-green-500 transition-colors">AI Sales Agent</Link></li>
              <li><Link to="/ai-agents/booking" className="text-grey-300 hover:text-brand-green-500 transition-colors">AI Booking Agent</Link></li>
              <li><Link to="/ai-agents/lead-qualification" className="text-grey-300 hover:text-brand-green-500 transition-colors">AI Lead Qualification</Link></li>
            </ul>
          </div>

          {/* Channels */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Channels</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/channels/whatsapp" className="text-grey-300 hover:text-brand-green-500 transition-colors">WhatsApp</Link></li>
              <li><Link to="/channels/instagram-chatbots" className="text-grey-300 hover:text-brand-green-500 transition-colors">Instagram Direct</Link></li>
              <li><Link to="/channels/facebook-chatbot" className="text-grey-300 hover:text-brand-green-500 transition-colors">Facebook Messenger</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-brand-green-500" />
                <span className="text-grey-300">tellus@evergrowdigital.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-brand-green-500" />
                <span className="text-grey-300">+971562432412</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-brand-green-500 mt-0.5" />
                <span className="text-grey-300">EVERGROW DIGITAL MARKETING<br />MANAGEMENT LLC<br />Al Khaleej Building, Near Karama Park<br />M6. Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-grey-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-grey-500">
              © 2024 EverGrow Digital. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-grey-500 hover:text-brand-green-500 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-grey-500 hover:text-brand-green-500 transition-colors">Terms of Service</Link>
              <Link to="/contact" className="text-sm text-grey-500 hover:text-brand-green-500 transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
