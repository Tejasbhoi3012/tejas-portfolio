import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Certifications = ({ onOpenCredential }) => {
  const { certification } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full flex flex-col gap-10 relative">
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
            [SYS.04 // VERIFICATION]
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#dae2fd] font-bold">
            Certifications &amp; Credentials
          </h2>
        </div>
        <div className="font-mono text-[11px] text-[#bbcabf]">
          CRYPTOGRAPHIC VERIFIED RECORD
        </div>
      </motion.div>

      {/* Verified Credential Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        whileHover={{ y: -3 }}
        className="p-8 glass-card rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl hud-reticle"
      >
        <div className="flex items-start gap-6">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="p-4 bg-[#222a3d] text-[#4edea3] rounded-lg flex items-center justify-center shrink-0 border border-[#4edea3]/25 shadow-[0_0_15px_rgba(78,222,163,0.2)]"
          >
            <span className="material-symbols-outlined text-[36px]">workspace_premium</span>
          </motion.div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-2.5 py-0.5 bg-[#4edea3]/15 text-[#4edea3] font-mono text-[11px] font-bold rounded border border-[#4edea3]/30">
                {certification.badge}
              </span>
              <span className="font-mono text-[11px] text-[#bbcabf]">
                {certification.id}
              </span>
            </div>

            <h3 className="font-display text-2xl text-[#dae2fd] font-bold">
              {certification.title}
            </h3>

            <p className="font-mono text-xs text-[#bbcabf] max-w-2xl leading-relaxed">
              {certification.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {certification.topics.map((topic) => (
                <motion.span
                  key={topic}
                  whileHover={{ scale: 1.08 }}
                  className="px-2.5 py-0.5 bg-[#131b2e] font-mono text-[11px] text-[#4cd7f6] rounded border border-[#00b2d0]/25 cursor-default"
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenCredential}
            className="w-full md:w-auto px-6 py-3 bg-[#222a3d] hover:bg-[#2d3449] hover:border-[#4edea3]/40 text-[#4edea3] font-mono text-xs font-semibold rounded flex items-center justify-center gap-2 transition-all border border-[#2d3449] shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span>Verify Credential</span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
