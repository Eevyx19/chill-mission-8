import { Plus, X } from "lucide-react";
import { categoryList, genreList } from "../data/MovieForm";
import Button from "../UI/Button";
import FormInput from "../UI/form/FormInput";
import Input from "../UI/Input";
import BodySmallRegular from '../UI/body-small/BodySmallRegular';
import type { MovieInformationFormProps } from "../../types/movie-form.types";

export default function MovieInformationForm(props: MovieInformationFormProps) {
    const { formMovies, handleOnChange, genre, setGenre, selectedGenres, handleAddGenre, handleDeleteGenre, category, setCategory, selectedCategory, handleAddCategory, handleDeleteCategory, listsCaster, caster, setCaster, handleAddCast, handleDeleteCast } = props
    return (
        <section className="flex flex-col gap-4 md:gap-5" aria-labelledby="movie-information-heading">
            <h2 id="movie-information-heading" className="text-base font-semibold md:text-lg">
                Informasi Film
            </h2>
            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                <FormInput id="title" label="Judul Film">
                    <Input id="title" type="text" name="title" value={formMovies.title} onChange={handleOnChange} placeholder="Masukkan judul film" />
                </FormInput>
                <FormInput id="rating" label="Rating">
                    <Input id="rating" type="number" name="rating" value={formMovies.rating} onChange={handleOnChange} placeholder="Contoh: 4.5" min="1" max="5" />
                </FormInput>
                <FormInput id="age" label="Batas Usia">
                    <Input id="age" type="number" name="age" value={formMovies.age} onChange={handleOnChange} placeholder="Contoh: 13" min="0" />
                </FormInput>
                <div className="flex flex-col gap-3">
                    <FormInput id="genre" label="Genre">
                        <div className="flex gap-2">
                            <div className="relative w-full">
                                <select
                                    id="genre"
                                    value={genre}
                                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setGenre(event.target.value)}
                                    className="w-full appearance-none rounded-2xl border border-(--outline-border) bg-(--body-background) px-3 py-2 text-xs text-(--primary-text) outline-none transition-colors focus:border-(--primary-default) sm:text-base md:px-4 md:py-3 md:text-lg"
                                >
                                    <option value="">Pilih genre</option>
                                    {genreList.map((item) => (
                                        <option key={item.label} value={item.value}>{item.label}</option>
                                    ))}
                                </select>
                                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-(--secondary-text)" aria-hidden="true">
                                    ▾
                                </span>
                            </div>
                            <Button
                                className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-(--extra-background) px-4 text-sm font-semibold text-(--primary-text) disabled:cursor-default"
                                type="button"
                                aria-label="Tambah genre"
                                onClick={handleAddGenre}
                            >
                                <Plus className="size-4" aria-hidden="true" />
                                <span className="hidden sm:inline">Tambah</span>
                            </Button>
                        </div>
                        <div className="flex items-center gap-2 p-2 flex-wrap">
                            {selectedGenres.map(genre => (
                                <BodySmallRegular
                                    key={genre.value}
                                    element="div"
                                    className="relative bg-(--info-background) flex items-center p-2 rounded-ss-2xl"
                                >
                                    {genre.label}
                                    <Button
                                        onClick={() => handleDeleteGenre(genre.value)}
                                        className="absolute -top-1 -left-1 text-(--error-pressed)"
                                        type="button"
                                    >
                                        <X className="size-4" />
                                    </Button>
                                </BodySmallRegular>
                            ))}
                        </div>
                    </FormInput>
                </div>
            </div>
            <FormInput id="description" label="Deskripsi">
                <textarea
                    id="description"
                    name="description"
                    value={formMovies.description}
                    onChange={handleOnChange}
                    rows={5}
                    placeholder="Tuliskan deskripsi singkat film"
                    className="w-full resize-y rounded-2xl border border-(--outline-border) bg-(--body-background) px-3 py-2 text-xs text-(--primary-text) placeholder:text-(--secondary-text) sm:text-base md:px-4 md:py-3 md:text-lg"
                />
            </FormInput>
            <FormInput id="category" label="Kategori">
                <div className="flex gap-2">
                    <div className="relative w-full">
                        <select
                            id="category"
                            value={category}
                            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setCategory(event.target.value)}
                            className="w-full appearance-none rounded-2xl border border-(--outline-border) bg-(--body-background) px-3 py-2 text-xs text-(--primary-text) outline-none transition-colors focus:border-(--primary-default) sm:text-base md:px-4 md:py-3 md:text-lg"
                        >
                            <option value="">Pilih Kategori</option>
                            {categoryList.map(item => (
                                <option key={item.value} value={item.value}>{item.label}</option>
                            ))}
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-(--secondary-text)" aria-hidden="true">
                            ▾
                        </span>
                    </div>
                    <Button
                        className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-(--extra-background) px-4 text-sm font-semibold text-(--primary-text) disabled:cursor-default"
                        type="button"
                        aria-label="Tambah genre"
                        onClick={handleAddCategory}
                    >
                        <Plus className="size-4" aria-hidden="true" />
                        <span className="hidden sm:inline">Tambah</span>
                    </Button>
                </div>
                <div className="flex items-center gap-2 p-2 flex-wrap">
                    {selectedCategory.map(category => (
                        <BodySmallRegular
                            key={category.value}
                            element="div"
                            className="relative bg-(--info-background) flex items-center p-2 rounded-ss-2xl"
                        >
                            {category.label}
                            <Button
                                onClick={() => handleDeleteCategory(category.value)}
                                className="absolute -top-1 -left-1 text-(--error-pressed)"
                                type="button"
                            >
                                <X className="size-4" />
                            </Button>
                        </BodySmallRegular>
                    ))}
                </div>
            </FormInput>
            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                <FormInput id="cast" label="Pemeran (Cast)">
                    <div className="flex gap-2">
                        <Input id="cast" type="text" value={caster} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCaster(event.target.value)} placeholder="Masukkan nama pemeran" />
                        <Button
                            onClick={handleAddCast}
                            className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-(--extra-background) px-4 text-sm font-semibold text-(--primary-text) disabled:cursor-default"
                            type="button"
                            aria-label="Tambah Pemeran (Cast)"
                        >
                            <Plus className="size-4" aria-hidden="true" />
                            <span className="hidden sm:inline">Tambah</span>
                        </Button>
                    </div>
                    <div className="flex items-center gap-2 p-2 flex-wrap">
                        {listsCaster.map(cast => (
                            <BodySmallRegular
                                key={cast}
                                element="div"
                                className="relative bg-(--info-background) flex items-center p-2 rounded-ss-2xl"
                            >
                                {cast}
                                <Button
                                    onClick={() => handleDeleteCast(cast)}
                                    className="absolute -top-1 -left-1 text-(--error-pressed)"
                                    type="button"
                                >
                                    <X className="size-4" />
                                </Button>
                            </BodySmallRegular>
                        ))}
                    </div>
                </FormInput>
                <FormInput id="film_maker" label="Pembuat Film (Film Maker)">
                    <div className="flex gap-2">
                        <Input id="film_maker" name="film_maker" value={formMovies.film_maker} onChange={handleOnChange} type="text" placeholder="Masukkan pembuat film" />
                    </div>
                </FormInput>
            </div>
        </section>
    )
}