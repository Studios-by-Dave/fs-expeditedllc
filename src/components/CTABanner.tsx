import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export const CTABanner = () => {
  return (
    <section className="relative py-16 md:py-20">
      {/* Diamond plate background */}
      <div className="absolute inset-0 diamond-plate opacity-30" />
      <div className="absolute inset-0 bg-background/80" />

      {/* Yellow top and bottom bars */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-wider">
            NEED MATERIAL{" "}
            <span className="text-primary">HAULED TODAY?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-sans">
            Our team is standing by to dispatch a truck to your job site. Fast, reliable, guaranteed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <a href="tel:8653649011">
                <Phone className="w-5 h-5" />
                (865) 364-9011
              </a>
            </Button>
            <Button variant="hero" asChild>
              <a href="tel:7047518141">
                <Phone className="w-5 h-5" />
                (704) 751-8141
              </a>
            </Button>
            <Button variant="hero-outline" asChild>
              <a href="tel:8653649011">
                Request a Quote — Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
