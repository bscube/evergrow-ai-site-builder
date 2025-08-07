
import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, Headphones, Phone, Volume2, ArrowRight } from 'lucide-react';

const AIVoiceAgentsSection = () => {
  return (
    <section className="pt-8 pb-24 bg-white">
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
              <Link to="/track/voice-agents-demo" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-brand-green-500 font-semibold rounded-lg transition-colors duration-300">
                Book Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIVoiceAgentsSection;
