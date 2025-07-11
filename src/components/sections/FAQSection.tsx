
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/indexData';

const FAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-grey-600">
            Everything you need to know about our AI solutions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-grey-50 rounded-xl overflow-hidden border border-grey-200 hover:border-brand-green-500/30 transition-colors duration-300">
              <button 
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)} 
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-grey-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-grey-900">
                  {faq.question}
                </h3>
                <ChevronDown className={`h-5 w-5 text-brand-green-500 transform transition-transform duration-200 ${expandedFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {expandedFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-grey-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
