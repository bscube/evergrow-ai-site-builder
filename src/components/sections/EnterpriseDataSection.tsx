import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';

const EnterpriseDataSection = () => {
  const [expandedItem, setExpandedItem] = useState('Smart Recommendations');

  const toggleItem = (item: string) => {
    setExpandedItem(expandedItem === item ? '' : item);
  };

  return (
    <section className="py-20 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-grey-900 mb-6">
            Your Data. Your AI. Your Advantage.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Dropdowns */}
          <div className="space-y-4">
            {/* Leverage Your Enterprise Data */}
            <div className="border border-grey-200 rounded-xl bg-white">
              <button
                onClick={() => toggleItem('Leverage Your Enterprise Data')}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-grey-50 transition-colors duration-200 rounded-xl"
              >
                <h3 className="text-xl font-bold text-grey-900">Leverage Your Enterprise Data</h3>
                {expandedItem === 'Leverage Your Enterprise Data' ? (
                  <ChevronDown className="h-5 w-5 text-grey-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-grey-600" />
                )}
              </button>
              {expandedItem === 'Leverage Your Enterprise Data' && (
                <div className="px-6 pb-6">
                  <p className="text-grey-600 leading-relaxed">
                    Connect your existing databases, CRMs, and systems to create AI agents that understand your business context and provide personalized responses.
                  </p>
                </div>
              )}
            </div>

            {/* Maximum Accuracy */}
            <div className="border border-grey-200 rounded-xl bg-white">
              <button
                onClick={() => toggleItem('Maximum Accuracy')}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-grey-50 transition-colors duration-200 rounded-xl"
              >
                <h3 className="text-xl font-bold text-grey-900">Maximum Accuracy</h3>
                {expandedItem === 'Maximum Accuracy' ? (
                  <ChevronDown className="h-5 w-5 text-grey-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-grey-600" />
                )}
              </button>
              {expandedItem === 'Maximum Accuracy' && (
                <div className="px-6 pb-6">
                  <p className="text-grey-600 leading-relaxed">
                    Ensure your AI provides accurate, up-to-date information by training on your specific business data and maintaining real-time synchronization.
                  </p>
                </div>
              )}
            </div>

            {/* Smart Recommendations */}
            <div className="border border-grey-200 rounded-xl bg-white">
              <button
                onClick={() => toggleItem('Smart Recommendations')}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-grey-50 transition-colors duration-200 rounded-xl"
              >
                <h3 className="text-xl font-bold text-grey-900">Smart Recommendations</h3>
                {expandedItem === 'Smart Recommendations' ? (
                  <ChevronDown className="h-5 w-5 text-blue-500" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-blue-500" />
                )}
              </button>
              {expandedItem === 'Smart Recommendations' && (
                <div className="px-6 pb-6">
                  <p className="text-grey-600 leading-relaxed">
                    Accurately recommend products to customers using insights from your product catalog
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right side - Visual Demo */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full">
                {/* Chat Interface */}
                <div className="space-y-4">
                  {/* User message */}
                  <div className="bg-grey-100 rounded-2xl p-4 ml-8">
                    <p className="text-grey-800 text-sm">
                      Suggest a good face cream for oily skin under $100.
                    </p>
                  </div>
                  
                  {/* AI response */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-grey-800 text-sm mb-4">
                        Sure, let me find a good face cream for oily skin under $100 for you.
                      </p>
                      
                      {/* Product recommendations */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="text-center">
                          <div className="bg-grey-100 rounded-lg p-3 mb-2">
                            <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto"></div>
                          </div>
                          <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded">
                            View Item
                          </button>
                        </div>
                        <div className="text-center">
                          <div className="bg-grey-100 rounded-lg p-3 mb-2">
                            <div className="w-12 h-12 bg-blue-400 rounded-lg mx-auto"></div>
                          </div>
                          <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded">
                            View Item
                          </button>
                        </div>
                        <div className="text-center">
                          <div className="bg-grey-100 rounded-lg p-3 mb-2">
                            <div className="w-12 h-12 bg-orange-400 rounded-lg mx-auto"></div>
                          </div>
                          <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded">
                            View Item
                          </button>
                        </div>
                      </div>
                      
                      {/* Get A Demo Button */}
                      <div className="flex justify-center">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-colors duration-200">
                          Get A Demo
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseDataSection;