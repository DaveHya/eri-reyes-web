"use client";
import { useState } from "react";

const services = [
  {
    title: "Planning Creativo/ Estratégico",
    desc: "Es la combinación perfecta entre creatividad y estrategia financiera: todo queda listo para ejecutar sin complicaciones.",
    planes: [
      {
        nombre: "Box & Seeding Planning",
        descripcion: "Desarrollo creativo de experiencias enviables para marcas y campañas.",
        ideal: "PR boxes, influencer seeding, gifting corporativo y lanzamientos de producto.",
        precio: "$350.000",
        incluye: ["Concepto creativo del box","Dirección visual","Desarrollo de experiencia de unboxing","Propuesta de elementos y packaging","Referencias visuales","Estrategia de interacción","Guía presupuestaria"],
      },
      {
        nombre: "Event Planning",
        descripcion: "Diseño estratégico y conceptual para eventos corporativos y experiencias en vivo.",
        ideal: "Lanzamientos, Premiaciones, networking, wellness days, inauguraciones, kick off y summits.",
        precio: "$450.000",
        incluye: ["Concepto creativo","Storytelling del evento","Diseño de experiencia","Propuesta de ambientación","Estructura de momentos clave","Referencias visuales","Guía presupuestaria","Sugerencia venue"],
      },
      {
        nombre: "Brand Experience Planning",
        descripcion: "Desarrollo creativo y estratégico de experiencias de marca presenciales.",
        ideal: "Pop-ups, activaciones BTL, experiencias retail y campañas experienciales.",
        precio: "$550.000",
        incluye: ["Concepto creativo","Moodboard y lineamiento visual","Desarrollo de activaciones","Propuesta de experiencia de marca","Referencias visuales","Guía presupuestaria","Eventos en los que pueden entrar como marca","Sugerencias de venue"],
      },
      {
        nombre: "Branding Planning",
        descripcion: "Estructuración conceptual y mapa de ruta para la visibilidad estratégica de la marca.",
        ideal: "Marcas en etapa de expansión, rediseño de estrategia de comunicación.",
        precio: "$750.000",
        incluye: ["Manual de lineamientos creativos para experiencias de marca","Estrategia de entornos y puntos de contacto publicitarios clave","Análisis y auditoría de eventos de afinidad para patrocinio o presencia","Estrategia para activaciones y lanzamientos propios","Dossier de referencias estéticas y visuales para campañas","Planificación presupuestaria global para la toma de decisiones","Directrices de interacción para medios tradicionales y plataformas digitales","Recomendación técnica de locaciones y locaciones de impacto"],
      },
    ],
  },
  {
    title: "Full-Service Planning",
    desc: "Es la opción ideal para quienes quieren delegar la producción y disfrutar de una experiencia que funcione de principio a fin.",
    specs: [
      { label: "Proveedores", gold: "Hasta 5 proveedores", platinum: "Hasta 10 proveedores", diamond: "+10 proveedores" },
      { label: "Público asistente", gold: "Hasta 50 personas", platinum: "Hasta 150 personas", diamond: "+150 personas" },
      { label: "Tiempo desarrollo proyecto", gold: "hasta 4 Semanas", platinum: "hasta 6 Semanas", diamond: "hasta 8 Semanas" },
      { label: "Reuniones de seguimiento", gold: "hasta 4 reuniones", platinum: "hasta 8 reuniones", diamond: "hasta 10 reuniones" },
      { label: "Visita técnica", gold: "1 visita técnica", platinum: "hasta 2 visitas técnica", diamond: "hasta 3 visitas técnica" },
    ],
    precios: { gold: "$790.000", platinum: "$990.000", diamond: "$1.190.000" },
    incluye: {
      gold: ["Desarrollo creativo concepto.","Moodboard visual","Armado del presupuesto general.","Cronograma completo del proyecto.","Coordinación integral de todos los proveedores.","Dirección de equipos de trabajo","Supervisión de montaje y desmontaje mismo día.","Coordinación de logística general.","Coordinación integral el día del evento (minuto a minuto).","Resolución de imprevistos en tiempo real."],
      platinum: ["Desarrollo creativo y estratégico del concepto.","Moodboard visual y propuesta de estilo.","Armado del presupuesto general.","Cronograma completo del proyecto.","Coordinación integral de todos los proveedores.","Dirección de equipos de trabajo","Supervisión de montaje desde día anterior y desmontaje.","Coordinación de logística general.","Coordinación integral el día del evento (minuto a minuto).","Resolución de imprevistos en tiempo real."],
      diamond: ["Desarrollo creativo y estratégico del concepto.","Moodboard visual y propuesta de estilo.","Armado del presupuesto general.","Cronograma completo del proyecto.","Coordinación integral de todos los proveedores.","Dirección de equipos de trabajo","Supervisión de montaje desde día anterior y desmontaje.","Coordinación de logística general.","Coordinación integral el día del evento (minuto a minuto).","Resolución de imprevistos en tiempo real."],
    },
  },
  {
    title: "Dirección Logística",
    desc: "Es la opción ideal para quienes quieren que todo funcione a la perfección sin preocuparse por lo que pasa detrás.",
    specs: [
      { label: "Proveedores", gold: "Hasta 5 proveedores", platinum: "Hasta 10 proveedores", diamond: "+10 proveedores" },
      { label: "Público asistente", gold: "Hasta 50 personas", platinum: "Hasta 150 personas", diamond: "+150 personas" },
      { label: "Tiempo desarrollo proyecto", gold: "hasta 2 Semana", platinum: "hasta 4 Semanas", diamond: "hasta 6 semanas" },
      { label: "Reuniones de seguimiento", gold: "hasta 2 reuniones", platinum: "hasta 4 reuniones", diamond: "hasta 6 reuniones" },
      { label: "Visita técnica", gold: "1 visita técnica", platinum: "hasta 2 visitas técnica", diamond: "hasta 3 visitas técnica" },
    ],
    precios: { gold: "$490.000", platinum: "$690.000", diamond: "$890.000" },
    incluye: {
      gold: ["Reunión de traspaso con contratos, proveedores y cronograma inicial.","Revisión detallada de acuerdos, requerimientos y compromisos con cada proveedor.","Armado del plan logístico general","Coordinación de accesos, traslados y requerimientos técnicos.","Supervisión del montaje completo antes del evento.","Coordinación integral del evento","Resolución de imprevistos Day of","Supervisión del desmontaje."],
      platinum: ["Reunión de traspaso con contratos, proveedores y cronograma inicial.","Revisión detallada de acuerdos, requerimientos y compromisos con cada proveedor.","Armado del plan logístico general","Coordinación de accesos, traslados y requerimientos técnicos.","Supervisión del montaje completo antes del evento.","Coordinación integral del evento","Resolución de imprevistos Day of","Supervisión del desmontaje."],
      diamond: ["Reunión de traspaso con contratos, proveedores y cronograma inicial.","Revisión detallada de acuerdos, requerimientos y compromisos con cada proveedor.","Armado del plan logístico general","Coordinación de accesos, traslados y requerimientos técnicos.","Supervisión del montaje completo antes del evento.","Coordinación integral del evento","Resolución de imprevistos Day of","Supervisión del desmontaje."],
    },
  },
  {
    title: "Day-Of Coordinación",
    desc: "Mi objetivo es que todo fluya y que el cliente pueda disfrutar la experiencia con tranquilidad, desde el inicio hasta el cierre.",
    specs: [
      { label: "Proveedores", gold: "Hasta 5 proveedores", platinum: "Hasta 10 proveedores", diamond: "+10 proveedores" },
      { label: "Público asistente", gold: "Hasta 50 personas", platinum: "Hasta 150 personas", diamond: "+150 personas" },
      { label: "Tiempo desarrollo proyecto", gold: "1 reunión previa + el día del evento.", platinum: "hasta 2 reuniones + el día del evento.", diamond: "hasta 3 reuniones + el día del evento" },
    ],
    precios: { gold: "$390.000", platinum: "$490.000", diamond: "$690.000" },
    incluye: {
      gold: ["Reunión previa de alineación con cliente.","Confirmación final de tiempos y entregas.","Coordinación de llegada y montaje de proveedores y patrocinadores.","Supervisión de montaje.","Resolución de imprevistos durante el evento.","Supervisión del evento minuto a minuto.","Coordinación de cierre y desmontaje inmediato.","Resolución de imprevistos y coordinación de desmontaje."],
      platinum: ["Reunión previa de alineación con cliente.","Confirmación final de tiempos y entregas.","Coordinación de llegada y montaje de proveedores y patrocinadores.","Supervisión de montaje.","Resolución de imprevistos durante el evento.","Supervisión del evento minuto a minuto.","Coordinación de cierre y desmontaje inmediato.","Resolución de imprevistos y coordinación de desmontaje."],
      diamond: ["Reunión previa de alineación con cliente.","Confirmación final de tiempos y entregas.","Coordinación de llegada y montaje de proveedores y patrocinadores.","Supervisión de montaje.","Resolución de imprevistos durante el evento.","Supervisión del evento minuto a minuto.","Coordinación de cierre y desmontaje inmediato.","Resolución de imprevistos y coordinación de desmontaje."],
    },
  },
];

