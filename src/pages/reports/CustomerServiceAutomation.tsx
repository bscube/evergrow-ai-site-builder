import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Download, ArrowLeft, Clock, DollarSign, TrendingUp } from 'lucide-react';

const CustomerServiceAutomation = () => {
  return (
    <>
      <SEO 
        title="Customer Service Automation: ROI & Performance Metrics | EverGrowDigital"
        description="Deep dive into measurable benefits of AI-powered customer service, including response times, cost savings, and satisfaction scores."
        keywords="customer service automation, AI customer service, ROI metrics, performance analysis"
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
                  Performance Study
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-grey-900 mb-6">
                  Customer Service Automation: ROI & Performance Metrics
                </h1>
                <p className="text-xl text-grey-600 mb-8">
                  Deep dive into measurable benefits of AI-powered customer service, including response times, cost savings, and satisfaction scores.
                </p>
                
                <a 
                  href="/lovable-uploads/8f80e73a-3604-4714-ad8c-85d9c8425fc4.png"
                  download="Customer-Service-Automation-ROI-Report.pdf"
                  className="inline-flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Download className="h-5 w-5 mr-3" />
                  Download Full Report
                </a>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/8f80e73a-3604-4714-ad8c-85d9c8425fc4.png" 
                  alt="Customer Service Automation Report Cover"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-12 text-center">
              Proven Performance Improvements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
                <div className="bg-brand-green-100 rounded-full p-4 w-fit mx-auto mb-6">
                  <Clock className="h-8 w-8 text-brand-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-grey-900 mb-2">73%</h3>
                <h4 className="text-xl font-semibold text-grey-900 mb-4">Response Time Reduction</h4>
                <p className="text-grey-600">
                  Average reduction in customer response times across all analyzed implementations.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
                <div className="bg-brand-green-100 rounded-full p-4 w-fit mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-brand-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-grey-900 mb-2">$2.3M</h3>
                <h4 className="text-xl font-semibold text-grey-900 mb-4">Annual Cost Savings</h4>
                <p className="text-grey-600">
                  Maximum annual cost savings achieved by enterprise clients through automation.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
                <div className="bg-brand-green-100 rounded-full p-4 w-fit mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-brand-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-grey-900 mb-2">92%</h3>
                <h4 className="text-xl font-semibold text-grey-900 mb-4">Satisfaction Score</h4>
                <p className="text-grey-600">
                  Average customer satisfaction score improvement with AI-powered support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Report Preview */}
        <section className="py-20 bg-grey-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-12 text-center">
              Report Highlights
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-grey-900 mb-4">Methodology</h3>
                  <ul className="space-y-2 text-grey-600">
                    <li>• Analysis of 150+ customer service implementations</li>
                    <li>• 6-month performance tracking period</li>
                    <li>• Cross-industry comparative study</li>
                    <li>• Before/after performance metrics</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-grey-900 mb-4">Key Findings</h3>
                  <ul className="space-y-2 text-grey-600">
                    <li>• 24/7 availability increases customer satisfaction</li>
                    <li>• Multi-language support expands market reach</li>
                    <li>• Instant responses reduce customer churn</li>
                    <li>• Seamless human handoff maintains quality</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CustomerServiceAutomation;