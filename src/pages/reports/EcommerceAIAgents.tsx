import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Download, ArrowLeft, ShoppingCart, TrendingUp, Users } from 'lucide-react';

const EcommerceAIAgents = () => {
  return (
    <>
      <SEO 
        title="E-commerce AI Agents: Conversion & Sales Impact Analysis | EverGrowDigital"
        description="Research study on how AI agents drive sales in e-commerce, featuring data from 200+ online retailers."
        keywords="ecommerce AI agents, sales conversion, AI shopping assistants, retail automation"
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
                  Market Research
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-grey-900 mb-6">
                  E-commerce AI Agents: Conversion & Sales Impact Analysis
                </h1>
                <p className="text-xl text-grey-600 mb-8">
                  Research study on how AI agents drive sales in e-commerce, featuring data from 200+ online retailers and their conversion optimization results.
                </p>
                
                <a 
                  href="/lovable-uploads/9ddce30e-8318-49f1-9d10-de0dcae149c3.png"
                  download="Ecommerce-AI-Agents-Sales-Impact-Report.pdf"
                  className="inline-flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Download className="h-5 w-5 mr-3" />
                  Download Full Report
                </a>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/9ddce30e-8318-49f1-9d10-de0dcae149c3.png" 
                  alt="E-commerce AI Agents Report Cover"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-12 text-center">
              Sales Impact Results
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
                <div className="bg-brand-green-100 rounded-full p-4 w-fit mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-brand-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-grey-900 mb-2">42%</h3>
                <h4 className="text-xl font-semibold text-grey-900 mb-4">Conversion Increase</h4>
                <p className="text-grey-600">
                  Average increase in conversion rates across all participating e-commerce stores.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
                <div className="bg-brand-green-100 rounded-full p-4 w-fit mx-auto mb-6">
                  <ShoppingCart className="h-8 w-8 text-brand-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-grey-900 mb-2">35%</h3>
                <h4 className="text-xl font-semibold text-grey-900 mb-4">Cart Abandonment Reduction</h4>
                <p className="text-grey-600">
                  Reduction in cart abandonment rates through proactive AI agent intervention.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border text-center">
                <div className="bg-brand-green-100 rounded-full p-4 w-fit mx-auto mb-6">
                  <Users className="h-8 w-8 text-brand-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-grey-900 mb-2">24/7</h3>
                <h4 className="text-xl font-semibold text-grey-900 mb-4">Sales Support</h4>
                <p className="text-grey-600">
                  Round-the-clock sales assistance leading to improved customer experience and sales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Study Details */}
        <section className="py-20 bg-grey-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-12 text-center">
              Research Methodology
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-grey-900 mb-4">Study Scope</h3>
                  <ul className="space-y-2 text-grey-600">
                    <li>• 200+ online retailers analyzed</li>
                    <li>• 12-month performance tracking</li>
                    <li>• Multiple industry verticals</li>
                    <li>• Before/after implementation comparison</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-grey-900 mb-4">Key Benefits Identified</h3>
                  <ul className="space-y-2 text-grey-600">
                    <li>• Personalized product recommendations</li>
                    <li>• Real-time customer support</li>
                    <li>• Automated upselling and cross-selling</li>
                    <li>• Streamlined checkout process</li>
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

export default EcommerceAIAgents;