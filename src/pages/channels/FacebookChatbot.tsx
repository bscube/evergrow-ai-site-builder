
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Users, TrendingUp, CheckCircle, Zap, Globe, BarChart3, Heart, ShoppingBag, Bot, Star } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const FacebookChatbot = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Facebook Messenger Chatbot - Automate Customer Engagement"
        description="Build intelligent Facebook Messenger chatbots that engage 1.3B+ active users. Automate customer service, sales, and marketing on Facebook Messenger."
        keywords="Facebook Messenger chatbot, Messenger automation, Facebook customer service, social media chatbot"
        canonicalUrl="/channels/facebook-chatbot"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full text-blue-600 text-sm font-medium mb-8">
                <MessageSquare className="w-4 h-4 mr-2" />
                Facebook Messenger
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
                <span className="text-grey-900">Automate Facebook</span>
                <br />
                <span className="text-blue-500">Messenger</span>
                <br />
                <span className="text-grey-900">Marketing</span>
              </h1>
              
              <p className="text-xl text-grey-700 mb-8 leading-relaxed">
                Reach 1.3B+ Facebook Messenger users with intelligent chatbots that drive sales, provide instant support, and build meaningful customer relationships at scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Build Messenger Bot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105">
                  See Live Demo
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-grey-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">1.3B</div>
                  <div className="text-sm text-grey-700">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">90%</div>
                  <div className="text-sm text-grey-700">Open Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">5x</div>
                  <div className="text-sm text-grey-700">Higher Engagement</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center" 
                alt="Facebook Messenger Chatbot Interface" 
                className="w-full rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Why Facebook Messenger?
            </h2>
            <p className="text-xl text-grey-700 max-w-3xl mx-auto">
              The world's most popular messaging platform for business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-blue-500/30">
              <div className="p-4 bg-blue-500/10 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Massive Reach</h3>
              <p className="text-grey-700 leading-relaxed">
                Connect with over 1.3 billion Facebook Messenger users worldwide and tap into the largest messaging platform.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-blue-500/30">
              <div className="p-4 bg-blue-500/10 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Higher Engagement</h3>
              <p className="text-grey-700 leading-relaxed">
                Achieve 5x higher engagement rates compared to email marketing with personalized messenger conversations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-blue-500/30">
              <div className="p-4 bg-blue-500/10 rounded-xl w-fit mb-6">
                <ShoppingBag className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Social Commerce</h3>
              <p className="text-grey-700 leading-relaxed">
                Enable seamless shopping experiences with product catalogs, recommendations, and direct checkout integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Facebook Messenger Features
            </h2>
            <p className="text-xl text-grey-700 max-w-3xl mx-auto">
              Comprehensive automation tools for Facebook Messenger marketing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-grey-900 mb-6">
                <Bot className="inline-block w-8 h-8 text-blue-500 mr-3" />
                Intelligent Conversations
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">AI-powered responses that understand context and intent</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Rich media support including images, videos, and carousels</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Quick replies and persistent menu for easy navigation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Seamless handoff to human agents when needed</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&crop=center" 
                alt="Facebook Messenger Interface" 
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center" 
                alt="Marketing Automation" 
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-grey-900 mb-6">
                <Star className="inline-block w-8 h-8 text-blue-500 mr-3" />
                Marketing Automation
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Automated drip campaigns and follow-up sequences</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Lead qualification and scoring based on interactions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Integration with Facebook Ads for retargeting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Advanced analytics and performance tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Dominate Facebook Messenger?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of businesses leveraging Facebook Messenger to drive sales and customer engagement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-500 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105">
              Book Strategy Call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FacebookChatbot;
