import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent, trackPhoneClick } from "@/lib/analytics";
import { getUtm } from "@/lib/utm";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
            Get In Touch
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-wider">
            CONTACT US
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-sans max-w-xl mx-auto">
            Ready to get your materials hauled? Give us a call for a free, no-obligation estimate.
          </p>

          {/* Phone CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 animate-pulse">Call Joe!</span>
              <Button variant="hero" size="xl" className="shimmer-effect" asChild>
                <a href="tel:8653649011" onClick={() => trackPhoneClick('8653649011', 'contact_primary')} className="text-xl" title="Joe">
                  <Phone className="w-6 h-6 text-green-500" />
                  (865) 364-9011
                </a>
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 animate-pulse">Call Luke!</span>
              <Button variant="hero" size="xl" className="shimmer-effect" asChild>
                <a href="tel:7047518141" onClick={() => trackPhoneClick('7047518141', 'contact_secondary')} className="text-xl" title="Luke">
                  <Phone className="w-6 h-6 text-green-500" />
                  (704) 751-8141
                </a>
              </Button>
            </div>
          </div>

          {/* Info row */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <a href="mailto:Aldrich2577@gmail.com" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-xl group-hover:bg-primary/20 transition-colors">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <p className="text-base text-muted-foreground font-sans">Email Us</p>
              <p className="text-foreground font-bold text-base">Aldrich2577@gmail.com</p>
            </a>

            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-xl">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <p className="text-base text-muted-foreground font-sans">Service Area</p>
              <p className="text-foreground font-bold text-base">100-Mile Radius of Shelby, NC</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-xl">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <p className="text-base text-muted-foreground font-sans">Peace of Mind</p>
              <p className="text-foreground font-bold text-base">Fully Licensed & Insured</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
