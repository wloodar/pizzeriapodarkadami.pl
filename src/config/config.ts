import { analyticsConfig } from './analytics'
import { generalConfig } from './general'
import { seoConfig } from './seo'
import { pathnamesConfig } from './pathnames'

const config = {
    general: generalConfig,
    seo: seoConfig,
    analytics: analyticsConfig,
    pathnames: pathnamesConfig,
}

export default config
export * from './general'
export * from './seo'
export * from './analytics'
export * from './pathnames'
