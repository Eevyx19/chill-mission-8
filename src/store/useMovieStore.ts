import { create } from "zustand";
import type { ResponseMovie } from "../types/response-movie.types";
import { createMovie, deleteMovie, getMovies, updateMovie } from "../services/api/movies.service";

interface MovieStore {
    movies: ResponseMovie[];
    isFetching: boolean;
    error: string | null;
    fetchMovies: () => Promise<void>;
    addMovie: (payload: Omit<ResponseMovie, "id">) => Promise<void>;
    editMovie: (id: string, payload: Omit<ResponseMovie, "id">) => Promise<void>;
    removeMovie: (id: string) => Promise<void>;
}

export const useMovieStore = create<MovieStore>((set) => ({
    movies: [],
    isFetching: false,
    error: null,

    fetchMovies: async () => {
        set({ isFetching: true, error: null });
        try {
            const listMovies = await getMovies()
            set({ movies: listMovies })
        } catch (err) {
            set({ error: (err as Error).message })
        } finally {
            set({ isFetching: false })
        }
    },

    addMovie: async (payload: Omit<ResponseMovie, "id">) => {
        set({ error: null })
        try {
            const addedMovie = await createMovie(payload)
            set(state => ({
                movies: [...state.movies, addedMovie]
            }))

        } catch (err) {
            set({ error: (err as Error).message })
        }
    },

    editMovie: async (id: string, payload: Omit<ResponseMovie, "id">) => {
        set({ error: null })
        try {
            const edittedMovie = await updateMovie(id, payload)
            set(state => ({
                movies: state.movies.map(movie => movie.id === id ? edittedMovie : movie)
            }))
        } catch (err) {
            set({ error: (err as Error).message })
        }
    },

    removeMovie: async (id: string) => {
        set({ error: null })
        try {
            await deleteMovie(id)
            set(state => ({
                movies: state.movies.filter((item) => item.id !== id)
            }))

        } catch (err) {
            set({ error: (err as Error).message })
        }
    }

}))