import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { Picture } from "@/components/ui/picture";
import fsLogo from "@/assets/fs-logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/why-us", label: "Why Us" },
  { href: "/process", label: "How We Work" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
                className="h-16 md:h-20 w-auto"
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
                  className={`absolute top-full left-0 mt-2 w-64 bg-card border border-border shadow-xl transition-all duration-200 ${
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
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors border-b border-border last:border-b-0"
                    >
                      <service.icon className="w-4 h-4 text-primary shrink-0" />
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <Button variant="default" size="sm" asChild>
                <Link to="/contact">Get Quote</Link>
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
            <Button variant="outline" size="lg" className="bg-background text-primary border-2 border-primary hover:bg-background/80 hover:text-primary text-base px-8 py-5 shimmer-effect rounded-lg" asChild>
              <a href="tel:8653649011">
                <Phone className="w-5 h-5 text-green-500" />
                Call Joe! (865) 364-9011
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-background text-primary border-2 border-primary hover:bg-background/80 hover:text-primary text-base px-8 py-5 shimmer-effect rounded-lg" asChild>
              <a href="tel:7047518141">
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
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors py-1"
                  >
                    <service.icon className="w-4 h-4 text-primary" />
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-lg font-heading uppercase tracking-wider text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-border flex justify-between gap-3">
              <Button variant="hero" className="text-sm px-4 py-3 [&_svg]:size-3 flex-1 max-w-[48%] rounded-lg" asChild>
                <a href="tel:8653649011">
                  <Phone className="w-4 h-4" />
                  (865) 364-9011
                </a>
              </Button>
              <Button variant="hero" className="text-sm px-4 py-3 [&_svg]:size-3 flex-1 max-w-[48%] rounded-lg" asChild>
                <a href="tel:7047518141">
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
