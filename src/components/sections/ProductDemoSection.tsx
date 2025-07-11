
import React from 'react';
import { Play } from 'lucide-react';

const ProductDemoSection = () => {
  return (
    <section className="py-24 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
            See AI Agents in Action
          </h2>
          <p className="text-xl text-grey-600 max-w-3xl mx-auto">
            Watch how our AI agents handle real customer conversations across multiple channels
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-grey-900 to-grey-800 rounded-2xl p-8 shadow-2xl">
            <div className="aspect-video bg-grey-800 rounded-lg flex items-center justify-center relative overflow-hidden">
              <button className="flex items-center justify-center w-20 h-20 bg-brand-green-500 hover:bg-brand-green-600 rounded-full transition-colors duration-300 group">
                <Play className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform" />
              </button>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemoSection;
