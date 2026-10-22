import React, { useState } from 'react';

interface ProduceSimItem {
  name: string;
  plu: string;
  price: string;
  weight: string;
  total: string;
  category: string;
}

const SIM_ITEMS: ProduceSimItem[] = [
  { name: "Organic Honeycrisp Apples", plu: "PLU #4173 (Fresh Orchard)", price: "$1.99 / lb", weight: "1.45 lb", total: "$2.89", category: "Fresh Fruit" },
  { name: "Hass Avocado (Mexico)", plu: "PLU #4225 (Bulk Perishables)", price: "$1.49 / lb", weight: "1.80 lb", total: "$2.68", category: "Avocados" },
  { name: "Green Plantains", plu: "PLU #4235 (Tropical Roots)", price: "$0.89 / lb", weight: "3.20 lb", total: "$2.85", category: "Tropical Roots" },
  { name: "Roma Plum Tomatoes", plu: "PLU #4087 (Vine Produce)", price: "$1.99 / lb", weight: "2.10 lb", total: "$4.18", category: "Vine Vegetables" },
  { name: "Jamaican Yellow Yam", plu: "PLU #4819 (Specialty Tubers)", price: "$2.99 / lb", weight: "2.45 lb", total: "$7.33", category: "Exotic Produce" },
  { name: "Organic Tuscan Kale", plu: "PLU #4627 (Leafy Greens)", price: "$2.49 / bunch", weight: "2 bunches", total: "$4.98", category: "Organic Greens" }
];

export const TareSimulator: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isWeighing, setIsWeighing] = useState(false);

  const item = SIM_ITEMS[currentIdx];

  const handleSelect = (idx: number) => {
    setIsWeighing(true);
    setCurrentIdx(idx);
    setTimeout(() => {
      setIsWeighing(false);
    }, 180);
  };

  const handleCycle = () => {
    const nextIdx = (currentIdx + 1) % SIM_ITEMS.length;
    handleSelect(nextIdx);
  };

  return (
    <section className="w-full py-20 lg:py-24 bg-surface-warm border-b border-border-hairline" id="simulator">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 flex flex-col gap-12">
        
        <div className="flex flex-col items-center text-center gap-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-900 text-[11px] font-bold uppercase tracking-wider font-mono-telemetry">
            <span className="material-symbols-outlined text-sm text-emerald-accent">precision_manufacturing</span>
            INTERACTIVE SCALE SIMULATOR
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold tracking-tight">
            Experience sub-second tare weighing in real-time.
          </h2>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Test how Stitch locks item weight, applies tare calibration, and tags SNAP/EBT eligibility without a single millisecond of cashier lag.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto w-full">
          
          {/* Produce Item Picker Buttons (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono-telemetry">
              Tap a Produce Item to Simulate Scale Weigh-In:
            </span>

            <div className="grid grid-cols-2 gap-3">
              {SIM_ITEMS.map((sim, idx) => (
                <button 
                  key={sim.plu}
                  onClick={() => handleSelect(idx)}
                  className={`p-3.5 rounded-2xl bg-white text-left flex flex-col gap-1 transition-all shadow-xs cursor-pointer group ${
                    currentIdx === idx 
                      ? 'border border-emerald-500 ring-2 ring-emerald-500/20' 
                      : 'border border-border-hairline hover:border-emerald-500'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">{sim.name.split(' ')[0]} {sim.name.split(' ')[1]}</span>
                    <span className="text-[10px] font-mono-telemetry font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">{sim.plu.split(' ')[1]}</span>
                  </div>
                  <div className="flex items-baseline justify-between text-xs text-text-muted">
                    <span>{sim.price}</span>
                    <span className="text-[10px] text-emerald-800 font-semibold font-mono-telemetry">SNAP &bull; YES</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs text-emerald-950">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-700 text-lg">electric_bolt</span>
                <span>Automated Tare Calibration: 0.00 lb (Plastic Bag Zeroed)</span>
              </span>
              <span className="font-mono-telemetry font-bold">NTEP-CAL</span>
            </div>
          </div>

          {/* Live Readout Digital Platter (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative bg-white rounded-[2.5rem] border border-border-hairline p-7 sm:p-9 shadow-elevated overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-emerald-50 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col gap-5">
                {/* Scale Link Header */}
                <div className="flex items-center justify-between pb-3 border-b border-border-hairline">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-mono-telemetry text-[11px] font-bold tracking-wider uppercase text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Scale Bridge Live &bull; 0.08s
                    </span>
                  </div>
                  <span className="font-mono-telemetry text-[11px] font-bold text-slate-500">LANE #01 REGISTER</span>
                </div>

                {/* Live Weighing Readout Box */}
                <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col gap-2 shadow-inner border border-slate-800">
                  <div className="flex items-center justify-between text-[11px] font-mono-telemetry text-slate-400 uppercase">
                    <span>Bi-Optic Platter Readout</span>
                    <span className="text-emerald-400 font-bold">
                      {isWeighing ? 'CALIBRATING...' : 'TARE: 0.00 LB (LOCKED)'}
                    </span>
                  </div>
                  <div className="font-editorial text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    {item.name}
                  </div>
                  <div className="flex items-baseline justify-between pt-2 border-t border-slate-800 font-mono-telemetry">
                    <span className="text-emerald-400 font-bold text-base">{item.price}</span>
                    <span className={`text-xl sm:text-2xl font-extrabold text-white transition-opacity ${isWeighing ? 'opacity-40' : 'opacity-100'}`}>
                      {item.weight} = {item.total}
                    </span>
                  </div>
                </div>

                {/* Transaction Details Rows */}
                <div className="flex flex-col divide-y divide-border-hairline text-xs font-sans">
                  <div className="py-2.5 flex items-center justify-between">
                    <span className="text-text-muted flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-accent text-base">eco</span> PLU Classification
                    </span>
                    <span className="font-mono-telemetry font-bold text-slate-900">{item.plu}</span>
                  </div>

                  <div className="py-2.5 flex items-center justify-between">
                    <span className="text-text-muted flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-accent text-base">check_circle</span> SNAP / EBT Eligibility
                    </span>
                    <span className="font-semibold text-emerald-700 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">verified</span> 100% SNAP Eligible (Auto-Split)
                    </span>
                  </div>

                  <div className="py-2.5 flex items-center justify-between">
                    <span className="text-text-muted flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-accent text-base">wifi_off</span> Offline Kernel Status
                    </span>
                    <span className="font-semibold text-slate-900">Dual-Mesh Local (Zero Halt)</span>
                  </div>
                </div>

                {/* Simulation Cycle Button */}
                <button 
                  onClick={handleCycle}
                  className="w-full py-3 px-4 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-950 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span className="material-symbols-outlined text-base text-emerald-700">autorenew</span>
                  <span>Cycle to Next Produce Item (Live Tare Simulation)</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
