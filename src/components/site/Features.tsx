import React from "react";
import { DrawLine } from "./motion";
import { Check, WifiOff, Wifi } from "lucide-react";
import { spotMove, useInView, useLoopStep, useTween, usd } from "./hooks";

/* ---------- small live visuals ---------- */

const WeighVisual: React.FC = () => {
  const [ref, inView] = useInView<HTMLDivElement>("80px");
  const step = useLoopStep(4, 3000, inView, 0);
  const W = [2.46, 1.18, 3.02, 0.64][step];
  const P = [2.49, 1.99, 1.79, 3.49][step];
  const w = useTween(W, 1000);
  return (
    <div ref={ref} className="h-full flex flex-col items-center justify-center gap-4">
      <div className="rounded-2xl bg-black border border-white/10 px-7 py-4 text-center w-[78%]">
        <div className="font-mono text-[44px] leading-none text-neon tabular-nums">
          {w.toFixed(2)}
          <span className="text-[15px] text-white/40 ml-1.5">lb</span>
        </div>
        <div className="mt-2 flex justify-between text-[11px] font-mono text-white/45">
          <span>TARE 0.04</span>
          <span>{usd(W * P)}</span>
        </div>
      </div>
      <div className="w-[88%] h-3 rounded-full bg-gradient-to-b from-[#3b403b] to-[#151715] shadow-[0_10px_24px_-6px_rgba(0,0,0,0.8)]" />
    </div>
  );
};

const SnapVisual: React.FC = () => {
  const [ref, inView] = useInView<HTMLDivElement>("80px");
  const step = useLoopStep(3, 1250, inView, 2);
  const lines = [
    ["Avocados", "6.12", true],
    ["Tomatoes", "2.35", true],
    ["Oat milk", "4.29", false],
  ] as const;
  const snapPct = step === 0 ? 0 : 68;
  return (
    <div ref={ref} className="h-full flex flex-col justify-center gap-3 px-1">
      {lines.map(([n, p, snap], i) => (
        <div
          key={n}
          className="flex items-center justify-between rounded-xl bg-white/[0.05] border border-white/10 px-4 h-11 text-[14px] transition-colors duration-500"
          style={{ borderColor: step > 0 && snap ? "rgba(49,227,39,0.55)" : undefined }}
        >
          <span className="text-white/85">{n}</span>
          <span className="flex items-center gap-2.5 tabular-nums">
            {step > 0 && snap && (
              <span className="row-in text-[10.5px] font-bold bg-neon text-ink rounded-full px-2 py-[3px]" style={{ animationDelay: `${i * 90}ms` }}>
                SNAP
              </span>
            )}
            <span className="text-white/70">${p}</span>
          </span>
        </div>
      ))}
      <div className="mt-1 h-2.5 rounded-full bg-white/15 overflow-hidden flex">
        <div className="h-full bg-neon transition-[width] duration-700 ease-out" style={{ width: `${snapPct}%` }} />
      </div>
      <div className="flex justify-between text-[11.5px] font-mono text-white/45">
        <span className={step > 0 ? "text-neon" : ""}>EBT $8.47</span>
        <span>{step === 2 ? "CARD $4.29 ✓" : "CARD"}</span>
      </div>
    </div>
  );
};

const OfflineVisual: React.FC = () => {
  const [ref, inView] = useInView<HTMLDivElement>("80px");
  const step = useLoopStep(4, 950, inView, 3);
  const offline = step === 1 || step === 2;
  const queued = step === 0 ? 0 : step === 1 ? 3 : step === 2 ? 7 : 7;
  return (
    <div ref={ref} className="h-full flex flex-col items-center justify-center gap-4">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center transition-colors duration-500"
        style={{
          background: offline ? "rgba(251,146,60,0.14)" : "rgba(49,227,39,0.14)",
          color: offline ? "#fb923c" : "#31e327",
          boxShadow: `0 0 0 1px ${offline ? "rgba(251,146,60,0.4)" : "rgba(49,227,39,0.4)"}`,
        }}
      >
        {offline ? <WifiOff className="w-9 h-9" /> : <Wifi className="w-9 h-9" />}
      </div>
      <div className="text-[15px] font-semibold">{offline ? "Offline · still selling" : step === 3 ? "Back online" : "Online"}</div>
      <div className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/10 px-4 py-2 text-[12.5px] font-mono">
        <span className={step === 3 ? "text-neon" : "text-white/60"}>
          {step === 3 ? "7 sales synced" : `${queued} sales queued`}
        </span>
        {step === 3 && <Check className="w-3.5 h-3.5 text-neon" />}
      </div>
    </div>
  );
};

