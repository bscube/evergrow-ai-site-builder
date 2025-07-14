import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const CTACustomerExperienceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 transform rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 transform -rotate-45"></div>
        <div className="absolute bottom-10 left-1/3 w-20 h-20 border border-white/20 transform rotate-30"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
          Ready to Shape the Future of Customer Experience?
        </h2>
        
        <Link to="/contact">
          <Button 
            size="lg"
            className="bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-sm transition-all duration-300 px-8 py-3 text-lg font-medium"
          >
            Get A Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTACustomerExperienceSection;