import React from 'react';

export const GrantCallout: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  return (
    <section className="w-full py-12 sm:py-20 md:py-24 bg-[#fafaf9] dark:bg-[#09090b] transition-colors" id="grant">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        
        <div className="reveal-scale rounded-[2.5rem] sm:rounded-[3rem] bg-black text-white p-6 sm:p-14 md:p-20 relative overflow-hidden flex flex-col items-start justify-between shadow-2xl border border-white/10">
          
          {/* Subtle green ambient light */}
          <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-emerald-500/15 blur-[100px] sm:blur-[140px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 font-mono-telemetry text-[11px] font-bold uppercase tracking-wider mb-5 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              FREE HARDWARE PROGRAM
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.94] mb-4 sm:mb-6">
              Upfront Cost: <br />
              <span className="text-emerald-400">Zero.</span>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-lg md:text-xl font-medium max-w-xl leading-relaxed mb-8 sm:mb-10">
              12 complete equipment packages available this month. A certified technician will deliver, plug in the scale, and train your staff in your store for free.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button 
                onClick={onOpenModal}
                className="w-full sm:w-auto px-7 sm:px-8 py-4 rounded-full bg-emerald-500 text-black text-xs sm:text-sm font-black tracking-tight hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg text-center"
              >
                Get Free Hardware &bull; $0 Due &rarr;
              </button>
              <a 
                href="tel:3472130687" 
                className="w-full sm:w-auto px-7 sm:px-8 py-4 rounded-full bg-white/10 text-white text-xs sm:text-sm font-bold tracking-tight hover:bg-white/20 transition-all font-mono-telemetry text-center"
              >
                Call (347) 213-0687
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
