
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, Calendar, User, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Resources = () => {
  const blogPosts = [
    {
      title: "Generative AI Ecommerce Marketing Applications",
      excerpt: "Discover how generative AI is transforming ecommerce marketing with personalized product recommendations, dynamic content creation, and automated customer engagement.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "AI & Ecommerce",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      slug: "generative-ai-ecommerce-marketing-applications"
    },
    {
      title: "AI Agents Use Cases in Banking",
      excerpt: "Explore practical applications of AI agents in banking for customer service, fraud detection, loan processing, and personalized financial advice.",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Fintech",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      slug: "ai-agents-use-cases-in-banking"
    },
    {
      title: "AI Voice Agents for Customer Experience",
      excerpt: "Learn how AI voice agents are revolutionizing customer experience with natural language processing, sentiment analysis, and 24/7 availability.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Voice AI",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      slug: "ai-voice-agents-for-customer-experience"
    },
    {
      title: "AI Agents vs Traditional Chatbots",
      excerpt: "Understanding the key differences between AI agents and traditional chatbots, and why businesses are making the switch to intelligent automation.",
      date: "2024-01-03",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      slug: "ai-agents-vs-traditional-chatbots"
    }
  ];

  const caseStudies = [
    {
      title: "Tira Beauty: 300% Increase in Conversion Rate",
      excerpt: "How Tira Beauty transformed their customer experience with AI-powered chatbots, resulting in 300% higher conversion rates and 65% reduction in support tickets.",
      industry: "Beauty & Retail",
      results: [
        "300% increase in conversion rate",
        "65% reduction in support tickets",
        "40% improvement in customer satisfaction"
      ],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      slug: "tira-beauty-case-study"
    },
    {
      title: "Fashion Retailer: AI-Driven Customer Journey",
      excerpt: "A leading fashion retailer implemented our AI agents to personalize the shopping experience, leading to significant improvements in sales and customer retention.",
      industry: "Fashion & Retail",
      results: [
        "250% increase in sales",
        "80% improvement in customer retention",
        "50% reduction in cart abandonment"
      ],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
      slug: "fashion-retailer-case-study"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Resources - AI Chatbot Insights, Case Studies & Guides"
        description="Explore our comprehensive resources on AI chatbots, automation strategies, industry insights, and customer success stories."
        keywords="AI chatbot resources, automation guides, case studies, customer success stories, AI insights"
        canonicalUrl="/resources"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8 text-grey-900">
            Resources & <span className="text-brand-green-500">Insights</span>
          </h1>
          <p className="text-xl text-grey-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Discover the latest insights on AI automation, industry trends, and customer success stories to help you transform your business.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
                Latest <span className="text-brand-green-500">Blog Posts</span>
              </h2>
              <p className="text-xl text-grey-600">
                Stay updated with the latest AI automation trends and insights
              </p>
            </div>
            <BookOpen className="h-16 w-16 text-brand-green-500 opacity-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-brand-green-500/10 text-brand-green-600 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-grey-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-grey-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-grey-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center mt-4 text-brand-green-500 hover:text-brand-green-600 font-semibold"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
                Success <span className="text-brand-green-500">Stories</span>
              </h2>
              <p className="text-xl text-grey-600">
                Real results from businesses that transformed with AI automation
              </p>
            </div>
            <FileText className="h-16 w-16 text-brand-green-500 opacity-20" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-600 text-sm font-medium rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-grey-900 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-grey-600 mb-6">
                    {study.excerpt}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-grey-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-grey-600">
                          <div className="w-2 h-2 bg-brand-green-500 rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-brand-green-500 hover:text-brand-green-600 font-semibold"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-green-500 to-brand-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join hundreds of businesses that have transformed their customer experience with AI automation
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
            Start Your AI Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
