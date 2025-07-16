
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
import NotFound from "./pages/NotFound";

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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
