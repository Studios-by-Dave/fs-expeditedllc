declare global {
  interface Window {
    iFrameResize: (options: any, selector?: string | HTMLElement) => void;
  }
}

export {};
