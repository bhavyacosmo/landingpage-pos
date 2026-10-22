import React from 'react';

export const AppleFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#f5f5f4] dark:bg-[#07080a] border-t border-neutral-200 dark:border-neutral-800/80 text-neutral-500 dark:text-neutral-400 py-12 sm:py-16 text-xs transition-colors">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-10">
        
        {/* Footnote statement */}
        <p className="text-[11px] leading-relaxed max-w-4xl border-b border-neutral-200 dark:border-neutral-800/80 pb-6 sm:pb-8 text-neutral-500 dark:text-neutral-400">
          * Free Hardware Package is provided on a first-come, first-served basis for grocery and fresh produce store owners. Free on-site scale setup, counter integration, and NTEP legal-for-trade certification are provided by certified technicians. 100% offline resilience powered by embedded local SQLite synchronization.
        </p>

        {/* Directory links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="font-bold text-black dark:text-white uppercase tracking-wider text-[11px] font-mono-telemetry mb-3">
              Hardware Suite
            </div>
            <ul className="space-y-2">
              <li><a href="/#hardware" className="hover:text-black dark:hover:text-white transition-colors">Dual Touchscreen Register</a></li>
              <li><a href="/#hardware" className="hover:text-black dark:hover:text-white transition-colors">Zebra Bi-Optic Scanner Scale</a></li>
              <li><a href="/#hardware" className="hover:text-black dark:hover:text-white transition-colors">Handheld Store Scanner</a></li>
              <li><a href="/#hardware" className="hover:text-black dark:hover:text-white transition-colors">Digital Shelf Price Tags (ESL)</a></li>
              <li><a href="/#hardware" className="hover:text-black dark:hover:text-white transition-colors">Silent Receipt Printer &amp; Pinpad</a></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-black dark:text-white uppercase tracking-wider text-[11px] font-mono-telemetry mb-3">
              Produce AI Engine
            </div>
            <ul className="space-y-2">
              <li><a href="/#register-demo" className="hover:text-black dark:hover:text-white transition-colors">0.08s Scale Stabilization</a></li>
              <li><a href="/#register-demo" className="hover:text-black dark:hover:text-white transition-colors">1-Tap EBT SNAP Food Stamps Split</a></li>
              <li><a href="/#ai-invoices" className="hover:text-black dark:hover:text-white transition-colors">AI Vendor Invoice Scanner</a></li>
              <li><a href="/#pillars" className="hover:text-black dark:hover:text-white transition-colors">100% Offline SQLite Resilience</a></li>
              <li><a href="/#pillars" className="hover:text-black dark:hover:text-white transition-colors">Live Mobile Web Backoffice</a></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-black dark:text-white uppercase tracking-wider text-[11px] font-mono-telemetry mb-3">
              Compliance &amp; Certs
            </div>
            <ul className="space-y-2">
              <li><span className="text-black dark:text-white font-semibold">Scale Certified</span> NTEP Class III Legal</li>
              <li><span className="text-black dark:text-white font-semibold">Bank Card Safe</span> PCI-DSS Certified Level 1</li>
              <li><span className="text-black dark:text-white font-semibold">Food Assistance</span> USDA EBT &amp; WIC Approved</li>
              <li><span className="text-black dark:text-white font-semibold">Produce Grade</span> Splash &amp; Dirt Protected</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-black dark:text-white uppercase tracking-wider text-[11px] font-mono-telemetry mb-3">
              Produce POS Direct
            </div>
            <ul className="space-y-2 font-mono-telemetry text-[11px]">
              <li className="text-black dark:text-white font-bold text-sm">(347) 213-0687</li>
              <li>support@produceai.co</li>
              <li>3508 White Plains Rd, Bronx, NY</li>
              <li className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">24/7 Produce Support Line</li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 sm:pt-8 border-t border-neutral-200 dark:border-neutral-800/80 text-[11px]">
          <div className="flex items-center gap-3">
            <div className="h-7 px-2 py-0.5 rounded-lg bg-black border border-white/10 flex items-center justify-center">
              <img src="/images/produce_ai_logo.png" alt="Produce Ai" className="h-full w-auto object-contain" />
            </div>
            <span>Copyright &copy; 2026 Produce AI POS Inc. All rights reserved.</span>
          </div>
          <div className="flex gap-4 sm:gap-6 font-mono-telemetry">
            <a href="/privacy-policy" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Scale Drivers</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
