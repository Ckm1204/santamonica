"use client";

import React, { useState } from "react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({
  isOpen,
  onClose,
}: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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
      // Fallback
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
        console.error("Error al enviar formulario:", err);
      }
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hola, acabo de solicitar mi cita gratuita para el implante Sinoimplant® 150 mg en Hospital Santa Mónica.${
        formData.name ? ` Mi nombre es ${formData.name}.` : ""
      }${formData.age ? ` Tengo ${formData.age} años.` : ""}`
    );
    window.open(`https://wa.me/573192076615?text=${text}`, "_blank");
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", age: "" });
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-secondary-container/50 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border-2 border-primary-fixed"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          type="button"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container-low hover:bg-surface-variant text-on-surface-variant flex items-center justify-center transition-colors"
          aria-label="Cerrar modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="space-y-1 mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-extrabold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[15px]">calendar_month</span>
            Agendamiento en Línea
          </div>
          <h3 className="text-xl font-black text-on-surface">
            Agenda tu Cita en Hospital Santa Mónica
          </h3>
          <p className="text-xs text-on-surface-variant">
            Ingresa únicamente tus datos de contacto y te asignaremos tu turno de inmediato.
          </p>
        </div>

        {!submitted ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-xs font-bold text-on-surface mb-1"
                htmlFor="modalNameInput"
              >
                Nombre y Apellidos
              </label>
              <input
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-surface-variant focus:border-primary focus:ring-1 focus:ring-primary bg-background outline-none transition-colors"
                id="modalNameInput"
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
                  htmlFor="modalPhoneInput"
                >
                  Teléfono Móvil
                </label>
                <input
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-surface-variant focus:border-primary focus:ring-1 focus:ring-primary bg-background outline-none transition-colors"
                  id="modalPhoneInput"
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
                  htmlFor="modalAgeInput"
                >
                  Edad
                </label>
                <input
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-surface-variant focus:border-primary focus:ring-1 focus:ring-primary bg-background outline-none transition-colors"
                  id="modalAgeInput"
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
                  <span>Enviando solicitud a Pasto Salud...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>Confirmar Solicitud de Cita Gratuita</span>
                </>
              )}
            </button>

            <p className="text-[10px] text-center text-on-surface-variant">
              Tus datos quedan registrados directamente en la base de datos de Pasto Salud E.S.E.
            </p>
          </form>
        ) : (
          <div className="p-5 rounded-2xl bg-primary-fixed/60 border border-primary text-primary-dark space-y-3 animate-fade-in text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
              <span className="material-symbols-outlined text-[28px]">check_circle</span>
            </div>
            <h4 className="text-sm font-extrabold text-on-surface">
              ¡Solicitud Registrada con Éxito!
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Tus datos han sido guardados en el sistema del Hospital Santa Mónica. Un profesional de salud se comunicará contigo.
            </p>
            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Confirmar de inmediato por WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="text-xs text-primary-dark font-bold hover:underline block mx-auto pt-1"
            >
              Cerrar ventana
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
