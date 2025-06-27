import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, CheckCircle, ArrowRight, Star, Users, Zap, Shield, MessageSquare, Phone, BarChart3, ChevronDown, ChevronRight, Bot, Sparkles, Globe, TrendingUp, Mic, Volume2, Headphones } from 'lucide-react';
import Navigation from '../components/Navigation';
import FloatingCTA from '../components/FloatingCTA';
import Footer from '../components/Footer';

const Index = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const stats = [
    { number: '500+', label: 'Active Clients' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '50M+', label: 'Messages Processed' },
    { number: '24/7', label: 'Support Available' },
  ];

  const features = [
    {
      icon: MessageSquare,
      title: 'Multi-Channel AI',
      description: 'Deploy across WhatsApp, Instagram, Facebook, RCS, and web chat from one unified platform.',
      highlights: ['WhatsApp Business API', 'Instagram DM automation', 'Facebook Messenger bots', 'Web chat widgets']
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-2 second response times ensure your customers never wait for answers.',
      highlights: ['< 2s response time', 'Real-time processing', 'Instant query resolution', '24/7 availability']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into conversations, conversions, and customer journey optimization.',
      highlights: ['Conversation analytics', 'Conversion tracking', 'Customer insights', 'Performance metrics']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance and end-to-end encryption.',
      highlights: ['SOC 2 certified', 'End-to-end encryption', 'GDPR compliant', 'Data protection']
    }
  ];

  const industries = [
    { name: 'Retail', metric: '↑40% Sales', icon: '🛍️' },
    { name: 'Travel', metric: '↑60% Bookings', icon: '✈️' },
    { name: 'Fintech', metric: '↑75% Leads', icon: '💳' },
    { name: 'Healthcare', metric: '↑85% Efficiency', icon: '🏥' },
    { name: 'Education', metric: '↑50% Engagement', icon: '📚' },
    { name: 'Media', metric: '↑65% Retention', icon: '🎬' }
  ];

  const testimonials = [
    {
      quote: "EverGrow's AI bots increased our WhatsApp conversions by 65%. The setup was seamless and support is outstanding.",
      author: "Sarah Chen",
      role: "Head of Digital Marketing",
      company: "RetailPlus",
      metric: "↑65% Conversion"
    },
    {
      quote: "Our booking automation now handles 80% of reservations automatically. Customer satisfaction has never been higher.",
      author: "Marcus Rodriguez",
      role: "Operations Director", 
      company: "TravelEase",
      metric: "↑80% Automation"
    },
    {
      quote: "The multi-channel approach helped us reach customers where they are. ROI was positive within 2 weeks.",
      author: "Emily Watson",
      role: "Customer Success Lead",
      company: "FinanceForward", 
      metric: "↑90% Satisfaction"
    }
  ];

  const faqs = [
    {
      question: 'How quickly can we deploy AI bots?',
      answer: 'Most implementations go live within 24-48 hours. Our rapid deployment includes bot configuration, testing, and team training.'
    },
    {
      question: 'What channels do your AI bots support?',
      answer: 'WhatsApp Business API, Instagram Direct, Facebook Messenger, RCS Business Messaging, and web chat - all from one dashboard.'
    },
    {
      question: 'What\'s included in the free AI audit?',
      answer: 'Process analysis, ROI projections, channel recommendations, competitor analysis, and a custom implementation roadmap.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'SOC 2 Type II compliance, end-to-end encryption, GDPR/CCPA adherence with enterprise-grade security protocols.'
    }
  ];

  const voiceAgentFeatures = [
    {
      icon: Mic,
      title: "Natural Voice Conversations",
      description: "AI agents that understand context, emotion, and intent through advanced speech recognition.",
      metrics: "98% accuracy",
      visual: "sound-wave"
    },
    {
      icon: Phone,
      title: "24/7 Phone Support",
      description: "Automated phone answering with intelligent call routing and escalation protocols.",
      metrics: "< 3 ring pickup",
      visual: "phone-interface"
    },
    {
      icon: Headphones,
      title: "Empathetic AI Listening",
      description: "Voice AI that detects sentiment, adapts tone, and provides personalized responses.",
      metrics: "85% satisfaction",
      visual: "emotion-detection"
    },
    {
      icon: Volume2,
      title: "Seamless Handoffs",
      description: "Smart routing to human agents with full conversation context and customer history.",
      metrics: "0 repeat info",
      visual: "handoff-flow"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FloatingCTA />
      
      {/* Modern Hero Section */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Voice & Chat Agents for Every Channel & Industry
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              <span className="text-grey-900">Transform Every</span>
              <br />
              <span className="text-brand-green-500">Customer Touchpoint</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-grey-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Deploy AI voice and chat agents across phone, WhatsApp, website, and social media. Handle 80% of inquiries automatically while delighting customers 24/7.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Free AI Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-green-500 text-brand-green-500 hover:bg-brand-green-500 hover:text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-grey-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
                30-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-grey-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl lg:text-4xl font-bold text-brand-green-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-grey-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Voice Agents Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-6">
              <Mic className="w-4 h-4 mr-2" />
              AI Voice Agents
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Voice-First Customer Experience
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto mb-12">
              Handle phone calls, voice queries, and complex conversations with AI agents that sound human and understand context.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {voiceAgentFeatures.map((feature, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white to-grey-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-grey-200 hover:border-brand-green-500/30">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="p-4 bg-brand-green-500/10 rounded-xl group-hover:bg-brand-green-500/20 transition-colors duration-300">
                        <feature.icon className="h-8 w-8 text-brand-green-500" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-grey-900 group-hover:text-brand-green-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <div className="text-brand-green-500 font-semibold text-sm">
                          {feature.metrics}
                        </div>
                      </div>
                    </div>
                    
                    {/* Visual Indicator */}
                    <div className="relative w-16 h-16">
                      {feature.visual === 'sound-wave' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 bg-brand-green-500 rounded-full animate-pulse"
                                style={{
                                  height: `${Math.random() * 20 + 10}px`,
                                  animationDelay: `${i * 0.1}s`
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      )}
                      {feature.visual === 'phone-interface' && (
                        <div className="absolute inset-0 bg-brand-green-500/10 rounded-full flex items-center justify-center group-hover:bg-brand-green-500/20 transition-colors duration-300">
                          <Phone className="h-6 w-6 text-brand-green-500" />
                        </div>
                      )}
                      {feature.visual === 'emotion-detection' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 border-2 border-brand-green-500 rounded-full animate-ping"></div>
                          <div className="absolute w-4 h-4 bg-brand-green-500 rounded-full"></div>
                        </div>
                      )}
                      {feature.visual === 'handoff-flow' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ArrowRight className="h-6 w-6 text-brand-green-500 animate-pulse" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-grey-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-brand-green-500 font-medium group-hover:text-brand-green-600 transition-colors duration-300">
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Voice Demo CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-brand-green-500 to-brand-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Experience Voice AI in Action</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Call our AI voice agent demo line or book a personalized session to see how voice automation can transform your customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-green-500 font-semibold rounded-lg hover:bg-grey-50 transition-colors duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Demo Line
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-brand-green-500 font-semibold rounded-lg transition-colors duration-300"
                >
                  Book Live Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              See AI Agents in Action
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Watch how our AI agents handle real customer conversations across multiple channels
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-grey-900 to-grey-800 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-video bg-grey-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                <button className="flex items-center justify-center w-20 h-20 bg-brand-green-500 hover:bg-brand-green-600 rounded-full transition-colors duration-300 group">
                  <Play className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Why Choose EverGrow Digital?
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Enterprise-grade AI with the simplicity your team needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-brand-green-500/10 rounded-xl">
                    <feature.icon className="h-8 w-8 text-brand-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-grey-900 ml-4">{feature.title}</h3>
                </div>
                <p className="text-grey-600 text-lg mb-6 leading-relaxed">{feature.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-grey-600">
                      <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Built for Every Industry
            </h2>
            <p className="text-xl text-grey-600">
              Specialized solutions that understand your business
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border-2 border-grey-200 hover:border-brand-green-500 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer group"
              >
                <div className="text-3xl mb-4">{industry.icon}</div>
                <h3 className="font-semibold text-grey-900 mb-2 group-hover:text-brand-green-500 transition-colors">{industry.name}</h3>
                <div className="text-sm font-medium text-brand-green-500">{industry.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-grey-600">
              Real results from businesses like yours
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-grey-200 hover:border-brand-green-500/30">
                <div className="text-2xl font-bold text-brand-green-500 mb-4">
                  {testimonial.metric}
                </div>
                <blockquote className="text-grey-700 text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-green-500/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-brand-green-500" />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-grey-900">{testimonial.author}</div>
                    <div className="text-grey-600 text-sm">{testimonial.role}</div>
                    <div className="text-brand-green-500 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-green-500 to-brand-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get a free AI audit and see exactly how voice and chat agents will boost your conversions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Get Free AI Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brand-green-500 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-grey-600">
              Everything you need to know about our AI solutions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-grey-50 rounded-xl overflow-hidden border border-grey-200 hover:border-brand-green-500/30 transition-colors duration-300">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-grey-100 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-grey-900">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-brand-green-500 transform transition-transform duration-200 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-grey-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
