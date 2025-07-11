
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const QuickStatsSection = () => {
  return (
    <section className="py-16 bg-brand-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="text-white">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
              5000+
            </div>
            <div className="text-green-100">Monthly Leads Handled</div>
          </div>
          <div className="text-white">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
              30%
            </div>
            <div className="text-green-100">Boost in Conversions</div>
          </div>
          <div className="text-white">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
              35%
            </div>
            <div className="text-green-100">Cost Savings</div>
          </div>
          <div className="text-white">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
              450+
            </div>
            <div className="text-green-100">Support Tickets Resolved</div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/case-studies" className="inline-flex items-center text-white hover:text-green-100 font-medium">
            See full results
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickStatsSection;
