import React from 'react';

interface MetaVideoAdsProps {
  className?: string;
}

const MetaVideoAds: React.FC<MetaVideoAdsProps> = ({ className = '' }) => {
  return (
    <>
      {/* Desktop Video Ad Placements */}
      <div className={`hidden lg:block ${className}`}>
        {/* Square Video Ad (1:1 - 1080x1080) for Desktop */}
        <div className="w-full max-w-[400px] mx-auto mb-8">
          <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280'%3EVideo Loading...%3C/text%3E%3C/svg%3E"
            >
              <source 
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
                type="video/mp4" 
              />
              <source 
                src="https://sample-videos.com/zip/10/mp4/360/BigBuckBunny_360x360_1mb.mp4" 
                type="video/mp4" 
              />
              {/* Fallback content */}
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-gray-500 text-sm font-medium mb-2">
                    Meta Video Ad
                  </div>
                  <div className="text-gray-400 text-xs">
                    Square Format (1:1)<br />
                    1080×1080px
                  </div>
                </div>
              </div>
            </video>
          </div>
        </div>
      </div>

      {/* Mobile Video Ad Placements */}
      <div className={`lg:hidden ${className}`}>
        {/* Vertical Video Ad (4:5 - 1080x1350) for Mobile */}
        <div className="w-full max-w-[320px] mx-auto mb-6">
          <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='400' viewBox='0 0 320 400'%3E%3Crect width='320' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280'%3EVideo Loading...%3C/text%3E%3C/svg%3E"
            >
              <source 
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" 
                type="video/mp4" 
              />
              <source 
                src="https://sample-videos.com/zip/10/mp4/360/ElephantsDream_360x640_1mb.mp4" 
                type="video/mp4" 
              />
              {/* Fallback content */}
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-gray-500 text-sm font-medium mb-2">
                    Meta Video Ad
                  </div>
                  <div className="text-gray-400 text-xs">
                    Vertical Format (4:5)<br />
                    1080×1350px
                  </div>
                </div>
              </div>
            </video>
          </div>
        </div>
      </div>

      {/* Alternative placement - Inline within content */}
      <div className="w-full my-8">
        {/* Responsive container that adapts to screen size */}
        <div className="max-w-md mx-auto">
          {/* Desktop: Square aspect ratio */}
          <div className="hidden sm:block aspect-square rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23dbeafe'/%3E%3Ctext x='50%25' y='40%25' text-anchor='middle' dy='.3em' fill='%232563eb' font-size='14' font-weight='600'%3EMeta Retargeting Ad%3C/text%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' dy='.3em' fill='%233b82f6' font-size='10'%3ESquare (1:1) Format%3C/text%3E%3C/svg%3E"
            >
              <source 
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
                type="video/mp4" 
              />
              {/* Fallback content */}
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-blue-600 text-sm font-semibold mb-2">
                    Meta Retargeting Video Ad
                  </div>
                  <div className="text-blue-500 text-xs">
                    Desktop: Square (1:1)<br />
                    Optimized for engagement
                  </div>
                </div>
              </div>
            </video>
          </div>
          
          {/* Mobile: Vertical aspect ratio */}
          <div className="sm:hidden aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='400' viewBox='0 0 320 400'%3E%3Crect width='320' height='400' fill='%23dbeafe'/%3E%3Ctext x='50%25' y='40%25' text-anchor='middle' dy='.3em' fill='%232563eb' font-size='14' font-weight='600'%3EMeta Retargeting Ad%3C/text%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' dy='.3em' fill='%233b82f6' font-size='10'%3EVertical (4:5) Format%3C/text%3E%3C/svg%3E"
            >
              <source 
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" 
                type="video/mp4" 
              />
              {/* Fallback content */}
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-blue-600 text-sm font-semibold mb-2">
                    Meta Retargeting Video Ad
                  </div>
                  <div className="text-blue-500 text-xs">
                    Mobile: Vertical (4:5)<br />
                    Optimized for mobile viewing
                  </div>
                </div>
              </div>
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaVideoAds;