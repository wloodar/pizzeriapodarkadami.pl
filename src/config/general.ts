type GeneralConfig = {
    siteId: string
    name: string
    origin: string
    site: string
    lang: string
    basePathname: string
    trailingSlash: boolean
    googleSiteVerificationId: string
}

const generalConfig: GeneralConfig = {
    // wlodev sitecenter specific config
    siteId: 'vefslq6bdmss',

    name: 'Pizzeria pod Arkadami',

    origin: 'https://pizzeriapodarkadami.pl',
    site: 'https://pizzeriapodarkadami.pl',
    lang: 'pl',
    basePathname: '/',
    trailingSlash: false,

    googleSiteVerificationId: 'kQbzAQNsi0Ow8T2zBZf9X_laoizqhATf5lDLQOD7Rns',
}

export { generalConfig }
export type { GeneralConfig }
