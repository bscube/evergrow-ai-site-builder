
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
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <MessageSquare className="h-6 w-6" />
        </a>
      </div>

      {/* Main CTA Button */}
      <div className="relative">
        {isExpanded && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border p-4 w-64 animate-fade-in">
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="font-semibold text-gray-800 mb-2">Ready to get started?</h3>
            <p className="text-sm text-gray-600 mb-4">Book a free AI audit and discover how we can transform your customer experience.</p>
            <div className="space-y-2">
              <Link
                to="/contact"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={() => setIsExpanded(false)}
              >
                Book AI Audit
              </Link>
              <a
                href="tel:+1234567890"
                className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-center px-4 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={() => setIsExpanded(false)}
              >
                Call Now
              </a>
            </div>
          </div>
        )}
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <Phone className="h-7 w-7" />
        </button>
      </div>
    </div>
  );
};

export default FloatingCTA;
