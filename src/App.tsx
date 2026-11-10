import React from 'react';
import { DataProvider } from './context/DataContext';
import { TechParticles } from './components/TechParticles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { ServicesSection } from './components/ServicesSection';
import { CVSection } from './components/CVSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CVModal } from './components/CVModal';
import { QuoteModal } from './components/QuoteModal';
import { AdminModal } from './components/AdminModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomNav } from './components/MobileBottomNav';

export default function App() {
  return (
    <DataProvider>
      <div className="min-h-screen relative selection:bg-blue-600 selection:text-white">
        {/* Technological background constellation canvas */}
        <TechParticles />

        {/* Global Navigation Top Bar */}
        <Navbar />

        {/* Main Content Flow */}
        <main className="relative z-10">
          <Hero />
          <About />
          <SkillsSection />
          <ProjectsSection />
          <ExperiencesSection />
          <ServicesSection />
          <CVSection />
          <ContactSection />
        </main>

        {/* Site Footer */}
        <Footer />

        {/* Modals & Overlays */}
        <ProjectDetailModal />
        <CVModal />
        <QuoteModal />
        <AdminModal />

        {/* Floating WhatsApp Quick Action (Desktop & Tablet) */}
        <FloatingWhatsApp />

        {/* Mobile Smartphone Bottom Touch Bar */}
        <MobileBottomNav />
      </div>
    </DataProvider>
  );
}
