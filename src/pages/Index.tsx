import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, CheckCircle, ArrowRight, Star, Users, Zap, Shield, MessageSquare, Phone, BarChart3, ChevronDown, ChevronRight, Bot, Sparkles, Globe, TrendingUp, Mic, Volume2, Headphones, Database, Brain, Languages, UserPlus, ShoppingCart, Calendar, Target, PieChart, LineChart, Settings, Handshake, Code, Cpu, Layout } from 'lucide-react';
import Navigation from '../components/Navigation';
import FloatingCTA from '../components/FloatingCTA';
import Footer from '../components/Footer';

const Index = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const stats = [{
    number: '500+',
    label: 'Active Clients'
  }, {
    number: '99.9%',
    label: 'Uptime SLA'
  }, {
    number: '50M+',
    label: 'Messages Processed'
  }, {
    number: '24/7',
    label: 'Support Available'
  }];

  const features = [{
    icon: MessageSquare,
    title: 'Multi-Channel AI',
    description: 'Deploy across WhatsApp, Instagram, Facebook, RCS, and web chat from one unified platform.',
    highlights: ['WhatsApp Business API', 'Instagram DM automation', 'Facebook Messenger bots', 'Web chat widgets']
  }, {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-2 second response times ensure your customers never wait for answers.',
    highlights: ['< 2s response time', 'Real-time processing', 'Instant query resolution', '24/7 availability']
  }, {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Deep insights into conversations, conversions, and customer journey optimization.',
    highlights: ['Conversation analytics', 'Conversion tracking', 'Customer insights', 'Performance metrics']
  }, {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with SOC 2 compliance and end-to-end encryption.',
    highlights: ['SOC 2 certified', 'End-to-end encryption', 'GDPR compliant', 'Data protection']
  }];

  const industries = [{
    name: 'Retail',
    metric: '↑40% Sales',
    icon: '🛍️'
  }, {
    name: 'Travel',
    metric: '↑60% Bookings',
    icon: '✈️'
  }, {
    name: 'Fintech',
    metric: '↑75% Leads',
    icon: '💳'
  }, {
    name: 'Healthcare',
    metric: '↑85% Efficiency',
    icon: '🏥'
  }, {
    name: 'Education',
    metric: '↑50% Engagement',
    icon: '📚'
  }, {
    name: 'Media',
    metric: '↑65% Retention',
    icon: '🎬'
  }];

  const testimonials = [{
    quote: "EverGrow's AI bots increased our WhatsApp conversions by 65%. The setup was seamless and support is outstanding.",
    author: "Sarah Chen",
    role: "Head of Digital Marketing",
    company: "RetailPlus",
    metric: "↑65% Conversion"
  }, {
    quote: "Our booking automation now handles 80% of reservations automatically. Customer satisfaction has never been higher.",
    author: "Marcus Rodriguez",
    role: "Operations Director",
    company: "TravelEase",
    metric: "↑80% Automation"
  }, {
    quote: "The multi-channel approach helped us reach customers where they are. ROI was positive within 2 weeks.",
    author: "Emily Watson",
    role: "Customer Success Lead",
    company: "FinanceForward",
    metric: "↑90% Satisfaction"
  }];

  const faqs = [{
    question: 'How quickly can we deploy AI bots?',
    answer: 'Most implementations go live within 24-48 hours. Our rapid deployment includes bot configuration, testing, and team training.'
  }, {
    question: 'What channels do your AI bots support?',
    answer: 'WhatsApp Business API, Instagram Direct, Facebook Messenger, RCS Business Messaging, and web chat - all from one dashboard.'
  }, {
    question: 'What\'s included in the free AI audit?',
    answer: 'Process analysis, ROI projections, channel recommendations, competitor analysis, and a custom implementation roadmap.'
  }, {
    question: 'How do you ensure data security?',
    answer: 'SOC 2 Type II compliance, end-to-end encryption, GDPR/CCPA adherence with enterprise-grade security protocols.'
  }];

  const voiceAgentFeatures = [{
    icon: Mic,
    title: "Natural Voice Conversations",
    description: "AI agents that understand context, emotion, and intent through advanced speech recognition.",
    metrics: "98% accuracy",
    visual: "sound-wave"
  }, {
    icon: Phone,
    title: "24/7 Phone Support",
    description: "Automated phone answering with intelligent call routing and escalation protocols.",
    metrics: "< 3 ring pickup",
    visual: "phone-interface"
  }, {
    icon: Headphones,
    title: "Empathetic AI Listening",
    description: "Voice AI that detects sentiment, adapts tone, and provides personalized responses.",
    metrics: "85% satisfaction",
    visual: "emotion-detection"
  }, {
    icon: Volume2,
    title: "Seamless Handoffs",
    description: "Smart routing to human agents with full conversation context and customer history.",
    metrics: "0 repeat info",
    visual: "handoff-flow"
  }];

  const aiAgentTypes = [{
    icon: Headphones,
    title: "AI Support Agent",
    description: "Streamline support without pre-built journeys",
    capabilities: ["Instant issue resolution", "24/7 availability", "Multi-language support", "Escalation protocols"],
    color: "blue"
  }, {
    icon: ShoppingCart,
    title: "AI Sales Agent",
    description: "Convert prospects into customers automatically",
    capabilities: ["Lead qualification", "Product recommendations", "Order processing", "Upselling strategies"],
    color: "green"
  }, {
    icon: Calendar,
    title: "AI Booking Agent",
    description: "Automate scheduling and appointment management",
    capabilities: ["Calendar integration", "Automated reminders", "Rescheduling", "Availability tracking"],
    color: "purple"
  }, {
    icon: Target,
    title: "AI Lead Qualification Agent",
    description: "Identify and qualify high-value prospects",
    capabilities: ["Lead scoring", "Data enrichment", "Qualification criteria", "CRM integration"],
    color: "orange"
  }];

  const aiFeatures = [{
    icon: Brain,
    title: "Flexible Model Selection",
    description: "Experiment with leading AI models like GPT, Llama, and Claude to find the best fit for your business needs",
    benefit: "Choose the perfect AI model"
  }, {
    icon: Globe,
    title: "Omnichannel Engagement",
    description: "Deploy your AI Agent across Web, Chat, Voice, and more—effortlessly reaching customers on their preferred platforms",
    benefit: "Unified customer experience"
  }, {
    icon: Languages,
    title: "Multilingual Support",
    description: "Break language barriers with AI that supports 100+ languages, ensuring seamless global communication",
    benefit: "Global reach capabilities"
  }];

  return <div className="min-h-screen bg-white">
      <Navigation />
      <FloatingCTA />
      
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Sales & Support Agents Live in 48 Hours
            </div>
            
            {/* Main Headline - Updated per Pravin's feedback */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              <span className="text-grey-900">AI-Powered Sales &</span>
              <br />
              <span className="text-brand-green-500">Support Agents</span>
              <br />
              <span className="text-grey-900">That Boost Conversions</span>
            </h1>
            
            {/* Subheadline - Updated color for better readability */}
            <p className="text-xl sm:text-2xl text-grey-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Deploy custom AI agents for your industry — drive leads, engage customers 24/7, and see results in days, not months.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <Play className="mr-2 h-5 w-5" />
                See AI in Action
              </button>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-green-500 text-brand-green-500 hover:bg-brand-green-500 hover:text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105">
                Book Free AI Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            {/* Enhanced Trust Indicators */}
            <div className="mb-8">
              <p className="text-sm text-grey-500 mb-4">Trusted by leading brands across industries</p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">J</span>
                  </div>
                  <span className="text-sm font-medium text-grey-600">Jio Haptik Partner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">V</span>
                  </div>
                  <span className="text-sm font-medium text-grey-600">Vibgyor</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">E</span>
                  </div>
                  <span className="text-sm font-medium text-grey-600">Everbright</span>
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-grey-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
                Live in 48 hours
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
                ROI tracked from Day 1
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2" />
                Industry-specific AI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Quick Stats Section */}
      <section className="py-16 bg-brand-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                5000+
              </div>
              <div className="text-green-100">Monthly Leads Handled</div>
            </div>
            <div className="text-white">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                30%
              </div>
              <div className="text-green-100">Boost in Conversions</div>
            </div>
            <div className="text-white">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                35%
              </div>
              <div className="text-green-100">Cost Savings</div>
            </div>
            <div className="text-white">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                450+
              </div>
              <div className="text-green-100">Support Tickets Resolved</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/case-studies" className="inline-flex items-center text-white hover:text-green-100 font-medium">
              See full results
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-grey-700 mb-4">Trusted by enterprises worldwide</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
            <img src="/lovable-uploads/9ddce30e-8318-49f1-9d10-de0dcae149c3.png" alt="Security Compliance Badges" className="h-16 object-contain" />
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-brand-green-500" />
              <span className="text-sm font-medium text-grey-600">SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-brand-green-500" />
              <span className="text-sm font-medium text-grey-600">99.9% Uptime SLA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-grey-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => <div key={index} className="text-white">
                <div className="text-3xl lg:text-4xl font-bold text-brand-green-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-grey-300">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Track Insights That Matter
            </h2>
            <p className="text-xl text-grey-600 max-w-4xl mx-auto">
              Get custom dashboards that offer a comprehensive view of your agents' performance to optimize resources and streamline customer support
            </p>
          </div>

          {/* Dashboard Visualization */}
          <div className="mb-16">
            <div className="relative max-w-6xl mx-auto">
              
              
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-brand-green-500/10 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-brand-green-500" />
                </div>
                <h3 className="text-xl font-bold text-grey-900 ml-4">Identify Key Trends</h3>
              </div>
              <div className="mb-6">
                <img src="https://www.haptik.ai/hs-fs/hubfs/01.png?width=1121&height=1052&name=01.png" alt="Identify Key Trends visualization" className="w-full rounded-lg" />
              </div>
              <p className="text-grey-600 leading-relaxed">
                Discover the most common questions your users ask and gain a deeper understanding of their needs
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-brand-green-500/10 rounded-xl">
                  <BarChart3 className="h-8 w-8 text-brand-green-500" />
                </div>
                <h3 className="text-xl font-bold text-grey-900 ml-4">Stay on Top of Metrics</h3>
              </div>
              <div className="mb-6">
                <img src="https://www.haptik.ai/hs-fs/hubfs/02.png?width=1121&height=1052&name=02.png" alt="Stay on Top of Metrics visualization" className="w-full rounded-lg" />
              </div>
              <p className="text-grey-600 leading-relaxed">
                From first-time resolution to customer satisfaction and NPS, have complete visibility into metrics that matter most
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-brand-green-500/10 rounded-xl">
                  <Brain className="h-8 w-8 text-brand-green-500" />
                </div>
                <h3 className="text-xl font-bold text-grey-900 ml-4">Insights Agent</h3>
              </div>
              <div className="mb-6">
                <img src="https://www.haptik.ai/hs-fs/hubfs/03.png?width=1122&height=1052&name=03.png" alt="Insights Agent visualization" className="w-full rounded-lg" />
              </div>
              <p className="text-grey-600 leading-relaxed">
                Automate insights into agent performance, user sentiment, and SOP compliance for enhanced operations
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              View Analytics Demo
              <BarChart3 className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* AI Agent Builder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Your AI Agent Builder for High-Impact Use Cases
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Flow diagram layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              
              {/* AI Agent Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-blue-600">AI Agent</h3>
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                </div>
                <p className="text-grey-600 mb-6">Outline the Agent's Scope</p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3" />
                    <span className="text-grey-700">Purpose</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3" />
                    <span className="text-grey-700">Goal</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-green-500 mr-3" />
                    <span className="text-grey-700">Functionality</span>
                  </div>
                </div>

                {/* Arrow pointing right */}
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-grey-400" />
                </div>
              </div>

              {/* Tools Section */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg relative">
                <h3 className="text-2xl font-bold text-brand-green-600 mb-6">Tools</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <Code className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-grey-700 font-medium">Make API Calls</span>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Cpu className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-grey-700 font-medium">Execute Custom Code</span>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-grey-700 font-medium">Prompt any LLM</span>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Layout className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-grey-700 font-medium">Compose UI Elements</span>
                  </div>
                </div>

                {/* Arrow pointing right */}
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-grey-400" />
                </div>
              </div>

              {/* Instructions Section */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-purple-600 mb-6">Instructions</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-grey-600 text-center">
                      Define a set of instructions for the AI Agent to follow in order to complete the task
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-grey-600 text-sm text-center">How to use the Tools</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-grey-600 text-sm text-center">Steps to complete the task</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-grey-600 text-sm text-center">Any specific rules</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Build Your AI Agent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* AI Agent Types Section - Enhanced with Haptik Images */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-6">
              <Bot className="w-4 h-4 mr-2" />
              Watch Our AI Agents in Action
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Specialized AI Agents for Every Need
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Deploy intelligent agents that understand your business context and deliver personalized experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-4 rounded-xl bg-blue-500/10">
                    <Headphones className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-grey-900 group-hover:text-brand-green-600 transition-colors duration-300">
                      AI Support Agent
                    </h3>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-grey-400 group-hover:text-brand-green-500 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              
              <div className="mb-6">
                <img src="https://www.haptik.ai/hs-fs/hubfs/01Support.gif?width=1200&height=666&name=01Support.gif" alt="AI Support Agent handling customer queries" className="w-full rounded-lg" />
              </div>
              
              <p className="text-grey-600 mb-6 leading-relaxed">
                Streamline support without pre-built journeys
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {["Instant issue resolution", "24/7 availability", "Multi-language support", "Escalation protocols"].map((capability, idx) => <div key={idx} className="flex items-center text-grey-600">
                    <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{capability}</span>
                  </div>)}
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-4 rounded-xl bg-brand-green-500/10">
                    <ShoppingCart className="h-8 w-8 text-brand-green-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-grey-900 group-hover:text-brand-green-600 transition-colors duration-300">
                      AI Sales Agent
                    </h3>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-grey-400 group-hover:text-brand-green-500 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              
              <div className="mb-6">
                <img src="https://www.haptik.ai/hs-fs/hubfs/02SalesAgent.gif?width=1815&height=666&name=02SalesAgent.gif" alt="AI Sales Agent converting prospects into customers" className="w-full rounded-lg" />
              </div>
              
              <p className="text-grey-600 mb-6 leading-relaxed">
                Convert prospects into customers automatically
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {["Lead qualification", "Product recommendations", "Order processing", "Upselling strategies"].map((capability, idx) => <div key={idx} className="flex items-center text-grey-600">
                    <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{capability}</span>
                  </div>)}
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-4 rounded-xl bg-purple-500/10">
                    <Calendar className="h-8 w-8 text-purple-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-grey-900 group-hover:text-brand-green-600 transition-colors duration-300">
                      AI Booking Agent
                    </h3>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-grey-400 group-hover:text-brand-green-500 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              
              <div className="mb-6">
                <img src="https://www.haptik.ai/hs-fs/hubfs/03BookingAgent.gif?width=1815&height=666&name=03BookingAgent.gif" alt="AI Booking Agent managing appointments and scheduling" className="w-full rounded-lg" />
              </div>
              
              <p className="text-grey-600 mb-6 leading-relaxed">
                Automate scheduling and appointment management
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {["Calendar integration", "Automated reminders", "Rescheduling", "Availability tracking"].map((capability, idx) => <div key={idx} className="flex items-center text-grey-600">
                    <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{capability}</span>
                  </div>)}
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-4 rounded-xl bg-orange-500/10">
                    <Target className="h-8 w-8 text-orange-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-grey-900 group-hover:text-brand-green-600 transition-colors duration-300">
                      AI Lead Qualification Agent
                    </h3>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-grey-400 group-hover:text-brand-green-500 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              
              <div className="mb-6">
                <img src="https://www.haptik.ai/hs-fs/hubfs/04%20Lead%20Qualification%20Agent.gif?width=1815&height=666&name=04%20Lead%20Qualification%20Agent.gif" alt="AI Lead Qualification Agent identifying high-value prospects" className="w-full rounded-lg" />
              </div>
              
              <p className="text-grey-600 mb-6 leading-relaxed">
                Identify and qualify high-value prospects
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {["Lead scoring", "Data enrichment", "Qualification criteria", "CRM integration"].map((capability, idx) => <div key={idx} className="flex items-center text-grey-600">
                    <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{capability}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Voice Agents Section - Enhanced with Haptik Images */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-6">
              <Mic className="w-4 h-4 mr-2" />
              AI Voice Agents
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Voice-First Customer Experience
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto mb-12">
              Handle phone calls, voice queries, and complex conversations with AI agents that sound human and understand context.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="group relative bg-gradient-to-br from-white to-grey-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-grey-200 hover:border-brand-green-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-4 bg-brand-green-500/10 rounded-xl group-hover:bg-brand-green-500/20 transition-colors duration-300">
                      <Mic className="h-8 w-8 text-brand-green-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-grey-900 group-hover:text-brand-green-600 transition-colors duration-300">
                        Natural Voice Conversations
                      </h3>
                      <div className="text-brand-green-500 font-semibold text-sm">
                        98% accuracy
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <img src="https://www.haptik.ai/hs-fs/hubfs/01%20Voice%20First%20AI.gif?width=900&height=441&name=01%20Voice%20First%20AI.gif" alt="Voice-first AI conversations" className="w-full rounded-lg" />
                </div>
                
                <p className="text-grey-600 leading-relaxed mb-6">
                  AI agents that understand context, emotion, and intent through advanced speech recognition.
                </p>
                
                <div className="flex items-center text-brand-green-500 font-medium group-hover:text-brand-green-600 transition-colors duration-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white to-grey-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-grey-200 hover:border-brand-green-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-4 bg-brand-green-500/10 rounded-xl group-hover:bg-brand-green-500/20 transition-colors duration-300">
                      <Headphones className="h-8 w-8 text-brand-green-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-grey-900 group-hover:text-brand-green-600 transition-colors duration-300">
                        Effortless Assistance
                      </h3>
                      <div className="text-brand-green-500 font-semibold text-sm">
                        24/7 availability
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <img src="https://www.haptik.ai/hs-fs/hubfs/02%20Effortless%20Assistance.gif?width=1815&height=1020&name=02%20Effortless%20Assistance.gif" alt="Effortless AI assistance" className="w-full rounded-lg" />
                </div>
                
                <p className="text-grey-600 leading-relaxed mb-6">
                  Voice AI that detects sentiment, adapts tone, and provides personalized responses with empathy.
                </p>
                
                <div className="flex items-center text-brand-green-500 font-medium group-hover:text-brand-green-600 transition-colors duration-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white to-grey-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-grey-200 hover:border-brand-green-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-4 bg-brand-green-500/10 rounded-xl group-hover:bg-brand-green-500/20 transition-colors duration-300">
                      <Phone className="h-8 w-8 text-brand-green-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-grey-900 group-hover:text-brand-green-600 transition-colors duration-300">
                        Dynamic Call Routing
                      </h3>
                      <div className="text-brand-green-500 font-semibold text-sm">
                        &lt; 3 ring pickup
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <img src="https://www.haptik.ai/hs-fs/hubfs/03%20Dynamic%20Call%20Routing.gif?width=1830&height=942&name=03%20Dynamic%20Call%20Routing.gif" alt="Dynamic call routing system" className="w-full rounded-lg" />
                </div>
                
                <p className="text-grey-600 leading-relaxed mb-6">
                  Automated phone answering with intelligent call routing and escalation protocols.
                </p>
                
                <div className="flex items-center text-brand-green-500 font-medium group-hover:text-brand-green-600 transition-colors duration-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white to-grey-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-grey-200 hover:border-brand-green-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-4 bg-brand-green-500/10 rounded-xl group-hover:bg-brand-green-500/20 transition-colors duration-300">
                      <Volume2 className="h-8 w-8 text-brand-green-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-grey-900 group-hover:text-brand-green-600 transition-colors duration-300">
                        Empathetic AI Listening
                      </h3>
                      <div className="text-brand-green-500 font-semibold text-sm">
                        85% satisfaction
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <img src="https://www.haptik.ai/hs-fs/hubfs/04%20An%20Empathetic%2c%20Intelligent%20Listener.gif?width=1815&height=1020&name=04%20An%20Empathetic%2c%20Intelligent%20Listener.gif" alt="Empathetic AI listening and responding" className="w-full rounded-lg" />
                </div>
                
                <p className="text-grey-600 leading-relaxed mb-6">
                  Smart routing to human agents with full conversation context and customer history.
                </p>
                
                <div className="flex items-center text-brand-green-500 font-medium group-hover:text-brand-green-600 transition-colors duration-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Voice Demo CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-brand-green-500 to-brand-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Experience Voice AI in Action</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Call our AI voice agent demo line or book a personalized session to see how voice automation can transform your customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+1234567890" className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-green-500 font-semibold rounded-lg hover:bg-grey-50 transition-colors duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Demo Line
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-brand-green-500 font-semibold rounded-lg transition-colors duration-300">
                  Book Live Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              See AI Agents in Action
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Watch how our AI agents handle real customer conversations across multiple channels
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-grey-900 to-grey-800 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-video bg-grey-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                <button className="flex items-center justify-center w-20 h-20 bg-brand-green-500 hover:bg-brand-green-600 rounded-full transition-colors duration-300 group">
                  <Play className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30 group">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-brand-green-500/10 rounded-xl group-hover:bg-brand-green-500/20 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-brand-green-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-grey-900 group-hover:text-brand-green-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <div className="text-brand-green-500 font-medium text-sm">
                      {feature.benefit}
                    </div>
                  </div>
                </div>
                <p className="text-grey-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* AI + Human Collaboration Section - Enhanced */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              AI + Human: The Best of Both Worlds
            </h2>
            <p className="text-xl text-grey-600 max-w-4xl mx-auto">
              Empower your AI agents to collaborate with their human counterparts for high-touch scenarios with flexible live chat solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-brand-green-500/10 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-brand-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-grey-900 ml-4">Omnichannel Agent Inbox</h3>
                </div>
                <p className="text-grey-600 leading-relaxed">
                  Centralize agent support so no interaction is ever missed. Help agents track interactions across channels and jump in to resolve queries faster
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-brand-green-500/10 rounded-lg">
                    <Handshake className="h-6 w-6 text-brand-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-grey-900 ml-4">Seamless Handoff to Human Agents</h3>
                </div>
                <p className="text-grey-600 leading-relaxed">
                  Smart escalation with full conversation context ensures customers never repeat themselves
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-brand-green-500/10 rounded-lg">
                    <Settings className="h-6 w-6 text-brand-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-grey-900 ml-4">Work with Any Live Chat Tool</h3>
                </div>
                <p className="text-grey-600 leading-relaxed">
                  Integrate with your existing tools and workflows without disrupting your current operations
                </p>
              </div>
            </div>

            <div className="relative">
              <img src="https://www.haptik.ai/hs-fs/hubfs/03%20Omnichannel%20Agent.png?width=3000&name=03%20Omnichannel%20Agent.png" alt="Omnichannel agent collaboration interface" className="w-full rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-brand-green-500 to-brand-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Experience Smart Agent Chat</h3>
              <p className="text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                See how AI and human agents work together to deliver exceptional customer experiences across all channels
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-500 font-semibold rounded-lg hover:bg-grey-50 transition-colors duration-300">
                Explore Smart Agent Chat
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-grey-900 mb-4">Trusted Technology Partners</h3>
            <p className="text-grey-600">Certified partnerships with leading platforms</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-70">
            <img src="/lovable-uploads/665274b0-11f1-46f6-9c20-29a4bc35a12b.png" alt="Botpress Certified Partner" className="h-20 object-contain" />
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-lg font-semibold text-grey-700">Meta Partner</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-lg font-semibold text-grey-700">HubSpot Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Built for Every Industry
            </h2>
            <p className="text-xl text-grey-600">
              Specialized solutions that understand your business
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => <div key={index} className="bg-white border-2 border-grey-200 hover:border-brand-green-500 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer group">
                <div className="text-3xl mb-4">{industry.icon}</div>
                <h3 className="font-semibold text-grey-900 mb-2 group-hover:text-brand-green-500 transition-colors">{industry.name}</h3>
                <div className="text-sm font-medium text-brand-green-500">{industry.metric}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-grey-600">
              Real results from businesses like yours
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-grey-200 hover:border-brand-green-500/30">
                <div className="text-2xl font-bold text-brand-green-500 mb-4">
                  {testimonial.metric}
                </div>
                <blockquote className="text-grey-700 text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-green-500/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-brand-green-500" />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-grey-900">{testimonial.author}</div>
                    <div className="text-grey-600 text-sm">{testimonial.role}</div>
                    <div className="text-brand-green-500 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-green-500 to-brand-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get a free AI audit and see exactly how voice and chat agents will boost your conversions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Get Free AI Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brand-green-500 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105">
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-grey-600">
              Everything you need to know about our AI solutions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => <div key={index} className="bg-grey-50 rounded-xl overflow-hidden border border-grey-200 hover:border-brand-green-500/30 transition-colors duration-300">
                <button onClick={() => setExpandedFaq(expandedFaq === index ? null : index)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-grey-100 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-grey-900">
                    {faq.question}
                  </h3>
                  <ChevronDown className={`h-5 w-5 text-brand-green-500 transform transition-transform duration-200 ${expandedFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === index && <div className="px-6 pb-4">
                    <p className="text-grey-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>}
              </div>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};

export default Index;
