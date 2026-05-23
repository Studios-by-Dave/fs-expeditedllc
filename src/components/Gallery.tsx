import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Gallery images data - using actual project images
const galleryImages = [
  {
    id: 1,
    url: "/assets/gallery/FS_Logo.jpg",
    alt: "F&S Expedited LLC - Team at Work",
    caption: "Our professional team delivering exceptional hauling services to clients throughout the region."
  },
  {
    id: 2,
    url: "/assets/gallery/FS_3.jpg",
    alt: "F&S Expedited LLC - Professional Hauling Services",
    caption: "Professional dump truck hauling and expedited services for Shelby, NC and surrounding areas."
  },
  {
    id: 3,
    url: "/assets/gallery/FS_4.jpg",
    alt: "F&S Expedited LLC - Heavy Equipment",
    caption: "Modern fleet and experienced operators ready for any size hauling project."
  },
  {
    id: 4,
    url: "/assets/gallery/FS_5.jpg",
    alt: "F&S Expedited LLC - Job Site",
    caption: "On-site hauling services for construction, debris removal, and material delivery."
  },
  {
    id: 5,
    url: "/assets/gallery/FS_6.jpg",
    alt: "F&S Expedited LLC - Project Showcase",
    caption: "Completed projects showcasing our quality hauling services and professional workmanship."
  },
  {
    id: 6,
    url: "/assets/gallery/fs image1.png",
    alt: "F&S Expedited LLC - Dump Truck Operation",
    caption: "Our dump trucks in action, providing reliable material transport and hauling services."
  },
  {
    id: 7,
    url: "/assets/gallery/fs image2.png",
    alt: "F&S Expedited LLC - Site Services",
    caption: "Professional site preparation and land management services for construction projects."
  },
  {
    id: 8,
    url: "/assets/gallery/fs image3.png",
    alt: "F&S Expedited LLC - Material Delivery",
    caption: "Quality material delivery including gravel, sand, and soil for various construction needs."
  },
  {
    id: 9,
    url: "/assets/gallery/fs image4.png",
    alt: "F&S Expedited LLC - Emergency Services",
    caption: "Emergency expedited hauling services available when you need them most."
  },
  {
    id: 10,
    url: "/assets/gallery/fs image5.png",
    alt: "F&S Expedited LLC - Fleet Operations",
    caption: "Our well-maintained fleet ready to handle any hauling challenge with precision and efficiency."
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
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-4xl font-heading font-bold text-foreground tracking-wider">
            OUR WORK
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-sans">
            Browse through our completed hauling projects and see the quality of our work.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border border-border overflow-hidden">
            <CardContent className="p-0">
              {/* Thumbnail Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6">
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
