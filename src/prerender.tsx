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

export async function prerender(url: string) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  const helmetContext = {};

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
    }
  };
}
