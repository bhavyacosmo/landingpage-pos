import React, { useState } from 'react';

export const RoiCalculator: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  const [lanes, setLanes] = useState<number>(2);
  const [dailyCustomers, setDailyCustomers] = useState<number>(550);

  // Formulas based on Produce AI metrics
  // 1. Hardware Savings: $5,000 package per lane free
  const hardwareSavings = lanes * 5000;

  // 2. Weekly Invoice Time Saved: 10 hrs per month per store = ~40 hrs/month
  const monthlyHoursSaved = 35 + lanes * 5;

  // 3. Extra line velocity revenue: faster checkout saves ~1.5s per customer, prevents walk-outs
  const monthlyLineRecovery = Math.round((dailyCustomers * 30 * 0.45));

  return (
    <section className="w-full py-16 sm:py-24 md:py-28 bg-white dark:bg-[#0d0f14] border-b border-neutral-200 dark:border-neutral-800/80 transition-colors" id="roi">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="text-[11px] font-mono-telemetry uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              GROCERY ROI CALCULATOR
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black dark:text-white uppercase">
              Calculate Your Store Savings.
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 font-medium max-w-md text-sm sm:text-base tracking-tight">
            See how much your supermarket saves on equipment costs, manual invoice data entry, and checkout line velocity.
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="reveal-scale delay-150 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-50/70 dark:bg-[#121418]/70 p-6 sm:p-10 md:p-12 rounded-[2.5rem] border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl shadow-xs max-w-5xl mx-auto">
          
          {/* Sliders Area (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Slider 1: Lanes */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold text-black dark:text-white uppercase tracking-tight">
                  Number of Checkout Lanes
                </label>
                <span className="text-base sm:text-lg font-black font-mono-telemetry text-emerald-600 dark:text-emerald-400">
                  {lanes} {lanes === 1 ? 'Lane' : 'Lanes'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={lanes}
                onChange={(e) => setLanes(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono-telemetry text-neutral-400">
                <span>1 Lane</span>
                <span>4 Lanes</span>
                <span>8 Lanes</span>
              </div>
            </div>

            {/* Slider 2: Daily Customers */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold text-black dark:text-white uppercase tracking-tight">
                  Daily Store Customers
                </label>
                <span className="text-base sm:text-lg font-black font-mono-telemetry text-emerald-600 dark:text-emerald-400">
                  {dailyCustomers.toLocaleString()} Shoppers / Day
                </span>
              </div>
              <input
                type="range"
                min="150"
                max="2000"
                step="50"
                value={dailyCustomers}
                onChange={(e) => setDailyCustomers(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono-telemetry text-neutral-400">
                <span>150 / day</span>
                <span>1,000 / day</span>
                <span>2,000 / day</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#161920] border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              &bull; Includes complete dual-screen register, Zebra scale, handheld scanner, and digital shelf tags for all {lanes} lanes at <strong>$0 upfront cost</strong>.
            </div>

          </div>

          {/* Savings Metric Outputs (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            <div className="p-6 sm:p-7 rounded-3xl bg-black dark:bg-[#090b0e] text-white border border-neutral-800 shadow-xl flex flex-col gap-5">
              
              <div className="text-[11px] font-mono-telemetry uppercase tracking-wider text-emerald-400 font-bold border-b border-white/10 pb-3 flex items-center justify-between">
                <span>PROJECTED STORE VALUE</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>

              {/* Stat 1: Equipment Savings */}
              <div>
                <span className="text-[10px] font-mono-telemetry text-neutral-400 uppercase">
                  UPFRONT EQUIPMENT SAVED ($0 PROGRAM):
                </span>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono-telemetry">
                  ${hardwareSavings.toLocaleString()} Free
                </div>
              </div>

              {/* Stat 2: Labor hours saved on invoices */}
              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] font-mono-telemetry text-neutral-400 uppercase">
                  MONTHLY PAPERWORK HOURS SAVED (AI SCANNER):
                </span>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono-telemetry">
                  ~{monthlyHoursSaved} Hours / Month
                </div>
              </div>

              {/* Stat 3: Faster lines recovery */}
              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] font-mono-telemetry text-neutral-400 uppercase">
                  FASTER CHECKOUT REVENUE RECOVERY:
                </span>
                <div className="text-2xl sm:text-3xl font-black text-emerald-300 font-mono-telemetry">
                  +${monthlyLineRecovery.toLocaleString()} / Month
                </div>
              </div>

              {/* CTA Inside Calculator */}
              <button
                onClick={onOpenModal}
                className="w-full mt-2 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-lg text-center"
              >
                Claim Free Equipment for {lanes} {lanes === 1 ? 'Lane' : 'Lanes'} &rarr;
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
