import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-surface-variant py-12 text-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image
                  src="/images/logo-pasto-salud.png"
                  alt="Pasto Salud"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="font-extrabold text-primary-dark text-sm">
                Pasto Salud E.S.E.
              </span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Empresa Social del Estado orientada a garantizar el bienestar integral
              y los derechos sexuales y reproductivos con calidez y rigor científico.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-on-surface">
              Convenio
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Universidad Cooperativa de Colombia (UCC), Campus Pasto. Promoviendo la
              salud comunitaria a través de la educación basada en evidencia.
            </p>
          </div>

          {/* Col 3 */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-on-surface">
              Sede de Atención
            </h4>
            <p className="text-xs font-bold text-on-surface">Hospital Santa Mónica</p>
            <p className="text-xs text-on-surface-variant">
              Servicio de Planificación Familiar y Consejería SSR.
            </p>
          </div>

          {/* Col 4 */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-on-surface">
              Responsabilidad Médica
            </h4>
            <div className="p-3 rounded-2xl bg-surface-container-low border border-surface-variant">
              <p className="text-xs font-bold text-primary-dark">
                Hecho por Carolina Palacios
              </p>
              <p className="text-[11px] text-on-surface-variant">
                Iniciativa pedagógica en salud sexual y reproductiva
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 border-t border-surface-variant text-[11px] text-on-surface-variant leading-relaxed space-y-2">
          <p>
            <strong>Aviso Farmacológico:</strong> Información técnica adaptada de la ficha
            farmacológica oficial de <em>Sinoimplant® (Levonorgestrel 150 mg)</em> de
            Shanghai Dahua Pharmaceuticals Co., Ltd. La inserción y manejo clínico son
            actos médicos reservados a personal de salud capacitado. Todo método
            anticonceptivo requiere consejería previa individualizada.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2">
            <div className="flex items-center gap-4 text-xs font-bold text-primary-dark">
              <span>✓ Procedimiento Totalmente Gratuito</span>
              <span>✓ Confidencialidad Garantizada</span>
            </div>
            <p className="text-[10px] text-on-surface-variant">
              © 2026 Pasto Salud E.S.E. · Alianza UCC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
