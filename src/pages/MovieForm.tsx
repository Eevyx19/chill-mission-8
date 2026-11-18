import useMovieForm from "../hooks/useMovieForm"
import { useLocation } from "react-router"
import type { ResponseMovie } from "../types/response-movie.types"
import MovieInformationForm from "../component/movie-form/MovieInformationForm"
import MovieFormImage from "../component/movie-form/MovieImageForm"
import MovieLabelForm from "../component/movie-form/MovieLabelForm"
import MovieActionForm from "../component/movie-form/MovieActionForm"
import MovieHeaderForm from "../component/movie-form/MovieHeaderForm"


const MovieFormPage = () => {

    const location = useLocation()

    const movie = (
        location.state as { movie?: ResponseMovie } | null
    )?.movie ?? null

    const {
        navigate,
        isLoading,
        formMovies,
        genre,
        setGenre,
        selectedGenres,
        caster,
        setCaster,
        listsCaster,
        category,
        setCategory,
        selectedCategory,
        images,
        handleAddGenre,
        handleDeleteGenre,
        handleAddCast,
        handleDeleteCast,
        handleAddCategory,
        handleDeleteCategory,
        handleImageOnChange,
        handleOnChange,
        handleSubmit
    } = useMovieForm({ movie })


    return (
        <section className="w-full px-5 py-8 bg-(--paper-background) sm:px-10 md:px-15 md:py-12 lg:px-20">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 md:gap-8">

                <MovieHeaderForm
                    movie={movie}
                />

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-2xl border border-(--outline-border)  bg-(--container-box) shadow-2xl p-5 sm:p-7 md:gap-8 md:p-8">
                    <MovieInformationForm
                        formMovies={formMovies}
                        handleOnChange={handleOnChange}
                        genre={genre}
                        setGenre={setGenre}
                        selectedGenres={selectedGenres}
                        handleAddGenre={handleAddGenre}
                        handleDeleteGenre={handleDeleteGenre}

                        category={category}
                        setCategory={setCategory}
                        selectedCategory={selectedCategory}
                        handleAddCategory={handleAddCategory}
                        handleDeleteCategory={handleDeleteCategory}

                        listsCaster={listsCaster}
                        caster={caster}
                        setCaster={setCaster}
                        handleAddCast={handleAddCast}
                        handleDeleteCast={handleDeleteCast}

                    />

                    <MovieFormImage
                        images={images}
                        handleImageOnChange={handleImageOnChange}
                    />

                    <MovieLabelForm
                        formMovies={formMovies}
                        handleOnChange={handleOnChange}
                    />

                    <MovieActionForm
                        navigate={navigate}
                        movie={movie}
                        isLoading={isLoading}
                    />

                </form>
            </div>
        </section>
    )
}

export default MovieFormPage