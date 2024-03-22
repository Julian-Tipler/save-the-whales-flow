import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";

export const useFirebaseImage = (src: string) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImageUrl = async () => {
      const storage = getStorage();
      const imageRef = ref(storage, src);

      try {
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImageUrl();
  }, [src]);

  return imageUrl;
};
