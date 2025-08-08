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
          <div className="aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-gray-500 text-sm font-medium mb-2">
                Meta Video Ad Placement
              </div>
              <div className="text-gray-400 text-xs">
                Square Format (1:1)<br />
                1080×1080px
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Video Ad Placements */}
      <div className={`lg:hidden ${className}`}>
        {/* Vertical Video Ad (4:5 - 1080x1350) for Mobile */}
        <div className="w-full max-w-[320px] mx-auto mb-6">
          <div className="aspect-[4/5] bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-gray-500 text-sm font-medium mb-2">
                Meta Video Ad Placement
              </div>
              <div className="text-gray-400 text-xs">
                Vertical Format (4:5)<br />
                1080×1350px
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative placement - Inline within content */}
      <div className="w-full my-8">
        {/* Responsive container that adapts to screen size */}
        <div className="max-w-md mx-auto">
          {/* Desktop: Square aspect ratio */}
          <div className="hidden sm:block aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 flex items-center justify-center">
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
          
          {/* Mobile: Vertical aspect ratio */}
          <div className="sm:hidden aspect-[4/5] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 flex items-center justify-center">
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
        </div>
      </div>
    </>
  );
};

export default MetaVideoAds;