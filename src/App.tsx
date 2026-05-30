import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ServiceCategoryPage from "./pages/ServiceCategoryPage";
import SubServicePage from "./pages/SubServicePage";
import DumpTrucksServicesPage from "./pages/DumpTrucksServicesPage";
import ServiceRouter from "./pages/ServiceRouter";
import WhyUsPage from "./pages/WhyUsPage";
import ProcessPage from "./pages/ProcessPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import ServiceAreaPage from "./pages/ServiceAreaPage";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import BlogArticlePage2 from "./pages/BlogArticlePage2";
import BlogArticlePage3 from "./pages/BlogArticlePage3";
import BlogArticlePage4 from "./pages/BlogArticlePage4";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import PromoPage from "./pages/PromoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export const AppContent = () => (
  <>
    <Toaster />
    <Sonner />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/dump-trucks-hauling-services" element={<DumpTrucksServicesPage />} />
      <Route path="/services/:slug" element={<ServiceRouter />} />
      <Route path="/services/:category/:service" element={<SubServicePage />} />
      <Route path="/why-us" element={<WhyUsPage />} />
      <Route path="/why-us/promos" element={<PromoPage />} />
      <Route path="/process" element={<ProcessPage />} />
      <Route path="/reviews" element={<TestimonialsPage />} />
      <Route path="/testimonials" element={<Navigate to="/reviews" replace />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/blog/dump-trucks-expedited-local-hauling-shelby-charlotte-nc" element={<BlogArticlePage />} />
      <Route path="/blog/why-manufacturers-choose-fs-expedited-trucking-emergency-freight" element={<BlogArticlePage2 />} />
      <Route path="/blog/expedited-dump-truck-services-prevent-costly-project-delays-north-carolina" element={<BlogArticlePage3 />} />
      <Route path="/blog/why-fs-hauling-reliable-dump-truck-services-shelby-nc" element={<BlogArticlePage4 />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/service-area" element={<ServiceAreaPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      {/* Redirects for old URLs */}
      <Route path="/services/gravel-sand-delivery" element={<Navigate to="/services/material-delivery/gravel-delivery" replace />} />
      <Route path="/services/aggregate-transport" element={<Navigate to="/services/material-delivery/aggregate-transport" replace />} />
      <Route path="/services/debris-removal" element={<Navigate to="/services/site-services/debris-removal" replace />} />
      <Route path="/services/site-prep" element={<Navigate to="/services/site-services/site-prep" replace />} />
      <Route path="/services/land-clearing" element={<Navigate to="/services/site-services/land-clearing" replace />} />
      <Route path="/services/commercial-hauling" element={<Navigate to="/services/emergency-expedited/commercial-hauling" replace />} />
      <Route path="/services/dump-truck-hauling" element={<Navigate to="/services/emergency-expedited/dump-truck-hauling" replace />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
