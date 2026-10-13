"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Header({ onOpenModal }: { onOpenModal?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBookingClick = (e: React.MouseEvent) => {
    if (onOpenModal) {
      e.preventDefault();
      onOpenModal();
    }
  };

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-primary via-primary-dark to-secondary text-on-primary text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 shadow-sm">
        <span className="inline-flex w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
        <span>¡Te ayudamos a agendar tu cita fácil y rápido en Hospital Santa Mónica!</span>
      </div>

      {/* NAVIGATION HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-surface-variant/80 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logos & Title */}
          <a href="#inicio" className="flex items-center gap-3 shrink-0 group">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image
                  src="/images/logo-pasto-salud.png"
                  alt="Logo Pasto Salud E.S.E."
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain drop-shadow-sm rounded group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="w-px h-7 bg-outline-variant hidden sm:block" />
              <div className="w-9 h-9 relative flex-shrink-0">
                <Image
                  src="/images/logo-ucc.png"
                  alt="Logo UCC"
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain drop-shadow-sm rounded group-hover:scale-105 transition-transform"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg text-primary tracking-tight leading-tight group-hover:text-primary-dark transition-colors">
                Pasto Salud E.S.E.
              </span>
              <span className="text-xs text-on-surface-variant font-medium flex items-center gap-1">
                <span>Alianza UCC</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="text-secondary font-bold">Salud Sexual y Reproductiva</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-surface-container-low p-1.5 rounded-full border border-surface-variant">
            <a
              className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-primary-fixed text-primary-dark hover:bg-white transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
              href="#contacto"
              onClick={handleBookingClick}
            >
              <span className="material-symbols-outlined text-[15px]">calendar_month</span>
              Agenda tu Cita Fácil y Rápido
            </a>
            <a
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-on-surface-variant hover:text-primary hover:bg-white transition-colors"
              href="#metodos"
            >
              Métodos
            </a>
            <a
              className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-primary text-on-primary shadow-sm hover:bg-primary-dark transition-colors"
              href="#sinoimplant"
            >
              Sinoimplant® 150mg
            </a>
            <a
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-on-surface-variant hover:text-primary hover:bg-white transition-colors"
              href="#procedimiento"
            >
              Paso a Paso
            </a>
            <a
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-on-surface-variant hover:text-primary hover:bg-white transition-colors"
              href="#mitos"
            >
              Mitos y Realidades
            </a>
            <a
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-secondary bg-secondary-fixed hover:bg-secondary hover:text-white transition-colors flex items-center gap-1 shadow-sm"
              href="#quiz"
            >
              <span className="material-symbols-outlined text-[15px]">quiz</span>
              Test Rápido
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white text-xs font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              href="#contacto"
              onClick={handleBookingClick}
            >
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              <span>Agendar en Hospital Santa Mónica</span>
            </a>
            <a
              className="sm:hidden p-2.5 rounded-full bg-primary text-white shadow-md hover:bg-primary-dark transition-colors cursor-pointer"
              href="#contacto"
              onClick={handleBookingClick}
              aria-label="Agendar Cita"
            >
              <span className="material-symbols-outlined text-[20px]">calendar_today</span>
            </a>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-colors"
              aria-label="Menú principal"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-surface-variant bg-white px-4 py-4 space-y-2 shadow-lg animate-fade-in">
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-primary-fixed text-primary-dark"
              href="#contacto"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              Agenda tu Cita Fácil y Rápido
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-xl text-xs font-bold text-on-surface hover:bg-surface-container-low"
              href="#metodos"
            >
              Métodos Anticonceptivos
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-xl text-xs font-bold text-primary hover:bg-surface-container-low"
              href="#sinoimplant"
            >
              Sinoimplant® 150mg
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-xl text-xs font-bold text-on-surface hover:bg-surface-container-low"
              href="#ficha-tecnica"
            >
              Ficha Técnica y Farmacología
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-xl text-xs font-bold text-on-surface hover:bg-surface-container-low"
              href="#procedimiento"
            >
              Paso a Paso de Colocación
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-xl text-xs font-bold text-on-surface hover:bg-surface-container-low"
              href="#mitos"
            >
              Mitos y Realidades
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-secondary bg-secondary-fixed/50"
              href="#quiz"
            >
              <span className="material-symbols-outlined text-[18px]">quiz</span>
              Test Rápido
            </a>
          </div>
        )}
      </header>
    </>
  );
}
