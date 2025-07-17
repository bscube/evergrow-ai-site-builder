import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { BarChart3, Download, TrendingUp, FileText, ArrowRight, Calendar, Eye } from 'lucide-react';

const ReportsResearch = () => {
  const reports = [
    {
      title: "State of AI Agents 2024: Industry Transformation Report",
      description: "Comprehensive analysis of AI agent adoption across industries, with insights from 500+ businesses and market trends.",
      type: "Industry Report",
      pages: "64 pages",
      publishDate: "January 2024",
      downloadUrl: "https://example.com/reports/state-of-ai-agents-2024.pdf",
      image: "/lovable-uploads/760e5965-c5c5-4c2c-812d-42b5436a8245.png",
      featured: true,
      highlights: [
        "85% increase in AI agent adoption",
        "ROI analysis across 12 industries",
        "Future predictions for 2024-2025"
      ]
    },
    {
      title: "Customer Service Automation: ROI & Performance Metrics",
      description: "Deep dive into measurable benefits of AI-powered customer service, including response times, cost savings, and satisfaction scores.",
      type: "Performance Study",
      pages: "32 pages",
      publishDate: "December 2023",
      downloadUrl: "https://example.com/reports/customer-service-automation-roi.pdf",
      image: "/lovable-uploads/8f80e73a-3604-4714-ad8c-85d9c8425fc4.png",
      highlights: [
        "Average 73% reduction in response time",
        "Cost savings up to $2.3M annually",
        "Customer satisfaction improvement"
      ]
    },
    {
      title: "E-commerce AI Agents: Conversion & Sales Impact Analysis",
      description: "Research study on how AI agents drive sales in e-commerce, featuring data from 200+ online retailers.",
      type: "Market Research",
      pages: "28 pages",
      publishDate: "November 2023",
      downloadUrl: "https://example.com/reports/ecommerce-ai-agents-analysis.pdf",
      image: "/lovable-uploads/9ddce30e-8318-49f1-9d10-de0dcae149c3.png",
      highlights: [
        "42% average increase in conversions",
        "Reduced cart abandonment by 35%",
        "24/7 sales support benefits"
      ]
    }
  ];

  const whitepapers = [
    {
      title: "AI Agent Security & Compliance Framework",
      description: "Best practices for implementing AI agents in regulated industries while maintaining security and compliance standards.",
      type: "Whitepaper",
      pages: "16 pages",
      publishDate: "January 2024",
      downloadUrl: "https://example.com/whitepapers/ai-agent-security-compliance.pdf"
    },
    {
      title: "The Psychology of Human-AI Interaction",
      description: "Research on user behavior and preferences when interacting with AI agents, based on behavioral studies.",
      type: "Research Paper",
      pages: "20 pages",
      publishDate: "December 2023",
      downloadUrl: "https://example.com/whitepapers/psychology-human-ai-interaction.pdf"
    },
    {
      title: "Cost-Benefit Analysis: AI Agents vs Traditional Solutions",
      description: "Detailed financial comparison between AI agents and traditional customer service solutions.",
      type: "Analysis Report",
      pages: "12 pages",
      publishDate: "November 2023",
      downloadUrl: "https://example.com/whitepapers/cost-benefit-analysis-ai-agents.pdf"
    }
  ];

  return (
    <>
      <SEO 
        title="Reports & Research - AI Agent Industry Analysis | EverGrowDigital"
        description="Access comprehensive reports and research on AI agent trends, ROI analysis, and industry insights. Download whitepapers and market studies."
        keywords="AI agent reports, AI research, industry analysis, AI trends, market studies"
      />
      
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-green-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-grey-900 mb-6">
                Reports &
                <span className="text-brand-green-500"> Research</span>
              </h1>
              <p className="text-xl text-grey-600 mb-8">
                Industry-leading research and analysis on AI agents, market trends, 
                and performance metrics to guide your strategic decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Reports */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
                Latest Industry Reports
              </h2>
              <p className="text-xl text-grey-600 max-w-3xl mx-auto">
                Comprehensive research studies with actionable insights
              </p>
            </div>

            <div className="space-y-8">
              {reports.map((report, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 ${report.featured ? 'ring-2 ring-brand-green-500' : ''}`}>
                  {report.featured && (
                    <div className="bg-brand-green-500 text-white px-6 py-3 rounded-t-2xl">
                      <span className="font-medium">Featured Report</span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    <div className="lg:col-span-1">
                      <img 
                        src={report.image} 
                        alt={report.title}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </div>
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4">
                        <span className="bg-brand-green-100 text-brand-green-700 px-3 py-1 rounded-full text-sm font-medium mr-4">
                          {report.type}
                        </span>
                        <div className="flex items-center text-grey-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {report.publishDate}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-grey-900 mb-4">{report.title}</h3>
                      <p className="text-grey-600 mb-6">{report.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-grey-900 mb-3">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {report.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center text-grey-600">
                              <TrendingUp className="h-4 w-4 text-brand-green-500 mr-3 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-grey-500 text-sm">
                          <FileText className="h-4 w-4 mr-1" />
                          {report.pages}
                        </div>
                        <a 
                          href={report.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download Report
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Whitepapers Section */}
        <section className="py-20 bg-grey-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
                Whitepapers & Analysis
              </h2>
              <p className="text-xl text-grey-600 max-w-3xl mx-auto">
                In-depth technical papers and analytical studies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitepapers.map((paper, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-grey-100 text-grey-700 px-3 py-1 rounded-full text-sm font-medium">
                        {paper.type}
                      </span>
                      <BarChart3 className="h-6 w-6 text-brand-green-500" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-grey-900 mb-3">{paper.title}</h3>
                    <p className="text-grey-600 mb-6">{paper.description}</p>
                    
                    <div className="space-y-2 mb-6 text-sm text-grey-500">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-2" />
                        <span>{paper.publishDate}</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-3 w-3 mr-2" />
                        <span>{paper.pages}</span>
                      </div>
                    </div>

                    <a 
                      href={paper.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center w-full justify-center border-2 border-brand-green-500 text-brand-green-500 hover:bg-brand-green-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
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
              Need Custom Research?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our research team can conduct custom studies and analysis tailored to your specific industry or use case.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-brand-green-500 hover:bg-grey-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Request Custom Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ReportsResearch;