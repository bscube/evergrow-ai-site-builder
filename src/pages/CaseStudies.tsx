
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, TrendingUp, Clock, Users, DollarSign, CheckCircle, Star, Target, Zap, BarChart3, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const CaseStudies = () => {
  const featuredCaseStudies = [
    {
      title: "Fashion Forward: 400% ROI with AI Customer Service",
      company: "StyleHub Fashion",
      industry: "Retail & E-commerce",
      challenge: "Managing 10,000+ daily customer inquiries across multiple channels during peak seasons with limited support staff",
      solution: "Implemented EverGrow's AI agents across WhatsApp, website chat, and Facebook Messenger with intelligent routing and multilingual support",
      results: [
        "400% return on investment within 6 months",
        "90% reduction in average response time (from 4 hours to 24 minutes)",
        "85% of customer queries resolved automatically",
        "45% increase in customer satisfaction scores (from 3.2 to 4.6/5)",
        "60% reduction in support team workload",
        "35% increase in conversion rates from chat interactions"
      ],
      metrics: {
        timeframe: "6 months",
        teamSize: "Reduced from 25 to 15 agents",
        queriesHandled: "10,000+ daily",
        languages: "12 languages supported"
      },
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
      testimonial: {
        quote: "EverGrow transformed our customer service from a cost center into a revenue driver. The AI handles routine queries flawlessly, letting our team focus on complex customer needs.",
        author: "Sarah Chen",
        role: "Head of Customer Experience, StyleHub Fashion"
      }
    },
    {
      title: "Banking Revolution: 24/7 Compliance-Ready Support",
      company: "NeoBank Digital",
      industry: "Financial Services",
      challenge: "Providing 24/7 customer support while maintaining strict financial compliance and handling sensitive account information",
      solution: "Deployed AI banking agents with advanced security protocols, KYC integration, and real-time fraud detection capabilities",
      results: [
        "99.8% compliance accuracy with financial regulations",
        "24/7 availability without additional staffing costs",
        "70% reduction in call center volume",
        "50% faster account opening process",
        "95% customer satisfaction with AI interactions",
        "40% reduction in fraud-related losses"
      ],
      metrics: {
        timeframe: "12 months",
        transactions: "500,000+ monthly",
        uptime: "99.99% availability",
        compliance: "Zero regulatory violations"
      },
      image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800&h=500&fit=crop",
      testimonial: {
        quote: "The AI understands complex banking regulations better than most human agents. It's revolutionized how we serve our customers while staying compliant.",
        author: "Michael Rodriguez",
        role: "Chief Technology Officer, NeoBank Digital"
      }
    },
    {
      title: "Healthcare Excellence: 50% Fewer No-Shows",
      company: "MediCare Network",
      industry: "Healthcare",
      challenge: "High appointment no-show rates, overwhelming phone lines, and patients struggling to access care information",
      solution: "Integrated AI health assistants for appointment scheduling, reminders, prescription refills, and basic health inquiries",
      results: [
        "50% reduction in appointment no-shows",
        "80% of routine inquiries handled automatically",
        "30% increase in patient satisfaction scores",
        "25% improvement in appointment booking efficiency",
        "60% reduction in phone wait times",
        "40% increase in prescription refill compliance"
      ],
      metrics: {
        timeframe: "9 months",
        patients: "50,000+ active patients",
        appointments: "2,000+ monthly bookings",
        languages: "8 languages supported"
      },
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop",
      testimonial: {
        quote: "Our patients love the convenience of 24/7 AI support. It's improved care access while reducing our administrative burden significantly.",
        author: "Dr. Emily Watson",
        role: "Chief Medical Officer, MediCare Network"
      }
    }
  ];

  const industrySpotlights = [
    {
      industry: "E-commerce & Retail",
      companies: "150+ businesses",
      avgROI: "320%",
      topUseCase: "Product recommendations & order support",
      icon: Building2,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      industry: "Financial Services",
      companies: "75+ institutions",
      avgROI: "280%",
      topUseCase: "Account inquiries & fraud prevention",
      icon: DollarSign,
      color: "bg-green-500/10 text-green-600"
    },
    {
      industry: "Healthcare",
      companies: "90+ providers",
      avgROI: "250%",
      topUseCase: "Appointment scheduling & patient care",
      icon: Users,
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      industry: "Travel & Hospitality",
      companies: "60+ companies",
      avgROI: "290%",
      topUseCase: "Booking management & travel support",
      icon: Target,
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  const successMetrics = [
    {
      metric: "Average ROI",
      value: "315%",
      description: "Return on investment within first year",
      icon: TrendingUp
    },
    {
      metric: "Response Time",
      value: "< 30 sec",
      description: "Average customer response time",
      icon: Clock
    },
    {
      metric: "Automation Rate",
      value: "78%",
      description: "Queries resolved without human intervention",
      icon: Zap
    },
    {
      metric: "Customer Satisfaction",
      value: "4.7/5",
      description: "Average rating across all implementations",
      icon: Star
    }
  ];

  const implementationSteps = [
    {
      step: "1",
      title: "Discovery & Assessment",
      description: "We analyze your current processes, pain points, and goals to create a customized AI strategy.",
      duration: "1-2 weeks"
    },
    {
      step: "2",
      title: "Custom AI Training",
      description: "Your AI agents are trained on your specific business data, policies, and brand voice.",
      duration: "2-3 weeks"
    },
    {
      step: "3",
      title: "Integration & Testing",
      description: "Seamless integration with your existing systems followed by comprehensive testing.",
      duration: "1-2 weeks"
    },
    {
      step: "4",
      title: "Launch & Optimization",
      description: "Go-live with continuous monitoring and optimization based on real performance data.",
      duration: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Case Studies - Real Success Stories with AI Automation"
        description="Discover how businesses across industries achieve remarkable results with EverGrow's AI agents. See detailed case studies, metrics, and testimonials."
        keywords="AI case studies, customer success stories, AI automation results, business transformation, ROI"
        canonicalUrl="/case-studies"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8 text-grey-900">
              Real Success <span className="text-brand-green-500">Stories</span>
            </h1>
            <p className="text-xl text-grey-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover how businesses across industries are transforming their customer experience and achieving remarkable ROI with intelligent AI automation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-grey-600">
              <div className="flex items-center">
                <Building2 className="h-4 w-4 mr-2 text-brand-green-500" />
                300+ Success Stories
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2 text-brand-green-500" />
                Average 315% ROI
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2 text-brand-green-500" />
                4.7/5 Customer Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green-500/10 rounded-full mb-4">
                  <metric.icon className="h-8 w-8 text-brand-green-500" />
                </div>
                <div className="text-3xl font-bold text-grey-900 mb-2">{metric.value}</div>
                <div className="text-sm font-semibold text-grey-900 mb-1">{metric.metric}</div>
                <div className="text-sm text-grey-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Featured Case Studies */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
              Featured <span className="text-brand-green-500">Case Studies</span>
            </h2>
            <p className="text-xl text-grey-700 max-w-3xl mx-auto">
              Deep dive into how leading companies transformed their operations with AI automation
            </p>
          </div>

          <div className="space-y-16">
            {featuredCaseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <span className="px-4 py-2 bg-brand-green-500/10 text-brand-green-600 text-sm font-semibold rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-grey-900 mb-4">
                      {study.title}
                    </h3>
                    <p className="text-lg text-grey-700 mb-6">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-lg text-grey-700 mb-8">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-grey-900 mb-4">Key Results:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-brand-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-grey-700 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-grey-50 rounded-xl p-6 mb-8">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-grey-900">{study.metrics.timeframe}</div>
                          <div className="text-sm text-grey-600">Implementation</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-grey-900">{study.metrics.teamSize || study.metrics.queriesHandled}</div>
                          <div className="text-sm text-grey-600">{study.metrics.teamSize ? 'Team Size' : 'Daily Queries'}</div>
                        </div>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-brand-green-500 pl-6 italic text-grey-700 mb-4">
                      "{study.testimonial.quote}"
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-semibold text-grey-900">{study.testimonial.author}</div>
                      <div className="text-grey-600">{study.testimonial.role}</div>
                    </div>
                  </div>
                  <div className="lg:order-first">
                    <img 
                      src={study.image} 
                      alt={study.company}
                      className="w-full h-full object-cover min-h-[400px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Spotlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
              Industry <span className="text-brand-green-500">Success</span>
            </h2>
            <p className="text-xl text-grey-700">
              AI automation delivering results across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySpotlights.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${industry.color}`}>
                  <industry.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-grey-900 mb-2">{industry.industry}</h3>
                <div className="space-y-2 text-sm text-grey-600 mb-4">
                  <div><strong>{industry.companies}</strong> served</div>
                  <div><strong>{industry.avgROI}</strong> average ROI</div>
                </div>
                <p className="text-sm text-grey-700">
                  <strong>Top Use Case:</strong> {industry.topUseCase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
              Your Success <span className="text-brand-green-500">Journey</span>
            </h2>
            <p className="text-xl text-grey-700">
              Our proven 4-step process to transform your customer experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-green-500 text-white rounded-full font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-grey-900 mb-3">{step.title}</h3>
                  <p className="text-grey-700 text-sm mb-4">{step.description}</p>
                  <div className="text-xs text-brand-green-600 font-semibold">{step.duration}</div>
                </div>
                {index < implementationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-grey-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-green-500 to-brand-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how AI automation can transform your business and deliver measurable results like our featured case studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/resources" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200">
              View More Resources
              <BarChart3 className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
