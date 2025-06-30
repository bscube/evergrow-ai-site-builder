import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Users, CheckCircle, Zap, Globe, BarChart3, MessageSquare, Bell } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { generateServiceStructuredData, generateFAQStructuredData } from '../../utils/seo';

const Booking = () => {
  const serviceStructuredData = generateServiceStructuredData({
    name: "AI Booking Agent",
    description: "Automated appointment scheduling and booking management system powered by artificial intelligence. Handles scheduling, rescheduling, and appointment confirmations 24/7.",
    provider: "EverGrow Digital",
    serviceType: "AI Appointment Scheduling",
    areaServed: "Worldwide"
  });

  const faqStructuredData = generateFAQStructuredData([
    {
      question: "How does the AI booking agent reduce no-shows?",
      answer: "Our AI booking agent sends personalized reminders via SMS, email, and chat notifications. It also handles confirmations and rescheduling requests automatically, reducing no-shows by up to 50%."
    },
    {
      question: "Can the AI booking agent handle multiple resources?",
      answer: "Yes, the AI booking agent can coordinate bookings across multiple staff members, rooms, or resources with automatic conflict prevention and availability checking."
    },
    {
      question: "What calendar systems does it integrate with?",
      answer: "The AI booking agent seamlessly integrates with Google Calendar, Outlook, Apple Calendar, and other popular calendar applications for real-time synchronization."
    }
  ]);

  return (
    <>
      <SEO
        title="AI Booking Agent - Automated Appointment Scheduling"
        description="Automate appointment scheduling with AI booking agents. Reduce no-shows by 50% with intelligent reminders, 24/7 availability, and smart rescheduling. Book a demo today."
        keywords="AI booking agent, automated scheduling, appointment booking, AI calendar management, booking automation, scheduling software, appointment reminders"
        canonical="/ai-agents/booking"
        ogImage="https://evergrowdigital.com/images/ai-booking-agent-og.jpg"
        structuredData={`[${serviceStructuredData}, ${faqStructuredData}]`}
      />
      
      <div className="min-h-screen bg-white">
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <Navigation />
        
        {/* Hero Section */}
        <main id="main-content">
          <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-green-50 to-white" aria-labelledby="hero-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-8">
                    <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                    AI Booking Agent
                  </div>
                  
                  <h1 id="hero-heading" className="text-5xl sm:text-6xl font-bold tracking-tight mb-8 text-balance">
                    <span className="text-grey-900">Automate</span>
                    <br />
                    <span className="text-brand-green-500">Scheduling</span>
                    <br />
                    <span className="text-grey-900">& Appointments</span>
                  </h1>
                  
                  <p className="text-xl text-grey-600 mb-8 leading-relaxed text-pretty">
                    AI booking agent that handles scheduling, rescheduling, and appointment management 24/7. Reduce no-shows by 50% with intelligent reminders and confirmations.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:ring-offset-2"
                      aria-label="Get AI Booking Agent - Contact us for pricing and setup"
                    >
                      Get AI Booking Agent
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Link>
                    <button 
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-green-500 text-brand-green-500 hover:bg-brand-green-500 hover:text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:ring-offset-2"
                      aria-label="Watch AI Booking Agent Demo Video"
                    >
                      Watch Demo
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-8 pt-8 border-t border-grey-200" role="list" aria-label="Key Statistics">
                    <div className="text-center" role="listitem">
                      <div className="text-3xl font-bold text-brand-green-500 mb-2" aria-label="80 percent">80%</div>
                      <div className="text-sm text-grey-600">Booking Automation</div>
                    </div>
                    <div className="text-center" role="listitem">
                      <div className="text-3xl font-bold text-brand-green-500 mb-2" aria-label="50 percent">50%</div>
                      <div className="text-sm text-grey-600">Fewer No-Shows</div>
                    </div>
                    <div className="text-center" role="listitem">
                      <div className="text-3xl font-bold text-brand-green-500 mb-2" aria-label="24 hours 7 days">24/7</div>
                      <div className="text-sm text-grey-600">Always Available</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src="https://www.haptik.ai/hs-fs/hubfs/03BookingAgent.gif?width=1815&height=666&name=03BookingAgent.gif" 
                    alt="AI Booking Agent Demo showing automated appointment scheduling interface with calendar integration and reminder system" 
                    className="w-full rounded-2xl shadow-2xl hero-image aspect-ratio-16-9"
                    width="1815"
                    height="666"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-24 bg-white" aria-labelledby="features-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="features-heading" className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6 text-balance">
                  Booking Features That Work
                </h2>
                <p className="text-xl text-grey-600 max-w-3xl mx-auto text-pretty">
                  Complete appointment management solution powered by AI
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="AI Booking Agent Features">
                <article className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30" role="listitem">
                  <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6" aria-hidden="true">
                    <Calendar className="h-8 w-8 text-brand-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-grey-900 mb-4">Smart Scheduling</h3>
                  <p className="text-grey-600 leading-relaxed">
                    Automatically find optimal time slots based on availability, preferences, and business rules.
                  </p>
                </article>

                <article className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30" role="listitem">
                  <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6" aria-hidden="true">
                    <Bell className="h-8 w-8 text-brand-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-grey-900 mb-4">Automated Reminders</h3>
                  <p className="text-grey-600 leading-relaxed">
                    Send personalized reminders via SMS, email, or chat to reduce no-shows and improve attendance.
                  </p>
                </article>

                <article className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30" role="listitem">
                  <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6" aria-hidden="true">
                    <Clock className="h-8 w-8 text-brand-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-grey-900 mb-4">Easy Rescheduling</h3>
                  <p className="text-grey-600 leading-relaxed">
                    Handle cancellations and reschedules instantly with automatic availability checking and rebooking.
                  </p>
                </article>

                <article className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30" role="listitem">
                  <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6" aria-hidden="true">
                    <Users className="h-8 w-8 text-brand-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-grey-900 mb-4">Multi-Resource Booking</h3>
                  <p className="text-grey-600 leading-relaxed">
                    Coordinate bookings across multiple staff members, rooms, or resources with conflict prevention.
                  </p>
                </article>

                <article className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30" role="listitem">
                  <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6" aria-hidden="true">
                    <BarChart3 className="h-8 w-8 text-brand-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-grey-900 mb-4">Booking Analytics</h3>
                  <p className="text-grey-600 leading-relaxed">
                    Track booking patterns, no-show rates, and optimize scheduling efficiency with detailed insights.
                  </p>
                </article>

                <article className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30" role="listitem">
                  <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6" aria-hidden="true">
                    <Zap className="h-8 w-8 text-brand-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-grey-900 mb-4">Calendar Integration</h3>
                  <p className="text-grey-600 leading-relaxed">
                    Seamlessly sync with Google Calendar, Outlook, and other popular calendar applications.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-gradient-to-r from-brand-green-500 to-brand-green-600" aria-labelledby="cta-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 id="cta-heading" className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Ready to Automate Your Bookings?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed text-pretty">
                Reduce no-shows and streamline scheduling with intelligent booking automation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-green-500"
                  aria-label="Get AI Booking Agent - Contact us for implementation"
                >
                  Get AI Booking Agent
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
                <button 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brand-green-500 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-green-500"
                  aria-label="Schedule a demo of AI Booking Agent"
                >
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Booking;
