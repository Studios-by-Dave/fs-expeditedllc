import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Contact Us — Get a Free Hauling Quote"
      description="Call F&S Expedited LLC for a free hauling estimate. Dump truck services within 100 miles of Shelby, NC. Call (865) 364-9011 or (704) 751-8141."
      canonical="/contact"
    />
    <Navigation />
    <div className="pt-20">
      <Contact />
    </div>
    <Footer />
  </div>
);

export default ContactPage;
