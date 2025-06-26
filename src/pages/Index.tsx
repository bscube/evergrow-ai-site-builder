
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, CheckCircle, ArrowRight, Star, Users, Zap, Shield, MessageSquare, Phone, BarChart3, ChevronDown, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import FloatingCTA from '../components/FloatingCTA';
import Footer from '../components/Footer';

const Index = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const stats = [
    { number: '500+', label: 'Clients', schema: 'clients' },
    { number: '99.9%', label: 'Uptime', schema: 'uptime' },
    { number: '50M+', label: 'Messages', schema: 'messages' },
    { number: '24/7', label: 'Support', schema: 'support' },
  ];

  const features = [
    {
      icon: MessageSquare,
      title: 'Multi-Channel Integration',
      description: 'Deploy AI bots across WhatsApp, Instagram, Facebook Messenger, RCS, and web chat from a single platform.',
      benefits: ['One dashboard for all channels', 'Unified customer data', 'Cross-channel analytics']
    },
    {
      icon: Zap,
      title: 'Lightning Response',
      description: 'AI-powered responses in under 2 seconds, ensuring your customers never wait.',
      benefits: ['Sub-2 second response time', 'Real-time conversation flow', 'Instant query resolution']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into customer interactions, conversion rates, and bot performance.',
      benefits: ['Real-time performance metrics', 'Conversion tracking', 'Customer journey mapping']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance and end-to-end encryption.',
      benefits: ['SOC 2 Type II certified', 'End-to-end encryption', 'GDPR & CCPA compliant']
    }
  ];

  const industries = [
    { name: 'Retail', link: '/industries/retail', icon: '🛍️', metric: '↑40% Sales' },
    { name: 'Travel', link: '/industries/travel', icon: '✈️', metric: '↑60% Bookings' },
    { name: 'Fintech', link: '/industries/fintech', icon: '💳', metric: '↑75% Leads' },
    { name: 'Ed Tech', link: '/industries/edtech', icon: '📚', metric: '↑50% Engagement' },
    { name: 'Healthcare', link: '/industries/healthcare', icon: '🏥', metric: '↑85% Efficiency' },
    { name: 'Media', link: '/industries/media-entertainment', icon: '🎬', metric: '↑65% Retention' }
  ];

  const successStories = [
    {
      metric: '↑65% Conversion',
      company: 'RetailPlus',
      summary: 'WhatsApp AI agent increased online sales conversion by implementing smart product recommendations and abandoned cart recovery.',
      link: '/case-studies/retailplus'
    },
    {
      metric: '↑80% Automation',
      company: 'TravelEase',
      summary: 'AI booking agent now handles 4 out of 5 reservations automatically, reducing response time from hours to seconds.',
      link: '/case-studies/travelease'
    },
    {
      metric: '↑90% Satisfaction',
      company: 'FinanceForward',
      summary: 'Multi-channel support bot resolved 90% of customer queries without human intervention while maintaining high satisfaction.',
      link: '/case-studies/financeforward'
    }
  ];

  const clientLogos = [
    'RetailPlus', 'TravelEase', 'FinanceForward', 'EduTech Pro', 'HealthCare Plus', 'MediaStream',
    'TechCorp', 'GlobalBank', 'SmartRetail', 'FlightHub', 'EduMax', 'MediCare Pro'
  ];

  const faqs = [
    {
      question: 'How quickly can we deploy AI bots?',
      answer: 'Most implementations are live within 24-48 hours. Our rapid deployment process includes bot configuration, testing, and team training with zero downtime.'
    },
    {
      question: 'What channels do your AI bots support?',
      answer: 'Our bots work across WhatsApp Business API, Instagram Direct, Facebook Messenger, RCS Business Messaging, and web chat - all managed from one dashboard.'
    },
    {
      question: 'What\'s included in the free AI audit?',
      answer: 'Our comprehensive audit includes current process analysis, ROI projections, channel recommendations, competitor analysis, and a custom implementation roadmap.'
    },
    {
      question: 'How do you ensure data security and compliance?',
      answer: 'We maintain SOC 2 Type II compliance, end-to-end encryption, and follow GDPR/CCPA regulations with enterprise-grade security protocols and regular audits.'
    },
    {
      question: 'Can AI bots handle complex customer queries?',
      answer: 'Our AI bots handle 80-90% of queries autonomously using advanced NLP, with seamless handover to human agents for complex issues requiring personal attention.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We serve Retail, Travel, Fintech, Healthcare, Education, and Media with industry-specific bot templates, compliance requirements, and specialized workflows.'
    }
  ];

  const recentPosts = [
    {
      title: 'WhatsApp Business API: Complete Guide for 2024',
      thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop',
      link: '/resources/whatsapp-business-api-guide'
    },
    {
      title: 'AI Sales Agents: 5x Your Conversion Rate',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop',
      link: '/resources/ai-sales-agents-conversion'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FloatingCTA />
      
      {/* Hero Section - Above the Fold */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Subtle green radial blob */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green-500 opacity-10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 scroll-fade">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-grey-900">
                  <span className="text-brand-green-500">AI Bots</span> for Every
                  <span className="block">Channel & Industry</span>
                </h1>
                <p className="text-xl text-grey-600 leading-relaxed max-w-lg">
                  WhatsApp, Web & Social Chatbots that convert visitors into customers automatically.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105 focus-brand"
                >
                  Book AI Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="border-2 border-brand-green-500 hover:bg-brand-green-500 hover:text-white text-brand-green-500 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-grey-500">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-brand-green-500 mr-1" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-brand-green-500 mr-1" />
                  14-day trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-brand-green-500 mr-1" />
                  Cancel anytime
                </div>
              </div>
            </div>

            <div className="relative scroll-fade">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-error rounded-full"></div>
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="text-sm text-grey-500 ml-4">Live AI Chat</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-brand-green-500 text-white rounded-lg p-4 rounded-bl-sm">
                      <p className="font-medium">Hi! I'm your AI sales assistant. How can I help you today?</p>
                    </div>
                    <div className="bg-grey-100 rounded-lg p-4 ml-8 rounded-br-sm">
                      <p className="text-grey-900">I want to increase my website conversions</p>
                    </div>
                    <div className="bg-brand-green-500 text-white rounded-lg p-4 rounded-bl-sm">
                      <p className="font-medium">Perfect! Our WhatsApp AI bots increase conversions by 40-75%. Let me show you how...</p>
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

      {/* Social Proof Strip */}
      <section className="py-12 bg-grey-50 border-b border-grey-300">
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

      {/* Stats Bar */}
      <section className="py-16 bg-grey-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scroll-fade">
                <div className="text-3xl lg:text-4xl font-bold text-brand-green-500 mb-2">
                  <strong>
                    <span itemProp="achievement">{stat.number}</span>
                  </strong>
                </div>
                <div className="text-grey-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Explainer */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-grey-900 mb-6">
            Turn Chats into Customers—Fast
          </h2>
          <p className="text-xl text-grey-600 mb-12 max-w-2xl mx-auto">
            Our AI sales agents, lead qualification bots, and WhatsApp automation work 24/7 to convert every conversation into revenue. See how in 45 seconds.
          </p>
          
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

      {/* Feature Grid */}
      <section className="py-20 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-grey-900 mb-4">
              Why Choose EverGrowDigital?
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Enterprise-grade AI with the simplicity your team needs. Deploy bots that understand your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover-lift transition-all duration-250 cursor-pointer">
                <div className="flex items-center mb-6">
                  <div className="p-3 border-2 border-brand-green-500 rounded-lg">
                    <feature.icon className="h-6 w-6 text-brand-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-grey-900 ml-4">{feature.title}</h3>
                </div>
                <p className="text-grey-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-grey-600">
                      <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-grey-900 mb-4">
              Built for Every Industry
            </h2>
            <p className="text-xl text-grey-600">
              Specialized AI solutions that understand your business needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Link
                key={index}
                to={industry.link}
                className="bg-white border-2 border-grey-300 hover:border-brand-green-500 rounded-xl p-6 text-center hover-lift transition-all duration-250 group"
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-grey-900 mb-2">{industry.name}</h3>
                <div className="text-sm font-medium text-brand-green-500">{industry.metric}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-grey-900 mb-4">
              Success Stories That Speak
            </h2>
            <p className="text-xl text-grey-600">
              Real results from businesses like yours
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <article key={index} className="bg-white rounded-xl p-8 hover-lift shadow-lg" itemScope itemType="https://schema.org/Article">
                <div className="text-2xl font-bold text-brand-green-500 mb-4" itemProp="headline">
                  {story.metric}
                </div>
                <h3 className="text-lg font-semibold text-grey-900 mb-3">{story.company}</h3>
                <p className="text-grey-600 mb-6 leading-relaxed" itemProp="description">
                  {story.summary}
                </p>
                <Link 
                  to={story.link}
                  className="text-brand-green-500 font-medium hover:underline inline-flex items-center"
                >
                  Read full story
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-brand-green-500 to-brand-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to See ROI in 14 Days?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free AI audit and discover exactly how chatbots will transform your business.
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
              className="border-2 border-white hover:bg-white hover:text-brand-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-grey-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-grey-600">
              Everything you need to know about our AI bot solutions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-grey-50 rounded-xl overflow-hidden" itemScope itemType="https://schema.org/Question">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-grey-100 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-grey-900" itemProp="name">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-brand-green-500 transform transition-transform duration-200 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4" itemScope itemType="https://schema.org/Answer">
                    <p className="text-grey-600 leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Teaser */}
      <section className="py-20 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-grey-900 mb-4">
              Latest Resources
            </h2>
            <p className="text-xl text-grey-600">
              Expert insights on AI automation and customer engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post, index) => (
              <Link
                key={index}
                to={post.link}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover-lift transition-all duration-250"
              >
                <img 
                  src={post.thumbnail} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-grey-900 hover:text-brand-green-500 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/resources"
              className="btn-primary px-6 py-3 rounded-lg font-medium inline-flex items-center"
            >
              View All Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
