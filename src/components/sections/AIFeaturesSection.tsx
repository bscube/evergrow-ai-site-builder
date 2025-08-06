
import React from 'react';
import { aiFeatures } from '../../data/indexData';

const AIFeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
            Advanced AI Capabilities
          </h2>
          <p className="text-xl text-grey-600 max-w-3xl mx-auto">
            Powerful features that adapt to your business needs and scale with your growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30 group">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-brand-green-500/10 rounded-xl group-hover:bg-brand-green-500/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-brand-green-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-grey-900 group-hover:text-brand-green-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <div className="text-brand-green-500 font-medium text-sm">
                    {feature.benefit}
                  </div>
                </div>
              </div>
              <p className="text-grey-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;
