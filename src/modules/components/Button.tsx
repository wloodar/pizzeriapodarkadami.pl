import React, { useState } from 'react'
import clsx from 'clsx'
import Icon from './Icon/Icon'

export type Props = {
    appearance?: 'primary' | 'border' | 'text'
    el?: 'button' | 'link' | 'a'
    onClick?: () => void
    href?: string
    newTab?: boolean
    className?: string
    label?: string
    labelStyle?: 'mono' | 'regular'
    iconLeft?: string
    iconRight?: string
    iconClassName?: string
    fullWidth?: boolean
    mobileFullWidth?: boolean
    // reference?: Reference
    htmlButtonType?: 'button' | 'submit'
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}

const ButtonContent: React.FC<Props> = props => {
    const {
        iconLeft,
        iconRight,
        iconClassName,
        label,
        labelStyle = 'mono',
        appearance,
    } = props

    const UseIconLeft = <Icon name={iconLeft} className={clsx(iconClassName)} />
    const UseIconRight = (
        <Icon name={iconRight} className={clsx(iconClassName)} />
    )

    return (
        <div
            className={clsx(
                'flex items-center justify-center gap-x-2 basicTransitionAll cursor-pointer py-4 w-full font-sans group',
                {
                    'uppercase font-bold tracking-wide border-b border-borderSecondary hover:border-borderPrimary':
                        appearance === 'primary' ||
                        typeof appearance === 'undefined',
                    'text-sm md:text-base border border-borderPrimary hover:bg-primary hover:text-white':
                        appearance === 'border',
                    'text-sm md:text-base uppercase font-bold tracking-wide':
                        appearance === 'text',
                },
            )}
        >
            {iconLeft && <>{UseIconLeft}</>}
            {label && <div>{label}</div>}
            {iconRight && <>{UseIconRight}</>}
        </div>
    )
}

const elements: {
    [key: string]: React.ElementType
} = {
    a: 'a',
    button: 'button',
}

export const Button: React.FC<Props> = props => {
    const {
        el = 'button',
        newTab,
        href: hrefFromProps,
        appearance = 'default',
        className: classNameFromProps,
        onClick,
        fullWidth,
        mobileFullWidth,
        // reference,
        htmlButtonType = 'button',
    } = props

    const [isHovered, setIsHovered] = useState(false)

    let href = hrefFromProps

    const newTabProps = newTab
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {}

    const className = [classNameFromProps].filter(Boolean).join(' ')

    if (el === 'link') {
        return (
            <a
                href={href}
                className={className}
                onMouseEnter={() => {
                    setIsHovered(true)
                }}
                onMouseLeave={() => {
                    setIsHovered(false)
                }}
                {...newTabProps}
            >
                <ButtonContent {...props} />
            </a>
        )
    }

    const Element = elements[el]

    if (Element) {
        return (
            <Element
                type={htmlButtonType}
                className={className}
                {...newTabProps}
                href={href}
                onClick={onClick}
                onMouseEnter={() => {
                    setIsHovered(true)
                }}
                onMouseLeave={() => {
                    setIsHovered(false)
                }}
            >
                <ButtonContent {...props} />
            </Element>
        )
    }

    return null
}
