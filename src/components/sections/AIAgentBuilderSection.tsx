
import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, CheckCircle, ArrowRight, Code, Cpu, Brain, Layout } from 'lucide-react';

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
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg relative">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-blue-600">AI Agent</h3>
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-grey-600 mb-6">Outline the Agent's Scope</p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3" />
                  <span className="text-grey-700">Purpose</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3" />
                  <span className="text-grey-700">Goal</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3" />
                  <span className="text-grey-700">Functionality</span>
                </div>
              </div>

              {/* Arrow pointing right */}
              <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-grey-400" />
              </div>
            </div>

            {/* Tools Section */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg relative">
              <h3 className="text-2xl font-bold text-brand-green-600 mb-6">Tools</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-grey-700 font-medium">Make API Calls</span>
                </div>
                
                <div className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Cpu className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-grey-700 font-medium">Execute Custom Code</span>
                </div>
                
                <div className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-grey-700 font-medium">Prompt any LLM</span>
                </div>
                
                <div className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Layout className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-grey-700 font-medium">Compose UI Elements</span>
                </div>
              </div>

              {/* Arrow pointing right */}
              <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-grey-400" />
              </div>
            </div>

            {/* Instructions Section */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">Instructions</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-grey-600 text-center">
                    Define a set of instructions for the AI Agent to follow in order to complete the task
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-grey-600 text-sm text-center">How to use the Tools</p>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-grey-600 text-sm text-center">Steps to complete the task</p>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-grey-600 text-sm text-center">Any specific rules</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Build Your AI Agent
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIAgentBuilderSection;
