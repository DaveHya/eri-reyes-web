import CalendlyBtn from "./CalendlyBtn";

export default function CTABanner() {
  return (
    <section
      className="relative py-20 px-6 text-white text-center"
      style={{
        backgroundImage: "url('/images/bg-reserva.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
          Co-creemos el próximo hito de tu marca.
        </h2>
        <p className="text-sm text-gray-200 mb-8">
          Reserva un espacio en mi agenda para que revisemos los objetivos de tu evento y tracemos la ruta técnica para hacerlo realidad.
        </p>
        <CalendlyBtn
          label="Reservar un Espacio"
          className="border border-white  px-7 py-3 rounded-full text-sm bg-white text-gray-800 transition-colors font-medium"
        />
      </div>
    </section>
  );
}
