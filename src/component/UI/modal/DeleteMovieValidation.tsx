import { Trash } from "lucide-react";
import Modal from "../Modal";
import Button from "../Button";
import { useModalStore } from "../../../store/useModalStore";

interface DeleteMovieProps {
    handleDeleteMovie: (id: string) => Promise<void>;
    isDeletting: boolean;
}


export default function DeleteMovieValidation(props: DeleteMovieProps) {
    const { handleDeleteMovie, isDeletting } = props
    const { closeModal, movieId } = useModalStore()

    if (!movieId) return
    return (
        <Modal>
            <div className="w-full h-full flex flex-col justify-center rounded-xl bg-(--paper-background) p-5">
                <header className="flex items-center gap-2">
                    <Trash />
                    <h2 className="text-lg font-semibold">
                        Hapus Movie?
                    </h2>
                </header>

                <p className="my-4 text-sm">
                    Apakah kamu yakin ingin menghapus movie ini?
                </p>

                <div className="flex justify-between sm:justify-end gap-3">
                    <Button
                        onClick={closeModal}
                        className="w-full border border-(--outline) p-2"
                        type="button"
                    >
                        Batal
                    </Button>

                    <Button
                        onClick={() => handleDeleteMovie(movieId)}
                        className={`${isDeletting ? "bg-(--info-background)" : "bg-(--error-default) hover:bg-(--error-pressed)"} w-full p-2`}
                        type="button"
                    >
                        {isDeletting ? "Menghapus..." : "Ya, Hapus"}
                    </Button>
                </div>
            </div>
        </Modal>
    )
}