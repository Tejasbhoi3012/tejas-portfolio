import { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Header = ({ onOpenTerminal, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0b1326]/90 backdrop-blur-md border-b border-[#2d3449]/60 shadow-[0_4px_25px_rgba(0,0,0,0.6)]' 
        : 'bg-[#0b1326]/80 backdrop-blur-md border-b border-[#2d3449]/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
    }`}>
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <a href="#about" className="flex items-center gap-4 shrink-0 group focus:outline-none">
          <img
            src={PORTFOLIO_DATA.profile.logoUrl}
            alt="Tejas Bhoi Logo"
            className="h-8 w-auto object-contain drop-shadow-[0_0_8px_rgba(78,222,163,0.4)] transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display text-lg text-[#dae2fd] tracking-tight font-bold group-hover:text-[#4edea3] transition-colors">
              {PORTFOLIO_DATA.profile.name}
            </span>
            <span className="font-mono text-[11px] text-[#4edea3] uppercase tracking-wider flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
              Full-Stack &amp; AI Dev
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`font-mono text-sm transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-[#4edea3] font-bold'
                    : 'text-[#bbcabf] hover:text-[#dae2fd]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4edea3] shadow-[0_0_8px_#4edea3]"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#4edea3] text-[#003824] font-mono text-xs font-bold rounded hover:bg-[#10b981] hover:text-[#00422b] transition-all shadow-[0_0_15px_rgba(78,222,163,0.3)] hover:shadow-[0_0_20px_rgba(78,222,163,0.5)] active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            <span>Get in Touch</span>
          </a>

          {/* Interactive Terminal Toggle */}
          <button
            onClick={onOpenTerminal}
            aria-label="Open Interactive Terminal"
            title="Launch Terminal Console (CLI)"
            className="p-2 text-[#bbcabf] hover:text-[#4edea3] transition-colors flex items-center justify-center rounded hover:bg-[#171f33] border border-transparent hover:border-[#4edea3]/30"
          >
            <span className="material-symbols-outlined text-[20px]">terminal</span>
          </button>

          {/* LinkedIn Profile */}
          <a
            href={PORTFOLIO_DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Network Profile"
            title="LinkedIn Profile"
            className="p-2 text-[#bbcabf] hover:text-[#4edea3] transition-colors flex items-center justify-center rounded hover:bg-[#171f33] border border-transparent hover:border-[#4edea3]/30"
          >
            <span className="material-symbols-outlined text-[20px]">hub</span>
          </a>

          {/* Profile Avatar Thumbnail */}
          <div className="pl-1 sm:pl-2">
            <img
              src={PORTFOLIO_DATA.profile.avatarUrl}
              alt="Tejas Bhoi Avatar"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#4edea3]/60 shadow-[0_0_10px_rgba(78,222,163,0.4)]"
            />
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#bbcabf] hover:text-[#4edea3] transition-colors rounded hover:bg-[#171f33]"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0b1326]/95 border-b border-[#2d3449] px-6 py-4 flex flex-col gap-3 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-mono text-sm py-2 px-3 rounded transition-colors ${
                activeSection === link.id
                  ? 'bg-[#171f33] text-[#4edea3] font-bold'
                  : 'text-[#bbcabf] hover:text-[#dae2fd] hover:bg-[#131b2e]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#4edea3] text-[#003824] font-mono text-xs font-bold rounded"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            <span>Get in Touch</span>
          </a>
        </div>
      )}
    </header>
  );
};
