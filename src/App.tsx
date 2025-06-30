
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import AIBots from "./pages/AIBots";
import WhatsApp from "./pages/channels/WhatsApp";
import Support from "./pages/ai-agents/Support";
import Sales from "./pages/ai-agents/Sales";
import Booking from "./pages/ai-agents/Booking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ai-bots" element={<AIBots />} />
          <Route path="/ai-agents/support" element={<Support />} />
          <Route path="/ai-agents/sales" element={<Sales />} />
          <Route path="/ai-agents/booking" element={<Booking />} />
          <Route path="/channels/whatsapp" element={<WhatsApp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
