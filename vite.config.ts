import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { vitePrerenderPlugin } from 'vite-prerender-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: path.resolve(__dirname, 'src/prerender.tsx'),
      additionalPrerenderRoutes: [
        '/',
        '/services',
        '/services/dump-truck-hauling',
        '/services/gravel-sand-delivery',
        '/services/debris-removal',
        '/services/aggregate-transport',
        '/services/emergency-expedited',
        '/services/commercial-hauling',
        '/services/site-prep',
        '/services/land-clearing',
        '/why-us',
        '/process',
        '/reviews',
        '/contact',
        '/service-area',
        '/privacy-policy',
        '/terms-of-service',
        '/404'
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: [],
      onwarn(warning, warn) {
        // Suppress warnings about @tanstack/react-query
        if (warning.code === 'MODULE_NOT_FOUND' && warning.message.includes('@tanstack/react-query')) {
          return;
        }
        warn(warning);
      },
    },
  },
}));
