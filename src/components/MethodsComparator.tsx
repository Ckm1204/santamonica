import React from "react";

export default function MethodsComparator() {
  return (
    <section className="py-16 bg-background scroll-mt-24" id="metodos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-extrabold uppercase tracking-wider">
              Panorama Anticonceptivo
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface">
              Conoce y Compara tus Opciones
            </h2>
            <p className="text-sm text-on-surface-variant max-w-xl">
              Elige libremente conociendo cómo funciona cada método, su grado de
              protección y el compromiso requerido.
            </p>
          </div>
          <div className="inline-flex p-1 bg-surface-container rounded-2xl text-xs font-bold">
            <span className="px-3.5 py-1.5 rounded-xl bg-white text-primary-dark shadow-sm">
              Todos disponibles en Pasto Salud ESE
            </span>
          </div>
        </div>

        {/* Interactive Cards Grid with Hover Lift & Color Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Sinoimplant Featured */}
          <div className="relative rounded-3xl p-6 bg-gradient-to-b from-primary-fixed/30 via-white to-white border-2 border-primary shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white text-[10px] font-extrabold uppercase tracking-wide shadow-sm">
              ★ Estrella de Elección
            </div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-primary-dark text-white flex items-center justify-center mb-4 shadow-md">
                <span className="material-symbols-outlined text-[26px]">adjust</span>
              </div>
              <span className="text-[11px] font-bold text-primary-dark uppercase tracking-wide">
                Subdérmico · Larga Acción
              </span>
              <h3 className="text-lg font-bold text-on-surface mt-0.5">
                Sinoimplant® 150 mg
              </h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Dos varillas flexibles colocadas bajo la piel del brazo. Más del{" "}
                <strong>99% de eficacia</strong> durante 4 años continuos.
              </p>
              <div className="mt-4 space-y-1.5 text-[11px] font-bold text-on-surface-variant">
                <div className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                  Cero olvidos o alarmas
                </div>
                <div className="flex items-center gap-1.5 text-secondary">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                  Cobertura total por 4 años
                </div>
              </div>
            </div>
            <a
              className="mt-5 w-full py-2.5 rounded-2xl bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white text-xs font-bold text-center transition-all shadow"
              href="#sinoimplant"
            >
              Explorar Ficha Completa
            </a>
          </div>

          {/* Card 2: Barrera */}
          <div className="rounded-3xl p-6 bg-white border border-surface-variant hover:border-primary/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-secondary-fixed text-secondary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[26px]">shield</span>
              </div>
              <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wide">
                Doble Protección
              </span>
              <h3 className="text-lg font-bold text-on-surface mt-0.5">
                Preservativo de Barrera
              </h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                El único método que previene embarazos no planeados y protege
                simultáneamente de Infecciones de Transmisión Sexual (ITS/VIH).
              </p>
              <div className="mt-4 space-y-1.5 text-[11px] font-medium text-on-surface-variant">
                <div className="flex items-center gap-1.5 text-secondary font-bold">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                  Entrega gratuita regular
                </div>
                <div className="flex items-center gap-1.5 text-secondary font-bold">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                  Indispensable como apoyo
                </div>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-surface-variant text-[11px] font-bold text-secondary flex items-center justify-between">
              <span>Entrega inmediata</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </div>

          {/* Card 3: Hormonales Cortos */}
          <div className="rounded-3xl p-6 bg-white border border-surface-variant hover:border-primary/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-surface-variant text-primary-dark flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[26px]">medication</span>
              </div>
              <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wide">
                Corta Duración
              </span>
              <h3 className="text-lg font-bold text-on-surface mt-0.5">
                Orales e Inyectables
              </h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Píldoras diarias o inyecciones mensuales/trimestrales. Su éxito depende
                de una estricta puntualidad de la usuaria.
              </p>
              <div className="mt-4 space-y-1.5 text-[11px] font-medium text-on-surface-variant">
                <div className="flex items-center gap-1.5 text-primary-dark font-bold">
                  <span className="material-symbols-outlined text-[16px]">priority_high</span>
                  Requiere memoria diaria
                </div>
                <div className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                  Control del ciclo menstrual
                </div>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-surface-variant text-[11px] font-bold text-primary flex items-center justify-between">
              <span>Consulta médica requerida</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </div>

          {/* Card 4: DIU y Quirúrgicos */}
          <div className="rounded-3xl p-6 bg-white border border-surface-variant hover:border-primary/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-surface-container-low text-secondary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[26px]">healing</span>
              </div>
              <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wide">
                DIU y Quirúrgicos
              </span>
              <h3 className="text-lg font-bold text-on-surface mt-0.5">
                DIU / Definitivos
              </h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Dispositivos intrauterinos (Cobre/Mirena) de 5 a 10 años, o esterilización
                quirúrgica voluntaria definitiva para mujeres y hombres.
              </p>
              <div className="mt-4 space-y-1.5 text-[11px] font-medium text-on-surface-variant">
                <div className="flex items-center gap-1.5 text-secondary">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                  Sin hormonas (DIU Cobre)
                </div>
                <div className="flex items-center gap-1.5 text-secondary">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                  Vasectomía / Ligadura
                </div>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-surface-variant text-[11px] font-bold text-secondary flex items-center justify-between">
              <span>Valoración ginecológica</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
