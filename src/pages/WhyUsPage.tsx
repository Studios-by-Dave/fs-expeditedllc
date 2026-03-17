import { Navigation } from "@/components/Navigation";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

const WhyUsPage = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <div className="pt-20">
      <WhyChooseUs />
      <CTABanner />
    </div>
    <Footer />
  </div>
);

export default WhyUsPage;
