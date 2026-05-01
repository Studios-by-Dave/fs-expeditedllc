import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema } from "@/data/seo-schemas";

const TestimonialsPage = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "Reviews", url: "https://www.fs-expeditedllc.com/reviews" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Customer Reviews — F&S Expedited LLC"
        description="Read what clients say about F&S Expedited's dump truck hauling and delivery services near Shelby, NC. Real verified reviews from our customers."
        canonical="/reviews"
        schema={breadcrumbSchema(breadcrumbs)}
      />
      <Navigation />
      <main className="pt-20">
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
