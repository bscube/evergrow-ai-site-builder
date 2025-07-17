import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';

const BuildingEthicalAI = () => {
  return (
    <>
      <SEO 
        title="Building Ethical AI: Our Commitment to Responsible Innovation"
        description="Learn about our principles and practices for developing AI agents that are ethical, transparent, and beneficial for all stakeholders."
        keywords="AI ethics, responsible AI, ethical technology, AI governance"
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
                AI Ethics
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-grey-900 mb-6">
              Building Ethical AI: Our Commitment to Responsible Innovation
            </h1>
            
            <div className="flex items-center mb-8 text-grey-600">
              <div className="flex items-center mr-6">
                <User className="h-5 w-5 mr-2" />
                <span className="font-medium">Dr. Emily Rodriguez</span>
                <span className="ml-2 text-sm">Head of AI Ethics</span>
              </div>
              <div className="flex items-center mr-6">
                <Calendar className="h-5 w-5 mr-2" />
                <span>December 12, 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>7 min read</span>
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
              src="/lovable-uploads/760e5965-c5c5-4c2c-812d-42b5436a8245.png" 
              alt="Building Ethical AI"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-grey-600 mb-8">
                As AI becomes increasingly integrated into business operations, the responsibility to develop ethical, transparent, and beneficial AI systems has never been more critical. At EverGrowDigital, we believe that ethical AI isn't just a nice-to-have – it's fundamental to building technology that serves everyone.
              </p>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Our Ethical AI Principles</h2>
              <p className="text-grey-700 mb-6">
                Our approach to AI ethics is built on five core principles that guide every decision we make:
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-brand-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-grey-900 mb-3">1. Transparency</h3>
                  <p className="text-grey-700">
                    Users should always know when they're interacting with an AI agent. We implement clear disclosure mechanisms and provide transparency about how our AI systems make decisions.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-grey-900 mb-3">2. Fairness</h3>
                  <p className="text-grey-700">
                    Our AI agents are designed to treat all users equitably, regardless of their background, demographics, or circumstances. We actively test for and mitigate bias in our systems.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-grey-900 mb-3">3. Privacy</h3>
                  <p className="text-grey-700">
                    We implement privacy-by-design principles, ensuring user data is protected, minimized, and used only for its intended purpose with explicit consent.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-grey-900 mb-3">4. Human Oversight</h3>
                  <p className="text-grey-700">
                    AI agents should augment human capabilities, not replace human judgment. We ensure meaningful human oversight in critical decisions and provide clear escalation paths.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-grey-900 mb-3">5. Beneficial Impact</h3>
                  <p className="text-grey-700">
                    Our AI systems are designed to create positive outcomes for businesses, their customers, and society as a whole. We consider the broader implications of our technology.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Implementing Ethics in Practice</h2>
              <p className="text-grey-700 mb-6">
                These principles aren't just theoretical – they're embedded in our development process:
              </p>
              
              <ul className="list-disc list-inside text-grey-700 mb-6 space-y-2">
                <li><strong>Ethics Review Board:</strong> Every new feature undergoes review by our diverse ethics committee</li>
                <li><strong>Bias Testing:</strong> We use adversarial testing to identify and eliminate potential biases in our AI models</li>
                <li><strong>Data Minimization:</strong> We collect only the data necessary for functionality and delete it when no longer needed</li>
                <li><strong>Explainable AI:</strong> Our agents can explain their reasoning and decision-making processes</li>
                <li><strong>Regular Audits:</strong> Third-party audits ensure our systems meet the highest ethical standards</li>
              </ul>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Addressing Common Concerns</h2>
              <p className="text-grey-700 mb-6">
                We understand that AI raises legitimate concerns. Here's how we address the most common ones:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-brand-green-500 pl-6">
                  <h3 className="font-semibold text-grey-900 mb-2">Job Displacement</h3>
                  <p className="text-grey-700">
                    Our AI agents are designed to handle routine tasks, freeing humans to focus on more creative, strategic, and interpersonal work. We provide resources to help businesses retrain and upskill their workforce.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-semibold text-grey-900 mb-2">Data Privacy</h3>
                  <p className="text-grey-700">
                    We implement end-to-end encryption, data anonymization, and strict access controls. Users have full control over their data and can request deletion at any time.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="font-semibold text-grey-900 mb-2">AI Decision Making</h3>
                  <p className="text-grey-700">
                    Critical decisions always involve human oversight. Our AI agents flag complex situations for human review and provide clear reasoning for their recommendations.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Industry Collaboration</h2>
              <p className="text-grey-700 mb-6">
                Ethical AI isn't a competitive advantage – it's a shared responsibility. That's why we actively collaborate with:
              </p>
              
              <ul className="list-disc list-inside text-grey-700 mb-6 space-y-2">
                <li>The Partnership on AI to advance AI ethics research</li>
                <li>IEEE's Ethically Aligned Design initiative</li>
                <li>Academic institutions researching AI safety and ethics</li>
                <li>Regulatory bodies developing AI governance frameworks</li>
                <li>Industry peers to establish best practices and standards</li>
              </ul>

              <h2 className="text-2xl font-bold text-grey-900 mb-4">Our Commitment Going Forward</h2>
              <p className="text-grey-700 mb-6">
                As AI technology continues to evolve, so too must our ethical frameworks. We commit to:
              </p>
              
              <ul className="list-disc list-inside text-grey-700 mb-6 space-y-2">
                <li>Regular updates to our ethical guidelines as technology advances</li>
                <li>Continued investment in AI safety research and development</li>
                <li>Transparent reporting on our ethical AI initiatives and outcomes</li>
                <li>Ongoing dialogue with stakeholders about AI ethics and governance</li>
                <li>Education and awareness programs for our customers and partners</li>
              </ul>

              <p className="text-grey-700 mb-6">
                Building ethical AI is not a destination – it's a journey. We're committed to leading by example, setting high standards for ourselves and the industry, and ensuring that AI serves humanity's best interests.
              </p>

              <div className="bg-grey-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-grey-900 mb-3">Join Us in Building Ethical AI</h3>
                <p className="text-grey-700 mb-4">
                  Want to learn more about our ethical AI practices or contribute to responsible AI development? We'd love to hear from you.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-brand-green-500 hover:bg-brand-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
                >
                  Get in Touch
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

export default BuildingEthicalAI;