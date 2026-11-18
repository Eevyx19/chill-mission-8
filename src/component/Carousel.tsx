import { ArrowLeft, ArrowRight, } from "lucide-react";
import Button from "./UI/Button";
import Heading3 from "./UI/heading/Heading3";
import MovieCard from "./MovieCard";
import MoviePreview from "./MoviePreview";
import type { ResponseMovie } from "../types/response-movie.types";
import useCarousel from "../hooks/useCarousel";
import { Plus } from "@filled-lucide/react";
import type { NavigateFunction } from "react-router";
import SkeletonCardLoader from "./UI/loading/SkeletonCardLoader";

interface CarouselProps {
    title: string;
    movies: ResponseMovie[];
    variant: "landscape" | "potrait";
    navigate: NavigateFunction;
    isLoading: boolean;
}

export default function Carousel(props: CarouselProps) {
    const { preview, clearTimer, handleMouseHover, handleMouseLeave, cancelPreview } = useCarousel()


    const { title, movies, variant, navigate, isLoading } = props

    return (
        <section className="relative px-5 md:px-10 lg:px-20 py-5 md:py-7.5 lg:py-10 flex flex-col gap-5 md:gap-7 lg:gap-8">
            <header className="flex flex-col sm:flex-row md:items-center justify-between gap-2 md:gap-0">
                <Heading3 element="h2">
                    {title}
                </Heading3>
                {variant === "landscape" && (
                    <Button
                        onClick={() => navigate("/create-movie")}
                        className="w-35 flex items-center justify-center gap-2 bg-(--primary-default) hover:bg-(--primary-300) p-2 lg:p-4"
                        type="button"
                    >
                        <Plus className="size-4 md:size-5 lg:size-6" />
                        <span>Tambah</span>
                    </Button>
                )}
            </header>
            {isLoading ? (
                <SkeletonCardLoader
                    cards={6}
                    variant={variant}
                />
            ) : movies.length > 0 ?
                (
                    <div className="relative">
                        <Button
                            className="absolute hidden md:block -left-5.5 top-[40%] z-10 border border-(--outline-border) bg-(--body-background) p-2 lg:p-2.5"
                            type="button"
                        >
                            <ArrowLeft className="size-4 lg:size-6" />
                        </Button>
                        <Button
                            className="absolute hidden md:block -right-5.5 top-[40%] z-10 border border-(--outline-border) bg-(--body-background) p-2 lg:p-2.5"
                            type="button"
                        >
                            <ArrowRight className="size-4 lg:size-6" />
                        </Button>
                        <ul className="flex gap-4 md:gap-5 lg:gap-6 overflow-x-scroll scrollbar-none">
                            {movies.map((data) => (
                                <MovieCard
                                    key={data.id}
                                    handleMouseHover={handleMouseHover}
                                    handleMouseLeave={handleMouseLeave}
                                    cancelPreview={cancelPreview}
                                    movie={data}
                                    variant={variant}
                                    navigate={navigate}
                                />
                            ))}

                        </ul>
                    </div>
                ) : (
                    <div className={`${variant === "landscape" ? "h-38 lg:h-40" : "h-40 sm:h-56 md:h-76 lg:h-91"} w-full flex items-center justify-center border border-(--outline-border) rounded-2xl`}>
                        <span className="text-center">Daftar Movie Tidak Ada</span>
                    </div>
                )
            }
            {preview && (
                <MoviePreview
                    key={preview.movie.id}
                    movie={preview.movie}
                    rect={preview.rect}
                    variant={variant}
                    onMouseEnter={() => clearTimeout(clearTimer.current ?? undefined)}
                    onMouseLeave={handleMouseLeave}
                />
            )}
        </section>
    )
}