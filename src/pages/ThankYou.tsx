import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, MessageSquare, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Thank You - Demo Request Submitted"
        description="Thank you for your interest in our AI solutions. Our team will contact you shortly to schedule your personalized demo."
        canonicalUrl="/thank-you"
      />
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-brand-green-500/10 rounded-full mb-8">
            <CheckCircle className="w-12 h-12 text-brand-green-500" />
          </div>
          
          {/* Main Message */}
          <h1 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
            Thank You for Your Interest!
          </h1>
          
          <p className="text-xl text-grey-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            We've received your demo request and our team will contact you within 24 hours to schedule your personalized AI solution demo.
          </p>
          
          {/* What's Next Section */}
          <div className="bg-grey-50 rounded-2xl p-8 mb-12 text-left max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-grey-900 mb-6 text-center">What's Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-green-500/10 rounded-full mb-4">
                  <Phone className="w-6 h-6 text-brand-green-500" />
                </div>
                <h3 className="font-semibold text-grey-900 mb-2">1. We'll Call You</h3>
                <p className="text-grey-700 text-sm">Our sales team will reach out within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-green-500/10 rounded-full mb-4">
                  <MessageSquare className="w-6 h-6 text-brand-green-500" />
                </div>
                <h3 className="font-semibold text-grey-900 mb-2">2. Schedule Demo</h3>
                <p className="text-grey-700 text-sm">We'll find a time that works for you</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-green-500/10 rounded-full mb-4">
                  <CheckCircle className="w-6 h-6 text-brand-green-500" />
                </div>
                <h3 className="font-semibold text-grey-900 mb-2">3. See Results</h3>
                <p className="text-grey-700 text-sm">Discover how AI can transform your business</p>
              </div>
            </div>
          </div>
          
          
          {/* Return to Homepage */}
          <div className="flex justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-8 py-4 bg-grey-100 hover:bg-grey-200 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200"
            >
              Return to Homepage
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ThankYou;