
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, Brain } from 'lucide-react';

const AnalyticsDashboardSection = () => {
  return (
    <section className="py-24 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-grey-900 mb-6">
            Track Insights That Matter
          </h2>
          <p className="text-xl text-grey-600 max-w-4xl mx-auto">
            Get custom dashboards that offer a comprehensive view of your agents' performance to optimize resources and streamline customer support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-brand-green-500/10 rounded-xl">
                <TrendingUp className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 ml-4">Identify Key Trends</h3>
            </div>
            <div className="mb-6">
              <img src="https://www.haptik.ai/hs-fs/hubfs/01.png?width=1121&height=1052&name=01.png" alt="Identify Key Trends visualization" className="w-full rounded-lg" />
            </div>
            <p className="text-grey-600 leading-relaxed">
              Discover the most common questions your users ask and gain a deeper understanding of their needs
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-brand-green-500/10 rounded-xl">
                <BarChart3 className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 ml-4">Stay on Top of Metrics</h3>
            </div>
            <div className="mb-6">
              <img src="https://www.haptik.ai/hs-fs/hubfs/02.png?width=1121&height=1052&name=02.png" alt="Stay on Top of Metrics visualization" className="w-full rounded-lg" />
            </div>
            <p className="text-grey-600 leading-relaxed">
              From first-time resolution to customer satisfaction and NPS, have complete visibility into metrics that matter most
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-brand-green-500/10 rounded-xl">
                <Brain className="h-8 w-8 text-brand-green-500" />
              </div>
              <h3 className="text-xl font-bold text-grey-900 ml-4">Insights Agent</h3>
            </div>
            <div className="mb-6">
              <img src="https://www.haptik.ai/hs-fs/hubfs/03.png?width=1122&height=1052&name=03.png" alt="Insights Agent visualization" className="w-full rounded-lg" />
            </div>
            <p className="text-grey-600 leading-relaxed">
              Automate insights into agent performance, user sentiment, and SOP compliance for enhanced operations
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            View Analytics Demo
            <BarChart3 className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboardSection;
