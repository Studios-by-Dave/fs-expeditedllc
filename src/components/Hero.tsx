import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Clock } from "lucide-react";
import heroBg from "@/assets/hero-truck.jpg";
import flagVideo from "@/assets/flag-waving.mp4";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}>

        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-8 opacity-0 animate-fade-up">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-semibold uppercase tracking-wider">
              Licensed & Insured
            </span>
          </div>

          {/* Headline with flag overlay */}
          <div className="relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute -top-4 -left-8 -right-8 -bottom-4 w-[calc(100%+4rem)] h-[calc(100%+2rem)] object-cover opacity-[0.10] pointer-events-none"
              src={flagVideo}
            />
            <h1 className="relative opacity-0 animate-fade-up animation-delay-150">
              <span className="text-5xl lg:text-8xl font-bold tracking-wider text-foreground leading-none md:text-6xl font-sans">
                FAST. RELIABLE.
              </span>
              <br />
              <span className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-primary leading-none">
                EXPEDITED HAULING.
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-up animation-delay-300 font-sans">
            Professional dump truck & expedited hauling services within a 100-mile radius of Shelby, NC. Competitive rates & fast turnaround.
          
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 opacity-0 animate-fade-up animation-delay-450">
            <Button variant="hero" size="xl" className="text-xl px-12 py-8 [&_svg]:size-6" asChild>
              <a href="tel:8653649011">
                <Phone className="w-6 h-6" />
                (865) 364-9011
              </a>
            </Button>
            <Button variant="hero" size="xl" className="text-xl px-12 py-8 [&_svg]:size-6" asChild>
              <a href="tel:7047518141">
                <Phone className="w-6 h-6" />
                (704) 751-8141
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg opacity-0 animate-fade-up animation-delay-600">
            <div className="text-center">
              <Truck className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground font-sans">Heavy Equipment</p>
            </div>
            <div className="text-center border-x border-border px-4">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground font-sans">Fast Turnaround</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground font-sans">Fully Insured</p>
            </div>
          </div>
        </div>
      </div>

      {/* Diamond plate bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-4 diamond-plate" />
    </section>);

};