
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock, Target, Star, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const CaseStudies = () => {
  const featuredCaseStudies = [
    {
      title: "Fashion Retailer Achieves 400% ROI with AI Customer Service",
      company: "StyleMax Fashion",
      industry: "Retail & E-commerce",
      excerpt: "A leading fashion retailer transformed their customer support operations, reducing response times by 90% and increasing customer satisfaction scores significantly.",
      timeline: "6 months",
      teamSize: "500+ employees",
      results: [
        "400% return on investment within 6 months",
        "90% reduction in average response time",
        "85% of queries resolved automatically",
        "45% increase in customer satisfaction scores",
        "60% reduction in support team workload",
        "24/7 customer support availability"
      ],
      challenges: [
        "High volume of repetitive customer inquiries",
        "Long response times during peak seasons",
        "Inconsistent support quality across channels",
        "Limited support hours affecting global customers"
      ],
      solution: "Implemented AI-powered customer service agents across website chat, email, and social media channels with seamless human handoff for complex issues.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
      slug: "fashion-retailer-400-percent-roi",
      testimonial: {
        quote: "EverGrow's AI agents transformed our customer service. We're now providing 24/7 support while our team focuses on strategic initiatives.",
        author: "Sarah Johnson",
        role: "Customer Experience Director",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e7d859?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      title: "FinTech Startup Scales Support 10x with AI Agents",
      company: "PayFlow Technologies",
      industry: "Financial Services",
      excerpt: "How a growing financial technology company handled 1000% user growth without proportionally increasing their support team size.",
      timeline: "4 months",
      teamSize: "150+ employees",
      results: [
        "Handled 10x increase in support volume",
        "Maintained 24/7 support availability",
        "Reduced support costs by 60%",
        "Improved compliance response accuracy to 99.8%",
        "Decreased average resolution time by 75%",
        "Achieved 95% customer satisfaction rating"
      ],
      challenges: [
        "Rapid user growth overwhelming support team",
        "Complex financial compliance requirements",
        "Need for instant responses to account queries",
        "Multiple languages and currencies support"
      ],
      solution: "Deployed specialized AI agents trained on financial regulations with advanced security protocols and multi-language support capabilities.",
      image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800&h=500&fit=crop",
      slug: "fintech-scales-support-ai-agents",
      testimonial: {
        quote: "The AI agents understand complex financial queries better than we expected. Our compliance team loves the accuracy.",
        author: "Michael Chen",
        role: "Head of Customer Operations",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      }
    },
    {
      title: "Healthcare Network: 50% Reduction in Appointment No-Shows",
      company: "MediCare Plus Network",
      industry: "Healthcare",
      excerpt: "A multi-location healthcare provider used AI agents to dramatically improve patient engagement and reduce missed appointments.",
      timeline: "8 months",
      teamSize: "1200+ employees",
      results: [
        "50% reduction in appointment no-shows",
        "95% patient satisfaction with AI interactions",
        "30% increase in appointment bookings",
        "Automated 80% of routine patient inquiries",
        "Improved medication adherence by 35%",
        "Enhanced patient follow-up compliance"
      ],
      challenges: [
        "High appointment no-show rates",
        "Complex scheduling across multiple locations",
        "Patient education and medication reminders",
        "HIPAA compliance requirements"
      ],
      solution: "Implemented HIPAA-compliant AI agents for appointment scheduling, reminders, and patient education with intelligent escalation protocols.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop",
      slug: "healthcare-reduces-no-shows",
      testimonial: {
        quote: "Our patients love the convenience of AI-powered scheduling and reminders. It's made healthcare more accessible.",
        author: "Dr. Amanda Rodriguez",
        role: "Chief Medical Officer",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
      }
    }
  ];

  const additionalCaseStudies = [
    {
      title: "Travel Agency Automates 90% of Booking Inquiries",
      company: "GlobalTrek Adventures",
      industry: "Travel & Hospitality",
      results: ["90% inquiry automation", "45% faster booking process", "200% increase in off-hours bookings"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop",
      slug: "travel-agency-booking-automation"
    },
    {
      title: "EdTech Platform Improves Student Engagement by 60%",
      company: "LearnFast Academy",
      industry: "Education",
      results: ["60% higher engagement", "40% reduction in dropout rates", "24/7 student support"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      slug: "edtech-student-engagement"
    },
    {
      title: "Restaurant Chain Streamlines Orders Across 200+ Locations",
      company: "Fresh Bites Chain",
      industry: "Food & Beverage",
      results: ["35% increase in online orders", "50% reduction in order errors", "Unified customer experience"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
      slug: "restaurant-chain-order-automation"
    },
    {
      title: "Insurance Company Processes Claims 3x Faster",
      company: "SecureLife Insurance",
      industry: "Insurance",
      results: ["3x faster claim processing", "95% accuracy in damage assessment", "70% customer satisfaction improvement"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
      slug: "insurance-claims-automation"
    }
  ];

  const industries = [
    { name: "Retail & E-commerce", count: 12, color: "bg-blue-500" },
    { name: "Financial Services", count: 8, color: "bg-green-500" },
    { name: "Healthcare", count: 6, color: "bg-red-500" },
    { name: "Travel & Hospitality", count: 5, color: "bg-purple-500" },
    { name: "Education", count: 4, color: "bg-orange-500" },
    { name: "Food & Beverage", count: 3, color: "bg-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Case Studies - Real AI Success Stories & Customer Results"
        description="Discover how businesses across industries achieved remarkable results with AI automation. Real case studies showing ROI, efficiency gains, and customer satisfaction improvements."
        keywords="AI case studies, customer success stories, AI ROI, automation results, business transformation"
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
              Discover how businesses across industries have transformed their operations with AI automation, achieving remarkable ROI and customer satisfaction improvements.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-green-500 mb-2">35+</div>
              <div className="text-grey-700">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-green-500 mb-2">400%</div>
              <div className="text-grey-700">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-green-500 mb-2">85%</div>
              <div className="text-grey-700">Query Automation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-green-500 mb-2">90%</div>
              <div className="text-grey-700">Time Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
              Featured <span className="text-brand-green-500">Case Studies</span>
            </h2>
            <p className="text-xl text-grey-700">
              In-depth analysis of our most impactful AI implementations
            </p>
          </div>

          <div className="space-y-16">
            {featuredCaseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl border border-grey-200 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover min-h-[400px]"
                      loading="lazy"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-brand-green-500 text-white text-sm font-medium rounded-full">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-4">
                      <Award className="h-6 w-6 text-brand-green-500 mr-2" />
                      <span className="text-brand-green-600 font-semibold">{study.company}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-grey-900 mb-4">
                      {study.title}
                    </h3>
                    <p className="text-grey-700 mb-6 leading-relaxed">
                      {study.excerpt}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-brand-green-500 mr-2" />
                        <span className="text-sm text-grey-600">Timeline: {study.timeline}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-brand-green-500 mr-2" />
                        <span className="text-sm text-grey-600">Team: {study.teamSize}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-grey-900 mb-3">Key Results:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {study.results.slice(0, 3).map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm text-grey-700">
                            <CheckCircle className="w-4 h-4 text-brand-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    {study.testimonial && (
                      <div className="bg-grey-50 rounded-xl p-6 mb-6">
                        <div className="flex items-start">
                          <img 
                            src={study.testimonial.avatar} 
                            alt={study.testimonial.author}
                            className="w-12 h-12 rounded-full mr-4"
                            loading="lazy"
                          />
                          <div>
                            <p className="text-grey-800 italic mb-3">"{study.testimonial.quote}"</p>
                            <div>
                              <div className="font-semibold text-grey-900">{study.testimonial.author}</div>
                              <div className="text-sm text-grey-600">{study.testimonial.role}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <Link 
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Case Studies Grid */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
              More Success <span className="text-brand-green-500">Stories</span>
            </h2>
            <p className="text-xl text-grey-700">
              Discover how businesses across different industries have achieved success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {additionalCaseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-600 text-sm font-medium rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-grey-900 mb-3">
                    {study.title}
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-grey-900 mb-2 text-sm">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-grey-700">
                          <CheckCircle className="w-3 h-3 text-brand-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-brand-green-500 hover:text-brand-green-600 font-semibold text-sm"
                  >
                    Read Case Study
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-4">
              Success Across <span className="text-brand-green-500">Industries</span>
            </h2>
            <p className="text-xl text-grey-700">
              See how AI automation delivers results in your industry
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-grey-200 p-6 hover:shadow-xl transition-shadow">
                <div className={`w-4 h-4 rounded-full ${industry.color} mb-4`}></div>
                <h3 className="font-bold text-grey-900 mb-2">{industry.name}</h3>
                <p className="text-grey-600 text-sm">{industry.count} case studies</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-green-500 to-brand-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join hundreds of businesses that have transformed their operations with AI automation
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
            Start Your AI Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
