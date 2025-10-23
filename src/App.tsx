import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import { Suspense, lazy } from "react";
import PageLoader from "./components/PageLoader";
// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Academy = lazy(() => import("./pages/Academy"));
const About = lazy(() => import("./pages/About"));
const Leadership = lazy(() => import("./pages/Leadership"));
const Careers = lazy(() => import("./pages/Careers"));
const Research = lazy(() => import("./pages/Research"));
const Contact = lazy(() => import("./pages/Contact"));
const NextDocIndia = lazy(() => import("./pages/NextDocIndia"));
const NextDocPG = lazy(() => import("./pages/NextDocPG"));
const NextDocMed = lazy(() => import("./pages/NextDocMed"));
const NextDocCare = lazy(() => import("./pages/NextDocCare"));
const NextDocLabs = lazy(() => import("./pages/NextDocLabs"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const GDPR = lazy(() => import("./pages/GDPR"));
const Cookies = lazy(() => import("./pages/Cookies"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const Security = lazy(() => import("./pages/Security"));
const Subprocessors = lazy(() => import("./pages/Subprocessors"));
const NotFound = lazy(() => import("./pages/NotFound"));
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-6 focus:py-3 focus:bg-medical-blue focus:text-white focus:rounded-md focus:shadow-xl"
        >
          Skip to main content
        </a>
        <Suspense fallback={<PageLoader />}>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nextdoc-india" element={<NextDocIndia />} />
          <Route path="/nextdoc-pg" element={<NextDocPG />} />
          <Route path="/nextdoc-med" element={<NextDocMed />} />
          <Route path="/nextdoc-care" element={<NextDocCare />} />
          <Route path="/nextdoc-labs" element={<NextDocLabs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/security" element={<Security />} />
          <Route path="/subprocessors" element={<Subprocessors />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
</HelmetProvider>
  </ErrorBoundary>
);

export default App;
