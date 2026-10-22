import React, { useState } from 'react';

interface FeatureCard {
  title: string;
  desc: string;
  icon: string;
  tag: string;
}

const PILLAR_1_FEATURES: FeatureCard[] = [
  {
    title: "Zebra Scale Bridge",
    desc: "Direct connection to Zebra MP7000, Magellan, and CAS scales for instant 0.1s tare weight calculation.",
    icon: "scale",
    tag: "0.1s LATENCY"
  },
  {
    title: "Dual Customer Display",
    desc: "Show real-time item prices, promotions, and totals on a dedicated 15.6\" secondary monitor facing the shopper.",
    icon: "monitor",
    tag: "TRANSPARENCY"
  },
  {
    title: "EBT, WIC & OTC Payments",
    desc: "Seamlessly split tenders across Cash, Credit, Debit, EBT SNAP Food Stamps, WIC, and OTC health benefit cards.",
    icon: "credit_card",
    tag: "1-TAP SPLIT"
  },
  {
    title: "Thermal Printers & Drawers",
    desc: "Direct raw thermal receipt printing and automated cash drawer kick commands via high-speed IPC.",
    icon: "receipt_long",
    tag: "JAM-FREE"
  },
  {
    title: "Scale Station Barcodes",
    desc: "Integrated deli and produce scale station barcode printing for pre-weighed packaging.",
    icon: "qr_code_scanner",
    tag: "DELI & GREENS"
  },
  {
    title: "100% Offline Resilience",
    desc: "POS lanes continue ringing sales even if internet drops. Local SQLite syncs automatically when reconnected.",
    icon: "wifi_off",
    tag: "ZERO DOWNTIME"
  }
];

const PILLAR_2_FEATURES: FeatureCard[] = [
  {
    title: "Smart Pricebook",
    desc: "Manage item cost, retail price, margin percentages, and bulk department pricing rules with zero spreadsheet headaches.",
    icon: "menu_book",
    tag: "MARGIN GUARD"
  },
  {
    title: "Electronic Shelf Tags (ESL)",
    desc: "Sync price updates live to digital e-ink shelf labels across every aisle simultaneously in under 4 seconds.",
    icon: "sell",
    tag: "WIRELESS E-INK"
  },
  {
    title: "AI Vendor Invoice Reader",
    desc: "AI extracts item costs, quantities, and UPC barcodes from scanned paper vendor delivery slips in 4 seconds.",
    icon: "document_scanner",
    tag: "AI OCR"
  },
  {
    title: "Shrinkage & Spoilage Log",
    desc: "Track damaged produce, expired goods, and shrinkage loss with detailed reason codes and manager sign-offs.",
    icon: "delete_sweep",
    tag: "WASTE AUDIT"
  },
  {
    title: "Low Stock Alerts",
    desc: "Automated warnings when produce inventory falls below minimum safety stock levels before shelves run dry.",
    icon: "notification_important",
    tag: "AUTO REORDER"
  },
  {
    title: "Vendor Directory & POs",
    desc: "Store supplier profiles, purchase orders, account numbers, and net-30 payment terms in one central hub.",
    icon: "storefront",
    tag: "SUPPLIER HUB"
  }
];

const PILLAR_3_FEATURES: FeatureCard[] = [
  {
    title: "Real-Time P&L Dashboard",
    desc: "Track daily gross revenue, net profit, tax collected, cash overage/shortage, and sales trends from your phone or home laptop.",
    icon: "query_stats",
    tag: "PHONE ACCESS"
  },
  {
    title: "Z-Reports & Shift Audits",
    desc: "Print comprehensive end-of-shift drawer counts, cashier reconciliations, and tender audit reports with one tap.",
    icon: "summarize",
    tag: "DRAWER ACCURACY"
  },
  {
    title: "Employee Roles & RBAC",
    desc: "Granular permissions control for cashiers, managers, inventory clerks, and store accountants to prevent theft.",
    icon: "badge",
    tag: "SECURITY"
  },
  {
    title: "Department Sales Breakdown",
    desc: "Analyze revenue by Fresh Produce, Meat, Deli, Dairy, and Grocery to optimize shelf space and order quantities.",
    icon: "pie_chart",
    tag: "CATEGORY DATA"
  },
  {
    title: "Multi-Store Fleet View",
    desc: "Own 2 or more grocery locations? Compare register velocities, margins, and shrinkage across all stores simultaneously.",
    icon: "domain",
    tag: "CHAIN READY"
  },
  {
    title: "Cloud Backup & Sync",
    desc: "Every transaction, tare calibration event, and pricebook update is encrypted and backed up continuously.",
    icon: "cloud_done",
    tag: "ENCRYPTED"
  }
];

