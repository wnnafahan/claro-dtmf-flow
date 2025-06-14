
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FlowChartFullscreen from "./pages/FlowChartFullscreen";
import HutchPortabilityFullscreen from "./pages/HutchPortabilityFullscreen";
import BrandingGuidelines from "./pages/BrandingGuidelines";
import ClaroReports from "./pages/ClaroReports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/flowchart" element={<FlowChartFullscreen />} />
          <Route path="/hutch-portability" element={<HutchPortabilityFullscreen />} />
          <Route path="/branding-guidelines" element={<BrandingGuidelines />} />
          <Route path="/claro-reports" element={<ClaroReports />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
