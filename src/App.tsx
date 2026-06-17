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
// WhyUsPage removed - content merged into AboutPage as collapsible section
import AboutPage from "./pages/AboutPage";
import ProcessPage from "./pages/ProcessPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import ServiceAreaPage from "./pages/ServiceAreaPage";
import ShelbyNCPage from "./pages/service-area/ShelbyNCPage";
import CharlotteNCPage from "./pages/service-area/CharlotteNCPage";
import GastoniaNCPage from "./pages/service-area/GastoniaNCPage";
import AshevilleNCPage from "./pages/service-area/AshevilleNCPage";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import BlogArticlePage2 from "./pages/BlogArticlePage2";
import BlogArticlePage3 from "./pages/BlogArticlePage3";
import BlogArticlePage4 from "./pages/BlogArticlePage4";
import BlogArticlePage5 from "./pages/BlogArticlePage5";
import BlogArticlePage6 from "./pages/BlogArticlePage6";
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
      <Route path="/about" element={<AboutPage />} />
      <Route path="/promos" element={<PromoPage />} />
      {/* Redirects for old Why Us URLs */}
      <Route path="/why-us" element={<Navigate to="/about" replace />} />
      <Route path="/why-us/about" element={<Navigate to="/about" replace />} />
      <Route path="/why-us/promos" element={<Navigate to="/promos" replace />} />
      <Route path="/process" element={<ProcessPage />} />
      <Route path="/reviews" element={<TestimonialsPage />} />
      <Route path="/testimonials" element={<Navigate to="/reviews" replace />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/blog/dump-trucks-expedited-local-hauling-shelby-charlotte-nc" element={<BlogArticlePage />} />
      <Route path="/blog/why-manufacturers-choose-fs-expedited-trucking-emergency-freight" element={<BlogArticlePage2 />} />
      <Route path="/blog/expedited-dump-truck-services-prevent-costly-project-delays-north-carolina" element={<BlogArticlePage3 />} />
      <Route path="/blog/why-fs-expedited-reliable-dump-truck-services-shelby-nc" element={<BlogArticlePage4 />} />
      <Route path="/blog/material-delivery-guide-shelby-nc-construction-projects" element={<BlogArticlePage5 />} />
      <Route path="/blog/why-north-carolina-calls-us-when-the-job-cant-wait" element={<BlogArticlePage6 />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/service-area" element={<ServiceAreaPage />} />
      <Route path="/service-area/shelby-nc" element={<ShelbyNCPage />} />
      <Route path="/service-area/charlotte-nc" element={<CharlotteNCPage />} />
      <Route path="/service-area/gastonia-nc" element={<GastoniaNCPage />} />
      <Route path="/service-area/asheville-nc" element={<AshevilleNCPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      {/* Redirects for old URLs */}
      <Route path="/services/gravel-sand-delivery" element={<Navigate to="/services/material-delivery/gravel-delivery" replace />} />
      <Route path="/services/aggregate-transport" element={<Navigate to="/services/site-services/aggregate-transport" replace />} />
      <Route path="/services/debris-removal" element={<Navigate to="/services/site-services/debris-removal" replace />} />
      <Route path="/services/site-prep" element={<Navigate to="/services/site-services/site-prep" replace />} />
      <Route path="/services/land-clearing" element={<Navigate to="/services/site-services/land-clearing" replace />} />
      <Route path="/services/commercial-hauling" element={<Navigate to="/services/emergency-expedited/commercial-hauling" replace />} />
      <Route path="/services/dump-truck-hauling" element={<Navigate to="/services/emergency-expedited/dump-truck-hauling" replace />} />
      <Route path="/services/gravel-delivery" element={<Navigate to="/services/material-delivery/gravel-delivery" replace />} />
      <Route path="/services/sand-delivery" element={<Navigate to="/services/material-delivery/sand-delivery" replace />} />
      <Route path="/services/soil-delivery" element={<Navigate to="/services/material-delivery/soil-delivery" replace />} />
      <Route path="/services/retaining-walls" element={<Navigate to="/services/site-services/retaining-walls" replace />} />
      <Route path="/services/underground-utilities" element={<Navigate to="/services/site-services/underground-utilities" replace />} />
      <Route path="/services/land-grading" element={<Navigate to="/services/site-services/land-grading" replace />} />
      <Route path="/services/emergency-expedited-service" element={<Navigate to="/services/emergency-expedited/emergency-expedited" replace />} />
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
