
import React from 'react';

const PartnerLogosSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-grey-900 mb-4">Trusted Technology Partners</h3>
          <p className="text-grey-600">Certified partnerships with leading platforms</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-70">
          <img src="/lovable-uploads/665274b0-11f1-46f6-9c20-29a4bc35a12b.png" alt="Botpress Certified Partner" className="h-20 object-contain" />
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-lg font-semibold text-grey-700">Meta Partner</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-lg font-semibold text-grey-700">HubSpot Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;
