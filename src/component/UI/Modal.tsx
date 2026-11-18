import { useModalStore } from "../../store/useModalStore"
import type { ReactNode } from "react";
import Button from "./Button";
import { X } from "@filled-lucide/react";

interface ModalProps {
    children: ReactNode;
}

export default function Modal(props: ModalProps) {
    const { children } = props
    const isOpen = useModalStore((state) => state.isOpen)
    const closeModal = useModalStore((state) => state.closeModal)

    if (!isOpen) return null;

    return (
        <div className="fixed flex justify-center items-center inset-0 z-50 bg-(--body-background)/90">
            <div className="relative bg-(--page-background) w-150 max-w-[90%] h-50 max-h-[90%] rounded-2xl p-2">
                <Button
                    onClick={closeModal}
                    className="absolute top-1 right-1 bg-(--extra-background) p-2"
                    type="button"
                >
                    <X className="size-4"/>
                </Button>
                {children}
            </div>
        </div>
    )
}