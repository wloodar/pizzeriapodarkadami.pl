import clsx from 'clsx'

type TitleProps = {
    variant?: 'default'
    as?: React.ElementType
    id?: string
    className?: string
} & (
    | { children: React.ReactNode }
    | {
          dangerouslySetInnerHTML: {
              __html: string
          }
      }
)

const fontSize = {
    h1: 'text-4xl md:text-heading lg:text-display font-semibold md:!leading-[1.3]',
    h2: 'text-3xl md:text-4xl lg:text-display font-semibold',
    h3: 'text-heading font-semibold',
    h4: 'text-copy md:text-md lg::text-xl font-semibold font-sans',
    h5: 'text-sm md:text-md font-sans font-bold uppercase tracking-wider',
    h6: '',
}

const titleColors = {
    default: 'text-black',
}

const Title = ({
    variant = 'default',
    size,
    as,
    className,
    ...rest
}: TitleProps & { size: keyof typeof fontSize }) => {
    const Tag = as ?? size
    return (
        <div className={clsx()}>
            <Tag
                className={clsx(
                    fontSize[size],
                    titleColors[variant],
                    className,
                )}
                {...rest}
            />
        </div>
    )
}

function H1(props: TitleProps) {
    return <Title {...props} size="h1" />
}

function H2(props: TitleProps) {
    return <Title {...props} size="h2" />
}

function H3(props: TitleProps) {
    return <Title {...props} size="h3" />
}

function H4(props: TitleProps) {
    return <Title {...props} size="h4" />
}

function H5(props: TitleProps) {
    return <Title {...props} size="h5" />
}

function H6(props: TitleProps) {
    return <Title {...props} size="h6" />
}

function AboveHeader({
    center = true,
    uppercase = true,
    className,
    ...rest
}: { center?: boolean; uppercase?: boolean; className?: string } & (
    | { children: React.ReactNode }
    | {
          dangerouslySetInnerHTML: {
              __html: string
          }
      }
)) {
    return (
        <div
            className={clsx(
                'text-smaller lg:text-copy pb-2 font-bold tracking-widest text-highlight',
                className,
                {
                    'text-center': center === true,
                    uppercase: uppercase === true,
                },
            )}
            {...rest}
        ></div>
    )
}

function Text({
    children,
    className,
    font,
    size,
}: {
    children: React.ReactNode
    className?: string
    font?: 'sans' | 'crimson'
    size?: 1 | 2 | 3
}) {
    return (
        <div
            className={clsx(
                {
                    'font-sans': typeof font === 'undefined' || font === 'sans',
                    'font-Crimson': font === 'crimson',
                },
                className,
            )}
        >
            <p
                className={clsx('md:text-lead !leading-[1.7]', {
                    'text-sm md:text-copy':
                        typeof size === 'undefined' || size === 1,
                    '!text-lead md:!text-xl': size === 2,
                })}
            >
                {children}
            </p>
        </div>
    )
}

export { H1, H2, H3, H4, H5, H6, AboveHeader, Text }
