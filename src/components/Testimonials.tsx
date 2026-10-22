import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-20 bg-surface-warm border-b border-border-hairline">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 flex flex-col gap-12">
        
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-mono-telemetry text-[11px] font-bold text-slate-600 bg-white border border-border-hairline px-3 py-1 rounded-full uppercase tracking-widest shadow-2xs">
            VERIFIED SUPERMARKET SUCCESS
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Trusted by independent grocers who refuse to settle.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-3xl p-7 border border-border-hairline shadow-subtle flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex text-amber-500">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <p className="text-xs sm:text-sm text-text-muted italic leading-relaxed">
                "On busy Saturday afternoons our produce lines used to stretch 15 carts deep into the aisles. The instant 0.08s tare on our bi-optic scale cut register wait times by 40% immediately. Cashiers love it."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-border-hairline">
              <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center font-mono-telemetry">SV</div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Sal Valentini</h4>
                <p className="text-[11px] text-text-subtle">Bronx Organic Market &bull; Grand Concourse, NY</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-border-hairline shadow-subtle flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex text-amber-500">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <p className="text-xs sm:text-sm text-text-muted italic leading-relaxed">
                "The $0 equipment grant saved us over $6,500 across two checkout lanes. The certified technician came directly to our market in Astoria, calibrated the scale with weights, and had us running before our morning rush."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-border-hairline">
              <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center font-mono-telemetry">DK</div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Dimitri Kostas</h4>
                <p className="text-[11px] text-text-subtle">Queens Fresh Supermarket &bull; Astoria, NY</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-border-hairline shadow-subtle flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex text-amber-500">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <p className="text-xs sm:text-sm text-text-muted italic leading-relaxed">
                "Automatic SNAP item separation is an absolute game-changer for our checkout staff. No more voiding receipts or manual calculations when customers pay with food stamps. Everything is effortless."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-border-hairline">
              <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center font-mono-telemetry">MG</div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Marta Gonzalez</h4>
                <p className="text-[11px] text-text-subtle">Hudson Valley Harvest Market &bull; White Plains, NY</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
