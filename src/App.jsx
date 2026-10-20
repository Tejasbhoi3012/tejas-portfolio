/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { ScrollProgressBar } from './components/layout/ScrollProgressBar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ExperienceEducation } from './components/sections/ExperienceEducation';
import { Projects } from './components/sections/Projects';
import { SkillsMatrix } from './components/sections/SkillsMatrix';
import { Certifications } from './components/sections/Certifications';
import { ContactSection } from './components/sections/ContactSection';
import { ArchitectureModal } from './components/modals/ArchitectureModal';
import { DemoModal } from './components/modals/DemoModal';
import { CertificateModal } from './components/modals/CertificateModal';
import { InteractiveTerminal } from './components/modals/InteractiveTerminal';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [architectureModalOpen, setArchitectureModalOpen] = useState(false);
  const [demoModalType, setDemoModalType] = useState(null);
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // IntersectionObserver for tracking active navigation section
  useEffect(() => {
    const sectionIds = ['about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen flex flex-col justify-between selection:bg-[#10b981] selection:text-[#00422b] relative overflow-x-hidden">
      {/* Scroll Progress Bar at very top */}
      <ScrollProgressBar />

      {/* Ambient HUD Scanline Overlay */}
      <div className="fixed inset-0 scanline-bg pointer-events-none z-40 opacity-30"></div>

      {/* Header */}
      <Header
        activeSection={activeSection}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Container */}
      <main className="w-full pt-20 bg-[#0b1326] flex-grow relative">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] bg-[#4edea3]/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse"></div>
        <div className="absolute top-[35rem] right-10 w-[35rem] h-[35rem] bg-[#3131c0]/15 rounded-full blur-[160px] pointer-events-none -z-10"></div>
        <div className="absolute top-[80rem] left-10 w-[30rem] h-[30rem] bg-[#00b2d0]/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>
        <div className="absolute top-[120rem] right-1/4 w-[32rem] h-[32rem] bg-[#4edea3]/8 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        {/* 1. Hero Profile Section */}
        <Hero />

        {/* 2. Experience & Education Dual Timeline */}
        <ExperienceEducation />

        {/* 3. Featured Projects */}
        <Projects
          onOpenArchitecture={() => setArchitectureModalOpen(true)}
          onOpenStoreRatingDemo={() => setDemoModalType('store_rating')}
          onOpenTravelPlannerDemo={() => setDemoModalType('travel_planner')}
        />

        {/* 4. Technical Skills Matrix */}
        <SkillsMatrix />

        {/* 5. Certifications & Credentials */}
        <Certifications
          onOpenCredential={() => setCertificateModalOpen(true)}
        />

        {/* 6. Get In Touch Communication Hub */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Dialogs */}
      <ArchitectureModal
        isOpen={architectureModalOpen}
        onClose={() => setArchitectureModalOpen(false)}
      />

      <DemoModal
        type={demoModalType}
        onClose={() => setDemoModalType(null)}
      />

      <CertificateModal
        isOpen={certificateModalOpen}
        onClose={() => setCertificateModalOpen(false)}
      />

      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