function CloseButton({ onClose }) {
  return (
    <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
}

// ── Modal Planning Creativo — cards apiladas en mobile, grid en desktop ──
function ModalPlanesCreativo({ service, onClose }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} onClick={onClose}>
      <div
        className="bg-white w-full md:rounded-2xl md:max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl rounded-t-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#2F4257] text-white px-6 py-5 flex items-center justify-between sticky top-0 z-10 rounded-t-2xl md:rounded-t-2xl">
          <h3 className="text-base md:text-xl font-bold">Planes — {service.title}</h3>
          <CloseButton onClose={onClose} />
        </div>

        {/* Mobile: acordeón */}
        <div className="md:hidden divide-y divide-gray-100">
          {service.planes.map((plan, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div>
                  <p className="font-bold text-[#2F4257] text-sm">{plan.nombre}</p>
                  <p className="text-[#4a6fa5] font-bold text-sm mt-0.5">{plan.precio}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 text-gray-400 transition-transform ${open === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600">{plan.descripcion}</div>
                  <p className="text-xs text-gray-500"><span className="font-semibold text-[#2F4257]">Ideal para:</span> {plan.ideal}</p>
                  <div className="bg-[#2F4257] text-white text-center text-lg font-bold py-2.5 rounded-lg">{plan.precio}</div>
                  <p className="text-xs font-bold text-[#2F4257]">¿Qué incluye?</p>
                  <ul className="space-y-1.5">
                    {plan.incluye.map((item, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-xs text-gray-600">
                        <span className="text-[#4a6fa5] flex-shrink-0">•</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: grid 4 columnas */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {service.planes.map((plan, i) => (
            <div key={i} className="p-6 flex flex-col">
              <h4 className="font-bold text-[#2F4257] text-sm text-center uppercase tracking-wide mb-3 min-h-[40px] flex items-center justify-center">{plan.nombre}</h4>
              <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600 text-center mb-3 font-medium min-h-[60px] flex items-center justify-center">{plan.descripcion}</div>
              <div className="text-xs text-gray-500 text-center mb-4 min-h-[50px]"><span className="font-semibold text-[#2F4257]">Ideal para:</span> {plan.ideal}</div>
              <div className="bg-[#2F4257] text-white text-center text-xl font-bold py-3 rounded-lg mb-4">{plan.precio}</div>
              <p className="text-xs font-bold text-[#2F4257] mb-2">¿Qué incluye?</p>
              <ul className="space-y-1.5 flex-1">
                {plan.incluye.map((item, j) => (
                  <li key={j} className="flex items-start gap-1.5 text-xs text-gray-600">
                    <span className="text-[#4a6fa5] flex-shrink-0">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Modal GOLD / PLATINUM / DIAMOND — tabs en mobile, tabla en desktop ──
function ModalPlanesGPD({ service, onClose }) {
  const cols = ["gold", "platinum", "diamond"];
  const labels = { gold: "GOLD", platinum: "PLATINUM", diamond: "DIAMOND" };
  const [activeTab, setActiveTab] = useState("gold");

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} onClick={onClose}>
      <div
        className="bg-white w-full md:rounded-2xl md:max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl rounded-t-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#2F4257] text-white px-6 py-5 flex items-center justify-between sticky top-0 z-10 rounded-t-2xl md:rounded-t-2xl">
          <h3 className="text-base md:text-xl font-bold">Planes — {service.title}</h3>
          <CloseButton onClose={onClose} />
        </div>

        {/* Mobile: tabs */}
        <div className="md:hidden">
          {/* Tab selector */}
          <div className="flex border-b border-gray-200 sticky top-[68px] bg-white z-10">
            {cols.map((col) => (
              <button
                key={col}
                onClick={() => setActiveTab(col)}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wide transition-colors ${
                  activeTab === col
                    ? "text-[#2F4257] border-b-2 border-[#2F4257]"
                    : "text-gray-400"
                }`}
              >
                {labels[col]}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="px-6 py-5 space-y-4">
            {/* Specs */}
            <div className="space-y-2">
              {service.specs.map((row, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-xs text-[#2F4257] font-medium">{row.label}</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded text-right max-w-[55%]">{row[activeTab]}</span>
                </div>
              ))}
              {/* Precio */}
              <div className="pt-2">
                <div className="bg-[#2F4257] text-white text-center text-xl font-bold py-3 rounded-lg">
                  {service.precios[activeTab]}
                </div>
              </div>
            </div>

            {/* Incluye */}
            <div>
              <h4 className="font-bold text-[#2F4257] text-xs uppercase tracking-wide mb-3">Incluye</h4>
              <ul className="space-y-1.5">
                {service.incluye[activeTab].map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
                    <span className="text-[#4a6fa5] flex-shrink-0">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop: tabla */}
        <div className="hidden md:block p-8">
          <div className="w-full mb-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left pb-4 w-1/4"></th>
                  {cols.map((col) => (
                    <th key={col} className="text-center text-[#2F4257] font-bold pb-4 uppercase tracking-wider">{labels[col]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {service.specs.map((row, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="py-3 pr-4 text-[#2F4257] font-medium text-xs">{row.label}</td>
                    {cols.map((col) => (
                      <td key={col} className="py-3 text-center">
                        <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded block mx-1">{row[col]}</span>
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-gray-200">
                  <td className="py-3 text-[#2F4257] font-medium text-xs">Valor CLP</td>
                  {cols.map((col) => (
                    <td key={col} className="py-3 text-center">
                      <span className="bg-[#2F4257] text-white font-bold text-base px-3 py-2 rounded block mx-1">{service.precios[col]}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {cols.map((col) => (
              <div key={col}>
                <h4 className="font-bold text-[#2F4257] text-xs uppercase tracking-wide mb-3">{labels[col]} — Incluye</h4>
                <ul className="space-y-1.5">
                  {service.incluye[col].map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <span className="text-[#4a6fa5] flex-shrink-0">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Servicios</h2>
          <p className="text-center text-gray-500 text-[16px] font-medium mb-10 max-w-xl mx-auto">
            Decide el servicio que se adapta a lo que necesitas: puede tomar la producción completa o una parte puntual, siempre con la certeza de un resultado cuidado
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {services.map((s, i) => (
              <div
                key={i}
                onClick={() => setSelected(s)}
                className="border border-gray-200 p-5 hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full"
              >
                <h3 className="font-extrabold mb-3 leading-snug" style={{ color: "#2F4257" }}>{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6 flex-1">{s.desc}</p>
                <button className="w-8 h-8 bg-[#4a6fa5] text-white flex items-center justify-center hover:bg-[#3a5f95] transition-colors ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        selected.planes
          ? <ModalPlanesCreativo service={selected} onClose={() => setSelected(null)} />
          : <ModalPlanesGPD service={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
