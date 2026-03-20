import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
            Get In Touch
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-wider">
            CONTACT US
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-sans max-w-xl mx-auto">
            Ready to get your materials hauled? Give us a call for a free, no-obligation estimate.
          </p>

          {/* Phone CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:8653649011">
                <Phone className="w-5 h-5" />
                (865) 364-9011
              </a>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="tel:7047518141">
                <Phone className="w-5 h-5" />
                (704) 751-8141
              </a>
            </Button>
          </div>

          {/* Info row */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <a href="mailto:info@fsexpedited.com" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground font-sans">Email Us</p>
              <p className="text-foreground font-bold text-sm">info@fsexpedited.com</p>
            </a>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground font-sans">Service Area</p>
              <p className="text-foreground font-bold text-sm">100-Mile Radius of Shelby, NC</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground font-sans">Peace of Mind</p>
              <p className="text-foreground font-bold text-sm">Fully Licensed & Insured</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
