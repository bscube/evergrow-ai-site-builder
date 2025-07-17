import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';

const CompanyBlog = () => {
  const blogPosts = [
    {
      title: "The Future of Customer Experience: How AI Agents Are Reshaping Business",
      excerpt: "Explore how AI agents are transforming customer interactions across industries and what this means for the future of business.",
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
                  
                  <Link 
                    to={blogPosts[0].slug}
                    className="inline-flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-grey-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3 text-sm text-grey-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.publishDate}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-grey-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-grey-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm">
                        <User className="h-4 w-4 text-grey-400 mr-1" />
                        <span className="text-grey-600">{post.author}</span>
                      </div>
                      <Link 
                        to={post.slug}
                        className="inline-flex items-center text-brand-green-600 hover:text-brand-green-700 font-medium text-sm"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
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