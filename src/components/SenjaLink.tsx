import { ExternalLink, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const SenjaLink = () => {
  const openSenjaReviews = () => {
    window.open('https://senja.io/p/fs-expedited-llc/r/N78S6v', '_blank');
  };

  return (
    <div className="w-full">
      <Card className="border border-border">
        <CardContent className="p-8 text-center">
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
          
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Read Our Customer Reviews
          </h3>
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            See what our valued clients say about our dump truck hauling and delivery services. 
            Real reviews from real customers.
          </p>
          
          <div className="space-y-4">
            <Button 
              onClick={openSenjaReviews}
              size="lg"
              className="w-full sm:w-auto"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Reviews
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Opens in a new window with all our verified customer reviews
            </p>
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
