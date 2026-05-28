import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/sanity";

export default function Projects({ projects }) {
  if (!projects?.length) return null;

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Proyectos destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project._id} className="group cursor-pointer">
              <div className="w-full h-52 rounded-xl overflow-hidden bg-gray-200 mb-3 relative">
                {project.mainImage ? (
                  <Image
                    src={urlFor(project.mainImage).width(800).height(416).url()}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    Sin imagen
                  </div>
                )}
              </div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-sm font-semibold text-gray-800 leading-snug">
                  {project.title}
                </h3>
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="flex-shrink-0 w-8 h-8 bg-[#4a6fa5] text-white rounded-full flex items-center justify-center hover:bg-[#3a5f95] transition-colors"
                  aria-label={`Ver proyecto: ${project.title}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/proyectos"
            className="border border-gray-400 text-gray-700 text-sm px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors font-medium inline-block"
          >
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
