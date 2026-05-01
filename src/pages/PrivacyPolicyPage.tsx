import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema } from "@/data/seo-schemas";

const PrivacyPolicyPage = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "Privacy Policy", url: "https://www.fs-expeditedllc.com/privacy-policy" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy — F&S Expedited LLC"
        description="Privacy Policy for F&S Expedited LLC - How we collect, use, and protect your personal information when you request our dump truck hauling services."
        canonical="/privacy-policy"
        schema={breadcrumbSchema(breadcrumbs)}
      />
      <Navigation />
      <main className="pt-20">
      <div className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-wider mb-8">
            PRIVACY POLICY
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground font-sans space-y-6">
            <p className="text-muted-foreground">
              <strong>Effective Date:</strong> April 14, 2026
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p>
                F&S Expedited LLC collects information you provide directly to us, such as when you request a quote, schedule service, or contact us. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Name, phone number, and email address</li>
                <li>Service address and delivery location</li>
                <li>Type of hauling service requested</li>
                <li>Payment information (when applicable)</li>
                <li>Communication records and service history</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide requested hauling services</li>
                <li>Process payments and send invoices</li>
                <li>Communicate with customers about service status</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Service Providers:</strong> We may share your information with subcontractors or partners necessary to complete your hauling service.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights.</li>
                <li><strong>Business Transfers:</strong> Information may be transferred if F&S Expedited LLC is acquired by or merged with another company.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access and update your personal information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of the information we hold about you</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="font-semibold text-foreground mb-2">F&S Expedited LLC</p>
                <p className="text-muted-foreground">
                  Email: <a href="mailto:Aldrich2577@gmail.com" className="text-primary hover:underline">Aldrich2577@gmail.com</a><br />
                  Phone: (865) 364-9011 or (704) 751-8141
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website and updating the "Effective Date" above.
              </p>
            </section>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
