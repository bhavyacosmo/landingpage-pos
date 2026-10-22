import React from 'react';

interface HeroMinimalProps {
  onOpenModal: () => void;
}

const MARQUEE_ITEMS = [
  { icon: '🥑', name: 'Hass Avocado', tag: 'PLU #4046', price: '$1.29 / ea', stat: '0.1s Tare' },
  { icon: '🍎', name: 'Honeycrisp Apple', tag: 'PLU #4173', price: '$2.49 / lb', stat: 'Optical Scale' },
  { icon: '🍌', name: 'Cavendish Banana', tag: 'PLU #4011', price: '$0.59 / lb', stat: 'Fast Velocity' },
  { icon: '⚡', name: 'Zebra Bi-Optic Bridge', tag: 'v3.2 DRIVER', price: 'Native 0.08s', stat: 'NTEP Legal' },
  { icon: '🍋', name: 'Meyer Lemons', tag: 'PLU #4304', price: '$0.79 / ea', stat: 'USDA EBT Split' },
  { icon: '🥬', name: 'Lacinato Dino Kale', tag: 'PLU #94627', price: '$2.49 / bu', stat: 'Organic Cert' },
  { icon: '🤖', name: 'AI Invoice Scanner', tag: 'PO DIGITIZER', price: 'Zero Manual Math', stat: '99.8% Accuracy' },
  { icon: '🍓', name: 'Sweet Strawberries 1lb', tag: 'PLU #4250', price: '$3.99 / ea', stat: 'ESL Tag Sync' },
  { icon: '🥕', name: 'Heirloom Carrots', tag: 'PLU #4562', price: '$1.99 / lb', stat: 'Visual PLU AI' },
  { icon: '🍉', name: 'Seedless Watermelon', tag: 'PLU #4032', price: '$5.99 / ea', stat: 'Sub-Sec Weight' },
  { icon: '🛡️', name: 'Offline SQLite Edge', tag: 'LOCAL DB', price: 'Zero Wi-Fi Loss', stat: '100% Active' },
  { icon: '🥭', name: 'Champagne Mango', tag: 'PLU #4312', price: '$1.49 / ea', stat: 'Zero Shrink' },
  { icon: '🫐', name: 'Fresh Blueberries', tag: 'PLU #94240', price: '$4.49 / pt', stat: 'Margin Guard' },
  { icon: '🥦', name: 'Crown Broccoli', tag: 'PLU #3082', price: '$1.89 / lb', stat: 'Tare Stabilized' },
  { icon: '💳', name: 'SNAP / EBT 1-Tap', tag: 'USDA APPROVED', price: 'Auto Split', stat: 'Zero Cashier Wait' },
  { icon: '🍅', name: 'Heirloom Tomatoes', tag: 'PLU #4664', price: '$3.99 / lb', stat: 'Color Camera' },
  { icon: '🆓', name: 'Complete POS Hardware', tag: 'FREE GRANT', price: '$0 Upfront', stat: '12 Bundles Left' },
];

