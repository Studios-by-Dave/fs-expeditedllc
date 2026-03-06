import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import fsLogo from "@/assets/fs-logo.png";

const navLinks = [
{ href: "#services", label: "Services" },
{ href: "#why-us", label: "Why Us" },
{ href: "#process", label: "How We Work" },
{ href: "#testimonials", label: "Reviews" },
{ href: "#contact", label: "Contact" }];


export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ?
      "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" :
      "bg-transparent"}`
      }>
      
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#">
            <img src={fsLogo} alt="F&S Expedited LLC" className="h-16 md:h-20 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors duration-200">
              
                {link.label}
              </a>
            )}
          </div>

          {/* CTA & Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:8653649011"
              className="flex items-center gap-2 font-semibold text-primary text-base">
              
              <Phone className="w-4 h-4" />
              (865) 364-9011
            </a>
            <Button variant="default" size="sm" asChild>
              <a href="#contact">Get Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu">
            
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`
          }>
          
          <div className="container px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-heading uppercase tracking-wider text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}>
              
                {link.label}
              </a>
            )}
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <a
                href="tel:8653649011"
                className="flex items-center gap-2 text-primary font-semibold">
                
                <Phone className="w-4 h-4" />
                (865) 364-9011
              </a>
              <Button variant="default" className="w-full" asChild>
                <a href="#contact">Get Free Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>);

};