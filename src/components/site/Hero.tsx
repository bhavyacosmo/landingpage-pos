import React, { useLayoutEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { MEDIA } from "../../media";
import { DeviceFrame, PosScreen, ScaledScreen } from "./screens";
import { prefersReducedMotion } from "./hooks";

interface HeroProps {
  onBookDemo: (context?: string) => void;
}

const H1: { t: string; accent?: boolean }[] = [
  { t: "The" },
  { t: "POS" },
  { t: "built" },
  { t: "for" },
  { t: "fresh", accent: true },
  { t: "produce.", accent: true },
];

export const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const el = root.current!;
    el.classList.add("js-hero");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".h1-word", { yPercent: 115, duration: 1.1, stagger: 0.07 }, 0.1)
        .to("[data-hero='fade']", { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }, 0.55)
        .fromTo(
          "[data-hero='device']",
          { opacity: 0, y: 70, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 1.4 },
          0.3
        )
        .fromTo(
          "[data-hero='glow']",
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 1.8 },
          0
        );
      gsap.set("[data-hero='fade']", { y: 22 });
    }, el);
    return () => {
      ctx.revert();
      el.classList.remove("js-hero");
    };
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative bg-ink text-white min-h-[calc(100svh-5rem)] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 ground-grid pointer-events-none" />
      <div
        data-hero="glow"
        className="glow-neon glow-drift absolute left-[-20%] top-[12%] w-[85vw] max-w-[1300px] aspect-square pointer-events-none"
      />

      <div
        aria-hidden
        className="absolute pointer-events-none right-[-4%] top-[10%] w-[78vw] max-w-[1200px] h-[85%]"
        style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.5), rgba(255,255,255,0.22) 55%, rgba(255,255,255,0) 100%)" }}
      />

      <div className="relative z-10 w-full max-w-[80rem] mx-auto px-5 sm:px-10 pt-32 pb-20 lg:pt-36 lg:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
        <div className="lg:col-span-5">
          <h1 className="h-display text-[46px] sm:text-[68px] xl:text-[80px] text-balance">
            {H1.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom pt-[0.06em] -mt-[0.06em] pb-[0.3em] -mb-[0.3em] pl-[0.08em] -ml-[0.08em] pr-[0.08em] mr-[0.14em]">
                <span
                  className={`h1-word inline-block ${w.accent ? "serif-accent text-neon" : ""}`}
                  style={w.accent ? { fontSize: "1.06em", letterSpacing: "-0.02em" } : undefined}
                >
                  {w.t}
                </span>
              </span>
            ))}
          </h1>

          <p data-hero="fade" className="mt-9 text-[18px] sm:text-[20px] leading-[1.55] text-white/60 max-w-[26rem]">
            Checkout, inventory and back office for grocers. Scale, printer and cash drawer free.
          </p>

          <div data-hero="fade" className="mt-12 flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              type="button"
              onClick={() => onBookDemo("Hero — Get free hardware")}
              className="btn btn-neon h-14 px-8 text-[16px] w-full sm:w-auto"
            >
              Get free hardware <ArrowRight className="w-4 h-4 arrow" />
            </button>
          </div>


        </div>

        <div className="lg:col-span-7 lg:-mr-4 xl:-mr-8" data-hero="device">
          {MEDIA.heroHardware ? (
            <div className="relative">
            <img
              src={MEDIA.heroHardware}
              alt="Produce Ai POS: touchscreen, Zebra scanner scale and Epson receipt printer"
              width={1303}
              height={1207}
              fetchPriority="high"
              className="w-full h-auto"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right,transparent,#000 7%,#000 86%,transparent),linear-gradient(to bottom,transparent,#000 3%,#000 84%,transparent)",
                WebkitMaskComposite: "source-in",
                maskImage:
                  "linear-gradient(to right,transparent,#000 7%,#000 86%,transparent),linear-gradient(to bottom,transparent,#000 3%,#000 84%,transparent)",
                maskComposite: "intersect",
              }}
            />
            </div>
          ) : (
            <div>
              <DeviceFrame stand>
                {MEDIA.heroScreen ? (
                  <img
                    src={MEDIA.heroScreen}
                    alt="Produce Ai POS register screen"
                    width={960}
                    height={586}
                    fetchPriority="high"
                    className="block w-full h-auto"
                  />
                ) : (
                  <ScaledScreen>
                    <PosScreen />
                  </ScaledScreen>
                )}
              </DeviceFrame>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const MARQUEE = ["NTEP Class III scales", "EBT SNAP", "WIC", "Apple Pay", "Offline mode", "AI invoice reader"];

export const Marquee: React.FC = () => (
  <div className="marquee bg-ink border-y border-white/10 overflow-hidden py-7" aria-label="Supported scales, payments and certifications">
    <div className="marquee-track">
      {[0, 1].map((k) => (
        <ul key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
          {MARQUEE.map((m) => (
            <li key={m + k} className="flex items-center eyebrow text-white/55 whitespace-nowrap">
              <span className="px-12">{m}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neon" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);
