import { create } from "zustand"

interface ModalStore {
    isOpen: boolean;
    movieId: string | null;
    openModal: (id: string) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    isOpen: false,
    movieId: null,
    openModal: (id) => {
        set({
            isOpen: true,
            movieId: id
        })
    },
    closeModal: () => {
        set({ isOpen: false })
    }

}))