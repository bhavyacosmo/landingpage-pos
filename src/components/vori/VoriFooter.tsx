import React from "react";
import { VoriLogo } from "./VoriLogo";

interface VoriFooterProps {
  onBookDemo: (context?: string) => void;
}

export const VoriFooter: React.FC<VoriFooterProps> = ({ onBookDemo }) => (
  <footer
    id="grant"
    data-nav-theme="dark"
    className="bg-[#0f0f0f] text-white pt-32 sm:pt-44 pb-12"
  >
    <div className="max-w-[80rem] mx-auto px-6 sm:px-10">
      <h2 className="font-sans font-extrabold text-[40px] sm:text-[64px] leading-[1.05] tracking-[-0.03em] max-w-[40rem] text-balance">
        Upfront cost: <span className="text-[#34d399]">zero.</span>
      </h2>
      <p className="mt-6 text-[18px] leading-[1.6] text-white/70 max-w-[32rem]">
        Start with a free POS scale, thermal receipt printer and cash drawer,
        installed at your counter.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
        <button
          type="button"
          onClick={() => onBookDemo("Footer Callout — Get Free Hardware")}
          className="px-8 py-4 rounded-full bg-[#10b981] hover:bg-[#059669] text-white text-[16px] font-semibold transition-all duration-200 active:scale-[0.98]"
        >
          Get free hardware
        </button>
        <a
          href="tel:3472130687"
          className="link-draw text-[16px] text-white/90 tabular-nums"
        >
          (347) 213-0687
        </a>
      </div>

      <div className="mt-28 sm:mt-36 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 text-[14.5px] text-white/60">
        <div className="md:col-span-4">
          <VoriLogo theme="dark" size="nav" />
        </div>
        <div className="md:col-span-5 space-y-1.5 leading-[1.6]">
          <a
            href="mailto:support@producepos.app"
            className="link-draw hover:text-white transition-colors"
          >
            support@producepos.app
          </a>
          <p>3508 White Plains Rd, Bronx, NY</p>
        </div>
        <p className="md:col-span-3 leading-[1.6]">
          NTEP Class III scales · PCI-DSS Level 1 · USDA EBT &amp; WIC approved
        </p>
      </div>

      <p className="mt-10 text-[12.5px] leading-relaxed max-w-3xl text-white/45">
        Free basic hardware (POS scale, thermal receipt printer and cash
        drawer) is provided for qualified grocery and fresh produce store
        owners. Additional hardware is available for purchase. On-site setup
        and scale configuration by certified technicians.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[13px] text-white/45">
        <span>© 2026 Produce AI POS Inc. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="/privacy-policy" className="link-draw hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="link-draw hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="/contact" className="link-draw hover:text-white transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </footer>
);
