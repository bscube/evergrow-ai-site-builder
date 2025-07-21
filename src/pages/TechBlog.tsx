import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Calendar, Clock, ArrowRight, Code, Cpu, Database, Zap } from 'lucide-react';

const TechBlog = () => {
  const techPosts = [
    {
      title: "Building Scalable AI Agents: Architecture Deep Dive",
      excerpt: "Technical exploration of our microservices architecture that enables AI agents to handle millions of conversations simultaneously.",
      author: "Dr. Alex Kumar",
      role: "Principal AI Engineer",
      publishDate: "January 12, 2024",
      readTime: "12 min read",
      category: "Architecture",
      difficulty: "Advanced",
      tags: ["Microservices", "Scalability", "AI Architecture"],
      image: "/lovable-uploads/760e5965-c5c5-4c2c-812d-42b5436a8245.png",
      slug: "#architecture-deep-dive",
      featured: true
    },
    {
      title: "Natural Language Processing Pipeline Optimization",
      excerpt: "How we achieved 40% faster response times by optimizing our NLP pipeline with custom transformers and efficient tokenization.",
      author: "Maria Santos",
      role: "Senior ML Engineer",
      publishDate: "January 5, 2024",
      readTime: "10 min read",
      category: "Machine Learning",
      difficulty: "Intermediate",
      tags: ["NLP", "Transformers", "Performance"],
      image: "/lovable-uploads/8f80e73a-3604-4714-ad8c-85d9c8425fc4.png",
      slug: "#nlp-optimization"
    },
    {
      title: "Real-time Conversation State Management",
      excerpt: "Deep dive into our Redis-based state management system that maintains conversation context across distributed AI agents.",
      author: "John Chen",
      role: "Backend Engineer",
      publishDate: "December 28, 2023",
      readTime: "8 min read",
      category: "Backend",
      difficulty: "Intermediate",
      tags: ["Redis", "State Management", "Distributed Systems"],
      image: "/lovable-uploads/9ddce30e-8318-49f1-9d10-de0dcae149c3.png",
      slug: "#conversation-state"
    },
    {
      title: "Implementing Secure Multi-tenant AI Infrastructure",
      excerpt: "Security considerations and implementation details for serving multiple clients on shared AI infrastructure while maintaining data isolation.",
      author: "Sarah Kim",
      role: "DevOps Engineer",
      publishDate: "December 20, 2023",
      readTime: "15 min read",
      category: "Security",
      difficulty: "Advanced",
      tags: ["Security", "Multi-tenancy", "Infrastructure"],
      image: "/lovable-uploads/c1a92e03-717c-49f6-b56a-882576f79f7b.png",
      slug: "#secure-infrastructure"
    },
    {
      title: "Fine-tuning Large Language Models for Domain-Specific Tasks",
      excerpt: "Step-by-step guide to fine-tuning LLMs for specific industries, including data preparation, training strategies, and evaluation metrics.",
      author: "Dr. Robert Zhang",
      role: "Research Scientist",
      publishDate: "December 15, 2023",
      readTime: "18 min read",
      category: "Machine Learning",
      difficulty: "Advanced",
      tags: ["LLM", "Fine-tuning", "Domain Adaptation"],
      image: "/lovable-uploads/4da42fa1-bfea-4100-a308-3fd54824a62d.png",
      slug: "#llm-fine-tuning"
    },
    {
      title: "Building Resilient AI APIs with Circuit Breakers",
      excerpt: "How we implemented circuit breaker patterns to ensure high availability and graceful degradation in our AI service APIs.",
      author: "Lisa Thompson",
      role: "Platform Engineer",
      publishDate: "December 8, 2023",
      readTime: "7 min read",
      category: "Backend",
      difficulty: "Intermediate",
      tags: ["API Design", "Resilience", "Circuit Breakers"],
      image: "/lovable-uploads/665274b0-11f1-46f6-9c20-29a4bc35a12b.png",
      slug: "#api-resilience"
    }
  ];

  const categories = [
    { name: "All", icon: Code },
    { name: "Architecture", icon: Cpu },
    { name: "Machine Learning", icon: Zap },
    { name: "Backend", icon: Database },
    { name: "Security", icon: Code }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-grey-100 text-grey-700';
    }
  };

  return (
    <>
      <SEO 
        title="Tech Blog - AI Engineering Deep Dives | EverGrowDigital"
        description="Technical deep dives into AI agent development, architecture, and engineering. Learn from our expert engineers and researchers."
        keywords="AI engineering, technical blog, AI architecture, machine learning engineering"
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-green-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-grey-900 mb-6">
                Tech
                <span className="text-brand-green-500"> Blog</span>
              </h1>
              <p className="text-xl text-grey-600 mb-8">
                Technical deep dives, engineering insights, and architectural discussions 
                from our AI development team. Learn how we build scalable AI systems.
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
                  key={category.name}
                  className="flex items-center px-6 py-2 rounded-full border border-grey-200 text-grey-700 hover:border-brand-green-500 hover:text-brand-green-500 transition-colors duration-200"
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <a 
              href={`/blog${techPosts[0].slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow-lg border ring-2 ring-brand-green-500 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="bg-brand-green-500 px-6 py-3">
                <span className="text-white font-medium">Featured Technical Article</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className="flex items-center mb-4 flex-wrap gap-2">
                    <span className="bg-brand-green-100 text-brand-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {techPosts[0].category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(techPosts[0].difficulty)}`}>
                      {techPosts[0].difficulty}
                    </span>
                    <div className="flex items-center text-grey-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {techPosts[0].publishDate}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-grey-900 mb-4">{techPosts[0].title}</h2>
                  <p className="text-grey-600 mb-6 text-lg">{techPosts[0].excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {techPosts[0].tags.map((tag) => (
                      <span key={tag} className="bg-grey-100 text-grey-600 px-3 py-1 rounded-full text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <Code className="h-5 w-5 text-grey-400 mr-2" />
                    <div>
                      <span className="font-medium text-grey-900">{techPosts[0].author}</span>
                      <span className="text-grey-500 text-sm ml-2">{techPosts[0].role}</span>
                    </div>
                    <div className="flex items-center ml-6 text-grey-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {techPosts[0].readTime}
                    </div>
                  </div>
                  
                </div>
                <div className="lg:p-8">
                  <img 
                    src={techPosts[0].image} 
                    alt={techPosts[0].title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Tech Posts Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techPosts.slice(1).map((post, index) => (
                <a 
                  key={index}
                  href={`/blog${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-white/90 backdrop-blur-sm text-grey-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(post.difficulty)}`}>
                        {post.difficulty}
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
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="bg-grey-100 text-grey-600 px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="text-grey-500 text-xs">+{post.tags.length - 2} more</span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm">
                        <Code className="h-4 w-4 text-grey-400 mr-1" />
                        <span className="text-grey-600">{post.author}</span>
                      </div>
                      <span className="inline-flex items-center text-brand-green-600 font-medium text-sm">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-green-500 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Technical Community
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Connect with our engineering team, contribute to open source projects, and stay updated with the latest AI development insights.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-brand-green-500 hover:bg-grey-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Join Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Article Content Sections */}
        <section id="architecture-deep-dive" className="py-20 bg-grey-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-grey-900 mb-8">Building Scalable AI Agents: Architecture Deep Dive</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-grey-600 mb-6">
                Our microservices architecture enables AI agents to handle millions of conversations simultaneously by distributing workload across multiple specialized services. Each service is designed for specific functions like natural language processing, context management, and response generation.
              </p>
              <p className="text-grey-600 mb-6">
                The system uses event-driven communication patterns with Apache Kafka for real-time message streaming, ensuring low latency and high throughput. Load balancing is handled through Kubernetes with auto-scaling policies based on CPU and memory metrics.
              </p>
            </div>
          </div>
        </section>

        <section id="nlp-optimization" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-grey-900 mb-8">Natural Language Processing Pipeline Optimization</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-grey-600 mb-6">
                We achieved 40% faster response times by implementing custom transformer models with efficient tokenization strategies. Our optimization pipeline includes model quantization, dynamic batching, and caching mechanisms for frequently used patterns.
              </p>
              <p className="text-grey-600 mb-6">
                The key breakthrough came from implementing pipeline parallelization where tokenization, embedding generation, and model inference happen concurrently rather than sequentially.
              </p>
            </div>
          </div>
        </section>

        <section id="conversation-state" className="py-20 bg-grey-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-grey-900 mb-8">Real-time Conversation State Management</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-grey-600 mb-6">
                Our Redis-based state management system maintains conversation context across distributed AI agents using a hybrid approach of in-memory caching and persistent storage. Each conversation maintains a rolling window of context with intelligent pruning algorithms.
              </p>
              <p className="text-grey-600 mb-6">
                State synchronization across multiple agent instances is handled through Redis Streams, ensuring consistency while maintaining sub-millisecond access times.
              </p>
            </div>
          </div>
        </section>

        <section id="secure-infrastructure" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-grey-900 mb-8">Implementing Secure Multi-tenant AI Infrastructure</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-grey-600 mb-6">
                Security in multi-tenant AI infrastructure requires isolation at multiple levels: data, compute, and network. We implement tenant-specific encryption keys, isolated compute namespaces, and strict API access controls with rate limiting per tenant.
              </p>
              <p className="text-grey-600 mb-6">
                Data isolation is enforced through encrypted database partitioning and tenant-specific AI model instances, ensuring complete separation of sensitive information.
              </p>
            </div>
          </div>
        </section>

        <section id="llm-fine-tuning" className="py-20 bg-grey-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-grey-900 mb-8">Fine-tuning Large Language Models for Domain-Specific Tasks</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-grey-600 mb-6">
                Fine-tuning LLMs for specific industries requires careful data preparation, custom training strategies, and domain-specific evaluation metrics. Our approach includes transfer learning techniques and parameter-efficient fine-tuning methods.
              </p>
              <p className="text-grey-600 mb-6">
                We use LoRA (Low-Rank Adaptation) and QLoRA techniques to fine-tune models efficiently while maintaining base model performance on general tasks.
              </p>
            </div>
          </div>
        </section>

        <section id="api-resilience" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-grey-900 mb-8">Building Resilient AI APIs with Circuit Breakers</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-grey-600 mb-6">
                Circuit breaker patterns ensure high availability and graceful degradation in our AI service APIs. When services experience high error rates or latency, circuit breakers prevent cascade failures by temporarily blocking requests.
              </p>
              <p className="text-grey-600 mb-6">
                Our implementation includes configurable thresholds, exponential backoff strategies, and automatic recovery mechanisms with health checks.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default TechBlog;