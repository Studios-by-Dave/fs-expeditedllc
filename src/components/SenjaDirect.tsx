import { useEffect, useState } from "react";

export const SenjaDirect = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Create a container for the Senja embed
    const container = document.getElementById('senja-direct-container');
    if (!container) return;

    // Clear any existing content
    container.innerHTML = '';

    // Create the Senja embed script
    const script = document.createElement('script');
    script.src = 'https://widget.senja.io/embed.js';
    script.async = true;
    script.onload = () => {
      console.log("Senja embed script loaded");
      setLoading(false);
    };
    script.onerror = () => {
      console.error("Failed to load Senja embed script");
      setError("Failed to load Senja reviews");
      setLoading(false);
    };

    // Create the Senja embed div
    const embedDiv = document.createElement('div');
    embedDiv.setAttribute('data-senja', 'fs-expedited-llc');
    embedDiv.setAttribute('data-senja-testimonial', 'N78S6v');
    embedDiv.className = 'senja-embed';

    // Add elements to container
    container.appendChild(script);
    container.appendChild(embedDiv);

    return () => {
      // Cleanup
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  if (error) {
    return (
      <div className="w-full p-8 border border-border rounded-lg bg-card text-center">
        <p className="text-muted-foreground">Unable to load reviews. Please try again later.</p>
        <p className="text-sm text-muted-foreground mt-2">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {loading && (
        <div className="w-full h-16 flex items-center justify-center border border-border rounded-lg bg-card mb-2">
          <p className="text-muted-foreground">Loading reviews...</p>
        </div>
      )}
      <div id="senja-direct-container" className="w-full">
        <div className="w-full h-16 flex items-center justify-center border border-border rounded-lg bg-card">
          <p className="text-muted-foreground">Loading reviews...</p>
        </div>
      </div>
    </div>
  );
};
