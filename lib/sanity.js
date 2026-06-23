import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const config = {
  projectId: "1oywwpmj",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false, // ← cambia a false para siempre obtener datos frescos
};

export const sanityClient = createClient({
  ...config,
  token: process.env.SANITY_API_READ_TOKEN,
});


// Fix del warning de deprecación
const builder = createImageUrlBuilder(config);

export function urlFor(source) {
  return builder.image(source);
}