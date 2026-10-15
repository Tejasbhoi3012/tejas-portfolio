import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="w-full bg-[#060e20] py-20 border-y border-[#2d3449]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
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
              [SYS.03 // STACK]
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#dae2fd] font-bold">
              Technical Skills Matrix
            </h2>
          </div>
          <div className="font-mono text-[11px] text-[#bbcabf] flex items-center gap-2">
            <span>CORE PROFICIENCIES &amp; TOOLCHAIN</span>
          </div>
        </motion.div>

        {/* 5-Card Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Languages */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ y: -3 }}
            className="p-6 glass-card rounded-xl flex flex-col gap-4 shadow-xl hud-reticle"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#2d3449]/40">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#4edea3] text-[20px]">code_blocks</span>
                <span className="font-display text-lg text-[#dae2fd] font-bold">Languages</span>
              </div>
              <span className="font-mono text-[11px] text-[#bbcabf]">02 SKILLS</span>
            </div>
            <div className="flex flex-col gap-4">
              {skills.languages.map((lang) => (
                <div key={lang.name} className="flex flex-col gap-1.5">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-[#dae2fd]">{lang.name}</span>
                    <span className="text-[#4edea3] font-bold">{lang.level}</span>
                  </div>
                  <div className="w-full bg-[#2d3449] h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-[#4edea3] h-1.5 rounded-full shadow-[0_0_8px_rgba(78,222,163,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Web Tech */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -3 }}
            className="p-6 glass-card rounded-xl flex flex-col gap-4 shadow-xl hud-reticle"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#2d3449]/40">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">web</span>
                <span className="font-display text-lg text-[#dae2fd] font-bold">Web Tech</span>
              </div>
              <span className="font-mono text-[11px] text-[#bbcabf]">03 SKILLS</span>
            </div>
            <div className="flex flex-col gap-4">
              {skills.webTech.map((item) => (
                <div key={item.name} className="flex flex-col gap-1.5">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-[#dae2fd]">{item.name}</span>
                    <span className="text-[#4cd7f6] font-bold">{item.level}</span>
                  </div>
                  <div className="w-full bg-[#2d3449] h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-[#4cd7f6] h-1.5 rounded-full shadow-[0_0_8px_rgba(76,215,246,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ y: -3 }}
            className="p-6 glass-card rounded-xl flex flex-col gap-4 shadow-xl hud-reticle"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#2d3449]/40">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#c0c1ff] text-[20px]">layers</span>
                <span className="font-display text-lg text-[#dae2fd] font-bold">Frameworks</span>
              </div>
              <span className="font-mono text-[11px] text-[#bbcabf]">03 SKILLS</span>
            </div>
            <div className="flex flex-col gap-4">
              {skills.frameworks.map((fw) => (
                <div key={fw.name} className="flex flex-col gap-1.5">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-[#dae2fd]">{fw.name}</span>
                    <span className="text-[#c0c1ff] font-bold">{fw.level}</span>
                  </div>
                  <div className="w-full bg-[#2d3449] h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${fw.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-[#c0c1ff] h-1.5 rounded-full shadow-[0_0_8px_rgba(192,193,255,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Databases */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            whileHover={{ y: -3 }}
            className="p-6 glass-card rounded-xl flex flex-col gap-4 shadow-xl hud-reticle"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#2d3449]/40">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#4edea3] text-[20px]">database</span>
                <span className="font-display text-lg text-[#dae2fd] font-bold">Databases</span>
              </div>
              <span className="font-mono text-[11px] text-[#bbcabf]">04 SYSTEMS</span>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-1">
              {skills.databases.map((db) => {
                const badgeColor =
                  db.color === 'emerald'
                    ? 'text-[#4edea3]'
                    : db.color === 'cyan'
                    ? 'text-[#4cd7f6]'
                    : db.color === 'indigo'
                    ? 'text-[#c0c1ff]'
                    : 'text-[#bbcabf]';
                return (
                  <motion.div
                    key={db.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="p-3 bg-[#171f33]/90 rounded-lg flex flex-col border border-[#2d3449]/50 hover:border-[#4edea3]/40 transition-colors"
                  >
                    <span className="font-mono text-xs text-[#dae2fd] font-semibold">{db.name}</span>
                    <span className={`font-mono text-[10px] ${badgeColor}`}>{db.type}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Card 5: Tools & Version Control (spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            whileHover={{ y: -3 }}
            className="p-6 glass-card rounded-xl flex flex-col justify-between gap-4 shadow-xl md:col-span-2 lg:col-span-2 hud-reticle"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-[#2d3449]/40">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">construction</span>
                  <span className="font-display text-lg text-[#dae2fd] font-bold">
                    Tools &amp; Version Control
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#bbcabf]">05 UTILITIES</span>
              </div>
              <p className="font-mono text-xs text-[#bbcabf] pt-2">
                Modern software engineering toolchain for source code control, API stress-testing, and distributed collaborative pipelines.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {skills.tools.map((tool) => {
                const iconColor =
                  tool.color === 'emerald'
                    ? 'text-[#4edea3]'
                    : tool.color === 'cyan'
                    ? 'text-[#4cd7f6]'
                    : 'text-[#c0c1ff]';
                return (
                  <motion.div
                    key={tool.name}
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 350 }}
                    className="px-4 py-2 bg-[#171f33]/90 text-[#dae2fd] font-mono text-xs rounded flex items-center gap-2 border border-[#2d3449]/60 hover:border-[#4edea3]/50 transition-colors shadow-sm cursor-default"
                  >
                    <span className={`material-symbols-outlined text-[16px] ${iconColor}`}>
                      {tool.icon}
                    </span>
                    <span>{tool.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
