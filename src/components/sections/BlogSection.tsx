import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Are Conversational AI Agents Just Fancy Chatbots?",
      readTime: "5 min read",
      slug: "/blog/ai-agents-vs-traditional-chatbots"
    },
    {
      title: "Growth and Customer Experience in the Age of AI Agents", 
      readTime: "7 min read",
      slug: "/blog/ai-voice-agents-for-customer-experience"
    },
    {
      title: "GPT 4.1 vs GPT 4.1 mini vs GPT 4.1 nano: How OpenAI's Newest Models Compare for Enterprise Use Cases?",
      readTime: "10 min read",
      slug: "/blog/generative-ai-ecommerce-marketing-applications"
    },
    {
      title: "10 Best AI Chatbots In India (Updated 2025)",
      readTime: "8 min read",
      slug: "/blog/ai-agents-vs-traditional-chatbots"
    },
    {
      title: "Why GenAI Call Auditing Is the Next Big Thing",
      readTime: "6 min read",
      slug: "/blog/ai-agents-use-cases-in-banking"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Latest From Our Blog
          </h2>
          <p className="text-lg text-muted-foreground">
            Resources to help your business grow better
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Featured Blog Post */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white relative">
              <div className="absolute top-4 right-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6 inline-block">
                  <p className="text-sm">I want to book a flight to Dubai for April 8, 2025</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6 ml-8 inline-block">
                  <p className="text-sm">I'm scouting for home loans with low interest rates. Can you help?</p>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Introducing Haptik's AI Agents
                </h3>
                <p className="text-lg opacity-90">
                  For Seamless Customer Experiences at Scale
                </p>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-900">
                [Blog] Meet Haptik's AI Agents: The Powerhouse of Human-Like CX
              </h4>
            </div>
          </div>

          {/* Blog Posts List */}
          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3 leading-relaxed">
                  {post.title}
                </h4>
                <div className="flex items-center justify-end">
                  <Link 
                    to={post.slug}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
                    aria-label={`Read article: ${post.title}`}
                  >
                    Read now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;