
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Film, Users, TrendingUp, CheckCircle, Zap, Globe, BarChart3, MessageSquare, Heart, Star, Play } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import mediaEntertainmentHero from '../../assets/media-entertainment-hero.jpg';

const MediaEntertainment = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="AI Chatbots for Media & Entertainment - Enhance Audience Engagement"
        description="AI-powered chatbots for media and entertainment. Support content discovery, subscriber engagement, and provide personalized entertainment experiences."
        keywords="media chatbot, entertainment AI, content discovery, subscriber support automation"
        canonicalUrl="/industries/media-entertainment"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-8">
                <Film className="w-4 h-4 mr-2" />
                Media & Entertainment
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
                <span className="text-grey-900">Engage</span>
                <br />
                <span className="text-brand-green-500">Audiences</span>
                <br />
                <span className="text-grey-900">Seamlessly</span>
              </h1>
              
              <p className="text-xl text-grey-800 mb-8 leading-relaxed">
                Transform audience engagement with AI automation for content discovery and subscriber support that keeps viewers coming back for more.
              </p>
              
              <div className="flex justify-center sm:justify-start">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Get a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-grey-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">90%</div>
                  <div className="text-sm text-grey-800">Engagement Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">75%</div>
                  <div className="text-sm text-grey-800">Support Cost Cut</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">24/7</div>
                  <div className="text-sm text-grey-800">Availability</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={mediaEntertainmentHero}
                alt="Media and Entertainment AI Solutions" 
                className="w-full rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Media AI Solutions
            </h2>
            <p className="text-xl text-grey-800 max-w-3xl mx-auto">
              Comprehensive AI automation for content discovery and subscriber support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Play className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Content Discovery</h3>
              <p className="text-grey-800 leading-relaxed">
                Help users find personalized content recommendations based on viewing history and preferences.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <MessageSquare className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Subscriber Support</h3>
              <p className="text-grey-800 leading-relaxed">
                Provide instant assistance with subscriptions, technical issues, and account management 24/7.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Audience Engagement</h3>
              <p className="text-grey-800 leading-relaxed">
                Create interactive experiences that keep audiences engaged with polls, quizzes, and discussions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Star className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Personalized Experiences</h3>
              <p className="text-grey-800 leading-relaxed">
                Deliver tailored content suggestions and create unique viewing experiences for each user.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Heart className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Fan Community</h3>
              <p className="text-grey-800 leading-relaxed">
                Build and nurture fan communities with interactive features and exclusive content access.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Content Analytics</h3>
              <p className="text-grey-800 leading-relaxed">
                Track viewing patterns, engagement metrics, and optimize content strategy with AI-driven insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-green-500 to-brand-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Amplify Your Audience?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join leading media companies using AI to enhance viewer engagement and satisfaction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Get a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MediaEntertainment;
