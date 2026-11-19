import Hero from "../component/Hero"
import Carousel from "../component/Carousel"
import useHome from "../hooks/useHome"
import DeleteMovieValidation from "../component/UI/modal/DeleteMovieValidation"

const HomePage = () => {

    const {
        movies,
        isFetching,
        isDeletting,
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
                isFetching={isFetching}
            />

            <Carousel
                title="Melanjutkan Tonton Film"
                variant="landscape"
                movies={countinueWatchingMovie}
                navigate={navigate}
                isFetching={isFetching}
            />

            <Carousel
                title="Top Rating Film dan Series Hari ini"
                variant="potrait"
                movies={topRatingMovie}
                navigate={navigate}
                isFetching={isFetching}
            />

            <Carousel
                title="Film Trending"
                variant="potrait"
                movies={trendingMovie}
                navigate={navigate}
                isFetching={isFetching}
            />

            <Carousel
                title="Rilis Baru"
                variant="potrait"
                movies={newReleaseMovie}
                navigate={navigate}
                isFetching={isFetching}
            />

            <DeleteMovieValidation
                handleDeleteMovie={handleDeleteMovie}
                isDeletting={isDeletting}
            />
        </>
    )
}

export default HomePage