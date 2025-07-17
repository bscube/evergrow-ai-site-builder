import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const Map = () => {
  // Office address
  const officeAddress = "Evergrow Building, Office #2, Plot 128-168, Behind Abu Baker Al Siddique Metro Station, Dubai, UAE";
  const encodedAddress = encodeURIComponent(officeAddress);
  
  // Google Maps directions URL
  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className="relative w-full h-full min-h-[400px] bg-white rounded-2xl overflow-hidden border border-grey-200">
      {/* Static Google Maps Embed */}
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1234567890!2d55.3042!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzUwLjEiTiA1NcKwMTgnMTUuMSJF!5e0!3m2!1sen!2sae!4v1635789123456!5m2!1sen!2sae&q=${encodedAddress}`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="EverGrow Digital Office Location"
        className="absolute inset-0"
      />
      
      {/* Overlay with office info */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg z-10 max-w-sm">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-brand-green-500 mt-0.5 mr-3 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-grey-900 text-sm mb-1">EverGrow Digital</h3>
            <p className="text-xs text-grey-600 leading-relaxed mb-3">
              Evergrow Building, Office #2<br/>
              Plot 128-168<br/>
              Behind Abu Baker Al Siddique Metro Station<br/>
              Dubai, UAE
            </p>
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-brand-green-600 hover:text-brand-green-700 text-xs font-medium transition-colors"
            >
              Get Directions
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
      
      {/* View Larger Map button */}
      <div className="absolute top-4 right-4 z-10">
        <a
          href={googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-grey-50 text-grey-700 text-sm px-3 py-2 rounded-lg shadow-md transition-colors flex items-center"
        >
          View Larger Map
          <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </div>
    </div>
  );
};

export default Map;