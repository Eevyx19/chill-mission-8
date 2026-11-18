import { Film } from "lucide-react";
import Heading3 from "../UI/heading/Heading3";
import BodyMediumRegular from "../UI/body-medium/BodyMediumRegular";
import type { ResponseMovie } from "../../types/response-movie.types";

interface MovieHeaderProps {
    movie?: ResponseMovie | null
}

export default function MovieHeaderForm(props: MovieHeaderProps) {
    const { movie } = props
    return (
        <header className="flex items-start gap-3 md:gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-(--primary-default)/15 text-(--primary-default) md:size-12">
                <Film className="size-5 md:size-6" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1">
                <Heading3 element="h1">{movie ? "Edit Film" : "Buat Film Baru"}</Heading3>
                <BodyMediumRegular element="p" className="text-(--secondary-text)">
                    Lengkapi informasi film yang akan {movie ? "diedit" : "ditambahkan"}.
                </BodyMediumRegular>
            </div>
        </header>
    )
}