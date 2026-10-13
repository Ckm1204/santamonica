"use client";

import React, { useState } from "react";

type QuizType = "olvidos" | "estudios" | "lactancia" | "hijos";

interface QuizResult {
  title: string;
  desc: string;
}

const quizData: Record<QuizType, QuizResult> = {
  olvidos: {
    title: "¡El Implante Subdérmico es tu mejor alternativa!",
    desc: "Al no depender de tomas diarias ni alarmas en tu teléfono, Sinoimplant® elimina por completo el riesgo de falla por olvido de pastillas u horas incorrectas.",
  },
  estudios: {
    title: "¡4 Años continuos para enfocarte en tus metas!",
    desc: "Podrás estudiar, emprender o viajar con más del 99% de protección continua, asegurando que tu proyecto de vida avance a tu propio ritmo.",
  },
  lactancia: {
    title: "¡100% compatible y seguro durante la lactancia materna!",
    desc: "Al contener únicamente progestina (Levonorgestrel) sin estrógenos, no altera la producción ni la composición de tu leche materna (Categoría CME OMS).",
  },
  hijos: {
    title: "¡Máxima eficacia y respaldo clínico garantizado!",
    desc: "Sinoimplant® brinda 4 años de tranquilidad con una tasa de eficacia superior al 99%, bajo la supervisión de los profesionales del Hospital Santa Mónica.",
  },
};

export default function QuizSection({
  onOpenModal,
}: {
  onOpenModal?: () => void;
}) {
  const [selected, setSelected] = useState<QuizType>("olvidos");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleBookingClick = (e: React.MouseEvent) => {
    if (onOpenModal) {
      e.preventDefault();
      onOpenModal();
    }
  };

  const handleSelect = (type: QuizType) => {
    setIsAnimating(true);
    setSelected(type);
    setTimeout(() => setIsAnimating(false), 150);
  };

  return (
    <section className="py-12 bg-white border-y border-surface-variant scroll-mt-24" id="quiz">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-surface-container-low via-white to-surface-variant/40 p-6 sm:p-8 rounded-3xl border border-primary-fixed shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-extrabold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">touch_app</span>
                Orientador Digital Rápido
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-on-surface">
                ¿Es el implante subdérmico ideal para ti?
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant">
                Haz click en tu situación actual para conocer la recomendación al instante:
              </p>
            </div>
            <div className="shrink-0 text-xs font-bold text-primary-dark bg-white border border-primary-fixed px-3 py-1.5 rounded-full shadow-sm">
              💡 Sin registro, resultado inmediato
            </div>
          </div>

          {/* Interactive Choices Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              type="button"
              onClick={() => handleSelect("olvidos")}
              className={`quiz-btn text-left p-4 rounded-2xl bg-white border-2 transition-all shadow-sm hover:shadow-md group ${
                selected === "olvidos"
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-surface-variant hover:border-primary"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                  selected === "olvidos"
                    ? "bg-primary text-white"
                    : "bg-primary-fixed/60 text-primary-dark group-hover:bg-primary group-hover:text-white"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">alarm_off</span>
              </div>
              <p className="text-xs font-bold text-on-surface leading-tight">
                Olvido tomar pastillas a diario o a la misma hora
              </p>
              <span className="text-[11px] text-primary font-bold mt-1 inline-block">
                Click para evaluar →
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleSelect("estudios")}
              className={`quiz-btn text-left p-4 rounded-2xl bg-white border-2 transition-all shadow-sm hover:shadow-md group ${
                selected === "estudios"
                  ? "border-secondary ring-2 ring-secondary/20"
                  : "border-surface-variant hover:border-secondary"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                  selected === "estudios"
                    ? "bg-secondary text-white"
                    : "bg-secondary-fixed/60 text-secondary group-hover:bg-secondary group-hover:text-white"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">school</span>
              </div>
              <p className="text-xs font-bold text-on-surface leading-tight">
                Quiero estudiar o trabajar sin preocuparme por 4 años
              </p>
              <span className="text-[11px] text-secondary font-bold mt-1 inline-block">
                Click para evaluar →
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleSelect("lactancia")}
              className={`quiz-btn text-left p-4 rounded-2xl bg-white border-2 transition-all shadow-sm hover:shadow-md group ${
                selected === "lactancia"
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-surface-variant hover:border-primary"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                  selected === "lactancia"
                    ? "bg-primary text-white"
                    : "bg-surface-variant text-primary-dark group-hover:bg-primary group-hover:text-white"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">child_care</span>
              </div>
              <p className="text-xs font-bold text-on-surface leading-tight">
                Acabo de tener un bebé y estoy en lactancia
              </p>
              <span className="text-[11px] text-primary font-bold mt-1 inline-block">
                Click para evaluar →
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleSelect("hijos")}
              className={`quiz-btn text-left p-4 rounded-2xl bg-white border-2 transition-all shadow-sm hover:shadow-md group ${
                selected === "hijos"
                  ? "border-primary-dark ring-2 ring-primary-dark/20"
                  : "border-surface-variant hover:border-primary-dark"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                  selected === "hijos"
                    ? "bg-primary-dark text-white"
                    : "bg-primary-fixed/40 text-primary-dark group-hover:bg-primary-dark group-hover:text-white"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">favorite</span>
              </div>
              <p className="text-xs font-bold text-on-surface leading-tight">
                Busco máxima tranquilidad y protección continua
              </p>
              <span className="text-[11px] text-primary-dark font-bold mt-1 inline-block">
                Click para evaluar →
              </span>
            </button>
          </div>

          {/* Dynamic Result Box */}
          <div
            className={`mt-4 p-5 rounded-2xl bg-white border border-primary/20 shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
              isAnimating ? "scale-[0.99] opacity-90" : "scale-100 opacity-100"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary-dark shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[24px]">recommend</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-on-surface">
                  {quizData[selected].title}
                </h4>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  {quizData[selected].desc}
                </p>
              </div>
            </div>
            <a
              className="shrink-0 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              href="#contacto"
              onClick={handleBookingClick}
            >
              <span>Agendar Valoración Gratuita</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
