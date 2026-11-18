import { useRef, useState } from "react"
import type { MoviePreviewState, ResponseMovie } from "../types/response-movie.types"


export default function useCarousel() {
    const [preview, setPreview] = useState<MoviePreviewState | null>(null)
    const setTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const clearTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

    const handleMouseHover = (movie: ResponseMovie, event: React.MouseEvent<HTMLElement>) => {
        const rect = event.currentTarget.getBoundingClientRect()
        clearTimeout(clearTimer.current ?? undefined)
        clearTimeout(setTimer.current ?? undefined)
        setTimer.current = window.setTimeout(() => {
            setPreview({ movie, rect })
        }, preview ? 60 : 1000)
    }

    const handleMouseLeave = () => {
        clearTimeout(setTimer.current ?? undefined)
        clearTimeout(clearTimer.current ?? undefined)
        clearTimer.current = window.setTimeout(() => setPreview(null), 60)
    }

    const cancelPreview = () => {
        clearTimeout(setTimer.current ?? undefined)
        clearTimeout(clearTimer.current ?? undefined)

        setTimer.current = null
        clearTimer.current = null
    }

    return { preview, clearTimer, handleMouseHover, handleMouseLeave, cancelPreview }
}