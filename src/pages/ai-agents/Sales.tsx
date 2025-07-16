
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Users, DollarSign, CheckCircle, Zap, Globe, BarChart3, MessageSquare } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const Sales = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-8">
                <Target className="w-4 h-4 mr-2" />
                AI Sales Agent
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
                <span className="text-grey-900">Convert Prospects</span>
                <br />
                <span className="text-brand-green-500">Into Customers</span>
                <br />
                <span className="text-grey-900">Automatically</span>
              </h1>
              
              <p className="text-xl text-grey-600 mb-8 leading-relaxed">
                AI-powered sales agent that qualifies leads, nurtures prospects, and closes deals 24/7. Increase conversions by 40% while reducing sales cycle time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Get AI Sales Agent
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-green-500 text-brand-green-500 hover:bg-brand-green-500 hover:text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105">
                  Watch Demo
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-grey-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">40%</div>
                  <div className="text-sm text-grey-600">Conversion Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">60%</div>
                  <div className="text-sm text-grey-600">Faster Sales Cycle</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">24/7</div>
                  <div className="text-sm text-grey-600">Always Selling</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img src="https://www.haptik.ai/hs-fs/hubfs/02SalesAgent.gif?width=1815&height=666&name=02SalesAgent.gif" alt="AI Sales Agent Demo" className="w-full rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Make Each Touchpoint Count Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-12 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-medium text-grey-700">Acquire</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-medium text-grey-700">Convert</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-medium text-grey-700">Transact</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-medium text-grey-700">Support</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">👋</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-8">
                Make Each Touchpoint Count
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-grey-900 mb-2">Lower acquisition costs:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Turn casual visitors into qualified leads by engaging in human-like dialogs, understanding prospect's needs, and tailoring engagement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-grey-900 mb-2">Drive transactions:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Turn conversations into conversions by recommending products and reducing drop-offs during checkout.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-grey-900 mb-2">Streamline support:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Enable customers to resolve queries independently with self-serve support or AI sales agent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Harness Your Product Catalog Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-8">
                Harness Your Product Catalog
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-grey-900 mb-2">Catalog search:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Our AI sales agent uses embeddings to sift through the product catalog and surface products that match buyer queries.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-grey-900 mb-2">Product discovery:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Reduce friction and boost sales by connecting buyers to the right products.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-grey-900 mb-2">Tailored responses:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Answer queries beyond product details like feature comparison, preferences, and more for personalized shopping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 relative overflow-hidden">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-green-500 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-lg font-semibold text-grey-900">Sunscreens for summer</div>
                  </div>
                  
                  <div className="bg-grey-50 rounded-xl p-4 mb-4">
                    <p className="text-grey-700 text-sm leading-relaxed">
                      I've found some great sunscreens that are perfect for summer weather. Would you like to know more about them?
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-grey-200">
                      <div className="w-full h-16 bg-orange-100 rounded-lg mb-2 flex items-center justify-center">
                        <div className="w-8 h-12 bg-orange-400 rounded"></div>
                      </div>
                      <button className="w-full bg-brand-green-500 hover:bg-brand-green-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors">
                        View Item
                      </button>
                    </div>
                    
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-grey-200">
                      <div className="w-full h-16 bg-yellow-100 rounded-lg mb-2 flex items-center justify-center">
                        <div className="w-8 h-12 bg-yellow-400 rounded"></div>
                      </div>
                      <button className="w-full bg-brand-green-500 hover:bg-brand-green-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors">
                        View Item
                      </button>
                    </div>
                    
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-grey-200">
                      <div className="w-full h-16 bg-grey-100 rounded-lg mb-2 flex items-center justify-center">
                        <div className="w-8 h-12 bg-grey-400 rounded"></div>
                      </div>
                      <button className="w-full bg-brand-green-500 hover:bg-brand-green-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors">
                        View Item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Address Customer Concerns Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 relative overflow-hidden">
                <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-grey-50 rounded-xl p-3 flex-1">
                      <p className="text-grey-700 text-sm">What is a good skin care routine?</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="bg-blue-500 text-white rounded-xl p-3 text-sm leading-relaxed">
                      A good skin care routine to follow is to use fewer, targeted products in the recommended amount. Consistency is key, so create a realistic routine that can be followed every day.
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 bg-grey-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-grey-600" />
                    </div>
                    <div className="bg-grey-50 rounded-xl p-3 flex-1">
                      <p className="text-grey-700 text-sm">Ok, does this apply for oily skin too?</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-blue-500 text-white rounded-xl p-3 text-sm leading-relaxed">
                      Absolutely! Yes, the routine mentioned is suitable for oily skin as well.
                      <br /><br />
                      We offer a range of skincare options. If you have any specific concerns or preferences, I'd be happy to recommend some products for you. :)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-8">
                Address Customer Concerns
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-grey-900 mb-2">Guided purchases:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Don the hat of a sales rep and guide customers with relevant product information that drive informed purchases.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-grey-900 mb-2">Share expertise:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Provide actionable tips and usage recommendations, building trust and empowering customers for future purchases.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-grey-900 mb-2">Competitor handling:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Efficiently handle competitor-related queries with balanced responses highlighting the unique value of your brand and products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engage Post-Purchase Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-8">
                Engage Post-Purchase
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-grey-900 mb-2">Offers and discounts:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Proactively reach customers with personalized offers and back-in-stock alerts to facilitate conversions and sales.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-grey-900 mb-2">Win loyalty:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Keep customers engaged with order status, return policies, and product feedback to foster lasting relationships at scale.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-grey-900 mb-2">Higher AOV:</h3>
                    <p className="text-grey-600 leading-relaxed">
                      Amplify average order value through upsell and cross-selling of products related to customers' recent purchases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 relative overflow-hidden">
                <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-right text-sm text-grey-600">Where's my order?</div>
                  </div>
                  
                  <div className="mb-6">
                    <img 
                      src="/lovable-uploads/c1a92e03-717c-49f6-b56a-882576f79f7b.png"
                      alt="SoundWave Go speaker product"
                      className="w-32 h-24 object-contain rounded-lg mx-auto"
                    />
                  </div>
                  
                  <div className="bg-blue-500 text-white rounded-xl p-4 mb-4">
                    <p className="text-sm leading-relaxed">
                      Your SoundWave Go music speaker is set to arrive on April 10th! While you wait, want to check out the protective case for just $20 more?
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-grey-300 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-grey-600" />
                    </div>
                    <div className="bg-grey-50 rounded-xl p-3 flex-1">
                      <p className="text-grey-700 text-sm">I'm good for now, thanks!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streamline the Buying Experience Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
              Streamline the Buying Experience
            </h2>
            <p className="text-xl text-grey-600">
              with the power of AI sales agent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">
                Out-Of-Scope Queries
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Our AI sales agent easily tackles queries beyond its scope by directing customers to the use cases it's trained to help with, driving rich conversational experiences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">
                Superior Context Retention
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Your customers won't have to repeat themselves during pre-purchase. The AI sales agent remembers customer preferences and displays products purely based on intent.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">
                Unmatched Precision
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Integrated with the product catalog, the sales agent filters results using parameters such as price, size, and store location for accurate recommendations and better buying experience.
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
              Sales Features That Convert
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Advanced AI capabilities designed to maximize your sales potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Lead Qualification</h3>
              <p className="text-grey-600 leading-relaxed">
                Automatically qualify leads based on budget, authority, need, and timeline to focus on high-value prospects.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <MessageSquare className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Personalized Outreach</h3>
              <p className="text-grey-600 leading-relaxed">
                Craft personalized messages based on customer data, behavior, and preferences to increase engagement rates.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Upselling & Cross-selling</h3>
              <p className="text-grey-600 leading-relaxed">
                Identify opportunities to increase deal size with intelligent product recommendations and bundle suggestions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Sales Analytics</h3>
              <p className="text-grey-600 leading-relaxed">
                Track conversion rates, pipeline health, and performance metrics to optimize your sales strategy continuously.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <DollarSign className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Order Processing</h3>
              <p className="text-grey-600 leading-relaxed">
                Handle order placement, payment processing, and confirmation seamlessly within the conversation flow.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Zap className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">CRM Integration</h3>
              <p className="text-grey-600 leading-relaxed">
                Seamlessly integrate with your existing CRM to maintain data consistency and workflow continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-green-500 to-brand-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to 2x Your Sales?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Start converting more prospects into customers with AI that never sleeps
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Get AI Sales Agent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brand-green-500 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sales;
