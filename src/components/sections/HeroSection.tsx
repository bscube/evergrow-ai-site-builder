
import React from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Sales & Support Agents Live in 48 Hours
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
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
          
          {/* Trust Indicators */}
          <div className="mb-8">
            <p className="text-sm text-grey-500 mb-4">Trusted by leading brands across industries</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">J</span>
                </div>
                <span className="text-sm font-medium text-grey-600">Jio Haptik Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-sm font-medium text-grey-600">Vibgyor</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="text-sm font-medium text-grey-600">Everbright</span>
              </div>
            </div>
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
