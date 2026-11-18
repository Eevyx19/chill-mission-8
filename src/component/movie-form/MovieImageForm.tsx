import { ImagePlus } from "lucide-react"
import type { MovieImageFormProps } from "../../types/movie-form.types"
import FormInput from "../UI/form/FormInput"
import Input from "../UI/Input"

export default function MovieFormImage(props: MovieImageFormProps) {
    const { images, handleImageOnChange } = props
    return (
        <section className="flex flex-col gap-4 border-t border-(--outline-border) pt-6 md:gap-5 md:pt-8" aria-labelledby="movie-images-heading">
            <div className="flex items-center gap-2">
                <ImagePlus className="size-5 text-(--primary-default)" aria-hidden="true" />
                <h2 id="movie-images-heading" className="text-base font-semibold md:text-lg">
                    Gambar Film
                </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                <div className="w-full h-full flex flex-col gap-4 justify-center">
                    <FormInput
                        id="poster-image"
                        label="Poster Film"
                    >
                        <Input onChange={(event) => handleImageOnChange(event, "poster")} id="poster-image" type="file" accept="image/*" className="sr-only" />

                    </FormInput>
                    <div className="w-full h-80 border border-(--outline-border) rounded-lg p-4">
                        {
                            images.poster.preview ? (
                                <div className="w-full h-full flex items-center justify-center">
                                    <img src={images.poster.preview} className="w-40 h-full object-contain" />
                                </div>
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                    <span
                                        className="text-(--secondary-text) p-2 rounded-lg"
                                    >
                                        Pilih Gambar Poster...
                                    </span>
                                </div>
                            )
                        }
                    </div>
                    <label htmlFor="poster-image" className="flex flex-col items-center justify-end gap-2">
                        <span
                            className="w-40 text-center bg-(--primary-default) hover:bg-(--primary-300) hover:cursor-pointer p-2 rounded-lg"
                        >
                            Pilih File
                        </span>
                        <p className="text-sm text-gray-400 font-medium">Format: JPG, JPEG, PNG </p>
                    </label>

                </div>
                <div className="w-full h-full flex flex-col gap-4 justify-center">
                    <FormInput
                        id="backdrop-image"
                        label="Backdrop Film"
                    >
                        <Input onChange={(event) => handleImageOnChange(event, "backdrop")} id="backdrop-image" type="file" accept="image/*" className="sr-only" />

                    </FormInput>
                    <div className="w-full h-80 border border-(--outline-border) rounded-lg p-4">
                        {
                            images.backdrop.preview ? (
                                <div className="w-full h-full flex items-center justify-center">
                                    <img src={images.backdrop.preview} className="w-full h-full object-contain object-center" />
                                </div>
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                    <span
                                        className="text-(--secondary-text) p-2 rounded-lg"
                                    >
                                        Pilih Gambar Backdrop...
                                    </span>
                                </div>
                            )
                        }
                    </div>
                    <label htmlFor="backdrop-image" className="flex flex-col items-center justify-end gap-2">
                        <span
                            className="w-40 text-center bg-(--primary-default) hover:bg-(--primary-300) hover:cursor-pointer p-2 rounded-lg"
                        >
                            Pilih File
                        </span>
                        <p className="text-sm text-gray-400 font-medium">Format: JPG, JPEG, PNG </p>
                    </label>
                </div>
            </div>
        </section>
    )
}