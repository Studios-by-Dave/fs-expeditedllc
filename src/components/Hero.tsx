import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, Clock } from "lucide-react";
import heroBg from "@/assets/hero-painter.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 opacity-0 animate-fade-up">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Fully Insured & Licensed
            </span>
          </div>

          {/* Headline */}
          <h1 className="opacity-0 animate-fade-up animation-delay-150">
            <span className="font-script text-3xl md:text-4xl lg:text-5xl text-primary block mb-2">
              We take the pain out of
            </span>
            <span className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide text-foreground">
              PAINTING
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-up animation-delay-300">
            Interior, exterior, and specialty finishes — Shelby's trusted painting
            professionals. Free estimates & fully insured.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-450">
            <Button variant="hero" asChild>
              <a href="#contact">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="hero-outline" asChild>
              <a href="#gallery">View Texture Gallery</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-md opacity-0 animate-fade-up animation-delay-600">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <Star className="w-5 h-5 text-primary fill-primary" />
                <Star className="w-5 h-5 text-primary fill-primary" />
                <Star className="w-5 h-5 text-primary fill-primary" />
                <Star className="w-5 h-5 text-primary fill-primary" />
              </div>
              <p className="text-sm text-muted-foreground">5-Star Reviews</p>
            </div>
            <div className="text-center border-x border-border px-4">
              <p className="text-2xl font-serif font-bold text-foreground">10+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-1">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Same-Day Quotes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};
