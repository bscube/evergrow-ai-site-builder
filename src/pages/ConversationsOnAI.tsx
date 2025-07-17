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
        <section className="bg-gradient-to-br from-brand-green-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-grey-900 mb-6">
                Conversations
                <span className="text-brand-green-500"> on AI</span>
              </h1>
              <p className="text-xl text-grey-600 mb-8">
                Thoughtful discussions with leading experts, researchers, and visionaries 
                shaping the future of artificial intelligence and its impact on society.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Conversation */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg border ring-2 ring-brand-green-500 overflow-hidden">
              <div className="bg-brand-green-500 px-6 py-3">
                <span className="text-white font-medium">Featured Conversation</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className="flex items-center mb-4 flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(conversations[0].type)}`}>
                      {conversations[0].type}
                    </span>
                    <div className="flex items-center text-grey-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {conversations[0].date}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-grey-900 mb-4">{conversations[0].title}</h2>
                  <p className="text-grey-600 mb-6 text-lg">{conversations[0].description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-grey-900 mb-3">Participants:</h4>
                    <ul className="space-y-1">
                      {conversations[0].participants.map((participant, idx) => (
                        <li key={idx} className="flex items-center text-grey-600">
                          <Mic className="h-4 w-4 text-brand-green-500 mr-3 flex-shrink-0" />
                          {participant}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {conversations[0].topics.map((topic) => (
                      <span key={topic} className="bg-grey-100 text-grey-600 px-3 py-1 rounded-full text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center mb-6 text-grey-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-6">{conversations[0].duration}</span>
                    <Users className="h-4 w-4 mr-1" />
                    <span>{conversations[0].listens} listens</span>
                  </div>
                  
                  <div className="flex gap-4">
                    <Link 
                      to={`/conversations-on-ai/${conversations[0].id}`}
                      className="inline-flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Watch Now
                    </Link>
                    <Link 
                      to={conversations[0].transcriptUrl}
                      className="inline-flex items-center border-2 border-brand-green-500 text-brand-green-500 hover:bg-brand-green-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Transcript
                    </Link>
                  </div>
                </div>
                <div className="lg:p-8">
                  <img 
                    src={conversations[0].image} 
                    alt={conversations[0].title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conversations Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
                Latest Conversations
              </h2>
              <p className="text-xl text-grey-600 max-w-3xl mx-auto">
                Explore our collection of thought-provoking discussions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conversations.slice(1).map((conversation, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={conversation.image} 
                      alt={conversation.title}
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(conversation.type)}`}>
                        {conversation.type}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/20 rounded-t-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-4">
                        <Play className="h-8 w-8 text-brand-green-500" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3 text-sm text-grey-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{conversation.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{conversation.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-grey-900 mb-3 line-clamp-2">{conversation.title}</h3>
                    <p className="text-grey-600 mb-4 text-sm line-clamp-3">{conversation.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm text-grey-500 mb-2">With:</p>
                      <p className="text-sm text-grey-700 line-clamp-2">
                        {conversation.participants.slice(0, 2).join(', ')}
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
                        className="inline-flex items-center text-brand-green-600 hover:text-brand-green-700 font-medium text-sm"
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
        <section className="bg-brand-green-500 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Conversation
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Have insights to share? We're always looking for thought leaders and experts to join our conversations about the future of AI.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-brand-green-500 hover:bg-grey-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
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