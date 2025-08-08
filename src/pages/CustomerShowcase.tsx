import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { ArrowRight, Star, TrendingUp, Users, Clock } from 'lucide-react';

const CustomerShowcase = () => {
  const showcaseData = [
    {
      company: "TechCorp Solutions",
      industry: "Technology",
      challenge: "24/7 customer support without expanding team",
      solution: "AI Support Agent with multi-language capabilities",
      results: "90% faster response times, 24/7 availability",
      roi: "300% ROI in 6 months",
      image: "/lovable-uploads/4da42fa1-bfea-4100-a308-3fd54824a62d.png"
    },
    {
      company: "RetailPlus",
      industry: "E-commerce",
      challenge: "High cart abandonment rates",
      solution: "AI Sales Agent with personalized recommendations",
      results: "45% reduction in cart abandonment",
      roi: "250% increase in conversion rates",
      image: "/lovable-uploads/665274b0-11f1-46f6-9c20-29a4bc35a12b.png"
    },
    {
      company: "MedicalCare Plus",
      industry: "Healthcare",
      challenge: "Appointment scheduling bottlenecks",
      solution: "AI Booking Agent with calendar integration",
      results: "80% reduction in scheduling time",
      roi: "200% efficiency improvement",
      image: "/lovable-uploads/6b11361d-e93e-47a7-8d6d-0165caa79795.png"
    }
  ];

  return (
    <>
      <SEO 
        title="Customer Showcase - Real AI Success Stories | EverGrowDigital"
        description="See how businesses transform with AI agents. Real customer success stories, measurable results, and proven ROI across industries."
        keywords="AI customer success, AI transformation stories, customer showcase"
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-green-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-grey-900 mb-6">
                Customer Success
                <span className="text-brand-green-500"> Showcase</span>
              </h1>
              <p className="text-xl text-grey-600 mb-8">
                See how businesses across industries transform their operations with AI agents. 
                Real results, measurable impact, exceptional ROI.
              </p>
            </div>
          </div>
        </section>

        {/* Showcase Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {showcaseData.map((showcase, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <img 
                        src={showcase.image} 
                        alt={showcase.company}
                        className="w-16 h-16 rounded-lg object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-grey-900">{showcase.company}</h3>
                        <p className="text-grey-500">{showcase.industry}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-grey-900 mb-2">Challenge</h4>
                        <p className="text-grey-600 text-sm">{showcase.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-grey-900 mb-2">Solution</h4>
                        <p className="text-grey-600 text-sm">{showcase.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-grey-900 mb-2">Results</h4>
                        <p className="text-brand-green-600 text-sm font-medium">{showcase.results}</p>
                      </div>
                    </div>

                    <div className="bg-brand-green-50 rounded-lg p-4 mb-6">
                      <div className="flex items-center">
                        <TrendingUp className="h-5 w-5 text-brand-green-500 mr-2" />
                        <span className="font-bold text-brand-green-700">{showcase.roi}</span>
                      </div>
                    </div>

                    <Link 
                      to="/track/showcase-demo"
                      className="inline-flex items-center text-brand-green-600 hover:text-brand-green-700 font-medium text-sm"
                    >
                      Get Similar Results
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-green-500 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how AI agents can transform your business operations and deliver measurable results.
            </p>
            <Link 
              to="/track/showcase-demo" 
              className="inline-flex items-center bg-white text-brand-green-500 hover:bg-grey-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CustomerShowcase;