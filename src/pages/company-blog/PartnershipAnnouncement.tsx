import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';

const PartnershipAnnouncement = () => {
  return (
    <>
      <SEO 
        title="Partnership Announcement: Integrating with Leading CRM Platforms"
        description="We're partnering with major CRM providers to bring seamless AI agent integration to millions of businesses worldwide."
        keywords="CRM integration, partnerships, Salesforce, HubSpot, AI agents"
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
                Partnerships
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-grey-900 mb-6">
              Partnership Announcement: Integrating with Leading CRM Platforms
            </h1>
            
            <div className="flex items-center mb-8 text-grey-600">
              <div className="flex items-center mr-6">
                <User className="h-5 w-5 mr-2" />
                <span className="font-medium">Alex Thompson</span>
                <span className="ml-2 text-sm">VP of Partnerships</span>
              </div>
              <div className="flex items-center mr-6">
                <Calendar className="h-5 w-5 mr-2" />
                <span>November 15, 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>3 min read</span>
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
              src="/lovable-uploads/9ddce30e-8318-49f1-9d10-de0dcae149c3.png" 
              alt="CRM Partnership Integration"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-grey-600 mb-8">
                We're thrilled to announce strategic partnerships with leading CRM platforms including Salesforce, HubSpot, and Pipedrive. These integrations will bring AI agent capabilities directly into the tools millions of businesses already use daily.
              </p>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Seamless Integration, Powerful Results</h2>
              <p className="text-grey-700 mb-6">
                These partnerships represent a significant milestone in our mission to democratize AI agent technology. By integrating directly with popular CRM platforms, we're removing barriers and making it easier than ever for businesses to enhance their customer interactions with AI.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-brand-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-grey-900 mb-3">Salesforce Integration</h3>
                  <p className="text-grey-700 mb-3">
                    Our AI agents now integrate seamlessly with Salesforce Service Cloud, automatically creating cases, updating contact records, and routing complex inquiries to the right team members.
                  </p>
                  <ul className="text-grey-700 text-sm space-y-1">
                    <li>• Automatic lead qualification and scoring</li>
                    <li>• Real-time case creation and updates</li>
                    <li>• Intelligent routing based on agent expertise</li>
                    <li>• Comprehensive conversation analytics</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-grey-900 mb-3">HubSpot Integration</h3>
                  <p className="text-grey-700 mb-3">
                    HubSpot users can now deploy AI agents that automatically sync with their contact database, track conversation outcomes, and trigger follow-up workflows.
                  </p>
                  <ul className="text-grey-700 text-sm space-y-1">
                    <li>• Automated contact enrichment</li>
                    <li>• Workflow triggers based on conversation outcomes</li>
                    <li>• Deal stage updates from AI interactions</li>
                    <li>• Integrated reporting and analytics</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-grey-900 mb-3">Pipedrive Integration</h3>
                  <p className="text-grey-700 mb-3">
                    Pipedrive customers can leverage AI agents for lead qualification, appointment scheduling, and follow-up communications, all while maintaining complete visibility in their pipeline.
                  </p>
                  <ul className="text-grey-700 text-sm space-y-1">
                    <li>• Lead scoring and qualification</li>
                    <li>• Automated appointment scheduling</li>
                    <li>• Pipeline stage progression tracking</li>
                    <li>• Activity logging and notes</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">The Benefits of Native Integration</h2>
              <p className="text-grey-700 mb-6">
                These partnerships go beyond simple API connections. We've built native integrations that feel like natural extensions of each platform:
              </p>
              
              <ul className="list-disc list-inside text-grey-700 mb-6 space-y-2">
                <li><strong>Single Sign-On:</strong> Users can access AI agent features without additional logins</li>
                <li><strong>Unified Data:</strong> All conversation data flows seamlessly into existing CRM records</li>
                <li><strong>Consistent UI:</strong> AI agent controls feel native to each platform's design</li>
                <li><strong>Automated Workflows:</strong> AI interactions trigger existing business processes</li>
                <li><strong>Comprehensive Reporting:</strong> AI metrics integrate with existing analytics dashboards</li>
              </ul>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Customer Success Stories</h2>
              <p className="text-grey-700 mb-6">
                Early adopters are already seeing impressive results:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-brand-green-500 pl-6">
                  <h3 className="font-semibold text-grey-900 mb-2">TechCorp Solutions</h3>
                  <p className="text-grey-700">
                    "The Salesforce integration has been a game-changer. Our AI agents handle 70% of initial inquiries and automatically create cases with all the context our team needs. Response times have improved by 60%."
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-semibold text-grey-900 mb-2">GrowthMarketing Inc.</h3>
                  <p className="text-grey-700">
                    "Having AI agents integrated directly into HubSpot means our sales team always has the full conversation history. Lead qualification happens automatically, and our conversion rates have increased by 35%."
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="font-semibold text-grey-900 mb-2">StartupSuccess Ltd.</h3>
                  <p className="text-grey-700">
                    "The Pipedrive integration is perfect for our lean team. AI agents handle appointment scheduling and follow-ups, allowing us to focus on closing deals. Our pipeline visibility has never been better."
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Getting Started</h2>
              <p className="text-grey-700 mb-6">
                Rolling out these integrations is simple:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-brand-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h3 className="font-semibold text-grey-900 mb-1">Install the Integration</h3>
                    <p className="text-grey-700">Find EverGrowDigital in your CRM's app marketplace and install with one click</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h3 className="font-semibold text-grey-900 mb-1">Configure Your AI Agent</h3>
                    <p className="text-grey-700">Set up your AI agent's personality, knowledge base, and workflow rules</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h3 className="font-semibold text-grey-900 mb-1">Go Live</h3>
                    <p className="text-grey-700">Deploy your AI agent and watch it seamlessly integrate with your existing workflows</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">What's Next</h2>
              <p className="text-grey-700 mb-6">
                This is just the beginning. We're working on integrations with Microsoft Dynamics, Zendesk, Intercom, and many other platforms. Our goal is to meet businesses where they are, not force them to change their existing processes.
              </p>

              <p className="text-grey-700 mb-6">
                We're also developing advanced features like cross-platform conversation threading, unified analytics dashboards, and AI-powered insights that span multiple business tools.
              </p>

              <div className="bg-grey-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-grey-900 mb-3">Ready to Transform Your CRM?</h3>
                <p className="text-grey-700 mb-4">
                  Experience the power of AI agents integrated directly into your existing CRM workflow. Setup takes less than 10 minutes.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
                >
                  Start Free Trial
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

export default PartnershipAnnouncement;