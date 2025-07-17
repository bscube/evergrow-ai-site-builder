import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, AlertCircle } from 'lucide-react';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [mapError, setMapError] = useState('');

  // Dubai office coordinates - Evergrow Building, Behind Abu Baker Al Siddique Metro Station
  const officeLocation: [number, number] = [55.3042, 25.1972]; // Dubai Business Bay area coordinates

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    try {
      setMapError('');
      
      // Set the access token
      mapboxgl.accessToken = mapboxToken.trim();
      
      // Initialize map
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: officeLocation,
        zoom: 15,
        pitch: 45,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Create custom marker element
      const markerElement = document.createElement('div');
      markerElement.className = 'custom-marker';
      markerElement.innerHTML = `
        <div style="
          background-color: #22c55e;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          border: 3px solid white;
        ">
          <div style="color: white; font-size: 20px;">📍</div>
        </div>
      `;

      // Add marker for office location
      new mapboxgl.Marker(markerElement)
        .setLngLat(officeLocation)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div style="padding: 10px; max-width: 250px;">
                <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #1f2937;">EverGrow Digital</h3>
                <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.4;">
                  Evergrow Building, Office #2<br>
                  Plot 128-168<br>
                  Behind Abu Baker Al Siddique Metro Station<br>
                  Dubai, UAE
                </p>
                <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #e5e7eb;">
                  <a href="https://maps.google.com/?q=25.1972,55.3042" target="_blank" 
                     style="color: #22c55e; text-decoration: none; font-size: 13px; font-weight: 500;">
                    Get Directions →
                  </a>
                </div>
              </div>
            `)
        )
        .addTo(map.current);

      // Add office area circle
      map.current.on('load', () => {
        if (!map.current) return;

        map.current.addSource('office-area', {
          type: 'geojson',
          data: {
            type: 'Point',
            coordinates: officeLocation
          }
        });

        map.current.addLayer({
          id: 'office-area-circle',
          type: 'circle',
          source: 'office-area',
          paint: {
            'circle-radius': 100,
            'circle-color': '#22c55e',
            'circle-opacity': 0.1,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#22c55e',
            'circle-stroke-opacity': 0.3
          }
        });
      });

      setShowTokenInput(false);

    } catch (error) {
      console.error('Map initialization error:', error);
      setMapError('Invalid Mapbox token. Please check your token and try again.');
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mapboxToken.trim()) {
      setMapError('Please enter a valid Mapbox token');
      return;
    }
    initializeMap();
  };

  const resetMap = () => {
    if (map.current) {
      map.current.remove();
      map.current = null;
    }
    setShowTokenInput(true);
    setMapError('');
    setMapboxToken('');
  };

  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  if (showTokenInput) {
    return (
      <div className="bg-white rounded-2xl h-full min-h-[400px] flex flex-col items-center justify-center p-8 border border-grey-200">
        <div className="text-center max-w-md mx-auto">
          <MapPin className="h-16 w-16 text-brand-green-500 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-grey-900 mb-4">Interactive Map</h3>
          <p className="text-grey-600 mb-6 text-sm">
            To view our office location on the map, please enter your Mapbox public token below.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm text-blue-800 font-medium mb-1">Need a Mapbox token?</p>
                <p className="text-xs text-blue-700">
                  Visit <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="underline font-medium">mapbox.com</a> and find your public token in the Tokens section after creating an account.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <input
              type="text"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="Enter your Mapbox public token"
              className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-brand-green-500 focus:border-transparent transition-colors text-sm"
            />
            {mapError && (
              <p className="text-red-600 text-sm">{mapError}</p>
            )}
            <button
              type="submit"
              className="w-full bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Load Map
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[400px] bg-white rounded-2xl overflow-hidden border border-grey-200">
      <div ref={mapContainer} className="absolute inset-0" />
      <button
        onClick={resetMap}
        className="absolute top-4 left-4 bg-white hover:bg-grey-50 text-grey-600 text-sm px-3 py-2 rounded-lg shadow-md transition-colors z-10"
      >
        Change Token
      </button>
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md z-10 max-w-xs">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-brand-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <p className="font-semibold text-grey-900 text-sm">EverGrow Digital</p>
            <p className="text-xs text-grey-600 leading-relaxed">
              Evergrow Building, Office #2<br/>
              Behind Abu Baker Al Siddique Metro Station<br/>
              Dubai, UAE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;