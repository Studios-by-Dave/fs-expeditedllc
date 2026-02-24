import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", serviceType: "", location: "", message: "" });
    setIsSubmitting(false);
  };

  const inputClass =
    "w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors font-sans";

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <div>
            <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
              Get In Touch
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-wider">
              REQUEST A QUOTE
            </h2>
            <p className="mt-4 text-muted-foreground text-lg font-sans">
              Ready to get your materials hauled? Contact us for a free, no-obligation estimate.
              We respond within 24 hours.
            </p>

            <div className="mt-10 space-y-6">
              <a href="tel:8653649011" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-sans">Call Us</p>
                  <p className="text-foreground font-bold">(865) 364-9011</p>
                </div>
              </a>

              <a href="mailto:info@fsexpedited.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-sans">Email Us</p>
                  <p className="text-foreground font-bold">info@fsexpedited.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-sans">Service Area</p>
                  <p className="text-foreground font-bold">Charlotte, NC & Knoxville, TN</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-4 bg-card border border-border">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-bold text-foreground">Fully Licensed & Insured</p>
                  <p className="text-sm text-muted-foreground font-sans">Your project is protected with our coverage</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card border border-border p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                  Full Name *
                </label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                    Email *
                  </label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                    Phone
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="(555) 123-4567" />
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                  Service Needed *
                </label>
                <select id="serviceType" name="serviceType" required value={formData.serviceType} onChange={handleChange} className={inputClass}>
                  <option value="">Select a service</option>
                  <option value="dump-truck">Dump Truck Hauling</option>
                  <option value="gravel">Gravel Delivery</option>
                  <option value="sand">Sand Delivery</option>
                  <option value="debris">Construction Debris Removal</option>
                  <option value="aggregate">Aggregate Transport</option>
                  <option value="emergency">Emergency Expedited Hauling</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                  Project Location
                </label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className={inputClass} placeholder="City, State or job site address" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                  Project Details
                </label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Tell us about your hauling needs..." />
              </div>

              <Button type="submit" variant="default" size="xl" className="w-full font-heading text-lg tracking-wider" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : (
                  <>
                    REQUEST FREE QUOTE
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
