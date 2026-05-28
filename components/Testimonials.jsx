const testimonials = [
  {
    text: "Tienes muchos valores que resaltan en tu personalidad!! Eres muy rápido en dar buenas soluciones, Trabajas siempre con una sonrisa, Te enamoras de lo que haces y lo más importante, eres una buena líder positiva.",
    author: "Tanta Undurraga",
  },
  {
    text: "Eres muy buena líder y te encanta llevar las riendas de todo eres muy detallista y te encanta ser perfeccionista. Eres muy entregada al trabajo y esa pasión de hacer lo que te gusta te ha llevado a lograr cosas súper importantes de ti destaco las ganas de hacer bien las cosas pase lo que pase",
    author: "Jesus Pérez",
  },
  {
    text: "Destaco tu proactividad y la buena disposición, siempre mucha energía para liderar los proyectos, además eres muy profesional y tienes los conocimientos para resolver.",
    author: "Yanixa Soto",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm relative">
              <div className="text-[#4a6fa5] text-4xl font-serif leading-none mb-2">"</div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{t.text}</p>
              <div className="text-[#4a6fa5] text-4xl font-serif leading-none text-right mb-3">"</div>
              <p className="text-sm font-semibold text-[#4a6fa5] text-center">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
