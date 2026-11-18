import type { MovieLabelFormProps } from "../../types/movie-form.types"

export default function MovieLabelForm(props: MovieLabelFormProps) {
    const { formMovies, handleOnChange } = props
    return (
        <section className="flex flex-col gap-3 border-t border-(--outline-border) pt-6 md:pt-8">
            <legend className="px-1 text-base font-semibold md:text-lg">Label Film</legend>
            <div className="grid gap-3 sm:grid-cols-3">
                <label className="flex items-center gap-3 rounded-xl border border-(--outline-border) bg-(--body-background) px-4 py-3 text-sm md:text-base">
                    <input className="size-4 accent-(--primary-default)" name="is_new_episode" type="checkbox" checked={formMovies.is_new_episode} onChange={handleOnChange} />
                    Episode baru
                </label>
                <label className="flex items-center gap-3 rounded-xl border border-(--outline-border) bg-(--body-background) px-4 py-3 text-sm md:text-base">
                    <input className="size-4 accent-(--primary-default)" name="is_top" type="checkbox" checked={formMovies.is_top} onChange={handleOnChange} />
                    Film unggulan
                </label>
                <label className="flex items-center gap-3 rounded-xl border border-(--outline-border) bg-(--body-background) px-4 py-3 text-sm md:text-base">
                    <input className="size-4 accent-(--primary-default)" name="is_favorite" type="checkbox" checked={formMovies.is_favorite} onChange={handleOnChange} />
                    Film favorit
                </label>
            </div>
        </section>
    )
}