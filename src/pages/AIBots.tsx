
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, MessageSquare, Phone, Calendar, Target, ShoppingCart, Headphones, CheckCircle, Zap, Brain, Globe, Languages, BarChart3, Shield, Users, Star, Play, TrendingUp, Mic, Volume2, Database, Settings, Handshake } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIBots = () => {
  const botTypes = [
    {
      icon: Headphones,
      title: "AI Support Agent",
      description: "Streamline support without pre-built journeys",
      image: "https://www.haptik.ai/hs-fs/hubfs/01Support.gif?width=1200&height=666&name=01Support.gif",
      capabilities: ["Instant issue resolution", "24/7 availability", "Multi-language support", "Escalation protocols"],
      metrics: "95% first-contact resolution"
    },
    {
      icon: ShoppingCart,
      title: "AI Sales Agent",
      description: "Convert prospects into customers automatically",
      image: "https://www.haptik.ai/hs-fs/hubfs/02SalesAgent.gif?width=1815&height=666&name=02SalesAgent.gif",
      capabilities: ["Lead qualification", "Product recommendations", "Order processing", "Upselling strategies"],
      metrics: "40% increase in conversions"
    },
    {
      icon: Calendar,
      title: "AI Booking Agent",
      description: "Automate scheduling and appointment management",
      image: "https://www.haptik.ai/hs-fs/hubfs/03BookingAgent.gif?width=1815&height=666&name=03BookingAgent.gif",
      capabilities: ["Calendar integration", "Automated reminders", "Rescheduling", "Availability tracking"],
      metrics: "80% booking automation"
    },
    {
      icon: Target,
      title: "AI Lead Qualification Agent",
      description: "Identify and qualify high-value prospects",
      image: "https://www.haptik.ai/hs-fs/hubfs/04%20Lead%20Qualification%20Agent.gif?width=1815&height=666&name=04%20Lead%20Qualification%20Agent.gif",
      capabilities: ["Lead scoring", "Data enrichment", "Qualification criteria", "CRM integration"],
      metrics: "60% more qualified leads"
    }
  ];

  const voiceFeatures = [
    {
      icon: Mic,
      title: "Voice-First AI",
      description: "Natural conversations with 98% accuracy",
      image: "https://www.haptik.ai/hs-fs/hubfs/01%20Voice%20First%20AI.gif?width=900&height=441&name=01%20Voice%20First%20AI.gif",
      benefit: "Human-like interactions"
    },
    {
      icon: Headphones,
      title: "Effortless Assistance",
      description: "24/7 empathetic AI support",
      image: "https://www.haptik.ai/hs-fs/hubfs/02%20Effortless%20Assistance.gif?width=1815&height=1020&name=02%20Effortless%20Assistance.gif",
      benefit: "Always available help"
    },
    {
      icon: Phone,
      title: "Dynamic Call Routing",
      description: "Smart call handling and routing",
      image: "https://www.haptik.ai/hs-fs/hubfs/03%20Dynamic%20Call%20Routing.gif?width=1830&height=942&name=03%20Dynamic%20Call%20Routing.gif",
      benefit: "<3 ring pickup time"
    },
    {
      icon: Volume2,
      title: "Empathetic Listening",
      description: "Emotion-aware AI responses",
      image: "https://www.haptik.ai/hs-fs/hubfs/04%20An%20Empathetic%2c%20Intelligent%20Listener.gif?width=1815&height=1020&name=04%20An%20Empathetic%2c%20Intelligent%20Listener.gif",
      benefit: "85% satisfaction rate"
    }
  ];

  const aiCapabilities = [
    {
      icon: Brain,
      title: "Flexible Model Selection",
      description: "Choose from GPT, Llama, Claude, and more AI models",
      benefit: "Best fit for your needs"
    },
    {
      icon: Globe,
      title: "Omnichannel Deployment",
      description: "Web, Chat, Voice, WhatsApp, Instagram, Facebook",
      benefit: "Unified customer experience"
    },
    {
      icon: Languages,
      title: "100+ Languages",
      description: "Break language barriers with multilingual AI",
      benefit: "Global reach capabilities"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights and performance tracking",
      benefit: "Data-driven optimization"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption",
      benefit: "Bank-grade security"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-2 second response times",
      benefit: "Instant customer satisfaction"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-gradient-to-br from-brand-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-8">
              <Bot className="w-4 h-4 mr-2" />
              AI Agents That Actually Convert
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              <span className="text-grey-900">Specialized</span>
              <br />
              <span className="text-brand-green-500">AI Agents</span>
              <br />
              <span className="text-grey-900">for Every Business Need</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-grey-600 mb-12 leading-relaxed">
              From voice calls to chat support, our AI agents handle customer interactions with human-like intelligence and industry-specific knowledge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Get Custom AI Agent
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Bot Types Section */}
      <section className="pt-2 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              AI Agents Built for Results
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Each AI agent is specialized for specific business functions with proven track records
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {botTypes.map((bot, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-4 rounded-xl bg-brand-green-500/10">
                      <bot.icon className="h-8 w-8 text-brand-green-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-grey-900 group-hover:text-brand-green-600 transition-colors duration-300">
                        {bot.title}
                      </h3>
                      <div className="text-brand-green-500 font-semibold text-sm">
                        {bot.metrics}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <img src={bot.image} alt={bot.title} className="w-full rounded-lg" />
                </div>
                
                <p className="text-grey-600 mb-6 leading-relaxed">
                  {bot.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {bot.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-center text-grey-600">
                      <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice AI Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-6">
              <Mic className="w-4 h-4 mr-2" />
              Voice AI Technology
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Voice-First Customer Experience
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Handle phone calls and voice interactions with AI that sounds human and understands context
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {voiceFeatures.map((feature, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-grey-200 hover:border-brand-green-500/30">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-4 bg-brand-green-500/10 rounded-xl group-hover:bg-brand-green-500/20 transition-colors duration-300">
                      <feature.icon className="h-8 w-8 text-brand-green-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-grey-900 group-hover:text-brand-green-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <div className="text-brand-green-500 font-semibold text-sm">
                        {feature.benefit}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <img src={feature.image} alt={feature.title} className="w-full rounded-lg" />
                </div>
                
                <p className="text-grey-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Powerful features that adapt to your business needs and scale with your growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30 group">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-brand-green-500/10 rounded-xl group-hover:bg-brand-green-500/20 transition-colors duration-300">
                    <capability.icon className="h-8 w-8 text-brand-green-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-grey-900 group-hover:text-brand-green-600 transition-colors duration-300">
                      {capability.title}
                    </h3>
                    <div className="text-brand-green-500 font-medium text-sm">
                      {capability.benefit}
                    </div>
                  </div>
                </div>
                <p className="text-grey-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI + Human Collaboration */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
                  AI + Human: Perfect Partnership
                </h2>
                <p className="text-xl text-grey-600 mb-8">
                  Smart escalation ensures complex queries reach human agents with full context
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-brand-green-500/10 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-brand-green-500" />
                    </div>
                    <h3 className="text-lg font-bold text-grey-900 ml-4">Omnichannel Agent Inbox</h3>
                  </div>
                  <p className="text-grey-600">
                    Centralized support across all channels with seamless AI-to-human handoffs
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-brand-green-500/10 rounded-lg">
                      <Handshake className="h-6 w-6 text-brand-green-500" />
                    </div>
                    <h3 className="text-lg font-bold text-grey-900 ml-4">Context-Aware Handoffs</h3>
                  </div>
                  <p className="text-grey-600">
                    Human agents receive full conversation history and customer context
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-brand-green-500/10 rounded-lg">
                      <Settings className="h-6 w-6 text-brand-green-500" />
                    </div>
                    <h3 className="text-lg font-bold text-grey-900 ml-4">Flexible Integration</h3>
                  </div>
                  <p className="text-grey-600">
                    Works with your existing live chat tools and workflows
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src="https://www.haptik.ai/hs-fs/hubfs/03%20Omnichannel%20Agent.png?width=3000&name=03%20Omnichannel%20Agent.png" alt="AI-Human collaboration interface" className="w-full rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-green-500 to-brand-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for AI That Actually Works?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get a custom AI agent built for your business, deployed in 48 hours with guaranteed ROI tracking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Get Your AI Agent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIBots;
