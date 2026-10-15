import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ProjectsProps {
  onOpenArchitecture: () => void;
  onOpenStoreRatingDemo: () => void;
  onOpenTravelPlannerDemo: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  onOpenArchitecture,
  onOpenStoreRatingDemo,
  onOpenTravelPlannerDemo,
}) => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full flex flex-col gap-12 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[11px] text-[#4edea3] uppercase tracking-widest glitch-text cursor-default">
            [SYS.02 // REPOSITORIES]
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#dae2fd] font-bold">
            Featured Projects
          </h2>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-[#bbcabf]">
          <span>DEPLOYED ARCHITECTURES</span>
          <span className="text-[#4edea3] font-bold">(03)</span>
        </div>
      </motion.div>

      {/* Grid of Projects with Staggered Scroll Entrance */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Project 1: Skin Analysis (8 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 90 }}
          whileHover={{ y: -4 }}
          className="lg:col-span-8 p-8 glass-card rounded-xl flex flex-col justify-between gap-8 shadow-xl relative overflow-hidden group hud-reticle"
        >
          <div className="absolute top-0 right-0 px-4 py-1.5 font-mono text-[10px] text-[#bbcabf] bg-[#222a3d] border-b border-l border-[#2d3449]/50 rounded-bl group-hover:text-[#4edea3] transition-colors">
            PRJ_01 // HEALTHCARE_AI
          </div>

          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2d3449] text-[#4cd7f6] font-mono text-[11px] rounded w-fit border border-[#00b2d0]/25">
              <span className="material-symbols-outlined text-[14px]">psychology</span>
              <span>Gemini Vision API &amp; Multimodal AI</span>
            </div>

            <h3 className="font-display text-2xl text-[#dae2fd] font-bold group-hover:text-[#4edea3] transition-colors">
              AI-Powered Skin Analysis &amp; Doctor Recommendation System
            </h3>

            <p className="font-mono text-sm text-[#bbcabf] leading-relaxed">
              Comprehensive healthcare web platform engineering automated dermatological analysis. Users upload skin imagery for instant severity assessment and disease screening powered by generative machine intelligence.
            </p>

            {/* 4 Feature Sub-cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-[#131b2e]/80 rounded-lg flex flex-col gap-1 border border-[#2d3449]/40 hover:border-[#4edea3]/40 transition-all hover:bg-[#131b2e]">
                <span className="font-mono text-[11px] text-[#4edea3] font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">document_scanner</span>
                  <span>Automated Diagnostics</span>
                </span>
                <span className="font-mono text-[11px] text-[#bbcabf]">
                  Integrated Google Gemini API for medical image diagnosis &amp; severity classification.
                </span>
              </div>

              <div className="p-3.5 bg-[#131b2e]/80 rounded-lg flex flex-col gap-1 border border-[#2d3449]/40 hover:border-[#4cd7f6]/40 transition-all hover:bg-[#131b2e]">
                <span className="font-mono text-[11px] text-[#4cd7f6] font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">chat</span>
                  <span>AI Skincare Chatbot</span>
                </span>
                <span className="font-mono text-[11px] text-[#bbcabf]">
                  Real-time intelligent conversational agent providing personalized patient guidance.
                </span>
              </div>

              <div className="p-3.5 bg-[#131b2e]/80 rounded-lg flex flex-col gap-1 border border-[#2d3449]/40 hover:border-[#c0c1ff]/40 transition-all hover:bg-[#131b2e]">
                <span className="font-mono text-[11px] text-[#c0c1ff] font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">distance</span>
                  <span>Geo-Location Routing</span>
                </span>
                <span className="font-mono text-[11px] text-[#bbcabf]">
                  Google Maps API integration for matching patients to nearby certified dermatologists.
                </span>
              </div>

              <div className="p-3.5 bg-[#131b2e]/80 rounded-lg flex flex-col gap-1 border border-[#2d3449]/40 hover:border-[#dae2fd]/40 transition-all hover:bg-[#131b2e]">
                <span className="font-mono text-[11px] text-[#dae2fd] font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">security</span>
                  <span>Enterprise Security</span>
                </span>
                <span className="font-mono text-[11px] text-[#bbcabf]">
                  Google OAuth 2.0 authentication, REST micro-backend, and MongoDB Atlas database.
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 pt-4">
            <div className="flex flex-wrap gap-2">
              {['Google Gemini AI', 'React', 'Node.js', 'MongoDB Atlas', 'Google OAuth 2.0', 'Google Maps API'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-[#222a3d] text-[#dae2fd] font-mono text-[11px] rounded border border-[#2d3449] hover:border-[#4edea3]/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#4edea3] text-[#003824] font-mono text-xs font-bold rounded flex items-center gap-2 hover:bg-[#10b981] transition-all shadow-[0_0_15px_rgba(78,222,163,0.3)]"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                <span>GitHub Repo</span>
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenArchitecture}
                className="px-5 py-2.5 bg-[#222a3d] text-[#dae2fd] font-mono text-xs font-semibold rounded flex items-center gap-2 hover:bg-[#2d3449] hover:border-[#4edea3]/40 transition-all border border-[#2d3449] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">account_tree</span>
                <span>Architecture Overview</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Project 2: Store Rating Platform (4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, type: 'spring', stiffness: 90 }}
          whileHover={{ y: -4 }}
          className="lg:col-span-4 p-8 glass-card rounded-xl flex flex-col justify-between gap-6 shadow-xl relative group hud-reticle"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between font-mono text-[11px] text-[#bbcabf]">
              <span className="group-hover:text-[#c0c1ff] transition-colors">PRJ_02 // RELATIONAL_DB</span>
              <span className="text-[#c0c1ff] font-bold">RBAC</span>
            </div>

            <h3 className="font-display text-2xl text-[#dae2fd] font-bold group-hover:text-[#c0c1ff] transition-colors">
              Store Rating Platform
            </h3>

            <p className="font-mono text-xs text-[#bbcabf] leading-relaxed">
              Multi-role relational full-stack system engineered for customer store feedback. Designed with strict RBAC paradigms separating Normal Users, Store Owners, and System Administrators.
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <div className="p-2.5 bg-[#131b2e]/80 font-mono text-xs text-[#bbcabf] flex items-center gap-2 rounded border border-[#2d3449]/40 hover:border-[#c0c1ff]/30 transition-colors">
                <span className="material-symbols-outlined text-[#c0c1ff] text-[16px]">admin_panel_settings</span>
                <span>Role-Based Access Control (Admin / Owner / User)</span>
              </div>
              <div className="p-2.5 bg-[#131b2e]/80 font-mono text-xs text-[#bbcabf] flex items-center gap-2 rounded border border-[#2d3449]/40 hover:border-[#c0c1ff]/30 transition-colors">
                <span className="material-symbols-outlined text-[#c0c1ff] text-[16px]">query_stats</span>
                <span>Admin metrics dashboards with sorting &amp; filtering</span>
              </div>
              <div className="p-2.5 bg-[#131b2e]/80 font-mono text-xs text-[#bbcabf] flex items-center gap-2 rounded border border-[#2d3449]/40 hover:border-[#c0c1ff]/30 transition-colors">
                <span className="material-symbols-outlined text-[#c0c1ff] text-[16px]">dataset</span>
                <span>PostgreSQL normalized schema design</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 pt-2">
            <div className="flex flex-wrap gap-2">
              {['PostgreSQL', 'Node.js', 'Express.js', 'React', 'Analytics'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-[#222a3d] text-[#dae2fd] font-mono text-[11px] rounded border border-[#2d3449]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-2.5 bg-[#222a3d] text-[#dae2fd] font-mono text-xs font-semibold rounded hover:bg-[#2d3449] transition-colors flex items-center justify-center gap-2 border border-[#2d3449]"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                <span>Source Code</span>
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenStoreRatingDemo}
                className="w-full text-center px-4 py-2.5 bg-[#3131c0] text-[#dae2fd] font-mono text-xs font-bold rounded hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-sm border border-[#c0c1ff]/30 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">visibility</span>
                <span>View Demo</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Project 3: Travel Planning Web App (12 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.25, type: 'spring', stiffness: 90 }}
          whileHover={{ y: -3 }}
          className="lg:col-span-12 p-8 glass-card rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl group hud-reticle"
        >
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-[#2d3449] text-[#4cd7f6] font-mono text-[11px] rounded border border-[#00b2d0]/25">
                PRJ_03 // SMART_ITINERARY
              </span>
              <span className="font-mono text-[11px] text-[#4edea3] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-ping"></span>
                REAL-TIME SYNC
              </span>
            </div>

            <h3 className="font-display text-2xl text-[#dae2fd] font-bold group-hover:text-[#4edea3] transition-colors">
              AI-Based Travel Planning Web App
            </h3>

            <p className="font-mono text-sm text-[#bbcabf] leading-relaxed">
              Smart itinerary generation application that aggregates personal traveler constraints, budgets, and location preferences to produce dynamically orchestrated daily plans via generative AI APIs.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {['React', 'Tailwind CSS', 'OpenAI / Gemini', 'Firebase Auth & Realtime DB'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-[#131b2e] font-mono text-[11px] text-[#dae2fd] rounded border border-[#2d3449]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col shrink-0 gap-3 w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenTravelPlannerDemo}
              className="px-6 py-3 bg-[#4edea3] text-[#003824] font-mono text-xs font-bold rounded flex items-center justify-center gap-2 hover:bg-[#10b981] transition-all shadow-[0_0_15px_rgba(78,222,163,0.3)] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">explore</span>
              <span>Explore App</span>
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#222a3d] text-[#dae2fd] font-mono text-xs font-semibold rounded flex items-center justify-center gap-2 hover:bg-[#2d3449] transition-all border border-[#2d3449]"
            >
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              <span>Codebase</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
