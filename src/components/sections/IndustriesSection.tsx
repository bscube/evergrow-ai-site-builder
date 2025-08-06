
import React from 'react';
import { industries } from '../../data/indexData';

const IndustriesSection = () => {
  return (
    <section className="py-16 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
            Built for Every Industry
          </h2>
          <p className="text-xl text-grey-600">
            Specialized solutions that understand your business
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white border-2 border-grey-200 hover:border-brand-green-500 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer group">
              <div className="text-3xl mb-4">{industry.icon}</div>
              <h3 className="font-semibold text-grey-900 mb-2 group-hover:text-brand-green-500 transition-colors">{industry.name}</h3>
              <div className="text-sm font-medium text-brand-green-500">{industry.metric}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
