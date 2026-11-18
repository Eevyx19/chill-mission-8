interface NewEpsBadgeProps {
    isLandscape: boolean
}
export default function NewEpsBadge({ isLandscape }: NewEpsBadgeProps) {
    return (
        <div className={`${isLandscape ? "px-2.5 py-1 top-5 left-5" : "px-1.25 sm:px-1.5 md:px-2.25 lg:px-2.5 py-0.5 sm:py-0.75 md:py-1 top-1 sm:top-2 md:top-3 lg:top-4 left-2 lg:left-4"} absolute bg-(--primary-300) rounded-2xl`}>
            <p className={`${isLandscape ? "text-xs" : "text-[6px] sm:text-[8px] md:text-xs lg:text-[14px]"}`}>Episode Baru</p>
        </div>
    )
}