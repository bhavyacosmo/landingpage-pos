import React from 'react';

export const ProduceEngine: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-24 bg-surface-warm border-b border-border-hairline" id="produce-intel">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 flex flex-col gap-12">
        
        <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border-hairline bg-white text-slate-800 text-[11px] font-bold uppercase tracking-widest font-mono-telemetry">
            <span className="material-symbols-outlined text-sm text-emerald-accent">psychology</span>
            THE FRESH PRODUCE CHALLENGE
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl text-slate-900 font-semibold tracking-tight">
            Why generic retail POS systems break down in grocery.
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            Standard POS platforms were designed for coffee shops and retail apparel. Fresh produce requires an operating system built from the ground up for perishable velocity.
          </p>
        </div>

        {/* 4 Core Produce Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1 */}
          <div className="p-7 rounded-3xl bg-white border border-border-hairline shadow-subtle flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">scale</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-editorial text-lg text-slate-900 font-semibold">True Zero-Latency Tare</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Generic registers take 2 to 3 seconds to stabilize weight over Bluetooth or USB. Stitch reads raw RS-232 serial telemetry in 0.08 seconds, saving 15 minutes of line delay every rush hour.
              </p>
            </div>
            <div className="mt-auto pt-3 border-t border-border-hairline text-[11px] font-mono-telemetry font-bold text-emerald-700">
              0.08s WEIGHT LOCK
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-7 rounded-3xl bg-white border border-border-hairline shadow-subtle flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">grid_view</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-editorial text-lg text-slate-900 font-semibold">Visual 1-Tap PLU Matrix</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Cashiers shouldn't have to memorize 4-digit codes for cilantro, Persian cucumbers, or yellow plantains. High-resolution color photo tiles let new hires ring produce fast on day one.
              </p>
            </div>
            <div className="mt-auto pt-3 border-t border-border-hairline text-[11px] font-mono-telemetry font-bold text-emerald-700">
              1,400+ PLUs VISUALIZED
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-7 rounded-3xl bg-white border border-border-hairline shadow-subtle flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">call_split</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-editorial text-lg text-slate-900 font-semibold">Automatic SNAP / EBT Split</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                When a customer basket mixes fresh fruits with paper goods, Stitch segregates SNAP-eligible items instantly. Customers swipe their EBT card, then pay the remaining balance without re-ringing.
              </p>
            </div>
            <div className="mt-auto pt-3 border-t border-border-hairline text-[11px] font-mono-telemetry font-bold text-emerald-700">
              ZERO-MISTAKE AUDIT
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-7 rounded-3xl bg-white border border-border-hairline shadow-subtle flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">trending_up</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-editorial text-lg text-slate-900 font-semibold">Daily Wholesale OCR Link</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Wholesale produce prices fluctuate daily at Hunts Point. Snap a smartphone photo of your paper supplier delivery invoice to automatically recalculate shelf prices and protect 38% margins.
              </p>
            </div>
            <div className="mt-auto pt-3 border-t border-border-hairline text-[11px] font-mono-telemetry font-bold text-emerald-700">
              INVOICE TO ESL SYNC
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
