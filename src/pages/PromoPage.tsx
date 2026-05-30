import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema } from "@/data/seo-schemas";
import { ChevronRight, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const PromoPage = () => {
  const [copied, setCopied] = useState(false);
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "Why Choose Us", url: "https://www.fs-expeditedllc.com/why-us" },
    { name: "Promos", url: "https://www.fs-expeditedllc.com/why-us/promos" }
  ];

  useEffect(() => {
    // Load Google Fonts
    const link1 = document.createElement('link');
    link1.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap';
    link1.rel = 'stylesheet';
    document.head.appendChild(link1);
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText('1HAUL').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // Fallback for older browsers
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="min-h-screen bg-[#111010]">
      <SEOHead
        title="10% Off Your First Haul — F&S Expedited LLC Promo"
        description="Get 10% off your first dump truck hauling service with promo code 1HAUL. Licensed & insured hauling services in Shelby, NC and surrounding areas."
        canonical="/why-us/promos"
        schema={breadcrumbSchema(breadcrumbs)}
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
      
      <main className="pt-20 flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="bg-[#1a1a1a] max-w-[520px] w-full border border-[rgba(255,255,255,0.2)] relative overflow-hidden animate-fade-up">
          
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-primary to-primary/80" />
          
          {/* Header */}
          <div className="p-8 p-[2.5rem] pb-6 border-b border-[rgba(255,255,255,0.2)] relative">
            {/* Corner tag */}
            <div className="absolute top-4 right-4 bg-primary text-black font-bebas text-sm tracking-[0.08em] px-2.5 py-1">
              New Customer
            </div>
            
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary mb-3 flex items-center gap-2">
              Limited time offer
              <span className="flex-1 h-px bg-primary opacity-40"></span>
            </p>
            
            <h1 className="font-bebas text-[clamp(80px,20vw,100px)] leading-[0.9] tracking-[0.01em] text-white">
              <span className="text-primary">10%</span><br />
              OFF YOUR<br />
              FIRST HAUL
            </h1>
            
            <p className="text-base font-light text-[#F5F2EC] mt-3 leading-relaxed">
              Dump truck hauling, gravel delivery & site services — within 100 miles of Shelby, NC.
            </p>
          </div>
          
          {/* Body */}
          <div className="p-7 p-[2.5rem]">
            
            {/* Promo code block */}
            <div className="bg-[#1a1a1a] border border-dashed border-primary p-5 p-[1.25rem_1.5rem] flex items-center justify-between gap-4 mb-7">
              <div>
                <span className="text-sm font-medium tracking-[0.12em] uppercase text-[#F5F2EC] block mb-1">
                  Promo code
                </span>
                <span className="font-bebas text-4xl tracking-[0.05em] text-primary leading-none">
                  1HAUL
                </span>
              </div>
              <button 
                onClick={copyCode}
                className={`px-5 py-2.5 font-sans text-base font-medium tracking-[0.04em] cursor-pointer transition-all transform active:scale-95 border-none flex-shrink-0 ${
                  copied 
                    ? 'bg-[#3a7a3a] text-white' 
                    : 'bg-primary text-black hover:bg-primary/80'
                }`}
              >
                {copied ? '✓ Copied!' : 'Copy Code'}
              </button>
            </div>
            
            {/* Steps */}
            <div className="grid grid-cols-3 gap-px bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)] mb-7">
              <div className="bg-[#1a1a1a] p-4 text-center">
                <div className="font-bebas text-3xl text-primary leading-none mb-1">01</div>
                <p className="text-sm text-[#F5F2EC] leading-relaxed font-normal">Call for a free quote</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 text-center">
                <div className="font-bebas text-3xl text-primary leading-none mb-1">02</div>
                <p className="text-sm text-[#F5F2EC] leading-relaxed font-normal">Mention code at checkout</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 text-center">
                <div className="font-bebas text-3xl text-primary leading-none mb-1">03</div>
                <p className="text-sm text-[#F5F2EC] leading-relaxed font-normal">We haul, you save 10%</p>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col gap-2.5">
              <a 
                href="tel:8653649011" 
                className="block text-center p-3.5 font-sans text-lg font-medium tracking-[0.01em] no-underline transition-opacity transform active:scale-[0.98] bg-white text-black hover:opacity-85"
              >
                📞 Call Joe — (865) 364-9011
              </a>
              <a 
                href="tel:7047518141" 
                className="block text-center p-3.5 font-sans text-lg font-medium tracking-[0.01em] no-underline transition-all transform active:scale-[0.98] bg-transparent text-white border border-[rgba(255,255,255,0.3)] hover:border-[rgba(255,255,255,0.5)]"
              >
                Call Luke — (704) 751-8141
              </a>
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-4 p-[1rem_2.5rem] border-t border-[rgba(255,255,255,0.2)] flex items-center justify-between gap-4 flex-wrap">
            <div className="font-bebas text-xl tracking-[0.05em] text-white">
              F&S Expedited LLC
            </div>
            <div className="text-sm text-[#F5F2EC] text-right leading-relaxed">
              Licensed & Insured · Shelby, NC<br />
              Valid on first haul only
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.6s ease both;
        }
        .font-bebas {
          font-family: 'Bebas Neue', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default PromoPage;
