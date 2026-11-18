export interface ResponseMovie {
    id: string,
    title: string,
    description: string,
    rating: number,
    age: number,
    backdrop_image: string,
    poster_image: string,
    is_new_episode: boolean,
    is_top: boolean,
    is_favorite: boolean,
    genre: string[],
    cast: string[],
    film_maker: string,
    movieCategory: string[]
}

export interface MoviePreviewState {
    movie: ResponseMovie;
    rect: DOMRect
}