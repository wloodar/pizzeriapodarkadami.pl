import clsx from 'clsx'
export default function Menu({ className }: { className?: string }) {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            className={clsx(className)}
            height="24"
            width="24"
            style={{ color: 'currentcolor' }}
        >
            <path d="M3 12h18M3 6h18M3 18h18"></path>
        </svg>
    )
}
