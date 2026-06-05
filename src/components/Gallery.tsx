import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Gallery images data - using actual project images
const galleryImages = [
  {
    id: 1,
    url: "/assets/gallery/FS_3.jpg",
    alt: "F&S Expedited LLC - Professional Hauling Services",
    caption: "Professional dump truck hauling and expedited services for Shelby, NC and surrounding areas."
  },
  {
    id: 2,
    url: "/assets/gallery/FS_4.jpg",
    alt: "F&S Expedited LLC - Heavy Equipment",
    caption: "Modern fleet and experienced operators ready for any size hauling project."
  },
  {
    id: 3,
    url: "/assets/gallery/FS_5.jpg",
    alt: "F&S Expedited LLC - Job Site",
    caption: "On-site hauling services for construction, debris removal, and material delivery."
  },
  {
    id: 4,
    url: "/assets/gallery/FS_6.jpg",
    alt: "F&S Expedited LLC - Project Showcase",
    caption: "Completed projects showcasing our quality hauling services and professional workmanship."
  },
  {
    id: 5,
    url: "/assets/gallery/fs image1.png",
    alt: "F&S Expedited LLC - Dump Truck Operation",
    caption: "Our dump trucks in action, providing reliable material transport and hauling services."
  },
  {
    id: 6,
    url: "/assets/gallery/fs image2.png",
    alt: "F&S Expedited LLC - Site Services",
    caption: "Professional site preparation and land management services for construction projects."
  },
  {
    id: 7,
    url: "/assets/gallery/fs image3.png",
    alt: "F&S Expedited LLC - Material Delivery",
    caption: "Quality material delivery including gravel, sand, and soil for various construction needs."
  },
  {
    id: 8,
    url: "/assets/gallery/fs image4.png",
    alt: "F&S Expedited LLC - Emergency Services",
    caption: "Emergency expedited hauling services available when you need them most."
  },
  {
    id: 9,
    url: "/assets/gallery/fs image5.png",
    alt: "F&S Expedited LLC - Fleet Operations",
    caption: "Our well-maintained fleet ready to handle any hauling challenge with precision and efficiency."
  },
  {
    id: 10,
    url: "/assets/gallery/fs-new1.png",
    alt: "F&S Expedited LLC - Project Completion",
    caption: "Recently completed project showcasing our professional hauling services and attention to detail."
  },
  {
    id: 11,
    url: "/assets/gallery/fs-new2.png",
    alt: "F&S Expedited LLC - Equipment Showcase",
    caption: "Our modern equipment and fleet in action, delivering reliable hauling solutions."
  },
  {
    id: 12,
    url: "/assets/gallery/fs-new4.png",
    alt: "F&S Expedited LLC - Material Transport",
    caption: "Efficient material transport services for construction and landscaping projects."
  },
  {
    id: 13,
    url: "/assets/gallery/fs-new5.png",
    alt: "F&S Expedited LLC - Team Excellence",
    caption: "Our experienced team delivering exceptional service on every project."
  },
  {
    id: 14,
    url: "/assets/gallery/fs-new6.png",
    alt: "F&S Expedited LLC - Project Success",
    caption: "Another successful project completed with precision and professional workmanship."
  },
  {
    id: 15,
    url: "/assets/gallery/fs-new7.png",
    alt: "F&S Expedited LLC - Quality Service",
    caption: "Demonstrating our commitment to quality service and customer satisfaction."
  },
  {
    id: 16,
    url: "/assets/gallery/joeandluke1.png",
    alt: "F&S Expedited LLC - Owners Joe Alrich and Luke Tutterow",
    caption: "Meet our owners Joe Alrich and Luke Tutterow, dedicated to providing exceptional hauling services."
  }
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImageModal = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
            Project Gallery
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-foreground tracking-wider">
            Gallery
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-sans">
            Browse through our completed hauling projects and see the quality of our work.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border border-border overflow-hidden">
            <CardContent className="p-0">
              {/* Thumbnail Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {galleryImages.map((image) => (
                  <div key={image.id} className="relative group cursor-pointer" onClick={() => openImageModal(image.id)}>
                    <div className="aspect-square overflow-hidden rounded-lg border border-border">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Expand Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(image.url, '_blank');
                      }}
                    >
                      <Maximize2 className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Image Modal */}
        {selectedImage && selectedImageData && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={selectedImageData.url}
                alt={selectedImageData.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-4 rounded-lg">
                <p className="text-sm">{selectedImageData.caption}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="absolute top-4 right-4 bg-white/10 text-white border-white/20 hover:bg-white/20"
                onClick={closeImageModal}
              >
                Close
              </Button>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-primary font-semibold text-lg mb-2">More Images Coming Soon!</p>
          <p className="text-muted-foreground text-sm font-sans">
            Need hauling services? <a href="/contact" className="text-primary hover:underline font-semibold">Contact us</a> for a free quote on your next project.
          </p>
        </div>
      </div>
    </section>
  );
};
