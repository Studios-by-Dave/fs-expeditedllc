import { Navigation } from "@/components/Navigation";
import { Process } from "@/components/Process";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

const ProcessPage = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <div className="pt-20">
      <Process />
      <CTABanner />
    </div>
    <Footer />
  </div>
);

export default ProcessPage;
