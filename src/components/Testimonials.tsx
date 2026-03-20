import { Star, MessageSquare } from "lucide-react";

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
            We're collecting feedback from our valued clients — real reviews are on the way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative bg-card border border-border p-6 flex flex-col items-center justify-center min-h-[220px]"
            >
              <MessageSquare className="w-10 h-10 text-primary/20 mb-4" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-border" />
                ))}
              </div>
              <p className="text-muted-foreground font-sans text-center text-sm">
                Fresh Reviews Coming Soon
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
