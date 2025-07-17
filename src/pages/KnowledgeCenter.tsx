import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { BookOpen, Download, Video, FileText, ArrowRight, Clock, Star } from 'lucide-react';

const KnowledgeCenter = () => {
  const guides = [
    {
      title: "Complete Guide to AI Agents for Business",
      description: "Everything you need to know about implementing AI agents in your organization.",
      downloadUrl: "#",
      readTime: "15 min read",
      category: "Getting Started",
      featured: true
    },
    {
      title: "AI Agent Implementation Checklist",
      description: "Step-by-step checklist to ensure successful AI agent deployment.",
      downloadUrl: "#",
      readTime: "8 min read",
      category: "Implementation"
    },
    {
      title: "ROI Measurement Framework for AI Agents",
      description: "Learn how to measure and track the return on investment of your AI agents.",
      downloadUrl: "#",
      readTime: "12 min read",
      category: "Analytics"
    },
    {
      title: "Best Practices for AI Agent Training",
      description: "Proven methods to train and optimize your AI agents for better performance.",
      downloadUrl: "#",
      readTime: "10 min read",
      category: "Optimization"
    }
  ];


  return (
    <>
      <SEO 
        title="Knowledge Center - AI Agent Guides & Documentation | EverGrowDigital"
        description="Comprehensive guides, tutorials, and documentation for implementing and optimizing AI agents. Learn best practices and get expert insights."
        keywords="AI agent guides, AI documentation, AI tutorials, AI best practices"
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-green-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-grey-900 mb-6">
                Knowledge
                <span className="text-brand-green-500"> Center</span>
              </h1>
              <p className="text-xl text-grey-600 mb-8">
                Comprehensive guides, tutorials, and documentation to help you master AI agents 
                and maximize their impact on your business.
              </p>
            </div>
          </div>
        </section>

        {/* Guides Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
                Comprehensive Guides
              </h2>
              <p className="text-xl text-grey-600 max-w-3xl mx-auto mb-8">
                In-depth guides covering everything from implementation to optimization
              </p>
              <div className="max-w-4xl mx-auto">
                <img 
                  src="/lovable-uploads/32f939c9-cfee-4f8f-abe9-c312562695f9.png" 
                  alt="AI Chatbot Examples - Finance, Insurance, and Customer Experience"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.map((guide, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 ${guide.featured ? 'ring-2 ring-brand-green-500' : ''}`}>
                  {guide.featured && (
                    <div className="bg-brand-green-500 text-white px-4 py-2 rounded-t-2xl">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Featured Guide</span>
                      </div>
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-brand-green-100 text-brand-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            {guide.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-grey-900 mb-3">{guide.title}</h3>
                        <p className="text-grey-600 mb-4">{guide.description}</p>
                      </div>
                      <BookOpen className="h-8 w-8 text-brand-green-500 ml-4" />
                    </div>
                    
                    <div className="flex items-center text-grey-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {guide.readTime}
                    </div>
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
              Need Personalized Guidance?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our experts are here to help you implement AI agents successfully in your organization.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-brand-green-500 hover:bg-grey-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Get Expert Help
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default KnowledgeCenter;