type AnalyticsConfig = {
    googleTagManagerId: false | string
    facebookPixelId: false | string
    wlodevAnalyticsId: string
}

const analyticsConfig: AnalyticsConfig = {
    googleTagManagerId: false, // or "GTM-XXXXXX"
    facebookPixelId: false,
    wlodevAnalyticsId: '1b32cb9b-cece-4dac-acce-5edaf17af70c',
}

export { analyticsConfig }
export type { AnalyticsConfig }