export const HeroMinimal: React.FC<HeroMinimalProps> = ({ onOpenModal }) => {
  return (
    <section className="relative w-full pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32 bg-[#fafaf9] dark:bg-[#090b0e] transition-colors overflow-hidden">
      
      {/* Fresh produce ambient background with soft gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <img 
          src="/images/produce_ambient.jpg" 
          alt="Fresh produce background" 
          className="w-full h-full object-cover object-center scale-105 opacity-25 dark:opacity-20 filter contrast-110 saturate-125"
        />
        {/* Seamless theme fade overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafaf9]/90 via-[#fafaf9]/80 to-[#fafaf9] dark:from-[#090b0e]/92 dark:via-[#090b0e]/82 dark:to-[#090b0e]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf9]/85 via-transparent to-[#fafaf9]/85 dark:from-[#090b0e]/85 dark:via-transparent dark:to-[#090b0e]/85"></div>
        {/* Ambient bioluminescent glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] lg:w-[1000px] h-[350px] sm:h-[500px] bg-emerald-500/15 dark:bg-emerald-500/18 blur-[100px] sm:blur-[140px] rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-teal-500/10 dark:bg-teal-500/12 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Monumental Headline */}
        <h1 className="reveal-on-scroll text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-black dark:text-white uppercase leading-[0.95] max-w-5xl mb-5 sm:mb-6">
          The POS Built For <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400">
            Fresh Produce.
          </span>
        </h1>

        {/* Clear Product Subhead */}
        <p className="reveal-on-scroll delay-150 text-base sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl font-medium tracking-tight mb-6 sm:mb-8 leading-snug px-2">
          The fastest point-of-sale and backoffice system built for supermarkets and fresh produce markets. Native Zebra scale sync in 0.1s, AI vendor invoice digitizer, and 100% offline resilience.
        </p>

        {/* Produce Live Stream Catalog (In Between Subhead and CTAs) */}
        <div className="reveal-on-scroll delay-200 w-full max-w-[1400px] mb-8 sm:mb-10 relative overflow-hidden py-2">
          {/* Centered Header */}
          <div className="flex items-center justify-center gap-2 mb-3.5 text-[10px] sm:text-[11px] font-mono-telemetry uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Produce Live Stream Catalog</span>
          </div>

          {/* Fade masks for edge gradient illusion */}
          <div className="pointer-events-none absolute left-0 top-8 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#fafaf9] dark:from-[#090b0e] to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-8 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#fafaf9] dark:from-[#090b0e] to-transparent z-10"></div>

          {/* Left-to-Right Moving Strip Container */}
          <div className="flex animate-marquee-ltr gap-3 sm:gap-4 select-none cursor-default py-1">
            {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-[#121418]/85 backdrop-blur-xl border border-neutral-200/90 dark:border-white/10 shadow-xs hover:border-emerald-500/50 hover:bg-white dark:hover:bg-[#161a20] transition-all shrink-0 group"
              >
                <span className="text-2xl sm:text-3xl shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <div className="flex flex-col text-left whitespace-nowrap">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-bold text-black dark:text-white tracking-tight">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono-telemetry font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 px-1.5 py-0.5 rounded-md">
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono-telemetry text-neutral-500 dark:text-neutral-400">
                    <span className="text-neutral-700 dark:text-neutral-200 font-semibold">{item.price}</span>
                    <span>&bull;</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">{item.stat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Actions */}
        <div className="reveal-on-scroll delay-300 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-12 sm:mb-16 px-4">
          <button 
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black dark:bg-emerald-500 text-white dark:text-black text-xs sm:text-sm font-bold tracking-tight hover:bg-neutral-800 dark:hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg"
          >
            Claim Free Hardware &bull; $0 Due
          </button>
          <a 
            href="#register-demo" 
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-300 dark:border-neutral-700 text-black dark:text-white text-xs sm:text-sm font-bold tracking-tight hover:bg-white dark:hover:bg-neutral-800 hover:border-black dark:hover:border-neutral-500 transition-all shadow-xs text-center"
          >
            Try Live Register Simulator &rarr;
          </a>
        </div>

        {/* Full-Bleed Apple-Style Hero Device Showcase with Floating Glass Widgets */}
        <div className="reveal-scale delay-200 w-full max-w-6xl relative group px-1 sm:px-0">
          
          {/* Main Visual Container */}
          <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xl">
            <img 
              src="/images/pos_terminal_hero.jpg" 
              alt="Produce AI POS Dual Screen Terminal" 
              className="w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] object-cover object-center group-hover:scale-[1.015] transition-transform duration-700" 
            />

            {/* Floating Glass Widget 1 (Top Left): Zebra Scale Bridge */}
            <div className="hidden md:flex absolute top-6 left-6 p-3.5 rounded-2xl backdrop-blur-xl bg-black/70 border border-white/15 text-white shadow-xl animate-float-slow items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <span className="material-symbols-outlined text-lg">scale</span>
              </div>
              <div>
                <div className="text-[10px] font-mono-telemetry uppercase text-neutral-400 font-bold">ZEBRA SCALE BRIDGE</div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Weight: 2.45 lb</span>
                  <span className="text-[10px] text-emerald-400 font-mono-telemetry font-bold">&bull; 0.1s Tare</span>
                </div>
              </div>
            </div>

            {/* Floating Glass Widget 2 (Top Right): 100% Offline Active */}
            <div className="hidden md:flex absolute top-6 right-6 p-3.5 rounded-2xl backdrop-blur-xl bg-black/70 border border-white/15 text-white shadow-xl animate-float-delayed items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <span className="material-symbols-outlined text-lg">cloud_sync</span>
              </div>
              <div>
                <div className="text-[10px] font-mono-telemetry uppercase text-neutral-400 font-bold">LOCAL SQLITE ENGINE</div>
                <div className="text-xs font-bold text-white">100% Offline Resilient</div>
              </div>
            </div>

            {/* Floating Glass Widget 3 (Bottom Center): Metadata Bar */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-5 rounded-xl sm:rounded-3xl backdrop-blur-xl bg-black/80 border border-white/10 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <div className="text-left">
                  <div className="text-[11px] sm:text-xs font-mono-telemetry font-bold text-white uppercase tracking-wider">
                    Produce AI Terminal X1
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-neutral-400">
                    Dual 15.6" Touchscreens &bull; In-Counter Bi-Optic Bridge &bull; EBT/SNAP Ready
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 font-mono-telemetry text-[10px] sm:text-xs w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-white/10 pt-2 sm:pt-0">
                <div>
                  <span className="text-neutral-400 block text-[9px] sm:text-[10px]">TARE SPEED</span>
                  <span className="text-emerald-400 font-bold">&lt; 0.1 SEC</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[9px] sm:text-[10px]">IF INTERNET DROPS</span>
                  <span className="text-white font-bold">100% ACTIVE</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[9px] sm:text-[10px]">HARDWARE COST</span>
                  <span className="text-emerald-400 font-bold">$0 FREE</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Produce AI Official 4-Metric Grid in Glass Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 w-full max-w-5xl mt-10 sm:mt-16 text-left">
          
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-[#121418]/70 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl shadow-xs">
            <div className="text-3xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400 tracking-tighter font-mono-telemetry">
              &lt; 3.0s
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono-telemetry uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1 font-bold">
              Average Checkout Time
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 font-medium mt-1 leading-relaxed">
              Weighs produce and prints receipts fast to keep lines moving.
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-[#121418]/70 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl shadow-xs">
            <div className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tighter font-mono-telemetry">
              99.9%
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono-telemetry uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1 font-bold">
              Inventory Precision
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 font-medium mt-1 leading-relaxed">
              Eliminates cashier PLU guessing errors with color photo buttons.
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-[#121418]/70 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl shadow-xs">
            <div className="text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tighter font-mono-telemetry">
              100%
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono-telemetry uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1 font-bold">
              Offline POS Resilience
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 font-medium mt-1 leading-relaxed">
              Registers keep ringing if Wi-Fi cuts out. Zero lost sales.
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-[#121418]/70 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl shadow-xs">
            <div className="text-3xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400 tracking-tighter font-mono-telemetry">
              15%
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono-telemetry uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1 font-bold">
              Labor Overhead Savings
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 font-medium mt-1 leading-relaxed">
              AI invoice scanning eliminates hours of manual data entry every week.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
