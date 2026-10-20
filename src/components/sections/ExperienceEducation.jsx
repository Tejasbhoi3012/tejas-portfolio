import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const ExperienceEducation = () => {
  const { experience, education } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="w-full bg-[#060e20] py-20 border-y border-[#2d3449]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] text-[#4edea3] uppercase tracking-widest glitch-text cursor-default">
              [SYS.01 // TRAJECTORY]
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#dae2fd] font-bold">
              Experience &amp; Education
            </h2>
          </div>
          <p className="font-mono text-xs text-[#bbcabf] max-w-md">
            Verified production engineering tenures, UI system developments, and computational qualifications.
          </p>
        </motion.div>

        {/* Dual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Industry Role (7 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 90 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#bbcabf]">
              <span className="material-symbols-outlined text-[#4edea3] text-[18px]">badge</span>
              <span>INDUSTRY ROLE</span>
            </div>

            <div className="p-8 glass-card rounded-xl flex flex-col gap-6 shadow-xl hud-reticle">
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#2d3449]/40">
                <div className="flex flex-col">
                  <span className="font-display text-xl text-[#dae2fd] font-bold">
                    {experience.role}
                  </span>
                  <span className="font-mono text-sm text-[#4edea3] font-semibold">
                    {experience.company}
                  </span>
                </div>
                <div className="px-3 py-1 bg-[#222a3d] text-[#bbcabf] font-mono text-[11px] rounded self-start sm:self-auto border border-[#2d3449]/60">
                  {experience.period}
                </div>
              </div>

              {/* Responsibilities list with staggered micro-anim */}
              <div className="flex flex-col gap-4 font-mono text-sm text-[#bbcabf]">
                {experience.highlights.map((bullet, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + idx * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 group"
                  >
                    <span className="material-symbols-outlined text-[#4edea3] text-[18px] shrink-0 mt-1 group-hover:scale-125 transition-transform">
                      check_circle
                    </span>
                    <span className="leading-relaxed">
                      {idx === 0 ? (
                        <>
                          Built and refined responsive <strong className="text-[#dae2fd] font-bold">React.js</strong> screens, including a client profile page and a multi-step profile flow with stepper navigation and client-side form validation.
                        </>
                      ) : idx === 1 ? (
                        <>
                          Implemented UI from Figma references with pixel-close visual accuracy, using strict CSS breakpoints to keep layouts consistent across desktop, tablet, and mobile displays.
                        </>
                      ) : (
                        <>
                          Kept the codebase structured and maintainable by architecting a shared dashboard layout component and standardizing a single local SVG icon set across all platform views.
                        </>
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['React.js', 'CSS Breakpoints', 'Figma to Code', 'Component Architecture', 'Form Validation'].map((tag, i) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: 'spring', stiffness: 350 }}
                    className="px-3 py-1 bg-[#222a3d] font-mono text-[11px] text-[#dae2fd] rounded border border-[#2d3449] hover:border-[#4edea3]/40 cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Academic Foundation (5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 90 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#bbcabf]">
              <span className="material-symbols-outlined text-[#c0c1ff] text-[18px]">school</span>
              <span>ACADEMIC FOUNDATION</span>
            </div>

            <div className="p-8 glass-card rounded-xl flex flex-col justify-between h-full gap-6 shadow-xl hud-reticle">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-2">
                  <span className="px-3 py-1 bg-[#171f33] text-[#c0c1ff] font-mono text-[11px] rounded border border-[#3131c0]/40">
                    {education.period}
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[#3131c0] text-[#dae2fd] font-mono text-[11px] font-bold rounded shadow-sm border border-[#c0c1ff]/30">
                    <span className="material-symbols-outlined text-[14px]">star</span>
                    <span>CGPA: {education.cgpa}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <h3 className="font-display text-xl text-[#dae2fd] font-bold leading-snug">
                    {education.degree}
                  </h3>
                  <p className="font-mono text-sm text-[#bbcabf]">
                    {education.institution}
                  </p>
                </div>

                <div className="font-mono text-xs text-[#bbcabf] space-y-2 pt-2">
                  <p>{education.coursework}</p>
                </div>
              </div>

              {/* Status bar */}
              <div className="p-4 bg-[#171f33]/90 rounded-lg flex items-center justify-between border border-[#2d3449]/60">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] text-[24px]">verified</span>
                  <div className="flex flex-col">
                    <span className="font-mono text-[11px] text-[#dae2fd] font-semibold">Undergraduate Status</span>
                    <span className="font-mono text-[10px] text-[#bbcabf]">{education.status}</span>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-[#4edea3] font-bold tracking-wider">ACTIVE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
