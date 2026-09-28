import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Relative base ('./') so the build works whether it is served from the
// domain root or a subfolder on Hostinger shared hosting.
export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Extra static assets (beyond the built JS/CSS) to precache/serve.
      includeAssets: [
        'favicon.svg',
        'apple-touch-icon.png',
        'images/*.jpg',
      ],
      manifest: {
        name: 'Fitness Plus Gym',
        short_name: 'Fitness Plus',
        description:
          'Fitness Plus Gym, Kurla East, Mumbai — modern equipment, expert trainers, and flexible membership plans.',
        theme_color: '#e11d2a',
        background_color: '#0a0a0a',
        display: 'standalone',
        orientation: 'portrait',
        scope: './',
        start_url: './',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Precache the app shell + these asset types.
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,woff2}'],
        // Allow larger images (some gym photos are ~4-5 MB) to be precached.
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
        // Serve index.html for SPA navigations when offline.
        navigateFallback: 'index.html',
        // Runtime cache Google Fonts so they work offline after first load.
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              cacheableResponse: { statuses: [0, 200] },
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
        ],
      },
    }),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
