import React, { useState } from 'react';

interface DualWorkstationsProps {
  onOpenModal: () => void;
}

export const DualWorkstations: React.FC<DualWorkstationsProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'cashier' | 'backoffice'>('cashier');

  return (
    <section className="w-full py-20 lg:py-28 bg-white border-b border-border-hairline" id="workstations">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 flex flex-col gap-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border-hairline bg-slate-50 text-slate-800 self-start text-[11px] font-bold uppercase tracking-widest font-mono-telemetry">
              <span className="material-symbols-outlined text-sm text-emerald-accent">tune</span>
              DUAL WORKSTATION ARCHITECTURE
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold leading-tight">
              Simple at the Register. <br className="hidden sm:inline" />
              <span className="italic font-normal text-emerald-800">Unstoppable in the Back Office.</span>
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              A lightning-fast cashier terminal your staff can learn in five minutes, paired with cloud intelligence for inventory, wholesale invoices, and multi-lane management.
            </p>
          </div>

          {/* Interactive Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-border-hairline shrink-0">
            <button 
              onClick={() => setActiveTab('cashier')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'cashier' 
                  ? 'bg-pine-deep text-white shadow-xs' 
                  : 'text-text-muted hover:text-slate-900'
              }`}
            >
              <span className="material-symbols-outlined text-sm">point_of_sale</span>
              1. Front Lane POS Terminal
            </button>
            <button 
              onClick={() => setActiveTab('backoffice')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'backoffice' 
                  ? 'bg-pine-deep text-white shadow-xs' 
                  : 'text-text-muted hover:text-slate-900'
              }`}
            >
              <span className="material-symbols-outlined text-sm">analytics</span>
              2. Backoffice Cloud &amp; Margin Hub
            </button>
          </div>
        </div>

        {/* STAGE 1: FRONT LANE CASHIER VIEW */}
        {activeTab === 'cashier' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center transition-all duration-300">
            
            {/* Image View (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-center relative">
              <div className="w-full rounded-[2.2rem] overflow-hidden border border-border-hairline shadow-device bg-slate-900 relative group">
                <img 
                  src="/images/pos_terminal_hero.jpg" 
                  alt="Produce POS Front Lane Cashier Interface" 
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-slate-950/20 pointer-events-none"></div>

                {/* Top Screen Telemetry Pill */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-white text-[11px] font-mono-telemetry border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Zebra MP7000 Serial Link: 0.08s</span>
                </div>

                {/* Center Highlight */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-white shadow-2xl">
                    <span className="material-symbols-outlined text-emerald-bright text-base">bolt</span>
                    <span className="text-xs font-semibold tracking-wider uppercase font-sans">High-Throughput Cashier Interface</span>
                  </div>
                </div>

                {/* Bottom Tag */}
                <div className="absolute bottom-4 right-4 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-xl text-white/90 text-[11px] font-mono-telemetry z-10">
                  PLU Memory: 1,400 Keys Synced
                </div>
              </div>
            </div>

            {/* Feature Callouts (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 self-start px-3 py-1 rounded-full border border-emerald-200 font-mono-telemetry">
                <span className="material-symbols-outlined text-base">point_of_sale</span> FRONT CHECKOUT TERMINAL
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-slate-900 font-semibold">
                Instant Weighing &amp; One-Tap PLU Touch Matrix
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Eliminate long lines during peak hours. Cashiers tap color-coded item tiles or search by name in under a second. Weight registers automatically.
              </p>

              <div className="flex flex-col gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-surface-warm border border-border-hairline flex items-start gap-3.5 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">grid_view</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Visual Produce Grid</h4>
                    <p className="text-xs text-text-muted leading-relaxed">One-touch tiles for leafy greens, exotic roots, citrus, and organic berries.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-surface-warm border border-border-hairline flex items-start gap-3.5 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">scale</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Direct Scale Bridge</h4>
                    <p className="text-xs text-text-muted leading-relaxed">Zero-lag synchronization with Zebra, Magellan, and CAS bi-optic counter scales.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-surface-warm border border-border-hairline flex items-start gap-3.5 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">payments</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Automated EBT Split</h4>
                    <p className="text-xs text-text-muted leading-relaxed">Food items and household goods separate automatically during checkout.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={onOpenModal}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-pine-deep text-white text-xs font-bold uppercase tracking-wider hover:bg-pine-dark shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Free In-Store Demo</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* STAGE 2: BACKOFFICE CLOUD & MARGIN HUB VIEW */}
        {activeTab === 'backoffice' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center transition-all duration-300">
            
            {/* Feature Callouts (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 self-start px-3 py-1 rounded-full border border-slate-200 font-mono-telemetry">
                <span className="material-symbols-outlined text-base">cloud_sync</span> BACKOFFICE WORKSTATION &amp; CLOUD
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-slate-900 font-semibold">
                Live Margin Guard &amp; Smart Pricebook Hub
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Monitor real-time grocery profit margins across all lanes, scan delivery invoices with AI OCR, adjust produce shelf prices in one tap, and audit shrinkage.
              </p>

              <div className="flex flex-col gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-surface-warm border border-border-hairline flex items-start gap-3.5 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">trending_up</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Live Margin &amp; Shrink Guard</h4>
                    <p className="text-xs text-text-muted leading-relaxed">Real-time gross margin calculation (38.4%), hourly department volume, and reorder triggers.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-surface-warm border border-border-hairline flex items-start gap-3.5 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">receipt_long</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Wholesale Invoice OCR Digitizer</h4>
                    <p className="text-xs text-text-muted leading-relaxed">Snap a photo of your Hunts Point or Baldor produce invoice to update item costs in seconds.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-surface-warm border border-border-hairline flex items-start gap-3.5 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">sell</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Electronic Shelf Label Sync</h4>
                    <p className="text-xs text-text-muted leading-relaxed">Push markdown prices to every aisle tag before evening rush without printing paper.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={onOpenModal}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-pine-deep text-white text-xs font-bold uppercase tracking-wider hover:bg-pine-dark shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Unlock Backoffice Portal Demo</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Image View (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-center relative">
              <div className="w-full rounded-[2.2rem] overflow-hidden border border-border-hairline shadow-device bg-slate-900 relative group">
                <img 
                  src="/images/backoffice_dashboard.jpg" 
                  alt="Produce OS Backoffice Cloud Dashboard with Margin Telemetry" 
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-slate-950/20 pointer-events-none"></div>

                {/* Top Telemetry Tag */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-white text-[11px] font-mono-telemetry border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>GROSS MARGIN: 38.4% (LIVE STORE METRICS)</span>
                </div>

                {/* Center Highlight */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-white shadow-2xl">
                    <span className="material-symbols-outlined text-emerald-bright text-base">cloud_done</span>
                    <span className="text-xs font-semibold tracking-wider uppercase font-sans">Produce AI Backoffice Cloud</span>
                  </div>
                </div>

                {/* Bottom Tag */}
                <div className="absolute bottom-4 right-4 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-xl text-white/90 text-[11px] font-mono-telemetry z-10">
                  Live Status: 4 Lanes Synced &bull; 0 Errors
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
