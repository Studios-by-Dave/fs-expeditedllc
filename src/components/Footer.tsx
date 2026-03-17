import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import fsLogo from "@/assets/fs-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border relative">
      <div className="absolute top-0 left-0 right-0 h-3 diamond-plate" />

      <div className="container px-4 py-16 mt-3">
        <div className="grid md:grid-cols-3 gap-10">
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
              {[
                { href: "/services", label: "Services" },
                { href: "/why-us", label: "Why Choose Us" },
                { href: "/process", label: "How We Work" },
                { href: "/reviews", label: "Reviews" },
                { href: "/contact", label: "Get a Quote" },
                { href: "/service-area", label: "Service Area" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors font-sans">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4 tracking-wider">
              CONTACT US
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:8653649011" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans">
                  <Phone className="w-4 h-4" />
                  (865) 364-9011
                </a>
              </li>
              <li>
                <a href="mailto:info@fsexpedited.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans">
                  <Mail className="w-4 h-4" />
                  info@fsexpedited.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground font-sans">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Charlotte, NC & Knoxville, TN
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-sans">
            © {currentYear} F&S Expedited LLC. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-sans">
            Expedited Hauling & Dump Truck Services
          </p>
        </div>
      </div>
    </footer>
  );
};
