import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Calendar, Clock, Users, Mic, Play, ArrowRight, Download } from 'lucide-react';

const ConversationsOnAI = () => {
  const conversations = [
    {
      id: "ethics-ai-business-roundtable",
      title: "The Ethics of AI in Business: A Roundtable Discussion",
      description: "Leading AI ethicists and business leaders discuss the responsible implementation of AI in enterprise environments.",
      participants: [
        "Dr. Sarah Chen - AI Ethics Researcher",
        "Michael Rodriguez - Fortune 500 CTO", 
        "Prof. Elena Vasquez - AI Policy Expert"
      ],
      date: "January 20, 2024",
      duration: "52 min",
      listens: "2,300+",
      type: "Roundtable",
      audioUrl: "#",
      transcriptUrl: "#",
      image: "/lovable-uploads/4da42fa1-bfea-4100-a308-3fd54824a62d.png",
      featured: true,
      topics: ["AI Ethics", "Business Implementation", "Policy & Regulation"]
    },
    {
      id: "research-to-reality-ai-journey",
      title: "From Research to Reality: AI's Journey into Mainstream Business",
      description: "A deep conversation about how AI research translates into practical business applications and real-world impact.",
      participants: [
        "Dr. Alex Kumar - Principal AI Researcher",
        "Jennifer Park - VP Product Strategy"
      ],
      date: "January 10, 2024",
      duration: "38 min",
      listens: "1,800+",
      type: "Interview",
      audioUrl: "#",
      transcriptUrl: "#",
      image: "/lovable-uploads/665274b0-11f1-46f6-9c20-29a4bc35a12b.png",
      topics: ["AI Research", "Product Development", "Market Adoption"]
    },
    {
      id: "future-of-work-ai-agents",
      title: "The Future of Work: How AI Agents Transform Human Roles",
      description: "Exploring how AI agents are reshaping job roles and creating new opportunities for human-AI collaboration.",
      participants: [
        "Lisa Thompson - Workforce Transformation Expert",
        "Robert Zhang - Future of Work Researcher"
      ],
      date: "December 28, 2023",
      duration: "45 min",
      listens: "2,100+",
      type: "Panel Discussion",
      audioUrl: "#",
      transcriptUrl: "#",
      image: "/lovable-uploads/6b11361d-e93e-47a7-8d6d-0165caa79795.png",
      topics: ["Future of Work", "Human-AI Collaboration", "Workforce Development"]
    },
    {
      id: "building-trust-ai-transparency",
      title: "Building Trust in AI: Transparency and Explainability",
      description: "A technical discussion about making AI systems more transparent and explainable for business stakeholders.",
      participants: [
        "Dr. Maria Santos - Explainable AI Researcher",
        "John Chen - AI Platform Architect"
      ],
      date: "December 15, 2023",
      duration: "41 min",
      listens: "1,500+",
      type: "Technical Deep Dive",
      audioUrl: "#",
      transcriptUrl: "#",
      image: "/lovable-uploads/760e5965-c5c5-4c2c-812d-42b5436a8245.png",
      topics: ["Explainable AI", "Trust & Transparency", "Technical Implementation"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Roundtable': return 'bg-purple-100 text-purple-700';
      case 'Interview': return 'bg-blue-100 text-blue-700';
      case 'Panel Discussion': return 'bg-green-100 text-green-700';
      case 'Technical Deep Dive': return 'bg-orange-100 text-orange-700';
      default: return 'bg-grey-100 text-grey-700';
    }
  };

  return (
    <>
      <SEO 
        title="Conversations on AI - Thought Leadership Discussions | EverGrowDigital"
        description="Thoughtful discussions with AI experts, researchers, and industry leaders. Explore the future of AI and its impact on business and society."
        keywords="AI conversations, thought leadership, AI discussions, expert interviews"
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-400 via-blue-500 to-teal-400 relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Conversations
                <span className="text-teal-300 block md:inline md:ml-4">on AI</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Demystifying AI for Business
              </p>
              <p className="text-lg text-white/80 font-medium">
                Interviews | Analysis | Research
              </p>
            </div>
          </div>
        </section>

        {/* Featured Conversation */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Visual Section */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 rounded-3xl p-8 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
                  <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-white/90 text-sm font-medium mb-4">Conversations on AI</div>
                    <div className="text-white text-2xl md:text-3xl font-bold mb-8">
                      Ethics in AI Business
                    </div>
                    
                    {/* Participant Avatars */}
                    <div className="flex justify-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-lg">SC</span>
                      </div>
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">MR</span>
                      </div>
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <span className="text-teal-600 font-bold text-lg">EV</span>
                      </div>
                    </div>
                    
                    <div className="text-white/80 text-sm">
                      <span className="mr-4">Dr. Sarah Chen</span>
                      <span className="mr-4">Michael Rodriguez</span>
                      <span>Prof. Elena Vasquez</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                    Interview
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-grey-900 leading-tight">
                  The Ethics of 
                  <span className="text-blue-600"> Artificial Intelligence</span>
                </h2>
                
                <p className="text-lg text-grey-600 leading-relaxed">
                  {conversations[0].description}
                </p>
                
                <div className="prose prose-grey max-w-none">
                  <p className="text-grey-600">
                    Dr. Sarah Chen's expertise in AI ethics frameworks, Michael Rodriguez's Fortune 500 implementation experience, and Prof. Elena Vasquez's policy insights create a comprehensive discussion on responsible AI deployment.
                  </p>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-grey-500 mb-8">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {conversations[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {conversations[0].duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {conversations[0].listens}
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link 
                    to={`/conversations-on-ai/${conversations[0].id}`}
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Watch Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conversations Grid */}
        <section className="pb-20 bg-grey-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-grey-900 mb-4">
                Decoding the capability of 
                <span className="text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Artificial Intelligence
                </span>
              </h2>
              <p className="text-xl text-grey-600 max-w-3xl mx-auto">
                Explore our collection of thought-provoking discussions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conversations.slice(1).map((conversation, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-400 via-blue-500 to-teal-400 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                          {conversation.type}
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3 text-sm text-grey-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{conversation.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{conversation.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-grey-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {conversation.title}
                    </h3>
                    <p className="text-grey-600 mb-4 text-sm line-clamp-3">{conversation.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm text-grey-500 mb-2">With:</p>
                      <p className="text-sm text-grey-700 line-clamp-2">
                        {conversation.participants.slice(0, 2).map(p => p.split(' - ')[0]).join(', ')}
                        {conversation.participants.length > 2 && ' & more'}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {conversation.topics.slice(0, 2).map((topic) => (
                        <span key={topic} className="bg-grey-100 text-grey-600 px-2 py-1 rounded text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-grey-500">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{conversation.listens}</span>
                      </div>
                      <Link 
                        to={`/conversations-on-ai/${conversation.id}`}
                        className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 hover:scale-105"
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Watch Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the Conversation
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Have insights to share? We're always looking for thought leaders and experts to join our conversations about the future of AI.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-purple-600 hover:bg-grey-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Suggest a Topic
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ConversationsOnAI;