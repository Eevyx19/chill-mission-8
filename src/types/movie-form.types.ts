import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { ResponseMovie } from "./response-movie.types";

export interface GenreType {
    label: string;
    value: string;
}

export interface CategoryType {
    label: string;
    value: string;
}

export interface ImagesForm {
    poster: {
        file: File | null;
        preview: string
    }
    backdrop: {
        file: File | null;
        preview: string
    }
}

export interface FormMovies {
    title: string;
    rating: number | "";
    age: number | "";
    description: string;
    film_maker: string;
    is_new_episode: boolean;
    is_top: boolean;
    is_favorite: boolean;
}

export interface MovieProps {
    movie?: ResponseMovie | null;
}

export interface MovieInformationFormProps {
    //Form Movies
    formMovies: FormMovies;
    handleOnChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

    //Genre Movies
    genre: string;
    setGenre: Dispatch<SetStateAction<string>>;
    handleAddGenre: () => void;
    selectedGenres: GenreType[];
    handleDeleteGenre: (genreValue: string) => void;

    //Category Movies
    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
    selectedCategory: CategoryType[];
    handleAddCategory: () => void;
    handleDeleteCategory: (categoryValue: string) => void;
    
    //Caster Movies
    listsCaster: string[];
    caster: string;
    setCaster: Dispatch<SetStateAction<string>>;
    handleAddCast: () => void;
    handleDeleteCast: (cast: string) => void;
}

export interface MovieImageFormProps {
    images: ImagesForm;
    handleImageOnChange: ( event: ChangeEvent<HTMLInputElement>, type: "poster" | "backdrop" ) => void;
}

export interface MovieLabelFormProps {
    formMovies: FormMovies;
    handleOnChange: React.ChangeEventHandler
}