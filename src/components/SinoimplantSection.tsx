"use client";

import React, { useState } from "react";
import Image from "next/image";

type TabKey = "porque" | "mecanismo" | "quienes";

export default function SinoimplantSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("porque");

  return (
    <section
      className="py-16 bg-gradient-to-b from-surface-container-low via-surface-variant/30 to-background border-y border-surface-variant"
      id="sinoimplant"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed text-primary-dark text-xs font-black uppercase tracking-wider shadow-sm">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            Método de Alta Eficacia Prioritario
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Sinoimplant® (Levonorgestrel 150 mg)
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant">
            Implante subdérmico de dos varillas de última generación. Máxima efectividad
            médica demostrada e independencia de la toma de medicamentos diarios.
          </p>
        </div>

        {/* 4 Quick Fact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-surface-variant hover:border-primary transition-all text-center">
            <span className="text-3xl sm:text-4xl font-black text-primary">4 Años</span>
            <p className="text-xs font-bold text-on-surface mt-1">Protección Continua</p>
            <p className="text-[11px] text-on-surface-variant mt-0.5">24/7 sin recordatorios</p>
          </div>
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-surface-variant hover:border-secondary transition-all text-center">
            <span className="text-3xl sm:text-4xl font-black text-secondary">&gt;99%</span>
            <p className="text-xs font-bold text-on-surface mt-1">Eficacia Médica</p>
            <p className="text-[11px] text-on-surface-variant mt-0.5">Certificada OMS y MinSalud</p>
          </div>
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-surface-variant hover:border-primary-dark transition-all text-center">
            <span className="text-3xl sm:text-4xl font-black text-on-surface">2 Varillas</span>
            <p className="text-xs font-bold text-on-surface mt-1">Levonorgestrel Puro</p>
            <p className="text-[11px] text-on-surface-variant mt-0.5">75 mg c/u (Total 150 mg)</p>
          </div>
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-surface-variant hover:border-primary transition-all text-center">
            <span className="text-3xl sm:text-4xl font-black text-primary-dark">Seguridad</span>
            <p className="text-xs font-bold text-on-surface mt-1">Clínica Certificada</p>
            <p className="text-[11px] text-on-surface-variant mt-0.5">Aprobado OMS y MinSalud</p>
          </div>
        </div>

        {/* Dynamic Tabs / Selector & Infographic Medical Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-md border border-surface-variant">
          {/* Left Column: Medical Illustration Visual */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-surface-variant bg-surface-container-low group">
              <div className="relative w-full h-[320px] sm:h-[420px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBewNHEsseapI18k_MnASfj1il4naxvTQ9cSnuKI2u0LcgXuVaROcsA-wUex_FdOQAAIQzz0zPaKcIcB3S6Ng3h1eMfkn8quduO2pEZJk0e59dAb8nEki4WH_uW5wHxMyUEnlbNECVrTmJuCVGq9R7iBEalNJWBNQetkduUrBWkf_A63DO79TIf8QgewgDKMrEwwcsxthj06Wb8oNCG7HBI7ltC0qWAFuLtj87nu7NR1vG3HXkM9Q81lElFNvvDkJLgtQ"
                  alt="Ilustración educativa de colocación del implante subdérmico de 2 varillas en la cara interna del brazo no dominante a 6-8 cm sobre el pliegue del codo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500 rounded-2xl"
                />
              </div>
              <div className="p-4 bg-surface-container-low border-t border-surface-variant flex items-center justify-between text-xs">
                <span className="font-bold text-primary-dark flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">biotech</span>
                  Ilustración Educativa · 2 Varillas Subdérmicas
                </span>
                <span className="text-on-surface-variant font-medium hidden sm:inline">
                  Cara interna del brazo · 6-8 cm sobre el codo
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tabbed Benefits */}
          <div className="lg:col-span-6 space-y-6">
            {/* Selector Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-surface-container-low rounded-2xl border border-surface-variant">
              <button
                type="button"
                onClick={() => setActiveTab("porque")}
                className={`tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "porque"
                    ? "active"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                ¿Por qué elegirlo?
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("mecanismo")}
                className={`tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "mecanismo"
                    ? "active"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                ¿Cómo funciona?
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("quienes")}
                className={`tab-btn px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "quienes"
                    ? "active"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                ¿Quiénes son aptas?
              </button>
            </div>

            {/* Tab Content 1: ¿Por qué elegirlo? */}
            {activeTab === "porque" && (
              <div className="tab-content space-y-4 animate-fade-in">
                <h3 className="text-xl font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">thumb_up</span>
                  Autonomía y Confiabilidad sin Esfuerzo
                </h3>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-surface-container-low border border-surface-variant/60 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary-fixed flex items-center justify-center text-primary-dark shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-on-surface">
                        No depende de la rutina
                      </h4>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Evita los fallos habituales de la píldora causados por olvidos,
                        vómitos accidentales o retrasos de horario.
                      </p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-surface-container-low border border-surface-variant/60 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">savings</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-on-surface">
                        Cero costo económico para ti
                      </h4>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Incluido en el Plan de Beneficios de Salud (PBS) del Hospital Santa
                        Mónica para usuarias subsidiadas y contributivas.
                      </p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-surface-container-low border border-surface-variant/60 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary-fixed/50 flex items-center justify-center text-primary-dark shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">
                        hourglass_top
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-on-surface">
                        Duración de 4 Años
                      </h4>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Protección continua de alta eficacia recomendada por profesionales
                        de la salud para planificar tu vida con tranquilidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content 2: ¿Cómo funciona? */}
            {activeTab === "mecanismo" && (
              <div className="tab-content space-y-4 animate-fade-in">
                <h3 className="text-xl font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">security</span>
                  Triple Mecanismo Biológico de Acción
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  El Levonorgestrel liberado gradualmente actúa en 3 niveles de seguridad
                  simultáneos:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-surface-container-low text-center border border-surface-variant/60">
                    <span className="w-8 h-8 rounded-full bg-primary text-white font-bold text-xs inline-flex items-center justify-center mb-1.5 shadow-sm">
                      1
                    </span>
                    <h5 className="text-xs font-bold text-on-surface">Frena Ovulación</h5>
                    <p className="text-[11px] text-on-surface-variant mt-1">
                      Suprime el pico hormonal necesario para madurar el óvulo.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-surface-container-low text-center border border-surface-variant/60">
                    <span className="w-8 h-8 rounded-full bg-primary-dark text-white font-bold text-xs inline-flex items-center justify-center mb-1.5 shadow-sm">
                      2
                    </span>
                    <h5 className="text-xs font-bold text-on-surface">Moco Espeso</h5>
                    <p className="text-[11px] text-on-surface-variant mt-1">
                      Forma una barrera en el cuello uterino infranqueable para espermatozoides.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-surface-container-low text-center border border-surface-variant/60">
                    <span className="w-8 h-8 rounded-full bg-secondary text-white font-bold text-xs inline-flex items-center justify-center mb-1.5 shadow-sm">
                      3
                    </span>
                    <h5 className="text-xs font-bold text-on-surface">Endometrio Fino</h5>
                    <p className="text-[11px] text-on-surface-variant mt-1">
                      Mantiene el endometrio delgado, impidiendo la implantación.
                    </p>
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-primary/10 text-primary-dark text-xs font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    trending_down
                  </span>
                  <span>
                    Liberación suave: ~85 mcg/día al inicio y ~30 mcg/día constantes desde el año 2 al 4.
                  </span>
                </div>
              </div>
            )}

            {/* Tab Content 3: ¿Quiénes son aptas? */}
            {activeTab === "quienes" && (
              <div className="tab-content space-y-4 animate-fade-in">
                <h3 className="text-xl font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    family_restroom
                  </span>
                  Criterios de Elegibilidad Médica (OMS)
                </h3>
                <p className="text-xs text-on-surface-variant">
                  Categoría 1 y 2 de la OMS: Método altamente seguro en casi cualquier etapa
                  de vida reproductiva:
                </p>
                <ul className="space-y-2 text-xs text-on-surface">
                  <li className="p-2.5 rounded-xl bg-surface-container-low border border-surface-variant/60 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>
                    <span>
                      <strong>Jóvenes y adolescentes:</strong> Con o sin hijos previos (nulíparas).
                    </span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-surface-container-low border border-surface-variant/60 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>
                    <span>
                      <strong>En lactancia materna:</strong> No afecta la producción ni calidad de la leche.
                    </span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-surface-container-low border border-surface-variant/60 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>
                    <span>
                      <strong>Postparto o postaborto inmediato:</strong> Colocación antes del alta clínica.
                    </span>
                  </li>
                  <li className="p-2.5 rounded-xl bg-surface-container-low border border-surface-variant/60 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>
                    <span>
                      <strong>Mujeres que no toleran estrógenos:</strong> Solo contiene progestina pura.
                    </span>
                  </li>
                </ul>
              </div>
            )}

            <div className="pt-2 flex items-center gap-4">
              <a
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                href="#contacto"
              >
                <span className="material-symbols-outlined text-[18px]">
                  calendar_month
                </span>
                <span>Pedir Cita en Hospital Santa Mónica</span>
              </a>
              <span className="text-xs text-on-surface-variant font-medium">
                Asesoría previa sin costo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
