"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProcedureSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: "01",
      title: "Valoración & Anestesia Local",
      badge: "Cero molestia",
      badgeColor: "bg-primary-fixed text-primary-dark",
      desc: "Descarte médico de embarazo, explicación detallada y aplicación suave de anestesia local en la cara interna del brazo no dominante (6-8 cm sobre el codo).",
    },
    {
      num: "02",
      title: "Microincisión de 3 mm",
      badge: "Milimétrica",
      badgeColor: "bg-surface-container-low text-on-surface-variant",
      desc: "Con un trocar estéril de precisión se realiza una diminuta apertura cutánea superficial de apenas 3 mm, sin sangrado significativo.",
    },
    {
      num: "03",
      title: 'Inserción en "V" de las 2 Varillas',
      badge: "Fácilmente palpable",
      badgeColor: "bg-secondary-fixed text-secondary",
      desc: 'Las dos cápsulas de 75 mg se ubican en forma de abanico en "V" bajo la piel. Ambos extremos quedan perfectamente palpables para la paciente.',
    },
    {
      num: "04",
      title: "Cierre Mariposa sin Suturas",
      badge: "Sin puntos",
      badgeColor: "bg-secondary-fixed text-secondary",
      desc: "Cierre sin suturas y puesta de vendaje compresivo, con cita de control para retiro de vendaje y valoración por enfermería.",
    },
  ];

  return (
    <section className="py-16 bg-background scroll-mt-24" id="procedimiento">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-secondary-fixed text-secondary text-xs font-black uppercase tracking-wider">
              Técnica Clínica Ambulatoria
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface">
              ¿Cómo se coloca? Rápido, seguro y sin dolor
            </h2>
            <p className="text-sm text-on-surface-variant max-w-xl">
              Procedimiento menor de 10 a 15 minutos en consultorio médico bajo
              rigurosa técnica estéril.
            </p>
          </div>
          {/* Quick Trust Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="px-3 py-1.5 rounded-full bg-secondary-fixed text-secondary flex items-center gap-1 shadow-sm">
              <span className="material-symbols-outlined text-[16px]">
                sentiment_satisfied
              </span>
              Sin dolor (Anestesia local)
            </span>
            <span className="px-3 py-1.5 rounded-full bg-primary-fixed text-primary-dark flex items-center gap-1 shadow-sm">
              <span className="material-symbols-outlined text-[16px]">timer</span>
              10 a 15 min
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white border border-surface-variant text-on-surface flex items-center gap-1 shadow-sm">
              <span className="material-symbols-outlined text-[16px]">healing</span>
              Cierre sin puntos
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Photo Clinical Hands */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white relative group">
              <div className="relative w-full h-80 sm:h-96">
                <Image
                  src="/images/sinoimplant-insercion-pasos.png"
                  alt="Inserción correcta del implante subdérmico - Pasos clínicos oficiales"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-2 mx-auto group-hover:scale-[1.02] transition-transform duration-500 rounded-2xl"
                />
              </div>
              <div className="p-3 bg-surface-container-low border-t border-surface-variant flex items-center justify-between text-xs">
                <span className="font-bold text-primary-dark flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  Infografía Oficial de Inserción Subdérmica
                </span>
                <span className="text-on-surface-variant text-[11px] font-medium hidden sm:inline">
                  Técnica en &apos;V&apos; · 6-8 cm sobre el pliegue
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-surface-variant flex items-center gap-3 shadow-sm">
              <span className="material-symbols-outlined text-primary-dark text-[24px]">
                info
              </span>
              <p className="text-xs text-on-surface-variant">
                <strong>Recomendación:</strong> No mojar el vendaje. Acudir para retiro
                de vendaje y valoración de seguimiento por enfermería.
              </p>
            </div>
          </div>

          {/* Interactive 4-Step Stepper Cards */}
          <div className="lg:col-span-7 space-y-3">
            {steps.map((step, idx) => {
              const stepNumber = idx + 1;
              const isActive = activeStep === stepNumber;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(stepNumber)}
                  className={`stepper-card p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? "active-step border-2 border-primary bg-white shadow-md scale-[1.01]"
                      : "border border-surface-variant bg-white hover:border-primary/50 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-2xl font-black text-sm flex items-center justify-center shrink-0 shadow-sm transition-colors ${
                      isActive
                        ? "bg-gradient-to-tr from-primary to-primary-dark text-white"
                        : "bg-surface-container-low text-primary-dark"
                    }`}
                  >
                    {step.num}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm sm:text-base font-bold text-on-surface">
                        {step.title}
                      </h4>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${step.badgeColor}`}
                      >
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
