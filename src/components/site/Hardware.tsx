import React, { useLayoutEffect, useRef } from "react";
import { DrawLine } from "./motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { MEDIA, STAND_IN } from "../../media";
import { prefersReducedMotion } from "./hooks";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  onBookDemo: (context?: string) => void;
}

const FREE = [
  { k: "scale" as const, n: "01", title: "POS scale", text: "NTEP-certified scanner scale." },
  { k: "printer" as const, n: "02", title: "Thermal receipt printer", text: "Receipts and Z-reports." },
  { k: "drawer" as const, n: "03", title: "Cash drawer", text: "Opens on every cash sale." },
];

const ALT = {
  scale: "Zebra bioptic scanner scale",
  printer: "Epson thermal receipt printer, front view with a receipt in the paper slot",
  drawer: "Black cash drawer with key lock",
};

const OPTIONAL = [
  { k: "customerDisplay" as const, title: "Customer display", text: "Shows the shopper their basket and total." },
  { k: "shelfTags" as const, title: "Electronic shelf tags", text: "Prices update wirelessly." },
];

const HOVER: Record<string, { src: string; alt: string } | undefined> = {
  scale: MEDIA.hardware.scaleOpen ? { src: MEDIA.hardware.scaleOpen, alt: "Zebra bioptic scanner scale with the load cell and scanner window exposed" } : undefined,
  printer: MEDIA.hardware.printerOpen ? { src: MEDIA.hardware.printerOpen, alt: "Epson receipt printer with the lid open, showing the paper roll and cutter" } : undefined,
  drawer: MEDIA.hardware.drawerOpen ? { src: MEDIA.hardware.drawerOpen, alt: "Cash drawer open, showing the bill and coin tray" } : undefined,
};

const labelPhoto = MEDIA.hardware.labelPrinter ?? "/images/slots/label-printer.jpg";
const handheldPhoto = MEDIA.hardware.handheld ?? STAND_IN.handheld;

const photo = (k: keyof typeof STAND_IN & keyof typeof MEDIA.hardware) => MEDIA.hardware[k] ?? STAND_IN[k];

