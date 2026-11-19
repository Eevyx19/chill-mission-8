import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { uploadImage } from "../services/cloudinary.service"
import type { ResponseMovie } from "../types/response-movie.types"
import type { CategoryType, FormMovies, GenreType, ImagesForm, MovieProps } from "../types/movie-form.types"
import { categoryList, genreList } from "../component/data/MovieForm"
import { useMovieStore } from "../store/useMovieStore"


export default function useMovieForm({ movie }: MovieProps = {}) {

    const addMovie = useMovieStore((state) => state.addMovie)
    const editMovie = useMovieStore((state) => state.editMovie)

    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    //Form Information Movie
    const [formMovies, setFormMovies] = useState<FormMovies>({
        title: "",
        rating: "",
        age: "",
        description: "",
        film_maker: "",
        is_new_episode: false,
        is_top: false,
        is_favorite: false
    })

    //Genre Movie
    const [genre, setGenre] = useState("")
    const [selectedGenres, setSelectedGenres] = useState<GenreType[]>([])

    //Cast Movie
    const [caster, setCaster] = useState("")
    const [listsCaster, setListCaster] = useState<string[]>([])

    //Category Movie
    const [category, setCategory] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<CategoryType[]>([])

    //Images Movie
    const [images, setImages] = useState<ImagesForm>({
        poster: { file: null, preview: "" },
        backdrop: { file: null, preview: "" }
    })


    //Initialize form state with existing movie data when editing
    useEffect(() => {
        if (!movie) return;

        setFormMovies({
            title: movie.title,
            rating: movie.rating,
            age: movie.age,
            description: movie.description,
            film_maker: movie.film_maker,
            is_new_episode: movie.is_new_episode,
            is_top: movie.is_top,
            is_favorite: movie.is_favorite
        })

        setSelectedGenres(
            genreList.filter(item =>
                movie.genre.includes(item.value)
            )
        )

        setListCaster(movie.cast)

        setSelectedCategory(
            categoryList.filter(item =>
                movie.movieCategory.includes(item.value)
            )
        )

        setImages({
            poster: {
                file: null,
                preview: movie.poster_image
            },
            backdrop: {
                file: null,
                preview: movie.backdrop_image
            }
        })
    }, [movie])

    //Add Genre
    const handleAddGenre = () => {
        const selectGenre = genreList.find(item => item.value === genre)
        if (!selectGenre || selectedGenres.some(item => item.value === genre)) return

        setSelectedGenres(prev => [...prev, selectGenre])
        setGenre("")
    }
    //Delete Genre
    const handleDeleteGenre = (genreValue: string) => {
        setSelectedGenres(prev => prev.filter(item => item.value !== genreValue))
    }

    //Add Cast
    const handleAddCast = () => {
        if (!caster || listsCaster.includes(caster)) return

        setListCaster(prev => [...prev, caster])
        setCaster("")
    }

    //Delete Cast
    const handleDeleteCast = (castValue: string) => {
        setListCaster(prev => prev.filter(item => item !== castValue))
    }

    //Add Category
    const handleAddCategory = () => {
        const selectCategory = categoryList.find(item => item.value === category)
        if (!selectCategory || selectedCategory.some(item => item.value === category)) return

        setSelectedCategory(prev => [...prev, selectCategory])
        setCategory("")
    }

    //Delete Category
    const handleDeleteCategory = (categoryValue: string) => {
        setSelectedCategory(prev => prev.filter(item => item.value !== categoryValue))
    }

    //Change Image
    const handleImageOnChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        type: "poster" | "backdrop"
    ) => {
        const file = event.target.files?.[0]
        if (!file) return

        const previewUrl = URL.createObjectURL(file)
        setImages(prev => ({
            ...prev,
            [type]: { file, preview: previewUrl }
        }))
    }

    //Change Form
    const handleOnChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = event.target

        setFormMovies(prev => ({
            ...prev,
            [name]: type === "checkbox"
                ? (event.target as HTMLInputElement).checked
                : type === "number"
                    ? Number(value)
                    : value
        }))
    }

    //Submit Form
    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { poster, backdrop } = images
        if (!poster.preview || !backdrop.preview) {
            alert("Poster dan backdrop wajib dipilih!")
            return
        }

        if (
            formMovies.title.trim() === "" ||
            formMovies.description.trim() === "" ||
            formMovies.film_maker.trim() === "" ||
            formMovies.rating === "" ||
            formMovies.age === "" ||
            selectedGenres.length < 1 ||
            selectedCategory.length < 1
        ) {
            alert("Semua Form Wajib di isi")
            return
        }

        try {
            setIsSubmitting(true)
            const [posterUrl, backdropUrl] = await Promise.all([
                poster.file
                    ? uploadImage(poster.file, "poster")
                    : Promise.resolve(movie?.poster_image ?? ""),
                backdrop.file
                    ? uploadImage(backdrop.file, "backdrop")
                    : Promise.resolve(movie?.backdrop_image ?? "")
            ])

            const payload: Omit<ResponseMovie, "id"> = {
                title: formMovies.title,
                rating: Number(formMovies.rating),
                age: Number(formMovies.age),
                description: formMovies.description,
                genre: selectedGenres.map(item => item.value),
                cast: listsCaster,
                poster_image: posterUrl,
                backdrop_image: backdropUrl,
                film_maker: formMovies.film_maker,
                is_top: formMovies.is_top,
                is_new_episode: formMovies.is_new_episode,
                is_favorite: formMovies.is_favorite,
                movieCategory: selectedCategory.map(item => item.value)
            }

            if (movie) {
                await editMovie(movie.id, payload)
            } else {
                await addMovie(payload)
            }

            navigate("/")

        } catch (error) {
            console.error("Gagal membuat movie:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return {
        navigate,
        isSubmitting,
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
    }
}
