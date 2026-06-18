import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { getUtm } from "@/lib/utm";

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-wider">
            NEED MATERIAL{" "}
            <span className="text-primary">HAULED TODAY?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-sans">
            Our team is standing by to dispatch a truck to your job site. Fast, reliable, guaranteed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 animate-pulse">Call Joe!</span>
              <Button variant="hero" asChild>
                <a href="tel:8653649011" onClick={() => trackEvent('phone_click', { label: 'ctabanner_primary', number: '8653649011', ...getUtm() })}>
                  <Phone className="w-5 h-5 text-green-500" />
                  (865) 364-9011
                </a>
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 animate-pulse">Call Luke!</span>
              <Button variant="hero" asChild>
                <a href="tel:7047518141" onClick={() => trackEvent('phone_click', { label: 'ctabanner_secondary', number: '7047518141', ...getUtm() })}>
                  <Phone className="w-5 h-5 text-green-500" />
                  (704) 751-8141
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
