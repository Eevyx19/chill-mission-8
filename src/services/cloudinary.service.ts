const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

interface CloudinaryResponse {
    secure_url: string;
}


export const uploadImage = async (file: File, folder: "poster" | "backdrop"): Promise<string> => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("asset_folder", folder);

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
            method: "POST",
            body: formData,
        }
    );

    if (!response.ok) {
        throw new Error("Gagal mengupload gambar");
    }

    const data: CloudinaryResponse = await response.json();


    return data.secure_url;
};
