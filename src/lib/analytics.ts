const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window { dataLayer?: any[]; gtag?: (...args: any[]) => void }
}

export function initGA() {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === 'undefined') return;
  if ((window as any).gtag) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(){ window.dataLayer!.push(arguments); } as any;
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
}

export type EventPayload = Record<string, any>;

export function trackEvent(name: string, payload: EventPayload = {}) {
  if (typeof window === 'undefined') return;
  try {
    if (window.gtag) {
      window.gtag('event', name, payload);
    }
  } catch (e) {
    // swallow
  }
  try {
    if (window.dataLayer) {
      window.dataLayer.push({ event: name, ...payload });
    }
  } catch {}
}

export default trackEvent;
