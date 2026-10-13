import React from "react";
import Image from "next/image";

export default function MythsSection() {
  return (
    <section
      className="py-16 bg-gradient-to-b from-surface-container-low via-white to-surface-variant/30 border-y border-surface-variant"
      id="mitos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Lifestyle Inspiration Left */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed text-secondary text-xs font-black uppercase tracking-wider shadow-sm">
              <span className="material-symbols-outlined text-[16px]">
                sentiment_very_satisfied
              </span>
              Tu Vida en tus Manos
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface leading-tight">
              Vive con la serenidad de estar protegida y en control de tus metas.
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Planificar no es postergar la felicidad, es decidir tu camino con
              tranquilidad, autonomía y libertad plena de estudiar, viajar y construir
              tu futuro.
            </p>

            {/* Image Card */}
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white relative group bg-white">
              <div className="relative w-full h-[360px] sm:h-[440px]">
                <Image
                  src="/images/sinoimplant-bienestar-decision.png"
                  alt="Tu bienestar, tu decisión - Sinoimplant"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-2 mx-auto group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-sm text-xs text-on-surface font-bold flex items-center justify-between">
                <span>Infórmate, elige con seguridad y cuida tu futuro</span>
                <span className="material-symbols-outlined text-primary text-[20px]">
                  favorite
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Mitos vs Realidades Accordion / Cards Right */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-surface-variant">
              <h3 className="text-lg font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">fact_check</span>
                Mitos y Verdades Frecuentes
              </h3>
              <span className="text-xs text-on-surface-variant font-medium">
                Información con respaldo médico
              </span>
            </div>

            {/* Mito 1 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-surface-variant hover:border-primary/50 shadow-sm transition-all">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-error-container text-error flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✕
                </span>
                <div className="space-y-1.5 flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-on-surface">
                    Mito: &ldquo;¿El implante puede desplazarse a otra parte del cuerpo o al corazón?&rdquo;
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    <strong>Falso:</strong> Las dos varillas permanecen alojadas
                    estrictamente en el tejido celular subcutáneo superficial del brazo
                    donde fueron insertadas. El tejido conjuntivo forma una cápsula delgada
                    que las mantiene fijas en su sitio.
                  </p>
                </div>
              </div>
            </div>

            {/* Mito 2 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-surface-variant hover:border-primary/50 shadow-sm transition-all">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-error-container text-error flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✕
                </span>
                <div className="space-y-1.5 flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-on-surface">
                    Mito: &ldquo;¿Es dolorosa la colocación y se nota mucho en el brazo?&rdquo;
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    <strong>Falso:</strong> Se aplica anestesia local de modo que la
                    inserción es indolora. Las varillas quedan bajo la piel de la cara
                    interna del brazo: no se notan a simple vista, aunque puedes sentirlas
                    suavemente al palparlas.
                  </p>
                </div>
              </div>
            </div>

            {/* Mito 3 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-surface-variant hover:border-primary/50 shadow-sm transition-all">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <div className="space-y-1.5 flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-on-surface">
                    Realidad: &ldquo;¿Puede cambiar mi patrón de sangrado?&rdquo;
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    <strong>Cierto:</strong> Como ocurre con todos los implantes
                    hormonales de progestina, es normal experimentar menstruaciones más
                    ligeras, manchado irregular temporal o ausencia de regla (amenorrea),
                    lo cual es seguro y médicamente esperado.
                  </p>
                </div>
              </div>
            </div>

            {/* Mito 4 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-surface-variant hover:border-primary/50 shadow-sm transition-all">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <div className="space-y-1.5 flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-on-surface">
                    Realidad: &ldquo;¿Es adecuado para jóvenes y mujeres que nunca han tenido hijos?&rdquo;
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    <strong>Cierto:</strong> Según los criterios médicos de elegibilidad
                    de la OMS, el implante es de primera elección para adolescentes y
                    mujeres nulíparas, brindando alta protección sin requerir cuidados
                    diarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
