
import React from 'react';
import Navigation from '../components/Navigation';
import LeadCapturePopup from '../components/LeadCapturePopup';
import MetaVideoAds from '../components/MetaVideoAds';
import { useLeadCapture } from '../hooks/useLeadCapture';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import QuickStatsSection from '../components/sections/QuickStatsSection';
import TrustBadgesSection from '../components/sections/TrustBadgesSection';
import StatsSection from '../components/sections/StatsSection';
import AnalyticsDashboardSection from '../components/sections/AnalyticsDashboardSection';
import AIAgentBuilderSection from '../components/sections/AIAgentBuilderSection';
import EnterpriseDataSection from '../components/sections/EnterpriseDataSection';
import AIAgentTypesSection from '../components/sections/AIAgentTypesSection';
import AIVoiceAgentsSection from '../components/sections/AIVoiceAgentsSection';

import AIHumanCollaborationSection from '../components/sections/AIHumanCollaborationSection';
import AIControlSection from '../components/sections/AIControlSection';
import FeaturedTestimonialSection from '../components/sections/FeaturedTestimonialSection';
import PartnerLogosSection from '../components/sections/PartnerLogosSection';
import HaptikPartnershipSection from '../components/sections/HaptikPartnershipSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import RecognitionSection from '../components/sections/RecognitionSection';
import BlogSection from '../components/sections/BlogSection';

import CTASection from '../components/sections/CTASection';
import FAQSection from '../components/sections/FAQSection';

const Index = () => {
  const { showPopup, closePopup } = useLeadCapture(15); // Show popup after 15 seconds

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Lead Capture Popup */}
      <LeadCapturePopup isOpen={showPopup} onClose={closePopup} />
      
      <HeroSection />
      
      {/* Meta Video Ad Placement - After Hero */}
      <MetaVideoAds className="my-8" />
      <QuickStatsSection />
      <StatsSection />
      <AnalyticsDashboardSection />
      <AIAgentBuilderSection />
      <EnterpriseDataSection />
      <AIAgentTypesSection />
      <AIVoiceAgentsSection />
      
      <AIHumanCollaborationSection />
      <AIControlSection />
      <FeaturedTestimonialSection />
      <RecognitionSection />
      <BlogSection />
      
      <PartnerLogosSection />
      <HaptikPartnershipSection />
      
      {/* Meta Video Ad Placement - Mid Content */}
      <MetaVideoAds className="my-12" />
      
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />

      <Footer />
    </div>
  );
};

export default Index;
