
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Sales & Support Agents Live in 48 Hours
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-grey-900">AI-Powered Sales &</span>
            <br />
            <span className="text-brand-green-500">Support Agents</span>
            <br />
            <span className="text-grey-900">That Boost Conversions</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-grey-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            Deploy custom AI agents for your industry — drive leads, engage customers 24/7, and see results in days, not months.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact#consultation-form" 
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Get Free AI Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="https://wa.me/971554966233" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-green-500 text-brand-green-500 hover:bg-brand-green-500 hover:text-white font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-grey-500">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
              Live in 48 hours
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
              ROI tracked from Day 1
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
              Industry-specific AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
