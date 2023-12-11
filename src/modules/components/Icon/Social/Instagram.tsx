import clsx from 'clsx'
export default function Instagram({ className }: { className?: string }) {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
            className={clsx(className)}
            height="24"
            width="24"
            style={{ color: 'currentcolor' }}
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"></path>
        </svg>
    )
}
