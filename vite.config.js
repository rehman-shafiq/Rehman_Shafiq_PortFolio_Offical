import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'], // Isay array format mein force karein
            refresh: true,
        }),
        react(),
    ],
    build: {
        // Vite ko khulley aam batayein ke index.html ka peecha chor de
        rollupOptions: {
            input: 'resources/js/app.jsx'
        }
    }
});