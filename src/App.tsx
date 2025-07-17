
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import CaseStudies from "./pages/CaseStudies";
import CinemaExperienceCaseStudy from "./pages/CinemaExperienceCaseStudy";
import WhatsApp from "./pages/channels/WhatsApp";
import FacebookChatbot from "./pages/channels/FacebookChatbot";
import InstagramChatbot from "./pages/channels/InstagramChatbot";
import WebsiteChatbot from "./pages/channels/WebsiteChatbot";
import Support from "./pages/ai-agents/Support";
import Sales from "./pages/ai-agents/Sales";
import Booking from "./pages/ai-agents/Booking";
import LeadQualification from "./pages/ai-agents/LeadQualification";
import Retail from "./pages/industries/Retail";
import Travel from "./pages/industries/Travel";
import Fintech from "./pages/industries/Fintech";
import Education from "./pages/industries/Education";
import MediaEntertainment from "./pages/industries/MediaEntertainment";
import Healthcare from "./pages/industries/Healthcare";
import GenerativeAIEcommerce from "./pages/blog/GenerativeAIEcommerce";
import AIAgentsBanking from "./pages/blog/AIAgentsBanking";
import AIVoiceAgents from "./pages/blog/AIVoiceAgents";
import AIAgentsVsChatbots from "./pages/blog/AIAgentsVsChatbots";
import GuideToMessengerChatbots from "./pages/blog/GuideToMessengerChatbots";
import FacebookMessengerEcommerce from "./pages/blog/FacebookMessengerEcommerce";
import WhatsAppChatbotShopping from "./pages/blog/WhatsAppChatbotShopping";
import Testimonials from "./pages/Testimonials";
import CustomerShowcase from "./pages/CustomerShowcase";
import KnowledgeCenter from "./pages/KnowledgeCenter";
import Webinars from "./pages/Webinars";
import WebinarDetail from "./pages/webinars/WebinarDetail";
import ReportsResearch from "./pages/ReportsResearch";
import CompanyBlog from "./pages/CompanyBlog";
import TechBlog from "./pages/TechBlog";
import ConversationsOnAI from "./pages/ConversationsOnAI";
import NotFound from "./pages/NotFound";

// Company Blog Detail Pages
import FutureOfCustomerExperience from "./pages/company-blog/FutureOfCustomerExperience";
import OurJourneyStartupToLeader from "./pages/company-blog/OurJourneyStartupToLeader";
import SeriesAFunding from "./pages/company-blog/SeriesAFunding";
import BuildingEthicalAI from "./pages/company-blog/BuildingEthicalAI";
import TeamSpotlight from "./pages/company-blog/TeamSpotlight";
import PartnershipAnnouncement from "./pages/company-blog/PartnershipAnnouncement";

// Report Detail Pages
import StateOfAIAgents2024 from "./pages/reports/StateOfAIAgents2024";
import CustomerServiceAutomation from "./pages/reports/CustomerServiceAutomation";
import EcommerceAIAgents from "./pages/reports/EcommerceAIAgents";

// Guide Detail Pages
import CompleteGuideAIAgents from "./pages/guides/CompleteGuideAIAgents";
import AIAgentImplementationChecklist from "./pages/guides/AIAgentImplementationChecklist";
import ROIMeasurementFramework from "./pages/guides/ROIMeasurementFramework";
import BestPracticesTraining from "./pages/guides/BestPracticesTraining";
import SecurityComplianceGuide from "./pages/guides/SecurityComplianceGuide";
import TeamCollaboration from "./pages/guides/TeamCollaboration";
import AdvancedAutomation from "./pages/guides/AdvancedAutomation";
import IntegrationPlaybook from "./pages/guides/IntegrationPlaybook";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/cinema-experience" element={<CinemaExperienceCaseStudy />} />
            <Route path="/ai-agents/support" element={<Support />} />
            <Route path="/ai-agents/sales" element={<Sales />} />
            <Route path="/ai-agents/booking" element={<Booking />} />
            <Route path="/ai-agents/lead-qualification" element={<LeadQualification />} />
            <Route path="/channels/whatsapp" element={<WhatsApp />} />
            <Route path="/channels/facebook-chatbot" element={<FacebookChatbot />} />
            <Route path="/channels/instagram-chatbots" element={<InstagramChatbot />} />
            <Route path="/channels/website-chatbot" element={<WebsiteChatbot />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/travel" element={<Travel />} />
            <Route path="/industries/fintech" element={<Fintech />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/media-entertainment" element={<MediaEntertainment />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/blog/generative-ai-ecommerce-marketing-applications" element={<GenerativeAIEcommerce />} />
            <Route path="/blog/ai-agents-use-cases-in-banking" element={<AIAgentsBanking />} />
            <Route path="/blog/ai-voice-agents-for-customer-experience" element={<AIVoiceAgents />} />
            <Route path="/blog/ai-agents-vs-traditional-chatbots" element={<AIAgentsVsChatbots />} />
            <Route path="/blog/guide-to-messenger-chatbots" element={<GuideToMessengerChatbots />} />
            <Route path="/blog/facebook-messenger-for-ecommerce" element={<FacebookMessengerEcommerce />} />
            <Route path="/blog/whatsapp-chatbot-shopping-experience" element={<WhatsAppChatbotShopping />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/customer-showcase" element={<CustomerShowcase />} />
            <Route path="/knowledge-center" element={<KnowledgeCenter />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/webinars/:slug" element={<WebinarDetail />} />
            <Route path="/reports-research" element={<ReportsResearch />} />
            <Route path="/company-blog" element={<CompanyBlog />} />
            <Route path="/tech-blog" element={<TechBlog />} />
            <Route path="/conversations-on-ai" element={<ConversationsOnAI />} />
            
            {/* Company Blog Detail Routes */}
            <Route path="/company-blog/future-of-customer-experience" element={<FutureOfCustomerExperience />} />
            <Route path="/company-blog/our-journey-startup-to-leader" element={<OurJourneyStartupToLeader />} />
            <Route path="/company-blog/series-a-funding" element={<SeriesAFunding />} />
            <Route path="/company-blog/building-ethical-ai" element={<BuildingEthicalAI />} />
            <Route path="/company-blog/team-spotlight" element={<TeamSpotlight />} />
            <Route path="/company-blog/partnership-announcement" element={<PartnershipAnnouncement />} />
            
            {/* Report Detail Routes */}
            <Route path="/reports/state-of-ai-agents-2024" element={<StateOfAIAgents2024 />} />
            <Route path="/reports/customer-service-automation" element={<CustomerServiceAutomation />} />
            <Route path="/reports/ecommerce-ai-agents" element={<EcommerceAIAgents />} />
            
            {/* Guide Detail Routes */}
            <Route path="/guides/complete-guide-to-ai-agents" element={<CompleteGuideAIAgents />} />
            <Route path="/guides/ai-agent-implementation-checklist" element={<AIAgentImplementationChecklist />} />
            <Route path="/guides/roi-measurement-framework" element={<ROIMeasurementFramework />} />
            <Route path="/guides/best-practices-for-training" element={<BestPracticesTraining />} />
            <Route path="/guides/security-compliance-guide" element={<SecurityComplianceGuide />} />
            <Route path="/guides/team-collaboration" element={<TeamCollaboration />} />
            <Route path="/guides/advanced-automation" element={<AdvancedAutomation />} />
            <Route path="/guides/integration-playbook" element={<IntegrationPlaybook />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
