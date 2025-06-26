
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, CheckCircle, ArrowRight, Star, Users, Zap, Shield, MessageSquare, Phone, BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';
import FloatingCTA from '../components/FloatingCTA';
import Footer from '../components/Footer';

const Index = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50M+', label: 'Messages Processed' },
    { number: '24/7', label: 'Support' },
  ];

  const features = [
    {
      icon: MessageSquare,
      title: 'Multi-Channel Integration',
      description: 'Deploy AI bots across WhatsApp, Instagram, Facebook Messenger, RCS, and web chat from a single platform.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Responses',
      description: 'AI-powered responses in under 2 seconds, ensuring your customers never wait.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into customer interactions, conversion rates, and bot performance.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance and end-to-end encryption.'
    },
    {
      icon: Users,
      title: 'Human Handover',
      description: 'Seamless transition to human agents when complex issues require personal touch.'
    },
    {
      icon: Phone,
      title: 'Voice Integration',
      description: 'AI voice agents for phone calls with natural language understanding.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, RetailPlus',
      content: 'EverGrowDigital transformed our customer service. 40% reduction in response time and 95% customer satisfaction.',
      rating: 5,
      company: 'RetailPlus'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director, TravelEase',
      content: 'The AI booking agent handles 80% of our reservations automatically. Game-changer for our business.',
      rating: 5,
      company: 'TravelEase'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Digital, FinanceForward',
      content: 'Seamless integration across all our channels. The WhatsApp bot alone increased our lead conversion by 60%.',
      rating: 5,
      company: 'FinanceForward'
    }
  ];

  const clientLogos = [
    'RetailPlus', 'TravelEase', 'FinanceForward', 'EduTech Pro', 'HealthCare Plus', 'MediaStream'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FloatingCTA />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  AI Bots for Every
                  <span className="text-blue-600"> Channel</span> &
                  <span className="text-purple-600"> Industry</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your customer experience with intelligent AI chatbots that work across WhatsApp, Instagram, Facebook Messenger, RCS, and web. Automate support, sales, and bookings with enterprise-grade security.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Book Free AI Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  Cancel anytime
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-100 rounded-lg p-4">
                      <p className="text-blue-900 font-medium">Hi! How can I help you today?</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 ml-8">
                      <p className="text-gray-800">I need help with my order</p>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-4">
                      <p className="text-blue-900 font-medium">I'd be happy to help! Let me pull up your order details...</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EverGrowDigital?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for enterprise scale with the simplicity your team needs. Deploy AI bots that actually understand your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of companies transforming their customer experience
            </p>
          </div>

          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {clientLogos.map((logo, index) => (
              <div key={index} className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-gray-600 font-semibold">{logo}</span>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free AI audit and discover how our chatbots can increase your sales, reduce support costs, and delight your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              Get Free AI Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No commitment • Free consultation • Setup in 24 hours
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
