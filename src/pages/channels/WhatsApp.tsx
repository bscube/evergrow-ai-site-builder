
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { MessageSquare, ArrowRight, CheckCircle, Zap, Users, BarChart3, Bot, Phone, Calendar, ShoppingCart, Target, Play, Star, TrendingUp, Shield, Globe, Languages, Headphones } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";

const WhatsApp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Thank you for your interest!",
        description: "We've received your request and will contact you within 24 hours.",
      });

      navigate('/thank-you');
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const features = [
    {
      icon: MessageSquare,
      title: "WhatsApp Business API",
      description: "Official WhatsApp Business API integration with advanced automation capabilities",
      benefits: ["Verified business profile", "Rich media support", "Template messages", "Webhook integration"]
    },
    {
      icon: Bot,
      title: "AI-Powered Responses",
      description: "Intelligent chatbots that understand context and provide human-like responses",
      benefits: ["Natural language processing", "Context awareness", "Multi-turn conversations", "Smart escalation"]
    },
    {
      icon: Zap,
      title: "Instant Automation",
      description: "Automate customer support, sales inquiries, and booking processes",
      benefits: ["24/7 availability", "Instant responses", "Lead qualification", "Appointment booking"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track performance, measure ROI, and optimize your WhatsApp strategy",
      benefits: ["Message analytics", "Conversion tracking", "Customer insights", "Performance reports"]
    }
  ];

  const useCases = [
    {
      icon: ShoppingCart,
      title: "E-commerce Sales",
      description: "Product catalogs, order tracking, and customer support",
      image: "https://www.haptik.ai/hs-fs/hubfs/02SalesAgent.gif?width=1815&height=666&name=02SalesAgent.gif",
      results: "40% increase in sales conversions"
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Automated scheduling for restaurants, salons, and clinics",
      image: "https://www.haptik.ai/hs-fs/hubfs/03BookingAgent.gif?width=1815&height=666&name=03BookingAgent.gif",
      results: "80% booking automation rate"
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "24/7 support with intelligent query resolution",
      image: "https://www.haptik.ai/hs-fs/hubfs/01Support.gif?width=1200&height=666&name=01Support.gif",
      results: "95% first-contact resolution"
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Qualify leads and nurture prospects automatically",
      image: "https://www.haptik.ai/hs-fs/hubfs/04%20Lead%20Qualification%20Agent.gif?width=1815&height=666&name=04%20Lead%20Qualification%20Agent.gif",
      results: "60% more qualified leads"
    }
  ];

  const testimonials = [
    {
      quote: "Our WhatsApp bot handles 5000+ customer inquiries monthly, saving our team 40 hours per week while improving response times.",
      author: "Ahmed Al-Rashid",
      role: "Customer Success Manager",
      company: "Dubai Retail Co.",
      metric: "5000+ monthly inquiries"
    },
    {
      quote: "WhatsApp automation increased our restaurant bookings by 75%. Customers love the instant confirmation and reminders.",
      author: "Priya Sharma", 
      role: "Operations Manager",
      company: "Spice Garden Restaurant",
      metric: "75% booking increase"
    },
    {
      quote: "The multilingual support in Arabic and English helped us reach 30% more customers across the UAE market.",
      author: "Omar Hassan",
      role: "Digital Marketing Director", 
      company: "Gulf Properties",
      metric: "30% market expansion"
    }
  ];

  const integrations = [
    {
      name: "WhatsApp Business API",
      description: "Official API with full feature access",
      logo: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=64&h=64&fit=crop&crop=center"
    },
    {
      name: "Meta Business",
      description: "Integrated with Facebook ecosystem", 
      logo: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=64&h=64&fit=crop&crop=center"
    },
    {
      name: "CRM Integration",
      description: "Sync with Salesforce, HubSpot, Zoho",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=center"
    },
    {
      name: "Payment Gateways",
      description: "Process payments within WhatsApp",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=64&h=64&fit=crop&crop=center"
    }
  ];

  const capabilities = [
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Arabic, English, Hindi, and 100+ languages supported"
    },
    {
      icon: Shield,
      title: "Enterprise Security", 
      description: "End-to-end encryption and GDPR compliance"
    },
    {
      icon: Phone,
      title: "Voice Integration",
      description: "Seamless handoff to voice calls when needed"
    },
    {
      icon: TrendingUp,
      title: "Scalable Infrastructure",
      description: "Handle thousands of concurrent conversations"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 rounded-full text-green-600 text-sm font-medium mb-8">
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp Business API Certified
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              <span className="text-grey-900">Transform Your</span>
              <br />
              <span className="text-green-500">WhatsApp</span>
              <br />
              <span className="text-grey-900">Into a Sales Machine</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-grey-600 mb-12 leading-relaxed">
              Deploy intelligent WhatsApp bots that handle customer inquiries, process orders, and book appointments 24/7 across the Middle East.
            </p>
            
            <div className="flex justify-center mb-8">
              <Button 
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg px-8 py-4"
                onClick={() => {
                  const demoForm = document.getElementById('demo-form');
                  if (demoForm) {
                    demoForm.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-grey-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Official WhatsApp Partner
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Arabic & English Support
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                UAE Compliance Ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">5000+</div>
              <div className="text-green-100">Monthly WhatsApp Leads</div>
            </div>
            <div className="text-white">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">85%</div>
              <div className="text-green-100">Response Rate</div> 
            </div>
            <div className="text-white">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-green-100">Availability</div>
            </div>
            <div className="text-white">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">40%</div>
              <div className="text-green-100">Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              WhatsApp Automation Features
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Everything you need to turn WhatsApp into your most powerful sales and support channel
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-green-500/30 group">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-grey-900 ml-4 group-hover:text-green-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-grey-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-grey-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              WhatsApp Success Stories
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              See how businesses across the UAE are using WhatsApp automation to drive results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-green-500/30 group">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-green-500/10 rounded-xl">
                    <useCase.icon className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-grey-900 group-hover:text-green-600 transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <div className="text-green-500 font-semibold text-sm">
                      {useCase.results}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <img src={useCase.image} alt={useCase.title} className="w-full rounded-lg" />
                </div>
                
                <p className="text-grey-600 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Advanced WhatsApp Capabilities
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Enterprise-grade features designed for the Middle East market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="p-6 bg-green-500/10 rounded-2xl mb-6 group-hover:bg-green-500/20 transition-colors duration-300 inline-block">
                  <capability.icon className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-grey-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-grey-600">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Seamless integrations
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Connect with your existing tools and workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-green-500/30 text-center group">
                <div className="w-16 h-16 bg-grey-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/10 transition-colors duration-300">
                  <div className="w-8 h-8 bg-green-500 rounded"></div>
                </div>
                <h3 className="text-lg font-bold text-grey-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {integration.name}
                </h3>
                <p className="text-grey-600 text-sm">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              UAE Success Stories
            </h2>
            <p className="text-xl text-grey-600">
              Real results from businesses across the Emirates
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-grey-200 hover:border-green-500/30">
                <div className="text-2xl font-bold text-green-500 mb-4">
                  {testimonial.metric}
                </div>
                <blockquote className="text-grey-700 text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-grey-900">{testimonial.author}</div>
                    <div className="text-grey-600 text-sm">{testimonial.role}</div>
                    <div className="text-green-500 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Try WhatsApp AI in Action
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Experience how our WhatsApp bots handle real customer conversations
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Interactive WhatsApp Demo</h3>
                  <p className="text-green-100 mb-6">
                    Chat with our AI bot to see how it handles inquiries, qualifies leads, and books appointments - all within WhatsApp.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://wa.me/971123456789?text=Hi, I'd like to see your WhatsApp AI demo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-500 font-semibold rounded-lg hover:bg-grey-50 transition-colors duration-300"
                    >
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Chat Demo Bot
                    </a>
                    <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-green-500 font-semibold rounded-lg transition-colors duration-300">
                      Book Live Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="space-y-4">
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-sm text-green-100">Customer:</div>
                        <div className="text-white">"Hi, I need help with my order"</div>
                      </div>
                      <div className="bg-green-400/30 rounded-lg p-3">
                        <div className="text-sm text-green-100">AI Bot:</div>
                        <div className="text-white">"I'd be happy to help! Can you share your order number?"</div>
                      </div>
                      <div className="text-center text-green-100 text-sm">
                        <Play className="h-4 w-4 inline mr-2" />
                        Try it live →
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Demo Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Start Your WhatsApp Commerce Journey with Haptik
            </h2>
            <p className="text-xl text-grey-600">
              Get personalized recommendations and see how WhatsApp automation can transform your business
            </p>
          </div>

          <form id="demo-form" className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-grey-700">
                  First name*
                </Label>
                <Input 
                  id="firstName" 
                  placeholder="First name*" 
                  required 
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-grey-700">
                  Last name*
                </Label>
                <Input 
                  id="lastName" 
                  placeholder="Last name*" 
                  required 
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-sm font-medium text-grey-700">
                  Company name*
                </Label>
                <Input 
                  id="companyName" 
                  placeholder="Company name*" 
                  required 
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="businessEmail" className="text-sm font-medium text-grey-700">
                  Business email*
                </Label>
                <Input 
                  id="businessEmail" 
                  type="email" 
                  placeholder="Business email*" 
                  required 
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="jobTitle" className="text-sm font-medium text-grey-700">
                  Job title*
                </Label>
                <Input 
                  id="jobTitle" 
                  placeholder="Job title*" 
                  required 
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="annualRevenue" className="text-sm font-medium text-grey-700">
                  Company Annual Revenue*
                </Label>
                <Select required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Company Annual Revenue*" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less-than-1m">Less than $1M</SelectItem>
                    <SelectItem value="1m-10m">$1M - $10M</SelectItem>
                    <SelectItem value="10m-50m">$10M - $50M</SelectItem>
                    <SelectItem value="50m-100m">$50M - $100M</SelectItem>
                    <SelectItem value="100m-500m">$100M - $500M</SelectItem>
                    <SelectItem value="more-than-500m">More than $500M</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="country" className="text-sm font-medium text-grey-700">
                  Country*
                </Label>
                <Select required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="India" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="uae">UAE</SelectItem>
                    <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
                    <SelectItem value="qatar">Qatar</SelectItem>
                    <SelectItem value="kuwait">Kuwait</SelectItem>
                    <SelectItem value="bahrain">Bahrain</SelectItem>
                    <SelectItem value="oman">Oman</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-sm font-medium text-grey-700">
                  Phone number*
                </Label>
                <Input 
                  id="phoneNumber" 
                  placeholder="+91" 
                  required 
                  className="w-full"
                />
              </div>
            </div>

            <div className="text-center pt-6">
              <Button 
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="bg-green-500 hover:bg-green-600 disabled:bg-grey-400 text-white px-12 py-4 text-lg font-semibold rounded-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Get A Demo'}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your WhatsApp?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of UAE businesses using WhatsApp automation to boost sales and improve customer service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Get WhatsApp Bot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="https://wa.me/971123456789" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-500 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105">
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat with Expert
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatsApp;
