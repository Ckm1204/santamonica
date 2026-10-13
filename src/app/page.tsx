import React from "react";
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-on-surface">
      <Header />
      <main className="w-full flex-1">
        <Hero />
        <RightsSection />
        <QuizSection />
        <MethodsComparator />
        <SinoimplantSection />
        <TechnicalSheet />
        <ProcedureSection />
        <MythsSection />
        <ContactSection />
        <InstitutionalSection />
      </main>
      <Footer />
    </div>
  );
}
