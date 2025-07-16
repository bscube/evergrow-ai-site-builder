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

      {/* Instant and Intelligent Section */}
      <section className="py-24 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Chat Interface */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg mx-auto">
                <div className="space-y-6">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-brand-green-500 text-white rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
                      I'm going to Bali for a vacation. Can you recommend hotels under $100 per night?
                    </div>
                  </div>
                  
                  {/* AI Response */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-brand-green-500 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-grey-100 text-grey-900 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
                      Would you prefer beachfront or the city center?
                    </div>
                  </div>
                  
                  {/* User Response */}
                  <div className="flex justify-end">
                    <div className="bg-brand-green-500 text-white rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
                      Beachfront for me!
                    </div>
                  </div>
                  
                  {/* AI Recommendation */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-brand-green-500 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-grey-100 text-grey-900 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
                      <p className="mb-3">Based on your previous trips, you might like the Bamboo Retreat or Sunset Villa - both under $100 and highly-rated.</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white rounded-lg p-2">
                          <img src="/placeholder.svg" alt="Bamboo Retreat" className="w-full h-16 object-cover rounded mb-1" />
                          <p className="text-xs font-medium">Bamboo Retreat</p>
                        </div>
                        <div className="bg-white rounded-lg p-2">
                          <img src="/placeholder.svg" alt="Sunset Villa" className="w-full h-16 object-cover rounded mb-1" />
                          <p className="text-xs font-medium">Sunset Villa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-8">
                Instant and Intelligent
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-grey-900 mb-2">
                      Zero wait times:
                    </h3>
                    <p className="text-grey-600 leading-relaxed">
                      Process instant confirmations and cancellations without prolonged delays or human error
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-grey-900 mb-2">
                      Personalized experience:
                    </h3>
                    <p className="text-grey-600 leading-relaxed">
                      Tailor recommendations based on preferences and booking history, winning loyalty and repeat engagement
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-grey-900 mb-2">
                      Enhanced operations:
                    </h3>
                    <p className="text-grey-600 leading-relaxed">
                      Unlock higher efficiency by automating scheduling, reminders, and follow-ups, reducing manual effort
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Anytime, Anywhere Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-8">
                Book Anytime, Anywhere
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-grey-900 mb-2">
                      Omnichannel support:
                    </h3>
                    <p className="text-grey-600 leading-relaxed">
                      Help customers to book across chat, voice, and web platforms, providing flexible and convenient options at their fingertips.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-grey-900 mb-2">
                      Easy navigation:
                    </h3>
                    <p className="text-grey-600 leading-relaxed">
                      Eliminate the hassle of multiple screens and web URLs with a streamlined, single-interface booking experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-grey-900 mb-2">
                      Highly flexible:
                    </h3>
                    <p className="text-grey-600 leading-relaxed">
                      Allow customers to easily modify, reschedule, or cancel bookings for increased convenience and flexibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chat Interface */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-2xl p-8 max-w-lg mx-auto">
                <div className="space-y-6">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-white text-grey-900 rounded-2xl rounded-tr-md px-4 py-3 max-w-xs shadow-sm">
                      Hi, can you reschedule my pickup from LAX from July 10th to July 11th at 9am?
                    </div>
                  </div>
                  
                  {/* AI Response */}
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white text-grey-900 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs shadow-sm">
                      Sure. Let me check availability for a pickup on July 11th at 9 AM.
                    </div>
                  </div>
                  
                  {/* AI Confirmation */}
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white text-grey-900 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs shadow-sm">
                      <p className="mb-2">Your pickup has been successfully <strong>rescheduled to July 11th at 9 AM.</strong></p>
                      <p className="text-sm text-grey-600">You'll receive driver details an hour before your ride.</p>
                    </div>
                  </div>
                  
                  {/* User Response */}
                  <div className="flex justify-end items-end space-x-2">
                    <div className="bg-white text-grey-900 rounded-2xl rounded-tr-md px-4 py-3 shadow-sm">
                      Great, thanks!
                    </div>
                    <div className="w-8 h-8 bg-grey-300 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-grey-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-grey-50">
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