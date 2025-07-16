
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Zap, Users, TrendingUp, CheckCircle, MessageSquare, BarChart3, Clock, Shield, Bot, Sparkles, ChevronDown, ShoppingCart, MessageCircle, CreditCard, MousePointer } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const WebsiteChatbot = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Website Chatbot - AI Customer Support for Your Website"
        description="Add AI-powered chatbots to your website for instant customer support, lead generation, and sales assistance. Available 24/7 to engage visitors."
        keywords="website chatbot, web chat, customer support chatbot, AI website assistant, live chat automation"
        canonicalUrl="/channels/website-chatbot"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-8">
                <Globe className="w-4 h-4 mr-2" />
                Website Chat
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
                <span className="text-grey-900">Boost Website</span>
                <br />
                <span className="text-brand-green-500">Conversions</span>
                <br />
                <span className="text-grey-900">with AI Chat</span>
              </h1>
              
              <p className="text-xl text-grey-700 mb-8 leading-relaxed">
                Transform your website visitors into customers with intelligent AI chatbots that provide instant support, qualify leads, and guide users to conversion 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Add Website Chat
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-green-500 text-brand-green-500 hover:bg-brand-green-500 hover:text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105">
                  Try Live Demo
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-grey-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">3x</div>
                  <div className="text-sm text-grey-700">More Conversions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">85%</div>
                  <div className="text-sm text-grey-700">Support Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">&lt;2min</div>
                  <div className="text-sm text-grey-700">Setup Time</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center" 
                alt="Website Chatbot Interface" 
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
              Why Choose Website Chatbots?
            </h2>
            <p className="text-xl text-grey-700 max-w-3xl mx-auto">
              Intelligent automation that works around the clock to grow your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Clock className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">24/7 Availability</h3>
              <p className="text-grey-700 leading-relaxed">
                Never miss a potential customer. Provide instant responses and support around the clock, even when your team is offline.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Increase Conversions</h3>
              <p className="text-grey-700 leading-relaxed">
                Guide visitors through your sales funnel with personalized recommendations and instant answers to their questions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Lead Qualification</h3>
              <p className="text-grey-700 leading-relaxed">
                Automatically qualify leads by asking the right questions and routing high-value prospects to your sales team.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Zap className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Instant Responses</h3>
              <p className="text-grey-700 leading-relaxed">
                Reduce bounce rates by providing immediate answers to visitor questions without any waiting time.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Smart Analytics</h3>
              <p className="text-grey-700 leading-relaxed">
                Track visitor behavior, chat performance, and conversion metrics to optimize your chatbot strategy.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Shield className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Easy Integration</h3>
              <p className="text-grey-700 leading-relaxed">
                Simple one-click setup on any website platform. Works with WordPress, Shopify, Wix, and custom websites.
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
              Powerful Website Chat Features
            </h2>
            <p className="text-xl text-grey-700 max-w-3xl mx-auto">
              Everything you need to create engaging customer experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-grey-900 mb-6">
                <Bot className="inline-block w-8 h-8 text-brand-green-500 mr-3" />
                AI-Powered Conversations
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Natural language understanding and responses</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Context-aware conversations that remember previous interactions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Multi-language support for global audiences</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Seamless handoff to human agents when needed</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center" 
                alt="AI Chat Interface" 
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center" 
                alt="Customization Dashboard" 
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-grey-900 mb-6">
                <Sparkles className="inline-block w-8 h-8 text-brand-green-500 mr-3" />
                Complete Customization
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Match your brand colors, fonts, and styling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Custom chat widget positioning and behavior</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Personalized welcome messages and conversation flows</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3 flex-shrink-0" />
                  <span className="text-grey-700">Advanced targeting based on visitor behavior</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Customer Experience Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
                Offer a Seamless Customer Experience
              </h2>
              <p className="text-xl text-grey-700 mb-12 leading-relaxed">
                For improved conversions, higher revenue, and strategic insights
              </p>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="gpt-conversations" className="bg-white rounded-xl shadow-sm border border-grey-200">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <div className="flex items-center">
                      <Bot className="w-6 h-6 text-brand-green-500 mr-4" />
                      <span className="text-lg font-semibold text-grey-900">GPT-powered Conversations</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-grey-700">
                      Improve quality and depth of customer-facing interactions by using GPT-powered website chatbots.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="product-catalogs" className="bg-white rounded-xl shadow-sm border border-grey-200">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <div className="flex items-center">
                      <ShoppingCart className="w-6 h-6 text-brand-green-500 mr-4" />
                      <span className="text-lg font-semibold text-grey-900">Product Catalogs</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-grey-700">
                      Showcase your products directly in chat with rich catalogs, images, and instant purchase options.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="website-flows" className="bg-white rounded-xl shadow-sm border border-grey-200">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <div className="flex items-center">
                      <Globe className="w-6 h-6 text-brand-green-500 mr-4" />
                      <span className="text-lg font-semibold text-grey-900">Website Flows</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-grey-700">
                      Create automated conversation flows that guide visitors through your sales funnel and capture leads.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="chat-analytics" className="bg-white rounded-xl shadow-sm border border-grey-200">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <div className="flex items-center">
                      <BarChart3 className="w-6 h-6 text-brand-green-500 mr-4" />
                      <span className="text-lg font-semibold text-grey-900">Chat Message Analytics</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-grey-700">
                      Track conversation performance, user engagement, and conversion metrics to optimize your chatbot.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="website-payments" className="bg-white rounded-xl shadow-sm border border-grey-200">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <div className="flex items-center">
                      <CreditCard className="w-6 h-6 text-brand-green-500 mr-4" />
                      <span className="text-lg font-semibold text-grey-900">Website Payments</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-grey-700">
                      Enable secure payment processing directly through chat for seamless purchase experiences.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="click-to-chat" className="bg-white rounded-xl shadow-sm border border-grey-200">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <div className="flex items-center">
                      <MousePointer className="w-6 h-6 text-brand-green-500 mr-4" />
                      <span className="text-lg font-semibold text-grey-900">Click-to-Chat Widgets</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-grey-700">
                      Add strategic chat buttons and widgets throughout your site to maximize engagement opportunities.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
                {/* Chat Interface Mockup */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-grey-200">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-brand-green-500 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-grey-900">AI Assistant</h4>
                      <p className="text-sm text-grey-600">Online</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-grey-100 rounded-lg px-4 py-3 max-w-xs">
                    <p className="text-sm text-grey-800">Get 25% off on all earpods with code EA25! 😊</p>
                  </div>
                  
                  <div className="bg-brand-green-500 text-white rounded-lg px-4 py-3 max-w-xs ml-auto">
                    <p className="text-sm">Hurry! Earpods on sale at 25% off! Use code EA25. ✨</p>
                  </div>

                  <div className="bg-grey-100 rounded-lg px-4 py-3 max-w-xs">
                    <p className="text-sm text-grey-800">Don't miss out! Earpods range now 25% off. 🎧 Use code EA25 at checkout.</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input 
                    type="text" 
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-grey-300 rounded-lg text-sm"
                    disabled
                  />
                  <button className="bg-brand-green-500 text-white p-2 rounded-lg">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Floating notification bubbles */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-grey-200 max-w-48">
                <p className="text-xs text-grey-700">Earpods 25% off! Code: EA25.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-green-500 to-brand-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to 3x Your Website Conversions?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of businesses using AI chatbots to transform their website into a conversion machine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brand-green-500 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105">
              Book Demo Call
            </button>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default WebsiteChatbot;
