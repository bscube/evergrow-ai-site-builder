import React from 'react';
import { Globe, Brain, Zap, Settings } from 'lucide-react';

const AIControlSection = () => {
  const capabilities = [
    {
      icon: Globe,
      title: "Leverage the Web, with Control",
      description: "Make your AI infinitely smarter by leveraging real-time information from the web to answer brand and industry-related queries— with clear boundaries ensuring it stays on-brand"
    },
    {
      icon: Brain,
      title: "Smart LLM",
      description: "Reduce unnecessary LLM calls for faster responses while keeping costs low and maximizing efficiency"
    },
    {
      icon: Zap,
      title: "Single, Intelligent Platform",
      description: "Deploy across multiple channels and let them instruct your AI— boosting automation"
    },
    {
      icon: Settings,
      title: "Advanced Controls",
      description: "Fine-tune your AI behavior with sophisticated controls and guardrails for optimal performance"
    }
  ];

  return (
    <section className="py-16 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-grey-900 mb-6">
            Powerful AI That You Control
          </h2>
          <p className="text-lg text-grey-600 max-w-4xl mx-auto">
            These core pillars are the foundation of our agentic systems, operating in synergy to drive exponential business value at scale
          </p>
        </div>

        <div className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 group-hover:bg-blue-50"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <capability.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-grey-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-grey-600 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIControlSection;