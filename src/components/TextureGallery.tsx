import { useState } from "react";
import textureKnockdown from "@/assets/texture-knockdown.jpg";
import textureSmooth from "@/assets/texture-smooth.jpg";
import textureFaux from "@/assets/texture-faux.jpg";
import textureStucco from "@/assets/texture-stucco.jpg";

const textures = [
  {
    id: 1,
    name: "Knockdown",
    category: "Textured",
    image: textureKnockdown,
    description: "Classic knockdown texture with subtle dimension",
  },
  {
    id: 2,
    name: "Smooth Satin",
    category: "Smooth",
    image: textureSmooth,
    description: "Elegant smooth finish with satin sheen",
  },
  {
    id: 3,
    name: "Venetian Plaster",
    category: "Faux",
    image: textureFaux,
    description: "Luxurious decorative finish with depth",
  },
  {
    id: 4,
    name: "Stucco",
    category: "Textured",
    image: textureStucco,
    description: "Mediterranean-inspired exterior texture",
  },
];

const categories = ["All", "Smooth", "Textured", "Faux"];

export const TextureGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredTextures =
    activeCategory === "All"
      ? textures
      : textures.filter((t) => t.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium tracking-widest text-sm uppercase">
            Explore Finishes
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Texture Gallery
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Browse our collection of professional paint textures and finishes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredTextures.map((texture) => (
            <div
              key={texture.id}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(texture.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={texture.image}
                alt={texture.name}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredId === texture.id ? "scale-110" : "scale-100"
                }`}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-300 ${
                  hoveredId === texture.id ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Content */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
                  hoveredId === texture.id
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {texture.category}
                </span>
                <h3 className="text-lg font-serif font-semibold text-foreground mt-1">
                  {texture.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {texture.description}
                </p>
              </div>

              {/* Border Effect */}
              <div
                className={`absolute inset-0 rounded-xl border-2 transition-colors duration-300 ${
                  hoveredId === texture.id
                    ? "border-primary/50"
                    : "border-transparent"
                }`}
              />
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Request custom texture consultation
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
