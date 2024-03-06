import { IImage } from "@/app/lib/types";
import { getPlaiceholder } from "plaiceholder";

export default async function processImagesFromApi(): Promise<IImage[]> {
  try {
    // Hacer la llamada a la API para obtener el array de imágenes
    const res = await fetch(
      `https://api.unsplash.com/photos?client_id=${process.env.API_KEY}&per_page=15`
    );
    const imageDataArray: IImage[] = await res.json();

    // Verificar si la respuesta contiene datos de imágenes
    if (!Array.isArray(imageDataArray)) {
      throw new Error("La respuesta de la API no es un array de imágenes.");
    }

    // Iterar sobre cada objeto de imagen en el array
    for (const imageData of imageDataArray) {
      // Obtener la URL de la imagen desde el objeto de imagen de la API
      const imageUrl = imageData.urls.full;

      // Realizar la lógica para obtener el base64 de la imagen
      const buffer = await fetch(imageUrl).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
      );

      const { base64 } = await getPlaiceholder(buffer);

      // Colocar el resultado base64 en la propiedad blurhash64 del objeto de imagen
      imageData.blurhash64 = base64;
    }

    console.log(imageDataArray); // Mostrar los objetos de imagen con blurhash64
    return imageDataArray;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
