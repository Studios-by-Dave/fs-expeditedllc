import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Footer } from "@/components/Footer";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { breadcrumbSchema, localBusinessSchema } from "@/data/seo-schemas";
import { ChevronRight, ChevronDown, Truck, Shield, Clock, Users, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/CTABanner";

const AboutPage = () => {
  const [whyUsOpen, setWhyUsOpen] = useState(false);

  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "About Us", url: "https://www.fs-expeditedllc.com/about" }
  ];

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessSchema,
      breadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Us — F&S Expedited LLC Story & Mission"
        description="Learn about F&S Expedited LLC's history, mission, and commitment to providing professional dump truck hauling services in Shelby, NC and surrounding areas."
        canonical="/about"
        schema={combinedSchema}
      />
      <Navigation />
      {/* Breadcrumb Navigation */}
      <Breadcrumb aria-label="breadcrumb" className="container px-4 pt-20">
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink asChild href={crumb.url} className={index === breadcrumbs.length - 1 ? "text-foreground font-semibold" : "text-primary hover:text-primary/70"}>
                {crumb.name}
              </BreadcrumbLink>
              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator><ChevronRight /></BreadcrumbSeparator>}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                Our Story
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-wider mb-6">
                ABOUT F&S EXPEDITED LLC
              </h1>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                Built on hard work, reliability, and a commitment to excellence. We're your trusted partner for professional dump truck hauling and expedited services in North Carolina.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6 tracking-wider">Our Story</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  F&S Expedited LLC was founded with a simple mission: to provide reliable, efficient, and professional hauling services that contractors and property owners can depend on. Based in Shelby, North Carolina, we've grown from a small operation to a trusted hauling partner serving a 100-mile radius.
                </p>
                <p>
                  Owned and operated by Joe Alrich and Luke Tutterow, F&S Expedited LLC is built on a foundation of hands-on experience and deep local knowledge. Joe and Luke bring years of expertise in the construction and hauling industry, with a shared commitment to quality service and customer satisfaction. Their dedication to hard work and reliability is reflected in every project we undertake.
                </p>
                <p>
                  Our team brings years of experience in the construction and hauling industry. We understand that every project has unique challenges and tight timelines. That's why we've built our business around fast response times, competitive pricing, and a commitment to getting the job done right the first time.
                </p>
                <p>
                  Whether it's a residential driveway project, a commercial construction site, or emergency material delivery, F&S Expedited LLC has the equipment, expertise, and dedication to handle your hauling needs with precision and care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Owners Section */}
        <section className="section-padding bg-gradient-card">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 tracking-wider text-center">Meet the Owners</h2>
              
              <div className="mb-8 text-center">
                <img 
                  src="/assets/joe-and-luke-owners.jpg" 
                  alt="Luke Tutterow (Left) and Joe Alrich (Right) — Owners of F&S Expedited LLC" 
                  className="w-full max-w-2xl mx-auto h-auto rounded-lg border border-border shadow-lg mb-2" 
                />
                <p className="text-sm text-muted-foreground italic font-sans italic">Luke Tutterow (Left) & Joe Alrich (Right)</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Luke Tutterow */}
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Luke Tutterow</h3>
                  <p className="text-sm text-primary font-medium mb-2">Co-owner</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Co-owner with extensive experience in construction and hauling. Luke's hands-on approach and commitment to quality service ensure every project meets the highest standards.
                  </p>
                </div>

                {/* Joe Alrich */}
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Joe Alrich</h3>
                  <p className="text-sm text-primary font-medium mb-2">Owner</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Bringing years of industry expertise and operational leadership. Joe's dedication to customer satisfaction and efficient operations drives F&S Expedited LLC's success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="section-padding bg-gradient-card">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 tracking-wider text-center">Our Mission & Values</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide exceptional hauling services that exceed customer expectations through reliability, efficiency, and professional excellence. We're committed to keeping your projects on schedule and within budget.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Our Values</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We operate with integrity, safety, and customer satisfaction at the core of everything we do. Every load, every delivery, and every project receives our full attention and commitment to quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="section-padding">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 tracking-wider text-center">What Sets Us Apart</h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Truck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Modern Fleet</h3>
                      <p className="text-muted-foreground">Well-maintained dump trucks and equipment ready for any job</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Fast Response</h3>
                      <p className="text-muted-foreground">Same-day and next-day delivery options for urgent projects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Fully Licensed & Insured</h3>
                      <p className="text-muted-foreground">Complete peace of mind with proper credentials and coverage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Experienced Team</h3>
                      <p className="text-muted-foreground">Skilled operators who respect your property and timeline</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Competitive Rates</h3>
                      <p className="text-muted-foreground">Fair pricing with no hidden fees or surprises</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Customer Focus</h3>
                      <p className="text-muted-foreground">Your satisfaction is our top priority on every project</p>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-card border border-border rounded-xl p-4 overflow-hidden">
                    <img 
                      src="/assets/fs_dog_1.png" 
                      alt="F&S Expedited Mascot - Reliable Hauling Dog" 
                      className="w-full h-auto rounded-lg shadow-sm hover:scale-105 transition-transform duration-500"
                    />
                    <div className="mt-4 text-center">
                      <p className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-1">Our Mascot</p>
                      <p className="text-xs text-muted-foreground">Ready for the heaviest loads!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="section-padding bg-gradient-card">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4 tracking-wider">Serving North Carolina & Beyond</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Proudly serving Shelby, NC and all areas within a 100-mile radius, including Charlotte, Gastonia, Hickory, Asheville, Greenville, Spartanburg, and surrounding communities.
              </p>
              <Button size="lg" asChild>
                <a href="/service-area">View Our Service Area</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Collapsible Section */}
        <section className="section-padding">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <button
                onClick={() => setWhyUsOpen(!whyUsOpen)}
                className="w-full flex items-center justify-between bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer"
              >
                <h2 className="text-3xl font-bold text-foreground tracking-wider">Why Choose Us</h2>
                <ChevronDown
                  className={`w-6 h-6 text-primary transition-transform duration-300 ${whyUsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${whyUsOpen ? "max-h-[2000px] opacity-100 mt-0" : "max-h-0 opacity-0"}`}
              >
                <WhyChooseUs />
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
