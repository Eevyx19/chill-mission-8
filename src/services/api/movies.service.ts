import type { ResponseMovie } from "../../types/response-movie.types";
import api from "./axios";

//Create Movie API
export const createMovie = async(payload: Omit<ResponseMovie, "id">) => {
    const response = await api.post<ResponseMovie>(
        "/movies",
        payload
    )

    return response.data
}

//Update Movie API
export const updateMovie = async(id: string, payload: Omit<ResponseMovie, "id">) => {
    const response = await api.put<ResponseMovie>(
        `/movies/${id}`,
        payload
    )
    return response.data
}

//Delete Movie API
export const deleteMovie = async(id: string) => {
    const response = await api.delete<ResponseMovie>(
        `/movies/${id}`
    )

    return response.data
}

//Get List Movies API
export const getMovies = async() => {
    const response = await api.get<ResponseMovie[]>("/movies")

    return response.data
}
