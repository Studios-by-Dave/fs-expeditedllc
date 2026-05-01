import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema } from "@/data/seo-schemas";

const TermsOfServicePage = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "Terms of Service", url: "https://www.fs-expeditedllc.com/terms-of-service" }
  ];

  return (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Terms of Service — F&S Expedited LLC"
      description="Terms of Service for F&S Expedited LLC - Legal terms and conditions for our dump truck hauling and expedited services."
      canonical="/terms-of-service"
      schema={breadcrumbSchema(breadcrumbs)}
    />
    <Navigation />
    <main className="pt-20">
      <div className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-wider mb-8">
            TERMS OF SERVICE
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground font-sans space-y-6">
            <p className="text-muted-foreground">
              <strong>Effective Date:</strong> April 14, 2026
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By using F&S Expedited LLC's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
              <p>
                F&S Expedited LLC provides professional dump truck hauling, expedited delivery, and related services within a 100-mile radius of Shelby, North Carolina. Services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Dump truck hauling and transport</li>
                <li>Gravel, sand, and aggregate delivery</li>
                <li>Construction debris removal</li>
                <li>Site preparation and land clearing</li>
                <li>Emergency expedited services</li>
                <li>Commercial hauling projects</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Pricing and Payment</h2>
              <p>
                <strong>Pricing:</strong> Service rates are provided in writing before work begins. Rates may vary based on load size, distance, and service type.
              </p>
              <p>
                <strong>Payment Terms:</strong> Payment is due upon completion of services unless other arrangements are made in writing. We accept cash, check, and major credit cards.
              </p>
              <p>
                <strong>Additional Charges:</strong> Additional fees may apply for fuel surcharges, overtime, or special equipment requirements. All additional charges will be disclosed in advance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Customer Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate information about load requirements and destination</li>
                <li>Ensure site access and proper preparation for loading/unloading</li>
                <li>Obtain any necessary permits or approvals for work location</li>
                <li>Remove any hazardous or prohibited materials from loads</li>
                <li>Provide safe working conditions for our operators</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
              <p>
                F&S Expedited LLC is not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Delays caused by weather, road conditions, or circumstances beyond our control</li>
                <li>Damage to underground utilities or existing site conditions</li>
                <li>Loss or damage to customer-provided materials or equipment</li>
                <li>Consequential damages or lost profits</li>
                <li>Claims not reported within 24 hours of service completion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Cancellation Policy</h2>
              <p>
                <strong>Customer Cancellation:</strong> Cancellations made less than 24 hours before scheduled service may incur a cancellation fee.
              </p>
              <p>
                <strong>Company Cancellation:</strong> F&S Expedited LLC reserves the right to cancel services due to unsafe conditions, equipment failure, or weather. We will notify customers as soon as possible in such circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Force Majeure</h2>
              <p>
                F&S Expedited LLC is not liable for failure to perform services due to circumstances beyond our reasonable control, including but not limited to: acts of God, war, terrorism, labor disputes, natural disasters, or governmental actions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Indemnification</h2>
              <p>
                Customer agrees to indemnify and hold harmless F&S Expedited LLC, its employees, and agents from any claims, damages, or expenses arising from customer's use of our services, except where caused by our gross negligence or willful misconduct.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Dispute Resolution</h2>
              <p>
                Any disputes arising from these terms or our services shall be resolved through good faith negotiations. If disputes cannot be resolved, they shall be subject to the laws of North Carolina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="font-semibold text-foreground mb-2">F&S Expedited LLC</p>
                <p className="text-muted-foreground">
                  Email: <a href="mailto:Aldrich2577@gmail.com" className="text-primary hover:underline">Aldrich2577@gmail.com</a><br />
                  Phone: (865) 364-9011 or (704) 751-8141
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to Terms</h2>
              <p>
                F&S Expedited LLC reserves the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services constitutes acceptance of any modified terms.
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

export default TermsOfServicePage;
