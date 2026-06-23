"use client";
import { useState, useEffect, useRef } from "react";

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

function TestimonialCard({ t }) {
  return (
    <div className="bg-white border border-gray-100 p-6 shadow-sm relative flex flex-col h-full">
      <div className="text-[#4a6ea58c] text-6xl font-serif leading-none mb-2">"</div>
      <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">{t.text}</p>
      <div className="text-[#4a6ea58c] text-6xl font-serif leading-none text-right mb-3">"</div>
      <p className="text-sm font-semibold text-[#4a6ea5a8] text-right">{t.author}</p>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    }, 4000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const prev = () => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
    resetTimer();
  };

  const next = () => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    resetTimer();
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Testimonios</h2>

        {/* Desktop — grid normal */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>

        {/* Mobile — slider con auto-avance */}
        <div className="md:hidden">
          <div className="relative">
            <TestimonialCard t={testimonials[current]} />

            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#4a6fa5] hover:text-[#4a6fa5] transition-colors"
                aria-label="Anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrent(i); resetTimer(); }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? "bg-[#4a6fa5]" : "bg-gray-300"
                    }`}
                    aria-label={`Ir al testimonio ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#4a6fa5] hover:text-[#4a6fa5] transition-colors"
                aria-label="Siguiente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