const InvoiceDiagram: React.FC = () => (
  <svg viewBox="0 0 620 210" className="w-full h-full" role="img" aria-label="A paper invoice goes through the AI reader into pricebook, cost and UPC">
    <defs>
      <linearGradient id="g1" x1="0" x2="1">
        <stop offset="0" stopColor="#31e327" stopOpacity="0.1" />
        <stop offset="1" stopColor="#31e327" />
      </linearGradient>
    </defs>
    {/* paper */}
    <g>
      <rect x="14" y="40" width="92" height="130" rx="10" fill="#f6f6f2" />
      {[62, 80, 98, 116, 134].map((y, i) => (
        <rect key={y} x="26" y={y} width={i % 2 ? 48 : 62} height="5" rx="2.5" fill="#0b0d0b" opacity="0.22" />
      ))}
      <rect x="26" y="52" width="40" height="6" rx="3" fill="#0b0d0b" opacity="0.6" />
    </g>
    <path d="M106 105 H228" stroke="url(#g1)" strokeWidth="2" className="flow-line" fill="none" />
    {/* AI node */}
    <rect x="228" y="68" width="76" height="74" rx="18" fill="#0b0d0b" stroke="#31e327" strokeWidth="2" />
    <text x="266" y="115" textAnchor="middle" fontFamily="Rethink Sans" fontWeight="800" fontSize="28" fill="#31e327">
      AI
    </text>
    <circle cx="266" cy="105" r="52" fill="none" stroke="#31e327" strokeOpacity="0.25">
      <animate attributeName="r" values="44;66" dur="2.4s" repeatCount="indefinite" />
      <animate attributeName="stroke-opacity" values="0.45;0" dur="2.4s" repeatCount="indefinite" />
    </circle>
    {/* lanes */}
    {[
      { y: 40, t: "Pricebook" },
      { y: 105, t: "Cost per unit" },
      { y: 170, t: "UPC barcode" },
    ].map((l, i) => (
      <g key={l.t}>
        <path d={`M304 105 C 350 105, 360 ${l.y}, 410 ${l.y}`} stroke="#31e327" strokeWidth="2" fill="none" className="flow-line" style={{ animationDelay: `${i * 0.25}s` }} />
        <rect x="410" y={l.y - 20} width="190" height="40" rx="12" fill="#ffffff" fillOpacity="0.06" stroke="#ffffff" strokeOpacity="0.18" />
        <circle cx="432" cy={l.y} r="5" fill="#31e327" />
        <text x="448" y={l.y + 5} fontFamily="Rethink Sans" fontWeight="600" fontSize="15" fill="#fff">
          {l.t}
        </text>
      </g>
    ))}
  </svg>
);

/* ---------- section ---------- */

const CARDS = [
  { title: "Weighs every item", text: "Scale sync with automatic tare.", visual: <WeighVisual /> },
  { title: "Splits EBT in one tap", text: "Eligible produce separates itself.", visual: <SnapVisual /> },
  { title: "Sells offline", text: "Every sale syncs when you reconnect.", visual: <OfflineVisual /> },
  { title: "Reads paper invoices", text: "Costs and barcodes land in your pricebook.", visual: <InvoiceDiagram /> },
];

export const Features: React.FC = () => (
  <section id="features" className="relative bg-ink text-white py-32 sm:py-48 overflow-hidden">
    <div className="absolute inset-0 ground-grid opacity-50 pointer-events-none" />
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(45% 40% at 0% 0%, rgba(255,255,255,0.16), transparent 70%), radial-gradient(45% 40% at 100% 0%, rgba(255,255,255,0.16), transparent 70%), radial-gradient(45% 40% at 0% 100%, rgba(255,255,255,0.16), transparent 70%), radial-gradient(45% 40% at 100% 100%, rgba(255,255,255,0.16), transparent 70%)",
      }}
    />
    <div className="relative max-w-[80rem] mx-auto px-5 sm:px-10">
      <h2 data-reveal="head" className="h-display h-section max-w-[40rem] text-balance !leading-[1.04]">
        Made for the produce counter.
      </h2>

      <DrawLine className="mt-14" />
      <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {CARDS.map((c, i) => (
          <article
            key={c.title}
            data-reveal="rise"
            onMouseMove={spotMove}
            className="spot card-lift group rounded-[20px] border border-white/[0.09] bg-[linear-gradient(180deg,#131613_0%,#0b0d0b_100%)] shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] flex flex-col overflow-hidden hover:border-white/25"
          >
            <div className="relative h-[250px] sm:h-[290px] px-6 sm:px-10 py-6 overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(60% 70% at 50% 55%, rgba(49,227,39,0.10), transparent 70%), radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1.2px) 0 0/18px 18px",
                  maskImage: "radial-gradient(75% 85% at 50% 50%, #000 40%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(75% 85% at 50% 50%, #000 40%, transparent 100%)",
                }}
              />
              <span className="absolute left-5 top-5 font-mono text-[11px] tracking-[0.14em] text-white/35">
                0{i + 1}
              </span>
              <div className="relative h-full">{c.visual}</div>
            </div>
            <div className="border-t border-white/[0.08] px-6 sm:px-8 py-6 sm:py-7">
              <h3 className="text-[22px] font-bold tracking-tight leading-[1.2]">{c.title}</h3>
              <p className="mt-1.5 text-[15.5px] leading-[1.5] text-white/55">{c.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
