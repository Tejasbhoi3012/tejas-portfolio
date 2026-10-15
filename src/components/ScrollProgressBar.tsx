import React, { useState, useEffect } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = (window.scrollY / scrollHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', calculateProgress, { passive: true });
    calculateProgress();

    return () => window.removeEventListener('scroll', calculateProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[3px] bg-[#060e20]/60 z-[60] pointer-events-none"
      role="progressbar"
      aria-label="Portfolio Reading Progress"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-[#10b981] via-[#4edea3] to-[#4cd7f6] shadow-[0_0_12px_rgba(78,222,163,0.8)] transition-[width] duration-100 ease-out relative"
        style={{ width: `${scrollProgress}%` }}
      >
        {scrollProgress > 0 && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-[#dae2fd] shadow-[0_0_8px_rgba(78,222,163,1)]"></div>
        )}
      </div>
    </div>
  );
};
