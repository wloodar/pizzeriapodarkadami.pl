import clsx from 'clsx'
export default function ArrowLeft({ className }: { className?: string }) {
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
            <path d="M19 12H5M12 19l-7-7 7-7"></path>
        </svg>
    )
}
