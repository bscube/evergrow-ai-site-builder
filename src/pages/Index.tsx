
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, CheckCircle, ArrowRight, Star, Users, Zap, Shield, MessageSquare, Phone, BarChart3, ChevronRight } from 'lucide-react';
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
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, RetailPlus',
      content: 'EverGrowDigital transformed our customer service. 40% reduction in response time and 95% customer satisfaction.',
      rating: 5,
      industry: 'Retail'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director, TravelEase',
      content: 'The AI booking agent handles 80% of our reservations automatically. Game-changer for our business.',
      rating: 5,
      industry: 'Travel'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Digital, FinanceForward',
      content: 'Seamless integration across all our channels. The WhatsApp bot alone increased our lead conversion by 60%.',
      rating: 5,
      industry: 'Fintech'
    }
  ];

  const clientLogos = [
    'RetailPlus', 'TravelEase', 'FinanceForward', 'EduTech Pro', 'HealthCare Plus', 'MediaStream',
    'TechCorp', 'GlobalBank', 'SmartRetail', 'FlightHub', 'EduMax', 'MediCare Pro'
  ];

  const faqs = [
    {
      question: 'How quickly can we deploy AI bots?',
      answer: 'Most implementations are live within 24-48 hours. Our rapid deployment process includes bot configuration, testing, and team training.'
    },
    {
      question: 'Do you support multiple languages?',
      answer: 'Yes, our AI bots support 100+ languages with natural language understanding and culturally appropriate responses.'
    },
    {
      question: 'What\'s included in the AI audit?',
      answer: 'Our free AI audit includes current process analysis, ROI projections, channel recommendations, and a custom implementation roadmap.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We maintain SOC 2 Type II compliance, end-to-end encryption, and follow GDPR/CCPA regulations with enterprise-grade security protocols.'
    },
    {
      question: 'Can bots handle complex queries?',
      answer: 'Our AI bots handle 80-90% of queries autonomously, with seamless handover to human agents for complex issues requiring personal touch.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve all major industries including Retail, Travel, Fintech, Healthcare, Education, and Media with industry-specific bot templates.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FloatingCTA />
      
      {/* Hero Section */}
      <section className="brand-gradient py-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 scroll-fade">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  AI Bots for Every
                  <span className="text-accent-yellow"> Channel</span> &
                  <span className="text-brand-green-200"> Industry</span>
                </h1>
                <p className="text-xl opacity-90 leading-relaxed max-w-lg">
                  Transform customer experience with intelligent AI that works across WhatsApp, web, and social channels.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white hover:bg-grey-50 text-grey-900 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg focus-brand"
                >
                  Book Free AI Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="border-2 border-white hover:bg-white hover:text-grey-900 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm opacity-75">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-brand-green-200 mr-1" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-brand-green-200 mr-1" />
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-brand-green-200 mr-1" />
                  Cancel anytime
                </div>
              </div>
            </div>

            <div className="relative scroll-fade">
              {/* CMS Comment: Replace this demo chat interface with actual product screenshots */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-error rounded-full"></div>
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="text-sm text-grey-500 ml-4">AI Chat Demo</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-brand-green-500 text-white rounded-lg p-4 rounded-bl-sm">
                      <p className="font-medium">Hi! How can I help you today?</p>
                    </div>
                    <div className="bg-grey-100 rounded-lg p-4 ml-8 rounded-br-sm">
                      <p className="text-grey-900">I need help with my order</p>
                    </div>
                    <div className="bg-brand-green-500 text-white rounded-lg p-4 rounded-bl-sm">
                      <p className="font-medium">I'd be happy to help! Let me pull up your order details...</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-brand-green-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-brand-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-brand-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Scroll */}
      <section className="py-12 bg-white border-b border-grey-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-grey-500 mb-8">Trusted by industry leaders worldwide</p>
          <div className="overflow-hidden">
            <div className="flex logo-scroll">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <div className="text-grey-500 font-semibold text-lg">{logo}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-grey-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scroll-fade">
                <div className="text-3xl lg:text-4xl font-bold text-brand-green-500 mb-2">{stat.number}</div>
                <div className="text-grey-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-grey-900 mb-6">
            See Our AI Bots in Action
          </h2>
          <p className="text-xl text-grey-600 mb-12">
            Watch how our AI transforms customer conversations across every channel
          </p>
          
          {/* CMS Comment: Replace with actual product demo video - 45 seconds, muted autoplay on desktop */}
          <div className="relative bg-grey-900 rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video flex items-center justify-center">
              <button className="flex items-center justify-center w-20 h-20 bg-brand-green-500 hover:bg-brand-green-600 rounded-full transition-colors duration-300">
                <Play className="w-10 h-10 text-white ml-1" />
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-grey-900 mb-4">
              Why Choose EverGrowDigital?
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Enterprise-grade AI with the simplicity your team needs. Deploy bots that understand your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover-lift transition-all duration-250 cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-brand-green-500 bg-opacity-10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-brand-green-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-grey-900 mb-3">{feature.title}</h3>
                <p className="text-grey-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-grey-900 mb-4">
              Success Stories Across Industries
            </h2>
            <p className="text-xl text-grey-600">
              See how companies transform their customer experience with our AI bots
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover-lift">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-yellow fill-current" />
                  ))}
                </div>
                <p className="text-grey-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-brand-green-500 bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-brand-green-500 font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-grey-900">{testimonial.name}</div>
                      <div className="text-grey-600 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-brand-green-500 bg-opacity-10 text-brand-green-500 text-xs font-medium rounded-full">
                    {testimonial.industry}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-grey-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-grey-600">
              Everything you need to know about our AI bot solutions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover-lift">
                <h3 className="text-lg font-semibold text-grey-900 mb-3 flex items-center">
                  <ChevronRight className="h-5 w-5 text-brand-green-500 mr-2" />
                  {faq.question}
                </h3>
                <p className="text-grey-600 leading-relaxed pl-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 brand-gradient text-white">
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
              className="bg-white hover:bg-grey-50 text-grey-900 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105 focus-brand"
            >
              Get Free AI Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-grey-900 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
          <p className="text-sm opacity-75 mt-6">
            No commitment • Free consultation • Setup in 24 hours
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
