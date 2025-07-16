
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Play, Users, TrendingUp, Clock, Star, CheckCircle, Target, Zap, BarChart3, MessageSquare, Calendar, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const CinemaExperienceCaseStudy = () => {
  const keyMetrics = [
    {
      value: "85%",
      label: "Reduction in Response Time",
      description: "From 2 hours to 18 minutes average response",
      icon: Clock
    },
    {
      value: "92%",
      label: "Customer Satisfaction",
      description: "Improved from 3.4 to 4.6/5 rating",
      icon: Star
    },
    {
      value: "70%",
      label: "Automation Rate",
      description: "Queries resolved without human intervention",
      icon: Zap
    },
    {
      value: "300%",
      label: "ROI Achieved",
      description: "Return on investment within 8 months",
      icon: TrendingUp
    }
  ];

  const challenges = [
    "Managing high volume of booking inquiries during movie releases",
    "Providing 24/7 customer support across multiple channels",
    "Handling complex queries about showtimes, seat availability, and promotions",
    "Reducing wait times during peak booking periods",
    "Maintaining consistent service quality across all touchpoints"
  ];

  const solutions = [
    "AI-powered chatbot with natural language processing",
    "Multi-channel deployment (website, mobile app, WhatsApp)",
    "Real-time integration with booking and inventory systems",
    "Intelligent routing for complex queries to human agents",
    "Personalized movie recommendations based on user preferences"
  ];

  const results = [
    "85% reduction in average response time",
    "70% of customer queries resolved automatically",
    "92% customer satisfaction rating",
    "40% increase in online bookings",
    "60% reduction in abandoned booking sessions",
    "300% ROI within 8 months of implementation"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Cinema Experience Case Study - GenAI-Powered Chatbot Success"
        description="Discover how a leading cinema chain transformed their customer experience with AI-powered chatbots, achieving 85% faster response times and 300% ROI."
        keywords="cinema AI chatbot, movie theater automation, entertainment industry AI, customer service transformation"
        canonicalUrl="/case-studies/cinema-experience"
      />
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Play className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Entertainment Industry</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Elevating the Cinema Experience with 
                <span className="text-brand-green-200"> GenAI-powered</span> Chatbot
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                How a leading cinema chain transformed their customer service, achieved 85% faster response times, 
                and delivered exceptional movie-going experiences through intelligent automation.
              </p>
              
            </div>
            
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-green-500 rounded-full flex items-center justify-center mr-4">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">CineMax Entertainment</h3>
                    <p className="text-purple-200">Leading Cinema Chain</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-purple-200">Industry</span>
                    <span className="font-semibold">Entertainment & Hospitality</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-purple-200">Locations</span>
                    <span className="font-semibold">150+ Theaters</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-purple-200">Monthly Visitors</span>
                    <span className="font-semibold">1.2M+ Customers</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-purple-200">Implementation</span>
                    <span className="font-semibold">6 Months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
              Transformational <span className="text-brand-green-500">Impact</span>
            </h2>
            <p className="text-xl text-grey-700 max-w-3xl mx-auto">
              Measurable results that revolutionized the cinema experience for both customers and staff
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 text-center border border-grey-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green-500/10 rounded-full mb-6">
                  <metric.icon className="h-8 w-8 text-brand-green-500" />
                </div>
                <div className="text-4xl font-bold text-grey-900 mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-grey-900 mb-2">{metric.label}</div>
                <div className="text-sm text-grey-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
                The <span className="text-red-500">Challenge</span>
              </h2>
              <p className="text-xl text-grey-700 mb-8 leading-relaxed">
                CineMax Entertainment was struggling with overwhelming customer service demands during peak times, 
                especially during blockbuster movie releases and holiday seasons.
              </p>
              
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-grey-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/10 rounded-full mb-4">
                    <Target className="h-10 w-10 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-grey-900 mb-2">Before AI Implementation</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-red-500 mb-1">2 Hours</div>
                    <div className="text-sm text-grey-600">Avg Response Time</div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-red-500 mb-1">3.4/5</div>
                    <div className="text-sm text-grey-600">Customer Rating</div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-red-500 mb-1">45%</div>
                    <div className="text-sm text-grey-600">Booking Abandonment</div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-red-500 mb-1">25</div>
                    <div className="text-sm text-grey-600">Support Agents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gradient-to-br from-brand-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-brand-green-100">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-green-500/10 rounded-full mb-4">
                    <Zap className="h-10 w-10 text-brand-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-grey-900 mb-2">EverGrow AI Solution</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-brand-green-500/10 rounded-full flex items-center justify-center mr-4">
                      <MessageSquare className="h-6 w-6 text-brand-green-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-grey-900">Intelligent Chatbot</div>
                      <div className="text-sm text-grey-600">Natural language processing</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-brand-green-500/10 rounded-full flex items-center justify-center mr-4">
                      <Globe className="h-6 w-6 text-brand-green-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-grey-900">Multi-Channel Support</div>
                      <div className="text-sm text-grey-600">Website, app, WhatsApp integration</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-brand-green-500/10 rounded-full flex items-center justify-center mr-4">
                      <Calendar className="h-6 w-6 text-brand-green-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-grey-900">Real-time Integration</div>
                      <div className="text-sm text-grey-600">Live booking and inventory sync</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
                The <span className="text-brand-green-500">Solution</span>
              </h2>
              <p className="text-xl text-grey-700 mb-8 leading-relaxed">
                EverGrow implemented a comprehensive AI-powered customer service solution that integrated 
                seamlessly with CineMax's existing systems and provided 24/7 intelligent support.
              </p>
              
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-brand-green-500 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-grey-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
              Outstanding <span className="text-brand-green-500">Results</span>
            </h2>
            <p className="text-xl text-grey-700 max-w-3xl mx-auto">
              The implementation delivered exceptional outcomes that exceeded all expectations and transformed the customer experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-brand-green-50 to-green-50 rounded-3xl p-8 border border-brand-green-100">
              <h3 className="text-2xl font-bold text-grey-900 mb-6">Key Achievements</h3>
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={index} className="flex items-start">
                    <Star className="w-6 h-6 text-brand-green-500 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-grey-700 font-medium">{result}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-grey-900 mb-6">Customer Feedback</h3>
              <blockquote className="text-grey-700 italic mb-6 text-lg">
                "The new AI chatbot has completely transformed our movie booking experience. 
                I can get instant answers about showtimes, book tickets, and even get personalized 
                movie recommendations - all without waiting for a human agent!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JS
                </div>
                <div>
                  <div className="font-semibold text-grey-900">Jessica Smith</div>
                  <div className="text-sm text-grey-600">CineMax Member since 2019</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <blockquote className="text-2xl text-grey-700 italic mb-8 max-w-4xl mx-auto leading-relaxed">
              "EverGrow's AI solution didn't just improve our customer service - it revolutionized our entire 
              customer experience. We've seen unprecedented satisfaction levels and our team can now focus 
              on creating memorable cinema experiences rather than handling routine inquiries."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                MR
              </div>
              <div className="text-left">
                <div className="text-xl font-semibold text-grey-900">Michael Rodriguez</div>
                <div className="text-grey-600">Chief Technology Officer, CineMax Entertainment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8">
            <BarChart3 className="h-10 w-10" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Join leading companies who have revolutionized their customer service with AI automation. 
            Get the same results that CineMax achieved - faster response times, higher satisfaction, and exceptional ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/case-studies" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl text-lg transition-all duration-200">
              View More Case Studies
              <BarChart3 className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="flex items-center justify-center text-purple-200">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <Link to="/case-studies" className="hover:text-white transition-colors">
              Back to All Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CinemaExperienceCaseStudy;
