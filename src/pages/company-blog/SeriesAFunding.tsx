import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';

const SeriesAFunding = () => {
  return (
    <>
      <SEO 
        title="Announcing Our Series A: $15M to Scale AI Agent Technology"
        description="We're excited to announce our Series A funding round, led by top-tier VCs, to accelerate AI agent development and global expansion."
        keywords="Series A funding, AI agents, investment, venture capital, EverGrowDigital"
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
              Announcing Our Series A: $15M to Scale AI Agent Technology
            </h1>
            
            <div className="flex items-center mb-8 text-grey-600">
              <div className="flex items-center mr-6">
                <User className="h-5 w-5 mr-2" />
                <span className="font-medium">Sarah Johnson</span>
                <span className="ml-2 text-sm">CEO & Founder</span>
              </div>
              <div className="flex items-center mr-6">
                <Calendar className="h-5 w-5 mr-2" />
                <span>December 20, 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>4 min read</span>
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
              src="/lovable-uploads/6b11361d-e93e-47a7-8d6d-0165caa79795.png" 
              alt="Series A Funding Announcement"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-grey-600 mb-8">
                Today marks a pivotal moment in EverGrowDigital's journey. We're thrilled to announce the successful completion of our Series A funding round, raising $15 million to accelerate our mission of democratizing AI agent technology for businesses worldwide.
              </p>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Leading the Round</h2>
              <p className="text-grey-700 mb-6">
                The round was led by Sequoia Capital, with participation from Andreessen Horowitz, GV (Google Ventures), and several prominent angel investors including former executives from Salesforce, Microsoft, and OpenAI. This investment validates our vision and provides the resources needed to scale our platform globally.
              </p>
              
              <div className="bg-brand-green-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold text-grey-900 mb-3">What Our Investors Are Saying</h3>
                <p className="text-grey-700 mb-4">
                  "EverGrowDigital has built something truly special. Their AI agents don't just automate conversations – they enhance them. The team's focus on making this technology accessible to businesses of all sizes positions them perfectly for the next wave of AI adoption."
                </p>
                <p className="text-sm text-grey-600">- Partner at Sequoia Capital</p>
              </div>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">The Numbers Behind Our Growth</h2>
              <p className="text-grey-700 mb-6">
                Since our seed round 18 months ago, we've seen exponential growth across all key metrics:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-2xl font-bold text-brand-green-600 mb-2">400% Growth</div>
                  <div className="text-grey-700">in Monthly Recurring Revenue</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="text-2xl font-bold text-brand-green-600 mb-2">5,000+</div>
                  <div className="text-grey-700">Active Business Customers</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="text-2xl font-bold text-brand-green-600 mb-2">10M+</div>
                  <div className="text-grey-700">Monthly Conversations</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <div className="text-2xl font-bold text-brand-green-600 mb-2">95%</div>
                  <div className="text-grey-700">Customer Satisfaction Rate</div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">How We'll Use the Funding</h2>
              <p className="text-grey-700 mb-6">
                This $15M investment will fuel our growth across several key areas:
              </p>
              
              <ul className="list-disc list-inside text-grey-700 mb-6 space-y-2">
                <li><strong>Product Development:</strong> Expanding our AI capabilities with advanced natural language processing and multimodal interactions</li>
                <li><strong>Global Expansion:</strong> Opening offices in London, Toronto, and Singapore to serve our growing international customer base</li>
                <li><strong>Team Growth:</strong> Hiring 50+ engineers, product managers, and customer success specialists</li>
                <li><strong>Strategic Partnerships:</strong> Integrating with major CRM, e-commerce, and communication platforms</li>
                <li><strong>Enterprise Solutions:</strong> Building advanced features for large enterprise customers</li>
              </ul>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">The Road Ahead</h2>
              <p className="text-grey-700 mb-6">
                We're entering an exciting phase where AI agents are becoming essential business infrastructure. Our goal is to be the platform that powers this transformation, making it easy for any business to deploy intelligent, conversational AI.
              </p>

              <p className="text-grey-700 mb-6">
                Over the next 12 months, you can expect to see:
              </p>
              
              <ul className="list-disc list-inside text-grey-700 mb-6 space-y-2">
                <li>Advanced voice and video AI agent capabilities</li>
                <li>Industry-specific AI agent templates and solutions</li>
                <li>Enhanced analytics and business intelligence features</li>
                <li>Seamless integrations with 100+ business tools</li>
                <li>Support for 20+ languages and regional dialects</li>
              </ul>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Thank You</h2>
              <p className="text-grey-700 mb-6">
                This milestone wouldn't have been possible without our incredible team, supportive customers, and now, our world-class investors. Every conversation our AI agents have, every problem they solve, and every business they help grow brings us closer to our vision of a world where intelligent automation empowers everyone.
              </p>

              <p className="text-grey-700 mb-6">
                We're just getting started. The future of business is conversational, and we're excited to build it together.
              </p>

              <div className="bg-grey-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-grey-900 mb-3">Join Our Growth Story</h3>
                <p className="text-grey-700 mb-4">
                  Ready to see how AI agents can transform your business? Join thousands of companies already growing with EverGrowDigital.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
                >
                  Get Started Today
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

export default SeriesAFunding;