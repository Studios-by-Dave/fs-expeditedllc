import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

const TestimonialsPage = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Customer Reviews — F&S Expedited LLC"
      description="Read what clients say about F&S Expedited's dump truck hauling and delivery services near Shelby, NC. Real verified reviews from our customers."
      canonical="/reviews"
    />
    <Navigation />
    <div className="pt-20">
      <Testimonials />
      <CTABanner />
    </div>
    <Footer />
  </div>
);

export default TestimonialsPage;
