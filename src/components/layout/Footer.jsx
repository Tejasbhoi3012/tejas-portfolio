import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Footer = () => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <footer className="w-full bg-[#060e20] mt-16 border-t border-[#2d3449]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#2d3449]/40">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-display text-xl text-[#dae2fd] font-bold">
                {profile.name}
              </span>
              <span className="px-2.5 py-0.5 bg-[#171f33] text-[#4edea3] font-mono text-[11px] rounded flex items-center gap-1.5 border border-[#4edea3]/20">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
                Available for opportunities
              </span>
            </div>
            <p className="font-mono text-xs text-[#bbcabf] max-w-md">
              {profile.footerBio}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#bbcabf]">
              <span className="material-symbols-outlined text-[#4edea3] text-[18px]">location_on</span>
              <span>{profile.location}</span>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-[#bbcabf] hover:text-[#4edea3] transition-colors"
            >
              <span className="material-symbols-outlined text-[#4edea3] text-[18px]">alternate_email</span>
              <span>{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-[#bbcabf] hover:text-[#4edea3] transition-colors"
            >
              <span className="material-symbols-outlined text-[#4edea3] text-[18px]">call</span>
              <span>{profile.phone}</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#bbcabf] hover:text-[#4edea3] transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              <span>github.com/{profile.githubUser}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#bbcabf] hover:text-[#4edea3] transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">share</span>
              <span>linkedin.com/in/{profile.linkedinHandle}</span>
            </a>
          </div>
          <p className="font-mono text-[11px] text-[#bbcabf]">
            &copy; 2025 {profile.name}. [SYS.ONLINE // ALL RIGHTS RESERVED]
          </p>
        </div>
      </div>
    </footer>
  );
};
