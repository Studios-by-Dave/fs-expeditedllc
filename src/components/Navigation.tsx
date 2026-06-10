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
  { href: "/process", label: "How We Work" },
  { href: "/service-area", label: "Service Area" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [whyUsOpen, setWhyUsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);

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
      if (whyUsRef.current && !whyUsRef.current.contains(e.target as Node)) {
        setWhyUsOpen(false);
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
            <div className="hidden md:flex items-center gap-8">
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
                  className={`absolute top-full left-0 mt-2 w-64 bg-card border border-border shadow-xl transition-all duration-200 z-50 ${
                    servicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-3 text-sm font-semibold uppercase tracking-wider text-primary hover:bg-primary/10 transition-colors border-b border-border"
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
                          className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors border-b border-border"
                        >
                          <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                            <img src="/assets/badge_icons_1/dumper-truck_12255897.png" alt="Dump Trucks Hauling Services" className="w-6 h-6 object-contain" />
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
                        className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors border-b border-border last:border-b-0"
                      >
                        <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                          {category.slug === 'material-delivery' && (
                            <img src="/assets/badge_icons_1/stones_8654439.png" alt="Material Delivery" className="w-6 h-6 object-contain" />
                          )}
                        {category.slug === 'site-services' && (
                          <img src="/assets/badge_icons_1/dumper-truck_12255897.png" alt="Site Services" className="w-6 h-6 object-contain" />
                        )}
                        {category.slug === 'emergency-expedited' && (
                          <img src="/assets/badge_icons_1/badge-emergency-fire-icon-circle-260nw-2195145807.jpg" alt="Emergency Expedited" className="w-6 h-6 object-contain" />
                        )}
                        </div>
                        <span>{category.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Why Us Dropdown */}
              <div ref={whyUsRef} className="relative">
                <button
                  onClick={() => setWhyUsOpen(!whyUsOpen)}
                  className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  Why Us
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      whyUsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Why Us Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-2 w-48 bg-card border border-border shadow-xl transition-all duration-200 z-50 ${
                    whyUsOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <Link
                    to="/why-us"
                    onClick={() => setWhyUsOpen(false)}
                    className="block px-4 py-3 text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors border-b border-border"
                  >
                    Why Choose Us
                  </Link>
                  <Link
                    to="/why-us/about"
                    onClick={() => setWhyUsOpen(false)}
                    className="block px-4 py-3 text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors border-b border-border"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/why-us/promos"
                    onClick={() => setWhyUsOpen(false)}
                    className="block px-4 py-3 text-sm font-semibold uppercase tracking-wider text-primary hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    Promos
                  </Link>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                    link.label === "Reviews"
                      ? "text-[#00BFFF] hover:text-[#00FFFF]"
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
            <div className="hidden md:flex items-center">
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
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Phone CTA Sub-bar */}
        <div
          className={`hidden md:block border-t border-border/50 transition-all duration-300 ${
            isScrolled ? "bg-background/90 backdrop-blur-md -translate-y-full" : "bg-background/60 backdrop-blur-sm translate-y-0"
          }`}
        >
          <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-8">
            <Button variant="outline" size="lg" className="bg-background text-primary border-2 border-primary hover:bg-background/80 hover:text-primary text-base px-8 py-5 shimmer-effect rounded-xl" asChild>
              <a href="tel:8653649011" onClick={() => trackPhoneClick('8653649011', 'nav_call_joe')}>
                <Phone className="w-5 h-5 text-green-500" />
                Call Joe! (865) 364-9011
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-background text-primary border-2 border-primary hover:bg-background/80 hover:text-primary text-base px-8 py-5 shimmer-effect rounded-xl" asChild>
              <a href="tel:7047518141" onClick={() => trackPhoneClick('7047518141', 'nav_call_luke')}>
                <Phone className="w-5 h-5 text-green-500" />
                Call Luke! (704) 751-8141
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
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
                    <div className="w-4 h-4 text-primary flex items-center justify-center">
                      {category.slug === 'dump-trucks-hauling-services' && '🚚'}
                      {category.slug === 'material-delivery' && '🚚'}
                      {category.slug === 'site-services' && '🏗️'}
                      {category.slug === 'emergency-expedited' && '⚡'}
                    </div>
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Why Us Section */}
            <div className="border-t border-border pt-4">
              <Link
                to="/why-us"
                onClick={() => setIsOpen(false)}
                className="text-lg font-heading uppercase tracking-wider transition-colors py-2 text-foreground hover:text-primary"
              >
                Why Choose Us
              </Link>
              <Link
                to="/why-us/about"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-lg font-heading uppercase tracking-wider transition-colors py-2 text-foreground hover:text-primary"
              >
                About Us
              </Link>
              <Link
                to="/why-us/promos"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-lg font-heading uppercase tracking-wider transition-colors py-2 text-primary hover:text-primary"
              >
                Promos
              </Link>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-lg font-heading uppercase tracking-wider transition-colors py-2 ${
                  link.label === "Reviews"
                    ? "text-[#00BFFF] hover:text-[#00FFFF]"
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
              <Button variant="hero" className="text-sm px-4 py-3 [&_svg]:size-3 flex-1 max-w-[48%] rounded-lg" asChild>
                <a href="tel:8653649011" onClick={() => trackEvent('phone_click', { label: 'mobile_nav_primary', number: '8653649011', ...getUtm() })}>
                  <Phone className="w-4 h-4" />
                  (865) 364-9011
                </a>
              </Button>
              <Button variant="hero" className="text-sm px-4 py-3 [&_svg]:size-3 flex-1 max-w-[48%] rounded-lg" asChild>
                <a href="tel:7047518141" onClick={() => trackEvent('phone_click', { label: 'mobile_nav_secondary', number: '7047518141', ...getUtm() })}>
                  <Phone className="w-4 h-4" />
                  (704) 751-8141
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
