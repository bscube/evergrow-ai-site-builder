import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const testimonials = [
  {
    id: 1,
    quote: "Partnering with Haptik has helped us revolutionize our customer experience and brought us closer to our goal of serving our customers in the most hassle-free safe & transparent way.",
    fullTestimonial: "Partnering with Haptik has helped us revolutionize our customer experience and brought us closer to our goal of serving our customers in the most hassle-free safe & transparent way. The implementation was seamless, and our customer satisfaction scores have improved dramatically. The AI-powered conversations feel natural and our customers appreciate the 24/7 availability. What impressed us most was how quickly we saw results - within just 3 months, we reduced response times by 80% and increased customer engagement by 150%.",
    name: "Chetana Kotian",
    designation: "Project Manager, Eureka Forbes",
    company: "Eureka Forbes",
    image: "/lovable-uploads/6b11361d-e93e-47a7-8d6d-0165caa79795.png",
    rating: 5,
    industry: "Home Appliances",
    results: [
      "80% reduction in response times",
      "150% increase in customer engagement",
      "24/7 customer support availability"
    ]
  },
  {
    id: 2,
    quote: "The AI-powered solutions from Haptik have transformed how we engage with our customers. The automation has improved efficiency while maintaining the personal touch our customers value.",
    fullTestimonial: "The AI-powered solutions from Haptik have transformed how we engage with our customers. The automation has improved efficiency while maintaining the personal touch our customers value. Before implementing Haptik, our support team was overwhelmed with repetitive queries. Now, the AI handles routine inquiries perfectly, allowing our human agents to focus on complex issues that require empathy and problem-solving skills. Our Net Promoter Score has increased by 45 points since implementation.",
    name: "Sarah Johnson",
    designation: "Head of Customer Experience, TechCorp",
    company: "TechCorp",
    image: "/lovable-uploads/4da42fa1-bfea-4100-a308-3fd54824a62d.png",
    rating: 5,
    industry: "Technology",
    results: [
      "45-point increase in Net Promoter Score",
      "70% reduction in routine query handling time",
      "Improved human agent efficiency"
    ]
  },
  {
    id: 3,
    quote: "Implementation was seamless and the results were immediate. Our customer satisfaction scores have increased by 40% since we started using Haptik's platform.",
    fullTestimonial: "Implementation was seamless and the results were immediate. Our customer satisfaction scores have increased by 40% since we started using Haptik's platform. The onboarding process was incredibly smooth - the Haptik team worked closely with us to understand our specific needs and customized the solution accordingly. What sets Haptik apart is their deep understanding of retail customer behavior. The AI doesn't just answer questions; it guides customers through their shopping journey, resulting in a 25% increase in conversion rates.",
    name: "Michael Chen",
    designation: "VP Operations, RetailMax",
    company: "RetailMax",
    image: "/lovable-uploads/9ddce30e-8318-49f1-9d10-de0dcae149c3.png",
    rating: 5,
    industry: "Retail",
    results: [
      "40% increase in customer satisfaction",
      "25% increase in conversion rates",
      "Seamless implementation process"
    ]
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Customer Testimonials - Real Success Stories | Haptik"
        description="Read detailed testimonials from our customers and learn how Haptik's AI-powered solutions have transformed their customer experience and business results."
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#003366] to-[#004080]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Customer Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover how leading companies are transforming their customer experience with Haptik's AI-powered solutions
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:gap-16">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400 mr-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <span className="text-grey-600 text-sm">{testimonial.industry}</span>
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-grey-700 leading-relaxed mb-6">
                      "{testimonial.fullTestimonial}"
                    </blockquote>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-grey-900 mb-4">Key Results:</h3>
                    <ul className="space-y-2">
                      {testimonial.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-grey-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-grey-900">{testimonial.name}</div>
                      <div className="text-grey-600">{testimonial.designation}</div>
                      <div className="text-grey-500 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>

                {/* Image/Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#003366] to-[#004080] mx-auto mb-6 flex items-center justify-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-grey-900 mb-2">{testimonial.company}</h3>
                      <p className="text-grey-600">{testimonial.industry} Industry</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#003366] to-[#004080]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join these successful companies and discover how Haptik can help you achieve similar results.
          </p>
          <Link 
            to="/track/testimonials-demo" 
            className="inline-flex items-center px-8 py-4 bg-white text-[#003366] rounded-lg hover:bg-grey-100 transition-colors font-semibold"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;