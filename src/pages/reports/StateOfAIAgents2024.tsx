import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Download, ArrowLeft, TrendingUp, BarChart3, Users, Building } from 'lucide-react';

const StateOfAIAgents2024 = () => {
  return (
    <>
      <SEO 
        title="State of AI Agents 2024: Industry Transformation Report | EverGrowDigital"
        description="Comprehensive analysis of AI agent adoption across industries, with insights from 500+ businesses and market trends."
        keywords="AI agents 2024, industry transformation, AI adoption, market trends"
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-green-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/reports-research" 
              className="inline-flex items-center text-brand-green-500 hover:text-brand-green-600 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Reports & Research
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="bg-brand-green-100 text-brand-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                  Industry Report
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-grey-900 mb-6">
                  State of AI Agents 2024: Industry Transformation Report
                </h1>
                <p className="text-xl text-grey-600 mb-8">
                  Comprehensive analysis of AI agent adoption across industries, with insights from 500+ businesses and market trends shaping the future of automation.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center text-grey-600">
                    <BarChart3 className="h-5 w-5 mr-2 text-brand-green-500" />
                    <span>64 pages</span>
                  </div>
                  <div className="flex items-center text-grey-600">
                    <Users className="h-5 w-5 mr-2 text-brand-green-500" />
                    <span>500+ businesses surveyed</span>
                  </div>
                  <div className="flex items-center text-grey-600">
                    <Building className="h-5 w-5 mr-2 text-brand-green-500" />
                    <span>12 industries analyzed</span>
                  </div>
                </div>
                
                <a 
                  href="/lovable-uploads/760e5965-c5c5-4c2c-812d-42b5436a8245.png"
                  download="State-of-AI-Agents-2024-Report.pdf"
                  className="inline-flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Download className="h-5 w-5 mr-3" />
                  Download Full Report
                </a>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/760e5965-c5c5-4c2c-812d-42b5436a8245.png" 
                  alt="State of AI Agents 2024 Report Cover"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-12 text-center">
              Key Insights & Findings
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <div className="bg-brand-green-100 rounded-full p-3 w-fit mb-6">
                  <TrendingUp className="h-6 w-6 text-brand-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-grey-900 mb-4">85% Increase</h3>
                <p className="text-grey-600">
                  Average increase in AI agent adoption across all surveyed industries in 2024 compared to 2023.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <div className="bg-brand-green-100 rounded-full p-3 w-fit mb-6">
                  <BarChart3 className="h-6 w-6 text-brand-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-grey-900 mb-4">ROI Analysis</h3>
                <p className="text-grey-600">
                  Detailed return on investment analysis across 12 key industries implementing AI agents.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <div className="bg-brand-green-100 rounded-full p-3 w-fit mb-6">
                  <Users className="h-6 w-6 text-brand-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-grey-900 mb-4">Future Predictions</h3>
                <p className="text-grey-600">
                  Expert predictions and market forecasts for AI agent development through 2024-2025.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Report Contents */}
        <section className="py-20 bg-grey-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-12 text-center">
              What's Inside This Report
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="border-b border-grey-200 pb-4">
                  <h3 className="text-xl font-semibold text-grey-900 mb-2">Executive Summary</h3>
                  <p className="text-grey-600">High-level overview of AI agent market trends and key findings</p>
                </div>
                
                <div className="border-b border-grey-200 pb-4">
                  <h3 className="text-xl font-semibold text-grey-900 mb-2">Industry Analysis</h3>
                  <p className="text-grey-600">Sector-by-sector breakdown of AI agent adoption and impact</p>
                </div>
                
                <div className="border-b border-grey-200 pb-4">
                  <h3 className="text-xl font-semibold text-grey-900 mb-2">Market Metrics</h3>
                  <p className="text-grey-600">Comprehensive data on ROI, performance improvements, and cost savings</p>
                </div>
                
                <div className="border-b border-grey-200 pb-4">
                  <h3 className="text-xl font-semibold text-grey-900 mb-2">Case Studies</h3>
                  <p className="text-grey-600">Real-world implementation examples from leading organizations</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-grey-900 mb-2">Future Outlook</h3>
                  <p className="text-grey-600">Predictions and recommendations for 2024-2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-green-500 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement AI Agents?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See how our AI agents can transform your business operations. Schedule a personalized demo today.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-brand-green-500 hover:bg-grey-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Get a Demo
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default StateOfAIAgents2024;