import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

const WhyUsPage = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Why Choose F&S Expedited LLC — Licensed & Insured Hauling"
      description="Licensed, insured, and reliable. F&S Expedited offers fast turnaround, competitive rates, and a modern fleet for dump truck hauling near Shelby, NC."
      canonical="/why-us"
    />
    <Navigation />
    <div className="pt-20">
      <WhyChooseUs />
      <CTABanner />
    </div>
    <Footer />
  </div>
);

export default WhyUsPage;
