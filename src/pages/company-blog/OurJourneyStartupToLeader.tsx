import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';

const OurJourneyStartupToLeader = () => {
  return (
    <>
      <SEO 
        title="Our Journey: From Startup to AI Innovation Leader"
        description="The story behind EverGrowDigital's mission to democratize AI and make intelligent automation accessible to businesses of all sizes."
        keywords="EverGrowDigital, startup journey, AI innovation, company story"
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-br from-brand-green-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/company-blog" 
              className="inline-flex items-center text-brand-green-600 hover:text-brand-green-700 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Company Blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-brand-green-100 text-brand-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Company News
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-grey-900 mb-6">
              Our Journey: From Startup to AI Innovation Leader
            </h1>
            
            <div className="flex items-center mb-8 text-grey-600">
              <div className="flex items-center mr-6">
                <User className="h-5 w-5 mr-2" />
                <span className="font-medium">Michael Chen</span>
                <span className="ml-2 text-sm">Co-Founder & CTO</span>
              </div>
              <div className="flex items-center mr-6">
                <Calendar className="h-5 w-5 mr-2" />
                <span>January 8, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>6 min read</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-grey-600 font-medium">Share:</span>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-grey-100 hover:bg-grey-200 transition-colors">
                  <Twitter className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-full bg-grey-100 hover:bg-grey-200 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-full bg-grey-100 hover:bg-grey-200 transition-colors">
                  <Facebook className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
              src="/lovable-uploads/665274b0-11f1-46f6-9c20-29a4bc35a12b.png" 
              alt="Our Journey: From Startup to AI Innovation Leader"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-grey-600 mb-8">
                Three years ago, EverGrowDigital began as a simple idea: what if every business, regardless of size, could harness the power of AI to transform their customer interactions? Today, we're proud to share the story of how that vision became reality.
              </p>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">The Spark of Innovation</h2>
              <p className="text-grey-700 mb-6">
                It all started in a small co-working space in San Francisco. Sarah Johnson, our CEO, and I were working on different projects when we noticed a common thread: businesses were struggling to scale their customer service operations while maintaining quality and personalization.
              </p>
              
              <p className="text-grey-700 mb-6">
                Traditional chatbots were rigid and frustrating. Human-only support was expensive and limited. We saw an opportunity to bridge this gap with truly intelligent AI agents that could understand context, learn from interactions, and provide genuine value to both businesses and their customers.
              </p>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">The Early Days</h2>
              <p className="text-grey-700 mb-6">
                Our first prototype was built in Sarah's garage over countless late nights and weekends. We started with a simple goal: create an AI agent that could handle basic customer inquiries with the same care and attention a human would provide.
              </p>
              
              <div className="bg-brand-green-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold text-grey-900 mb-3">Our First Customer</h3>
                <p className="text-grey-700">
                  "I remember our first customer – a small e-commerce store selling handmade jewelry. The owner was overwhelmed with customer inquiries and couldn't afford to hire full-time support staff. Our AI agent helped her handle 80% of routine questions, allowing her to focus on growing her business. That's when we knew we were onto something special."
                </p>
              </div>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Building the Team</h2>
              <p className="text-grey-700 mb-6">
                Success with our early customers gave us the confidence to seek funding and expand our team. We were incredibly selective, looking for people who shared our vision of democratizing AI technology. Each team member brought unique expertise:
              </p>
              
              <ul className="list-disc list-inside text-grey-700 mb-6 space-y-2">
                <li>Dr. Emily Rodriguez joined us as Head of AI Ethics, ensuring our technology is responsible and beneficial</li>
                <li>Jennifer Park became our Head of People, building a culture of innovation and inclusion</li>
                <li>Alex Thompson leads our partnerships, connecting us with platforms and businesses worldwide</li>
              </ul>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Scaling the Vision</h2>
              <p className="text-grey-700 mb-6">
                As we grew, so did our ambitions. We realized that AI agents weren't just about customer service – they were about fundamentally changing how businesses operate. We expanded our platform to support:
              </p>
              
              <ul className="list-disc list-inside text-grey-700 mb-6 space-y-2">
                <li>Sales automation and lead qualification</li>
                <li>Booking and appointment scheduling</li>
                <li>Multi-channel support across web, mobile, and social platforms</li>
                <li>Advanced analytics and insights</li>
              </ul>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">The Numbers Tell the Story</h2>
              <p className="text-grey-700 mb-6">
                Today, EverGrowDigital powers AI agents for over 5,000 businesses across 15+ industries. Our agents handle millions of conversations monthly, maintaining a 95% customer satisfaction rate while reducing operational costs by an average of 60%.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-brand-green-600 mb-2">5,000+</div>
                  <div className="text-grey-700">Active Businesses</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-brand-green-600 mb-2">10M+</div>
                  <div className="text-grey-700">Monthly Conversations</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-brand-green-600 mb-2">95%</div>
                  <div className="text-grey-700">Satisfaction Rate</div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Looking Forward</h2>
              <p className="text-grey-700 mb-6">
                We're just getting started. The future of business is conversational, and AI agents will be at the heart of every customer interaction. Our mission remains the same: make intelligent automation accessible to every business, empowering them to provide exceptional customer experiences at scale.
              </p>

              <p className="text-grey-700 mb-6">
                Thank you to our customers, partners, and team members who have been part of this incredible journey. The best is yet to come.
              </p>

              <div className="bg-grey-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-grey-900 mb-3">Want to Be Part of Our Story?</h3>
                <p className="text-grey-700 mb-4">
                  Join thousands of businesses already transforming their customer experience with AI agents.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
                >
                  Start Your Journey
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default OurJourneyStartupToLeader;