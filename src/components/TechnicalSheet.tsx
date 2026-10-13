import React from "react";
import Image from "next/image";

export default function TechnicalSheet() {
  return (
    <section
      className="py-20 lg:py-24 bg-gradient-to-b from-white via-surface-container-low/40 to-white border-b border-surface-variant relative overflow-hidden"
      id="ficha-tecnica"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-fixed/60 text-primary-dark text-xs font-black uppercase tracking-wider shadow-sm">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            Guía Farmacológica y Clínica Oficial
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-on-surface tracking-tight">
            Sinoimplant®{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-dark to-secondary">
              (150 mg)
            </span>
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Información clínica esencial, composición, farmacodinamia, pautas de inserción y
            contraindicaciones de acuerdo con el prospecto médico oficial avalado.
          </p>
        </div>

        {/* Hero Showcase Card with Official Product Box Image */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-primary-fixed shadow-xl shadow-primary/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative group max-w-xs sm:max-w-sm w-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
                <div className="relative bg-gradient-to-b from-surface-container-low to-white p-6 rounded-3xl border border-surface-variant shadow-lg text-center">
                  <div className="relative w-full h-64">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4ehDTGkU6GfO1f_dVJfKIgCi_oWuDHQBeiiaL48Zhha0mo3fzMZN5CWWjA22H1ZMHmStjyw_jp13TDB-VMr2YXJIWktLPee4bjMwQSNmjyHluAf_PgQHBAf_kzBw9pe_gJ3BNYSiK6rh4MMF3IhrejsRBfPxgPqt2bXvJmB7KS8lxTnjhCH3t2o8K2fJuwdeQhQlaM8FnSK8-AmxjWoXGaLaRcb_w-dzXHOsE6brTCj-cG04OZfKcgoEuyL75m05ZeA"
                      alt="Caja oficial de Sinoimplant 150 mg Levonorgestrel"
                      fill
                      sizes="(max-width: 640px) 100vw, 320px"
                      className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 pt-3 border-t border-surface-variant flex items-center justify-between text-xs">
                    <span className="font-black text-primary-dark flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        medication
                      </span>
                      Set Original
                    </span>
                    <span className="font-bold text-on-surface-variant text-[11px]">
                      Shanghai Dahua / Abbott
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-bold uppercase">
                  <span className="material-symbols-outlined text-[16px]">
                    fingerprint
                  </span>
                  Autenticidad Farmacéutica
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-on-surface">
                  Pautas de Uso Inicial e Inserción
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Sinoimplant® está compuesto por dos varillas subdérmicas de elastómero
                  de silicona selladas que liberan levonorgestrel cristalino en microdosis
                  continuas. Garantiza la más alta protección anticonceptiva con independencia
                  absoluta de la memoria de la paciente.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-variant text-center">
                  <span className="block text-xs font-black uppercase text-primary-dark">
                    Dosis Total
                  </span>
                  <span className="text-xl font-black text-on-surface mt-0.5 block">
                    150 mg
                  </span>
                  <span className="text-[11px] text-on-surface-variant font-medium">
                    2 varillas de 75 mg c/u
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-variant text-center">
                  <span className="block text-xs font-black uppercase text-secondary">
                    Eficacia Clínica
                  </span>
                  <span className="text-xl font-black text-on-surface mt-0.5 block">
                    &gt;99%
                  </span>
                  <span className="text-[11px] text-on-surface-variant font-medium">
                    Tasa de fallo &lt;0.5/1000
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-variant text-center">
                  <span className="block text-xs font-black uppercase text-primary-dark">
                    Cobertura
                  </span>
                  <span className="text-xl font-black text-on-surface mt-0.5 block">
                    4 Años
                  </span>
                  <span className="text-[11px] text-on-surface-variant font-medium">
                    100% reversible al retiro
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Cards: Puntos 1, 2, 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Punto 01: Composición Cuantitativa */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-primary-fixed shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary-dark shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">science</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary-dark">
                      Punto 01
                    </span>
                    <h3 className="text-xl font-bold text-on-surface">
                      1. Composición Cuantitativa
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-extrabold">
                  2 Varillas
                </span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Cada implante contiene <strong>Levonorgestrel 75 mg</strong> en dos (2)
                varillas flexibles de polímero, para un <strong>total de 150 mg</strong> de
                principio activo. Excipientes c.s.p.
              </p>
              {/* Dosis release progression */}
              <div className="p-5 rounded-2xl bg-surface-container-low/80 border border-surface-variant space-y-3">
                <span className="text-xs font-black uppercase tracking-wider text-primary-dark block">
                  Cinética de Liberación Hormonal
                </span>
                <div className="space-y-2 text-xs text-on-surface">
                  <div className="flex justify-between items-center py-1 border-b border-surface-variant/60">
                    <span className="font-medium text-on-surface-variant">
                      Tasa inicial post-inserción:
                    </span>
                    <span className="font-black text-primary-dark text-sm">~85 mcg/día</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-surface-variant/60">
                    <span className="font-medium text-on-surface-variant">
                      A los 9 meses de uso:
                    </span>
                    <span className="font-bold text-on-surface text-sm">~50 mcg/día</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-surface-variant/60">
                    <span className="font-medium text-on-surface-variant">
                      A los 3 años de uso:
                    </span>
                    <span className="font-bold text-secondary text-sm">~30 mcg/día</span>
                  </div>
                </div>
                <p className="text-[11px] text-primary font-bold pt-1">
                  Eficacia sostenida y estable durante 4 años continuos de protección.
                </p>
              </div>
            </div>
          </div>

          {/* Punto 02 y 04: Vía & Indicaciones con imagen visual médica */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-secondary-fixed shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-secondary-fixed flex items-center justify-center text-secondary shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">vaccines</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-secondary">
                      Punto 02 y 04
                    </span>
                    <h3 className="text-xl font-bold text-on-surface">
                      2. Vía &amp; 4. Indicaciones
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary-fixed text-secondary text-xs font-extrabold">
                  Subdérmica
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-7 space-y-3">
                  <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-variant space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-primary-dark block">
                      Vía de Administración
                    </span>
                    <p className="text-xs font-bold text-on-surface flex items-start gap-1.5 leading-snug">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                        check_circle
                      </span>
                      Subcutánea (subdérmica en cara medial del brazo no dominante, 6-8 cm
                      sobre el codo).
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-variant space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-secondary block">
                      Indicaciones Terapéuticas
                    </span>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Mujeres en edad fértil que deseen utilizar anticoncepción hormonal
                      altamente confiable y reversible a largo plazo (hasta 4 años ininterrumpidos).
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-surface-variant shadow-sm bg-surface-container-low">
                  <div className="relative w-full h-40">
                    <Image
                      src="https://lh3.googleusercontent.com/aida/AEtjO1Xq_Q5FXtNpIKAcsc3fJm7cWABnFWXSpw769RJOhtpu041UuXBz8Re39KKNe1u5WjuHxQ3e8pGT76y1op1tfZdahjei4HPbjpav103wgCaQlBLnqSn1J_4iE2j-J3Wvxj1-eIfr9AHOUWvkz2C5bzqty8ZADwxTVCgBSJbkE8GkzD69yULQrTcswNSbhKOZPCiWxRsJeMxMVkVNm38WMk4l8eI_9LA8f7T6dwl2uY9Ej-GtI058xcv-jEg"
                      alt="Ilustración médica de inserción subdérmica en brazo"
                      fill
                      sizes="(max-width: 640px) 100vw, 200px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-2 text-center text-[10px] font-bold text-on-surface-variant bg-white border-t border-surface-variant">
                    Inserción subdérmica en abanico
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Punto 03: Acción Farmacológica (Mecanismo Triple Destacado) */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-white via-surface-container-low to-primary-fixed/20 border-2 border-primary-fixed shadow-md space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-surface-variant">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary to-primary-dark text-white flex items-center justify-center shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[28px]">biotech</span>
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-primary-dark">
                  Punto 03
                </span>
                <h3 className="text-2xl font-black text-on-surface">
                  3. Acción Farmacológica
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant font-medium mt-0.5">
                  Mecanismo de acción triple simultáneo
                </p>
              </div>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-white text-primary-dark border border-primary-fixed text-xs font-black shadow-sm">
              Eficacia &gt;99% independiente del cumplimiento diario
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden bg-white border-2 border-primary-fixed shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="relative overflow-hidden bg-surface-container-low w-full aspect-[4/3]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJTEKnDux87v5bM0YROdc5fr6ZektoDofXEjQPFoovUxMV7wC725HLj1AN-6ZyDNh-WNP-_8oBwb7P1-gaLy7qM_elMDL7bz05n5Df6sSjAGllprE3dn45lloSZGHyeL943qumaXoZliLewn0s9vJnCfStmKP3GmBdZs0cCe9HNrTY1BjPD-_XzrUG1maEmftLiJIgXon3s6tk3fEYcB-O57bWHqIU5LZphktEXYOHR3vzXeX8SJOJAgIhqiv0Fb2m6g"
                  alt="Punto 01 - Inhibe la ovulación"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-500 rounded-3xl p-2"
                />
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden bg-white border-2 border-primary-fixed shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="relative overflow-hidden bg-surface-container-low w-full aspect-[4/3]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_466wUEEU4iuGXS4cKA8az-mYo6t4JlCvoeWXDe2lwnAVHUSEPF_kSVsJ34z3vD_ZNavuKIV03ZAURBnusTrAfujQ5MjZ6TJeX0K8rSsGqD9XapEGmkUR6knE16ie2DFEsr4K9hV5n1qzv_v6BoczkRbW1OadAfgRJ2Xeb5ISmcswggl6kjaoNfCeZc3_18ZRFjyu3rcwTaeYzDIgWIdbhHf5R7rIIRrq5-qhnQxycEMMjSRrfix12kVEq8G3Y6KhRw"
                  alt="Punto 02 - Espesa el moco cervical"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-500 rounded-3xl p-2"
                />
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden bg-white border-2 border-primary-fixed shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="relative overflow-hidden bg-surface-container-low w-full aspect-[4/3]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzIkcBspGtuWzDb17iE6PEIuwpscTyi8hgI63I71iBZYYBHEsk1T-c7DPhadnpt-J3uLK-g7SE7VlGt1pxy6rekRedVvvGQ98tdby1A0H6Pzsf3wUCaCYItrp4RpBr9n4cSFcQNQrtKxHqH8IB5MT9QOtmExMaujLEk2ESKwJtryH-g4J0NHo29MGGRRuqrK-2oU-YrGptdR-DICrYA1PtnGOHNs568tY6GsdsgiV8_acuoTFp9IWRsk9--X8pqBdEBw"
                  alt="Punto 03 - Delgadez del endometrio"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-500 rounded-3xl p-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Grid Cards: Punto 5 (Pautas de Inserción) & Punto 6 (Contraindicaciones) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Punto 04: Pautas de Uso Inicial e Inserción (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border-2 border-primary-fixed shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-surface-variant">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary-dark shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">
                    event_available
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-primary-dark">
                    Punto 04
                  </span>
                  <h3 className="text-xl font-bold text-on-surface">
                    4. Pautas de Uso Inicial e Inserción
                  </h3>
                </div>
              </div>
              <span className="text-xs font-bold text-primary-dark bg-primary-fixed/40 px-3.5 py-1.5 rounded-full border border-primary-fixed">
                Criterios de Oportunidad Clínica
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-variant space-y-2">
                <h4 className="font-bold text-primary-dark flex items-center gap-1.5 text-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    calendar_today
                  </span>
                  Inicio Regular del Ciclo
                </h4>
                <p className="text-on-surface-variant leading-relaxed text-[11px]">
                  Preferentemente durante los <strong>primeros 7 días</strong> del ciclo
                  menstrual (desde el inicio del sangrado). Si se inserta en otro momento,
                  debe descartarse embarazo de forma fiable y usar método de barrera
                  (preservativo) por 7 días.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-variant space-y-2">
                <h4 className="font-bold text-secondary flex items-center gap-1.5 text-sm">
                  <span className="material-symbols-outlined text-[18px]">sync_alt</span>
                  Cambio desde Anticonceptivo Previo
                </h4>
                <p className="text-on-surface-variant leading-relaxed text-[11px]">
                  <strong>Desde oral combinado:</strong> Insertar inmediatamente al día
                  siguiente de tomar la última tableta hormonalmente activa.{" "}
                  <strong>Desde método con progestágeno solo:</strong> Insertar en cualquier
                  momento sin periodo de descanso.
                </p>
              </div>
              <div className="sm:col-span-2 p-4 rounded-2xl bg-surface-container-low border border-surface-variant space-y-2">
                <h4 className="font-bold text-on-surface flex items-center gap-1.5 text-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    family_restroom
                  </span>
                  Postaborto, Posparto y Lactancia
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] text-on-surface-variant pt-1">
                  <div className="p-2.5 rounded-xl bg-white border border-surface-variant">
                    <strong className="text-primary-dark block mb-0.5">Postaborto:</strong>
                    Inserción inmediata (1° o 2° trimestre de gestación).
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-surface-variant">
                    <strong className="text-secondary block mb-0.5">
                      Posparto con lactancia:
                    </strong>
                    A partir de las 6 semanas posparto (o 6 semanas a 6 meses con amenorrea).
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-surface-variant">
                    <strong className="text-on-surface block mb-0.5">
                      Sin lactancia materna:
                    </strong>
                    Antes de los 21 días posparto sin necesidad de método de barrera adicional.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Punto 05: Contraindicaciones Clínicas (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-error-container/40 border-2 border-error/30 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-error/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-error text-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">warning</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-on-error-container">
                      Punto 05
                    </span>
                    <h3 className="text-xl font-bold text-on-surface">
                      5. Contraindicaciones Clínicas
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-white text-on-error-container border border-error/20 text-[10px] font-black uppercase">
                  Criterio Médico
                </span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                No debe colocarse ni mantenerse bajo las siguientes condiciones clínicas:
              </p>
              <ul className="space-y-2 text-xs text-on-surface">
                <li className="flex items-start gap-2 bg-white/60 p-2 rounded-xl border border-error/10">
                  <span className="material-symbols-outlined text-error text-[16px] shrink-0 mt-0.5">
                    cancel
                  </span>
                  <span>Embarazo confirmado o sospecha del mismo.</span>
                </li>
                <li className="flex items-start gap-2 bg-white/60 p-2 rounded-xl border border-error/10">
                  <span className="material-symbols-outlined text-error text-[16px] shrink-0 mt-0.5">
                    cancel
                  </span>
                  <span>Hipersensibilidad al levonorgestrel o a los excipientes de la fórmula.</span>
                </li>
                <li className="flex items-start gap-2 bg-white/60 p-2 rounded-xl border border-error/10">
                  <span className="material-symbols-outlined text-error text-[16px] shrink-0 mt-0.5">
                    cancel
                  </span>
                  <span>Cáncer de mama actual o antecedente confirmado del mismo.</span>
                </li>
                <li className="flex items-start gap-2 bg-white/60 p-2 rounded-xl border border-error/10">
                  <span className="material-symbols-outlined text-error text-[16px] shrink-0 mt-0.5">
                    cancel
                  </span>
                  <span>Enfermedad hepática grave, aguda, infecciones o tumores hepáticos activos.</span>
                </li>
                <li className="flex items-start gap-2 bg-white/60 p-2 rounded-xl border border-error/10">
                  <span className="material-symbols-outlined text-error text-[16px] shrink-0 mt-0.5">
                    cancel
                  </span>
                  <span>Enfermedad tromboembólica activa (TEV / embolia pulmonar activa).</span>
                </li>
                <li className="flex items-start gap-2 bg-white/60 p-2 rounded-xl border border-error/10">
                  <span className="material-symbols-outlined text-error text-[16px] shrink-0 mt-0.5">
                    cancel
                  </span>
                  <span>Sangrado genital o vaginal inexplicado o no diagnosticado previamente.</span>
                </li>
                <li className="flex items-start gap-2 bg-white/60 p-2 rounded-xl border border-error/10">
                  <span className="material-symbols-outlined text-error text-[16px] shrink-0 mt-0.5">
                    cancel
                  </span>
                  <span>Lupus eritematoso sistémico con anticuerpos antifosfolípidos positivos o desconocidos.</span>
                </li>
              </ul>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-error/20 text-on-error-container text-xs font-bold text-center">
              Requiere valoración médica previa individualizada en Hospital Santa Mónica.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
