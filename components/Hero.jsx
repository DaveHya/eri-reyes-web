import Image from "next/image";
import { urlFor } from "../lib/sanity";

export default function Hero({ settings }) {
  const {
    heroTagline,
    heroPhoto,
    ctaButtonLabel,
    ctaButtonUrl,
    portfolioUrl,
    stats = [],
  } = settings;

  return (
    <section className="bg-[#f9f6f0] min-h-[480px] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left: Text + Buttons */}
        <div className="flex-1 z-10">
          <p className="text-[11px] text-gray-500 tracking-wide mb-2">
            {heroTagline}
          </p>
          <h1
            className="text-[52px] md:text-[68px] font-bold leading-none mb-6"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            <span className="text-gray-800 text-[28px] md:text-[36px] font-normal">Soy</span>{" "}
            <span className="text-gray-800">Erí Reyes</span>
          </h1>
          <div className="flex gap-3 mt-4 flex-wrap">
            {ctaButtonUrl && (
              <a
                href={ctaButtonUrl}
                className="bg-gray-800 text-white text-sm px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors font-medium"
              >
                {ctaButtonLabel || "¡Hablemos!"}
              </a>
            )}
            {portfolioUrl && (
              <a
                href={portfolioUrl}
                download
                className="border border-gray-400 text-gray-700 text-sm px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 font-medium"
              >
                Download Portfolio
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Center: Photo */}
        <div className="relative flex-shrink-0 w-[260px] md:w-[320px]">
          {heroPhoto ? (
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src={urlFor(heroPhoto).width(640).url()}
                alt="Eri Reyes"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          ) : (
            <div className="w-full aspect-[3/4] rounded-2xl bg-[#e8e0d4]" />
          )}
        </div>

        {/* Right: Stats */}
        {/* {stats.length > 0 && (
          <div className="grid grid-cols-2 gap-4 z-10">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-[28px] md:text-[36px] font-bold text-gray-800 leading-none">
                  {s.value}
                </div>
                <div className="text-[10px] text-gray-500 mt-1 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </section>
  );
}
