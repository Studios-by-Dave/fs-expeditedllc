import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex flex-col">
              <span className="font-script text-3xl text-primary">
                Shades of Gray
              </span>
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                Painters LLC
              </span>
            </a>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Professional residential and commercial painting services in
              Shelby, NC. We take the pain out of painting with quality
              craftsmanship and exceptional service.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/shadesofgraypainters llc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#services", label: "Services" },
                { href: "#gallery", label: "Texture Gallery" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#contact", label: "Get a Quote" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:3857872889"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (385) 787-2889
                </a>
              </li>
              <li>
                <a
                  href="mailto:shadesofgray21@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  shadesofgray21@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Shelby, NC & Surrounding Areas
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Shades of Gray Painters LLC. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Owner: Candice Jones • Shelby, NC
          </p>
        </div>
      </div>
    </footer>
  );
};
