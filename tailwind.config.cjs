const defaultTheme = require('tailwindcss/defaultTheme')

const withOpacityValue = variable => {
    return ({ opacityValue }) => {
        if (opacityValue === undefined) {
            return `rgb(var(${variable}))`
        }
        return `rgb(var(${variable}) / ${opacityValue})`
    }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                Crimson: ['Crimson Text', ...defaultTheme.fontFamily.sans],
            },
            spacing: {
                screen: 'var(--height-screen, 100vh)',

                // Components
                nav: 'var(--height-nav)',
                announcement: 'var(--height-announcement)',
                container: 'var(--padding-container)',

                // Basic ones
                base: 'var(--spacing-base)',
                block: 'var(--spacing-block)',
            },
            colors: {
                // Texts and general
                primary: withOpacityValue('--color-primary'),
                contrast: withOpacityValue('--color-contrast'),
                accent: withOpacityValue('--color-accent'),
                highlight: withOpacityValue('--color-highlight'),

                // Backgrounds
                background: withOpacityValue('--color-background'),
            },
            borderColor: {
                borderPrimary: withOpacityValue('--border-color-primary'),
                borderSecondary: withOpacityValue('--border-color-secondary'),
            },
            fontSize: {
                display: ['var(--font-size-display)', '1.1'],
                heading: ['var(--font-size-heading)', '1.25'],
                lead: ['var(--font-size-lead)', '1.333'],
                copy: ['var(--font-size-copy)', '1.5'],
                smaller: ['var(--font-size-smaller)', '1.5'],
                fine: ['var(--font-size-fine)', '1.333'],
            },
            maxWidth: {
                container: 'var(--width-container)',
                containerSmall: 'var(--width-container-small)',
            },
            borderRadius: {
                smaller: 'var(--roundness-smaller)',
                default: 'var(--roundness-default)',
                bigger: 'var(--roundness-bigger)',
            },
        },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
    corePlugins: {
        aspectRatio: false,
    },
}
