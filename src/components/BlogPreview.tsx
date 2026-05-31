import { ExternalLink, FileText, Clock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const BlogPreview = () => {
  const openBlogArticle = () => {
    window.open('https://www.studiosbydave.com/blog/fs-expedited-llc-spotlight', '_blank');
  };

  return (
    <section className="section-padding bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
            Featured Story
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-4xl font-heading font-bold text-foreground tracking-wider">
            F&S EXPEDITED SPOTLIGHT
          </h2>
          <p className="mt-4 text-muted-foreground text-xl font-sans">
            Discover how F&S Expedited LLC became Shelby's trusted hauling partner.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border border-border overflow-hidden">
            <CardContent className="p-0">
              {/* Article Header */}
              <div className="bg-primary/10 p-6 border-b border-border">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <img 
                      src="/assets/sbd/sbd logo new_2.png" 
                      alt="Studios by Dave" 
                      className="w-4 h-4 object-contain rounded"
                    />
                    <span>Studios by Dave</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Featured Article</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    <span>Business Spotlight</span>
                  </div>
                </div>
              </div>

              {/* Article Preview */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  F&S Expedited LLC: Professional Dump Truck Hauling Services
                </h3>
                
                <div className="space-y-4 text-muted-foreground mb-6 text-xl">
                  <p className="leading-relaxed">
                    In the competitive world of construction and hauling services, F&S Expedited LLC has established itself as a trusted partner for businesses and homeowners throughout Shelby, NC and the surrounding 100-mile radius. Specializing in professional dump truck hauling, gravel delivery, debris removal, and expedited services, they've built their reputation on reliability, safety, and exceptional customer service.
                  </p>
                  
                  <p className="leading-relaxed">
                    What sets F&S Expedited apart is their commitment to being fully licensed and insured, giving clients peace of mind knowing their projects are protected. Their modern fleet of dump trucks and experienced operators handle everything from small residential deliveries to large commercial hauling projects with equal precision and care.
                  </p>
                </div>

                {/* Key Services Highlight */}
                <div className="bg-card p-4 rounded-lg border border-border mb-6">
                  <h4 className="font-semibold text-foreground mb-3 text-xl">Services Highlighted:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground text-xl">
                    <li>• Dump Truck Hauling & Transport</li>
                    <li>• Gravel & Sand Delivery</li>
                    <li>• Construction Debris Removal</li>
                    <li>• Emergency Expedited Services</li>
                    <li>• Commercial Hauling Projects</li>
                    <li>• Site Preparation & Land Clearing</li>
                  </ul>
                </div>

                {/* CTA Section */}
                <div className="text-center space-y-4">
                  <Button 
                    onClick={openBlogArticle}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Full Article
                  </Button>
                  
                  <p className="text-muted-foreground text-xl">
                    Opens in a new window with the complete F&S Expedited spotlight story
                  </p>
                </div>

                {/* Related Services */}
                <div className="mt-8 p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-3 text-xl">Interested in These Services?</h4>
                  <div className="flex flex-wrap gap-3">
                    <Link 
                      to="/services/emergency-expedited/dump-truck-hauling" 
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xl rounded-full hover:bg-primary/20 transition-colors"
                    >
                      Dump Truck Hauling
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link 
                      to="/services/emergency-expedited" 
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xl rounded-full hover:bg-primary/20 transition-colors"
                    >
                      Emergency Services
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link 
                      to="/services/material-delivery/gravel-delivery" 
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xl rounded-full hover:bg-primary/20 transition-colors"
                    >
                      Gravel Delivery
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
