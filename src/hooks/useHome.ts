import { useEffect, useState } from "react"
import type { ResponseMovie } from "../types/response-movie.types"
import { useNavigate, type NavigateFunction } from "react-router"
import { deleteMovie, getMovies } from "../services/api/movies.service"
import { useModalStore } from "../store/useModalStore"

export default function useHome() {
    const [movies, setMovies] = useState<ResponseMovie[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const navigate: NavigateFunction = useNavigate()

    const closeModal = useModalStore((state) => state.closeModal)

    
    //Fetching Movie API
    async function fetchingMovies() {
        try {
            setIsLoading(true)
            const data = await getMovies()
            
            setMovies(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }
    
    //Rendering Movies
    useEffect(() => {
        fetchingMovies()
    }, [])
    
    //Delete Movie
    const handleDeleteMovie = async (id: string) => {
        try {
            setIsLoading(true)
            await deleteMovie(id)

            await fetchingMovies()

            closeModal()
            
        } catch (error) {

        } finally {
            setIsLoading(false)
        }
    }

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

    return { movies, isLoading, navigate, handleDeleteMovie, countinueWatchingMovie, topRatingMovie, trendingMovie, newReleaseMovie }
}