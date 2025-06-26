
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageSquare, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const channels = [
    { name: 'WhatsApp', path: '/channels/whatsapp', icon: '💬' },
    { name: 'RCS Business Messaging', path: '/channels/rcs-business-messaging', icon: '📱' },
    { name: 'Instagram Direct', path: '/channels/instagram-direct', icon: '📷' },
    { name: 'Facebook Messenger', path: '/channels/facebook-messenger', icon: '💙' },
    { name: 'Web Chat', path: '/channels/web', icon: '🌐' },
  ];

  const industries = [
    { name: 'Retail', path: '/industries/retail', icon: '🛍️' },
    { name: 'Travel', path: '/industries/travel', icon: '✈️' },
    { name: 'Fintech', path: '/industries/fintech', icon: '💳' },
    { name: 'Ed Tech', path: '/industries/edtech', icon: '🎓' },
    { name: 'Media & Entertainment', path: '/industries/media-entertainment', icon: '🎬' },
    { name: 'Healthcare', path: '/industries/healthcare', icon: '🏥' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">EverGrow</span>
              <span className="text-2xl font-bold text-gray-800">Digital</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={() => handleDropdown('channels')}
              >
                By Channels
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'channels' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border z-50">
                  <div className="py-2">
                    {channels.map((channel) => (
                      <Link
                        key={channel.name}
                        to={channel.path}
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="mr-3 text-lg">{channel.icon}</span>
                        {channel.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={() => handleDropdown('industries')}
              >
                By Industry
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border z-50">
                  <div className="py-2">
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        to={industry.path}
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="mr-3 text-lg">{industry.icon}</span>
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/ai-bots"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              AI Bots
            </Link>
            <Link
              to="/resources"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Book AI Audit
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="space-y-1">
              <button
                onClick={() => handleDropdown('channels-mobile')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
              >
                By Channels
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'channels-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'channels-mobile' && (
                <div className="pl-4 space-y-1">
                  {channels.map((channel) => (
                    <Link
                      key={channel.name}
                      to={channel.path}
                      className="flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-2">{channel.icon}</span>
                      {channel.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => handleDropdown('industries-mobile')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
              >
                By Industry
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'industries-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'industries-mobile' && (
                <div className="pl-4 space-y-1">
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      to={industry.path}
                      className="flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-2">{industry.icon}</span>
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/ai-bots"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              AI Bots
            </Link>
            <Link
              to="/resources"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium mt-4"
              onClick={() => setIsOpen(false)}
            >
              Book AI Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
