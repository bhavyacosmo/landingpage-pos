import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border-hairline text-text-muted bg-white">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 py-16 flex flex-col gap-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Summary */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-pine-deep flex items-center justify-center text-white shadow-xs">
                <svg className="w-4 h-4 text-emerald-glow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 6.5C11 5.67 11.67 5 12.5 5C13.33 5 14 5.67 14 6.5V9.5C14 10.33 13.33 11 12.5 11C11.67 11 11 10.33 11 9.5V6.5Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold tracking-tight text-slate-900 text-base uppercase">Stitch</span>
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 bg-emerald-100 text-emerald-900 rounded font-mono-telemetry">PRODUCE OS</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-text-muted max-w-sm leading-relaxed">
              The modern grocery operating system and point-of-sale platform engineered for high-velocity produce markets, independent supermarkets, and specialty food grocers.
            </p>

            <div className="flex flex-col gap-2 text-xs text-text-muted pt-2 font-mono-telemetry">
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <span className="material-symbols-outlined text-emerald-accent text-sm">location_on</span>
                3508 White Plains Road, Bronx, NY 10467
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-accent text-sm">call</span>
                Direct Hotline: (347) 213-0687
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-accent text-sm">mail</span>
                enterprise@stitch-producepos.com
              </div>
            </div>
          </div>

          {/* Architecture Links */}
          <div className="flex flex-col gap-2.5">
            <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1 font-mono-telemetry">Architecture</div>
            <a href="#workstations" className="text-xs hover:text-emerald-700 transition-colors">Produce Cashier Lane POS</a>
            <a href="#workstations" className="text-xs hover:text-emerald-700 transition-colors">Management Hub &amp; Backoffice</a>
            <a href="#simulator" className="text-xs hover:text-emerald-700 transition-colors">0.08s Scale Telemetry Bridge</a>
            <a href="#devices" className="text-xs hover:text-emerald-700 transition-colors">Dual IPS Touchscreens</a>
            <a href="#devices" className="text-xs hover:text-emerald-700 transition-colors">Electronic Shelf Label Tags</a>
            <a href="#hardware-grant" className="text-xs hover:text-emerald-700 transition-colors">Merchant Hardware Grant</a>
          </div>

          {/* Certified Devices */}
          <div className="flex flex-col gap-2.5">
            <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1 font-mono-telemetry">Certified Devices</div>
            <div className="flex items-center gap-2 text-xs"><span className="material-symbols-outlined text-emerald-accent text-sm">check</span>Zebra MP7000 Bi-Optic</div>
            <div className="flex items-center gap-2 text-xs"><span className="material-symbols-outlined text-emerald-accent text-sm">check</span>15.6" Dual Touch Displays</div>
            <div className="flex items-center gap-2 text-xs"><span className="material-symbols-outlined text-emerald-accent text-sm">check</span>Zebra TC52 Inventory PDA</div>
            <div className="flex items-center gap-2 text-xs"><span className="material-symbols-outlined text-emerald-accent text-sm">check</span>Electronic Shelf Labels (ESL)</div>
            <div className="flex items-center gap-2 text-xs"><span className="material-symbols-outlined text-emerald-accent text-sm">check</span>High-Speed Thermal Printers</div>
            <div className="flex items-center gap-2 text-xs"><span className="material-symbols-outlined text-emerald-accent text-sm">check</span>EMV / SNAP Pinpads</div>
          </div>

          {/* Compliance & Security */}
          <div className="flex flex-col gap-2.5">
            <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1 font-mono-telemetry">Compliance</div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-border-hairline flex flex-col gap-2 shadow-2xs font-mono-telemetry">
              <div className="flex items-center gap-2 text-slate-900 text-[11px] font-bold">
                <span className="material-symbols-outlined text-sm text-emerald-accent">verified_user</span>PCI-DSS Level 1
              </div>
              <div className="flex items-center gap-2 text-slate-900 text-[11px] font-bold">
                <span className="material-symbols-outlined text-sm text-emerald-accent">payments</span>EBT &amp; SNAP Certified
              </div>
              <div className="flex items-center gap-2 text-slate-900 text-[11px] font-bold">
                <span className="material-symbols-outlined text-sm text-emerald-accent">scale</span>NTEP Legal for Trade
              </div>
              <div className="flex items-center gap-2 text-slate-900 text-[11px] font-bold">
                <span className="material-symbols-outlined text-sm text-emerald-accent">eco</span>USDA / WIC Compliant
              </div>
            </div>
            <p className="text-[11px] text-text-subtle leading-tight pt-1 font-sans">
              Automatic dual-mesh local offline architecture ensures continuous uninterrupted grocery sales.
            </p>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 border-t border-border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-subtle">
          <p>&copy; 2026 Stitch Produce OS Systems Inc. Built for Independent Grocers.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Merchant Agreement</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Weights &amp; Measures Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
