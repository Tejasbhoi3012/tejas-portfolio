import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Hero = () => {
  const [latency, setLatency] = useState(14);

  // Typewriter roles
  const roles = [
    'Full Stack Developer & AI Engineer',
    'React.js & Node.js Architect',
    'PostgreSQL & Relational Database Designer',
    'Generative AI & Multimodal Specialist',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Real-time latency ping simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(12 + Math.random() * 5));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 65);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2500);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, 30);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-24 w-full relative">
      {/* Telemetry Status Bar with Motion reveal */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-between gap-4 pb-12"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 glass-card text-[#dae2fd] font-mono text-[11px] tracking-wider uppercase rounded shadow-sm hover:border-[#4edea3]/50 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4edea3]"></span>
            </span>
            SYS_STATUS: Available for new roles &amp; projects
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#131b2e] text-[#4cd7f6] font-mono text-[11px] rounded border border-[#00b2d0]/25">
            <span className="material-symbols-outlined text-[15px]">location_on</span> {PORTFOLIO_DATA.profile.location}
          </span>
        </div>
        <div className="font-mono text-[11px] text-[#bbcabf] flex items-center gap-2">
          <span>HOST: {PORTFOLIO_DATA.profile.hostVersion}</span>
          <span>//</span>
          <span className="text-[#4edea3] font-bold">LATENCY: {latency}ms</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Intro & Headline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-3">
            <div className="font-mono text-[11px] text-[#4edea3] uppercase tracking-widest flex items-center gap-2 glitch-text cursor-default">
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              <span>ENGINEER_CONSOLE // PROFILE_INIT</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl text-[#dae2fd] tracking-tight leading-none font-bold">
              Hi, I'm{' '}
              <span className="text-[#4edea3] underline decoration-[#4edea3]/40 decoration-2 underline-offset-8 glitch-text inline-block cursor-pointer">
                {PORTFOLIO_DATA.profile.name}
              </span>
              <span className="block text-xl sm:text-2xl lg:text-3xl font-display text-[#bbcabf] mt-4 font-normal min-h-[38px] flex items-center">
                <span>{displayedText}</span>
                <span className="terminal-cursor"></span>
              </span>
            </h1>
          </div>

          <p className="font-mono text-sm sm:text-base text-[#bbcabf] max-w-2xl leading-relaxed">
            Full Stack Developer with hands-on experience building scalable web applications using{' '}
            <span className="text-[#dae2fd] font-semibold">React.js, Node.js, Express.js</span>, and{' '}
            <span className="text-[#dae2fd] font-semibold">PostgreSQL</span>. Strong understanding of REST APIs,
            authentication, relational database design, and frontend development. Experienced in AI-integrated
            systems and secure application architecture.
          </p>

          {/* Action CTAs with Motion spring hover */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#4edea3] text-[#003824] font-mono font-bold text-sm tracking-tight rounded shadow-[0_0_25px_rgba(78,222,163,0.4)] hover:bg-[#10b981] hover:text-[#00422b] transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
              <span>View Featured Projects</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#222a3d] text-[#dae2fd] font-mono text-sm font-semibold rounded border border-[#2d3449] hover:bg-[#2d3449] hover:border-[#4edea3]/40 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>Contact Me</span>
            </motion.a>
          </div>

          {/* Quick Info & Social Channels */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-[#bbcabf] font-mono text-[11px]">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="inline-flex items-center gap-1.5 hover:text-[#4edea3] transition-colors group"
            >
              <span className="material-symbols-outlined text-[16px] text-[#4edea3] group-hover:scale-110 transition-transform">mail</span>
              <span>{PORTFOLIO_DATA.profile.email}</span>
            </a>
            <a
              href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 hover:text-[#4edea3] transition-colors group"
            >
              <span className="material-symbols-outlined text-[16px] text-[#4edea3] group-hover:scale-110 transition-transform">phone</span>
              <span>{PORTFOLIO_DATA.profile.phone}</span>
            </a>
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#4edea3] transition-colors group"
            >
              <span className="material-symbols-outlined text-[16px] text-[#4edea3] group-hover:scale-110 transition-transform">open_in_new</span>
              <span>LinkedIn</span>
            </a>
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#4edea3] transition-colors group"
            >
              <span className="material-symbols-outlined text-[16px] text-[#4edea3] group-hover:scale-110 transition-transform">code</span>
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Holographic Avatar Console Node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
          className="lg:col-span-5 flex justify-center relative animate-float"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 hud-reticle">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[#4edea3]/20 blur-3xl rounded-full"></div>

            {/* Avatar Frame Card */}
            <div className="relative z-10 w-full h-full p-2 bg-[#131b2e] rounded-xl shadow-2xl flex flex-col justify-between border border-[#4edea3]/30 overflow-hidden group">
              {/* Subtle radar sweep line */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(78,222,163,0.4)_0deg,transparent_60deg)] radar-sweep"></div>

              <div className="flex items-center justify-between pb-2 px-1 text-[#bbcabf] font-mono text-[11px] relative z-10">
                <span className="glitch-text cursor-default">AVATAR_NODE // SYS.BIO</span>
                <span className="text-[#4edea3] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                  ONLINE
                </span>
              </div>
              <div className="relative w-full h-[calc(100%-28px)] overflow-hidden rounded-lg bg-[#060e20] relative z-10">
                <img
                  src={PORTFOLIO_DATA.profile.avatarUrl}
                  alt="Tejas Bhoi Portrait"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#0b1326]/85 backdrop-blur font-mono text-[10px] text-[#4cd7f6] rounded border border-[#4cd7f6]/25">
                  ID: TB-2002-SYS
                </div>
              </div>
            </div>

            {/* Floating Telemetry Chips with Motion spring hover */}
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="absolute -top-3 -right-4 z-20 px-3 py-1.5 glass-card text-[#4edea3] font-mono text-[11px] shadow-lg rounded flex items-center gap-1.5 border border-[#4edea3]/40 cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
              <span>React.js</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="absolute top-1/2 -left-6 z-20 px-3 py-1.5 glass-card text-[#4cd7f6] font-mono text-[11px] shadow-lg rounded flex items-center gap-1.5 border border-[#4cd7f6]/40 cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#4cd7f6]"></span>
              <span>Gemini AI</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="absolute -bottom-3 right-8 z-20 px-3 py-1.5 glass-card text-[#c0c1ff] font-mono text-[11px] shadow-lg rounded flex items-center gap-1.5 border border-[#c0c1ff]/40 cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#c0c1ff]"></span>
              <span>PostgreSQL</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="absolute -bottom-5 -left-2 z-20 px-3 py-1.5 glass-card text-[#dae2fd] font-mono text-[11px] shadow-lg rounded flex items-center gap-1.5 border border-[#4edea3]/40 cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
              <span>Node.js</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
