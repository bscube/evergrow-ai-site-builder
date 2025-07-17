import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { Calendar, Clock, Users, ArrowLeft, Play } from 'lucide-react';

// Webinar data - in a real app, this would come from an API
const webinarData = {
  'ai-agent-revolution': {
    title: "The Future of Customer Support: AI Agent Revolution",
    description: "A comprehensive look at how AI agents are transforming customer support across industries.",
    fullDescription: "Join us for an in-depth exploration of how AI agents are revolutionizing customer support. We'll cover the latest trends, real-world implementations, and practical strategies for businesses looking to enhance their customer service with AI technology. Learn from industry experts and see live demonstrations of cutting-edge AI agent capabilities.",
    date: "December 15, 2023",
    duration: "42 min",
    viewers: "1,200+",
    speaker: "Dr. Sarah Chen, AI Strategy Expert",
    image: "/lovable-uploads/4da42fa1-bfea-4100-a308-3fd54824a62d.png",
    videoUrl: "https://player.vimeo.com/video/123456789", // Sample video URL
    keyTopics: [
      "Current state of AI in customer support",
      "Key differences between AI agents and traditional chatbots",
      "Implementation strategies and best practices",
      "ROI measurement and success metrics",
      "Future trends and opportunities"
    ]
  },
  'roi-masterclass': {
    title: "ROI Masterclass: Measuring AI Agent Success",
    description: "Learn proven frameworks for calculating and maximizing the ROI of your AI agent implementations.",
    fullDescription: "This masterclass provides a comprehensive framework for measuring and optimizing the return on investment of your AI agent implementations. You'll learn proven methodologies used by successful companies to track performance, calculate ROI, and continuously improve their AI systems.",
    date: "November 28, 2023",
    duration: "38 min",
    viewers: "950+",
    speaker: "Michael Rodriguez, Business Analytics Expert",
    image: "/lovable-uploads/665274b0-11f1-46f6-9c20-29a4bc35a12b.png",
    videoUrl: "https://player.vimeo.com/video/123456790",
    keyTopics: [
      "Defining measurable KPIs for AI agents",
      "Cost-benefit analysis frameworks",
      "Performance tracking methodologies",
      "Case studies from successful implementations",
      "Continuous optimization strategies"
    ]
  },
  'ai-agents-vs-chatbots': {
    title: "AI Agents vs Traditional Chatbots: The Ultimate Comparison",
    description: "Understanding the key differences and when to choose AI agents over traditional chatbot solutions.",
    fullDescription: "Dive deep into the fundamental differences between AI agents and traditional chatbots. This session will help you understand when to choose each technology, how to evaluate your specific needs, and what to expect from each approach in terms of capabilities, costs, and implementation complexity.",
    date: "November 10, 2023",
    duration: "35 min",
    viewers: "1,500+",
    speaker: "Dr. Emily Watson, Conversational AI Researcher",
    image: "/lovable-uploads/6b11361d-e93e-47a7-8d6d-0165caa79795.png",
    videoUrl: "https://player.vimeo.com/video/123456791",
    keyTopics: [
      "Technical architecture comparison",
      "Capabilities and limitations analysis",
      "Use case scenarios and recommendations",
      "Implementation complexity and costs",
      "Future-proofing your conversational AI strategy"
    ]
  },
  'conversational-ai-deployment': {
    title: "Building Conversational AI: From Concept to Deployment",
    description: "Step-by-step guide to designing, developing, and deploying effective conversational AI solutions.",
    fullDescription: "A comprehensive walkthrough of the entire conversational AI development lifecycle. From initial concept and design through development, testing, and deployment, this session covers everything you need to know to successfully launch your AI agent project.",
    date: "October 25, 2023",
    duration: "45 min",
    viewers: "875+",
    speaker: "James Park, AI Solutions Architect",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
    videoUrl: "https://player.vimeo.com/video/123456792",
    keyTopics: [
      "Requirements gathering and planning",
      "Design principles for effective AI agents",
      "Development best practices and tools",
      "Testing and quality assurance strategies",
      "Deployment and monitoring considerations"
    ]
  },
  'enterprise-ai-integration': {
    title: "Enterprise AI Integration: Best Practices & Pitfalls",
    description: "Critical insights for successfully integrating AI agents into large-scale enterprise environments.",
    fullDescription: "Learn from real-world enterprise AI implementations. This session covers the unique challenges of deploying AI agents in large organizations, including security, compliance, integration with existing systems, and change management strategies.",
    date: "October 12, 2023",
    duration: "52 min",
    viewers: "1,100+",
    speaker: "Lisa Chen, Enterprise AI Consultant",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    videoUrl: "https://player.vimeo.com/video/123456793",
    keyTopics: [
      "Enterprise architecture considerations",
      "Security and compliance requirements",
      "Legacy system integration strategies",
      "Change management and user adoption",
      "Scaling AI across large organizations"
    ]
  },
  'nlp-business-applications': {
    title: "Natural Language Processing for Business Applications",
    description: "Deep dive into NLP techniques that power modern AI agents and their business applications.",
    fullDescription: "Explore the NLP technologies that make modern AI agents possible. This technical session covers the latest advances in natural language processing and how they're being applied to solve real business problems across various industries.",
    date: "September 28, 2023",
    duration: "40 min",
    viewers: "720+",
    speaker: "Dr. Alex Kumar, NLP Research Scientist",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    videoUrl: "https://player.vimeo.com/video/123456794",
    keyTopics: [
      "Latest NLP model architectures",
      "Text understanding and generation techniques",
      "Multi-language support strategies",
      "Domain-specific language processing",
      "Performance optimization for production systems"
    ]
  },
  'ai-agent-security': {
    title: "AI Agent Security: Protecting Your Conversational AI",
    description: "Essential security measures and compliance requirements for deploying AI agents safely.",
    fullDescription: "Security is paramount when deploying AI agents that handle customer data and business-critical interactions. This session covers comprehensive security frameworks, threat modeling, and compliance requirements specific to conversational AI systems.",
    date: "September 15, 2023",
    duration: "48 min",
    viewers: "990+",
    speaker: "Robert Kim, Cybersecurity Expert",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    videoUrl: "https://player.vimeo.com/video/123456795",
    keyTopics: [
      "Threat modeling for AI systems",
      "Data privacy and protection strategies",
      "Authentication and authorization frameworks",
      "Monitoring and incident response",
      "Compliance with industry regulations"
    ]
  },
  'multi-channel-ai': {
    title: "Multi-Channel AI: Connecting Across Platforms",
    description: "Strategies for deploying AI agents across multiple channels for seamless customer experiences.",
    fullDescription: "Modern customers expect consistent experiences across all touchpoints. Learn how to deploy AI agents across multiple channels - web, mobile, social media, and voice - while maintaining consistency and maximizing effectiveness.",
    date: "August 30, 2023",
    duration: "43 min",
    viewers: "1,300+",
    speaker: "Maria Rodriguez, Omnichannel Strategy Expert",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    videoUrl: "https://player.vimeo.com/video/123456796",
    keyTopics: [
      "Omnichannel strategy development",
      "Channel-specific optimization techniques",
      "Data synchronization across platforms",
      "Consistent brand voice and personality",
      "Performance measurement across channels"
    ]
  },
  'voice-ai-revolution': {
    title: "Voice AI Revolution: Beyond Text-Based Interactions",
    description: "Exploring voice-enabled AI agents and their impact on customer engagement strategies.",
    fullDescription: "Voice technology is transforming how customers interact with AI agents. This session explores the latest developments in voice AI, implementation strategies, and the unique opportunities voice interfaces provide for customer engagement.",
    date: "August 16, 2023",
    duration: "37 min",
    viewers: "850+",
    speaker: "David Chen, Voice AI Specialist",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    videoUrl: "https://player.vimeo.com/video/123456797",
    keyTopics: [
      "Voice AI technology overview",
      "Speech recognition and synthesis advances",
      "Voice user interface design principles",
      "Integration with existing systems",
      "Future of voice-first experiences"
    ]
  }
};

const WebinarDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const webinar = slug ? webinarData[slug as keyof typeof webinarData] : null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!webinar) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-grey-900 mb-4">Webinar Not Found</h1>
            <Link to="/webinars" className="text-brand-green-500 hover:underline">
              Back to Webinars
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`${webinar.title} | EverGrowDigital Webinars`}
        description={webinar.description}
        keywords="AI agent webinar, AI demo, expert insights"
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Breadcrumb */}
        <section className="bg-grey-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/webinars" 
              className="inline-flex items-center text-brand-green-500 hover:text-brand-green-600 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Webinars
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-grey-900 mb-6">
                  {webinar.title}
                </h1>
                <p className="text-xl text-grey-600 mb-8">
                  {webinar.fullDescription}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-grey-600">
                    <Calendar className="h-5 w-5 mr-3 text-brand-green-500" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center text-grey-600">
                    <Clock className="h-5 w-5 mr-3 text-brand-green-500" />
                    <span>{webinar.duration}</span>
                  </div>
                  <div className="flex items-center text-grey-600">
                    <Users className="h-5 w-5 mr-3 text-brand-green-500" />
                    <span>{webinar.viewers} viewers</span>
                  </div>
                </div>

                <p className="text-lg font-semibold text-grey-900 mb-2">
                  Speaker: {webinar.speaker}
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src={webinar.image} 
                  alt={webinar.title}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
                  <button className="bg-white/90 hover:bg-white rounded-full p-6 transition-all duration-200 hover:scale-110">
                    <Play className="h-12 w-12 text-brand-green-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Topics */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-grey-900 mb-8 text-center">
              What You'll Learn
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webinar.keyTopics.map((topic, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-grey-700">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-green-500 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Want a Custom Demo for Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a personalized consultation to see how AI agents can transform your specific use case.
            </p>
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center bg-white text-brand-green-500 hover:bg-grey-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Now
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default WebinarDetail;