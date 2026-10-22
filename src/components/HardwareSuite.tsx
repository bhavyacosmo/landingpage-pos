import React from 'react';

interface HardwareSuiteProps {
  onOpenModal: () => void;
}

export const HardwareSuite: React.FC<HardwareSuiteProps> = ({ onOpenModal }) => {
  return (
    <section className="w-full py-20 lg:py-28 bg-white border-b border-border-hairline" id="devices">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 flex flex-col gap-14">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-900 self-start text-[11px] font-bold uppercase tracking-wider font-mono-telemetry">
              <span className="material-symbols-outlined text-sm text-emerald-accent">devices</span>
              CERTIFIED GROCERY HARDWARE SUITE
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold leading-tight">
              Industrial Precision. <br className="hidden sm:inline" />
              <span className="italic font-normal text-emerald-800">Futuristic, Minimalist Design.</span>
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Every device is certified for heavy commercial produce use, calibrated for Legal for Trade tare precision, and delivered directly to your checkout counter.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-slate-50 border border-border-hairline text-xs font-semibold text-slate-800">
              <span className="font-bold text-emerald-700">100% Free Setup</span> &bull; NTEP Class III Certified
            </div>
            <button 
              onClick={onOpenModal}
              className="px-6 py-2.5 rounded-full bg-pine-deep text-white text-xs font-bold uppercase tracking-wider hover:bg-pine-dark shadow-md transition-all cursor-pointer"
            >
              Claim Hardware Kit
            </button>
          </div>
        </div>

        {/* 6-Card Hardware Device Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Device 1: Dual IPS POS Terminal */}
          <div className="device-card relative bg-white rounded-3xl border border-border-hairline p-6 flex flex-col gap-5 shadow-subtle hover:border-emerald-500 hover:shadow-elevated transition-all group">
            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden relative bg-slate-100">
              <img src="/images/pos_terminal_hero.jpg" alt="15.6 Dual IPS Touchscreen Produce Terminal" className="device-card-img w-full h-full object-cover" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/85 text-emerald-300 text-[11px] font-bold font-mono-telemetry border border-white/10 shadow-xs">
                $1,450 Value
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-telemetry font-bold text-emerald-800 uppercase tracking-wider">CHECKOUT STATION</span>
                <span className="text-[11px] font-semibold text-slate-500">15.6" Dual Display</span>
              </div>
              <h3 className="font-editorial text-xl text-slate-900 font-semibold">15.6" Dual IPS Produce Terminal</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Bezel-less capacitive glass with anti-glare coating. Simultaneous cashier operation and clear customer-facing itemized scale breakdown.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-border-hairline flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
                <span className="material-symbols-outlined text-base">check_circle</span> Included in Grant ($0)
              </span>
              <span className="font-mono-telemetry text-[11px] text-text-subtle">IP54 Water/Dust Sealed</span>
            </div>
          </div>

          {/* Device 2: In-Counter Bi-Optic Scale */}
          <div className="device-card relative bg-white rounded-3xl border border-border-hairline p-6 flex flex-col gap-5 shadow-subtle hover:border-emerald-500 hover:shadow-elevated transition-all group">
            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden relative bg-slate-100">
              <img src="/images/bioptic_scale.jpg" alt="In-Counter Bi-Optic Produce Scale and 360 Barcode Scanner" className="device-card-img w-full h-full object-cover" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/85 text-emerald-300 text-[11px] font-bold font-mono-telemetry border border-white/10 shadow-xs">
                $1,850 Value
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-telemetry font-bold text-emerald-800 uppercase tracking-wider">SCALE &amp; LASER</span>
                <span className="text-[11px] font-semibold text-slate-500">Zebra MP7000 Spec</span>
              </div>
              <h3 className="font-editorial text-xl text-slate-900 font-semibold">In-Counter Bi-Optic Produce Scale</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Heavy-duty stainless steel weighing platter with sapphire glass 360° laser array. Reads barcodes through wet plastic bags and locks tare in 0.08s.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-border-hairline flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
                <span className="material-symbols-outlined text-base">check_circle</span> Included in Grant ($0)
              </span>
              <span className="font-mono-telemetry text-[11px] text-text-subtle">NTEP Legal for Trade</span>
            </div>
          </div>

          {/* Device 3: Rugged Mobile Inventory Scanner */}
          <div className="device-card relative bg-white rounded-3xl border border-border-hairline p-6 flex flex-col gap-5 shadow-subtle hover:border-emerald-500 hover:shadow-elevated transition-all group">
            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden relative bg-slate-100">
              <img src="/images/handheld_scanner.jpg" alt="Zebra Rugged Handheld Produce Scanner Terminal" className="device-card-img w-full h-full object-cover" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/85 text-emerald-300 text-[11px] font-bold font-mono-telemetry border border-white/10 shadow-xs">
                $850 Value
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-telemetry font-bold text-emerald-800 uppercase tracking-wider">FLOOR &amp; RECEIVING</span>
                <span className="text-[11px] font-semibold text-slate-500">Wireless 5GHz Wi-Fi</span>
              </div>
              <h3 className="font-editorial text-xl text-slate-900 font-semibold">Wireless Inventory &amp; Receiving Terminal</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Take stock counts in the cooler, scan Hunts Point delivery manifests on the loading dock, and push price markdowns right from the produce floor.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-border-hairline flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
                <span className="material-symbols-outlined text-base">check_circle</span> Included in Grant ($0)
              </span>
              <span className="font-mono-telemetry text-[11px] text-text-subtle">Drop-proof 6ft Concrete</span>
            </div>
          </div>

          {/* Device 4: Electronic Shelf Labels (ESL) */}
          <div className="device-card relative bg-white rounded-3xl border border-border-hairline p-6 flex flex-col gap-5 shadow-subtle hover:border-emerald-500 hover:shadow-elevated transition-all group">
            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden relative bg-slate-100">
              <img src="/images/electronic_shelf_labels.jpg" alt="Dynamic Electronic Shelf Labels for Fresh Produce" className="device-card-img w-full h-full object-cover" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/85 text-emerald-300 text-[11px] font-bold font-mono-telemetry border border-white/10 shadow-xs">
                $650 Demo Kit
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-telemetry font-bold text-emerald-800 uppercase tracking-wider">DYNAMIC PRICING</span>
                <span className="text-[11px] font-semibold text-slate-500">E-Paper Display</span>
              </div>
              <h3 className="font-editorial text-xl text-slate-900 font-semibold">Electronic Shelf Labels (ESL Tags)</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Crisp 3-color e-ink tags clipped to produce racks. Change berry or avocado prices in the backoffice and watch shelf tags update in under 5 seconds.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-border-hairline flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
                <span className="material-symbols-outlined text-base">check_circle</span> Included in Pilot ($0)
              </span>
              <span className="font-mono-telemetry text-[11px] text-text-subtle">5-Year Battery Life</span>
            </div>
          </div>

          {/* Device 5: Thermal Receipt Printer & PIN Pad */}
          <div className="device-card relative bg-white rounded-3xl border border-border-hairline p-6 flex flex-col gap-5 shadow-subtle hover:border-emerald-500 hover:shadow-elevated transition-all group">
            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden relative bg-slate-100">
              <img src="/images/pinpad_printer.jpg" alt="Thermal Receipt Printer and Contactless Payment Pinpad" className="device-card-img w-full h-full object-cover" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/85 text-emerald-300 text-[11px] font-bold font-mono-telemetry border border-white/10 shadow-xs">
                $780 Value
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-telemetry font-bold text-emerald-800 uppercase tracking-wider">PAYMENT &amp; TICKET</span>
                <span className="text-[11px] font-semibold text-slate-500">PCI-DSS Level 1</span>
              </div>
              <h3 className="font-editorial text-xl text-slate-900 font-semibold">Thermal Receipt Printer &amp; Smart PIN Pad</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Whisper-quiet 300mm/s printer with jam-proof guillotine cutter. Contactless reader supports Apple Pay, EMV chip, and certified SNAP/EBT payments.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-border-hairline flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
                <span className="material-symbols-outlined text-base">check_circle</span> Included in Grant ($0)
              </span>
              <span className="font-mono-telemetry text-[11px] text-text-subtle">Zero Paper Jams</span>
            </div>
          </div>

          {/* Device 6: The Full Produce Checkout Suite */}
          <div className="device-card relative bg-white rounded-3xl border border-border-hairline p-6 flex flex-col gap-5 shadow-subtle hover:border-emerald-500 hover:shadow-elevated transition-all group">
            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden relative bg-slate-100">
              <img src="/images/hardware_suite.jpg" alt="Complete All-in-One Produce Lane Hardware Suite" className="device-card-img w-full h-full object-cover" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/85 text-emerald-300 text-[11px] font-bold font-mono-telemetry border border-white/10 shadow-xs">
                $5,000 Bundle
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-telemetry font-bold text-emerald-800 uppercase tracking-wider">COMPLETE LANE BUNDLE</span>
                <span className="text-[11px] font-semibold text-slate-500">Turnkey Setup</span>
              </div>
              <h3 className="font-editorial text-xl text-slate-900 font-semibold">Turnkey Produce Lane Workstation</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Everything required for high-volume grocery operations: terminal, scale, barcode scanner, receipt printer, cash drawer, and router hub delivered plug-and-play.
              </p>
            </div>
            <div className="mt-auto pt-4 border-t border-border-hairline flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
                <span className="material-symbols-outlined text-base">check_circle</span> $0 Capital Required
              </span>
              <span className="font-mono-telemetry text-[11px] text-emerald-800 font-bold">Free Setup &bull; 100% Grant</span>
            </div>
          </div>

        </div>

        {/* Full Produce Counter Experience Banner */}
        <div className="w-full rounded-[2.5rem] overflow-hidden border border-border-hairline bg-surface-warm p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-8 shadow-subtle">
          <div className="w-full lg:w-1/2 h-64 sm:h-80 rounded-2xl overflow-hidden relative">
            <img src="/images/produce_ambient.jpg" alt="Fresh organic supermarket produce arranged on slate" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs font-mono-telemetry text-emerald-300 font-bold uppercase tracking-wider">
                CERTIFIED FOR ORGANIC &amp; CONVENTIONAL PRODUCE MERCHANTS
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider self-start font-mono-telemetry">
              <span className="material-symbols-outlined text-sm text-emerald-accent">eco</span>
              ZERO-COMPROMISE PERISHABLE ENGINEERING
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-semibold leading-tight">
              Engineered for the realities of fresh market checkout.
            </h3>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              From wet leafy greens and soil-dusted root vegetables to heirloom apples and deli bulk seeds, Stitch Produce OS auto-detects tare weights, categorizes SNAP-eligible foods, and eliminates cashier hesitation.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button 
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-pine-deep text-white text-xs font-bold uppercase tracking-wider hover:bg-pine-dark shadow-md transition-all cursor-pointer"
              >
                <span>Reserve Free Lane Bundle</span>
                <span className="material-symbols-outlined text-sm text-emerald-bright">arrow_forward</span>
              </button>
              <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-emerald-accent text-base">verified</span>
                Certified Technician Setup Included
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
