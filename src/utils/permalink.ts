import slugify from 'limax'
import { generalConfig } from '~/config/general'

const trim = (str: string, ch?: string) => {
    let start = 0,
        end = str.length || 0
    while (start < end && str[start] === ch) ++start
    while (end > start && str[end - 1] === ch) --end
    return start > 0 || end < str.length ? str.substring(start, end) : str
}

const trimSlash = (s: string) => trim(trim(s, '/'))

const createPath = (...params: any) => {
    const paths = params.filter((el: any) => !!el).join('/')
    return '/' + paths + (generalConfig.trailingSlash && paths ? '/' : '')
}

const basePathname = trimSlash(generalConfig.basePathname)
export const cleanSlug = (text: string) => slugify(trimSlash(text))

export const getCanonical = (path = '') => new URL(path, generalConfig.origin)

export const getRelativeLink = (link = '') => {
    return createPath(basePathname, trimSlash(link))
}
