
import React from 'react';
import { Users } from 'lucide-react';
import { testimonials } from '../../data/indexData';

const TestimonialsSection = () => {
  return (
    <section className="pt-8 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-grey-600">
            Real results from businesses like yours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-grey-200 hover:border-brand-green-500/30">
              <div className="text-2xl font-bold text-brand-green-500 mb-4">
                {testimonial.metric}
              </div>
              <blockquote className="text-grey-700 text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-green-500/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-green-500" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-grey-900">{testimonial.author}</div>
                  <div className="text-grey-600 text-sm">{testimonial.role}</div>
                  <div className="text-brand-green-500 text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
