import React, { useState } from 'react';

interface InvoiceLine {
  item: string;
  qty: string;
  prevCost: string;
  newCost: string;
  priceAction: string;
  margin: string;
}

const SAMPLE_INVOICE: InvoiceLine[] = [
  { item: "Organic Hass Avocados (Case 48ct)", qty: "4 Cases", prevCost: "$38.00", newCost: "$44.50", priceAction: "+$0.30 / ea", margin: "38.5% Safe" },
  { item: "Hunts Point Roma Tomatoes (25lb Box)", qty: "8 Boxes", prevCost: "$19.50", newCost: "$21.00", priceAction: "+$0.15 / lb", margin: "42.0% Safe" },
  { item: "Green Plantains (50lb Sack)", qty: "6 Sacks", prevCost: "$28.00", newCost: "$28.00", priceAction: "No Change", margin: "46.2% Safe" },
  { item: "Jamaican Yellow Yam (40lb Box)", qty: "5 Boxes", prevCost: "$68.00", newCost: "$74.00", priceAction: "+$0.25 / lb", margin: "40.1% Safe" },
];

export const InvoiceScannerDemo: React.FC = () => {
  const [scanning, setScanning] = useState<boolean>(false);
  const [scanned, setScanned] = useState<boolean>(true);

  const handleTriggerScan = () => {
    setScanning(true);
    setScanned(false);
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
    }, 1200);
  };

  return (
    <section className="w-full py-16 sm:py-24 md:py-28 bg-[#fafaf9] dark:bg-[#090b0e] border-b border-neutral-200 dark:border-neutral-800/80 transition-colors" id="ai-invoices">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="text-[11px] font-mono-telemetry uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              AI PAPER INVOICE DIGITIZER
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black dark:text-white uppercase leading-tight">
              Snap A Delivery Bill. <br />
              <span className="text-emerald-600 dark:text-emerald-400">Prices Update in 4s.</span>
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 font-medium max-w-md text-sm sm:text-base tracking-tight">
            Stop spending 2 hours every night keying in paper vendor invoices by hand. Produce AI reads the delivery slip, spots cost jumps, and adjusts shelf prices automatically.
          </p>
        </div>

        {/* Interactive Scanner Comparison Stage */}
        <div className="reveal-scale delay-150 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-white/70 dark:bg-[#121418]/70 p-5 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl shadow-xs">
          
          {/* Left Visual: Paper Invoice Scanner with Live Laser Effect (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-300 dark:border-neutral-700 aspect-[16/11] p-5 sm:p-6 text-white font-mono-telemetry flex flex-col justify-between shadow-lg">
              
              {/* Animated Laser Beam */}
              {scanning && (
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#10b981] animate-bounce z-20 top-1/2"></div>
              )}

              {/* Invoice Paper Mockup */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                <div>
                  <div className="font-bold text-emerald-400">HUNTS POINT PRODUCE MARKET &bull; INVOICE #89421</div>
                  <div className="text-[10px] text-neutral-400">Terminal Delivery Slip &bull; Received 05:45 AM</div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  {scanning ? 'READING WITH AI...' : scanned ? '✓ 4 ITEMS DIGITIZED' : 'READY TO SCAN'}
                </span>
              </div>

              {/* Scanned Lines preview */}
              <div className="space-y-2 py-2 text-xs">
                {SAMPLE_INVOICE.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 text-[11px]">
                    <span className="text-white font-medium truncate max-w-[200px] sm:max-w-[240px]">{item.item}</span>
                    <span className="text-emerald-400 font-bold">{item.newCost}</span>
                  </div>
                ))}
              </div>

              {/* Bottom status of the scanner */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-neutral-400">
                <span>Vendor: D'Arrigo Bros Wholesale</span>
                <span className="text-white font-bold">4 Line Items Verified</span>
              </div>

            </div>

            {/* Scan Trigger Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleTriggerScan}
                disabled={scanning}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-black dark:bg-emerald-500 text-white dark:text-black text-xs font-bold font-mono-telemetry tracking-tight hover:bg-neutral-800 dark:hover:bg-emerald-400 transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">document_scanner</span>
                <span>{scanning ? 'Reading Invoice with AI...' : 'Scan Sample Delivery Bill'}</span>
              </button>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                Takes 4 seconds &bull; 99.8% text accuracy
              </span>
            </div>

          </div>

          {/* Right Column: Automated Margin Protection & Digital Tag Sync (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            <div className="p-5 sm:p-6 rounded-2xl bg-neutral-50/80 dark:bg-[#161920] border border-neutral-200/80 dark:border-neutral-800 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-telemetry uppercase text-emerald-700 dark:text-emerald-400 font-bold tracking-wider">
                  AUTOMATED PROFIT PROTECTION
                </span>
                <span className="text-[10px] font-mono-telemetry px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                  Live Margin Guard
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white tracking-tight uppercase">
                Wholesale cost went up $6.50 on avocados?
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-medium leading-relaxed">
                Produce AI flags the price rise immediately. Instead of losing money on every sale, your store price updates to preserve your 38% gross margin.
              </p>

              {/* Digital Shelf Tag Sync Notification */}
              <div className="mt-2 p-3.5 rounded-xl bg-white dark:bg-[#1a1e27] border border-neutral-200 dark:border-neutral-700 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-base">cell_tower</span>
                </div>
                <div className="text-xs">
                  <div className="font-bold text-black dark:text-white">
                    Digital Shelf Price Tags (ESL) Synced
                  </div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    Aisle 1 produce displays updated across the store in 4 seconds wirelessly.
                  </div>
                </div>
              </div>
            </div>

            {/* Old Way vs Produce AI Comparison Pills */}
            <div className="grid grid-cols-2 gap-3 font-mono-telemetry text-xs">
              <div className="p-3.5 rounded-xl bg-neutral-100 dark:bg-[#15171d] border border-neutral-200 dark:border-neutral-800 flex flex-col gap-1">
                <span className="text-red-500 font-bold text-[10px] uppercase">OLD MANUAL WAY</span>
                <span className="font-bold text-black dark:text-white">2+ Hours / Day</span>
                <span className="text-[10px] text-neutral-500">Typing invoices by hand</span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col gap-1">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[10px] uppercase">PRODUCE AI WAY</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400">4 Seconds Flat</span>
                <span className="text-[10px] text-neutral-600 dark:text-neutral-400">Zero manual typing</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
