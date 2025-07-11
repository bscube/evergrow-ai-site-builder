
import React from 'react';
import { stats } from '../../data/indexData';

const StatsSection = () => {
  return (
    <section className="py-16 bg-grey-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-3xl lg:text-4xl font-bold text-brand-green-500 mb-2">
                {stat.number}
              </div>
              <div className="text-grey-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
