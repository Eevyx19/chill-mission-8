import Hero from "../component/Hero"
import Carousel from "../component/Carousel"
import useHome from "../hooks/useHome"
import DeleteMovieValidation from "../component/UI/modal/DeleteMovieValidation"
const HomePage = () => {

    const {
        movies,
        isLoading,
        navigate,
        handleDeleteMovie,
        countinueWatchingMovie,
        topRatingMovie,
        trendingMovie,
        newReleaseMovie
    } = useHome()


    return (
        <>
            <Hero
                movie={movies[0]}
                isLoading={isLoading}
            />

            <Carousel
                title="Melanjutkan Tonton Film"
                variant="landscape"
                movies={countinueWatchingMovie}
                navigate={navigate}
                isLoading={isLoading}
            />

            <Carousel
                title="Top Rating Film dan Series Hari ini"
                variant="potrait"
                movies={topRatingMovie}
                navigate={navigate}
                isLoading={isLoading}
            />

            <Carousel
                title="Film Trending"
                variant="potrait"
                movies={trendingMovie}
                navigate={navigate}
                isLoading={isLoading}
            />

            <Carousel
                title="Rilis Baru"
                variant="potrait"
                movies={newReleaseMovie}
                navigate={navigate}
                isLoading={isLoading}
            />

            <DeleteMovieValidation
                handleDeleteMovie={handleDeleteMovie}
                isLoading={isLoading}
            />
        </>
    )
}

export default HomePage