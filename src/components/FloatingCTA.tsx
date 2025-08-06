
import React, { useState } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Widget */}
      <div className="mb-4">
        <a
          href="https://wa.me/971554966233"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus-brand"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="h-6 w-6" />
        </a>
      </div>

      {/* Main CTA Button */}
      <div className="relative">
        {isExpanded && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border p-4 w-64 scroll-fade">
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 text-grey-500 hover:text-grey-700"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="font-semibold text-grey-900 mb-2">Ready to get started?</h3>
            <p className="text-sm text-grey-600 mb-4">Book a free AI audit and discover how we can transform your customer experience.</p>
            <div className="space-y-2">
              <Link
                to="/contact"
                className="block w-full btn-primary text-center px-4 py-2 rounded-md text-sm font-medium"
                onClick={() => setIsExpanded(false)}
              >
                Book AI Audit
              </Link>
              <a
                href="tel:+971554966233"
                className="block w-full bg-grey-100 hover:bg-grey-300 text-grey-900 text-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-250"
                onClick={() => setIsExpanded(false)}
              >
                Call Now
              </a>
            </div>
          </div>
        )}
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center w-16 h-16 btn-primary rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus-brand"
          aria-label="Book AI Audit"
        >
          <Phone className="h-7 w-7" />
        </button>
      </div>

      {/* Sticky Book AI Audit Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Link
          to="/contact"
          className="btn-primary px-6 py-3 rounded-full shadow-lg text-sm font-medium hover:scale-105 transition-all duration-300 focus-brand"
        >
          Book AI Audit
        </Link>
      </div>
    </div>
  );
};

export default FloatingCTA;
