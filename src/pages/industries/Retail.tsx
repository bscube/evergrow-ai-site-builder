
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Users, TrendingUp, CheckCircle, Zap, Globe, BarChart3, MessageSquare, Heart, Star, Package } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const Retail = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    jobTitle: '',
    country: '',
    phoneCode: '+91',
    phoneNumber: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/functions/v1/submit-demo-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        const error = await response.json();
        console.error('Submission error:', error);
        alert('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('There was a network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <SEO 
        title="AI Chatbots for Retail - Transform Customer Experience & Sales"
        description="AI-powered chatbots for retail businesses. Increase sales, reduce support costs, and enhance customer experience with intelligent automation."
        keywords="retail chatbot, ecommerce AI, customer service automation, retail customer experience"
        canonicalUrl="/industries/retail"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-8">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Retail & Ecommerce
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
                <span className="text-grey-900">Transform</span>
                <br />
                <span className="text-brand-green-500">Retail</span>
                <br />
                <span className="text-grey-900">Experience</span>
              </h1>
              
              <p className="text-xl text-grey-700 mb-8 leading-relaxed">
                Drive sales, reduce support costs, and deliver exceptional customer experiences with AI-powered chatbots designed specifically for retail businesses.
              </p>
              
              <div className="mb-8">
                <a href="#demo-form" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg scroll-smooth">
                  Get a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-grey-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">45%</div>
                  <div className="text-sm text-grey-700">Sales Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">60%</div>
                  <div className="text-sm text-grey-700">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">24/7</div>
                  <div className="text-sm text-grey-700">Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center" 
                alt="Retail Customer Service" 
                className="w-full rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Retail AI Solutions
            </h2>
            <p className="text-xl text-grey-700 max-w-3xl mx-auto">
              Comprehensive AI automation for every aspect of your retail business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <MessageSquare className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Customer Support</h3>
              <p className="text-grey-700 leading-relaxed">
                Provide instant answers to product queries, order status, returns, and general support 24/7.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Sales Assistant</h3>
              <p className="text-grey-700 leading-relaxed">
                Guide customers through product selection, upsell complementary items, and close sales.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Package className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Order Management</h3>
              <p className="text-grey-700 leading-relaxed">
                Handle order tracking, modifications, cancellations, and delivery updates automatically.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Star className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Product Recommendations</h3>
              <p className="text-grey-700 leading-relaxed">
                Provide personalized product suggestions based on customer preferences and browsing history.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Heart className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Customer Loyalty</h3>
              <p className="text-grey-700 leading-relaxed">
                Manage loyalty programs, rewards, and create personalized shopping experiences.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Analytics & Insights</h3>
              <p className="text-grey-700 leading-relaxed">
                Track customer behavior, sales patterns, and optimize your retail strategy with AI insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Demo Form Section */}
      <section id="demo-form" className="py-24 bg-grey-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Win the Retail Game with Haptik
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name*"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company name*"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email*"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Job title*"
                  required
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <select
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-transparent outline-none transition-all duration-200 bg-white"
                >
                  <option value="">Select Country*</option>
                  <option value="india">India</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex gap-2">
                <select
                  name="phoneCode"
                  required
                  value={formData.phoneCode}
                  onChange={handleInputChange}
                  className="px-3 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-transparent outline-none transition-all duration-200 bg-white"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                </select>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number*"
                  required
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-12 py-4 bg-brand-green-500 hover:bg-brand-green-600 disabled:bg-grey-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Book a Demo'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-green-500 to-brand-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Retail Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of retailers using AI to increase sales and improve customer satisfaction
          </p>
          <div className="flex justify-center">
            <a href="#demo-form" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg scroll-smooth">
              Get a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Retail;
