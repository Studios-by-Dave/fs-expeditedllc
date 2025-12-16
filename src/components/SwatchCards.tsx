import { useState } from "react";

const swatches = [
  { id: 1, name: "Warm Cream", hex: "#E7D2A7", category: "Warm" },
  { id: 2, name: "Charcoal Gray", hex: "#444242", category: "Neutral" },
  { id: 3, name: "Deep Espresso", hex: "#262221", category: "Dark" },
  { id: 4, name: "Muted Taupe", hex: "#9A9083", category: "Neutral" },
  { id: 5, name: "Soft Stone", hex: "#706562", category: "Neutral" },
  { id: 6, name: "Coastal Blue", hex: "#6B8E9F", category: "Cool" },
  { id: 7, name: "Sage Green", hex: "#8FA387", category: "Cool" },
  { id: 8, name: "Dusty Rose", hex: "#C9A9A6", category: "Warm" },
  { id: 9, name: "Slate Gray", hex: "#5A6168", category: "Cool" },
  { id: 10, name: "Antique White", hex: "#F5EFE0", category: "Light" },
  { id: 11, name: "Mocha Brown", hex: "#7D6554", category: "Warm" },
  { id: 12, name: "Pearl Gray", hex: "#C8C6C4", category: "Light" },
];

export const SwatchCards = () => {
  const [selectedSwatch, setSelectedSwatch] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Warm", "Cool", "Neutral", "Light", "Dark"];

  const filteredSwatches =
    activeCategory === "All"
      ? swatches
      : swatches.filter((s) => s.category === activeCategory);

  return (
    <section className="section-padding bg-gradient-card">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium tracking-widest text-sm uppercase">
            Color Lab
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Swatch Collection
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Explore our curated color palette. Click any swatch to see details.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Swatch Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {filteredSwatches.map((swatch) => (
            <div
              key={swatch.id}
              className={`group cursor-pointer transition-all duration-300 ${
                selectedSwatch === swatch.id ? "scale-105" : "hover:scale-103"
              }`}
              onClick={() =>
                setSelectedSwatch(selectedSwatch === swatch.id ? null : swatch.id)
              }
            >
              {/* Swatch Color */}
              <div
                className={`aspect-square rounded-lg shadow-md transition-all duration-300 ${
                  selectedSwatch === swatch.id
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background shadow-lg"
                    : "group-hover:shadow-lg"
                }`}
                style={{ backgroundColor: swatch.hex }}
              />

              {/* Label */}
              <div className="mt-2 text-center">
                <p className="text-xs font-medium text-foreground truncate">
                  {swatch.name}
                </p>
                <p className="text-xs text-muted-foreground uppercase">
                  {swatch.hex}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Swatch Detail */}
        {selectedSwatch && (
          <div className="mt-12 max-w-md mx-auto animate-fade-up">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div
                className="w-20 h-20 rounded-lg mx-auto mb-4 shadow-lg"
                style={{
                  backgroundColor: swatches.find((s) => s.id === selectedSwatch)
                    ?.hex,
                }}
              />
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {swatches.find((s) => s.id === selectedSwatch)?.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 uppercase">
                {swatches.find((s) => s.id === selectedSwatch)?.hex}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Category: {swatches.find((s) => s.id === selectedSwatch)?.category}
              </p>
              <button className="mt-4 text-sm text-primary hover:text-primary/80 font-medium">
                Add to Quote Request →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
