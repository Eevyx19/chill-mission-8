interface TopBadgeProps {
    isLandscape: boolean
}
export default function TopBadge({ isLandscape }: TopBadgeProps) {
    return (
        <div className={`${isLandscape ? "right-8 lg:right-10 p-1" : "p-0.5 md:p-1 right-2 "} absolute top-0 bg-(--error-pressed) rounded-tr-xs lg:rounded-tr-sm rounded-bl-xs lg:rounded-bl-sm text-center`}>
            <p className={`${isLandscape ? "text-xs" : "text-[6px] sm:text-[8px] md:text-xs lg:text-[14px]"}`}>Top</p>
            <p className={`${isLandscape ? "text-xs" : "text-[6px] sm:text-[8px] md:text-xs lg:text-[14px]"} `}>10</p>
        </div>
    )
}