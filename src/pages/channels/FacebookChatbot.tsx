
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Users, TrendingUp, CheckCircle, Zap, Globe, BarChart3, Heart, ShoppingBag } from 'lucide-react';
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
                <span className="text-grey-900">Engage</span>
                <br />
                <span className="text-blue-500">1.3B Users</span>
                <br />
                <span className="text-grey-900">on Messenger</span>
              </h1>
              
              <p className="text-xl text-grey-600 mb-8 leading-relaxed">
                Build intelligent Facebook Messenger chatbots that automate customer service, drive sales, and nurture relationships with the world's largest social platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Build Messenger Bot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105">
                  See Demo
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-grey-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">1.3B</div>
                  <div className="text-sm text-grey-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">80%</div>
                  <div className="text-sm text-grey-600">Open Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">24/7</div>
                  <div className="text-sm text-grey-600">Available</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=center" 
                alt="Facebook Messenger Chatbot Interface" 
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
              Facebook Messenger Features
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Leverage the power of Facebook's ecosystem for customer engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-blue-500/30">
              <div className="p-4 bg-blue-500/10 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Social Commerce</h3>
              <p className="text-grey-600 leading-relaxed">
                Drive sales directly through Messenger with product catalogs, recommendations, and seamless checkout.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-blue-500/30">
              <div className="p-4 bg-blue-500/10 rounded-xl w-fit mb-6">
                <Heart className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Customer Support</h3>
              <p className="text-grey-600 leading-relaxed">
                Provide instant customer support with rich media, quick replies, and seamless handoff to human agents.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-blue-500/30">
              <div className="p-4 bg-blue-500/10 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Lead Generation</h3>
              <p className="text-grey-600 leading-relaxed">
                Capture leads with interactive forms, qualify prospects, and nurture them through automated sequences.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-blue-500/30">
              <div className="p-4 bg-blue-500/10 rounded-xl w-fit mb-6">
                <ShoppingBag className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Rich Media Support</h3>
              <p className="text-grey-600 leading-relaxed">
                Share images, videos, carousels, and interactive elements to create engaging conversations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-blue-500/30">
              <div className="p-4 bg-blue-500/10 rounded-xl w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Analytics & Insights</h3>
              <p className="text-grey-600 leading-relaxed">
                Track engagement metrics, conversion rates, and user behavior with detailed Facebook Analytics.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-blue-500/30">
              <div className="p-4 bg-blue-500/10 rounded-xl w-fit mb-6">
                <Zap className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Page Integration</h3>
              <p className="text-grey-600 leading-relaxed">
                Seamlessly connect with your Facebook Page and leverage existing audience and brand presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Engage on Facebook?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Connect with 1.3B+ users and transform your Facebook presence with intelligent automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Build Messenger Bot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FacebookChatbot;
