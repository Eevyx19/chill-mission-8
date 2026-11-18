import type { CategoryType, GenreType } from "../../types/movie-form.types"

export const genreList: GenreType[] = [
    { label: "Aksi", value: "action" },
    { label: "Anak-anak", value: "kids" },
    { label: "Britania", value: "britania" },
    { label: "Drama", value: "drama" },
    { label: "Fantasi & Ilmiah", value: "fantasy" },
    { label: "Kejahatan", value: "crime" },
    { label: "KDrama", value: "kdrama" },
    { label: "Komedi", value: "comedy" },
    { label: "Petualangan", value: "adventure" },
    { label: "Perang", value: "war" },
    { label: "Romantis", value: "romantic" },
    { label: "Sains & Alam", value: "sains" },
    { label: "Thriller", value: "thriller" }
]

export const categoryList: CategoryType[] = [
    { label: "Top Rating", value: "top_rating" },
    { label: "Lanjut Menonton", value: "continue_watching" },
    { label: "Trending", value: "trending" },
    { label: " Rilis Baru", value: "new_release" }
]