// app/proyectos/[slug]/page.jsx
import { sanityClient, urlFor } from "../lib/sanity";
import { PROJECT_BY_SLUG_QUERY, PROJECT_SLUGS_QUERY } from "@/queries";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export const revalidate = 60;

// Pre-genera todas las páginas de proyectos en build time
export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(PROJECT_SLUGS_QUERY);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const project = await sanityClient.fetch(PROJECT_BY_SLUG_QUERY, { slug: params.slug });
  if (!project) return {};
  return {
    title: `${project.title} — Eri Reyes`,
    description: project.summary,
    openGraph: project.mainImage
      ? { images: [urlFor(project.mainImage).width(1200).url()] }
      : undefined,
  };
}

export default async function ProjectPage({ params }) {
  const project = await sanityClient.fetch(PROJECT_BY_SLUG_QUERY, {
    slug: params.slug,
  });

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Back */}
      <div className="max-w-5xl mx-auto px-6 pt-8">
        <Link href="/#proyectos" className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
          ← Volver a proyectos
        </Link>
      </div>

      {/* Hero image */}
      {project.mainImage && (
        <div className="max-w-5xl mx-auto px-6 mt-6">
          <div className="w-full aspect-[16/7] rounded-2xl overflow-hidden relative">
            <Image
              src={urlFor(project.mainImage).width(1200).url()}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{project.title}</h1>

        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
          {project.client && <span>🏢 {project.client}</span>}
          {project.location && <span>📍 {project.location}</span>}
          {project.date && (
            <span>
              📅{" "}
              {new Date(project.date).toLocaleDateString("es-CL", {
                month: "long",
                year: "numeric",
              })}
            </span>
          )}
        </div>

        {/* Tags */}
        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        {project.description && (
          <div className="prose prose-gray max-w-none">
            <PortableText value={project.description} />
          </div>
        )}

        {/* Gallery */}
        {project.gallery?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Galería</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] relative">
                  <Image
                    src={urlFor(img).width(800).url()}
                    alt={img.caption || `Imagen ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                  {img.caption && (
                    <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
