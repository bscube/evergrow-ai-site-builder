
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Users, TrendingUp, CheckCircle, Zap, Globe, BarChart3, Heart, ShoppingBag, Bot, Star, ChevronDown, ChevronUp } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

// Accordion Item Component
const AccordionItem = ({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl border border-grey-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-grey-50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-grey-900">{title}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-grey-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-grey-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          {children}
        </div>
      )}
    </div>
  );
};

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

      {/* Maximize Customer Engagement Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Maximize customer engagement on Facebook Messenger
            </h2>
            <p className="text-xl text-grey-700 max-w-4xl mx-auto">
              Boost your campaign's effectiveness with the power of Messenger & Haptik's solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Accordion */}
            <div className="space-y-4">
              <AccordionItem 
                title="Ad Targeting & User Segmentation"
                defaultOpen={true}
              >
                <p className="text-grey-700 leading-relaxed">
                  Gather insights from real conversations to create targeted audiences for your ads and optimize campaign performance.
                </p>
              </AccordionItem>

              <AccordionItem 
                title="Rich Interactive Experiences"
                defaultOpen={false}
              >
                <p className="text-grey-700 leading-relaxed">
                  Create engaging conversations with rich media, quick replies, carousels, and interactive elements that drive user engagement and conversions.
                </p>
              </AccordionItem>

              <AccordionItem 
                title="Out-of-the-box Integrations"
                defaultOpen={false}
              >
                <p className="text-grey-700 leading-relaxed">
                  Seamlessly connect with your existing tools including CRMs, e-commerce platforms, and marketing automation systems for streamlined operations.
                </p>
              </AccordionItem>
            </div>

            {/* Right Column - Dashboard Mockup */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-grey-200">
              {/* Meta Campaign Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">M</span>
                    </div>
                    <span className="text-grey-700 font-medium">Meta</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    <span className="text-grey-700 font-medium">Campaign 1101</span>
                  </div>
                </div>
                <span className="text-grey-500 text-sm">Ad Overview</span>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-5 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-xs text-grey-500 mb-1">Advertisement Cost</div>
                  <div className="text-lg font-bold text-blue-500">$1,200</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-grey-500 mb-1">Impressions</div>
                  <div className="text-lg font-bold text-blue-500">10,000</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-grey-500 mb-1">Ad Clicks</div>
                  <div className="text-lg font-bold text-blue-500">6,000</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-grey-500 mb-1">Total Conversations</div>
                  <div className="text-lg font-bold text-blue-500">4,890</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-grey-500 mb-1">Goals Achieved</div>
                  <div className="text-lg font-bold text-blue-500">1,050</div>
                </div>
              </div>

              {/* Chart Section */}
              <div>
                <div className="text-sm text-grey-700 mb-4">Product Launch Journey</div>
                <div className="flex items-end space-x-3 h-32">
                  <div className="flex-1 bg-blue-500 rounded-t flex flex-col justify-end items-center pb-2" style={{height: '100%'}}>
                    <span className="text-white text-xs font-bold">100%</span>
                    <span className="text-white text-xs">Aware</span>
                  </div>
                  <div className="flex-1 bg-blue-400 rounded-t flex flex-col justify-end items-center pb-2" style={{height: '75%'}}>
                    <span className="text-white text-xs font-bold">65.4%</span>
                    <span className="text-white text-xs">Interest</span>
                  </div>
                  <div className="flex-1 bg-blue-400 rounded-t flex flex-col justify-end items-center pb-2" style={{height: '80%'}}>
                    <span className="text-white text-xs font-bold">84.4%</span>
                    <span className="text-white text-xs">Desire</span>
                  </div>
                  <div className="flex-1 bg-blue-300 rounded-t flex flex-col justify-end items-center pb-2" style={{height: '70%'}}>
                    <span className="text-white text-xs font-bold">81.5%</span>
                    <span className="text-white text-xs">Action</span>
                  </div>
                  <div className="flex-1 bg-blue-300 rounded-t flex flex-col justify-end items-center pb-2" style={{height: '45%'}}>
                    <span className="text-white text-xs font-bold">47.7%</span>
                    <span className="text-white text-xs">Retention</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Dominate Facebook Messenger Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Dominate Facebook Messenger?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses leveraging Facebook Messenger to drive sales and customer engagement
          </p>
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-500 font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Relevant Blogs Section */}
      <section className="py-16 bg-white border-t border-grey-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-grey-900 mb-4">
              Relevant Blogs
            </h2>
            <p className="text-lg text-grey-600">
              Find recent articles on Facebook Messenger
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Card 1 - Definitive Guide to Messenger Chatbots */}
            <Link 
              to="/blog/guide-to-messenger-chatbots"
              tabIndex={0}
              className="group block cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] border border-grey-200 hover:border-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="bg-white rounded-xl p-6 shadow-lg max-w-xs">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-grey-600">AI Virtual Assistant is typing...</span>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-grey-800">Hi! Here are some of our best selling casual clothing dresses:</p>
                      <div className="flex space-x-2">
                        <div className="w-16 h-20 bg-red-100 rounded border-2 border-red-200"></div>
                        <div className="w-16 h-20 bg-blue-100 rounded border-2 border-blue-200"></div>
                      </div>
                      <div className="flex space-x-1">
                        <span className="px-2 py-1 bg-grey-100 rounded text-xs">Stylish</span>
                        <span className="px-2 py-1 bg-grey-100 rounded text-xs">Trendy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-grey-900 mb-3 group-hover:text-blue-500 transition-colors">
                  Definitive Guide to Messenger Chatbots
                </h3>
                <div className="flex items-center text-sm text-grey-600">
                  <span>FB Messenger</span>
                  <span className="mx-2">•</span>
                  <span>8 min read</span>
                </div>
              </div>
            </Link>

            {/* Blog Card 2 - 3 Ways Facebook Messenger Helps eCommerce Businesses */}
            <Link 
              to="/blog/facebook-messenger-for-ecommerce"
              tabIndex={0}
              className="group block cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] border border-grey-200 hover:border-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-cyan-50 p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="bg-white rounded-xl p-6 shadow-lg max-w-xs">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-grey-600">Would you like to see our recommendations?</span>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-grey-800">Here's what we found on our store for you:</p>
                      <div className="flex space-x-2">
                        <div className="w-16 h-16 bg-orange-100 rounded border-2 border-orange-200 flex items-center justify-center">
                          <ShoppingBag className="w-6 h-6 text-orange-500" />
                        </div>
                        <div className="w-16 h-16 bg-green-100 rounded border-2 border-green-200 flex items-center justify-center">
                          <Heart className="w-6 h-6 text-green-500" />
                        </div>
                      </div>
                      <button className="w-full bg-blue-500 text-white text-xs py-2 rounded">Get Recommendations</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-grey-900 mb-3 group-hover:text-blue-500 transition-colors">
                  3 Ways Facebook Messenger Helps eCommerce Businesses
                </h3>
                <div className="flex items-center text-sm text-grey-600">
                  <span>FB Messenger</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
              </div>
            </Link>

            {/* Blog Card 3 - Deliver delightful shopping experiences with WhatsApp chatbot */}
            <Link 
              to="/blog/whatsapp-chatbot-shopping-experience"
              tabIndex={0}
              className="group block cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] border border-grey-200 hover:border-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div className="aspect-video bg-gradient-to-br from-green-50 to-yellow-50 p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="relative">
                    <div className="w-24 h-32 bg-white rounded-lg shadow-lg border border-grey-200 flex flex-col items-center justify-center">
                      <BarChart3 className="w-8 h-8 text-green-500 mb-2" />
                      <div className="space-y-1">
                        <div className="w-12 h-2 bg-green-200 rounded"></div>
                        <div className="w-8 h-2 bg-green-300 rounded"></div>
                        <div className="w-10 h-2 bg-green-400 rounded"></div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">%</span>
                    </div>
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">💰</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-grey-900 mb-3 group-hover:text-blue-500 transition-colors">
                  Deliver delightful shopping experiences with WhatsApp chatbot
                </h3>
                <div className="flex items-center text-sm text-grey-600">
                  <span>Conversational Commerce</span>
                  <span className="mx-2">•</span>
                  <span>15 min read</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default FacebookChatbot;
