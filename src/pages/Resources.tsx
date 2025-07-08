
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, Calendar, User, Clock, Download, Video, HelpCircle, BarChart3, Lightbulb, Users, Target, Play, CheckCircle } from 'lucide-react';
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

  const webinars = [
    {
      title: "The Future of AI Customer Support",
      date: "January 25, 2024",
      time: "2:00 PM EST",
      type: "Live Webinar",
      description: "Join our experts as they discuss the latest trends in AI-powered customer support and what the future holds.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      status: "upcoming"
    },
    {
      title: "AI Implementation Best Practices",
      date: "January 15, 2024",
      duration: "45 minutes",
      type: "On-Demand",
      description: "Learn the essential steps for successfully implementing AI agents in your customer service workflow.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      status: "recorded"
    },
    {
      title: "ROI of AI Automation Demo",
      date: "January 10, 2024",
      duration: "30 minutes",
      type: "Product Demo",
      description: "See how businesses are achieving measurable ROI with AI automation solutions.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
      status: "recorded"
    }
  ];

  const guides = [
    {
      title: "Complete Guide to AI Customer Service",
      description: "Everything you need to know about implementing AI in customer service, from planning to execution.",
      pages: "45 pages",
      format: "PDF",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop"
    },
    {
      title: "AI ROI Calculator & Methodology",
      description: "Calculate the potential return on investment for AI implementation in your business.",
      pages: "12 pages",
      format: "PDF + Excel",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      title: "Industry-Specific AI Use Cases",
      description: "Detailed use cases and implementation strategies for different industries.",
      pages: "60 pages",
      format: "PDF",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    }
  ];

  const comparisons = [
    {
      title: "AI Agents vs Traditional Chatbots",
      description: "Comprehensive comparison of modern AI agents versus traditional rule-based chatbots.",
      link: "/comparisons/ai-agents-vs-chatbots"
    },
    {
      title: "EverGrow vs Competitors",
      description: "See how our AI solutions stack up against other market leaders.",
      link: "/comparisons/evergrow-vs-competitors"
    },
    {
      title: "Build vs Buy Analysis",
      description: "Should you build your own AI solution or use a ready-made platform?",
      link: "/comparisons/build-vs-buy"
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
            Resources & <span className="text-brand-green-500">Knowledge Hub</span>
          </h1>
          <p className="text-xl text-grey-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Everything you need to succeed with AI automation - from case studies and guides to webinars and expert insights.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
                Success <span className="text-brand-green-500">Stories</span>
              </h2>
              <p className="text-xl text-grey-700">
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
                  <p className="text-grey-700 mb-6">
                    {study.excerpt}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-grey-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-grey-700">
                          <CheckCircle className="w-4 h-4 text-brand-green-500 mr-3" />
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

      {/* Blog Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
                Latest <span className="text-brand-green-500">Insights</span>
              </h2>
              <p className="text-xl text-grey-700">
                Stay updated with the latest AI automation trends and expert analysis
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
                  <p className="text-grey-700 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-grey-600 mb-4">
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
                    className="inline-flex items-center text-brand-green-500 hover:text-brand-green-600 font-semibold"
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

      {/* Webinars & Demos Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
                Webinars & <span className="text-brand-green-500">Demos</span>
              </h2>
              <p className="text-xl text-grey-700">
                Learn from experts and see our solutions in action
              </p>
            </div>
            <Video className="h-16 w-16 text-brand-green-500 opacity-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 overflow-hidden">
                <div className="relative">
                  <img 
                    src={webinar.image} 
                    alt={webinar.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      webinar.status === 'upcoming' 
                        ? 'bg-red-500 text-white' 
                        : 'bg-brand-green-500 text-white'
                    }`}>
                      {webinar.status === 'upcoming' ? 'Live' : 'On-Demand'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-600 text-xs font-medium rounded">
                      {webinar.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-grey-900 mb-2">
                    {webinar.title}
                  </h3>
                  <p className="text-grey-700 text-sm mb-4">
                    {webinar.description}
                  </p>
                  <div className="flex items-center text-sm text-grey-600 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {webinar.date}
                    {webinar.time && ` • ${webinar.time}`}
                    {webinar.duration && ` • ${webinar.duration}`}
                  </div>
                  <button className="w-full bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    {webinar.status === 'upcoming' ? 'Register Now' : 'Watch Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-books & Guides Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
                Guides & <span className="text-brand-green-500">E-books</span>
              </h2>
              <p className="text-xl text-grey-700">
                Comprehensive resources to master AI automation
              </p>
            </div>
            <Download className="h-16 w-16 text-brand-green-500 opacity-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-grey-900 mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-grey-700 text-sm mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-grey-600 mb-4">
                    <span>{guide.pages}</span>
                    <span>{guide.format}</span>
                  </div>
                  <button className="w-full bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Pages Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
                Product <span className="text-brand-green-500">Comparisons</span>
              </h2>
              <p className="text-xl text-grey-700">
                Make informed decisions with detailed comparisons
              </p>
            </div>
            <BarChart3 className="h-16 w-16 text-brand-green-500 opacity-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comparisons.map((comparison, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 p-8">
                <Target className="h-12 w-12 text-brand-green-500 mb-4" />
                <h3 className="text-xl font-bold text-grey-900 mb-3">
                  {comparison.title}
                </h3>
                <p className="text-grey-700 mb-6">
                  {comparison.description}
                </p>
                <Link 
                  to={comparison.link}
                  className="inline-flex items-center text-brand-green-500 hover:text-brand-green-600 font-semibold"
                >
                  View Comparison
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Help Center Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
                Help & <span className="text-brand-green-500">Support</span>
              </h2>
              <p className="text-xl text-grey-700">
                Get answers and access documentation
              </p>
            </div>
            <HelpCircle className="h-16 w-16 text-brand-green-500 opacity-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Getting Started", icon: Lightbulb, link: "/help/getting-started" },
              { title: "API Documentation", icon: FileText, link: "/help/api-docs" },
              { title: "Integration Guides", icon: Users, link: "/help/integrations" },
              { title: "Troubleshooting", icon: Target, link: "/help/troubleshooting" }
            ].map((item, index) => (
              <Link 
                key={index}
                to={item.link}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 p-6 text-center"
              >
                <item.icon className="h-12 w-12 text-brand-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-grey-900">
                  {item.title}
                </h3>
              </Link>
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
