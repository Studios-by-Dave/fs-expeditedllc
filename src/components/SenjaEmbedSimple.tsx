import { useEffect } from "react";

export const SenjaEmbedSimple = () => {
  useEffect(() => {
    // Create the Senja embed exactly as provided
    const container = document.getElementById('senja-embed-container');
    if (!container) return;

    // Clear any existing content
    container.innerHTML = '';

    // Create the iframe resizer script
    const resizerScript = document.createElement('script');
    resizerScript.type = 'text/javascript';
    resizerScript.src = 'https://widget.senja.io/js/iframeResizer.min.js';
    resizerScript.onload = () => {
      // Initialize iframe resizer
      if (typeof (window as any).iFrameResize === "function") {
        (window as any).iFrameResize({ log: false, checkOrigin: false }, "#senja-collector-iframe");
      }
    };

    // Create the iframe
    const iframe = document.createElement('iframe');
    iframe.id = 'senja-collector-iframe';
    iframe.src = 'https://senja.io/p/fs-expedited-llc/r/N78S6v?mode=embed&nostyle=true';
    iframe.allow = 'camera;microphone';
    iframe.title = 'Senja form';
    iframe.frameBorder = '0';
    iframe.scrolling = 'auto';
    iframe.width = '100%';
    iframe.height = '700';
    iframe.style.width = '100%';
    iframe.style.height = '700px';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '8px';

    // Create the iframe resizer initialization script
    const initScript = document.createElement('script');
    initScript.type = 'text/javascript';
    initScript.textContent = 'iFrameResize({log: false, checkOrigin: false}, "#senja-collector-iframe");';

    // Add elements to container
    container.appendChild(resizerScript);
    container.appendChild(iframe);
    container.appendChild(initScript);

    return () => {
      // Cleanup
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div id="senja-embed-container" className="w-full">
      <div className="w-full h-16 flex items-center justify-center border border-border rounded-lg bg-card">
        <p className="text-muted-foreground">Loading reviews...</p>
      </div>
    </div>
  );
};
