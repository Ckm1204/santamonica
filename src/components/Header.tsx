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
      <div className="bg-gradient-to-r from-primary via-primary-dark to-secondary text-on-primary text-[11px] sm:text-xs py-2 px-3 sm:px-4 text-center font-medium flex items-center justify-center gap-2 shadow-sm">
        <span className="inline-flex w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
        <span className="truncate sm:whitespace-normal">
          ¡Te ayudamos a agendar tu cita fácil y rápido en Hospital Santa Mónica!
        </span>
      </div>

      {/* NAVIGATION HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-surface-variant/80 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 lg:gap-4">
          {/* Logos & Title */}
          <a href="#inicio" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 relative flex-shrink-0">
                <Image
                  src="/images/logo-pasto-salud.png"
                  alt="Logo Pasto Salud E.S.E."
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-sm rounded group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="w-px h-6 sm:h-7 bg-outline-variant hidden sm:block" />
              <div className="w-7 h-7 sm:w-9 sm:h-9 relative flex-shrink-0">
                <Image
                  src="/images/logo-ucc.png"
                  alt="Logo UCC"
                  width={36}
                  height={36}
                  className="w-7 h-7 sm:w-9 sm:h-9 object-contain drop-shadow-sm rounded group-hover:scale-105 transition-transform"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base lg:text-lg text-primary tracking-tight leading-tight group-hover:text-primary-dark transition-colors">
                Pasto Salud E.S.E.
              </span>
              <span className="text-[10px] sm:text-xs text-on-surface-variant font-medium flex items-center gap-1">
                <span>Alianza UCC</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="text-secondary font-bold hidden xs:inline sm:inline">
                  Salud Sexual y Reproductiva
                </span>
                <span className="text-secondary font-bold xs:hidden sm:hidden">SSR</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Capsule - Exact match to design */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-5 bg-[#fff5f9] px-3 xl:px-4 py-1.5 rounded-full border border-pink-200/80 shadow-sm">
            <a
              className="text-[11px] xl:text-xs font-bold text-[#1e293b] hover:text-primary transition-colors whitespace-nowrap"
              href="#contacto"
            >
              Agendar tu Cita Fácil y Rápido
            </a>
            <a
              className="text-[11px] xl:text-xs font-bold text-[#1e293b] hover:text-primary transition-colors whitespace-nowrap"
              href="#metodos"
            >
              Métodos
            </a>
            <a
              className="px-3.5 py-1.5 rounded-full text-[11px] xl:text-xs font-bold text-white bg-gradient-to-r from-[#d9228e] to-[#c2185b] shadow-sm hover:opacity-95 transition-opacity whitespace-nowrap"
              href="#sinoimplant"
            >
              Sinoimplant® 150mg
            </a>
            <a
              className="text-[11px] xl:text-xs font-bold text-[#1e293b] hover:text-primary transition-colors whitespace-nowrap"
              href="#procedimiento"
            >
              Paso a Paso
            </a>
            <a
              className="text-[11px] xl:text-xs font-bold text-[#1e293b] hover:text-primary transition-colors whitespace-nowrap"
              href="#mitos"
            >
              Mitos y Realidades
            </a>
            <a
              className="text-[11px] xl:text-xs font-bold text-[#1e293b] hover:text-primary transition-colors flex items-center gap-1.5 whitespace-nowrap"
              href="#quiz"
            >
              <svg
                className="w-3.5 h-3.5 text-[#0096cc] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
              </svg>
              <span>Test Rápido</span>
            </a>
          </nav>

          {/* Action Button Right - 2 Lines with Calendar icon */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              className="hidden lg:inline-flex items-center gap-2.5 px-4 xl:px-5 py-2 rounded-full bg-gradient-to-r from-[#d9208a] via-[#c01e8a] to-[#9822a6] hover:opacity-95 text-white shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
              href="#contacto"
              onClick={handleBookingClick}
            >
              <span className="material-symbols-outlined text-[19px] text-white shrink-0">
                calendar_today
              </span>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[11px] font-extrabold text-white">
                  Agendar en Hospital
                </span>
                <span className="text-[11px] font-extrabold text-white">
                  Santa Mónica
                </span>
              </div>
            </a>

            {/* Mobile Action Button */}
            <a
              className="lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-full bg-gradient-to-r from-[#d9208a] to-[#9822a6] text-white text-xs font-bold shadow-md cursor-pointer"
              href="#contacto"
              onClick={handleBookingClick}
              aria-label="Agendar Cita"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              <span className="hidden sm:inline text-[11px]">Agendar Cita</span>
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
          <div className="lg:hidden border-t border-surface-variant bg-white px-4 py-4 space-y-2.5 shadow-lg animate-fade-in">
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#fff5f9] text-[#1e293b] border border-pink-200"
              href="#contacto"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">
                calendar_month
              </span>
              <span>Agendar tu Cita Fácil y Rápido</span>
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-xl text-xs font-bold text-[#1e293b] hover:bg-surface-container-low"
              href="#metodos"
            >
              Métodos
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#d9228e] to-[#c2185b] shadow-sm text-center"
              href="#sinoimplant"
            >
              Sinoimplant® 150mg
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-xl text-xs font-bold text-[#1e293b] hover:bg-surface-container-low"
              href="#procedimiento"
            >
              Paso a Paso
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-xl text-xs font-bold text-[#1e293b] hover:bg-surface-container-low"
              href="#mitos"
            >
              Mitos y Realidades
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-[#1e293b] hover:bg-surface-container-low"
              href="#quiz"
            >
              <svg
                className="w-4 h-4 text-[#0096cc] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
              </svg>
              <span>Test Rápido</span>
            </a>
            <div className="pt-2 border-t border-surface-variant">
              <a
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleBookingClick(e);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-[#d9208a] to-[#9822a6] text-white text-xs font-extrabold shadow-md"
                href="#contacto"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>Agendar en Hospital Santa Mónica</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
