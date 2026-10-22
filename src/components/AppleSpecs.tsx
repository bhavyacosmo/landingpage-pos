import React from 'react';

export const AppleSpecs: React.FC = () => {
  const specs = [
    { label: "Produce Scale Bridge", value: "Native drivers for Zebra MP7000, Magellan, CAS &bull; &lt; 0.1s latency" },
    { label: "Scale Certification", value: "Certified Legal for Trade (NTEP Class III) in all 50 states" },
    { label: "Dual Displays", value: "15.6\" Dual IPS Touchscreens &bull; Cashier + Shopper facing displays" },
    { label: "Payment Tenders", value: "EBT SNAP Food Stamps, WIC, OTC Cards, Apple Pay, Chip &amp; Cash" },
    { label: "AI Invoice Scanner", value: "Extracts vendor costs, item quantities, and UPC barcodes in 4 seconds" },
    { label: "Offline Resilience", value: "100% offline local SQLite engine &bull; Zero checkout downtime" },
    { label: "Digital Shelf Tags (ESL)", value: "Wireless e-ink shelf tags update storewide prices in under 4 seconds" },
    { label: "Equipment Cost", value: "$0 Due &bull; 100% Free Complete Hardware Package" }
  ];

  return (
    <section className="w-full py-16 sm:py-24 md:py-28 bg-white dark:bg-[#0d0f14] border-b border-neutral-200 dark:border-neutral-800/80 transition-colors" id="specs">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="reveal-on-scroll mb-10 sm:mb-14">
          <div className="text-[11px] font-mono-telemetry uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            SYSTEM SPECIFICATIONS
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black dark:text-white uppercase">
            The Spec Sheet.
          </h2>
        </div>

        {/* Minimalist Spec Grid with Glass Styling */}
        <div className="reveal-on-scroll delay-150 grid grid-cols-1 md:grid-cols-2 gap-x-12 divide-y divide-neutral-200 dark:divide-neutral-800/80">
          {specs.map((spec, i) => (
            <div key={i} className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-2">
              <span className="text-xs sm:text-sm font-bold text-black dark:text-white tracking-tight">{spec.label}</span>
              <span 
                className="text-xs sm:text-sm font-mono-telemetry text-neutral-600 dark:text-neutral-400 sm:text-right" 
                dangerouslySetInnerHTML={{ __html: spec.value }}
              ></span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
