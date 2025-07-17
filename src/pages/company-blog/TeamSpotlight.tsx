import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';

const TeamSpotlight = () => {
  return (
    <>
      <SEO 
        title="Team Spotlight: Meet Our AI Research Division"
        description="Get to know the brilliant minds behind our AI innovations and learn about their groundbreaking research in conversational AI."
        keywords="AI research, team spotlight, machine learning, AI innovation, research team"
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-br from-brand-green-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/company-blog" 
              className="inline-flex items-center text-brand-green-600 hover:text-brand-green-700 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Company Blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-brand-green-100 text-brand-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Team & Culture
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-grey-900 mb-6">
              Team Spotlight: Meet Our AI Research Division
            </h1>
            
            <div className="flex items-center mb-8 text-grey-600">
              <div className="flex items-center mr-6">
                <User className="h-5 w-5 mr-2" />
                <span className="font-medium">Jennifer Park</span>
                <span className="ml-2 text-sm">Head of People</span>
              </div>
              <div className="flex items-center mr-6">
                <Calendar className="h-5 w-5 mr-2" />
                <span>November 28, 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>5 min read</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-grey-600 font-medium">Share:</span>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-grey-100 hover:bg-grey-200 transition-colors">
                  <Twitter className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-full bg-grey-100 hover:bg-grey-200 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-full bg-grey-100 hover:bg-grey-200 transition-colors">
                  <Facebook className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
              src="/lovable-uploads/8f80e73a-3604-4714-ad8c-85d9c8425fc4.png" 
              alt="AI Research Team"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-grey-600 mb-8">
                Behind every breakthrough in AI agent technology is a team of brilliant researchers pushing the boundaries of what's possible. Today, we're excited to introduce you to the minds behind EverGrowDigital's AI innovations and share some of the groundbreaking work happening in our research labs.
              </p>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Meet the Team</h2>
              <p className="text-grey-700 mb-6">
                Our AI Research Division brings together experts from diverse backgrounds – machine learning engineers, cognitive scientists, linguists, and ethicists – all united by a shared passion for advancing conversational AI.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-brand-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-grey-900 mb-3">Dr. Amanda Chen - Chief Research Officer</h3>
                  <p className="text-grey-700 mb-3">
                    Former Stanford professor with 15 years of experience in natural language processing. Amanda leads our research strategy and oversees our publication efforts in top-tier AI conferences.
                  </p>
                  <p className="text-sm text-grey-600">
                    <strong>Current Focus:</strong> Developing more empathetic AI agents that can understand emotional context and respond appropriately.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-grey-900 mb-3">Dr. James Wright - Senior ML Engineer</h3>
                  <p className="text-grey-700 mb-3">
                    Previously at Google DeepMind, James specializes in large language models and reinforcement learning. He's passionate about making AI more efficient and accessible.
                  </p>
                  <p className="text-sm text-grey-600">
                    <strong>Current Focus:</strong> Optimizing AI models for real-time conversation while maintaining high accuracy and low latency.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-grey-900 mb-3">Dr. Maria Santos - Cognitive Scientist</h3>
                  <p className="text-grey-700 mb-3">
                    With a background in cognitive psychology and human-computer interaction, Maria ensures our AI agents understand and respond to human behavior patterns naturally.
                  </p>
                  <p className="text-sm text-grey-600">
                    <strong>Current Focus:</strong> Researching how AI agents can better understand context and maintain coherent long-term conversations.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-grey-900 mb-3">Dr. Kevin Liu - Multimodal AI Researcher</h3>
                  <p className="text-grey-700 mb-3">
                    Kevin focuses on integrating text, voice, and visual understanding into our AI agents. His work enables more natural, human-like interactions across multiple channels.
                  </p>
                  <p className="text-sm text-grey-600">
                    <strong>Current Focus:</strong> Developing AI agents that can understand and generate responses based on images, voice tone, and contextual cues.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Current Research Projects</h2>
              <p className="text-grey-700 mb-6">
                Our research team is working on several exciting projects that will shape the future of AI agents:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-brand-green-500 pl-6">
                  <h3 className="font-semibold text-grey-900 mb-2">Project Phoenix: Emotional Intelligence in AI</h3>
                  <p className="text-grey-700">
                    Developing AI agents that can recognize emotional states through text and voice patterns, enabling more empathetic and appropriate responses in customer service scenarios.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-semibold text-grey-900 mb-2">Project Babel: Multilingual Understanding</h3>
                  <p className="text-grey-700">
                    Creating AI agents that can seamlessly switch between languages and understand cultural nuances, making global customer service more effective and inclusive.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="font-semibold text-grey-900 mb-2">Project Mirror: Personalization Engine</h3>
                  <p className="text-grey-700">
                    Building AI agents that learn and adapt to individual customer preferences over time, creating truly personalized experiences at scale.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="font-semibold text-grey-900 mb-2">Project Synthesis: Multimodal Integration</h3>
                  <p className="text-grey-700">
                    Combining text, voice, and visual processing to create AI agents that can understand and respond to complex, multi-format customer inquiries.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Recent Breakthroughs</h2>
              <p className="text-grey-700 mb-6">
                Our team's hard work has led to several significant achievements:
              </p>
              
              <ul className="list-disc list-inside text-grey-700 mb-6 space-y-2">
                <li><strong>95% Accuracy in Intent Recognition:</strong> Our latest models can understand customer intent with industry-leading precision</li>
                <li><strong>50% Reduction in Response Time:</strong> Optimized algorithms now generate responses 2x faster than our previous models</li>
                <li><strong>Multi-turn Conversation Mastery:</strong> AI agents can now maintain context across complex, multi-step conversations</li>
                <li><strong>Real-time Learning:</strong> Our agents continuously improve from every interaction without compromising privacy</li>
                <li><strong>Cross-Platform Consistency:</strong> Unified AI personality across web, mobile, and voice channels</li>
              </ul>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Published Research</h2>
              <p className="text-grey-700 mb-6">
                Our commitment to advancing the field extends beyond our product. Recent publications include:
              </p>
              
              <div className="bg-grey-50 p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-grey-900 mb-2">Recent Publications</h3>
                <ul className="text-grey-700 space-y-2">
                  <li>• "Empathetic AI: Teaching Machines to Understand Human Emotions" - NeurIPS 2023</li>
                  <li>• "Efficient Large Language Models for Real-time Conversation" - ICML 2023</li>
                  <li>• "Cross-cultural AI: Building Inclusive Conversational Agents" - CHI 2023</li>
                  <li>• "Privacy-Preserving Personalization in AI Agents" - ICLR 2023</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">A Day in the Research Lab</h2>
              <p className="text-grey-700 mb-6">
                Curious about what our researchers do daily? Here's a glimpse into their world:
              </p>
              
              <div className="bg-brand-green-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold text-grey-900 mb-3">Morning: Experimentation & Model Training</h3>
                <p className="text-grey-700">
                  The team starts by reviewing overnight experiment results, fine-tuning models, and setting up new training runs. Coffee and animated discussions about the latest papers are standard.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold text-grey-900 mb-3">Afternoon: Collaborative Problem Solving</h3>
                <p className="text-grey-700">
                  Cross-functional meetings with product and engineering teams to translate research breakthroughs into practical features. The whiteboard is always full of equations and diagrams.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold text-grey-900 mb-3">Evening: Paper Writing & Community Engagement</h3>
                <p className="text-grey-700">
                  Documenting findings, preparing conference submissions, and engaging with the broader AI research community through forums and peer reviews.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Join Our Research Mission</h2>
              <p className="text-grey-700 mb-6">
                We're always looking for brilliant minds to join our research team. Whether you're a seasoned researcher or a recent PhD graduate, we'd love to explore how you can contribute to the future of conversational AI.
              </p>

              <div className="bg-grey-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-grey-900 mb-3">Ready to Shape the Future of AI?</h3>
                <p className="text-grey-700 mb-4">
                  Explore our current research opportunities and join a team that's pushing the boundaries of what's possible with AI.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
                >
                  View Research Careers
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default TeamSpotlight;