
import React from 'react';
import { Bot, Headphones, ShoppingCart, Calendar, Target, CheckCircle, ChevronRight } from 'lucide-react';

const AIAgentTypesSection = () => {
  return (
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
              {["Instant issue resolution", "24/7 availability", "Multi-language support", "Escalation protocols"].map((capability, idx) => (
                <div key={idx} className="flex items-center text-grey-600">
                  <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">{capability}</span>
                </div>
              ))}
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
              {["Lead qualification", "Product recommendations", "Order processing", "Upselling strategies"].map((capability, idx) => (
                <div key={idx} className="flex items-center text-grey-600">
                  <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">{capability}</span>
                </div>
              ))}
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
              {["Calendar integration", "Automated reminders", "Rescheduling", "Availability tracking"].map((capability, idx) => (
                <div key={idx} className="flex items-center text-grey-600">
                  <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">{capability}</span>
                </div>
              ))}
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
              {["Lead scoring", "Data enrichment", "Qualification criteria", "CRM integration"].map((capability, idx) => (
                <div key={idx} className="flex items-center text-grey-600">
                  <CheckCircle className="h-4 w-4 text-brand-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgentTypesSection;