export const Hardware: React.FC<Props> = ({ onBookDemo }) => {
  const pass = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion() || !pass.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pass-row",
        { xPercent: 0 },
        {
          xPercent: -28,
          ease: "none",
          scrollTrigger: { trigger: pass.current, start: "top bottom", end: "bottom top", scrub: 0.6 },
        }
      );
    }, pass);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hardware" className="paper-ground seam-in seam-out text-ink pt-32 sm:pt-48 pb-32 sm:pb-48 overflow-hidden">
      <div className="max-w-[80rem] mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <h2 data-reveal="head" className="lg:col-span-7 h-display h-section text-balance !leading-[1.04]">
            Free hardware to start.
          </h2>
          <p className="lg:col-span-4 lg:col-start-9 text-[18px] leading-[1.55] text-ink/70">
            Installed at your counter. $0 upfront.
          </p>
        </div>

        <DrawLine tone="dark" className="mt-14" />
        <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8">
          {FREE.map((h) => (
            <article key={h.k} className="group card-lift">
              <div data-reveal="media" className="zoom-frame relative rounded-[24px] bg-ink aspect-[4/3.1]">
                <img src={photo(h.k)} alt={ALT[h.k]} loading="lazy" className={`slot-img ${h.k === "scale" ? "!object-[50%_58%]" : ""}`} />
                {HOVER[h.k] && (
                  <img
                    src={HOVER[h.k]!.src}
                    alt={HOVER[h.k]!.alt}
                    loading="lazy"
                    className="slot-img absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-neon text-ink text-[12.5px] font-bold px-3.5 py-1.5">
                  $0 · included
                </span>
              </div>
              <h3 className="mt-6 text-[22px] font-extrabold tracking-tight leading-tight">{h.title}</h3>
              <p className="mt-1.5 text-[16px] leading-[1.55] text-ink/65 max-w-[22rem]">{h.text}</p>
            </article>
          ))}
        </div>
        <article data-reveal="rise" className="mt-10 sm:mt-12 rounded-[24px] bg-white p-3 border border-ink/[0.07]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
            <div className="zoom-frame rounded-[16px] bg-[#e9eaec] aspect-[16/10] relative">
              <img src={MEDIA.hardware.pinpadPax ?? STAND_IN.customerDisplay} alt="PAX A35 Android PIN pad with color touchscreen and keypad" loading="lazy" className="slot-img !object-contain p-5 sm:p-6" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-neon text-ink text-[12.5px] font-bold px-3.5 py-1.5">$0 · included</span>
            </div>
            <div className="zoom-frame rounded-[16px] bg-[#e9eaec] aspect-[16/10]">
              <img src={MEDIA.hardware.pinpadDejavoo ?? STAND_IN.customerDisplay} alt="Dejavoo P17 Android PIN pad with touchscreen and large keypad" loading="lazy" className="slot-img !object-contain p-5 sm:p-6" />
            </div>
            <span aria-hidden className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 px-3.5 rounded-full bg-neon text-ink items-center justify-center text-[14px] font-bold shadow-md">or</span>
          </div>
          <div className="px-3 pt-5 pb-3">
            <h4 className="text-[18px] font-bold leading-tight">PAX A35 or Dejavoo P17 PIN pad</h4>
            <p className="mt-1.5 text-[15px] leading-[1.55] text-ink/60">Android card terminal. Pick the one you like.</p>
          </div>
        </article>
      </div>

      {/* scroll-driven type pass */}
      <div ref={pass} className="mt-32 sm:mt-48 select-none" aria-hidden>
        <div className="pass-row flex whitespace-nowrap will-change-transform">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-8 pr-8 text-[clamp(72px,13vw,190px)] font-extrabold tracking-[-0.045em] leading-none">
              {["EBT SNAP & WIC", "Apple Pay", "OTC", "Gift cards", "Chip cards"].map((t, i) => (
                <React.Fragment key={t}>
                  <span
                    style={i === 1 ? { WebkitTextStroke: "2px #07080a", color: "transparent" } : undefined}
                    className={i === 1 ? "" : "text-ink"}
                  >
                    {t}
                  </span>
                  <span className="w-[0.16em] h-[0.16em] rounded-full bg-neon shrink-0" />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 sm:mt-48 max-w-[80rem] mx-auto px-5 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-6 border-b border-ink/15">
          <h3 className="text-[28px] sm:text-[34px] font-extrabold tracking-tight">Available to buy</h3>
          <button
            type="button"
            onClick={() => onBookDemo("Hardware — Request pricing")}
            className="btn btn-ink h-12 px-6 text-[15px] self-start"
          >
            Get pricing <ArrowRight className="w-4 h-4 arrow" />
          </button>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {OPTIONAL.map((o) => (
            <article key={o.k} data-reveal="rise" className="group card-lift flex flex-col gap-5 rounded-[24px] bg-white p-3 border border-ink/[0.07] hover:shadow-[0_24px_50px_-24px_rgba(7,8,10,0.35)]">
              <div className="zoom-frame rounded-[16px] bg-ink w-full shrink-0 aspect-[4/3]">
                <img src={photo(o.k)} alt={o.title} loading="lazy" className="slot-img" />
              </div>
              <div className="px-3 pb-3">
                <h4 className="text-[18px] font-bold leading-tight">{o.title}</h4>
                <p className="mt-1.5 text-[15px] leading-[1.55] text-ink/60">{o.text}</p>
              </div>
            </article>
          ))}
        </div>
        <article data-reveal="rise" className="mt-6 sm:mt-8 rounded-[24px] bg-white p-3 border border-ink/[0.07]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
            <div className="zoom-frame rounded-[16px] bg-ink aspect-[4/3]">
              <img src={handheldPhoto} alt="Handheld scanner with pistol grip and orange trigger" loading="lazy" className="slot-img" />
            </div>
            <div className="zoom-frame rounded-[16px] bg-[#e9eaec] aspect-[4/3]">
              <img src={labelPhoto} alt="Zebra ZQ610 Plus label printer" loading="lazy" className="slot-img" />
            </div>
            <span aria-hidden className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neon text-ink items-center justify-center text-[22px] font-bold shadow-md">+</span>
          </div>
          <div className="px-3 pt-5 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h4 className="text-[18px] font-bold leading-tight">Handheld scanner + label printer</h4>
              <p className="mt-1.5 text-[15px] leading-[1.55] text-ink/60">Scan a shelf, print the label on the spot.</p>
            </div>
            <span className="text-[13px] font-semibold text-ink/50">Sold separately</span>
          </div>
        </article>
      </div>
    </section>
  );
};
