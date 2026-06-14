import { Link } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";
import { getUtm } from "@/lib/utm";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Clock, Phone } from "lucide-react";
import flagVideo from "@/assets/flag-waving.mp4";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images — dual layer with crossfade */}
      <div className="absolute inset-0">
        <img 
          src="/assets/optimized/hero-truck-1600.webp"
          alt="F&S Expedited LLC dump truck for professional hauling services"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            // Try JPG fallback if WebP fails
            e.currentTarget.src = "/assets/optimized/hero-truck-1600.jpg";
            // If that fails, try original
            e.currentTarget.onerror = () => {
              e.currentTarget.src = "/src/assets/hero-truck.jpg";
            };
          }}
        />
        <img
          src="/assets/gallery/night-truck-jobsite.jpg"
          alt="F&S Expedited LLC dump truck and pickup at night jobsite"
          className="absolute inset-0 w-full h-full object-cover animate-hero-crossfade"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 pt-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-xl mb-8 opacity-0 animate-fade-up">
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
              ref={(el) => { if (el) el.playbackRate = 0.5; }}
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
            <Link 
              to="/services" 
              className="text-primary hover:underline font-semibold ml-2"
            >
              View all services →
            </Link>
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-8 opacity-0 animate-fade-up animation-delay-450 items-center sm:items-start">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 animate-pulse">Call Joe!</span>
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 [&_svg]:size-5 min-w-[200px]" asChild>
                <a href="tel:8653649011" onClick={() => trackEvent('phone_click', { label: 'hero_primary', number: '8653649011', ...getUtm() })}>
                  <Phone className="w-5 h-5 text-green-500" />
                  (865) 364-9011
                </a>
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 animate-pulse">Call Luke!</span>
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 [&_svg]:size-5 min-w-[200px]" asChild>
                <a href="tel:7047518141" onClick={() => trackEvent('phone_click', { label: 'hero_secondary', number: '7047518141', ...getUtm() })}>
                  <Phone className="w-5 h-5 text-green-500" />
                  (704) 751-8141
                </a>
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 mb-8 grid grid-cols-3 gap-6 max-w-lg opacity-0 animate-fade-up animation-delay-600">
            <div className="text-center">
              <Truck className="w-10 h-10 text-primary mx-auto mb-2" />
              <p className="text-base text-muted-foreground font-sans">Heavy Equipment</p>
            </div>
            <div className="text-center border-x border-border px-4">
              <Clock className="w-10 h-10 text-primary mx-auto mb-2" />
              <p className="text-base text-muted-foreground font-sans">Fast Turnaround</p>
            </div>
            <div className="text-center">
              <Shield className="w-10 h-10 text-primary mx-auto mb-2" />
              <p className="text-base text-muted-foreground font-sans">Fully Insured</p>
            </div>
          </div>
        </div>
      </div>

      {/* Diamond plate bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-4 diamond-plate" />
    </section>);

};