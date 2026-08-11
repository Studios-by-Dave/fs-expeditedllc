import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, Truck } from "lucide-react";
import { services, serviceCategories } from "@/data/services";
import { Picture } from "@/components/ui/picture";
import { trackEvent, trackGetQuoteClick, trackPhoneClick } from "@/lib/analytics";
import { getUtm } from "@/lib/utm";
import fsLogo from "@/assets/fs-logo.png";

const navLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileServiceAreasOpen, setMobileServiceAreasOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const serviceAreasRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (serviceAreasRef.current && !serviceAreasRef.current.contains(e.target as Node)) {
        setServiceAreasOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/">
              <img
                src={fsLogo}
                alt="F&S Expedited LLC Logo - Professional Dump Truck Hauling Services"
                className="h-16 md:h-20 w-auto object-contain"
                loading="eager"
                onError={(e) => {
                  // Try optimized WebP first
                  e.currentTarget.src = "/assets/optimized/fs-logo-400.webp";
                  // If that fails, try PNG
                  e.currentTarget.onerror = () => {
                    e.currentTarget.src = "/assets/optimized/fs-logo-400.png";
                  };
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Home Link */}
              <Link
                to="/"
                className="text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-2 w-72 bg-card border border-border shadow-xl transition-all duration-200 z-50 ${
                    servicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-3 text-base font-semibold uppercase tracking-wider text-primary hover:bg-primary/10 transition-colors border-b border-border"
                  >
                    All Services
                  </Link>
                  {serviceCategories.map((category) => {
                    if (category.slug === 'dump-trucks-hauling-services') {
                      return (
                        <Link
                          key={category.slug}
                          to="/services/dump-trucks-hauling-services"
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-base font-semibold text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors border-b border-border"
                        >
                          <div className="w-8 h-8 shrink-0 flex items-center justify-center filter-primary">
                            <img src="/assets/icons/dump-truck.svg" alt="Dump Trucks Hauling Services" className="w-8 h-8 object-contain" />
                          </div>
                          <span>{category.title}</span>
                        </Link>
                      );
                    }
                    return (
                      <Link
                        key={category.slug}
                        to={`/services/${category.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-base font-semibold text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors border-b border-border last:border-b-0"
                      >
                        <div className="w-8 h-8 shrink-0 flex items-center justify-center filter-primary">
                          {category.slug === 'material-delivery' && (
                            <img src="/assets/icons/material-delivery.svg" alt="Material Delivery" className="w-8 h-8 object-contain" />
                          )}
                        {category.slug === 'site-services' && (
                          <img src="/assets/icons/site-services.svg" alt="Site Services" className="w-8 h-8 object-contain" />
                        )}
                        {category.slug === 'emergency-expedited' && (
                          <img src="/assets/icons/emergency-expedited.svg" alt="Emergency Expedited" className="w-8 h-8 object-contain" />
                        )}
                        </div>
                        <span>{category.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Service Areas Dropdown */}
              <div ref={serviceAreasRef} className="relative">
                <button
                  onClick={() => setServiceAreasOpen(!serviceAreasOpen)}
                  className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  Service Areas
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      serviceAreasOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Service Areas Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-card border border-border shadow-xl transition-all duration-200 z-50 ${
                    serviceAreasOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <Link
                    to="/service-area/shelby-nc"
                    onClick={() => setServiceAreasOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors border-b border-border"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">S</span>
                    </span>
                    <span>Shelby, NC</span>
                  </Link>
                  <Link
                    to="/service-area/forest-city-nc"
                    onClick={() => setServiceAreasOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors border-b border-border"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">F</span>
                    </span>
                    <span>Forest City, NC</span>
                  </Link>
                  <Link
                    to="/service-area/gastonia-nc"
                    onClick={() => setServiceAreasOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors border-b border-border"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">G</span>
                    </span>
                    <span>Gastonia, NC</span>
                  </Link>
                  <Link
                    to="/service-area/asheville-nc"
                    onClick={() => setServiceAreasOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors border-b border-border"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">A</span>
                    </span>
                    <span>Asheville, NC</span>
                  </Link>
                  <Link
                    to="/service-area"
                    onClick={() => setServiceAreasOpen(false)}
                    className="block px-4 py-3 text-sm font-semibold uppercase tracking-wider text-primary hover:bg-primary/10 transition-colors"
                  >
                    All Service Areas
                  </Link>
                </div>
              </div>

              {/* About Us Link */}
              <div ref={aboutRef} className="relative">
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  About Us
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* About Us Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-card border border-border shadow-xl transition-all duration-200 z-50 ${
                    aboutOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <Link
                    to="/about"
                    onClick={() => setAboutOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors border-b border-border"
                  >
                    <span>About the Company</span>
                  </Link>
                  <Link
                    to="/process"
                    onClick={() => setAboutOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors border-b border-border"
                  >
                    <span>How We Work</span>
                  </Link>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                    link.label === "Reviews"
                      ? "text-blue-500 hover:text-blue-400"
                      : link.label === "Blog"
                      ? "blog-nav-glow"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <Button 
                variant="default" 
                size="sm" 
                asChild
                className="relative overflow-hidden group transition-all duration-300 hover:scale-105"
              >
                <Link to="/contact" className="relative z-10" onClick={() => trackGetQuoteClick('Get Free Quote', 'navigation_header')}>
                  <span className="relative z-10">Get Free Quote</span>
                  {/* Reflection effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Phone CTA Sub-bar */}
        <div
          className={`hidden lg:block border-t border-border/50 transition-all duration-300 ${
            isScrolled ? "bg-background/90 backdrop-blur-md -translate-y-full" : "bg-background/60 backdrop-blur-sm translate-y-0"
          }`}
        >
          <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-tighter text-primary/80 mb-0.5 animate-pulse">Call Joe!</span>
              <Button variant="outline" size="lg" className="bg-background text-primary border-2 border-primary hover:bg-background/80 hover:text-primary text-base px-8 py-5 shimmer-effect rounded-xl" asChild>
                <a href="tel:8653649011" onClick={() => trackPhoneClick('8653649011', 'nav_call_joe')}>
                  <Phone className="w-5 h-5 text-green-500" />
                  (865) 364-9011
                </a>
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-tighter text-primary/80 mb-0.5 animate-pulse">Call Luke!</span>
              <Button variant="outline" size="lg" className="bg-background text-primary border-2 border-primary hover:bg-background/80 hover:text-primary text-base px-8 py-5 shimmer-effect rounded-xl" asChild>
                <a href="tel:7047518141" onClick={() => trackPhoneClick('7047518141', 'nav_call_luke')}>
                  <Phone className="w-5 h-5 text-green-500" />
                  (704) 751-8141
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 bottom-0 top-20 mx-auto w-[calc(100%-1.5rem)] max-w-[32rem] rounded-t-2xl rounded-b-none border border-border/80 bg-[#0b0b0b] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.95)] transition-all duration-300 overflow-hidden ${
            isOpen ? "opacity-100 overflow-y-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="container px-4 py-6 flex flex-col gap-4">
            {/* Mobile Logo */}
            <div className="flex justify-center pb-4 border-b border-border">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img 
                  src={fsLogo}
                  alt="F&S Expedited LLC Logo - Professional Dump Truck Hauling Services"
                  className="h-12 w-auto"
                  loading="eager"
                  onError={(e) => {
                    // Try optimized WebP first
                    e.currentTarget.src = "/assets/optimized/fs-logo-400.webp";
                    // If that fails, try PNG
                    e.currentTarget.onerror = () => {
                      e.currentTarget.src = "/assets/optimized/fs-logo-400.png";
                    };
                  }}
                />
              </Link>
            </div>
            {/* Mobile Services Collapsible */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between text-lg font-heading uppercase tracking-wider text-foreground hover:text-primary transition-colors py-2"
            >
              Services
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="pl-4 flex flex-col gap-2 pb-2">
                <Link
                  to="/services"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wider text-primary py-1"
                >
                  All Services
                </Link>
                {serviceCategories.map((category) => (
                  <Link
                    key={category.slug}
                    to={category.slug === 'dump-trucks-hauling-services' ? '/services/dump-trucks-hauling-services' : `/services/${category.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors py-1"
                  >
                    <div className="w-5 h-5 flex items-center justify-center filter-primary">
                      {category.slug === 'dump-trucks-hauling-services' && <img src="/assets/icons/dump-truck.svg" alt="" className="w-full h-full" />}
                      {category.slug === 'material-delivery' && <img src="/assets/icons/material-delivery.svg" alt="" className="w-full h-full" />}
                      {category.slug === 'site-services' && <img src="/assets/icons/site-services.svg" alt="" className="w-full h-full" />}
                      {category.slug === 'emergency-expedited' && <img src="/assets/icons/emergency-expedited.svg" alt="" className="w-full h-full" />}
                    </div>
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Service Areas Collapsible */}
            <button
              onClick={() => setMobileServiceAreasOpen(!mobileServiceAreasOpen)}
              className="flex items-center justify-between text-lg font-heading uppercase tracking-wider text-foreground hover:text-primary transition-colors py-2"
            >
              Service Areas
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  mobileServiceAreasOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServiceAreasOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="pl-4 flex flex-col gap-2 pb-2">
                <Link
                  to="/service-area/shelby-nc"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors py-1"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">S</span>
                  </span>
                  <span>Shelby, NC</span>
                </Link>
                <Link
                  to="/service-area/forest-city-nc"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors py-1"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">F</span>
                  </span>
                  <span>Forest City, NC</span>
                </Link>
                <Link
                  to="/service-area/gastonia-nc"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors py-1"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">G</span>
                  </span>
                  <span>Gastonia, NC</span>
                </Link>
                <Link
                  to="/service-area/asheville-nc"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors py-1"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">A</span>
                  </span>
                  <span>Asheville, NC</span>
                </Link>
                <Link
                  to="/service-area"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wider text-primary py-1"
                >
                  All Service Areas
                </Link>
              </div>
            </div>

            {/* Mobile About Us Collapsible */}
            <button
              onClick={() => {
                // Add a state for this if not yet added, we'll reuse something or just inline it for simplicity if we don't need fully isolated state
              }}
              // Using a simple CSS trick or we can add state. Using details/summary for simplicity in mobile if state isn't there
              className="hidden"
            >
              About Us
            </button>
            <details className="group [&_summary::-webkit-details-marker]:hidden border-t border-border pt-4">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-heading uppercase tracking-wider text-foreground hover:text-primary transition-colors py-2">
                <span>About Us</span>
                <span className="transition duration-300 group-open:-rotate-180">
                  <ChevronDown className="w-5 h-5" />
                </span>
              </summary>
              <div className="pl-4 flex flex-col gap-2 pb-2 group-open:animate-in group-open:fade-in group-open:slide-in-from-top-1">
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors py-1"
                >
                  About the Company
                </Link>
                <Link
                  to="/process"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors py-1"
                >
                  How We Work
                </Link>
              </div>
            </details>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-lg font-heading uppercase tracking-wider transition-colors py-2 ${
                  link.label === "Reviews"
                    ? "text-blue-500 hover:text-blue-400"
                    : link.label === "Blog"
                    ? "blog-nav-glow"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-border flex justify-between gap-3">
              <div className="flex-1 flex flex-col items-center">
                <span className="text-[9px] font-bold uppercase tracking-tighter text-lime-400 mb-0.5">Call Joe!</span>
                <Button variant="hero" className="text-sm px-4 py-3 [&_svg]:size-3 w-full rounded-full bg-black text-yellow-400 border border-yellow-400/30 hover:bg-zinc-900 hover:text-yellow-300" asChild>
                  <a href="tel:8653649011" onClick={() => trackEvent('phone_click', { label: 'mobile_nav_primary', number: '8653649011', ...getUtm() })}>
                    <Phone className="w-4 h-4 text-lime-400" />
                    (865) 364-9011
                  </a>
                </Button>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <span className="text-[9px] font-bold uppercase tracking-tighter text-lime-400 mb-0.5">Call Luke!</span>
                <Button variant="hero" className="text-sm px-4 py-3 [&_svg]:size-3 w-full rounded-full bg-black text-yellow-400 border border-yellow-400/30 hover:bg-zinc-900 hover:text-yellow-300" asChild>
                  <a href="tel:7047518141" onClick={() => trackEvent('phone_click', { label: 'mobile_nav_secondary', number: '7047518141', ...getUtm() })}>
                    <Phone className="w-4 h-4 text-lime-400" />
                    (704) 751-8141
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
