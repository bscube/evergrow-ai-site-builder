import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MetaVideoAdsProps {
  className?: string;
}

const MetaVideoAds: React.FC<MetaVideoAdsProps> = ({ className = '' }) => {
  return (
    <>
      {/* Desktop Video Ad Placements */}
      <div className={`hidden lg:block ${className}`}>
        <div className="w-full max-w-[500px] mx-auto py-8 animate-fade-in">
          <Card className="overflow-hidden shadow-xl border-0 bg-white">
            <CardContent className="p-6">
              {/* Headline */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-grey-900 mb-2">
                  Discover How AI Transforms Customer Engagement
                </h3>
                <p className="text-grey-600 text-sm">
                  See real results from businesses using our AI chatbot solutions
                </p>
              </div>
              
              {/* Video Container */}
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-grey-900 ml-1" fill="currentColor" />
                  </div>
                </div>
                
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="AI Chatbot demo video"
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
                  <div className="w-full h-full bg-gradient-to-br from-brand-green-50 to-brand-green-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-brand-green-600 text-sm font-medium mb-2">
                        AI Demo Video
                      </div>
                      <div className="text-brand-green-500 text-xs">
                        Square Format (1:1)<br />
                        Professional Quality
                      </div>
                    </div>
                  </div>
                </video>
              </div>
              
              {/* Caption */}
              <div className="text-center mt-4 mb-6">
                <p className="text-grey-600 text-sm">
                  Watch how our chatbot improved conversions by 3x for RetailCorp
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="text-center">
                <Link to="/track/video-demo-desktop">
                  <Button 
                    size="lg" 
                    className="bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Book a Free AI Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile Video Ad Placements */}
      <div className={`lg:hidden ${className}`}>
        <div className="w-full max-w-[380px] mx-auto py-8 animate-fade-in">
          <Card className="overflow-hidden shadow-xl border-0 bg-white">
            <CardContent className="p-4">
              {/* Headline */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-grey-900 mb-2">
                  AI Chatbots That Actually Convert
                </h3>
                <p className="text-grey-600 text-sm">
                  Mobile-optimized AI solutions for modern businesses
                </p>
              </div>
              
              {/* Video Container */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg group">
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 text-grey-900 ml-1" fill="currentColor" />
                  </div>
                </div>
                
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="AI Chatbot mobile demo video"
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
                  <div className="w-full h-full bg-gradient-to-br from-brand-green-50 to-brand-green-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-brand-green-600 text-sm font-medium mb-2">
                        Mobile AI Demo
                      </div>
                      <div className="text-brand-green-500 text-xs">
                        Vertical Format (4:5)<br />
                        Mobile Optimized
                      </div>
                    </div>
                  </div>
                </video>
              </div>
              
              {/* Caption */}
              <div className="text-center mt-4 mb-6">
                <p className="text-grey-600 text-sm">
                  Mobile-first chatbot increasing engagement by 250%
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="text-center">
                <Link to="/track/video-demo-mobile">
                  <Button 
                    size="default" 
                    className="bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl w-full"
                  >
                    Download Free Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Alternative placement - Inline within content */}
      <div className="w-full my-12 animate-fade-in">
        <div className="max-w-[450px] mx-auto">
          <Card className="overflow-hidden shadow-xl border-0 bg-white">
            <CardContent className="p-6">
              {/* Headline */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-grey-900 mb-2">
                  Ready to Scale Your Business with AI?
                </h3>
                <p className="text-grey-600 text-sm">
                  Join 500+ companies already using our AI solutions
                </p>
              </div>
              
              {/* Desktop: Square aspect ratio */}
              <div className="hidden sm:block relative aspect-square rounded-xl overflow-hidden shadow-lg group">
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 text-grey-900 ml-1" fill="currentColor" />
                  </div>
                </div>
                
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="AI business transformation demo video"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280'%3EVideo Loading...%3C/text%3E%3C/svg%3E"
                >
                  <source 
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
                    type="video/mp4" 
                  />
                  {/* Fallback content */}
                  <div className="w-full h-full bg-gradient-to-br from-brand-green-50 to-brand-green-100 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-brand-green-600 text-sm font-semibold mb-2">
                        AI Business Demo
                      </div>
                      <div className="text-brand-green-500 text-xs">
                        Desktop: Square (1:1)<br />
                        Scale Your Success
                      </div>
                    </div>
                  </div>
                </video>
              </div>
              
              {/* Mobile: Vertical aspect ratio */}
              <div className="sm:hidden relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg group">
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-4 h-4 text-grey-900 ml-1" fill="currentColor" />
                  </div>
                </div>
                
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="AI business transformation mobile demo video"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='400' viewBox='0 0 320 400'%3E%3Crect width='320' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280'%3EVideo Loading...%3C/text%3E%3C/svg%3E"
                >
                  <source 
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" 
                    type="video/mp4" 
                  />
                  {/* Fallback content */}
                  <div className="w-full h-full bg-gradient-to-br from-brand-green-50 to-brand-green-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-brand-green-600 text-sm font-semibold mb-2">
                        Mobile AI Demo
                      </div>
                      <div className="text-brand-green-500 text-xs">
                        Mobile: Vertical (4:5)<br />
                        Transform Your Business
                      </div>
                    </div>
                  </div>
                </video>
              </div>
              
              {/* Caption */}
              <div className="text-center mt-4 mb-6">
                <p className="text-grey-600 text-sm">
                  See how TechStartup increased customer satisfaction by 85%
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="text-center">
                <Link to="/track/video-demo-inline">
                  <Button 
                    size="lg" 
                    className="bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MetaVideoAds;