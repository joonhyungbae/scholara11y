import "./i18n/config";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import GoldenStandard from "./pages/GoldenStandard";
import Colors from "./pages/Colors";
import Typography from "./pages/Typography";
import Regulations from "./pages/Regulations";
import AltText from "./pages/AltText";
import CodeLibrary from "./pages/CodeLibrary";
import PdfChecklist from "./pages/PdfChecklist";
import Publishers from "./pages/Publishers";
import Downloads from "./pages/Downloads";
import References from "./pages/References";
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
            <Route path="/golden-standard" element={<GoldenStandard />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/typography" element={<Typography />} />
            <Route path="/regulations" element={<Regulations />} />
            <Route path="/alt-text" element={<AltText />} />
            <Route path="/code-library" element={<CodeLibrary />} />
            <Route path="/pdf-checklist" element={<PdfChecklist />} />
            <Route path="/publishers" element={<Publishers />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/references" element={<References />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
