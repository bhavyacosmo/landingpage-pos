import React from 'react';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  return (
    <>
      {/* Top Broadcast Notification Strip */}
      <aside aria-label="Notice" className="w-full bg-pine-deep text-white py-2 px-4 text-xs z-50 relative border-b border-emerald-900/60 font-mono-telemetry">
        <div className="max-w-[1380px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-bright animate-pulse shrink-0"></span>
            <span className="text-emerald-300 font-semibold uppercase tracking-wider text-[11px]">2026 Produce Merchant Grant:</span>
            <span className="text-slate-200 text-[11px] hidden sm:inline">12 Certified Hardware Kits available for qualifying NY/NJ/CT independent supermarkets. Zero upfront hardware cost.</span>
          </div>
          <a href="#hardware-grant" className="shrink-0 text-emerald-glow text-[11px] font-bold hover:underline flex items-center gap-1 uppercase tracking-wider">
            Check Eligibility <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </a>
        </div>
      </aside>

      {/* Header Floating Navigation Capsule */}
      <header className="sticky top-0 left-0 w-full z-40 px-4 sm:px-8 py-3 transition-all duration-300">
        <div className="max-w-[1380px] mx-auto flex items-center justify-between gap-4 glass-nav rounded-full px-5 py-2.5 shadow-subtle">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-pine-deep flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 text-emerald-glow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 6.5C11 5.67 11.67 5 12.5 5C13.33 5 14 5.67 14 6.5V9.5C14 10.33 13.33 11 12.5 11C11.67 11 11 10.33 11 9.5V6.5ZM16.5 17C16.5 17.83 15.83 18.5 15 18.5C14.17 18.5 13.5 17.83 13.5 17V14C13.5 13.17 14.17 12.5 15 12.5C15.83 12.5 16.5 13.17 16.5 14V17ZM8.5 15C8.5 15.83 7.83 16.5 7 16.5C6.17 16.5 5.5 15.83 5.5 15V11.5C5.5 10.67 6.17 10 7 10C7.83 10 8.5 10.67 8.5 11.5V15Z" fill="currentColor" fillOpacity="0.2"/>
                <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM7 11.5C7 10.67 7.67 10 8.5 10C9.33 10 10 10.67 10 11.5V15C10 15.83 9.33 16.5 8.5 16.5C7.67 16.5 7 15.83 7 15V11.5ZM14.5 17C13.67 17 13 16.33 13 15.5V12.5C13 11.67 13.67 11 14.5 11C15.33 11 16 11.67 16 12.5V15.5C16 16.33 15.33 17 14.5 17ZM13 7.5C13 6.67 12.33 6 11.5 6C10.67 6 10 6.67 10 7.5V9C10 9.83 10.67 10.5 11.5 10.5C12.33 10.5 13 9.83 13 9V7.5Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-bold tracking-tight text-slate-900 text-sm uppercase">Stitch</span>
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 bg-emerald-100 text-emerald-900 rounded font-mono-telemetry">PRODUCE OS</span>
              </div>
              <span className="text-[9.5px] uppercase tracking-widest text-text-subtle font-semibold">The Grocery Operating System</span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] font-bold tracking-wider uppercase text-text-muted">
            <a href="#devices" className="hover:text-emerald-700 transition-colors">Hardware Suite</a>
            <a href="#produce-intel" className="hover:text-emerald-700 transition-colors">Produce Engine</a>
            <a href="#workstations" className="hover:text-emerald-700 transition-colors">Dual Workstations</a>
            <a href="#simulator" className="hover:text-emerald-700 transition-colors">Live Tare Lab</a>
            <a href="#comparison" className="hover:text-emerald-700 transition-colors">ROI Comparison</a>
            <a href="#faq" className="hover:text-emerald-700 transition-colors">Grocer FAQ</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="tel:3472130687" className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border-hairline bg-white text-slate-800 text-xs font-semibold hover:border-emerald-600 hover:text-emerald-800 transition-all shadow-2xs">
              <span className="material-symbols-outlined text-[15px] text-emerald-accent">call</span>
              <span>(347) 213-0687</span>
            </a>
            <button 
              onClick={onOpenModal}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-pine-deep text-white text-xs font-bold tracking-wide uppercase hover:bg-pine-dark transition-all shadow-md hover:shadow-lg"
            >
              <span>Book Demo &amp; Hardware</span>
              <span className="material-symbols-outlined text-sm ml-1.5 text-emerald-bright">arrow_forward</span>
            </button>
          </div>

        </div>
      </header>
    </>
  );
};
