
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Headphones, MessageSquare, Phone, Clock, Users, CheckCircle, Zap, Globe, BarChart3, Shield } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const Support = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-8">
                <Headphones className="w-4 h-4 mr-2" />
                AI Support Agent
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
                <span className="text-grey-900">24/7 AI Support</span>
                <br />
                <span className="text-brand-green-500">That Actually Helps</span>
              </h1>
              
              <p className="text-xl text-grey-600 mb-8 leading-relaxed">
                Streamline customer support without pre-built journeys. Our AI support agent resolves 95% of queries instantly while seamlessly escalating complex issues to human agents.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Get AI Support Agent
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-green-500 text-brand-green-500 hover:bg-brand-green-500 hover:text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105">
                  Watch Demo
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-grey-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">95%</div>
                  <div className="text-sm text-grey-600">First Contact Resolution</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">24/7</div>
                  <div className="text-sm text-grey-600">Always Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">80%</div>
                  <div className="text-sm text-grey-600">Cost Reduction</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img src="https://www.haptik.ai/hs-fs/hubfs/01Support.gif?width=1200&height=666&name=01Support.gif" alt="AI Support Agent Demo" className="w-full rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* AI Conversation Demo Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="text-sm font-medium text-primary uppercase tracking-wider">
                AI Support Agent
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 leading-tight">
                Automate Customer Support with Smart AI Agents
              </h2>
              
              <p className="text-lg text-grey-600 leading-relaxed">
                Harness your enterprise data to build a powerful support agent for resolving brand-related queries at scale. Lighten the load on human agents while enhancing accuracy and speed of resolution
              </p>
              
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Get A Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Right Chat Interface */}
            <div className="relative">
              <div className="bg-grey-50 rounded-3xl p-8 space-y-6">
                {/* First Message - User */}
                <div className="flex justify-end">
                  <div className="flex items-end space-x-3 max-w-xs">
                    <div className="bg-primary/10 rounded-2xl rounded-br-md px-4 py-3">
                      <p className="text-grey-900 font-medium">What's your return policy?</p>
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
                        alt="Customer" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* First Response - AI */}
                <div className="flex items-end space-x-3 max-w-xs">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <p className="text-grey-900">As per our policy, you can return items within 7 days of purchase.</p>
                  </div>
                </div>

                {/* Second Message - User */}
                <div className="flex justify-end">
                  <div className="flex items-end space-x-3 max-w-xs">
                    <div className="bg-primary/10 rounded-2xl rounded-br-md px-4 py-3">
                      <p className="text-grey-900 font-medium">What if it's defective?</p>
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
                        alt="Customer" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Second Response - AI */}
                <div className="flex items-end space-x-3 max-w-xs">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <p className="text-grey-900">For defective items, you can request a replacement in 10 days.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human-Like Interactions Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Chat Interface */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 space-y-6 shadow-lg">
                {/* First Message - User */}
                <div className="flex justify-end">
                  <div className="flex items-end space-x-3 max-w-sm">
                    <div className="bg-blue-50 rounded-2xl rounded-br-md px-4 py-3">
                      <p className="text-grey-900 font-medium">I can&apos;t access my account, it&apos;s happening for the 2nd time this month.</p>
                    </div>
                  </div>
                </div>

                {/* First Response - AI */}
                <div className="flex items-end space-x-3 max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="bg-grey-100 rounded-2xl rounded-bl-md px-4 py-3">
                    <p className="text-grey-900">Your account was locked for security reasons after multiple failed login attempts. Would you like me to unlock your account?</p>
                  </div>
                </div>

                {/* Second Message - User */}
                <div className="flex justify-end">
                  <div className="flex items-end space-x-3 max-w-sm">
                    <div className="bg-blue-50 rounded-2xl rounded-br-md px-4 py-3">
                      <p className="text-grey-900 font-medium">Yes, please.</p>
                    </div>
                  </div>
                </div>

                {/* Second Response - AI */}
                <div className="flex items-end space-x-3 max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="bg-grey-100 rounded-2xl rounded-bl-md px-4 py-3">
                    <p className="text-grey-900">I&apos;ve sent a passcode to your email that you can use as a temporary login and regain access.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">              
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 leading-tight">
                Human-Like Interactions
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-grey-900 mb-2">Context-aware responses:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Seamlessly handle multi-turn conversations by retaining context from past interactions, personalizing responses, and staying on-brand.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-grey-900 mb-2">Dynamic resolution:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Our AI support agent doesn&apos;t stick to a script. It tackles diverse queries independently, initiating smooth agent handoff when needed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-grey-900 mb-2">Self-serve:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Augment human agents with the efficiency of AI for self-serve support, improving first-time resolution and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Efficient and Customer-Centric Support Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">              
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 leading-tight">
                Efficient and Customer-Centric Support
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-grey-900 mb-2">Omnichannel:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Deploy the AI support agent across channels so customers can get their questions answered anytime, anywhere.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-grey-900 mb-2">Personalized conversations:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Ask follow-up questions to ensure customers find the best solution to their problem and feel valued.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-grey-900 mb-2">Always-on assistance:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Offer round-the-clock support to resolve queries instantly, significantly reducing wait times and new ticket creation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Chat Interface */}
            <div className="relative">
              <div className="bg-blue-50 rounded-3xl p-8 space-y-6">
                {/* First Message - User */}
                <div className="flex justify-end">
                  <div className="flex items-end space-x-3 max-w-sm">
                    <div className="bg-white rounded-2xl rounded-br-md px-4 py-3 shadow-sm">
                      <p className="text-grey-900 font-medium">I haven&apos;t received the refund for the product returned. It&apos;s been a week.</p>
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
                        alt="Customer" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* First Response - AI */}
                <div className="flex items-end space-x-3 max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <p className="text-grey-900">The refund was initiated to your bank account yesterday. Would you like me to share the transaction reference?</p>
                  </div>
                </div>

                {/* Second Message - User */}
                <div className="flex justify-end">
                  <div className="flex items-end space-x-3 max-w-sm">
                    <div className="bg-white rounded-2xl rounded-br-md px-4 py-3 shadow-sm">
                      <p className="text-grey-900 font-medium">Yes, that would be helpful.</p>
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                        alt="Customer" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Final Response - AI */}
                <div className="flex items-end space-x-3 max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <p className="text-grey-900">
                      <span className="font-semibold">Reference number: 891065</span><br />
                      Let me know if you need anything else.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Support Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Chat Interface with Voice */}
            <div className="relative">
              <div className="bg-blue-50 rounded-3xl p-8 space-y-6">
                {/* Voice Input Visualization */}
                <div className="flex justify-end">
                  <div className="flex items-center space-x-3 max-w-sm">
                    <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex space-x-1">
                          {[...Array(20)].map((_, i) => (
                            <div 
                              key={i} 
                              className="w-1 bg-blue-500 rounded-full animate-pulse" 
                              style={{
                                height: Math.random() * 20 + 8 + 'px',
                                animationDelay: i * 0.1 + 's'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-grey-900 font-medium">I want to cancel my order.</p>
                    </div>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex items-end space-x-3 max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <p className="text-grey-900">I can help you with that. What&apos;s your order ID?</p>
                  </div>
                </div>

                {/* Customer Response */}
                <div className="flex justify-end">
                  <div className="flex items-end space-x-3 max-w-sm">
                    <div className="bg-white rounded-2xl rounded-br-md px-4 py-3 shadow-sm">
                      <p className="text-grey-900 font-medium">Order ID is 276589</p>
                    </div>
                  </div>
                </div>

                {/* Final AI Response */}
                <div className="flex items-end space-x-3 max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <p className="text-grey-900">Your order has been cancelled and refund is initiated.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">              
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 leading-tight">
                Empower Customers with Voice Support
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-grey-900 mb-2">Intelligent support:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Efficiently handle high support volumes with voice AI. Resolve queries in real-time with natural voice conversations... without rigid menu options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-grey-900 mb-2">Advanced intent detection:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Our voice agents don&apos;t just hear words. They understand the intent behind them to tailor responses that resonate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-grey-900 mb-2">Multilingual:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      We support 100+ languages so you can speak in your customers&apos; preferred language and break linguistic barriers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimize and Measure Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">              
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 leading-tight">
                Optimize and Measure
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-grey-900 mb-2">Track metrics:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Monitor KPIs with custom dashboards for insights on response times, CSAT, NPS, resolution rate, and more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-grey-900 mb-2">SOP compliance:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Measure agent performance against SOPs and identify areas for improvement to uphold quality of support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-grey-900 mb-2">Topic distribution:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Glean actionable insights into customer pain points by tracking most common requests and key issues that need proactive solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Dashboard Interface */}
            <div className="relative">
              <div className="bg-blue-50 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-grey-900">Agent Performance</h3>
                    <div className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg">
                      Agent Performance
                    </div>
                  </div>

                  {/* Top Row Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-grey-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-grey-900 mb-1">4.5</div>
                      <div className="text-sm text-grey-600">Avg. User Rating</div>
                    </div>
                    <div className="bg-grey-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-grey-900 mb-1">107</div>
                      <div className="text-sm text-grey-600">Total Number of Agents</div>
                    </div>
                    <div className="bg-grey-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-grey-900 mb-1">34h 29m 2s</div>
                      <div className="text-sm text-grey-600">Time Saved of Agents</div>
                    </div>
                  </div>

                  {/* Bottom Row Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Time Stats */}
                    <div className="bg-grey-50 rounded-xl p-4">
                      <h4 className="text-sm font-medium text-grey-900 mb-3">Time Stats</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-grey-600">Avg. Agent First Response Time</span>
                          <span className="font-medium">2m 3s</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-grey-600">Avg. Queue Time</span>
                          <span className="font-medium">1m 8s</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-grey-600">Avg. Response Time</span>
                          <span className="font-medium">57s</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-grey-600">Avg. Agent Resolution Time</span>
                          <span className="font-medium">5m 7s</span>
                        </div>
                      </div>
                    </div>

                    {/* Chat Stats */}
                    <div className="bg-grey-50 rounded-xl p-4">
                      <h4 className="text-sm font-medium text-grey-900 mb-3">Chat Stats</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-grey-600">Chats Received</span>
                          <span className="font-medium">124,978</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-grey-600">Closed Chats</span>
                          <span className="font-medium">98,426</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-grey-600">Chats Abandoned by Users</span>
                          <span className="font-medium">26,552</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-grey-600">Delayed Chats</span>
                          <span className="font-medium">8,724</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cutting-Edge AI Support Agent Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Cutting-Edge AI Support Agent
            </h2>
            <p className="text-xl text-grey-600">
              Equipped with advanced reasoning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Superior Unstructured Data Handling */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 p-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                <div className="w-12 h-12 text-blue-600">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">
                Superior Unstructured Data Handling
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Leveraging unstructured data, we broaden the support agent&apos;s capacity to understand diverse questions & elevate the quality of responses.
              </p>
            </div>

            {/* Robust Guardrails */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 p-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                <div className="w-12 h-12 text-blue-600">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">
                Robust Guardrails
              </h3>
              <p className="text-grey-600 leading-relaxed">
                We employ well-defined guardrails to ensure the agent&apos;s responses are extremely precise and relevant for the information provided.
              </p>
            </div>

            {/* Faster Deployment */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 p-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                <div className="w-12 h-12 text-blue-600">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">
                Faster Deployment
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Build a fully-functional support agent in merely hours, ensuring rapid deployment, efficient operations and better customer experiences at scale.
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
              Support Features That Scale
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Advanced AI capabilities designed to handle any support scenario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Clock className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Instant Resolution</h3>
              <p className="text-grey-600 leading-relaxed">
                Resolve common queries in seconds with intelligent understanding of customer intent and context.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Globe className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Multi-Language Support</h3>
              <p className="text-grey-600 leading-relaxed">
                Communicate with customers in 100+ languages with native-level fluency and cultural understanding.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Smart Escalation</h3>
              <p className="text-grey-600 leading-relaxed">
                Seamlessly transfer complex issues to human agents with full conversation context and customer history.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Analytics & Insights</h3>
              <p className="text-grey-600 leading-relaxed">
                Track performance metrics, customer satisfaction, and identify areas for improvement with detailed analytics.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Shield className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Enterprise Security</h3>
              <p className="text-grey-600 leading-relaxed">
                SOC 2 compliant with end-to-end encryption, ensuring your customer data remains secure and private.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Zap className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Lightning Fast Setup</h3>
              <p className="text-grey-600 leading-relaxed">
                Deploy your AI support agent in 48 hours with minimal configuration and training required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-green-500 to-brand-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Support?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get started with AI support that reduces costs by 80% while improving customer satisfaction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Get AI Support Agent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brand-green-500 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-grey-900 mb-12">
              Get Your Custom AI Support Agent
            </h2>
            
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              // TODO: Handle form submission
              console.log('Form submitted');
            }}>
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="First name*"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email*"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex">
                  <select className="px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm min-w-[140px]">
                    <option value="IN">India (₹)</option>
                    <option value="US">United States ($)</option>
                    <option value="UK">United Kingdom (£)</option>
                    <option value="CA">Canada ($)</option>
                    <option value="AU">Australia ($)</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="+91"
                    className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your Company name*"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Job title*"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Talk to Our Experts
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
