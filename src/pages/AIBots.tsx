
import React from 'react';
import { Bot, MessageSquare, Phone, Calendar, Users, ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIBots = () => {
  const bots = [
    {
      title: 'AI Sales Agent',
      description: 'Qualify leads, handle product inquiries, and close sales with intelligent conversation flows.',
      icon: ShoppingCart,
      features: ['Lead qualification', 'Product recommendations', 'Price negotiations', 'Order processing'],
      color: 'blue'
    },
    {
      title: 'AI Voice Agent',
      description: 'Handle phone calls with natural voice AI that understands and responds like a human.',
      icon: Phone,
      features: ['Natural voice processing', 'Multiple languages', 'Call routing', 'Sentiment analysis'],
      color: 'purple'
    },
    {
      title: 'AI Support Agent',
      description: 'Provide 24/7 customer support with instant answers and seamless human handover.',
      icon: MessageSquare,
      features: ['Instant responses', 'Knowledge base integration', 'Ticket routing', 'Escalation management'],
      color: 'green'
    },
    {
      title: 'AI Booking Agent',
      description: 'Automate appointment scheduling, cancellations, and calendar management.',
      icon: Calendar,
      features: ['Calendar integration', 'Automated scheduling', 'Reminder notifications', 'Rescheduling'],
      color: 'orange'
    },
    {
      title: 'AI Lead Qualification Agent',
      description: 'Score and qualify leads based on predefined criteria and behavior patterns.',
      icon: Users,
      features: ['Lead scoring', 'Qualification workflows', 'CRM integration', 'Follow-up sequences'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const capabilities = [
    'Natural Language Processing',
    'Multi-language Support',
    'Sentiment Analysis',
    'Context Awareness',
    'Learning & Improvement',
    'Integration Ready'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Bot className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              AI Bots for Every
              <span className="text-blue-600"> Business Need</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our suite of specialized AI agents designed to automate your sales, support, booking, and lead qualification processes across all channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book AI Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="border-2 border-blue-600 hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300">
                <Bot className="mr-2 h-5 w-5" />
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Bots Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your AI Agent
            </h2>
            <p className="text-xl text-gray-600">
              Each AI agent is specialized for specific business functions and can be deployed across all channels
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bots.map((bot, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getColorClasses(bot.color)} rounded-2xl mb-6`}>
                  <bot.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{bot.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{bot.description}</p>
                
                <div className="space-y-3 mb-8">
                  {bot.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`w-full bg-gradient-to-r ${getColorClasses(bot.color)} text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              All our AI bots are powered by state-of-the-art machine learning and natural language processing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability}</h3>
                <p className="text-gray-600 text-sm">Advanced AI technology that ensures natural and effective conversations</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bot Comparison
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect AI agent for your specific business needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-blue-600">Sales Agent</th>
                  <th className="px-6 py-4 text-center font-semibold text-purple-600">Voice Agent</th>
                  <th className="px-6 py-4 text-center font-semibold text-green-600">Support Agent</th>
                  <th className="px-6 py-4 text-center font-semibold text-orange-600">Booking Agent</th>
                  <th className="px-6 py-4 text-center font-semibold text-indigo-600">Lead Qual Agent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">24/7 Availability</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Multi-Channel</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">📞</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">CRM Integration</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Human Handover</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Analytics & Reporting</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Deploy Your AI Agent?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with a free consultation and discover which AI bots are perfect for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              Start Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300 hover:scale-105">
              <Bot className="mr-2 h-5 w-5" />
              Try All Bots Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIBots;
