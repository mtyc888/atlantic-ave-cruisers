import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

/**
 * Build config for the standalone static site deployed to Vercel.
 *
 * Deliberately separate from vite.config.ts, which is the Laravel build and
 * carries the laravel/wayfinder/inertia plugins none of this needs. Only the
 * marketing site is built here — no Tailwind, no auth pages.
 */
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: { '@': path.resolve(__dirname, 'resources/js') },
    },
    // public/ already holds the favicons and og-image, so Vite copies them
    // into the build output as-is.
    publicDir: 'public-static',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
});
