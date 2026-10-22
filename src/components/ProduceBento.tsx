import React from 'react';

export const ProduceBento: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 md:py-28 bg-[#fafaf9] dark:bg-[#09090b] border-b border-neutral-200 dark:border-neutral-800 transition-colors" id="bento">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 text-center max-w-2xl mx-auto">
          <div className="text-[11px] font-mono-telemetry uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold mb-2">
            WHY REGULAR CASH REGISTERS ARE SLOW
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black dark:text-white uppercase leading-tight">
            Built for fresh food. <br />
            Not t-shirts.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#151518] border border-neutral-200/80 dark:border-neutral-800 shadow-xs flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-3xl text-emerald-600 dark:text-emerald-400 mb-4 sm:mb-6">scale</span>
              <div className="text-3xl sm:text-5xl font-black tracking-tight text-black dark:text-white mb-2 font-mono-telemetry">
                &lt; 1 Sec
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black dark:text-white tracking-tight mb-1">
                Instant Scale Weight
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mt-4">
              Regular registers freeze for 3 seconds while waiting for the scale. This scale locks the weight instantly.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#151518] border border-neutral-200/80 dark:border-neutral-800 shadow-xs flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-3xl text-emerald-600 dark:text-emerald-400 mb-4 sm:mb-6">grid_view</span>
              <div className="text-3xl sm:text-5xl font-black tracking-tight text-black dark:text-white mb-2 font-mono-telemetry">
                1,400+
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black dark:text-white tracking-tight mb-1">
                Photo Buttons
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mt-4">
              Cashiers do not need to memorize 4-digit codes for cilantro or bananas. Just tap the color photo on screen.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#151518] border border-neutral-200/80 dark:border-neutral-800 shadow-xs flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-3xl text-emerald-600 dark:text-emerald-400 mb-4 sm:mb-6">call_split</span>
              <div className="text-3xl sm:text-5xl font-black tracking-tight text-emerald-600 dark:text-emerald-400 mb-2 font-mono-telemetry">
                1-Tap
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black dark:text-white tracking-tight mb-1">
                Automatic Food Stamps
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mt-4">
              Eligible food items and non-food items separate automatically. Customer swipes EBT, then pays the rest. Zero math.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#151518] border border-neutral-200/80 dark:border-neutral-800 shadow-xs flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-3xl text-emerald-600 dark:text-emerald-400 mb-4 sm:mb-6">document_scanner</span>
              <div className="text-3xl sm:text-5xl font-black tracking-tight text-black dark:text-white mb-2 font-mono-telemetry">
                Photo
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black dark:text-white tracking-tight mb-1">
                Paper Bill Scanner
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mt-4">
              Take a quick photo of your daily produce delivery bills to update your shelf prices and protect your store profits.
            </p>
          </div>

        </div>

        {/* Ambient Produce Counter Banner */}
        <div className="mt-5 sm:mt-6 rounded-3xl overflow-hidden relative border border-neutral-200/80 dark:border-neutral-800 aspect-[16/9] sm:aspect-[21/9] max-h-[360px] bg-neutral-950 group">
          <img 
            src="/images/produce_ambient.jpg" 
            alt="Organic produce on slate" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent flex items-center p-6 sm:p-14">
            <div className="max-w-md">
              <span className="text-[10px] font-mono-telemetry uppercase tracking-widest text-emerald-400 font-bold block mb-1.5">
                HEAVY-DUTY HARDWARE
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-2">
                Built for wet greens, dirt from roots, and heavy produce boxes.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                Tough water-resistant screens and stainless steel scales that last for years.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
