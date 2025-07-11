
import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const TrustBadgesSection = () => {
  return (
    <section className="py-12 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-grey-700 mb-4">Trusted by enterprises worldwide</h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
          <img src="/lovable-uploads/9ddce30e-8318-49f1-9d10-de0dcae149c3.png" alt="Security Compliance Badges" className="h-16 object-contain" />
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-brand-green-500" />
            <span className="text-sm font-medium text-grey-600">SOC 2 Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-6 w-6 text-brand-green-500" />
            <span className="text-sm font-medium text-grey-600">99.9% Uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
