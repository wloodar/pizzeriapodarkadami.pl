type PagesTypes = 'blog'

type PathnameItemConfig = {
    disabled?: boolean
    pathname: string
}

type PathnamesConfig = {
    [k in PagesTypes]: {
        disabled?: boolean
        postsPerPage: number
        root: string
        paths: { [k: string]: PathnameItemConfig }
    }
}

const pathnamesConfig: PathnamesConfig = {
    blog: {
        root: 'blog',
        postsPerPage: 20,
        paths: {
            post: {
                pathname: 'post',
            },
            tag: {
                pathname: 'tag',
            },
        },
    },
}

export { pathnamesConfig }
export type { PathnamesConfig }
