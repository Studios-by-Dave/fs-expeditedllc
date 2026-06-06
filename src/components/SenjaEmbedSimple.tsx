import { useEffect, useRef, useState } from "react";

export const SenjaEmbedSimple = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create the iframe resizer script
    const resizerScript = document.createElement('script');
    resizerScript.type = 'text/javascript';
    resizerScript.src = 'https://widget.senja.io/js/iframeResizer.min.js';
    resizerScript.onload = () => {
      if (typeof (window as unknown as { iFrameResize?: (opts: object, sel: string) => void }).iFrameResize === "function") {
        (window as unknown as { iFrameResize: (opts: object, sel: string) => void }).iFrameResize(
          { log: false, checkOrigin: false },
          "#senja-collector-iframe"
        );
      }
    };

    // Create the iframe
    const iframe = document.createElement('iframe');
    iframe.id = 'senja-collector-iframe';
    iframe.src = 'https://senja.io/p/fs-expedited-llc/r/N78S6v?mode=embed&nostyle=true';
    iframe.allow = 'camera;microphone';
    iframe.title = 'Senja customer review form for F&S Expedited LLC';
    iframe.setAttribute('loading', 'lazy');
    iframe.width = '100%';
    iframe.height = '700';
    iframe.style.width = '100%';
    iframe.style.height = '700px';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '8px';
    iframe.onload = () => setIsLoaded(true);

    container.appendChild(resizerScript);
    container.appendChild(iframe);

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {!isLoaded && (
        <div className="w-full h-16 flex items-center justify-center border border-border rounded-lg bg-card">
          <p className="text-muted-foreground">Loading reviews...</p>
        </div>
      )}
    </div>
  );
};
