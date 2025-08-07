
import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, CheckCircle, ArrowRight, Settings, Terminal, Brain, Layout, Cpu, Share2, Globe } from 'lucide-react';

const AIAgentBuilderSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
            Your AI Agent Builder for High-Impact Use Cases
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* AI Agent Card */}
            <div className="bg-blue-50 rounded-3xl p-8 shadow-sm relative border border-blue-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-blue-600">AI Agent</h3>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="h-8 w-8 text-white" />
                </div>
              </div>
              <p className="text-grey-600 mb-8 text-lg">Outline the Agent's Scope</p>
              
              <div className="space-y-4">
                <div className="flex items-center bg-white rounded-xl p-3 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3" />
                  <span className="text-grey-700 font-medium">Purpose</span>
                </div>
                <div className="flex items-center bg-white rounded-xl p-3 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3" />
                  <span className="text-grey-700 font-medium">Goal</span>
                </div>
                <div className="flex items-center bg-white rounded-xl p-3 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3" />
                  <span className="text-grey-700 font-medium">Functionality</span>
                </div>
              </div>

              {/* Arrow pointing right */}
              <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
                <div className="w-12 h-1 bg-grey-300 rounded-full"></div>
                <ArrowRight className="h-6 w-6 text-grey-400 absolute -right-2 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            {/* Tools Section */}
            <div className="bg-blue-50 rounded-3xl p-8 shadow-sm relative border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-600 mb-8">Tools</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 flex items-center shadow-sm border border-blue-100">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-grey-700 font-medium text-lg">Make API Calls</span>
                </div>
                
                <div className="bg-white rounded-2xl p-4 flex items-center shadow-sm border border-blue-100">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                    <Terminal className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-grey-700 font-medium text-lg">Execute Custom Code</span>
                </div>
                
                <div className="bg-white rounded-2xl p-4 flex items-center shadow-sm border border-blue-100">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-grey-700 font-medium text-lg">Prompt any LLM</span>
                </div>
                
                <div className="bg-white rounded-2xl p-4 flex items-center shadow-sm border border-blue-100">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                    <Layout className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-grey-700 font-medium text-lg">Compose UI Elements</span>
                </div>
              </div>

              {/* Arrow pointing right */}
              <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
                <div className="w-12 h-1 bg-grey-300 rounded-full"></div>
                <ArrowRight className="h-6 w-6 text-grey-400 absolute -right-2 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            {/* Instructions Section */}
            <div className="bg-blue-50 rounded-3xl p-8 shadow-sm border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-600 mb-8">Instructions</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                  <p className="text-grey-600 text-center font-medium">
                    Define a set of instructions for the AI Agent to follow in order to complete the task
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-blue-100">
                  <p className="text-grey-600 text-center">How to use the Tools</p>
                </div>
                
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-blue-100">
                  <p className="text-grey-600 text-center">Steps to complete the task</p>
                </div>
                
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-blue-100">
                  <p className="text-grey-600 text-center">Any specific rules</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature boxes section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-grey-200">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-grey-900">Flexible Model Selection</h3>
            </div>
            <p className="text-grey-600 leading-relaxed">
              Experiment with leading AI models like GPT, llama, and Claude to find the best fit for your business needs
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-grey-200">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                <Share2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-grey-900">Omnichannel Engagement</h3>
            </div>
            <p className="text-grey-600 leading-relaxed">
              Deploy your AI Agent across Web, Chat, Voice, and more—effortlessly reaching customers on their preferred platforms.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-grey-200">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-grey-900">Multilingual Support</h3>
            </div>
            <p className="text-grey-600 leading-relaxed">
              Break language barriers with AI that supports 100+ languages, ensuring seamless global communication
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link to="/track/ai-builder-demo" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Build Your AI Agent
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIAgentBuilderSection;
