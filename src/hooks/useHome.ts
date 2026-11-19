import { useEffect, useState } from "react"
import { useNavigate, type NavigateFunction } from "react-router"
import { useModalStore } from "../store/useModalStore"
import { useMovieStore } from "../store/useMovieStore"

export default function useHome() {
    const [isDeletting, setIsDeletting] = useState<boolean>(false)
    const navigate: NavigateFunction = useNavigate()

    const closeModal = useModalStore((state) => state.closeModal)
    const movies = useMovieStore((state) => state.movies)
    const isFetching = useMovieStore((state) => state.isFetching)
    const fetchingMovies = useMovieStore((state) => state.fetchMovies)
    const removeMovie = useMovieStore((state) => state.removeMovie)

    //Rendering Movies
    useEffect(() => {
        fetchingMovies()
    }, [])

    //Delete Movie
    const handleDeleteMovie = async (id: string) => {
        try {
            setIsDeletting(true)
            await removeMovie(id)

            await fetchingMovies()

            closeModal()

        } catch (error) {

        } finally {
            setIsDeletting(false)
        }
    }

    console.log(isDeletting)

    const countinueWatchingMovie = movies.filter(movie =>
        movie.movieCategory.includes("continue_watching")
    )

    const topRatingMovie = movies.filter(movie =>
        movie.movieCategory.includes("top_rating")
    )

    const trendingMovie = movies.filter(movie =>
        movie.movieCategory.includes("trending")
    )

    const newReleaseMovie = movies.filter(movie =>
        movie.movieCategory.includes("new_release")
    )

    return { movies, isFetching, isDeletting, navigate, handleDeleteMovie, countinueWatchingMovie, topRatingMovie, trendingMovie, newReleaseMovie }
}