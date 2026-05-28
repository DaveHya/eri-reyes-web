const services = [
  {
    title: "Planning Creativo/ Estratégico",
    desc: "Es la combinación perfecta entre creatividad y estrategia financiera: todo queda listo para ejecutar sin complicaciones.",
  },
  {
    title: "Full-Service Planning",
    desc: "Es la opción ideal para quienes quieren delegar la producción y disfrutar de una experiencia que funcione de principio a fin.",
  },
  {
    title: "Dirección Logística",
    desc: "Es la opción ideal para quienes quieren que todo funcione a la perfección sin preocuparse por lo que pasa detrás.",
  },
  {
    title: "Day-Of Coordinación",
    desc: "Mi objetivo es que todo fluya y que el cliente pueda disfrutar la experiencia con tranquilidad, desde el inicio hasta el cierre.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Servicios</h2>
        <p className="text-center text-gray-500 text-sm mb-10 max-w-xl mx-auto">
          Decide el servicio que se adapata a lo que necesitas: puede tomar la producción completa o una parte puntual, siempre con la certeza de un resultado cuidado
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow group cursor-pointer">
              <h3 className="font-bold text-gray-800 text-sm mb-3 leading-snug">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">{s.desc}</p>
              <button className="w-8 h-8 bg-[#4a6fa5] text-white rounded-full flex items-center justify-center hover:bg-[#3a5f95] transition-colors ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
