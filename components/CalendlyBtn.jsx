// components/CalendlyButton.jsx
"use client";
import { useEffect } from "react";

export default function CalendlyBtn({ label = "Agendar una Reunión", className }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const openCalendly = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/devcalifornia009/reunion-de-urgencias",
    });
  };

  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <button onClick={openCalendly} className={className}>
        {label}
      </button>
    </>
  );
}