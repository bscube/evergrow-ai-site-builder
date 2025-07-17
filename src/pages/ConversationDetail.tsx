import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Calendar, Clock, Users, Mic, Play, Download, ArrowLeft, Share2, ChevronRight } from 'lucide-react';

const ConversationDetail = () => {
  const { id } = useParams();
  
  // This would typically come from an API or data store
  const conversations = [
    {
      id: "ethics-ai-business-roundtable",
      title: "The Ethics of AI in Business: A Roundtable Discussion",
      description: "Leading AI ethicists and business leaders discuss the responsible implementation of AI in enterprise environments.",
      fullDescription: "In this comprehensive roundtable discussion, we bring together three leading voices in AI ethics and business implementation to explore the critical challenges and opportunities facing organizations today. Dr. Sarah Chen provides insights from her groundbreaking research on AI ethics frameworks, while Michael Rodriguez shares real-world experiences from implementing AI at scale in Fortune 500 companies. Prof. Elena Vasquez rounds out the discussion with policy perspectives and regulatory considerations that every business leader should understand.",
      participants: [
        "Dr. Sarah Chen - AI Ethics Researcher",
        "Michael Rodriguez - Fortune 500 CTO", 
        "Prof. Elena Vasquez - AI Policy Expert"
      ],
      date: "January 20, 2024",
      duration: "52 min",
      listens: "2,300+",
      type: "Roundtable",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube embed
      audioUrl: "https://example.com/audio/episode-1.mp3",
      transcriptUrl: "/transcript-ethics-ai-business.pdf",
      image: "/lovable-uploads/4da42fa1-bfea-4100-a308-3fd54824a62d.png",
      featured: true,
      topics: ["AI Ethics", "Business Implementation", "Policy & Regulation"],
      keyTakeaways: [
        "Ethical AI frameworks should be integrated from the design phase",
        "Transparency and explainability are crucial for business stakeholder buy-in",
        "Regulatory compliance requires proactive rather than reactive approaches",
        "Cross-functional teams are essential for responsible AI implementation"
      ]
    },
    {
      id: "research-to-reality-ai-journey",
      title: "From Research to Reality: AI's Journey into Mainstream Business",
      description: "A deep conversation about how AI research translates into practical business applications and real-world impact.",
      fullDescription: "Dr. Alex Kumar and Jennifer Park dive deep into the complex process of translating cutting-edge AI research into practical business solutions. This conversation explores the challenges, opportunities, and lessons learned from bringing AI from laboratory settings into real-world applications that drive business value.",
      participants: [
        "Dr. Alex Kumar - Principal AI Researcher",
        "Jennifer Park - VP Product Strategy"
      ],
      date: "January 10, 2024",
      duration: "38 min",
      listens: "1,800+",
      type: "Interview",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      audioUrl: "https://example.com/audio/episode-2.mp3",
      transcriptUrl: "/transcript-research-to-reality.pdf",
      image: "/lovable-uploads/665274b0-11f1-46f6-9c20-29a4bc35a12b.png",
      topics: ["AI Research", "Product Development", "Market Adoption"],
      keyTakeaways: [
        "Research validation is critical before business implementation",
        "Product-market fit requires understanding user needs beyond technical capabilities",
        "Iterative development cycles accelerate successful AI deployment",
        "Market education is as important as the technology itself"
      ]
    },
    {
      id: "future-of-work-ai-agents",
      title: "The Future of Work: How AI Agents Transform Human Roles",
      description: "Exploring how AI agents are reshaping job roles and creating new opportunities for human-AI collaboration.",
      fullDescription: "Lisa Thompson and Robert Zhang explore the evolving landscape of work in the age of AI agents. This conversation addresses common concerns about job displacement while highlighting new opportunities for human-AI collaboration and the emergence of entirely new job categories.",
      participants: [
        "Lisa Thompson - Workforce Transformation Expert",
        "Robert Zhang - Future of Work Researcher"
      ],
      date: "December 28, 2023",
      duration: "45 min",
      listens: "2,100+",
      type: "Panel Discussion",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      audioUrl: "https://example.com/audio/episode-3.mp3",
      transcriptUrl: "/transcript-future-of-work.pdf",
      image: "/lovable-uploads/6b11361d-e93e-47a7-8d6d-0165caa79795.png",
      topics: ["Future of Work", "Human-AI Collaboration", "Workforce Development"],
      keyTakeaways: [
        "AI augments human capabilities rather than replacing them entirely",
        "New job categories are emerging faster than traditional roles are disappearing",
        "Continuous learning and adaptation are essential skills for the AI era",
        "Human creativity and emotional intelligence remain irreplaceable"
      ]
    },
    {
      id: "building-trust-ai-transparency",
      title: "Building Trust in AI: Transparency and Explainability",
      description: "A technical discussion about making AI systems more transparent and explainable for business stakeholders.",
      fullDescription: "Dr. Maria Santos and John Chen provide a technical deep-dive into the challenges and solutions for building transparent and explainable AI systems. This conversation is essential for technical teams working on AI implementation and business leaders seeking to understand the importance of AI transparency.",
      participants: [
        "Dr. Maria Santos - Explainable AI Researcher",
        "John Chen - AI Platform Architect"
      ],
      date: "December 15, 2023",
      duration: "41 min",
      listens: "1,500+",
      type: "Technical Deep Dive",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      audioUrl: "https://example.com/audio/episode-4.mp3",
      transcriptUrl: "/transcript-building-trust-ai.pdf",
      image: "/lovable-uploads/760e5965-c5c5-4c2c-812d-42b5436a8245.png",
      topics: ["Explainable AI", "Trust & Transparency", "Technical Implementation"],
      keyTakeaways: [
        "Explainability requirements vary by use case and industry",
        "Technical transparency doesn't always equal user understanding",
        "Building trust requires both technical and communication strategies",
        "Regulatory requirements are driving demand for explainable AI"
      ]
    }
  ];

  const conversation = conversations.find(conv => conv.id === id);

  if (!conversation) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-grey-900 mb-4">Conversation Not Found</h1>
            <p className="text-grey-600 mb-8">The conversation you're looking for doesn't exist.</p>
            <Link 
              to="/conversations-on-ai" 
              className="inline-flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Conversations
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

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
        title={`${conversation.title} | Conversations on AI | EverGrowDigital`}
        description={conversation.description}
        keywords={`AI conversation, ${conversation.topics.join(', ')}, ${conversation.participants.map(p => p.split(' - ')[0]).join(', ')}`}
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Breadcrumb */}
        <section className="bg-grey-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm text-grey-600">
              <Link to="/conversations-on-ai" className="hover:text-brand-green-500">
                Conversations on AI
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-grey-900">{conversation.title}</span>
            </div>
          </div>
        </section>

        {/* Header */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link 
                to="/conversations-on-ai"
                className="inline-flex items-center text-brand-green-600 hover:text-brand-green-700 font-medium mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to all conversations
              </Link>
            </div>
            
            <div className="flex items-center mb-4 flex-wrap gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(conversation.type)}`}>
                {conversation.type}
              </span>
              <div className="flex items-center text-grey-500 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {conversation.date}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-grey-900 mb-6">{conversation.title}</h1>
            <p className="text-xl text-grey-600 mb-8 max-w-4xl">{conversation.description}</p>
            
            <div className="flex items-center mb-8 text-grey-500">
              <Clock className="h-5 w-5 mr-2" />
              <span className="mr-6">{conversation.duration}</span>
              <Users className="h-5 w-5 mr-2" />
              <span>{conversation.listens} listens</span>
            </div>
          </div>
        </section>

        {/* Video Player */}
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black rounded-2xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={conversation.videoUrl}
                  title={conversation.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a 
                href={conversation.audioUrl}
                className="inline-flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="h-4 w-4 mr-2" />
                Listen to Audio
              </a>
              <a 
                href={conversation.transcriptUrl}
                className="inline-flex items-center border-2 border-brand-green-500 text-brand-green-500 hover:bg-brand-green-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
                download
              >
                <Download className="h-4 w-4 mr-2" />
                Download Transcript
              </a>
              <button className="inline-flex items-center border-2 border-grey-300 text-grey-700 hover:bg-grey-50 px-6 py-3 rounded-xl font-semibold transition-all duration-200">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </button>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-grey-900 mb-6">About This Conversation</h2>
                <p className="text-grey-600 mb-8 text-lg leading-relaxed">{conversation.fullDescription}</p>
                
                <h3 className="text-xl font-bold text-grey-900 mb-4">Key Takeaways</h3>
                <ul className="space-y-3 mb-8">
                  {conversation.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-brand-green-500 rounded-full w-2 h-2 mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-grey-600">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold text-grey-900 mb-6">Participants</h3>
                  <div className="space-y-4">
                    {conversation.participants.map((participant, index) => (
                      <div key={index} className="flex items-start">
                        <Mic className="h-5 w-5 text-brand-green-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-grey-900">{participant.split(' - ')[0]}</p>
                          <p className="text-sm text-grey-600">{participant.split(' - ')[1]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold text-grey-900 mb-3">Topics Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {conversation.topics.map((topic) => (
                        <span key={topic} className="bg-grey-100 text-grey-700 px-3 py-1 rounded-full text-sm">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ConversationDetail;