import React from "react";
import Image from "next/image";

export default function Hero({ onOpenModal }: { onOpenModal?: () => void }) {
  const handleBookingClick = (e: React.MouseEvent) => {
    if (onOpenModal) {
      e.preventDefault();
      onOpenModal();
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-surface-variant/40 via-background to-background pt-8 pb-16 lg:py-16"
      id="inicio"
    >
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-fixed/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-secondary-fixed/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Hero Copy Left */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-primary-fixed shadow-sm text-xs font-bold text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
              <span>Hospital Santa Mónica · Pasto Salud E.S.E. &amp; UCC</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-on-surface leading-[1.15]">
              Planificación Familiar: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-dark to-secondary">
                Tu Derecho, Tu Decisión, Tu Futuro.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-on-surface-variant font-normal leading-relaxed">
              <span className="font-bold text-primary-dark block mb-1 text-lg sm:text-xl">
                ¡Agenda tu cita fácil, rápido y sin complicaciones!
              </span>{" "}
              Te orientamos paso a paso para acceder al implante{" "}
              <strong>Sinoimplant® 150 mg</strong> de forma 100% gratuita, con
              acompañamiento personalizado, cálido y sin demoras en el Hospital
              Santa Mónica.
            </p>

            {/* Quick interactive benefit badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-surface-variant shadow-sm">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  verified_user
                </span>
                <span className="text-xs font-bold text-on-surface">
                  100% Gratuito (PBS)
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-surface-variant shadow-sm">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  timelapse
                </span>
                <span className="text-xs font-bold text-on-surface">
                  4 Años de Protección Continua
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-surface-variant shadow-sm">
                <span className="material-symbols-outlined text-primary-dark text-[20px]">
                  health_and_safety
                </span>
                <span className="text-xs font-bold text-on-surface">
                  Seguridad y Respaldo Clínico
                </span>
              </div>
            </div>

            {/* CTAs with Dynamic look */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-extrabold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 cursor-pointer"
                href="#contacto"
                onClick={handleBookingClick}
              >
                <span>Agendar Cita Fácil y Rápido</span>
                <span className="material-symbols-outlined text-[18px]">
                  calendar_month
                </span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-surface-container-low text-on-surface border border-primary/20 font-bold text-sm transition-all shadow-sm hover:-translate-y-0.5 hover:border-primary"
                href="#quiz"
              >
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  psychology_alt
                </span>
                <span>¿Es el método para mí?</span>
              </a>
            </div>

            {/* Trust line with avatars & rating */}
            <div className="flex items-center gap-3 pt-2 text-xs text-on-surface-variant">
              <div className="flex -space-x-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xs font-extrabold ring-2 ring-white">
                  UCC
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white text-xs font-extrabold ring-2 ring-white">
                  ESE
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-dark text-white text-xs font-extrabold ring-2 ring-white">
                  OMS
                </span>
              </div>
              <div>
                <p className="font-bold text-on-surface">
                  Consejería profesional calificada y sin prejuicios
                </p>
                <p>Abierto a adolescentes, jóvenes y adultas de Nariño.</p>
              </div>
            </div>
          </div>

          {/* Hero Image & Interactive Floating Cards */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Glow halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl transform rotate-2 scale-105 filter blur-xl" />

              {/* Main Hero Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-surface-container-low">
                <div className="relative w-full h-[400px] sm:h-[480px]">
                  <Image
                    src="/images/hospital-santa-monica.png"
                    alt="Hospital Santa Mónica — Fachada e instalaciones modernas para tu atención"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-md text-[11px] font-bold tracking-wide uppercase text-white shadow-sm inline-block">
                    Atención Humana
                  </span>
                  <p className="font-bold text-sm sm:text-base mt-1 text-white">
                    Atención guiada por enfermería y medicina en el Hospital Santa Mónica
                  </p>
                </div>
              </div>

              {/* Top-Right Floating Pill Badge */}
              <div className="absolute -top-3 right-1 sm:-right-4 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-xl border border-primary-fixed flex items-center gap-2.5 sm:gap-3 animate-bounce [animation-duration:3s]">
                <div className="w-9 h-9 rounded-xl bg-primary-fixed flex items-center justify-center text-primary-dark">
                  <span className="material-symbols-outlined text-[20px]">
                    check_circle
                  </span>
                </div>
                <div>
                  <span className="text-xs font-black text-on-surface block">
                    &gt;99% Efectividad
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-medium">
                    Tasa de falla &lt; 0.5 por 1,000
                  </span>
                </div>
              </div>

              {/* Bottom-Left Floating Card */}
              <div className="hidden sm:flex absolute -bottom-5 -left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-primary-fixed items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    medical_services
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface">
                    Hospital Santa Mónica
                  </p>
                  <p className="text-[11px] text-on-surface-variant">
                    Lunes a Sábado · Consulta amigable y gratuita
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
