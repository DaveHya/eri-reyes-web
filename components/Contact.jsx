"use client";
import { useState, useEffect, useRef } from "react";
import CalendlyBtn from "../components/CalendlyBtn";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const emailjsRef = useRef(null);

  // Importa EmailJS solo en el cliente
  useEffect(() => {
    import("@emailjs/browser").then((mod) => {
      emailjsRef.current = mod.default;
    });
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Por favor completa todos los campos.");
      return;
    }

    if (!emailjsRef.current) {
      alert("Error al cargar el servicio de email. Intenta de nuevo.");
      return;
    }

    setStatus("loading");

    try {
      await emailjsRef.current.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus("error");
    }
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 max-w-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 leading-snug">
            ¿Tienes Dudas Sobre Tu Próximo Proyecto?
          </h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Hablemos. La forma más rápida de resolver tus preguntas y analizar la viabilidad de tu evento es agendando una breve sesión directa en mi calendario.
          </p>
          <CalendlyBtn
            label="Agendar una Reunión Aquí"
            className="bg-gray-800 text-white text-sm px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors font-medium mb-6"
          />
          <p className="text-xs text-gray-400 leading-relaxed">
            Si prefieres avanzar por escrito o dejarnos un requerimiento específico, también puedes usar nuestro formulario
          </p>
        </div>

        <div className="flex-1 w-full max-w-md">
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Nombre *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 text-sm outline-none focus:border-gray-600 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Email *</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="w-full border-b border-gray-300 py-2 text-sm outline-none focus:border-gray-600 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Mensaje *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full border-b border-gray-300 py-2 text-sm outline-none focus:border-gray-600 transition-colors resize-none"
              />
            </div>
            <div className="pt-2">
              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="w-full bg-gray-800 text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Enviando..." : "Enviar"}
              </button>
            </div>

            {status === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg">
                ✅ ¡Mensaje enviado! Me pondré en contacto contigo pronto.
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
                ❌ Hubo un error al enviar. Intenta de nuevo o escríbeme directamente.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}