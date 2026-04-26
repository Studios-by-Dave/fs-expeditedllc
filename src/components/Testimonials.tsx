import { SenjaLink } from "@/components/SenjaLink";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
            Client Reviews
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-wider">
            WHAT CLIENTS SAY
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-sans">
            Real reviews from our valued clients. See what they say about our dump truck hauling services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <SenjaLink />
        </div>
      </div>
    </section>
  );
};
