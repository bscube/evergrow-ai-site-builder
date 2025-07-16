
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Camera, Users, TrendingUp, CheckCircle, Zap, Globe, BarChart3, Heart, ShoppingBag, Bot, Star, ChevronDown, MessageCircle, Reply, UserPlus } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';

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

      {/* Elevate your Instagram Game Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Elevate your Instagram Game with Haptik
            </h2>
            <p className="text-xl text-grey-700 max-w-3xl mx-auto">
              Engage instantly & intuitively with your brand ambassadors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Accordion */}
            <div>
              <Accordion type="single" collapsible defaultValue="story-mentions" className="space-y-4">
                <AccordionItem value="story-mentions" className="bg-white rounded-xl border border-grey-200 shadow-sm">
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                    <div className="flex items-center">
                      <div className="p-3 bg-pink-500/10 rounded-lg mr-4">
                        <Reply className="h-6 w-6 text-pink-500" />
                      </div>
                      <span className="text-lg font-semibold text-grey-900">Respond to Story Mentions</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-grey-700 leading-relaxed">
                      Start a conversation with a Story reaction or respond to anyone who mentions your account in a Story or Reel. Automatically engage with users who interact with your brand content.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="comment-responses" className="bg-white rounded-xl border border-grey-200 shadow-sm">
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                    <div className="flex items-center">
                      <div className="p-3 bg-pink-500/10 rounded-lg mr-4">
                        <MessageCircle className="h-6 w-6 text-pink-500" />
                      </div>
                      <span className="text-lg font-semibold text-grey-900">Automate Comment Responses</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-grey-700 leading-relaxed">
                      Automatically respond to comments on your posts with personalized messages. Drive engagement and move conversations to DMs for better customer service and sales opportunities.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="live-agents" className="bg-white rounded-xl border border-grey-200 shadow-sm">
                  <AccordionTrigger className="px-6 py-6 text-left hover:no-underline">
                    <div className="flex items-center">
                      <div className="p-3 bg-pink-500/10 rounded-lg mr-4">
                        <UserPlus className="h-6 w-6 text-pink-500" />
                      </div>
                      <span className="text-lg font-semibold text-grey-900">Connect to Live Agents</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-grey-700 leading-relaxed">
                      Seamlessly hand off complex conversations to live agents when needed. Maintain the personal touch while ensuring every customer gets the help they need at the right time.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Right side - Instagram Interface Mockup */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto">
                {/* Instagram Story Interface */}
                <div className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">F</span>
                      </div>
                      <span className="text-white font-medium ml-2">FabBeauty</span>
                    </div>
                    <button className="text-white">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                  
                  <div className="bg-black/30 rounded-lg p-4 mb-4">
                    <img 
                      src="/lovable-uploads/760e5965-c5c5-4c2c-812d-42b5436a8245.png" 
                      alt="Beauty product showcase" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                        THE NEUTROGENA HYDRO BOOST GEL MOISTURIZER IS NOW AVAILABLE
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instagram DM Interface */}
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">F</span>
                      </div>
                      <div className="ml-3">
                        <div className="font-medium text-grey-900">FabBeauty</div>
                        <div className="text-xs text-grey-500">Instagram</div>
                      </div>
                    </div>
                    <div className="text-xs text-grey-500">
                      20k followers • 1k posts<br />
                      You've followed this Instagram account since 2020
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs text-grey-500 text-center">10:12 AM</div>
                    <div className="text-sm text-grey-600">
                      Replied to your story
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=40&h=40&fit=crop&crop=face" 
                        alt="User avatar" 
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="bg-grey-100 rounded-2xl px-4 py-2 max-w-xs">
                        <p className="text-sm text-grey-900">Is the moisturizer good for oily skin type?</p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-pink-500 text-white rounded-2xl px-4 py-2 max-w-xs">
                        <p className="text-sm">Even oily skin needs hydration, and this lightweight, non-greasy moisturizer hydrates the skin.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-grey-200">
                <div className="text-xs text-grey-600 mb-1">View Profile</div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InstagramChatbot;
