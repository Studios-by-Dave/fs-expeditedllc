import { Star, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const SenjaLink = () => {
  return (
    <div className="w-full">
      <Card className="border border-border">
        <CardContent className="p-8">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-8 h-8 text-primary" />
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
            Leave a Review
          </h3>
          
          <p className="text-muted-foreground mb-6 text-center max-w-md mx-auto">
            Share your experience with F&S Expedited LLC. Your feedback helps us improve our services.
          </p>
          
          {/* Senja Review Form iframe */}
          <div className="w-full">
            <iframe 
              id="senja-collector-iframe" 
              src="https://senja.io/p/fs-expedited-llc/r/N78S6v?mode=embed&nostyle=true" 
              allow="camera;microphone" 
              title="Senja customer review form for F&S Expedited LLC" 
              width="100%" 
              height="700"
              loading="lazy"
              className="rounded-lg border border-border"
              style={{ border: 'none' }}
            />
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">5.0</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Service Available</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
