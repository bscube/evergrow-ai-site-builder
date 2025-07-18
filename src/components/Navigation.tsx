
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageSquare, Phone, Zap, Shield, Users, BarChart3, ShoppingBag, Plane, CreditCard, GraduationCap, Film, Activity, Mic, Headphones, Target, Calendar, Globe, BookOpen, FileText, Video, Download, HelpCircle } from 'lucide-react';
import logo from '/lovable-uploads/5cf03d01-cb50-465d-bc4d-c465e177e8ee.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const aiAgents = [
    { 
      name: 'AI Support Agent', 
      path: '/ai-agents/support', 
      icon: Headphones,
      benefit: 'Streamline support without pre-built journeys'
    },
    { 
      name: 'AI Sales Agent', 
      path: '/ai-agents/sales', 
      icon: Target,
      benefit: 'Convert prospects into customers automatically'
    },
    { 
      name: 'AI Booking Agent', 
      path: '/ai-agents/booking', 
      icon: Calendar,
      benefit: 'Automate scheduling and appointment management'
    },
    { 
      name: 'AI Lead Qualification', 
      path: '/ai-agents/lead-qualification', 
      icon: Target,
      benefit: 'Identify and qualify high-value prospects'
    },
  ];

  const channels = [
    { 
      name: 'Website Chat', 
      path: '/channels/website-chatbot', 
      icon: Globe,
      benefit: 'Instant support on your website & mobile app'
    },
    { 
      name: 'Facebook Messenger', 
      path: '/channels/facebook-chatbot', 
      icon: MessageSquare,
      benefit: 'Social selling with 1.3B active users'
    },
    { 
      name: 'Instagram Direct', 
      path: '/channels/instagram-chatbots', 
      icon: Users,
      benefit: 'Visual commerce & story-driven conversations'
    },
    { 
      name: 'WhatsApp', 
      path: '/channels/whatsapp', 
      icon: MessageSquare,
      benefit: 'Reach 2B+ users with rich media & quick replies'
    },
  ];

  const industries = [
    { 
      name: 'Retail', 
      path: '/industries/retail', 
      icon: ShoppingBag,
      benefit: 'Product discovery, orders & customer service'
    },
    { 
      name: 'Travel & Hospitality', 
      path: '/industries/travel', 
      icon: Plane,
      benefit: 'Bookings, itineraries & real-time updates'
    },
    { 
      name: 'Fintech', 
      path: '/industries/fintech', 
      icon: CreditCard,
      benefit: 'Account queries, payments & compliance'
    },
    { 
      name: 'Education', 
      path: '/industries/education', 
      icon: GraduationCap,
      benefit: 'Course enrollment, support & engagement'
    },
    { 
      name: 'Media & Entertainment', 
      path: '/industries/media-entertainment', 
      icon: Film,
      benefit: 'Content discovery & subscriber support'
    },
    { 
      name: 'Healthcare', 
      path: '/industries/healthcare', 
      icon: Activity,
      benefit: 'Appointments, reminders & patient care'
    },
  ];

  const resources = [
    { 
      name: 'Case Studies', 
      path: '/case-studies', 
      icon: FileText,
      benefit: 'Real success stories from our clients'
    },
    { 
      name: 'Knowledge Center', 
      path: '/knowledge-center', 
      icon: BookOpen,
      benefit: 'Comprehensive guides and documentation'
    },
    { 
      name: 'Customer Showcase', 
      path: '/customer-showcase', 
      icon: Users,
      benefit: 'See how businesses transform with AI'
    },
    { 
      name: 'Webinars', 
      path: '/webinars', 
      icon: Video,
      benefit: 'Live demos and expert insights'
    },
    { 
      name: 'Reports & Research', 
      path: '/reports-research', 
      icon: BarChart3,
      benefit: 'Industry trends and analysis'
    },
    { 
      name: 'Company Blog', 
      path: '/company-blog', 
      icon: BookOpen,
      benefit: 'Latest AI insights and updates'
    },
    { 
      name: 'Tech Blog', 
      path: '/tech-blog', 
      icon: Zap,
      benefit: 'Technical deep dives and tutorials'
    },
    { 
      name: 'Conversations on AI', 
      path: '/conversations-on-ai', 
      icon: Mic,
      benefit: 'Thought leadership discussions'
    },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center ml-4 sm:ml-6 lg:ml-8">
              <img 
                src={logo} 
                alt="EverGrow Digital" 
                className="h-10 sm:h-11 lg:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center text-grey-700 hover:text-brand-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-250"
                onClick={() => handleDropdown('ai-agents')}
                aria-label="AI Agents menu"
              >
                AI Agents
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'ai-agents' && (
                <div className="absolute top-full left-0 mt-1 w-96 bg-white rounded-md shadow-xl border z-50">
                  <div className="py-4">
                    <div className="grid grid-cols-1 gap-1">
                      {aiAgents.map((agent) => (
                        <Link
                          key={agent.name}
                          to={agent.path}
                          className="flex items-start px-6 py-4 text-sm hover:bg-grey-50 transition-colors duration-250"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <agent.icon className="mr-4 h-5 w-5 text-brand-green-500 mt-0.5" />
                          <div>
                            <div className="font-semibold text-grey-900 mb-1">{agent.name}</div>
                            <div className="text-grey-500 text-xs">{agent.benefit}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button 
                className="flex items-center text-grey-700 hover:text-brand-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-250"
                onClick={() => handleDropdown('channels')}
                aria-label="By Channels menu"
              >
                By Channels
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'channels' && (
                <div className="absolute top-full left-0 mt-1 w-96 bg-white rounded-md shadow-xl border z-50">
                  <div className="py-4">
                    <div className="grid grid-cols-1 gap-1">
                      {channels.map((channel) => (
                        <Link
                          key={channel.name}
                          to={channel.path}
                          className="flex items-start px-6 py-4 text-sm hover:bg-grey-50 transition-colors duration-250"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <channel.icon className="mr-4 h-5 w-5 text-brand-green-500 mt-0.5" />
                          <div>
                            <div className="font-semibold text-grey-900 mb-1">{channel.name}</div>
                            <div className="text-grey-500 text-xs">{channel.benefit}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button 
                className="flex items-center text-grey-700 hover:text-brand-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-250"
                onClick={() => handleDropdown('industries')}
                aria-label="By Industry menu"
              >
                By Industry
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 mt-1 w-96 bg-white rounded-md shadow-xl border z-50">
                  <div className="py-4">
                    <div className="grid grid-cols-1 gap-1">
                      {industries.map((industry) => (
                        <Link
                          key={industry.name}
                          to={industry.path}
                          className="flex items-start px-6 py-4 text-sm hover:bg-grey-50 transition-colors duration-250"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <industry.icon className="mr-4 h-5 w-5 text-brand-green-500 mt-0.5" />
                          <div>
                            <div className="font-semibold text-grey-900 mb-1">{industry.name}</div>
                            <div className="text-grey-500 text-xs">{industry.benefit}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button 
                className="flex items-center text-grey-700 hover:text-brand-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-250"
                onClick={() => handleDropdown('resources')}
                aria-label="Resources menu"
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-1 w-96 bg-white rounded-md shadow-xl border z-50">
                  <div className="py-4">
                    <div className="grid grid-cols-2 gap-1">
                      {resources.map((resource) => (
                        <Link
                          key={resource.name}
                          to={resource.path}
                          className="flex items-start px-4 py-3 text-sm hover:bg-grey-50 transition-colors duration-250"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <resource.icon className="mr-3 h-4 w-4 text-brand-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-grey-900 mb-1">{resource.name}</div>
                            <div className="text-grey-500 text-xs">{resource.benefit}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-grey-700 hover:text-brand-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-250"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="btn-primary px-6 py-2 rounded-md text-sm font-medium focus-brand"
            >
              Book AI Audit
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-grey-700 hover:text-brand-green-500 focus:outline-none focus-brand"
              aria-label="Toggle menu"
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
                onClick={() => handleDropdown('ai-agents-mobile')}
                className="w-full flex items-center justify-between text-grey-700 hover:text-brand-green-500 px-3 py-2 rounded-md text-base font-medium"
              >
                AI Agents
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'ai-agents-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'ai-agents-mobile' && (
                <div className="pl-4 space-y-1">
                  {aiAgents.map((agent) => (
                    <Link
                      key={agent.name}
                      to={agent.path}
                      className="flex items-center text-grey-600 hover:text-brand-green-500 px-3 py-2 rounded-md text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <agent.icon className="mr-3 h-4 w-4" />
                      {agent.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => handleDropdown('channels-mobile')}
                className="w-full flex items-center justify-between text-grey-700 hover:text-brand-green-500 px-3 py-2 rounded-md text-base font-medium"
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
                      className="flex items-center text-grey-600 hover:text-brand-green-500 px-3 py-2 rounded-md text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <channel.icon className="mr-3 h-4 w-4" />
                      {channel.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => handleDropdown('industries-mobile')}
                className="w-full flex items-center justify-between text-grey-700 hover:text-brand-green-500 px-3 py-2 rounded-md text-base font-medium"
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
                      className="flex items-center text-grey-600 hover:text-brand-green-500 px-3 py-2 rounded-md text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <industry.icon className="mr-3 h-4 w-4" />
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => handleDropdown('resources-mobile')}
                className="w-full flex items-center justify-between text-grey-700 hover:text-brand-green-500 px-3 py-2 rounded-md text-base font-medium"
              >
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'resources-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'resources-mobile' && (
                <div className="pl-4 space-y-1">
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      to={resource.path}
                      className="flex items-center text-grey-600 hover:text-brand-green-500 px-3 py-2 rounded-md text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <resource.icon className="mr-3 h-4 w-4" />
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="btn-primary block px-3 py-2 rounded-md text-base font-medium mt-4 text-center"
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
