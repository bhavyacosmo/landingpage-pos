import React from 'react';

export const MetricsMarquee: React.FC = () => {
  return (
    <section className="w-full py-14 bg-surface-warm border-b border-border-hairline">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 flex flex-col gap-8">
        
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="text-[11px] font-bold uppercase tracking-widest text-text-subtle font-mono-telemetry">
            DEPLOYED IN 160+ INDEPENDENT PRODUCE MARKETS &amp; SUPERMARKETS
          </span>
          <p className="font-editorial text-xl sm:text-2xl text-slate-900 font-semibold">
            Giving local produce grocers the technology firepower of national chains.
          </p>
        </div>

        {/* Metric Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-white border border-border-hairline shadow-subtle flex flex-col gap-1 text-center">
            <span className="font-editorial text-3xl sm:text-4xl font-bold text-pine-deep">&lt; 0.08s</span>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Weight Lock Speed</span>
            <p className="text-[11px] text-text-subtle">Instant tare stabilization on bi-optic scales.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-border-hairline shadow-subtle flex flex-col gap-1 text-center">
            <span className="font-editorial text-3xl sm:text-4xl font-bold text-emerald-accent">+24%</span>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Lane Velocity</span>
            <p className="text-[11px] text-text-subtle">Fewer cashier taps for fresh fruit &amp; greens.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-border-hairline shadow-subtle flex flex-col gap-1 text-center">
            <span className="font-editorial text-3xl sm:text-4xl font-bold text-pine-deep">100%</span>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Automated EBT Split</span>
            <p className="text-[11px] text-text-subtle">Zero manual math on SNAP grocery tickets.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-border-hairline shadow-subtle flex flex-col gap-1 text-center">
            <span className="font-editorial text-3xl sm:text-4xl font-bold text-emerald-accent">$0 Due</span>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Upfront Equipment</span>
            <p className="text-[11px] text-text-subtle">Certified Merchant Grant allocation for pilot stores.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
