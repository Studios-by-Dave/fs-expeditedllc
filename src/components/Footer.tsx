import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import fsLogo from "@/assets/fs-logo.png";
import { trackEvent } from "@/lib/analytics";
import { getUtm } from "@/lib/utm";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/services", label: "Services" },
    { href: "/why-us", label: "Why Choose Us" },
    { href: "/process", label: "How We Work" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Get a Quote" },
    { href: "/service-area", label: "Service Area" },
  ];

  return (
    <footer className="bg-card border-t border-border relative" role="contentinfo">
      <div className="absolute top-0 left-0 right-0 h-3 diamond-plate" />

      <div className="container px-4 py-16 mt-3">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/">
              <img src={fsLogo} alt="F&S Expedited LLC" className="h-20 w-auto" />
            </Link>
            <p className="mt-4 text-muted-foreground font-sans max-w-sm">
              Professional expedited hauling and dump truck services. Fast, reliable,
              and built on hard work.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4 tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-sans"
                    onClick={() => trackEvent('nav_link_click', { label: link.label, path: link.href, ...getUtm() })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4 tracking-wider">
              LEGAL
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors font-sans">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors font-sans">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4 tracking-wider">
              CONTACT US
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:8653649011"
                  onClick={() => trackEvent('phone_click', { label: 'footer_primary', number: '8653649011', ...getUtm() })}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans"
                >
                  <Phone className="w-4 h-4" />
                  (865) 364-9011
                </a>
              </li>
              <li>
                <a
                  href="tel:7047518141"
                  onClick={() => trackEvent('phone_click', { label: 'footer_secondary', number: '7047518141', ...getUtm() })}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans"
                >
                  <Phone className="w-4 h-4" />
                  (704) 751-8141
                </a>
              </li>
              <li>
                <a href="mailto:Aldrich2577@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans">
                  <Mail className="w-4 h-4" />
                  Aldrich2577@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground font-sans">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">Service Area:</span><br />
                  100-Mile Radius of Shelby, NC
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-sm text-muted-foreground font-sans">
              © {currentYear} F&S Expedited LLC. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/chad.everette.161"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/30 text-muted-foreground/40 cursor-not-allowed"
                aria-label="Instagram (Coming Soon)"
              >
                <Instagram className="w-6 h-6" />
              </div>
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/30 text-muted-foreground/40 cursor-not-allowed"
                aria-label="Twitter (Coming Soon)"
              >
                <Twitter className="w-6 h-6" />
              </div>
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/30 text-muted-foreground/40 cursor-not-allowed"
                aria-label="LinkedIn (Coming Soon)"
              >
                <Linkedin className="w-6 h-6" />
              </div>
            </div>

            <p className="text-sm text-muted-foreground font-sans">Expedited Hauling & Dump Truck Services</p>
          </div>

          {/* Studios by Dave Attribution */}
          <div className="text-center md:text-right">
            <a 
              href="https://www.studiosbydave.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors font-sans"
            >
              Site Developed by Studios by Dave {currentYear}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
