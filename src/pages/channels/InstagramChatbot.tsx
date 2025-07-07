
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Camera, Users, TrendingUp, CheckCircle, Zap, Globe, BarChart3, Heart, ShoppingBag, Bot, Star } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const InstagramChatbot = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Instagram Direct Message Chatbot - Visual Commerce Automation"
        description="Build Instagram DM chatbots for visual commerce and customer engagement. Automate Instagram Direct Messages with AI-powered chat experiences."
        keywords="Instagram chatbot, Instagram DM automation, visual commerce, Instagram Direct Messages, social media automation"
        canonicalUrl="/channels/instagram-chatbots"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-pink-500/10 rounded-full text-pink-600 text-sm font-medium mb-8">
                <Camera className="w-4 h-4 mr-2" />
                Instagram Direct
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
                <span className="text-grey-900">Turn Instagram</span>
                <br />
                <span className="text-pink-500">DMs Into</span>
                <br />
                <span className="text-grey-900">Sales Machines</span>
              </h1>
              
              <p className="text-xl text-grey-700 mb-8 leading-relaxed">
                Harness the power of Instagram's 2 billion users with intelligent DM automation that converts followers into customers through personalized visual commerce experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Build Instagram Bot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105">
                  See Success Stories
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-grey-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">2B</div>
                  <div className="text-sm text-grey-700">Monthly Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">83%</div>
                  <div className="text-sm text-grey-700">Shopping Discovery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">4x</div>
                  <div className="text-sm text-grey-700">Higher Conversion</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&crop=center" 
                alt="Instagram Direct Message Chatbot" 
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
              Why Instagram for Business?
            </h2>
            <p className="text-xl text-grey-700 max-w-3xl mx-auto">
              The ultimate platform for visual commerce and customer engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-pink-500/30">
              <div className="p-4 bg-pink-500/10 rounded-xl w-fit mb-6">
                <ShoppingBag className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Visual Commerce</h3>
              <p className="text-grey-700 leading-relaxed">
                83% of users discover new products on Instagram. Turn your visual content into direct sales opportunities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-pink-500/30">
              <div className="p-4 bg-pink-500/10 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Younger Demographics</h3>
              <p className="text-grey-700 leading-relaxed">
                Reach Gen Z and millennials where they spend most of their time - Instagram's highly engaged community.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-pink-500/30">
              <div className="p-4 bg-pink-500/10 rounded-xl w-fit mb-6">
                <Heart className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">High Engagement</h3>
              <p className="text-grey-700 leading-relaxed">
                Instagram has 10x higher engagement rates than Facebook, making it perfect for building brand relationships.
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
              Instagram DM Features
            </h2>
            <p className="text-xl text-grey-700 max-w-3xl mx-auto">
              Advanced automation tools designed for Instagram's unique visual platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-grey-900 mb-6">
                <Bot className="inline-block w-8 h-8 text-pink-500 mr-3" />
                Visual Product Discovery
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Showcase products with high-quality images and videos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Interactive product catalogs within DM conversations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">AI-powered product recommendations based on user preferences</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Direct integration with Instagram Shopping features</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center" 
                alt="Instagram Shopping Interface" 
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center" 
                alt="Instagram Stories Integration" 
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-grey-900 mb-6">
                <Star className="inline-block w-8 h-8 text-pink-500 mr-3" />
                Stories & Content Integration
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Auto-respond to Instagram Story interactions and mentions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Convert story viewers into DM conversations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Seamless transition from posts to personalized chat</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Influencer collaboration and affiliate marketing support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-500 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Monetize Your Instagram?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Transform your Instagram presence into a powerful sales channel with automated DM conversations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-pink-500 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105">
              Get Success Blueprint
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InstagramChatbot;
