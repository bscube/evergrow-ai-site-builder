import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-24 bg-gradient-to-br from-[#003366] to-[#004080] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 text-center">
          We Couldn't Have Said It Better Ourselves
        </h2>

        {/* Carousel */}
        <div className="relative">
          <Carousel 
            setApi={setApi}
            plugins={[autoplayPlugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="text-center max-w-4xl mx-auto">
                    {/* Testimonial Quote */}
                    <div className="relative mb-12">
                      {/* Opening Quote */}
                      <div className="absolute -top-4 -left-4 text-6xl text-white/30 font-serif">"</div>
                      
                      <blockquote className="text-lg md:text-xl lg:text-2xl text-white italic leading-relaxed px-8">
                        {testimonial.quote}
                      </blockquote>
                      
                      {/* Closing Quote */}
                      <div className="absolute -bottom-4 -right-4 text-6xl text-white/30 font-serif">"</div>
                    </div>

                    {/* Customer Info */}
                    <div className="flex flex-col items-center mb-8">
                      {/* Customer Photo */}
                      <div className="w-16 h-16 rounded-full bg-white/20 mb-4 overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Customer Details */}
                      <div className="text-white">
                        <div className="font-semibold text-lg">{testimonial.name}</div>
                        <div className="text-white/80">{testimonial.designation}</div>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <Link 
                      to="/testimonials"
                      className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 group"
                    >
                      <span className="mr-2">Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index + 1 === current 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonialSection;