import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'dispatched'>('idle');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(label);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('transmitting');
    setTimeout(() => {
      setStatus('dispatched');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="w-full bg-[#060e20] py-24 border-t border-[#2d3449]/40 relative overflow-hidden">
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
              [SYS.05 // COMM_LINK]
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#dae2fd] font-bold">
              Get In Touch
            </h2>
          </div>
          <p className="font-mono text-xs text-[#bbcabf] max-w-md">
            Direct channels for software opportunities, architectural consulting, and full-stack contracts.
          </p>
        </motion.div>

        {/* 12-col Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Communication Channels (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 90 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Email card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => copyToClipboard(profile.email, 'email')}
              className="p-5 glass-card rounded-xl flex items-center justify-between group cursor-pointer transition-all shadow-md relative overflow-hidden hud-reticle"
              title="Click to copy email address"
            >
              <div className="flex items-center gap-4">
                <span className="p-3 bg-[#222a3d] text-[#4edea3] rounded-lg material-symbols-outlined text-[20px] border border-[#4edea3]/25 group-hover:scale-110 transition-transform">
                  alternate_email
                </span>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#bbcabf]">EMAIL ADDRESS</span>
                  <span className="font-mono text-sm text-[#dae2fd] font-semibold group-hover:text-[#4edea3] transition-colors break-all">
                    {profile.email}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {copiedType === 'email' ? (
                  <span className="font-mono text-[10px] text-[#4edea3] bg-[#4edea3]/10 px-2 py-0.5 rounded border border-[#4edea3]/30 animate-pulse">
                    COPIED
                  </span>
                ) : (
                  <span className="material-symbols-outlined text-[#bbcabf] group-hover:text-[#4edea3] transition-colors text-[20px]">
                    content_copy
                  </span>
                )}
              </div>
            </motion.div>

            {/* Telephone card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => copyToClipboard(profile.phone, 'phone')}
              className="p-5 glass-card rounded-xl flex items-center justify-between group cursor-pointer transition-all shadow-md hud-reticle"
              title="Click to copy phone number"
            >
              <div className="flex items-center gap-4">
                <span className="p-3 bg-[#222a3d] text-[#4edea3] rounded-lg material-symbols-outlined text-[20px] border border-[#4edea3]/25 group-hover:scale-110 transition-transform">
                  call
                </span>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#bbcabf]">TELEPHONE</span>
                  <span className="font-mono text-sm text-[#dae2fd] font-semibold group-hover:text-[#4edea3] transition-colors">
                    {profile.phone}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {copiedType === 'phone' ? (
                  <span className="font-mono text-[10px] text-[#4edea3] bg-[#4edea3]/10 px-2 py-0.5 rounded border border-[#4edea3]/30 animate-pulse">
                    COPIED
                  </span>
                ) : (
                  <span className="material-symbols-outlined text-[#bbcabf] group-hover:text-[#4edea3] transition-colors text-[20px]">
                    content_copy
                  </span>
                )}
              </div>
            </motion.div>

            {/* Coordinates card */}
            <div className="p-5 glass-card rounded-xl flex items-center gap-4 shadow-md hud-reticle">
              <span className="p-3 bg-[#222a3d] text-[#4cd7f6] rounded-lg material-symbols-outlined text-[20px] border border-[#00b2d0]/25">
                pin_drop
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#bbcabf]">COORDINATES</span>
                <span className="font-mono text-sm text-[#dae2fd] font-semibold">
                  {profile.coordinates}
                </span>
              </div>
            </div>

            {/* Dual Network Links */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-card rounded-xl hover:bg-[#222a3d] text-[#dae2fd] flex items-center gap-3 transition-colors shadow-md group hud-reticle"
              >
                <span className="material-symbols-outlined text-[#c0c1ff] text-[20px] group-hover:scale-110 transition-transform">
                  share
                </span>
                <div className="flex flex-col overflow-hidden">
                  <span className="font-mono text-[10px] text-[#bbcabf]">NETWORK</span>
                  <span className="font-mono text-xs truncate font-bold text-[#c0c1ff]">
                    LinkedIn Profile
                  </span>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-card rounded-xl hover:bg-[#222a3d] text-[#dae2fd] flex items-center gap-3 transition-colors shadow-md group hud-reticle"
              >
                <span className="material-symbols-outlined text-[#4edea3] text-[20px] group-hover:scale-110 transition-transform">
                  terminal
                </span>
                <div className="flex flex-col overflow-hidden">
                  <span className="font-mono text-[10px] text-[#bbcabf]">SOURCE</span>
                  <span className="font-mono text-xs truncate font-bold text-[#4edea3]">
                    GitHub Profile
                  </span>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Terminal Transmission Console (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 90 }}
            className="lg:col-span-7 p-8 glass-card rounded-xl flex flex-col gap-6 shadow-2xl border border-[#4edea3]/25 hud-reticle"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#2d3449]/40">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#ffb4ab] rounded-full"></span>
                <span className="w-3 h-3 bg-[#c0c1ff] rounded-full"></span>
                <span className="w-3 h-3 bg-[#4edea3] rounded-full animate-pulse"></span>
                <span className="font-mono text-[11px] text-[#bbcabf] ml-2">
                  // INQUIRY_TRANSMISSION_V1
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#4edea3] font-bold">
                {status === 'transmitting' ? 'UPLOADING...' : 'READY'}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] text-[#bbcabf]">
                    NAME / IDENTITY
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="// e.g. Alex Morgan"
                    className="w-full bg-[#060e20] text-[#dae2fd] px-4 py-3 font-mono text-xs rounded border border-[#2d3449] focus:outline-none focus:border-[#4edea3] focus:ring-1 focus:ring-[#4edea3]/40 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] text-[#bbcabf]">
                    EMAIL PROTOCOL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="// e.g. alex@enterprise.com"
                    className="w-full bg-[#060e20] text-[#dae2fd] px-4 py-3 font-mono text-xs rounded border border-[#2d3449] focus:outline-none focus:border-[#4edea3] focus:ring-1 focus:ring-[#4edea3]/40 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-[#bbcabf]">
                  SUBJECT HEADER
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="// Role inquiry, Contract proposal, Collaboration"
                  className="w-full bg-[#060e20] text-[#dae2fd] px-4 py-3 font-mono text-xs rounded border border-[#2d3449] focus:outline-none focus:border-[#4edea3] focus:ring-1 focus:ring-[#4edea3]/40 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-[#bbcabf]">
                  PAYLOAD / MESSAGE
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="// Enter your message or scope parameters..."
                  className="w-full bg-[#060e20] text-[#dae2fd] px-4 py-3 font-mono text-xs rounded border border-[#2d3449] focus:outline-none focus:border-[#4edea3] focus:ring-1 focus:ring-[#4edea3]/40 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Feedback Alert */}
              {status === 'dispatched' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-3 bg-[#171f33] text-[#4edea3] font-mono text-xs rounded flex items-center gap-2 border border-[#4edea3]/40"
                >
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>PACKET DISPATCHED: Message sent successfully to {profile.email}.</span>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'transmitting'}
                className="mt-2 w-full py-4 bg-[#4edea3] text-[#003824] font-mono text-sm font-bold rounded flex items-center justify-center gap-2 hover:bg-[#10b981] hover:text-[#00422b] transition-all shadow-[0_0_20px_rgba(78,222,163,0.3)] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
              >
                {status === 'transmitting' ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-[#003824] border-t-transparent rounded-full animate-spin"></span>
                    <span>Transmitting Packet...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
