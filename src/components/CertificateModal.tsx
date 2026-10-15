import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const { certification, profile } = PORTFOLIO_DATA;

  return (
    <div className="fixed inset-0 z-50 bg-[#0b1326]/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#171f33] max-w-xl w-full p-6 sm:p-8 rounded-xl shadow-2xl flex flex-col gap-6 border border-[#4edea3]/30">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#2d3449]/60">
          <div className="flex items-center gap-2 font-mono text-xs text-[#4edea3] font-bold">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span>VERIFIED RECORD // HACKERRANK SQL INTERMEDIATE</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#bbcabf] hover:text-[#dae2fd] p-1 rounded hover:bg-[#222a3d] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Certificate Display Card */}
        <div className="p-6 bg-[#060e20] rounded-xl border border-[#4edea3]/30 flex flex-col gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4edea3]/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#4edea3] bg-[#4edea3]/10 px-2.5 py-1 rounded border border-[#4edea3]/30">
              CRYPTOGRAPHICALLY VERIFIED
            </span>
            <span className="font-mono text-[10px] text-[#bbcabf]">{certification.id}</span>
          </div>

          <div className="flex flex-col gap-1 pt-2">
            <span className="font-mono text-xs text-[#bbcabf]">Awarded to:</span>
            <h3 className="font-display text-2xl font-bold text-[#dae2fd]">{profile.name}</h3>
            <span className="font-mono text-xs text-[#4edea3] font-semibold">{certification.title}</span>
          </div>

          <p className="font-mono text-xs text-[#bbcabf] leading-relaxed pt-2 border-t border-[#2d3449]/60">
            {certification.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {certification.topics.map((t) => (
              <span key={t} className="px-2 py-0.5 bg-[#171f33] text-[10px] font-mono text-[#4cd7f6] rounded border border-[#00b2d0]/25">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#2d3449]/60 font-mono text-[10px] text-[#bbcabf]">
            <span>ISSUER: HackerRank Skills Assessment</span>
            <span className="text-[#4edea3]">STATUS: ACTIVE &amp; VALID</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2">
          <a
            href={certification.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-[#4edea3] text-[#003824] font-mono text-xs font-bold rounded flex items-center gap-1.5 hover:bg-[#10b981] transition-all"
          >
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            <span>View on HackerRank</span>
          </a>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#222a3d] text-[#dae2fd] font-mono text-xs font-bold rounded hover:bg-[#2d3449] border border-[#2d3449] transition-colors"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
