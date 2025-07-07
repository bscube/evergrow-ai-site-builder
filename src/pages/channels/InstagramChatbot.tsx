
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Camera, Users, TrendingUp, CheckCircle, Zap, Globe, BarChart3, Heart, ShoppingBag } from 'lucide-react';
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
                <span className="text-grey-900">Visual</span>
                <br />
                <span className="text-pink-500">Commerce</span>
                <br />
                <span className="text-grey-900">on Instagram</span>
              </h1>
              
              <p className="text-xl text-grey-600 mb-8 leading-relaxed">
                Build intelligent Instagram DM chatbots that drive visual commerce, engage followers, and convert browsers into buyers through personalized conversations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Build Instagram Bot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105">
                  See Examples
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-grey-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">2B</div>
                  <div className="text-sm text-grey-600">Monthly Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">70%</div>
                  <div className="text-sm text-grey-600">Shopping Intent</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">85%</div>
                  <div className="text-sm text-grey-600">Visual Content</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center" 
                alt="Instagram Direct Message Chatbot" 
                className="w-full rounded-2xl shadow-2xl"
                loading="lazy"
              />
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
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Drive visual commerce and engagement through Instagram Direct Messages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-pink-500/30">
              <div className="p-4 bg-pink-500/10 rounded-xl w-fit mb-6">
                <ShoppingBag className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Visual Product Discovery</h3>
              <p className="text-grey-600 leading-relaxed">
                Showcase products with high-quality images, enable product tagging, and guide customers through visual catalogs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-pink-500/30">
              <div className="p-4 bg-pink-500/10 rounded-xl w-fit mb-6">
                <Camera className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Story Integration</h3>
              <p className="text-grey-600 leading-relaxed">
                Connect Instagram Stories with DM automation for seamless user journey from story to conversation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-pink-500/30">
              <div className="p-4 bg-pink-500/10 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Influencer Collaboration</h3>
              <p className="text-grey-600 leading-relaxed">
                Enable influencers to engage their audience with automated responses and product recommendations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-pink-500/30">
              <div className="p-4 bg-pink-500/10 rounded-xl w-fit mb-6">
                <Heart className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Engagement Automation</h3>
              <p className="text-grey-600 leading-relaxed">
                Automatically respond to comments, mentions, and DMs to maintain high engagement rates.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-pink-500/30">
              <div className="p-4 bg-pink-500/10 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Customer Insights</h3>
              <p className="text-grey-600 leading-relaxed">
                Gain deep insights into customer preferences, shopping behavior, and engagement patterns.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-pink-500/30">
              <div className="p-4 bg-pink-500/10 rounded-xl w-fit mb-6">
                <Zap className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Seamless Checkout</h3>
              <p className="text-grey-600 leading-relaxed">
                Enable in-app purchases and direct customers to checkout without leaving Instagram.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-500 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Sell on Instagram?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Transform your Instagram presence into a powerful sales channel with visual commerce automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Build Instagram Bot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InstagramChatbot;
