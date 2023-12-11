type AnalyticsConfig = {
    googleTagManagerId: false | string
    facebookPixelId: false | string
}

const analyticsConfig: AnalyticsConfig = {
    googleTagManagerId: false, // or "GTM-XXXXXX"
    facebookPixelId: false,
}

export { analyticsConfig }
export type { AnalyticsConfig }
