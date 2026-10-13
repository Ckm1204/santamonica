import React from "react";
import Image from "next/image";

export default function InstitutionalSection() {
  return (
    <section className="py-10 bg-surface-container-low border-t border-surface-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-surface-variant flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          {/* Logos oficiales */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 relative flex-shrink-0">
                <Image
                  src="/images/logo-pasto-salud.png"
                  alt="Logo Oficial Pasto Salud E.S.E."
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain rounded-xl"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">Pasto Salud E.S.E.</p>
                <p className="text-[11px] text-on-surface-variant">
                  Red Pública del Municipio de Pasto
                </p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-outline-variant" />
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 relative flex-shrink-0">
                <Image
                  src="/images/logo-ucc.png"
                  alt="Logo Universidad Cooperativa de Colombia UCC"
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain rounded-xl"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">
                  Universidad Cooperativa de Colombia
                </p>
                <p className="text-[11px] text-on-surface-variant">
                  Facultad de Ciencias de la Salud · UCC
                </p>
              </div>
            </div>
          </div>

          {/* Autoría Pedagógica Destacada */}
          <div className="flex flex-col md:items-end text-left md:text-right">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-bold mb-1">
              <span className="material-symbols-outlined text-[15px]">school</span>
              Iniciativa Pedagógica y Asistencial
            </div>
            <p className="text-base font-extrabold text-on-surface">
              Hecho por Carolina Palacios
            </p>
            <p className="text-xs text-on-surface-variant">
              Desarrollo de Contenido Educativo y Clínico en SSR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
