"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Mensaje enviado!");
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left */}
        <div className="flex-1 max-w-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 leading-snug">
            ¿Tienes Dudas Sobre Tu Próximo Proyecto?
          </h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Hablemos. La forma más rápida de resolver tus preguntas y analizar la viabilidad de tu evento es agendando una breve sesión directa en mi calendario.
          </p>
          <button className="bg-gray-800 text-white text-sm px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors font-medium mb-6">
            Agendar una Reunión Aquí
          </button>
          <p className="text-xs text-gray-400 leading-relaxed">
            Si prefieres avanzar por escrito o dejarnos un requerimiento específico, también puedes usar nuestro formulario
          </p>
        </div>

        {/* Right: Form */}
        <div className="flex-1 w-full max-w-md">
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Nombre *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 text-sm outline-none focus:border-gray-600 transition-colors"
                placeholder=""
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 text-sm outline-none focus:border-gray-600 transition-colors"
                placeholder=""
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Mensaje</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full border-b border-gray-300 py-2 text-sm outline-none focus:border-gray-600 transition-colors resize-none"
                placeholder=""
              />
            </div>
            <div className="pt-2">
              <button
                onClick={handleSubmit}
                className="w-full bg-gray-800 text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
