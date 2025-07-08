
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, Calendar, User, Clock, Download, Video, HelpCircle, BarChart3, Lightbulb, Users, Target, Play, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Resources = () => {
  const blogPosts = [
    {
      title: "The Future of Conversational AI in Customer Service",
      excerpt: "Explore how advanced AI technologies are revolutionizing customer service interactions and driving business growth through intelligent automation.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "AI & Innovation",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      slug: "future-conversational-ai-customer-service"
    },
    {
      title: "ROI Analysis: Measuring Success with AI Chatbots",
      excerpt: "A comprehensive guide to calculating and maximizing return on investment when implementing AI chatbot solutions in your business.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Business Strategy",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      slug: "roi-analysis-ai-chatbots"
    },
    {
      title: "Multi-Channel AI: Unifying Customer Experience",
      excerpt: "Learn how to create seamless customer experiences across WhatsApp, Facebook Messenger, Instagram, and your website with unified AI agents.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Omnichannel",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      slug: "multi-channel-ai-customer-experience"
    },
    {
      title: "Industry Spotlight: AI Transformation in Healthcare",
      excerpt: "Discover how healthcare organizations are using AI agents to improve patient engagement, streamline appointments, and enhance care delivery.",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      slug: "ai-transformation-healthcare"
    }
  ];

  const caseStudies = [
    {
      title: "Retail Giant Achieves 400% ROI with AI Customer Service",
      excerpt: "A leading fashion retailer transformed their customer support operations, reducing response times by 90% and increasing customer satisfaction scores significantly.",
      industry: "Retail & E-commerce",
      results: [
        "400% return on investment within 6 months",
        "90% reduction in average response time",
        "85% of queries resolved automatically",
        "45% increase in customer satisfaction scores"
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      slug: "retail-giant-400-percent-roi"
    },
    {
      title: "FinTech Startup Scales Support 10x with AI Agents",
      excerpt: "How a growing financial technology company handled 1000% user growth without proportionally increasing their support team size.",
      industry: "Financial Services",
      results: [
        "Handled 10x increase in support volume",
        "Maintained 24/7 support availability",
        "Reduced support costs by 60%",
        "Improved compliance response accuracy to 99.8%"
      ],
      image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=600&h=400&fit=crop",
      slug: "fintech-scales-support-ai-agents"
    },
    {
      title: "Healthcare Network: 50% Reduction in Appointment No-Shows",
      excerpt: "A multi-location healthcare provider used AI agents to dramatically improve patient engagement and reduce missed appointments.",
      industry: "Healthcare",
      results: [
        "50% reduction in appointment no-shows",
        "95% patient satisfaction with AI interactions",
        "30% increase in appointment bookings",
        "Automated 80% of routine patient inquiries"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      slug: "healthcare-reduces-no-shows"
    }
  ];

  const webinars = [
    {
      title: "Building Your First AI Customer Service Agent",
      date: "January 28, 2024",
      time: "3:00 PM EST",
      type: "Live Workshop",
      description: "Join our hands-on workshop where we'll guide you through creating and deploying your first AI customer service agent from scratch.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      status: "upcoming"
    },
    {
      title: "AI in Fintech: Compliance and Customer Experience",
      date: "January 20, 2024",
      duration: "60 minutes",
      type: "Industry Deep Dive",
      description: "Explore how financial services companies can leverage AI while maintaining strict compliance requirements and enhancing customer trust.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      status: "recorded"
    },
    {
      title: "Omnichannel AI Strategy: From WhatsApp to Website",
      date: "January 15, 2024",
      duration: "45 minutes",
      type: "Strategy Session",
      description: "Learn how to create a unified customer experience across all digital touchpoints using intelligent AI agent orchestration.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=600&h=400&fit=crop",
      status: "recorded"
    }
  ];

  const guides = [
    {
      title: "The Complete AI Implementation Playbook",
      description: "Step-by-step guide covering everything from initial planning to full deployment of AI agents in your organization.",
      pages: "72 pages",
      format: "PDF + Checklist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      title: "Industry-Specific AI Use Case Library",
      description: "Comprehensive collection of proven AI implementations across retail, healthcare, fintech, and other key industries.",
      pages: "95 pages",
      format: "PDF + Templates",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop"
    },
    {
      title: "AI Agent Training and Optimization Guide",
      description: "Advanced techniques for training, fine-tuning, and continuously improving your AI agents' performance and accuracy.",
      pages: "58 pages",
      format: "PDF + Video Tutorials",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
    },
    {
      title: "Measuring AI Success: KPIs and Analytics",
      description: "Essential metrics, tracking methods, and analytics frameworks to measure and improve your AI implementation ROI.",
      pages: "34 pages",
      format: "PDF + Dashboard Templates",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    }
  ];

  const comparisons = [
    {
      title: "EverGrow vs. Traditional Chatbot Platforms",
      description: "Detailed comparison of modern AI agents versus rule-based chatbot solutions, including features, costs, and implementation complexity.",
      link: "/comparisons/evergrow-vs-traditional-chatbots"
    },
    {
      title: "AI Agent Platforms: Feature Comparison Matrix",
      description: "Side-by-side analysis of leading AI customer service platforms, helping you choose the right solution for your business needs.",
      link: "/comparisons/ai-platforms-feature-matrix"
    },
    {
      title: "Build vs. Buy: AI Development Cost Analysis",
      description: "Comprehensive analysis of building custom AI solutions in-house versus adopting ready-made platforms like EverGrow.",
      link: "/comparisons/build-vs-buy-ai-solutions"
    }
  ];

  const helpResources = [
    {
      title: "Quick Start Guide",
      description: "Get up and running with your first AI agent in under 30 minutes",
      icon: Lightbulb,
      link: "/help/quick-start"
    },
    {
      title: "API Documentation",
      description: "Complete technical documentation for developers and integrators",
      icon: FileText,
      link: "/help/api-documentation"
    },
    {
      title: "Integration Tutorials",
      description: "Step-by-step guides for connecting with popular business tools",
      icon: Users,
      link: "/help/integration-tutorials"
    },
    {
      title: "Troubleshooting Hub",
      description: "Common issues, solutions, and best practices for smooth operations",
      icon: Target,
      link: "/help/troubleshooting"
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
      <section className="py-24 bg-white" id="case-studies">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-600 text-sm font-medium rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-grey-900 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-grey-700 text-sm mb-4">
                    {study.excerpt}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-grey-900 mb-3 text-sm">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="flex items-center text-xs text-grey-700">
                          <CheckCircle className="w-3 h-3 text-brand-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-brand-green-500 hover:text-brand-green-600 font-semibold text-sm"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-grey-50" id="blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
                Latest <span className="text-brand-green-500">Insights</span>
              </h2>
              <p className="text-xl text-grey-700">
                Expert analysis on AI trends, implementation strategies, and industry innovations
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
      <section className="py-24 bg-white" id="webinars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
                Webinars & <span className="text-brand-green-500">Workshops</span>
              </h2>
              <p className="text-xl text-grey-700">
                Learn from AI experts and see our solutions in action through interactive sessions
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
      <section className="py-24 bg-grey-50" id="guides">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
                Guides & <span className="text-brand-green-500">E-books</span>
              </h2>
              <p className="text-xl text-grey-700">
                Comprehensive resources to master AI automation and drive business success
              </p>
            </div>
            <Download className="h-16 w-16 text-brand-green-500 opacity-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-base font-bold text-grey-900 mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-grey-700 text-sm mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-grey-600 mb-4">
                    <span>{guide.pages}</span>
                    <span>{guide.format}</span>
                  </div>
                  <button className="w-full bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center text-sm">
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
                Make informed decisions with detailed feature and cost comparisons
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
                Get answers, access documentation, and find solutions quickly
              </p>
            </div>
            <HelpCircle className="h-16 w-16 text-brand-green-500 opacity-20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpResources.map((item, index) => (
              <Link 
                key={index}
                to={item.link}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 p-6 text-center"
              >
                <item.icon className="h-12 w-12 text-brand-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-grey-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-grey-700">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-green-500 to-brand-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join hundreds of businesses that have automated their customer experience with intelligent AI agents
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
