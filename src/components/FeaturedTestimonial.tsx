import { Star } from "lucide-react";

export const FeaturedTestimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-12 shadow-xl">
            {/* Stars */}
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-10 h-10 fill-yellow-400 text-yellow-400"
                  strokeWidth={1.5}
                />
              ))}
            </div>

            {/* Review Content */}
            <blockquote className="text-center mb-8">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                "F&S Expedited LLC provided outstanding dump truck hauling services from start to finish. Their team was professional, dependable, and arrived on schedule with the right equipment for the job. Communication was excellent, pricing was fair, and the entire hauling process was handled safely and efficiently."
              </p>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium mt-4">
                "If you need reliable dump truck hauling, construction material delivery, dirt hauling, gravel hauling, debris removal, or site material transportation in the Charlotte, Gastonia, or surrounding North Carolina area, I highly recommend F&S Expedited LLC. They are a trustworthy local trucking company that takes pride in its work and delivers excellent customer service. We will absolutely use them again for future landscaping and construction projects."
              </p>
            </blockquote>

            {/* Client Info */}
            <div className="text-center pt-6 border-t border-border">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                Premier Landscape & Turf
              </h3>
              <p className="text-muted-foreground text-sm">
                premierturf704@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
