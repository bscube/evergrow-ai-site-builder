
import React from 'react';
import Navigation from '../components/Navigation';
import FloatingCTA from '../components/FloatingCTA';
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
import ProductDemoSection from '../components/sections/ProductDemoSection';
import AIHumanCollaborationSection from '../components/sections/AIHumanCollaborationSection';
import AIControlSection from '../components/sections/AIControlSection';
import FeaturedTestimonialSection from '../components/sections/FeaturedTestimonialSection';
import PartnerLogosSection from '../components/sections/PartnerLogosSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import FAQSection from '../components/sections/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FloatingCTA />
      
      <HeroSection />
      <QuickStatsSection />
      <TrustBadgesSection />
      <StatsSection />
      <AnalyticsDashboardSection />
      <AIAgentBuilderSection />
      <EnterpriseDataSection />
      <AIAgentTypesSection />
      <AIVoiceAgentsSection />
      <ProductDemoSection />
      <AIHumanCollaborationSection />
      <AIControlSection />
      <FeaturedTestimonialSection />
      <PartnerLogosSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />

      <Footer />
    </div>
  );
};

export default Index;
