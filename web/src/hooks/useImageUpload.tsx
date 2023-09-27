const IMAGE_MAX_SIZE = 2 * 1024 * 1024;
const ACCEPTED_TYPES = ["image/png", "image/jpg", "image/jpeg"];

type UploadImage = {
  image_url?: string;
  error?: string;
};

export const useImageUpload = (): [
  uploadImage: (image: File) => Promise<UploadImage>
] => {
  const uploadImage = async (image: File): Promise<UploadImage> => {
    if (image.size > IMAGE_MAX_SIZE) {
      return { error: "image is too big" };
    }

    if (!ACCEPTED_TYPES.find((type) => type === image.type)) {
      return { error: "incorrect type" };
    }

    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch("http://localhost:4000/api/image-upload", {
      method: "POST",
      body: formData,
    });

    if (!response) {
      throw new Error("could not fetch image-upload");
    }

    const { image_url } = await response.json();

    return { image_url };
  };

  return [uploadImage];
};
