
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Users, CheckCircle, Zap, Globe, BarChart3, MessageSquare, Bell } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const Booking = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-brand-green-500/10 rounded-full text-brand-green-600 text-sm font-medium mb-8">
                <Calendar className="w-4 h-4 mr-2" />
                AI Booking Agent
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
                <span className="text-grey-900">Automate</span>
                <br />
                <span className="text-brand-green-500">Scheduling</span>
                <br />
                <span className="text-grey-900">& Appointments</span>
              </h1>
              
              <p className="text-xl text-grey-600 mb-8 leading-relaxed">
                AI booking agent that handles scheduling, rescheduling, and appointment management 24/7. Reduce no-shows by 50% with intelligent reminders and confirmations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Get AI Booking Agent
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-green-500 text-brand-green-500 hover:bg-brand-green-500 hover:text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105">
                  Watch Demo
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-grey-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">80%</div>
                  <div className="text-sm text-grey-600">Booking Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">50%</div>
                  <div className="text-sm text-grey-600">Fewer No-Shows</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green-500 mb-2">24/7</div>
                  <div className="text-sm text-grey-600">Always Available</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img src="https://www.haptik.ai/hs-fs/hubfs/03BookingAgent.gif?width=1815&height=666&name=03BookingAgent.gif" alt="AI Booking Agent Demo" className="w-full rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
              Booking Features That Work
            </h2>
            <p className="text-xl text-grey-600 max-w-3xl mx-auto">
              Complete appointment management solution powered by AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Calendar className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Smart Scheduling</h3>
              <p className="text-grey-600 leading-relaxed">
                Automatically find optimal time slots based on availability, preferences, and business rules.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Bell className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Automated Reminders</h3>
              <p className="text-grey-600 leading-relaxed">
                Send personalized reminders via SMS, email, or chat to reduce no-shows and improve attendance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Clock className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Easy Rescheduling</h3>
              <p className="text-grey-600 leading-relaxed">
                Handle cancellations and reschedules instantly with automatic availability checking and rebooking.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Multi-Resource Booking</h3>
              <p className="text-grey-600 leading-relaxed">
                Coordinate bookings across multiple staff members, rooms, or resources with conflict prevention.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Booking Analytics</h3>
              <p className="text-grey-600 leading-relaxed">
                Track booking patterns, no-show rates, and optimize scheduling efficiency with detailed insights.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-grey-200 hover:border-brand-green-500/30">
              <div className="p-4 bg-brand-green-500/10 rounded-xl w-fit mb-6">
                <Zap className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 mb-4">Calendar Integration</h3>
              <p className="text-grey-600 leading-relaxed">
                Seamlessly sync with Google Calendar, Outlook, and other popular calendar applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-green-500 to-brand-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Bookings?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Reduce no-shows and streamline scheduling with intelligent booking automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-grey-50 text-grey-900 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
              Get AI Booking Agent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brand-green-500 font-semibold rounded-xl text-lg transition-all duration-200 hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
