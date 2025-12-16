import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Shelby, NC",
    rating: 5,
    text: "Candice and her team transformed our living room and kitchen. The attention to detail was incredible, and they left everything spotless. Highly recommend!",
    project: "Interior Painting",
  },
  {
    id: 2,
    name: "James Thompson",
    location: "Kings Mountain, NC",
    rating: 5,
    text: "Best painting experience we've ever had. Professional, punctual, and the exterior of our home looks brand new. The quote was fair and they stuck to it.",
    project: "Exterior Painting",
  },
  {
    id: 3,
    name: "Linda Garcia",
    location: "Gastonia, NC",
    rating: 5,
    text: "The faux finish they did in our dining room is absolutely stunning. Everyone who visits compliments it. True artists at work!",
    project: "Specialty Finishes",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest text-sm uppercase">
            Client Stories
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Don't just take our word for it — hear from our satisfied customers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative bg-card border border-border rounded-xl p-6 hover-card-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
                <p className="text-xs text-primary mt-1">
                  {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">See all reviews on Google</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
