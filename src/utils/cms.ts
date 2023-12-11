import { generalConfig } from '~/config/general'

const cmsFetch = async (url: string, options?: { headers?: Headers }) => {
    const headers = options && options.headers

    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const mergedHeaders = {
        ...defaultOptions,
        ...headers,
    }

    const cmsApiURL = `https://${generalConfig.siteId}.cms.wlodev.com/api`

    const res = await fetch(`${cmsApiURL}${url}`, mergedHeaders)

    if (res.ok) {
        return res.json()
    }

    throw new Error(
        `Error fetching page data: ${res.statusText} (${res.status})}`,
    )
}

export { cmsFetch }
