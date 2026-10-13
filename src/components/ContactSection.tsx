"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/agendar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre_completo: formData.name,
          telefono: formData.phone,
          edad: formData.age,
        }),
      });

      if (!res.ok) {
        // Fallback directo a Google Apps Script
        await fetch(
          "https://script.google.com/macros/s/AKfycbxPGwLAZUUa8xDXt8RC9aQ-vXlCXftJ2vBRAhow6xD-yrgMpq1TjHpsOkydfJXbIqsY6g/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nombre_completo: formData.name,
              telefono: formData.phone,
              edad: formData.age,
            }),
          }
        );
      }
    } catch {
      try {
        await fetch(
          "https://script.google.com/macros/s/AKfycbxPGwLAZUUa8xDXt8RC9aQ-vXlCXftJ2vBRAhow6xD-yrgMpq1TjHpsOkydfJXbIqsY6g/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nombre_completo: formData.name,
              telefono: formData.phone,
              edad: formData.age,
            }),
          }
        );
      } catch (err) {
        console.error("Error al registrar en Google Sheets:", err);
      }
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hola, acabo de solicitar mi cita para el implante Sinoimplant® 150 mg en el Hospital Santa Mónica.${
        formData.name ? ` Mi nombre es ${formData.name}.` : ""
      }${formData.age ? ` Tengo ${formData.age} años.` : ""}`
    );
    window.open(`https://wa.me/573192076615?text=${text}`, "_blank");
  };

  return (
    <section className="py-16 bg-background" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white via-surface-container-low to-surface-variant/50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-primary-fixed shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-fixed text-primary-dark text-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                Hospital Santa Mónica — Pasto Salud E.S.E.
              </div>

              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                El Hospital Santa Mónica te abre las puertas para consejería en salud
                sexual y reproductiva sin juicios ni demoras. Estamos comprometidos
                con tus derechos.
              </p>

              {/* Operational details cards */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-3xl bg-white border-2 border-primary-fixed shadow-md flex items-start gap-4 transition-all hover:border-primary">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-primary-dark text-white flex items-center justify-center shrink-0 shadow-md">
                    <span className="material-symbols-outlined text-[26px]">chat</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-primary-dark text-[11px] font-extrabold uppercase">
                        Agendamiento Fácil y Rápido
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-extrabold text-on-surface">
                      Solicita tu cita directa por WhatsApp
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Comunícate al número{" "}
                      <a
                        href="https://wa.me/573192076615"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-black text-primary-dark hover:underline inline-flex items-center gap-1 text-sm bg-primary/10 px-2 py-0.5 rounded-lg"
                      >
                        WhatsApp: 319 207 6615
                      </a>{" "}
                      y recibe orientación personalizada sin demoras.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-surface-variant shadow-sm flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[22px]">domain</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-on-surface">
                        Atención Presencial
                      </h4>
                      <p className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">
                        Acude directamente al <strong>tercer piso</strong> del Hospital
                        Santa Mónica para tu agendamiento y asesoría.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary-fixed/40 to-white border border-primary-fixed shadow-sm flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[22px]">verified</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-primary-dark uppercase tracking-wide">
                        Totalmente Gratuito
                      </h4>
                      <p className="text-[11px] text-on-surface font-medium mt-0.5 leading-snug">
                        Procedimiento, implante y consejería <strong>100% gratuitos</strong> para ti.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-surface-variant space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-primary-dark uppercase tracking-wider">
                  Cita Inmediata
                </span>
                <h3 className="text-lg font-bold text-on-surface">
                  Solicitar Consejería en Santa Mónica
                </h3>
                <p className="text-xs text-on-surface-variant">
                  Déjanos tus datos y un profesional de salud te contactará.
                </p>
              </div>

              {!submitted ? (
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div>
                    <label
                      className="block text-xs font-bold text-on-surface mb-1"
                      htmlFor="nameInput"
                    >
                      Nombre y Apellidos
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-surface-variant focus:border-primary focus:ring-1 focus:ring-primary bg-background outline-none transition-colors"
                      id="nameInput"
                      placeholder="Ej. Andrea Gómez"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label
                        className="block text-xs font-bold text-on-surface mb-1"
                        htmlFor="phoneInput"
                      >
                        Teléfono Móvil
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-surface-variant focus:border-primary focus:ring-1 focus:ring-primary bg-background outline-none transition-colors"
                        id="phoneInput"
                        placeholder="310 000 0000"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-bold text-on-surface mb-1"
                        htmlFor="ageInput"
                      >
                        Edad
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-surface-variant focus:border-primary focus:ring-1 focus:ring-primary bg-background outline-none transition-colors"
                        id="ageInput"
                        max="55"
                        min="13"
                        placeholder="Ej. 20"
                        required
                        type="number"
                        value={formData.age}
                        onChange={(e) =>
                          setFormData({ ...formData, age: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-70"
                    type="submit"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando solicitud...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[18px]">send</span>
                        <span>Confirmar Solicitud de Cita Gratuita</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Feedback Box */
                <div className="p-5 rounded-2xl bg-primary-fixed/60 border border-primary text-primary-dark text-xs space-y-3 animate-fade-in text-center">
                  <div className="w-10 h-10 mx-auto rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">
                      check_circle
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">
                      ¡Solicitud registrada con éxito!
                    </h4>
                    <p className="text-[11px] text-on-surface-variant mt-1 leading-relaxed">
                      El equipo de Pasto Salud Santa Mónica ha recibido tu solicitud. Si deseas atención inmediata, puedes abrir un chat directo por WhatsApp:
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                    <span>Confirmar por WhatsApp Oficial</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", age: "" });
                    }}
                    className="text-[11px] text-primary-dark font-bold hover:underline block mx-auto"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              )}

              <p className="text-[10px] text-center text-on-surface-variant">
                Tus datos médicos se encuentran amparados bajo estricto secreto profesional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
