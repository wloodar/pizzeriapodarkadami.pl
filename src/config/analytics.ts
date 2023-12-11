type AnalyticsConfig = {
    googleTagManagerId: false | string
    facebookPixelId: false | string
    wlodevAnalyticsId: string
}

const analyticsConfig: AnalyticsConfig = {
    googleTagManagerId: false, // or "GTM-XXXXXX"
    facebookPixelId: false,
    wlodevAnalyticsId: '8b018780-3742-4ad0-8e06-62b854fda9d5',
}

export { analyticsConfig }
export type { AnalyticsConfig }
