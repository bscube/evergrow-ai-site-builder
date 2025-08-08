import React from 'react';
import { CheckCircle, Users, Zap, Award } from 'lucide-react';

const HaptikPartnershipSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Official Partnership
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-grey-900 mb-6">
            Official AI Partner with <span className="text-blue-600">Jio Haptik</span>
          </h2>
          <p className="text-xl text-grey-600 max-w-3xl mx-auto">
            Evergrow Digital is proud to be an official AI partner with Jio Haptik, leveraging their enterprise-grade conversational AI platform to deliver exceptional customer experiences for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-grey-900 mb-6">Partnership Benefits</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-grey-900">Enterprise-Grade AI Platform</h4>
                  <p className="text-grey-600">Access to Haptik's advanced conversational AI technology trusted by 500+ leading enterprises</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-grey-900">Omnichannel Support</h4>
                  <p className="text-grey-600">Deploy AI agents across WhatsApp, web chat, voice, and other popular messaging channels</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-grey-900">Advanced Analytics</h4>
                  <p className="text-grey-600">Comprehensive insights and reporting to optimize customer interactions and business outcomes</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-grey-900">Expert Support</h4>
                  <p className="text-grey-600">Dedicated support from both Evergrow and Haptik teams for seamless implementation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-2xl">JH</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-grey-900">Jio Haptik</h4>
                <p className="text-grey-600">Conversational AI Platform</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-grey-600">Enterprise Clients</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">3B+</div>
                <div className="text-sm text-grey-600">Conversations</div>
              </div>
            </div>
            <p className="text-grey-600 text-sm">
              Powered by Reliance Jio's ecosystem, Haptik provides enterprise-grade conversational AI solutions that understand, interact, and enhance customer experiences at scale.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-grey-900 mb-2">Rapid Deployment</h4>
            <p className="text-grey-600">Get your AI agents live in 48 hours with pre-built templates and proven workflows</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-xl font-semibold text-grey-900 mb-2">Human-Like Interactions</h4>
            <p className="text-grey-600">AI agents that deliver natural, contextual conversations just like human agents</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-semibold text-grey-900 mb-2">Proven Results</h4>
            <p className="text-grey-600">Join 500+ enterprises already transforming their customer experience with AI</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-grey-600 mb-6">
            Ready to leverage the power of Haptik's AI platform for your business?
          </p>
          <a 
            href="/cta/haptik-partnership-demo" 
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Partnership Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default HaptikPartnershipSection;