import React, { useState } from 'react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <section className="relative w-full pt-10 pb-20 lg:pt-14 lg:pb-28 overflow-hidden bg-white border-b border-border-hairline">
      {/* Ambient background mesh & subtle grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="hero-mesh-glow absolute -top-40 left-1/2 -translate-x-1/2 w-[1300px] h-[800px]"></div>
        <div className="absolute inset-0 bg-grid-subtle opacity-40"></div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50/90 shadow-2xs mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-mono-telemetry text-[11.5px] font-bold text-emerald-950 uppercase tracking-wider">
            NEXT-GEN GROCERY OPERATING SYSTEM • PURPOSE-BUILT FOR FRESH PRODUCE
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-slate-950 leading-[1.08] tracking-tight font-semibold max-w-5xl mb-6">
          Faster produce checkout. <br className="hidden sm:inline" />
          <span className="italic font-normal text-emerald-800">Automated margins. Zero friction.</span>
        </h1>

        {/* Subheading */}
        <p className="font-sans text-base sm:text-xl text-text-muted leading-relaxed max-w-3xl mb-9">
          Stitch Produce OS brings autonomous weighing, visual PLU recognition, and electronic shelf tag synchronization to independent grocers. Weigh in 0.08 seconds, split EBT automatically, and protect perishable profit margins.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button 
            onClick={onOpenModal}
            className="px-8 py-4 rounded-full bg-pine-deep text-white text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-pine-dark shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 cursor-pointer"
          >
            <span>Claim Free Hardware Bundle</span>
            <span className="material-symbols-outlined text-base text-emerald-bright">arrow_forward</span>
          </button>
          <a 
            href="#simulator" 
            className="px-7 py-4 rounded-full border border-border-hairline bg-white/95 backdrop-blur-sm text-slate-800 text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-slate-50 transition-all flex items-center gap-2 shadow-2xs"
          >
            <span className="material-symbols-outlined text-emerald-accent text-lg">play_circle</span>
            <span>Test Live Tare Simulator</span>
          </a>
        </div>

        {/* Real-Time Telemetry Ticker */}
        <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono-telemetry text-text-subtle pb-10 border-b border-slate-200/80 max-w-4xl">
          <span className="flex items-center gap-1.5 text-slate-900 font-semibold">
            <span className="material-symbols-outlined text-emerald-accent text-sm">speed</span> 0.08s Zero-Lag Scale Bridge
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-900 font-semibold">
            <span className="material-symbols-outlined text-emerald-accent text-sm">wifi_off</span> Dual-Mesh Offline Kernel
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-900 font-semibold">
            <span className="material-symbols-outlined text-emerald-accent text-sm">payments</span> Automatic SNAP / EBT Split
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-900 font-semibold">
            <span className="material-symbols-outlined text-emerald-accent text-sm">store</span> 160+ High-Volume Markets
          </span>
        </div>

        {/* HERO HARDWARE STAGE (Device Showcase with Interactive Hotspots) */}
        <div className="w-full max-w-5xl mt-10 relative">
          <div className="relative rounded-[2.5rem] p-3 sm:p-5 bg-gradient-to-b from-white/90 via-slate-50/70 to-slate-100/90 border border-slate-200 shadow-device overflow-hidden">
            
            {/* Real High-Res Device Picture */}
            <div className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden bg-slate-900 group">
              <img 
                src="/images/pos_terminal_hero.jpg" 
                alt="Stitch Produce OS Next-Gen Dual Screen POS Terminal" 
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700" 
              />
              
              {/* Dark gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30 pointer-events-none"></div>

              {/* Top Telemetry Pill Overlay */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 glass-card-dark px-3.5 py-1.5 rounded-full text-white text-[11px] font-mono-telemetry border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>DEVICE: STITCH-PRODUCE-X1</span>
                <span className="text-slate-400">|</span>
                <span className="text-emerald-300 font-bold">SERIAL SCALE LINK: 0.08s</span>
              </div>

              {/* Bottom Status Pill Overlay */}
              <div className="absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-2 glass-card-dark px-3.5 py-1.5 rounded-full text-white text-[11px] font-mono-telemetry border border-emerald-500/30">
                <span className="material-symbols-outlined text-emerald-bright text-sm">verified</span>
                <span>NTEP CLASS III SCALE CALIBRATED</span>
                <span className="text-slate-400">|</span>
                <span className="text-emerald-300 font-bold">1,400 PLUs SYNCED</span>
              </div>

              {/* Hotspot 1: Dual IPS Screens */}
              <div 
                className="absolute top-[32%] left-[44%] -translate-x-1/2 -translate-y-1/2 z-30"
                onMouseEnter={() => setActiveHotspot(1)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <button 
                  type="button" 
                  aria-label="Inspect Dual 15.6 Inch IPS Touch Screens" 
                  className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-glow cursor-pointer hotspot-pulse transition-transform hover:scale-110"
                >
                  <span className="material-symbols-outlined text-[15px]">touch_app</span>
                </button>
                <div className={`absolute bottom-9 left-1/2 -translate-x-1/2 w-56 p-3 rounded-2xl glass-card-dark text-white text-left transition-all duration-200 shadow-2xl border border-emerald-400/40 ${activeHotspot === 1 ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <div className="text-[11px] font-bold text-emerald-300 uppercase font-mono-telemetry mb-0.5">Dual 15.6" IPS Touch</div>
                  <div className="text-[11.5px] text-slate-200 leading-snug">Zero-glare cashier interface + customer pricing display with transparent tax &amp; SNAP split.</div>
                </div>
              </div>

              {/* Hotspot 2: Contactless Payment & EBT */}
              <div 
                className="absolute top-[58%] left-[58%] -translate-x-1/2 -translate-y-1/2 z-30"
                onMouseEnter={() => setActiveHotspot(2)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <button 
                  type="button" 
                  aria-label="Inspect Integrated Tap and EBT Pinpad" 
                  className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-glow cursor-pointer hotspot-pulse transition-transform hover:scale-110"
                >
                  <span className="material-symbols-outlined text-[15px]">contactless</span>
                </button>
                <div className={`absolute bottom-9 left-1/2 -translate-x-1/2 w-56 p-3 rounded-2xl glass-card-dark text-white text-left transition-all duration-200 shadow-2xl border border-emerald-400/40 ${activeHotspot === 2 ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <div className="text-[11px] font-bold text-emerald-300 uppercase font-mono-telemetry mb-0.5">Integrated Tap &amp; EBT Pinpad</div>
                  <div className="text-[11.5px] text-slate-200 leading-snug">Instant Apple Pay, chip, PIN, and automatic SNAP/EBT separation without cashier math.</div>
                </div>
              </div>

              {/* Hotspot 3: Sub-Second Tare Platter */}
              <div 
                className="absolute bottom-[20%] left-[30%] -translate-x-1/2 -translate-y-1/2 z-30"
                onMouseEnter={() => setActiveHotspot(3)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <button 
                  type="button" 
                  aria-label="Inspect Sub-Second Weight Sensor Platter" 
                  className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-glow cursor-pointer hotspot-pulse transition-transform hover:scale-110"
                >
                  <span className="material-symbols-outlined text-[15px]">scale</span>
                </button>
                <div className={`absolute bottom-9 left-1/2 -translate-x-1/2 w-56 p-3 rounded-2xl glass-card-dark text-white text-left transition-all duration-200 shadow-2xl border border-emerald-400/40 ${activeHotspot === 3 ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <div className="text-[11px] font-bold text-emerald-300 uppercase font-mono-telemetry mb-0.5">Sub-Second Weight Sensor</div>
                  <div className="text-[11.5px] text-slate-200 leading-snug">Locks weight in 0.08s with automatic zero-drift compensation for fresh produce bags.</div>
                </div>
              </div>

            </div>

            {/* Stage Caption Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 px-2 text-xs text-text-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-medium text-slate-900">Featured: Stitch Produce OS Lane Station X1 with Dual IPS &amp; Integrated Weight Platter</span>
              </div>
              <div className="flex items-center gap-3 font-mono-telemetry text-[11px]">
                <span className="text-emerald-700 font-bold">Hover over glowing icons to inspect hardware specs</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
