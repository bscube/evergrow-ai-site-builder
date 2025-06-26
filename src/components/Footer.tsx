
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-400">EverGrow</span>
              <span className="text-2xl font-bold">Digital</span>
            </div>
            <p className="text-gray-300 text-sm">
              Transforming customer experiences with AI-powered chatbots across every channel and industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Channels */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Channels</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/channels/whatsapp" className="text-gray-300 hover:text-blue-400 transition-colors">WhatsApp</Link></li>
              <li><Link to="/channels/rcs-business-messaging" className="text-gray-300 hover:text-blue-400 transition-colors">RCS Business Messaging</Link></li>
              <li><Link to="/channels/instagram-direct" className="text-gray-300 hover:text-blue-400 transition-colors">Instagram Direct</Link></li>
              <li><Link to="/channels/facebook-messenger" className="text-gray-300 hover:text-blue-400 transition-colors">Facebook Messenger</Link></li>
              <li><Link to="/channels/web" className="text-gray-300 hover:text-blue-400 transition-colors">Web Chat</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/industries/retail" className="text-gray-300 hover:text-blue-400 transition-colors">Retail</Link></li>
              <li><Link to="/industries/travel" className="text-gray-300 hover:text-blue-400 transition-colors">Travel</Link></li>
              <li><Link to="/industries/fintech" className="text-gray-300 hover:text-blue-400 transition-colors">Fintech</Link></li>
              <li><Link to="/industries/edtech" className="text-gray-300 hover:text-blue-400 transition-colors">Ed Tech</Link></li>
              <li><Link to="/industries/healthcare" className="text-gray-300 hover:text-blue-400 transition-colors">Healthcare</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">hello@evergrowdigital.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-blue-400 mt-0.5" />
                <span className="text-gray-300">123 Business Ave<br />Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 EverGrowDigital. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
