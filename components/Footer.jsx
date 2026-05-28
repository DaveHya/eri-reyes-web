export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-2xl font-bold text-gray-800" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Soy Erí Reyes
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500">
          <a href="mailto:contacto@experiences360.cl" className="flex items-center gap-1.5 hover:text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            contacto@experiences360.cl
          </a>
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Santiago - Chile
          </span>
          <a href="tel:+56972883438" className="flex items-center gap-1.5 hover:text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +56 9 7288 3438
          </a>
        </div>
      </div>
      <p className="text-center text-[10px] text-gray-400 mt-4">
        Creatividad aplicada con método. Experiencias diseñadas para ser vividas, sentidas y recordadas.
      </p>
    </footer>
  );
}
