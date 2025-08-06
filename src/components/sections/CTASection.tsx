
import React, { useState } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import ConsultationModal from '../ConsultationModal';

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-r from-brand-green-500 to-brand-green-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Get a free AI audit and see exactly how voice and chat agents will boost your conversions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Get Free AI Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <a href="https://wa.me/971554966233" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brand-green-500 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105">
            <MessageSquare className="mr-2 h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
      
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default CTASection;
