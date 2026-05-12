const STORAGE_KEY = 'utm_params_v1';

export type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

export function captureUtm(): UtmParams {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const keys = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content'];
  const utm: UtmParams = {};
  keys.forEach(k => {
    const v = params.get(k);
    if (v) (utm as any)[k] = v;
  });
  if (Object.keys(utm).length) {
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm)); } catch {}
    return utm;
  }
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch { return {}; }
}

export function getUtm(): UtmParams {
  if (typeof window === 'undefined') return {};
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch { return {}; }
}

export default getUtm;
