import React from 'react';

interface HardwareGrantBannerProps {
  onOpenModal: () => void;
}

export const HardwareGrantBanner: React.FC<HardwareGrantBannerProps> = ({ onOpenModal }) => {
  return (
    <section className="w-full py-16 lg:py-24 bg-white" id="hardware-grant">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8">
        <div className="w-full bg-pine-deep rounded-[3rem] p-8 sm:p-16 flex flex-col items-center text-center gap-6 shadow-2xl relative overflow-hidden text-white">
          <div className="dark-glow-blob absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none opacity-40"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider relative z-10 font-mono-telemetry">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            LIMITED QUARTERLY ALLOCATION: 12 HARDWARE KITS REMAINING
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight relative z-10 max-w-4xl leading-tight">
            Claim Your Market's Free $5,000 <br className="hidden sm:inline" />
            <span className="italic font-normal text-emerald-300">Produce POS Hardware Setup.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl relative z-10 leading-relaxed">
            Zero upfront hardware fees. Certified local technician delivery, in-counter scale calibration, and complete staff onboarding. Upgrade your grocery store this week.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 pt-3">
            <button 
              onClick={onOpenModal}
              className="px-8 py-4 rounded-full bg-emerald-500 text-slate-950 text-xs sm:text-sm font-extrabold uppercase tracking-widest hover:bg-emerald-400 shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <span>Lock In Your Free Hardware Kit</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
            <a 
              href="tel:3472130687" 
              className="px-7 py-3.5 rounded-full border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-emerald-400 text-base">call</span>
              <span>Call (347) 213-0687</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
