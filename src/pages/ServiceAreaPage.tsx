import { Navigation } from "@/components/Navigation";
import { ServiceArea } from "@/components/ServiceArea";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

const ServiceAreaPage = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <div className="pt-20">
      <ServiceArea />
      <CTABanner />
    </div>
    <Footer />
  </div>
);

export default ServiceAreaPage;
