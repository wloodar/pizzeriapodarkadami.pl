import clsx from 'clsx'
export default function ArrowUpRight({ className }: { className?: string }) {
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
            <path d="M7 17L17 7M7 7h10v10"></path>
        </svg>
    )
}
