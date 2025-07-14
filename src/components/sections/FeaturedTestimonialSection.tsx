import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedTestimonialSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#003366] to-[#004080] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
          We Couldn't Have Said It Better Ourselves
        </h2>

        {/* Testimonial Quote */}
        <div className="relative mb-12">
          {/* Opening Quote */}
          <div className="absolute -top-4 -left-4 text-6xl text-white/30 font-serif">"</div>
          
          <blockquote className="text-lg md:text-xl lg:text-2xl text-white italic leading-relaxed px-8">
            Partnering with Haptik has helped us revolutionize our customer experience and brought us closer to our goal of serving our customers in the most hassle-free safe & transparent way.
          </blockquote>
          
          {/* Closing Quote */}
          <div className="absolute -bottom-4 -right-4 text-6xl text-white/30 font-serif">"</div>
        </div>

        {/* Customer Info */}
        <div className="flex flex-col items-center mb-8">
          {/* Customer Photo */}
          <div className="w-16 h-16 rounded-full bg-white/20 mb-4 overflow-hidden">
            <img 
              src="/lovable-uploads/6b11361d-e93e-47a7-8d6d-0165caa79795.png" 
              alt="Chetana Kotian" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Customer Details */}
          <div className="text-white">
            <div className="font-semibold text-lg">Chetana Kotian</div>
            <div className="text-white/80">Project Manager, Eureka Forbes</div>
          </div>
        </div>

        {/* Read More Button */}
        <button className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 group">
          <span className="mr-2">Read More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedTestimonialSection;