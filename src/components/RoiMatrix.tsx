import React from 'react';

export const RoiMatrix: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-24 bg-white border-b border-border-hairline" id="comparison">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 flex flex-col gap-10">
        
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-mono-telemetry text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-widest">
            GROCERY PERFORMANCE MATRIX
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold tracking-tight">
            How Stitch Produce OS Outperforms Legacy Systems
          </h2>
          <p className="text-xs sm:text-sm text-text-muted max-w-xl">
            See the direct technical differences between specialized produce engineering and legacy cash registers.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-subtle border border-border-hairline">
            <thead>
              <tr className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-border-hairline font-mono-telemetry">
                <th className="py-4 px-5">Operational Feature</th>
                <th className="py-4 px-5 bg-emerald-50 text-emerald-950 border-x border-emerald-200">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    Stitch Produce OS
                  </div>
                </th>
                <th className="py-4 px-5 text-slate-500">Clover / Square Retail</th>
                <th className="py-4 px-5 text-slate-500">Legacy NCR / Toshiba POS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-hairline text-xs sm:text-sm">
              <tr>
                <td className="py-4 px-5 font-semibold text-slate-900">Scale Tare Weigh-In Speed</td>
                <td className="py-4 px-5 bg-emerald-50/40 font-bold text-emerald-800 border-x border-emerald-200 flex items-center gap-1 font-mono-telemetry">
                  <span className="material-symbols-outlined text-base text-emerald-600">check_circle</span> 0.08 sec (Zero-Lag)
                </td>
                <td className="py-4 px-5 text-slate-600">2.5 to 3.5 sec USB lag</td>
                <td className="py-4 px-5 text-slate-600">Requires manual weight entry</td>
              </tr>
              <tr>
                <td className="py-4 px-5 font-semibold text-slate-900">Upfront Equipment Expense</td>
                <td className="py-4 px-5 bg-emerald-50/40 font-bold text-emerald-800 border-x border-emerald-200 flex items-center gap-1 font-mono-telemetry">
                  <span className="material-symbols-outlined text-base text-emerald-600">check_circle</span> $0 (100% Free Grant)
                </td>
                <td className="py-4 px-5 text-slate-600">$2,400+ per checkout lane</td>
                <td className="py-4 px-5 text-slate-600">$4,500+ per checkout lane</td>
              </tr>
              <tr>
                <td className="py-4 px-5 font-semibold text-slate-900">Automatic SNAP / EBT Separation</td>
                <td className="py-4 px-5 bg-emerald-50/40 font-bold text-emerald-800 border-x border-emerald-200 flex items-center gap-1 font-mono-telemetry">
                  <span className="material-symbols-outlined text-base text-emerald-600">check_circle</span> 1-Tap Auto Split
                </td>
                <td className="py-4 px-5 text-slate-600">Manual cashier calculation</td>
                <td className="py-4 px-5 text-slate-600">Cumbersome sub-total keying</td>
              </tr>
              <tr>
                <td className="py-4 px-5 font-semibold text-slate-900">Offline Internet Drop Failover</td>
                <td className="py-4 px-5 bg-emerald-50/40 font-bold text-emerald-800 border-x border-emerald-200 flex items-center gap-1 font-mono-telemetry">
                  <span className="material-symbols-outlined text-base text-emerald-600">check_circle</span> Dual-Mesh (Keeps Ringing)
                </td>
                <td className="py-4 px-5 text-slate-600">Transactions freeze or halt</td>
                <td className="py-4 px-5 text-slate-600">Requires in-store server reboot</td>
              </tr>
              <tr>
                <td className="py-4 px-5 font-semibold text-slate-900">Wholesale Invoice OCR Digitizer</td>
                <td className="py-4 px-5 bg-emerald-50/40 font-bold text-emerald-800 border-x border-emerald-200 flex items-center gap-1 font-mono-telemetry">
                  <span className="material-symbols-outlined text-base text-emerald-600">check_circle</span> Hunts Point Camera OCR
                </td>
                <td className="py-4 px-5 text-slate-600">None (Manual typing)</td>
                <td className="py-4 px-5 text-slate-600">Expensive third-party EDI ($$$)</td>
              </tr>
              <tr>
                <td className="py-4 px-5 font-semibold text-slate-900">On-Site Scale Calibration &amp; Setup</td>
                <td className="py-4 px-5 bg-emerald-50/40 font-bold text-emerald-800 border-x border-emerald-200 flex items-center gap-1 font-mono-telemetry">
                  <span className="material-symbols-outlined text-base text-emerald-600">check_circle</span> Local Certified Technician
                </td>
                <td className="py-4 px-5 text-slate-600">Remote phone call center only</td>
                <td className="py-4 px-5 text-slate-600">$180/hour technician service call</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
