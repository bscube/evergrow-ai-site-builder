
import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, MapPin, CheckCircle, ArrowRight, Clock, Users, Star, Zap, Bot, Shield, BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Map from '../components/Map';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    industry: '',
    projectType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errors = [];
    
    if (!formData.name.trim()) {
      errors.push('Full name is required');
    }
    
    if (!formData.email.trim()) {
      errors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }
    
    if (!formData.company.trim()) {
      errors.push('Company name is required');
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      toast({
        title: "Please fix the following errors:",
        description: validationErrors.join(', '),
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission (replace with actual API call when Supabase client is available)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted successfully:', formData);
      
      // Show success message
      toast({
        title: "Thank you for your interest!",
        description: "We've received your consultation request and will respond within 2 hours during business hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        industry: '',
        projectType: ''
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: Clock,
      title: "48-Hour Deployment",
      description: "Get your AI agent live and converting leads in just 2 days"
    },
    {
      icon: BarChart3,
      title: "ROI Guaranteed",
      description: "Track measurable results from day one with detailed analytics"
    },
    {
      icon: Bot,
      title: "Industry-Specific AI",
      description: "Custom-trained agents that understand your business context"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with bank-grade security and encryption"
    }
  ];

  const testimonials = [
    {
      quote: "EverGrow's AI agent increased our lead conversion by 65% in the first month. The setup was incredibly smooth.",
      author: "Sarah Chen",
      role: "Head of Digital Marketing",
      company: "RetailPlus",
      rating: 5
    },
    {
      quote: "We're now handling 80% of customer inquiries automatically while maintaining high satisfaction scores.",
      author: "Marcus Rodriguez", 
      role: "Operations Director",
      company: "TravelEase",
      rating: 5
    },
    {
      quote: "The WhatsApp integration alone saved us 15 hours per week in customer support time.",
      author: "Emily Watson",
      role: "Customer Success Lead", 
      company: "FinanceForward",
      rating: 5
    }
  ];

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Chat with our AI specialist instantly",
      action: "Chat Now",
      link: "https://wa.me/971123456789",
      highlight: true
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Speak with our team directly",
      action: "Call Now",
      link: "tel:+971123456789"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us your requirements",
      action: "Email Us",
      link: "mailto:hello@evergrowdigital.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-8">
              <MessageSquare className="w-4 h-4 mr-2" />
              Free AI Consultation Available
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
              <span className="text-grey-900">Ready to Transform Your</span>
              <br />
              <span className="text-brand-green-500">Customer Experience?</span>
            </h1>
            
            <p className="text-xl text-grey-600 mb-12 leading-relaxed">
              Get a free AI audit and discover exactly how our agents will boost your conversions. 
              No commitments, just actionable insights.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-grey-500 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
                Free consultation
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
                48-hour deployment
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
                ROI guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className={`group p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  method.highlight 
                    ? 'border-brand-green-500 bg-brand-green-500/5 hover:bg-brand-green-500/10' 
                    : 'border-grey-200 bg-white hover:border-brand-green-500/30'
                }`}
              >
                <div className={`p-3 rounded-lg mb-4 ${
                  method.highlight ? 'bg-brand-green-500/10' : 'bg-grey-100 group-hover:bg-brand-green-500/10'
                }`}>
                  <method.icon className={`h-6 w-6 ${
                    method.highlight ? 'text-brand-green-500' : 'text-grey-600 group-hover:text-brand-green-500'
                  }`} />
                </div>
                <h3 className="text-lg font-bold text-grey-900 mb-2">{method.title}</h3>
                <p className="text-grey-600 mb-4 text-sm">{method.description}</p>
                <div className={`inline-flex items-center text-sm font-medium ${
                  method.highlight ? 'text-brand-green-500' : 'text-grey-600 group-hover:text-brand-green-500'
                }`}>
                  {method.action}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-grey-900 mb-4">
                  Get Your Free AI Consultation
                </h2>
                <p className="text-grey-600">
                  Tell us about your business and we'll show you exactly how AI agents can boost your results.
                </p>
              </div>

              {/* Zoho CRM Form */}
              <div className="w-full">
                <iframe 
                  aria-label="Book AI consultation" 
                  frameBorder="0" 
                  style={{height: '500px', width: '100%', border: 'none'}} 
                  src="https://forms.zohopublic.com/evergrowdigitalcom1/form/BookAIconsultation/formperma/TY0C9i99YK6kAdGAWm9byI0EeOlwuv-BT0tW8AZ3lfk"
                  title="Book AI Consultation Form"
                />
              </div>

              <p className="text-sm text-grey-500 text-center mt-6">
                We'll respond within 2 hours during business hours
              </p>
            </div>

            {/* Benefits & Testimonials */}
            <div className="space-y-8">
              
              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-grey-900 mb-6">Why Choose EverGrow Digital?</h3>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-3 bg-brand-green-500/10 rounded-lg mr-4 flex-shrink-0">
                        <benefit.icon className="h-6 w-6 text-brand-green-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-grey-900 mb-2">{benefit.title}</h4>
                        <p className="text-grey-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-grey-900 mb-6">What Our Clients Say</h3>
                
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border-l-4 border-brand-green-500 pl-6">
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-grey-700 mb-3 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-grey-900">{testimonial.author}</div>
                        <div className="text-sm text-grey-600">{testimonial.role}</div>
                        <div className="text-sm text-brand-green-500 font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-brand-green-500 to-brand-green-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Proven Results</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5000+</div>
                    <div className="text-green-100 text-sm">Monthly Leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">30%</div>
                    <div className="text-green-100 text-sm">Conversion Boost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">48hrs</div>
                    <div className="text-green-100 text-sm">Go Live Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">35%</div>
                    <div className="text-green-100 text-sm">Cost Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Contact;
