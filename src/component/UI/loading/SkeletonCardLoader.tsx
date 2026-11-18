interface SkeletonProps {
    cards: number;
    variant: string;
}

export default function SkeletonCardLoader(props: SkeletonProps) {
    const { cards, variant } = props
    return (
        <div className="flex gap-6 overflow-hidden">
            {Array.from({ length: cards }).map((_, index) => (
                <div
                    key={index}
                    className={`shrink-0 animate-pulse rounded-xl bg-(--info-background) ${variant === "landscape" ? "w-78 lg:w-80 h-38 lg:h-40" : "w-24 sm:w-36 md:w-50 lg:w-58 h-40 sm:h-56 md:h-76 lg:h-91"} `}
                />
            ))}
        </div>
    )
}