import Image from "next/image";
import { urlFor } from "../lib/sanity";

export default function Clients({ settings, clients }) {
  return (
    <section className="bg-white py-10 border-y border-gray-100">
      {settings?.centralPhrase && (
        <p className="text-center text-gray-600 text-sm mb-8 px-4">
          {settings.centralPhrase}
        </p>
      )}
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-10">
        {clients.map((client) =>
          client.logo ? (
            <a
              key={client._id}
              href={client.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
              aria-label={client.name}
            >
              <Image
                src={urlFor(client.logo).height(48).url()}
                alt={client.name}
                width={120}
                height={48}
                className="object-contain h-10 w-auto"
              />
            </a>
          ) : (
            <span key={client._id} className="text-gray-600 font-bold text-lg tracking-tight opacity-70">
              {client.name}
            </span>
          )
        )}
      </div>
    </section>
  );
}
