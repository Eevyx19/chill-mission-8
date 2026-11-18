import { Pencil, Star, Trash } from "lucide-react";
import Heading6 from "./UI/heading/Heading6";
import BodySmallRegular from "./UI/body-small/BodySmallRegular";
import NewEpsBadge from "./badge/NewEpisode";
import TopBadge from "./badge/Top";
import { useState, type MouseEventHandler } from "react";
import type { ResponseMovie } from "../types/response-movie.types";
import { Ellipsis } from "@filled-lucide/react";
import Button from "./UI/Button";
import type { NavigateFunction } from "react-router";
import { useModalStore } from "../store/useModalStore";

interface MovieCardProps {
    movie: ResponseMovie;
    handleMouseHover: (
        movie: ResponseMovie,
        event: React.MouseEvent<HTMLElement>
    ) => void;
    handleMouseLeave: MouseEventHandler<HTMLElement>;
    cancelPreview: () => void;
    variant: "landscape" | "potrait";
    navigate: NavigateFunction;
}

export default function MovieCard(props: MovieCardProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { openModal } = useModalStore()

    const { movie, handleMouseHover, handleMouseLeave, cancelPreview, variant, navigate } = props

    const isLandscape = variant === "landscape"
    return (
        <li>
            <article
                onMouseEnter={(event) => handleMouseHover(movie, event)}
                onMouseLeave={handleMouseLeave}
                className={`${isLandscape ? "w-78 lg:w-80 h-38 lg:h-40" : "w-24 sm:w-36 md:w-50 lg:w-58 h-40 sm:h-56 md:h-76 lg:h-91"} shrink-0`}>
                <figure
                    className="relative w-full h-full overflow-hidden rounded lg:rounded-lg "
                >
                    {movie.is_new_episode && <NewEpsBadge isLandscape={isLandscape} />}
                    {movie.is_top && <TopBadge isLandscape={isLandscape} />}
                    <img
                        src={isLandscape ? movie.backdrop_image : movie.poster_image}
                        alt={`Poster ${movie.title}`}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-(--paper-background)/30 via-(--paper-background)/20 to-transparent" />

                    <Button
                        onClick={() => {
                            cancelPreview()
                            setIsMenuOpen(prev => !prev)
                        }}
                        className={`${isLandscape ? "right-1 top-2" : "top-6 sm:top-8 md:top-11 lg:top-13 right-1 md:right-2"} absolute bg-(--paper-background) p-1 lg:p-1.5`}
                        type="button"
                    >
                        <Ellipsis className={`${isLandscape ? " size-3 md:size-4" : "size-2 sm:size-3 md:size-4"}`} />
                    </Button>

                    {/* Menu Open */}
                    {isMenuOpen && (
                        <div className={`${isLandscape ? "w-30 top-10 md:top-11 lg:top-12 right-0 lg:right-1" : "w-22 sm:w-30 top-13 sm:top-17 md:top-20 lg:top-24 -right-0.5 sm:right-0 md:right-1 lg:right-2 text-xs sm:text-sm md:text-base"} flex flex-col items-center absolute z-20 rounded-lg bg-(--black-background)/90 shadow-lg p-4`}>
                            <div className="w-4 h-4 rotate-45 absolute -top-2 right-2 bg-(--black-background)/70" />
                            <div className="w-full border-b">
                                <Button
                                    onClick={() => {
                                        navigate("/create-movie", {
                                            state: { movie }
                                        })
                                    }}
                                    className="w-full flex items-center justify-between pb-2"
                                    type="button"
                                >
                                    <span>Edit</span>
                                    <Pencil className="size-3 sm:size-4" />
                                </Button>
                            </div>

                            <Button
                                onClick={() => openModal(movie.id)}
                                className="w-full flex items-center justify-between pt-2"
                                type="button"
                            >
                                <span>Hapus</span>
                                <Trash className="size-3 sm:size-4" />
                            </Button>
                        </div>
                    )}

                    {/* Card Landscape */}
                    {isLandscape &&
                        <figcaption className="absolute inset-x-0 bottom-0 bg-(--paper-background)/80 to-transparent p-4">

                            <div className="flex items-center justify-between gap-2">
                                <Heading6 element="h3">
                                    {movie.title}
                                </Heading6>

                                <div className="flex shrink-0 items-center gap-1">
                                    <Star className="size-3" />
                                    <BodySmallRegular element="span">
                                        {movie.rating}/5
                                    </BodySmallRegular>
                                </div>
                            </div>
                        </figcaption>
                    }
                </figure>
            </article>
        </li>
    )
}