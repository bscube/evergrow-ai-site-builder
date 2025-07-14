import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    quote: "Partnering with Haptik has helped us revolutionize our customer experience and brought us closer to our goal of serving our customers in the most hassle-free safe & transparent way.",
    name: "Chetana Kotian",
    designation: "Project Manager, Eureka Forbes",
    image: "/lovable-uploads/6b11361d-e93e-47a7-8d6d-0165caa79795.png"
  },
  {
    id: 2,
    quote: "The AI-powered solutions from Haptik have transformed how we engage with our customers. The automation has improved efficiency while maintaining the personal touch our customers value.",
    name: "Sarah Johnson",
    designation: "Head of Customer Experience, TechCorp",
    image: "/lovable-uploads/4da42fa1-bfea-4100-a308-3fd54824a62d.png"
  },
  {
    id: 3,
    quote: "Implementation was seamless and the results were immediate. Our customer satisfaction scores have increased by 40% since we started using Haptik's platform.",
    name: "Michael Chen",
    designation: "VP Operations, RetailMax",
    image: "/lovable-uploads/9ddce30e-8318-49f1-9d10-de0dcae149c3.png"
  }
];

const FeaturedTestimonialSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#003366] to-[#004080] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 text-center">
          We Couldn't Have Said It Better Ourselves
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-white/30 hover:scale-105 hover:shadow-2xl"
            >
              {/* Customer Photo */}
              <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 mx-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Customer Name & Title */}
              <div className="text-center mb-4">
                <h3 className="font-semibold text-lg text-white mb-1">{testimonial.name}</h3>
                <p className="text-white/80 text-sm">{testimonial.designation}</p>
              </div>
              
              {/* Quote */}
              <blockquote className="text-white/90 text-sm leading-relaxed mb-6 line-clamp-4">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Read More Button */}
              <Link 
                to="/testimonials"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 group text-sm"
              >
                <span className="mr-2">Read More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonialSection;