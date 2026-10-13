import React from "react";

export default function RightsSection() {
  return (
    <section className="py-10 bg-white border-b border-surface-variant" id="derechos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-fixed/30 via-white to-secondary-fixed/30 rounded-3xl p-6 sm:p-8 lg:p-10 border border-primary-fixed shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-primary-dark text-white flex items-center justify-center shrink-0 shadow-md">
              <span className="material-symbols-outlined text-[28px]">favorite</span>
            </div>
            <div>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-black uppercase tracking-wider">
                Enfoque de Derechos y Autonomía
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-on-surface mt-1">
                ¿Qué es la Planificación Familiar y tus Derechos Sexuales y Reproductivos?
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-on-surface-variant leading-relaxed">
            <div className="p-4 rounded-2xl bg-white/80 border border-surface-variant">
              <h3 className="text-xs font-bold text-primary-dark uppercase tracking-wide mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Planificación Familiar
              </h3>
              <p>
                La planificación familiar es el derecho de toda persona a decidir de manera
                libre, informada y responsable el número de hijos que desea tener y el momento
                para tenerlos, así como a contar con la información y los medios médicos para
                lograrlo.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 border border-surface-variant">
              <h3 className="text-xs font-bold text-secondary uppercase tracking-wide mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">gavel</span>
                Derechos Sexuales y Reproductivos
              </h3>
              <p>
                Hace parte fundamental de tus <strong>Derechos Sexuales y Reproductivos</strong>:
                decidir sobre tu propio cuerpo, vivir una sexualidad plena, segura, autónoma y
                sin discriminación, con acceso universal a servicios de salud oportunos y
                respetuosos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
