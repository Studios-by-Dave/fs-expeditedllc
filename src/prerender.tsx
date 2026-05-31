import { renderToString } from 'react-dom/server';
import { AppContent } from './App';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from 'react-helmet-async';

// Mock browser globals for Node.js environment during pre-rendering
if (typeof global !== 'undefined' && typeof window === 'undefined') {
  (global as any).window = {
    location: { pathname: '/' },
    history: {
      pushState: () => {},
      replaceState: () => {},
      state: {},
    },
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
    getComputedStyle: () => ({
      getPropertyValue: () => '',
    }),
    matchMedia: () => ({
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    }),
  };
  (global as any).document = {
    defaultView: (global as any).window,
    documentElement: { 
      style: {},
      getAttribute: () => null,
      setAttribute: () => {},
    },
    createElement: () => ({ 
      style: {},
      setAttribute: () => {},
      getAttribute: () => null,
    }),
    getElementsByTagName: () => [],
    head: { appendChild: () => {} },
    body: { appendChild: () => {} },
  };
  (global as any).localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
  };
  Object.defineProperty(global, 'navigator', {
    value: { userAgent: '' },
    writable: true,
    configurable: true
  });
}

export async function prerender(data: string | { url: string }) {
  // The vite-prerender-plugin invokes this with `{ ssr, url, route }`, but older
  // callers may pass the URL string directly. Support both so each route renders
  // its own page instead of falling back to the homepage.
  const url = typeof data === 'string' ? data : data.url;

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  interface HelmetDatum {
    toString(): string;
  }
  const helmetContext: { helmet?: { title?: HelmetDatum; link?: HelmetDatum } } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <AppContent />
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  // Dynamically import server-only crawling tool
  const { parseLinks } = await import('vite-prerender-plugin/parse');
  const links = parseLinks(html);

  // Extract per-page <title> and canonical <link> from react-helmet-async so the
  // prerendered static HTML carries unique, correct SEO tags (otherwise every
  // prerendered page would inherit the generic title/meta from index.html).
  const helmet = helmetContext.helmet;
  const headElements = new Set<{ type: string; props: Record<string, string> }>();
  let title = '';

  if (helmet) {
    const titleHtml = helmet.title?.toString() ?? '';
    const titleMatch = titleHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    if (titleMatch) {
      title = titleMatch[1]
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#(?:39|x27);/g, "'");
    }

    const linkHtml = helmet.link?.toString() ?? '';
    const canonicalMatch = linkHtml.match(/<link[^>]*rel="canonical"[^>]*>/i);
    const hrefMatch = canonicalMatch?.[0].match(/href="([^"]+)"/i);
    if (hrefMatch) {
      headElements.add({ type: 'link', props: { rel: 'canonical', href: hrefMatch[1] } });
    }
  }

  // Force exit after a short delay to ensure Vercel/CI environments don't hang
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') {
    setTimeout(() => {
      console.log('Pre-rendering complete. Force exiting...');
      process.exit(0);
    }, 2000);
  }

  return { 
    html,
    links: new Set(links),
    head: {
      lang: 'en',
      title,
      elements: headElements,
    }
  };
}
