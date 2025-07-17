import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Calendar, Clock, Users, Play, Download, Share2, ArrowLeft, Mic } from 'lucide-react';

const ConversationDetail = () => {
  const { id } = useParams<{ id: string }>();

  // In a real app, this would be fetched from an API
  const conversationData = {
    "ethics-ai-business": {
      title: "The Ethics of AI in Business: A Roundtable Discussion",
      description: "Leading AI ethicists and business leaders discuss the responsible implementation of AI in enterprise environments, covering key topics like bias prevention, transparency, and regulatory compliance in AI systems.",
      fullDescription: "In this comprehensive roundtable discussion, we bring together leading voices in AI ethics to explore the complex challenges and opportunities that arise when implementing artificial intelligence in business environments. Our distinguished panel delves deep into the ethical considerations that organizations must address, from algorithmic bias and data privacy to transparency and accountability in AI decision-making processes.",
      participants: [
        {
          name: "Dr. Sarah Chen",
          role: "AI Ethics Researcher",
          company: "Stanford AI Lab",
          bio: "Dr. Sarah Chen is a leading researcher in AI ethics and algorithmic fairness, with over 10 years of experience in developing ethical AI frameworks.",
          image: "/lovable-uploads/4da42fa1-bfea-4100-a308-3fd54824a62d.png"
        },
        {
          name: "Michael Rodriguez",
          role: "Fortune 500 CTO",
          company: "TechCorp Inc.",
          bio: "Michael Rodriguez brings practical industry experience in implementing AI solutions at scale while maintaining ethical standards.",
          image: "/lovable-uploads/4da42fa1-bfea-4100-a308-3fd54824a62d.png"
        },
        {
          name: "Prof. Elena Vasquez",
          role: "AI Policy Expert",
          company: "MIT Technology Policy Program",
          bio: "Prof. Elena Vasquez specializes in AI policy and regulation, advising governments and organizations on AI governance frameworks.",
          image: "/lovable-uploads/4da42fa1-bfea-4100-a308-3fd54824a62d.png"
        }
      ],
      date: "January 20, 2024",
      duration: "52 min",
      listens: "2,300+",
      type: "Roundtable",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      audioUrl: "#",
      transcriptUrl: "#",
      image: "/lovable-uploads/4da42fa1-bfea-4100-a308-3fd54824a62d.png",
      topics: ["AI Ethics", "Business Implementation", "Policy & Regulation", "Algorithmic Bias", "Transparency"],
      keyTakeaways: [
        "Organizations must establish clear ethical guidelines before implementing AI systems",
        "Transparency in AI decision-making processes is crucial for building trust",
        "Regular audits and bias testing are essential for maintaining ethical AI systems",
        "Cross-functional teams should include ethicists and diverse perspectives"
      ]
    },
    "ai-journey-mainstream": {
      title: "From Research to Reality: AI's Journey into Mainstream Business",
      description: "A deep conversation about how AI research translates into practical business applications and real-world impact.",
      fullDescription: "This insightful interview explores the fascinating journey of artificial intelligence from academic research labs to mainstream business applications. Our guests share their experiences in bridging the gap between cutting-edge AI research and practical, scalable business solutions.",
      participants: [
        {
          name: "Dr. Alex Kumar",
          role: "Principal AI Researcher",
          company: "Google DeepMind",
          bio: "Dr. Alex Kumar leads breakthrough research in machine learning and has been instrumental in translating academic research into production systems.",
          image: "/lovable-uploads/665274b0-11f1-46f6-9c20-29a4bc35a12b.png"
        },
        {
          name: "Jennifer Park",
          role: "VP Product Strategy",
          company: "Microsoft AI",
          bio: "Jennifer Park specializes in product strategy for AI technologies, focusing on bringing research innovations to market.",
          image: "/lovable-uploads/665274b0-11f1-46f6-9c20-29a4bc35a12b.png"
        }
      ],
      date: "January 10, 2024",
      duration: "38 min",
      listens: "1,800+",
      type: "Interview",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      audioUrl: "#",
      transcriptUrl: "#",
      image: "/lovable-uploads/665274b0-11f1-46f6-9c20-29a4bc35a12b.png",
      topics: ["AI Research", "Product Development", "Market Adoption", "Technology Transfer"],
      keyTakeaways: [
        "The gap between research and production is narrowing with better tools and frameworks",
        "Industry-academia partnerships are crucial for successful AI implementation",
        "User feedback and real-world testing are essential for AI product development",
        "Scalability and reliability are key challenges in productionizing AI research"
      ]
    },
    "future-of-work": {
      title: "The Future of Work: How AI Agents Transform Human Roles",
      description: "Exploring how AI agents are reshaping job roles and creating new opportunities for human-AI collaboration.",
      fullDescription: "This panel discussion examines the profound impact of AI agents on the future of work, exploring both the challenges and opportunities that arise as artificial intelligence becomes more integrated into our professional lives. Our expert panelists discuss how AI is not just automating tasks, but fundamentally transforming how we work and collaborate.",
      participants: [
        {
          name: "Lisa Thompson",
          role: "Workforce Transformation Expert",
          company: "Future Work Institute",
          bio: "Lisa Thompson is a leading expert in workforce transformation, helping organizations navigate the changing landscape of work in the AI era.",
          image: "/lovable-uploads/6b11361d-e93e-47a7-8d6d-0165caa79795.png"
        },
        {
          name: "Robert Zhang",
          role: "Future of Work Researcher",
          company: "MIT Work Innovation Lab",
          bio: "Robert Zhang conducts research on the future of work, focusing on human-AI collaboration and the evolution of job roles.",
          image: "/lovable-uploads/6b11361d-e93e-47a7-8d6d-0165caa79795.png"
        }
      ],
      date: "December 28, 2023",
      duration: "45 min",
      listens: "2,100+",
      type: "Panel Discussion",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      audioUrl: "#",
      transcriptUrl: "#",
      image: "/lovable-uploads/6b11361d-e93e-47a7-8d6d-0165caa79795.png",
      topics: ["Future of Work", "Human-AI Collaboration", "Workforce Development", "Job Transformation"],
      keyTakeaways: [
        "AI will augment human capabilities rather than simply replace jobs",
        "New job categories will emerge as AI technology advances",
        "Continuous learning and adaptation are essential for workforce resilience",
        "Human skills like creativity and emotional intelligence become more valuable"
      ]
    },
    "building-trust-ai": {
      title: "Building Trust in AI: Transparency and Explainability",
      description: "A technical discussion about making AI systems more transparent and explainable for business stakeholders.",
      fullDescription: "This technical deep dive focuses on the critical importance of transparency and explainability in AI systems. Our experts discuss the latest techniques and best practices for building AI systems that business stakeholders can understand and trust.",
      participants: [
        {
          name: "Dr. Maria Santos",
          role: "Explainable AI Researcher",
          company: "IBM Research",
          bio: "Dr. Maria Santos is a leading researcher in explainable AI, developing methods to make AI decision-making processes more interpretable.",
          image: "/lovable-uploads/760e5965-c5c5-4c2c-812d-42b5436a8245.png"
        },
        {
          name: "John Chen",
          role: "AI Platform Architect",
          company: "Amazon Web Services",
          bio: "John Chen designs and implements AI platforms with a focus on transparency and explainability for enterprise applications.",
          image: "/lovable-uploads/760e5965-c5c5-4c2c-812d-42b5436a8245.png"
        }
      ],
      date: "December 15, 2023",
      duration: "41 min",
      listens: "1,500+",
      type: "Technical Deep Dive",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      audioUrl: "#",
      transcriptUrl: "#",
      image: "/lovable-uploads/760e5965-c5c5-4c2c-812d-42b5436a8245.png",
      topics: ["Explainable AI", "Trust & Transparency", "Technical Implementation", "Model Interpretability"],
      keyTakeaways: [
        "Explainable AI is crucial for regulatory compliance and business acceptance",
        "Different stakeholders require different levels of explanation",
        "Trade-offs exist between model complexity and explainability",
        "Visualization tools can help make AI decisions more understandable"
      ]
    }
  };

  const conversation = conversationData[id as keyof typeof conversationData];

  if (!conversation) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-grey-900 mb-4">Conversation Not Found</h1>
            <p className="text-grey-600 mb-8">The conversation you're looking for doesn't exist.</p>
            <Link to="/conversations-on-ai" className="text-brand-green-600 hover:text-brand-green-700">
              ← Back to Conversations
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
        title={`${conversation.title} | Conversations on AI`}
        description={conversation.description}
        keywords={conversation.topics.join(', ')}
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Breadcrumb */}
        <section className="bg-grey-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/conversations-on-ai" 
              className="inline-flex items-center text-brand-green-600 hover:text-brand-green-700 text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Conversations
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-brand-green-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4 flex-wrap gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(conversation.type)}`}>
                    {conversation.type}
                  </span>
                  <div className="flex items-center text-grey-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {conversation.date}
                  </div>
                  <div className="flex items-center text-grey-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {conversation.duration}
                  </div>
                  <div className="flex items-center text-grey-500 text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    {conversation.listens} listens
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-grey-900 mb-6">
                  {conversation.title}
                </h1>
                
                <p className="text-xl text-grey-600 mb-8 leading-relaxed">
                  {conversation.fullDescription}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <button className="inline-flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200">
                    <Play className="h-5 w-5 mr-2" />
                    Watch Now
                  </button>
                  <button className="inline-flex items-center border-2 border-brand-green-500 text-brand-green-500 hover:bg-brand-green-50 px-6 py-3 rounded-xl font-semibold transition-all duration-200">
                    <Download className="h-5 w-5 mr-2" />
                    Download Audio
                  </button>
                  <button className="inline-flex items-center border-2 border-grey-300 text-grey-700 hover:bg-grey-50 px-6 py-3 rounded-xl font-semibold transition-all duration-200">
                    <Share2 className="h-5 w-5 mr-2" />
                    Share
                  </button>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-video bg-grey-100 flex items-center justify-center">
                    <iframe
                      src={conversation.videoUrl}
                      title={conversation.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-grey-900 mb-6">Topics Covered</h2>
            <div className="flex flex-wrap gap-3">
              {conversation.topics.map((topic) => (
                <span 
                  key={topic}
                  className="bg-brand-green-100 text-brand-green-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Participants */}
        <section className="py-12 bg-grey-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-grey-900 mb-8">Meet the Participants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conversation.participants.map((participant, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-green-100 rounded-full flex items-center justify-center mr-4">
                      <Mic className="h-6 w-6 text-brand-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-grey-900">{participant.name}</h3>
                      <p className="text-sm text-grey-600">{participant.role}</p>
                      <p className="text-sm text-brand-green-600">{participant.company}</p>
                    </div>
                  </div>
                  <p className="text-grey-600 text-sm">{participant.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-grey-900 mb-8">Key Takeaways</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {conversation.keyTakeaways.map((takeaway, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-grey-700">{takeaway}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ConversationDetail;