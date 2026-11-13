import React from "react";

interface VoriHeroProps {
  onBookDemo: (context?: string) => void;
}

export const VoriHero: React.FC<VoriHeroProps> = ({ onBookDemo }) => (
  <section
    id="top"
    data-nav-theme="dark"
    className="relative bg-[#0d0d0d] text-white h-[min(100svh,62rem)] min-h-[36rem] flex items-end overflow-hidden"
  >
    <div className="absolute inset-0 pointer-events-none select-none">
      <img
        src="/images/pos_terminal_hero.jpg"
        alt="Produce AI POS terminal at a grocery checkout lane"
        className="w-full h-full object-cover object-[72%_center] opacity-90"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #0d0d0d 0%, rgba(13,13,13,0.92) 34%, rgba(13,13,13,0.5) 68%, rgba(13,13,13,0.2) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,13,13,0.6) 0%, rgba(13,13,13,0) 22%, rgba(13,13,13,0) 70%, #0d0d0d 100%)",
        }}
      />
    </div>

    <div className="relative z-10 w-full max-w-[80rem] mx-auto px-6 sm:px-10 pt-40 pb-20 sm:pb-28">
      <div className="max-w-[44rem]">
        <h1 className="settle font-sans font-extrabold text-[44px] sm:text-[68px] lg:text-[84px] leading-[1.02] tracking-[-0.03em] text-balance">
          The POS built for <span className="text-[#10b981]">fresh produce.</span>
        </h1>
        <p className="settle settle-2 mt-8 text-[18px] sm:text-[20px] leading-[1.6] text-white/80 max-w-[34rem]">
          Checkout, inventory and back office for supermarkets and produce
          markets. Your scale, receipt printer and cash drawer are free.
        </p>
        <div className="settle settle-3 mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <button
            type="button"
            onClick={() => onBookDemo("Hero — Claim Free Hardware")}
            className="px-8 py-4 rounded-full bg-[#10b981] hover:bg-[#059669] text-white text-[16px] font-semibold transition-all duration-200 active:scale-[0.98]"
          >
            Get free hardware
          </button>
          <a
            href="#pillars"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#pillars")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="link-draw text-[16px] text-white/90"
          >
            See how it works
          </a>
        </div>
      </div>
    </div>
  </section>
);
