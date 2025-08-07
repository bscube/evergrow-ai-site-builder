
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Handshake, Settings, ArrowRight } from 'lucide-react';

const AIHumanCollaborationSection = () => {
  return (
    <section className="pt-24 pb-8 bg-grey-50">
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
            <Link to="/track/collaboration-demo" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-500 font-semibold rounded-lg hover:bg-grey-50 transition-colors duration-300">
              Explore Smart Agent Chat
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHumanCollaborationSection;
