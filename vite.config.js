import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import * as path from 'node:path';
import * as url from 'node:url';

const _dirname = path.dirname(url.fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@/': path.resolve(_dirname, './src/'),
        },
    },
})
