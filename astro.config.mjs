import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'astro/config'
import { astroImageTools } from 'astro-imagetools'
import { generalConfig } from './src/config/config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
    site: generalConfig.site,
    base: generalConfig.basePathname,
    trailingSlash: generalConfig.trailingSlash ? 'always' : 'never',
    output: 'static',
    integrations: [
        tailwind({
            config: {
                applyBaseStyles: false,
            },
        }),
        sitemap(),
        astroImageTools,
        react(),
    ],
    vite: {
        resolve: {
            alias: {
                src: '/src',
                '~': path.resolve(__dirname, './src'),
            },
        },
        server: {
            host: true,
        },
        optimizeDeps: {
            exclude: ['limax'],
        },
    },
})
