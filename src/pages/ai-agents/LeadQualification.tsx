
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, TrendingUp, CheckCircle, Zap, Globe, BarChart3, MessageSquare, Filter } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const LeadQualification = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="AI Lead Qualification Agent - Automate Lead Scoring & Qualification"
        description="AI-powered lead qualification agent that scores, qualifies, and nurtures prospects automatically. Increase conversion rates by 40% with intelligent lead scoring."
        keywords="AI lead qualification, lead scoring, sales automation, prospect qualification, lead nurturing"
        canonicalUrl="/ai-agents/lead-qualification"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-8">
                <Target className="w-4 h-4 mr-2" />
                AI Lead Qualification Agent
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
                <span className="text-grey-900">Qualify</span>
                <br />
                <span className="text-brand-green-500">High-Value</span>
                <br />
                <span className="text-grey-900">Leads Instantly</span>
              </h1>
              
              <p className="text-xl text-grey-600 mb-8 leading-relaxed">
                AI lead qualification agent that automatically scores prospects, identifies buying intent, and routes qualified leads to your sales team. Increase conversion rates by 40%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Lead Qualification AI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-green-500 text-brand-green-500 hover:bg-brand-green-500 hover:text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105">
                  Watch Demo
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-grey-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">40%</div>
                  <div className="text-sm text-grey-600">Higher Conversion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">65%</div>
                  <div className="text-sm text-grey-600">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">24/7</div>
                  <div className="text-sm text-grey-600">Lead Processing</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center" 
                alt="AI Lead Qualification Dashboard" 
                className="w-full rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Lead Qualification Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Chat Interface */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
                {/* AI Avatar and Message */}
                <div className="mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl rounded-tl-none p-4 max-w-xs">
                      <p className="text-white text-sm">
                        I'm scouting for home loans with low interest rates. Can you help?
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* AI Response */}
                <div className="mb-6">
                  <div className="bg-white rounded-2xl rounded-bl-none p-4 max-w-xs ml-auto">
                    <p className="text-grey-800 text-sm">
                      Sure. May I know your preferred loan amount and tenure?
                    </p>
                  </div>
                </div>
                
                {/* User Response */}
                <div className="mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" 
                        alt="User" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl rounded-tl-none p-4 max-w-xs">
                      <p className="text-white text-sm">
                        I'm looking for around $200,000 over 15 years.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Final AI Response */}
                <div>
                  <div className="bg-white rounded-2xl rounded-bl-none p-4 max-w-sm ml-auto">
                    <p className="text-grey-800 text-sm">
                      I'll connect you to our loan consultant. Can I have your credit score and contact details?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-8">
                Seamless Lead Qualification
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-grey-900 mb-2">
                      Dynamic support:
                    </h3>
                    <p className="text-grey-600 leading-relaxed">
                      Smartly guide customers through their journey by answering queries, resolving concerns, and collecting key details for automated follow-ups.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-grey-900 mb-2">
                      No friction:
                    </h3>
                    <p className="text-grey-600 leading-relaxed">
                      Power natural conversations, handled with the precision of AI agent, removing friction and enhancing conversions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-grey-900 mb-2">
                      Intelligent query handling:
                    </h3>
                    <p className="text-grey-600 leading-relaxed">
                      Efficiently resolve queries around competitor capabilities, pricing, and even questions beyond the agent's scope.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Lead Qualification Features
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Intelligent lead scoring and qualification powered by AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Filter className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Smart Lead Scoring</h3>
              <p className="text-grey-600 leading-relaxed">
                Automatically score leads based on demographics, behavior, and engagement patterns.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Target className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Intent Detection</h3>
              <p className="text-grey-600 leading-relaxed">
                Identify buying intent signals and prioritize high-value prospects automatically.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Progressive Profiling</h3>
              <p className="text-grey-600 leading-relaxed">
                Gradually collect prospect information through natural conversation flow.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Lead Routing</h3>
              <p className="text-grey-600 leading-relaxed">
                Route qualified leads to the right sales rep based on territory, expertise, or availability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Performance Analytics</h3>
              <p className="text-grey-600 leading-relaxed">
                Track qualification rates, conversion metrics, and ROI with detailed reporting.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Zap className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">CRM Integration</h3>
              <p className="text-grey-600 leading-relaxed">
                Seamlessly sync qualified leads with Salesforce, HubSpot, and other CRM systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-green-500 to-brand-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Qualify More Leads?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Increase conversion rates and reduce sales cycle time with AI-powered lead qualification
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Get Lead Qualification AI
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

export default LeadQualification;
