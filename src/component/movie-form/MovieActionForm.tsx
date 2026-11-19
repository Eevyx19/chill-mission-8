import type { ResponseMovie } from "../../types/response-movie.types";
import Button from "../UI/Button";
import type { NavigateFunction } from "react-router";

interface MovieActionProps {
    navigate: NavigateFunction;
    movie?: ResponseMovie | null;
    isSubmitting: boolean
}

export default function MovieActionForm(props: MovieActionProps) {
    const { navigate, movie, isSubmitting } = props
    return (
        <section className="flex flex-col-reverse gap-3 border-t border-(--outline-border) pt-6 sm:flex-row sm:justify-end md:pt-8">
            <Button
                onClick={() => navigate("/")}
                className="border border-(--outline-border) bg-transparent px-5 py-3 font-semibold text-(--primary-text) disabled:cursor-default sm:min-w-32"
                type="button"
            >
                Batal
            </Button>
            <Button
                className={`${isSubmitting ? "bg-(--info-background) cursor-not-allowed" : "bg-(--primary-default) text-(--primary-text)"} px-5 py-3 font-semibold sm:min-w-40`}
                type="submit"
            >
                {isSubmitting ? "Submitting..." : movie ? "Edit Movie" : "Buat Movie"}
            </Button>
        </section>

    )
}