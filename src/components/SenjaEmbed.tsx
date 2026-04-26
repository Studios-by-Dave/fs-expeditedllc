import { useEffect, useState } from "react";

export const SenjaEmbed = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load Senja iframe resizer script
    const script = document.createElement("script");
    script.src = "https://widget.senja.io/js/iframeResizer.min.js";
    script.type = "text/javascript";
    script.async = true;
    
    script.onload = () => {
      console.log("Senja iframe resizer script loaded");
      // Initialize iframe resizer after script loads
      if (typeof (window as any).iFrameResize === "function") {
        (window as any).iFrameResize(
          { log: false, checkOrigin: false },
          "#senja-collector-iframe"
        );
      }
    };

    script.onerror = () => {
      console.error("Failed to load Senja iframe resizer script");
      setError("Failed to load Senja script");
    };

    document.head.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleIframeLoad = () => {
    console.log("Senja iframe loaded successfully");
    setIframeLoaded(true);
  };

  const handleIframeError = () => {
    console.error("Senja iframe failed to load");
    setError("Failed to load Senja reviews");
  };

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
      {!iframeLoaded && (
        <div className="w-full h-16 flex items-center justify-center border border-border rounded-lg bg-card mb-2">
          <p className="text-muted-foreground">Loading reviews...</p>
        </div>
      )}
      <iframe
        id="senja-collector-iframe"
        src="https://senja.io/p/fs-expedited-llc/r/N78S6v?mode=embed"
        allow="camera;microphone"
        title="Senja Reviews"
        frameBorder="0"
        scrolling="auto"
        width="100%"
        height="700"
        className="w-full rounded-lg border border-border"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
      />
    </div>
  );
};
