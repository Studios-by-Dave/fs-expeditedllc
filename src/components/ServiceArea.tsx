import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export const ServiceArea = () => {
  return (
    <section className="section-padding bg-gradient-card relative">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
            Coverage Area
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-wider">
            WHERE WE SERVE
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-sans">
            Proudly providing expedited hauling services within a 100-mile radius of Shelby, North Carolina.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Map with radius */}
          <div className="bg-card border border-border p-2 mb-8">
            <div className="relative w-full aspect-[16/10] bg-muted overflow-hidden">
              <iframe
                title="Service Area Map — 100 Mile Radius of Shelby, NC"
                src="https://www.google.com/maps/embed?pb=!1m1!1e1!2m1!1sShelby,+NC+28152!3m1!2s!4m8!1m2!2m1!1sShelby+NC+28152!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
              {/* Radius overlay label */}
              <div className="absolute bottom-3 left-3 bg-background/90 border border-border px-3 py-1.5 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground font-sans">
                  100-Mile Radius — Shelby, NC 28152
                </span>
              </div>
            </div>
          </div>

          {/* Info card */}
          <div className="bg-card border border-border p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-xl font-bold text-foreground tracking-wider">
                SHELBY, NC — 100 MILE RADIUS
              </h3>
            </div>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              We service all areas within 100 miles of Shelby, North Carolina (28152), including Charlotte, Gastonia, Hickory, Asheville, Greenville, Spartanburg, and surrounding communities.
            </p>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8 font-sans">
          Outside the 100-mile zone? <Link to="/contact" className="text-primary hover:underline font-semibold">Contact us</Link> — we travel for the right job.
        </p>
      </div>
    </section>
  );
};
