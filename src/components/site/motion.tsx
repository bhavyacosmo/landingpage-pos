import React, { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./hooks";

gsap.registerPlugin(ScrollTrigger);

/**
 * Motion graphics over the hero hardware photo, in the photo's own 1600x1487 space.
 * One synced 3.2s loop: the beam sweeps the scanner glass, the glass flashes and the
 * status LED pings on the read, then a data packet rides to the screen and on to the printer.
 * SMIL keeps every part on the same clock. Under reduced motion only the still tracks render.
 */
const LOOP = "3.2s";
export const HeroMotion: React.FC = () => {
  const still = prefersReducedMotion();
  const toPrinter = "M964 1106 C1000 1106 1030 1110 1064 1110";
  return (
    <svg viewBox="0 0 1600 1487" className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
      <defs>
        <linearGradient id="mg-trail" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#31e327" stopOpacity="0" />
          <stop offset="1" stopColor="#31e327" stopOpacity="0.28" />
        </linearGradient>
        <filter id="mg-blur" x="-50%" y="-200%" width="200%" height="500%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="mg-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="mg-glass">
          <rect x="392" y="945" width="496" height="200" rx="14" />
        </clipPath>
      </defs>

      {/* faint tracks so the paths read even between packets */}
      <path d={toPrinter} fill="none" stroke="#31e327" strokeOpacity="0.22" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" />
      <circle cx="919" cy="958" r="5" fill="#31e327" opacity="0.7" filter="url(#mg-glow)">
        {!still && <animate attributeName="opacity" values="0.55;0.55;1;0.55" keyTimes="0;0.46;0.5;1" dur={LOOP} repeatCount="indefinite" />}
      </circle>

      {!still && (
        <>
          <g clipPath="url(#mg-glass)">
            {/* read flash on the glass */}
            <rect x="392" y="945" width="496" height="200" fill="#31e327" opacity="0">
              <animate attributeName="opacity" values="0;0;0.16;0;0" keyTimes="0;0.44;0.47;0.62;1" dur={LOOP} repeatCount="indefinite" />
            </rect>
            {/* beam: soft trail, haze and a hairline core */}
            <g opacity="0">
              <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.05;0.4;0.46;1" dur={LOOP} repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="translate" values="0 0;0 186;0 186" keyTimes="0;0.45;1" calcMode="spline" keySplines="0.45 0 0.3 1;0 0 1 1" dur={LOOP} repeatCount="indefinite" />
              <rect x="392" y="900" width="496" height="52" fill="url(#mg-trail)" />
              <rect x="392" y="945" width="496" height="14" fill="#31e327" opacity="0.55" filter="url(#mg-blur)" />
              <rect x="392" y="950.5" width="496" height="3" fill="#d9ffd6" />
            </g>
          </g>

          {/* LED ping on the read */}
          <circle cx="919" cy="958" r="6" fill="none" stroke="#31e327" strokeWidth="2.5" opacity="0">
            <animate attributeName="r" values="6;6;30;30" keyTimes="0;0.46;0.76;1" dur={LOOP} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0;0.9;0;0" keyTimes="0;0.459;0.46;0.76;1" dur={LOOP} repeatCount="indefinite" />
          </circle>

          {/* data packets */}
          {[
            { d: toPrinter, kt: "0;0.62;0.8;1", ot: "0;0.619;0.62;0.8;0.81;1" },
          ].map((p) => (
            <g key={p.d} opacity="0" filter="url(#mg-glow)">
              <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes={p.ot} dur={LOOP} repeatCount="indefinite" />
              <circle r="4.5" fill="#eaffe8" />
              <circle r="9" fill="#31e327" opacity="0.35" />
              <animateMotion path={p.d} keyPoints="0;0;1;1" keyTimes={p.kt} calcMode="linear" dur={LOOP} repeatCount="indefinite" />
            </g>
          ))}
        </>
      )}
    </svg>
  );
};

/** Barcode being read: bars light up green under a hairline beam. Pure graphic. */
export const ScanBars: React.FC<{ className?: string }> = ({ className = "" }) => {
  const bars = useMemo(() => {
    let s = 7;
    const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
    return Array.from({ length: 46 }, () => ({ w: 2 + Math.floor(rnd() * 5), g: 3 + Math.floor(rnd() * 6) }));
  }, []);
  const row = (tone: string) => (
    <div className="flex h-full items-stretch">
      {bars.map((b, i) => (
        <span key={i} className={tone} style={{ width: b.w, marginRight: b.g }} />
      ))}
    </div>
  );
  return (
    <div className={className} aria-hidden>
      <div className="scanbars relative">
        {row("bg-white/30")}
        <div className="scanbars-lit absolute inset-0">{row("bg-neon")}</div>
        <span className="scanbars-beam" />
      </div>
    </div>
  );
};

/** A hairline that draws itself as it scrolls into view, led by a glowing head. */
export const DrawLine: React.FC<{ className?: string; tone?: "light" | "dark" }> = ({ className = "", tone = "light" }) => {
  const ref = useRef<SVGPathElement>(null);
  const head = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    const dot = head.current;
    if (!el || !dot || prefersReducedMotion()) return;
    const len = el.getTotalLength();
    gsap.set(el, { strokeDasharray: len, strokeDashoffset: len });
    const tween = gsap.to(el, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top 92%",
        end: "top 45%",
        scrub: 0.6,
        onUpdate: (st) => {
          dot.style.left = `${st.progress * 100}%`;
          dot.style.opacity = st.progress > 0.005 && st.progress < 0.995 ? "1" : "0";
        },
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);
  const color = tone === "dark" ? "#14a50f" : "#31e327";
  return (
    <div className={`relative ${className}`} aria-hidden>
      <svg viewBox="0 0 1200 12" preserveAspectRatio="none" className="block w-full h-3">
        <path ref={ref} d="M0 6 H1200" fill="none" stroke={color} strokeOpacity="0.7" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <span
        ref={head}
        className="absolute top-1/2 -translate-y-1/2 -ml-1 w-2 h-2 rounded-full opacity-0 transition-opacity duration-300"
        style={{ left: 0, background: color, boxShadow: `0 0 14px 4px ${color}99` }}
      />
    </div>
  );
};
