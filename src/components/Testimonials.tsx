import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mike Hernandez",
    location: "Charlotte, NC",
    rating: 5,
    text: "F&S delivered 40 tons of gravel to our construction site on short notice. Professional crew, fair pricing, and they showed up exactly when they said they would. Will use again.",
    project: "Gravel Delivery",
  },
  {
    id: 2,
    name: "David Patterson",
    location: "Knoxville, TN",
    rating: 5,
    text: "Best hauling company I've worked with in 15 years of contracting. They handled all the debris removal for our demolition project quickly and cleanly. Top-notch service.",
    project: "Debris Removal",
  },
  {
    id: 3,
    name: "Sarah Collins",
    location: "Gastonia, NC",
    rating: 5,
    text: "Called F&S for an emergency expedited haul and they had a truck on-site within hours. Their equipment is well-maintained and the operators are skilled professionals.",
    project: "Emergency Hauling",
  },
];

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
            Don't take our word for it — hear from contractors and businesses who trust F&S Expedited.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative bg-card border border-border p-6 hover-card-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              <p className="text-foreground/90 leading-relaxed mb-6 font-sans">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground font-sans">{testimonial.location}</p>
                <p className="text-xs text-primary mt-1 font-sans font-semibold uppercase tracking-wider">
                  {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