export const ProducePillars: React.FC = () => {
  const [activePillar, setActivePillar] = useState<1 | 2 | 3>(1);

  const features = activePillar === 1 
    ? PILLAR_1_FEATURES 
    : activePillar === 2 
      ? PILLAR_2_FEATURES 
      : PILLAR_3_FEATURES;

  return (
    <section className="w-full py-16 sm:py-24 md:py-28 bg-[#fafaf9] dark:bg-[#090b0e] border-b border-neutral-200 dark:border-neutral-800/80 transition-colors" id="pillars">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="reveal-on-scroll mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
          <div className="text-[11px] font-mono-telemetry uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold mb-2">
            COMPLETE SYSTEM ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black dark:text-white uppercase leading-tight">
            Everything Your Grocery Store Needs. <br />
            <span className="text-emerald-600 dark:text-emerald-400">In One System.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-medium mt-3">
            From lightning-fast weight scale checkout to automated AI vendor invoice scanning and mobile backoffice telemetry.
          </p>
        </div>

        {/* 3 Pillar Tabs - Responsive Segmented Navigation */}
        <div className="reveal-on-scroll delay-100 w-full max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="grid grid-cols-3 gap-1 sm:gap-2 p-1.5 rounded-2xl sm:rounded-full bg-neutral-200/50 dark:bg-[#12151b] border border-neutral-200 dark:border-neutral-800/80 backdrop-blur-xl shadow-xs">
            <button
              onClick={() => setActivePillar(1)}
              onMouseEnter={() => setActivePillar(1)}
              className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3.5 px-2 sm:px-4 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-bold tracking-tight transition-all cursor-pointer ${
                activePillar === 1
                  ? 'bg-black dark:bg-emerald-500 text-white dark:text-black shadow-md scale-[1.01]'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-white/60 dark:hover:bg-neutral-800/50'
              }`}
            >
              <span className="material-symbols-outlined text-base sm:text-lg shrink-0">point_of_sale</span>
              <span className="hidden md:inline whitespace-nowrap">1. Front-Lane POS Register</span>
              <span className="md:hidden text-center leading-tight">1. POS Register</span>
            </button>

            <button
              onClick={() => setActivePillar(2)}
              onMouseEnter={() => setActivePillar(2)}
              className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3.5 px-2 sm:px-4 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-bold tracking-tight transition-all cursor-pointer ${
                activePillar === 2
                  ? 'bg-black dark:bg-emerald-500 text-white dark:text-black shadow-md scale-[1.01]'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-white/60 dark:hover:bg-neutral-800/50'
              }`}
            >
              <span className="material-symbols-outlined text-base sm:text-lg shrink-0">inventory_2</span>
              <span className="hidden md:inline whitespace-nowrap">2. Smart Pricebook &amp; Inventory</span>
              <span className="md:hidden text-center leading-tight">2. Pricebook &amp; Inv</span>
            </button>

            <button
              onClick={() => setActivePillar(3)}
              onMouseEnter={() => setActivePillar(3)}
              className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3.5 px-2 sm:px-4 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-bold tracking-tight transition-all cursor-pointer ${
                activePillar === 3
                  ? 'bg-black dark:bg-emerald-500 text-white dark:text-black shadow-md scale-[1.01]'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-white/60 dark:hover:bg-neutral-800/50'
              }`}
            >
              <span className="material-symbols-outlined text-base sm:text-lg shrink-0">analytics</span>
              <span className="hidden md:inline whitespace-nowrap">3. Live Web Backoffice</span>
              <span className="md:hidden text-center leading-tight">3. Web Backoffice</span>
            </button>
          </div>
        </div>

        {/* Feature Cards Grid (6 cards per pillar) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className={`reveal-scale ${idx % 3 === 1 ? 'delay-150' : idx % 3 === 2 ? 'delay-300' : ''} card-hover-effect p-6 sm:p-7 rounded-3xl bg-white/70 dark:bg-[#121418]/70 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl shadow-xs flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xl">{feat.icon}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-[#1a1f26] text-neutral-600 dark:text-neutral-300 font-mono-telemetry text-[10px] font-bold">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-black dark:text-white mb-2">
                  {feat.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center text-[11px] font-mono-telemetry text-emerald-600 dark:text-emerald-400 font-bold">
                <span>Included in Free Hardware Package</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
