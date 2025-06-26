
import React from 'react';
import { CheckCircle, ArrowRight, MessageSquare, BarChart3, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const WhatsApp = () => {
  const features = [
    {
      title: 'Rich Media Support',
      description: 'Send images, videos, documents, and interactive buttons to create engaging conversations.'
    },
    {
      title: 'Business API Integration',
      description: 'Fully integrated with WhatsApp Business API for enterprise-grade messaging.'
    },
    {
      title: 'Template Messages',
      description: 'Pre-approved message templates for notifications, confirmations, and updates.'
    },
    {
      title: 'End-to-End Encryption',
      description: 'All messages are encrypted to ensure customer data privacy and security.'
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Handle customer inquiries, complaints, and support tickets automatically.',
      icon: MessageSquare
    },
    {
      title: 'Order Management',
      description: 'Process orders, send confirmations, and provide delivery updates.',
      icon: BarChart3
    },
    {
      title: 'Lead Qualification',
      description: 'Qualify leads and schedule appointments with potential customers.',
      icon: Shield
    },
    {
      title: 'Payment Processing',
      description: 'Secure payment collection and transaction confirmations.',
      icon: Zap
    }
  ];

  const benefits = [
    '2 billion active users worldwide',
    '98% message open rate',
    '45% higher engagement than email',
    'Available in 180+ countries',
    'Instant message delivery',
    'Rich media support'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  WhatsApp AI Bot
                  <span className="text-green-600"> Solutions</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect with 2 billion WhatsApp users worldwide. Automate customer support, sales, and bookings with AI-powered chatbots that feel naturally human.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Try WhatsApp Bot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="border-2 border-green-600 hover:bg-green-50 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Live Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="bg-green-500 text-white p-4 rounded-t-xl flex items-center">
                  <MessageSquare className="h-6 w-6 mr-3" />
                  <div>
                    <h3 className="font-semibold">Customer Support Bot</h3>
                    <p className="text-sm opacity-90">Online now</p>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-gray-800">Hi! I need help with my order #12345</p>
                  </div>
                  <div className="bg-green-100 rounded-lg p-3 max-w-xs ml-auto">
                    <p className="text-sm text-gray-800">I'd be happy to help! Let me check your order status...</p>
                  </div>
                  <div className="bg-green-100 rounded-lg p-3 max-w-xs ml-auto">
                    <p className="text-sm text-gray-800">Great news! Your order is being prepared and will be shipped today. You'll receive tracking info shortly.</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-gray-800">Perfect! Thank you so much! 👍</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              WhatsApp Bot Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade WhatsApp automation with advanced AI capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              WhatsApp Bot Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              Transform every aspect of your customer communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <useCase.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose WhatsApp for Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                WhatsApp is the world's most popular messaging platform with unmatched reach and engagement rates.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl font-bold text-green-600">24 hours</div>
                    <div className="text-sm text-gray-600">Setup time</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl font-bold text-green-600">98%</div>
                    <div className="text-sm text-gray-600">Message open rate</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl font-bold text-green-600">60%</div>
                    <div className="text-sm text-gray-600">Cost reduction</div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center mt-6 w-full transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Start Your WhatsApp AI Bot Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses using WhatsApp bots to automate customer service, increase sales, and improve customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              Get Free WhatsApp Bot Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatsApp;
