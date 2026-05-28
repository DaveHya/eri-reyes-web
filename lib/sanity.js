import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  // 👇 Reemplaza con tus valores reales de sanity.io/manage
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

// Helper para URLs de imágenes
const builder = imageUrlBuilder(config);

export function urlFor(source) {
  return builder.image(source);
}
