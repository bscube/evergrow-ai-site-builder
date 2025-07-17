import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Calendar, Clock, ArrowRight, User, Tag, ChevronDown, ChevronUp, X } from 'lucide-react';

const CompanyBlog = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      title: "The Future of Customer Experience: How AI Agents Are Reshaping Business",
      excerpt: "Explore how AI agents are transforming customer interactions across industries and what this means for the future of business.",
      content: `
        ## Revolutionizing Customer Interactions

        Artificial Intelligence agents are fundamentally changing how businesses interact with their customers. Unlike traditional chatbots, AI agents can understand context, handle complex queries, and provide personalized solutions that rival human customer service representatives.

        ## Key Transformations Across Industries

        **Retail & E-commerce**
        - Personalized shopping experiences
        - Real-time inventory management
        - Predictive customer support

        **Financial Services**
        - Automated loan processing
        - Fraud detection and prevention
        - 24/7 financial advisory services

        **Healthcare**
        - Patient triage and scheduling
        - Medication reminders
        - Symptom assessment and guidance

        ## The Future Landscape

        As AI agents become more sophisticated, we're moving toward a world where customer service is:
        - Available 24/7 without compromise
        - Highly personalized to individual needs
        - Proactive rather than reactive
        - Seamlessly integrated across all touchpoints

        The businesses that embrace this transformation today will lead their industries tomorrow.
      `,
      author: "Sarah Johnson",
      role: "CEO & Founder",
      publishDate: "January 15, 2024",
      readTime: "8 min read",
      category: "Industry Insights",
      image: "/lovable-uploads/4da42fa1-bfea-4100-a308-3fd54824a62d.png",
      slug: "#",
      featured: true
    },
    {
      title: "Our Journey: From Startup to AI Innovation Leader",
      excerpt: "The story behind EverGrowDigital's mission to democratize AI and make intelligent automation accessible to businesses of all sizes.",
      content: `
        ## From Idea to Innovation

        Three years ago, EverGrowDigital started as a simple idea: make AI accessible to every business, regardless of size or technical expertise. Today, we're proud to be at the forefront of AI agent technology.

        ## The Early Days

        Our founders recognized a critical gap in the market. While large enterprises had access to sophisticated AI solutions, small and medium businesses were left behind. We set out to change that.

        ## Key Milestones

        **2021 - Foundation**
        - Company founded with $500K seed funding
        - First AI agent prototype developed

        **2022 - Growth**
        - Launched beta platform with 50 early customers
        - Achieved product-market fit

        **2023 - Scale**
        - Expanded to 1000+ active customers
        - Launched enterprise solutions

        **2024 - Innovation**
        - Series A funding of $15M
        - Advanced AI agent capabilities
        - Global expansion plans

        ## Looking Ahead

        Our mission remains unchanged: democratizing AI for all businesses. With our latest funding, we're accelerating development and expanding globally.
      `,
      author: "Michael Chen",
      role: "Co-Founder & CTO",
      publishDate: "January 8, 2024",
      readTime: "6 min read",
      category: "Company News",
      image: "/lovable-uploads/665274b0-11f1-46f6-9c20-29a4bc35a12b.png",
      slug: "#"
    },
    {
      title: "Announcing Our Series A: $15M to Scale AI Agent Technology",
      excerpt: "We're excited to announce our Series A funding round, led by top-tier VCs, to accelerate AI agent development and global expansion.",
      content: `
        ## A Major Milestone

        Today marks a significant milestone in EverGrowDigital's journey. We've successfully closed our Series A funding round, raising $15 million to accelerate our AI agent technology development and fuel global expansion.

        ## Investment Details

        The round was led by **TechVentures Capital**, with participation from existing investors including **Innovation Partners** and **StartupFund**. This brings our total funding to $18 million since inception.

        ## What This Means

        **Technology Development**
        - Advanced natural language processing capabilities
        - Multi-modal AI agent interactions
        - Enhanced security and compliance features

        **Market Expansion**
        - Launch in European markets Q2 2024
        - APAC expansion planned for Q4 2024
        - Strategic partnerships with regional integrators

        **Team Growth**
        - Doubling our engineering team
        - Expanding sales and marketing
        - New research and development center

        ## Looking Forward

        This funding validates our vision of making AI agents accessible to businesses worldwide. We're more committed than ever to delivering innovative solutions that drive real business value.

        Thank you to our investors, customers, and team for making this possible.
      `,
      author: "Sarah Johnson",
      role: "CEO & Founder",
      publishDate: "December 20, 2023",
      readTime: "4 min read",
      category: "Company News",
      image: "/lovable-uploads/6b11361d-e93e-47a7-8d6d-0165caa79795.png",
      slug: "#"
    },
    {
      title: "Building Ethical AI: Our Commitment to Responsible Innovation",
      excerpt: "Learn about our principles and practices for developing AI agents that are ethical, transparent, and beneficial for all stakeholders.",
      content: `
        ## Our Ethical Foundation

        At EverGrowDigital, we believe that with great technological power comes great responsibility. As we develop AI agents that interact with millions of users daily, we've established comprehensive ethical guidelines to ensure our technology benefits everyone.

        ## Core Principles

        **Transparency**
        - Clear communication about AI capabilities and limitations
        - Open about data usage and privacy practices
        - Regular audits and public reporting

        **Fairness & Bias Mitigation**
        - Diverse training datasets representing all demographics
        - Regular bias testing and correction
        - Inclusive design processes

        **Privacy Protection**
        - Minimal data collection principles
        - Strong encryption and security measures
        - User control over personal information

        ## Implementation

        Our ethics board reviews every AI model before deployment. We conduct monthly bias audits and maintain strict data governance policies. 

        **Key Initiatives:**
        - AI Ethics Review Board
        - Quarterly bias audits
        - Open-source bias detection tools
        - Community feedback programs

        ## Moving Forward

        We're committed to leading by example in ethical AI development. Our goal is to create technology that enhances human capabilities while respecting human values and rights.

        Join us in building a more ethical AI future.
      `,
      author: "Dr. Emily Rodriguez",
      role: "Head of AI Ethics",
      publishDate: "December 12, 2023",
      readTime: "7 min read",
      category: "AI Ethics",
      image: "/lovable-uploads/760e5965-c5c5-4c2c-812d-42b5436a8245.png",
      slug: "#"
    },
    {
      title: "Team Spotlight: Meet Our AI Research Division",
      excerpt: "Get to know the brilliant minds behind our AI innovations and learn about their groundbreaking research in conversational AI.",
      content: `
        ## Meet the Innovators

        Behind every great AI breakthrough is a team of passionate researchers, engineers, and scientists. Today, we're excited to introduce you to our AI Research Division - the brilliant minds driving innovation at EverGrowDigital.

        ## Our Research Team

        **Dr. James Liu - Chief Research Scientist**
        - PhD in Machine Learning from Stanford
        - Former Google DeepMind researcher
        - Specializes in natural language understanding

        **Maria Santos - Senior AI Engineer** 
        - MS in Computer Science from MIT
        - Expert in neural network architectures
        - Leads our conversational AI development

        **Dr. Ahmed Hassan - Research Director**
        - PhD in Computational Linguistics
        - Pioneer in multilingual AI systems
        - Published 50+ research papers

        ## Current Research Areas

        **Advanced Language Models**
        - Next-generation transformer architectures
        - Few-shot learning capabilities
        - Reduced computational requirements

        **Multimodal AI Systems**
        - Voice and text integration
        - Visual understanding capabilities
        - Real-time processing optimization

        **Ethical AI Development**
        - Bias detection and mitigation
        - Privacy-preserving techniques
        - Explainable AI methods

        ## Recent Achievements

        Our team has published 15 research papers this year and holds 8 patents in conversational AI. We're proud to contribute to the broader AI research community while building practical solutions for businesses.

        ## Join Our Mission

        We're always looking for talented researchers to join our team. If you're passionate about pushing the boundaries of AI, we'd love to hear from you.
      `,
      author: "Jennifer Park",
      role: "Head of People",
      publishDate: "November 28, 2023",
      readTime: "5 min read",
      category: "Team & Culture",
      image: "/lovable-uploads/8f80e73a-3604-4714-ad8c-85d9c8425fc4.png",
      slug: "#"
    },
    {
      title: "Partnership Announcement: Integrating with Leading CRM Platforms",
      excerpt: "We're partnering with major CRM providers to bring seamless AI agent integration to millions of businesses worldwide.",
      content: `
        ## Strategic Partnerships for Global Impact

        We're thrilled to announce groundbreaking partnerships with leading CRM platforms that will bring EverGrowDigital's AI agent technology to millions of businesses worldwide.

        ## Partnership Overview

        **Salesforce Integration**
        - Native AI agent integration in Salesforce CRM
        - Automated lead qualification and follow-up
        - Seamless data synchronization

        **HubSpot Collaboration**
        - Advanced conversational marketing tools
        - AI-powered customer journey mapping
        - Integrated analytics and reporting

        **Microsoft Dynamics Partnership**
        - Enterprise-grade AI agent deployment
        - Advanced security and compliance features
        - Multi-language support capabilities

        ## What This Means for Businesses

        **Immediate Benefits:**
        - One-click AI agent deployment
        - No technical integration required
        - Access to pre-built industry templates

        **Long-term Advantages:**
        - Unified customer data management
        - Advanced AI-driven insights
        - Scalable automation solutions

        ## Implementation Timeline

        **Q1 2024:** Salesforce integration goes live
        **Q2 2024:** HubSpot partnership launches
        **Q3 2024:** Microsoft Dynamics integration

        ## Getting Started

        Existing customers of these CRM platforms can expect seamless access to our AI agents through their familiar interfaces. New users can take advantage of special partnership pricing and extended trial periods.

        ## The Future of CRM

        These partnerships represent a significant step toward making AI agents as common as email in business operations. We're creating an ecosystem where intelligent automation enhances every customer interaction.

        Contact our partnership team to learn more about integration opportunities.
      `,
      author: "Alex Thompson",
      role: "VP of Partnerships",
      publishDate: "November 15, 2023",
      readTime: "3 min read",
      category: "Partnerships",
      image: "/lovable-uploads/9ddce30e-8318-49f1-9d10-de0dcae149c3.png",
      slug: "#"
    }
  ];

  const categories = ["All", "Company News", "Industry Insights", "AI Ethics", "Team & Culture", "Partnerships"];

  return (
    <>
      <SEO 
        title="Company Blog - Latest News & Insights | EverGrowDigital"
        description="Stay updated with the latest news, insights, and updates from EverGrowDigital. Read about our journey, partnerships, and vision for AI."
        keywords="EverGrowDigital news, company blog, AI insights, startup updates"
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-green-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-grey-900 mb-6">
                Company
                <span className="text-brand-green-500"> Blog</span>
              </h1>
              <p className="text-xl text-grey-600 mb-8">
                Latest news, insights, and updates from the EverGrowDigital team. 
                Follow our journey as we shape the future of AI.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button 
                  key={category}
                  className="px-6 py-2 rounded-full border border-grey-200 text-grey-700 hover:border-brand-green-500 hover:text-brand-green-500 transition-colors duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg border ring-2 ring-brand-green-500 overflow-hidden">
              <div className="bg-brand-green-500 px-6 py-3">
                <span className="text-white font-medium">Featured Article</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-brand-green-100 text-brand-green-700 px-3 py-1 rounded-full text-sm font-medium mr-4">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center text-grey-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blogPosts[0].publishDate}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-grey-900 mb-4">{blogPosts[0].title}</h2>
                  <p className="text-grey-600 mb-6 text-lg">{blogPosts[0].excerpt}</p>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-grey-400 mr-2" />
                      <div>
                        <span className="font-medium text-grey-900">{blogPosts[0].author}</span>
                        <span className="text-grey-500 text-sm ml-2">{blogPosts[0].role}</span>
                      </div>
                    </div>
                    <div className="flex items-center ml-6 text-grey-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setExpandedPost(expandedPost === 0 ? null : 0)}
                    className="inline-flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
                  >
                    {expandedPost === 0 ? 'Show Less' : 'Read Full Article'}
                    {expandedPost === 0 ? <ChevronUp className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                  </button>
                </div>
                <div className="lg:p-8">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Expanded Content for Featured Post */}
            {expandedPost === 0 && (
              <div className="mt-8 bg-white rounded-2xl shadow-lg border p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-grey-900">Full Article</h3>
                  <button 
                    onClick={() => setExpandedPost(null)}
                    className="text-grey-400 hover:text-grey-600 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="prose prose-lg max-w-none text-grey-700">
                  {blogPosts[0].content.split('\n').map((paragraph, idx) => {
                    if (paragraph.trim().startsWith('##')) {
                      return <h2 key={idx} className="text-xl font-bold text-grey-900 mt-8 mb-4">{paragraph.replace('##', '').trim()}</h2>;
                    }
                    if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                      return <h3 key={idx} className="text-lg font-semibold text-grey-900 mt-6 mb-2">{paragraph.replace(/\*\*/g, '')}</h3>;
                    }
                    if (paragraph.trim().startsWith('-')) {
                      return <li key={idx} className="text-grey-700 mb-1">{paragraph.replace('-', '').trim()}</li>;
                    }
                    if (paragraph.trim()) {
                      return <p key={idx} className="text-grey-700 mb-4 leading-relaxed">{paragraph.trim()}</p>;
                    }
                    return null;
                  })}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {blogPosts.slice(1).map((post, index) => {
                const postIndex = index + 1;
                return (
                  <div key={index}>
                    <article className="bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 cursor-pointer"
                             onClick={() => setExpandedPost(expandedPost === postIndex ? null : postIndex)}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                        <div className="md:col-span-1">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover rounded-xl"
                          />
                        </div>
                        <div className="md:col-span-2 space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="bg-brand-green-100 text-brand-green-700 px-3 py-1 rounded-full text-sm font-medium">
                              {post.category}
                            </span>
                            <div className="flex items-center gap-4 text-sm text-grey-500">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {post.publishDate}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {post.readTime}
                              </div>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-grey-900">{post.title}</h3>
                          <p className="text-grey-600 text-lg">{post.excerpt}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <User className="h-5 w-5 text-grey-400 mr-2" />
                              <div>
                                <span className="font-medium text-grey-900">{post.author}</span>
                                <span className="text-grey-500 text-sm ml-2">{post.role}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-brand-green-600 font-medium">
                              {expandedPost === postIndex ? 'Show Less' : 'Read More'}
                              {expandedPost === postIndex ? 
                                <ChevronUp className="ml-1 h-5 w-5" /> : 
                                <ChevronDown className="ml-1 h-5 w-5" />
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    
                    {/* Expanded Content */}
                    {expandedPost === postIndex && post.content && (
                      <div className="bg-white rounded-2xl shadow-lg border p-8 ml-8">
                        <div className="flex justify-between items-start mb-6">
                          <h3 className="text-2xl font-bold text-grey-900">Full Article</h3>
                          <button 
                            onClick={(e) => {e.stopPropagation(); setExpandedPost(null);}}
                            className="text-grey-400 hover:text-grey-600 transition-colors"
                          >
                            <X className="h-6 w-6" />
                          </button>
                        </div>
                        <div className="prose prose-lg max-w-none text-grey-700">
                          {post.content.split('\n').map((paragraph, idx) => {
                            if (paragraph.trim().startsWith('##')) {
                              return <h2 key={idx} className="text-xl font-bold text-grey-900 mt-8 mb-4">{paragraph.replace('##', '').trim()}</h2>;
                            }
                            if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                              return <h3 key={idx} className="text-lg font-semibold text-grey-900 mt-6 mb-2">{paragraph.replace(/\*\*/g, '')}</h3>;
                            }
                            if (paragraph.trim().startsWith('-')) {
                              return <li key={idx} className="text-grey-700 mb-1">{paragraph.replace('-', '').trim()}</li>;
                            }
                            if (paragraph.trim()) {
                              return <p key={idx} className="text-grey-700 mb-4 leading-relaxed">{paragraph.trim()}</p>;
                            }
                            return null;
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-brand-green-500 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter and never miss important company updates, product announcements, and industry insights.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-brand-green-500 hover:bg-grey-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Subscribe to Newsletter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CompanyBlog;