import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Calendar, Clock, Users, Video, ArrowRight, Play } from 'lucide-react';

const Webinars = () => {
  const upcomingWebinars = [
    {
      title: "AI Agents for E-commerce: Boosting Sales & Customer Experience",
      description: "Learn how leading e-commerce brands are using AI agents to increase conversions and improve customer satisfaction.",
      date: "January 25, 2024",
      time: "2:00 PM EST",
      duration: "45 min",
      speaker: "Dr. Sarah Chen, AI Strategy Expert",
      registrationUrl: "/contact",
      image: "/lovable-uploads/9ddce30e-8318-49f1-9d10-de0dcae149c3.png",
      featured: true
    },
    {
      title: "Healthcare AI Agents: Compliance & Patient Care",
      description: "Discover how healthcare organizations implement AI agents while maintaining HIPAA compliance and improving patient outcomes.",
      date: "February 8, 2024",
      time: "3:00 PM EST",
      duration: "50 min",
      speaker: "Michael Rodriguez, Healthcare Tech Consultant",
      registrationUrl: "/contact",
      image: "/lovable-uploads/c1a92e03-717c-49f6-b56a-882576f79f7b.png"
    }
  ];

  const pastWebinars = [
    {
      title: "The Future of Customer Support: AI Agent Revolution",
      description: "A comprehensive look at how AI agents are transforming customer support across industries.",
      date: "December 15, 2023",
      duration: "42 min",
      viewers: "1,200+",
      watchUrl: "#",
      image: "/lovable-uploads/4da42fa1-bfea-4100-a308-3fd54824a62d.png"
    },
    {
      title: "ROI Masterclass: Measuring AI Agent Success",
      description: "Learn proven frameworks for calculating and maximizing the ROI of your AI agent implementations.",
      date: "November 28, 2023",
      duration: "38 min",
      viewers: "950+",
      watchUrl: "#",
      image: "/lovable-uploads/665274b0-11f1-46f6-9c20-29a4bc35a12b.png"
    },
    {
      title: "AI Agents vs Traditional Chatbots: The Ultimate Comparison",
      description: "Understanding the key differences and when to choose AI agents over traditional chatbot solutions.",
      date: "November 10, 2023",
      duration: "35 min",
      viewers: "1,500+",
      watchUrl: "#",
      image: "/lovable-uploads/6b11361d-e93e-47a7-8d6d-0165caa79795.png"
    },
    {
      title: "Building Conversational AI: From Concept to Deployment",
      description: "Step-by-step guide to designing, developing, and deploying effective conversational AI solutions.",
      date: "October 25, 2023",
      duration: "45 min",
      viewers: "875+",
      watchUrl: "#",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop"
    },
    {
      title: "Enterprise AI Integration: Best Practices & Pitfalls",
      description: "Critical insights for successfully integrating AI agents into large-scale enterprise environments.",
      date: "October 12, 2023",
      duration: "52 min",
      viewers: "1,100+",
      watchUrl: "#",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"
    },
    {
      title: "Natural Language Processing for Business Applications",
      description: "Deep dive into NLP techniques that power modern AI agents and their business applications.",
      date: "September 28, 2023",
      duration: "40 min",
      viewers: "720+",
      watchUrl: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
    },
    {
      title: "AI Agent Security: Protecting Your Conversational AI",
      description: "Essential security measures and compliance requirements for deploying AI agents safely.",
      date: "September 15, 2023",
      duration: "48 min",
      viewers: "990+",
      watchUrl: "#",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
    },
    {
      title: "Multi-Channel AI: Connecting Across Platforms",
      description: "Strategies for deploying AI agents across multiple channels for seamless customer experiences.",
      date: "August 30, 2023",
      duration: "43 min",
      viewers: "1,300+",
      watchUrl: "#",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop"
    },
    {
      title: "Voice AI Revolution: Beyond Text-Based Interactions",
      description: "Exploring voice-enabled AI agents and their impact on customer engagement strategies.",
      date: "August 16, 2023",
      duration: "37 min",
      viewers: "850+",
      watchUrl: "#",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop"
    }
  ];

  return (
    <>
      <SEO 
        title="AI Agent Webinars - Live Demos & Expert Insights | EverGrowDigital"
        description="Join our expert-led webinars on AI agents. Get live demos, industry insights, and practical implementation strategies from leading experts."
        keywords="AI agent webinars, AI demos, expert insights, live sessions"
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-green-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-grey-900 mb-6">
                Expert
                <span className="text-brand-green-500"> Webinars</span>
              </h1>
              <p className="text-xl text-grey-600 mb-8">
                Join live sessions with AI experts. Get exclusive insights, see real demos, 
                and learn proven strategies for AI agent implementation.
              </p>
            </div>
          </div>
        </section>


        {/* Past Webinars */}
        <section className="py-20 bg-grey-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
                On-Demand Recordings
              </h2>
              <p className="text-xl text-grey-600 max-w-3xl mx-auto">
                Watch previous sessions at your convenience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map((webinar, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={webinar.image} 
                      alt={webinar.title}
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-t-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-4">
                        <Play className="h-8 w-8 text-brand-green-500" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-grey-900 mb-2">{webinar.title}</h3>
                    <p className="text-grey-600 mb-4 text-sm">{webinar.description}</p>
                    
                    <div className="space-y-2 mb-4 text-sm text-grey-500">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-2" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-2" />
                        <span>{webinar.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-2" />
                        <span>{webinar.viewers} viewers</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-green-500 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want a Private Demo?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a personalized demo session with our AI experts to see how our solutions can work for your specific use case.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-brand-green-500 hover:bg-grey-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Book Private Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Webinars;