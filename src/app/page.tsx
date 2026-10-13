"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RightsSection from "@/components/RightsSection";
import QuizSection from "@/components/QuizSection";
import MethodsComparator from "@/components/MethodsComparator";
import SinoimplantSection from "@/components/SinoimplantSection";
import TechnicalSheet from "@/components/TechnicalSheet";
import ProcedureSection from "@/components/ProcedureSection";
import MythsSection from "@/components/MythsSection";
import ContactSection from "@/components/ContactSection";
import InstitutionalSection from "@/components/InstitutionalSection";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-on-surface overflow-x-clip">
      <Header onOpenModal={handleOpenModal} />
      <main className="w-full flex-1">
        <Hero onOpenModal={handleOpenModal} />
        <RightsSection />
        <QuizSection onOpenModal={handleOpenModal} />
        <MethodsComparator />
        <SinoimplantSection onOpenModal={handleOpenModal} />
        <TechnicalSheet />
        <ProcedureSection />
        <MythsSection />
        <ContactSection />
        <InstitutionalSection />
      </main>
      <Footer />
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
