import { Navigation } from "@/components/Navigation";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

const TestimonialsPage = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <div className="pt-20">
      <Testimonials />
      <CTABanner />
    </div>
    <Footer />
  </div>
);

export default TestimonialsPage;
