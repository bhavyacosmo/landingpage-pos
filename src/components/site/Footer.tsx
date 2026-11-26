import React from "react";
import { ArrowRight } from "lucide-react";
import { MEDIA, STAND_IN } from "../../media";
import { VoriLogo } from "../vori/VoriLogo";
import { StoreLinks } from "./StoreButtons";
import { ScanBars } from "./motion";

/* Footer column heading and link: one style for every column, so the app links read as part of the system. */
const HEAD = "font-mono text-[11px] uppercase tracking-[0.12em] text-white/40 mb-5";
const LINK = "inline-flex items-center gap-2.5 py-1 -my-1 text-[15px] text-white/70 hover:text-white transition-colors";

export const Footer: React.FC<{ onBookDemo: (c?: string) => void; compact?: boolean }> = ({ onBookDemo, compact }) => (
  <footer id="grant" className="relative bg-ink text-white overflow-hidden">
    {!compact && (
    <div className="absolute inset-0">
      <img
        src={MEDIA.storeLane ?? STAND_IN.storeLane}
        alt=""
        className="w-full h-full object-cover opacity-[0.22] grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
      <div className="absolute inset-0 ground-grid opacity-60" />
      <div className="glow-neon glow-drift absolute left-1/2 -translate-x-1/2 top-[-20%] w-[80vw] max-w-[1100px] aspect-square" />
    </div>
    )}

    <div className={`relative max-w-[80rem] mx-auto px-5 sm:px-10 pb-10 ${compact ? "pt-16" : "pt-36 sm:pt-56"}`}>
      {!compact && (<>
      <ScanBars className="hidden lg:block absolute right-10 top-44 opacity-80" />
      <h2 data-reveal="head" className="h-display text-[clamp(44px,9vw,136px)] !leading-[0.98] text-balance">
        Fresh start.{" "}
        <br className="hidden sm:block" />
        <span className="serif-accent text-neon" style={{ fontSize: "1.04em" }}>
          Free hardware.
        </span>
      </h2>
      <p className="mt-10 text-[18px] sm:text-[20px] leading-[1.55] text-white/65 max-w-[34rem]">
        Scale, printer and cash drawer. Installed free.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
        <button
          type="button"
          onClick={() => onBookDemo("Footer — Get free hardware")}
          className="btn btn-neon h-16 px-10 text-[17px] w-full sm:w-auto"
        >
          Get free hardware <ArrowRight className="w-5 h-5 arrow" />
        </button>
        <a href="tel:+13472130687" className="link-draw relative inline-block before:absolute before:inset-x-0 before:-inset-y-3 before:content-[''] text-[17px] text-white/85 tabular-nums self-start sm:self-auto">
          +1 (347) 213-0687
        </a>
      </div>

      </>)}

      {/* footer grid: brand + three plain link columns (Linear / Todoist pattern) */}
      <div className={`${compact ? "" : "mt-32 sm:mt-48 border-t border-white/12 pt-14"} grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12`}>
        <div className="col-span-2 lg:col-span-5">
          <VoriLogo theme="dark" size="nav" />
          <p className="mt-4 text-[15px] leading-[1.6] text-white/55 max-w-[20rem]">
            Point of sale for grocery and produce stores.
          </p>
        </div>

        <nav aria-label="Get the app" className="lg:col-span-2">
          <h3 className={HEAD}>Get the app</h3>
          <StoreLinks linkClass={LINK} />
        </nav>

        <nav aria-label="Company" className="lg:col-span-2">
          <h3 className={HEAD}>Company</h3>
          <ul className="space-y-3">
            <li><a href="/partnerships" className={LINK}><span className="link-draw relative">Partnerships</span></a></li>
            <li><a href="/contact" className={LINK}><span className="link-draw relative">Contact</span></a></li>
          </ul>
        </nav>

        <div className="col-span-2 lg:col-span-3">
          <h3 className={HEAD}>Contact</h3>
          <ul className="space-y-3">
            <li><a href="tel:+13472130687" className={`${LINK} tabular-nums`}><span className="link-draw relative">+1 (347) 213-0687</span></a></li>
            <li><a href="mailto:support@producepos.app" className={LINK}><span className="link-draw relative">support@producepos.app</span></a></li>
            <li className="text-[15px] leading-[1.5] text-white/55">3508 White Plains Rd, Bronx, NY</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/12 flex flex-col md:flex-row md:items-start justify-between gap-6 text-[13px] leading-relaxed text-white/45">
        <div className="space-y-1.5 max-w-2xl">
          <p>© 2026 Produce AI POS LLC. All rights reserved.</p>
          <p>Free hardware is for qualified grocery and produce store owners. Extras are sold separately. Apple, Google Play and Windows are trademarks of their owners.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 shrink-0">
          <a href="/privacy-policy" className="link-draw relative inline-block hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms-of-service" className="link-draw relative inline-block hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);
