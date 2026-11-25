import React, { useEffect, useRef, useState } from "react";
import { Check, Wifi } from "lucide-react";
import { useInView, useLoopStep, useTween, usd } from "./hooks";

/* The POS screens are live HTML, drawn at a fixed 900x560 and scaled to fit,
   so they stay sharp and identical at every width. Real captures replace them
   through src/media.ts. */

export const ScaledScreen: React.FC<{
  w?: number;
  h?: number;
  children: React.ReactNode;
}> = ({ w = 900, h = 560, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [s, setS] = useState(0.6);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => setS(el.clientWidth / w);
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [w]);
  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${w} / ${h}` }}
    >
      <div
        className="absolute left-0 top-0"
        style={{ width: w, height: h, transform: `scale(${s})`, transformOrigin: "top left" }}
      >
        {children}
      </div>
    </div>
  );
};

/** Terminal bezel. `stand` adds the neck and base like a counter POS. */
export const DeviceFrame: React.FC<{
  children: React.ReactNode;
  stand?: boolean;
  className?: string;
}> = ({ children, stand = false, className = "" }) => (
  <div className={`relative ${className}`}>
    {/* aluminium shell */}
    <div className="relative rounded-[8px] sm:rounded-[10px] p-[1.5px] bg-[linear-gradient(160deg,#8d928b_0%,#3a3e3a_18%,#1a1c1a_55%,#4a4f48_100%)] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.95),0_0_100px_-24px_rgba(255,255,255,0.32),0_0_0_1px_rgba(0,0,0,0.6)]">
      {/* black glass bezel */}
      <div className="relative rounded-[6.5px] sm:rounded-[8.5px] bg-[#050605] px-[8px] pt-[8px] pb-[20px] sm:px-[13px] sm:pt-[13px] sm:pb-[30px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_0_0_1px_rgba(255,255,255,0.04)]">
        <div className="relative rounded-[2px] sm:rounded-[3px] overflow-hidden bg-[#f1f2f4] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_30px_rgba(255,255,255,0.12)]">
          {children}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.03)_30%,rgba(255,255,255,0)_45%)]" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_14px_rgba(0,0,0,0.18)]" />
        </div>
        <span className="absolute bottom-[5px] sm:bottom-[8px] left-1/2 -translate-x-1/2 text-[7px] sm:text-[10px] font-medium tracking-[0.18em] uppercase text-white/55 select-none leading-none">Produce POS</span>
        <span className="absolute top-[2.5px] sm:top-[4.5px] left-1/2 -translate-x-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#0c1210] ring-1 ring-white/15 shadow-[inset_0_0_2px_rgba(80,140,255,0.5)]" />
      </div>
    </div>
    {stand && (
      <>
        <div className="mx-auto h-12 w-[13%] bg-gradient-to-r from-[#161816] via-[#4a4f48] to-[#161816] [clip-path:polygon(10%_0,90%_0,100%_100%,0_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.05)]" />
        <div className="relative mx-auto h-[10px] w-[38%] rounded-[999px] bg-gradient-to-b from-[#5a5f58] via-[#2a2d29] to-[#121412] shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_36px_50px_-10px_rgba(0,0,0,0.95)]" />
        <div aria-hidden className="mx-auto mt-1 h-6 w-[44%] rounded-[50%] bg-[radial-gradient(closest-side,rgba(255,255,255,0.18),transparent)] blur-md" />
      </>
    )}
  </div>
);

const UI_INK = "#0b0d0b";
const UI_MUTED = "#6b716b";
const UI_LINE = "rgba(11,13,11,0.09)";

const Chip: React.FC<{ children: React.ReactNode; tone?: "green" | "dark" | "soft" }> = ({
  children,
  tone = "soft",
}) => (
  <span
    className="inline-flex items-center gap-1 rounded-full px-2.5 py-[3px] text-[11px] font-semibold leading-none"
    style={
      tone === "green"
        ? { background: "#31e327", color: UI_INK }
        : tone === "dark"
        ? { background: UI_INK, color: "#fff" }
        : { background: "rgba(11,13,11,0.07)", color: UI_INK }
    }
  >
    {children}
  </span>
);

const TopBar: React.FC<{ title: string; right?: React.ReactNode }> = ({ title, right }) => (
  <div
    className="flex items-center justify-between px-6 h-[54px] bg-white"
    style={{ borderBottom: `1px solid ${UI_LINE}` }}
  >
    <div className="flex items-center gap-3">
      <span className="w-6 h-6 rounded-md bg-[#0b0d0b] flex items-center justify-center">
        <span className="w-2.5 h-2.5 rounded-sm bg-[#31e327]" />
      </span>
      <span className="text-[14px] font-bold" style={{ color: UI_INK }}>
        {title}
      </span>
    </div>
    <div className="flex items-center gap-2">{right}</div>
  </div>
);

/* ------------------------------------------------------------------ */
/* 1. Live checkout: builds a basket, weighs, splits EBT, prints       */
/* ------------------------------------------------------------------ */
const BASKET = [
  { name: "Hass avocados", sub: "2.46 lb × $2.49/lb", w: 2.46, price: 6.12, snap: true },
  { name: "Roma tomatoes", sub: "1.18 lb × $1.99/lb", w: 1.18, price: 2.35, snap: true },
  { name: "Fresh cilantro", sub: "3 bunch × $0.79", w: 0, price: 2.37, snap: true },
  { name: "Oat milk 64 oz", sub: "1 × $4.29", w: 0, price: 4.29, snap: false },
  { name: "Persian limes", sub: "0.64 lb × $3.49/lb", w: 0.64, price: 2.23, snap: true },
];
const TAX = 0.08875;

export const PosScreen: React.FC<{ active?: boolean }> = () => {
  const [ref, inView] = useInView<HTMLDivElement>("100px");
  // 0-4 add items, 5 split tender, 6 paid
  const step = useLoopStep(7, (s) => (s === 6 ? 3200 : s === 5 ? 2100 : 1450), inView, 6);
  const n = Math.min(step + 1, BASKET.length);
  const shown = BASKET.slice(0, n);
  const snapTotal = shown.filter((i) => i.snap).reduce((a, i) => a + i.price, 0);
  const taxable = shown.filter((i) => !i.snap).reduce((a, i) => a + i.price, 0);
  const tax = taxable * TAX;
  const total = snapTotal + taxable + tax;
  const last = shown[shown.length - 1];
  const weight = useTween(step < 5 ? last.w : 0, 500);
  const totalT = useTween(total, 500);
  const split = step >= 5;
  const paid = step === 6;
  const snapPay = Math.min(snapTotal, 32.0);
  const cardPay = total - snapPay;

  return (
    <div ref={ref} className="absolute inset-0 text-left" style={{ color: UI_INK }}>
      <TopBar
        title="Fresh Market · Lane 2"
        right={
          <>
            <Chip>
              <Wifi className="w-3 h-3" /> Online
            </Chip>
            <Chip tone="dark">Cashier: Dana</Chip>
          </>
        }
      />
      <div className="grid h-[506px]" style={{ gridTemplateColumns: "1fr 330px" }}>
        {/* receipt */}
        <div className="p-6 pr-5 flex flex-col">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-[13px] font-semibold tracking-wide uppercase" style={{ color: UI_MUTED }}>
              Current sale
            </span>
            <span className="text-[13px]" style={{ color: UI_MUTED }}>
              {n} items
            </span>
          </div>
          <div className="flex-1 rounded-2xl bg-white overflow-hidden" style={{ border: `1px solid ${UI_LINE}` }}>
            {shown.map((it, i) => (
              <div
                key={it.name}
                className={`flex items-center justify-between px-5 h-[62px] ${i === n - 1 ? "row-in" : ""}`}
                style={{
                  borderBottom: i < shown.length - 1 ? `1px solid ${UI_LINE}` : undefined,
                  background: i === n - 1 && !split ? "rgba(49,227,39,0.12)" : undefined,
                }}
              >
                <div>
                  <div className="text-[16px] font-semibold leading-tight">{it.name}</div>
                  <div className="text-[12.5px] mt-0.5" style={{ color: UI_MUTED }}>
                    {it.sub}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {it.snap && <Chip tone="green">SNAP</Chip>}
                  <span className="text-[16px] font-semibold tabular-nums">{usd(it.price)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* side */}
        <div className="p-6 pl-1 flex flex-col gap-3">
          <div className="rounded-2xl p-4 text-white" style={{ background: UI_INK }}>
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.12em] text-white/50">
              <span>Scale</span>
              <span className="flex items-center gap-1.5 text-[#31e327]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#31e327] pulse-dot" /> stable
              </span>
            </div>
            <div className="mt-1 font-mono text-[44px] leading-none tracking-tight text-[#31e327] tabular-nums">
              {weight.toFixed(2)}
              <span className="text-[16px] text-white/50 ml-1.5">lb</span>
            </div>
            <div className="mt-1.5 text-[11.5px] text-white/45 font-mono">TARE 0.04 lb · AUTO</div>
          </div>

          <div className="rounded-2xl bg-white p-4 flex-1 flex flex-col" style={{ border: `1px solid ${UI_LINE}` }}>
            <div className="flex justify-between text-[13px]" style={{ color: UI_MUTED }}>
              <span>SNAP-eligible</span>
              <span className="tabular-nums">{usd(snapTotal)}</span>
            </div>
            <div className="flex justify-between text-[13px] mt-1" style={{ color: UI_MUTED }}>
              <span>Tax (non-food)</span>
              <span className="tabular-nums">{usd(tax)}</span>
            </div>
            <div className="mt-2 pt-2 flex items-baseline justify-between" style={{ borderTop: `1px solid ${UI_LINE}` }}>
              <span className="text-[14px] font-semibold">Total</span>
              <span className="text-[34px] font-extrabold tracking-tight tabular-nums leading-none">
                {usd(totalT)}
              </span>
            </div>

            <div className="mt-auto">
              {split ? (
                <div className="space-y-1.5 row-in">
                  <div className="flex justify-between text-[13px] font-semibold">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#31e327]" /> EBT SNAP
                    </span>
                    <span className="tabular-nums">−{usd(snapPay)}</span>
                  </div>
                  <div className="flex justify-between text-[13px] font-semibold">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0b0d0b]" /> Card
                    </span>
                    <span className="tabular-nums">−{usd(cardPay)}</span>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  {["EBT", "Card", "Cash"].map((t) => (
                    <div
                      key={t}
                      className="h-10 rounded-xl text-[13px] font-semibold flex items-center justify-center"
                      style={{ background: "rgba(11,13,11,0.07)" }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              )}
              <div
                className="mt-3 h-12 rounded-xl text-[15px] font-bold flex items-center justify-center gap-2 transition-colors duration-300"
                style={{
                  background: paid ? UI_INK : "#31e327",
                  color: paid ? "#fff" : UI_INK,
                }}
              >
                {paid ? (
                  <>
                    <Check className="w-4 h-4 text-[#31e327]" /> Paid · printing receipt
                  </>
                ) : split ? (
                  "Split tender"
                ) : (
                  "Charge"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* 2. Quick keys + scale                                               */
/* ------------------------------------------------------------------ */
const KEYS = [
  { n: "Avocado", c: "#4b6b2a", plu: "4225" },
  { n: "Bananas", c: "#f2c94c", plu: "4011" },
  { n: "Apples", c: "#d64545", plu: "4131" },
  { n: "Limes", c: "#7ac943", plu: "4048" },
  { n: "Tomatoes", c: "#e4572e", plu: "4664" },
  { n: "Peppers", c: "#f29f05", plu: "4688" },
  { n: "Cilantro", c: "#2f8f46", plu: "4889" },
  { n: "Lemons", c: "#f5dd42", plu: "4053" },
  { n: "Mangoes", c: "#f59e3b", plu: "4959" },
  { n: "Onions", c: "#b38b6d", plu: "4093" },
  { n: "Garlic", c: "#d9d4c7", plu: "4608" },
  { n: "Kale", c: "#2d5a3a", plu: "4627" },
];
const PICKS = [
  { k: 0, w: 2.46, p: 2.49 },
  { k: 4, w: 1.18, p: 1.99 },
  { k: 2, w: 3.1, p: 1.79 },
  { k: 8, w: 0.82, p: 2.29 },
];

export const KeysScreen: React.FC = () => {
  const [ref, inView] = useInView<HTMLDivElement>("100px");
  const step = useLoopStep(PICKS.length, 3200, inView, 0);
  const pick = PICKS[step];
  const weight = useTween(pick.w, 900);
  return (
    <div ref={ref} className="absolute inset-0" style={{ color: UI_INK }}>
      <TopBar title="Quick keys · Produce" right={<Chip tone="green">NTEP legal for trade</Chip>} />
      <div className="grid h-[506px]" style={{ gridTemplateColumns: "1fr 300px" }}>
        <div className="p-6 grid grid-cols-4 grid-rows-3 gap-3">
          {KEYS.map((k, i) => {
            const on = i === pick.k;
            return (
              <div
                key={k.n}
                className="rounded-2xl bg-white flex flex-col items-center justify-center gap-2 transition-all duration-300"
                style={{
                  border: `1.5px solid ${on ? "#31e327" : UI_LINE}`,
                  boxShadow: on ? "0 0 0 4px rgba(49,227,39,0.22)" : "none",
                  transform: on ? "translateY(-2px)" : "none",
                }}
              >
                <span
                  className="w-12 h-12 rounded-full"
                  style={{ background: `radial-gradient(circle at 35% 30%, ${k.c}, ${k.c}cc 55%, #00000033)` }}
                />
                <div className="text-[14px] font-semibold leading-none">{k.n}</div>
                <div className="text-[10.5px] font-mono" style={{ color: UI_MUTED }}>
                  PLU {k.plu}
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-6 pl-1">
          <div className="h-full rounded-2xl p-5 text-white flex flex-col" style={{ background: UI_INK }}>
            <div className="text-[11px] uppercase tracking-[0.12em] text-white/50">{KEYS[pick.k].n}</div>
            <div className="mt-2 font-mono text-[62px] leading-none text-[#31e327] tabular-nums">
              {weight.toFixed(2)}
            </div>
            <div className="text-white/50 font-mono text-[13px] mt-1">lb · TARE 0.04 AUTO</div>
            <div className="mt-6 flex justify-between text-[14px] text-white/70">
              <span>Price</span>
              <span className="tabular-nums">{usd(pick.p)}/lb</span>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10 flex items-baseline justify-between">
              <span className="text-[14px] text-white/70">Item total</span>
              <span className="text-[34px] font-extrabold tabular-nums">{usd(weight * pick.p)}</span>
            </div>
            <div className="mt-auto space-y-2">
              <div className="flex items-center gap-2 text-[12.5px] text-[#31e327]">
                <Check className="w-4 h-4" /> SNAP eligible
              </div>
              <div className="h-12 rounded-xl bg-[#31e327] text-[#0b0d0b] font-bold text-[15px] flex items-center justify-center">
                Add to sale
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* 3. AI invoice → pricebook                                           */
/* ------------------------------------------------------------------ */
const INVOICE = [
  { n: "Hass avocado 48ct", q: "6 cs", c: 38.0, p: 2.49, m: 34 },
  { n: "Roma tomato 25lb", q: "4 cs", c: 21.5, p: 1.99, m: 31 },
  { n: "Cilantro 30ct", q: "3 cs", c: 14.0, p: 0.79, m: 38 },
  { n: "Persian lime 40lb", q: "2 cs", c: 46.0, p: 3.49, m: 29 },
  { n: "Mango Ataulfo 12ct", q: "5 cs", c: 22.5, p: 2.29, m: 36 },
];

export const InvoiceScreen: React.FC = () => {
  const [ref, inView] = useInView<HTMLDivElement>("100px");
  const step = useLoopStep(INVOICE.length + 2, (s) => (s >= INVOICE.length ? 2400 : 900), inView, INVOICE.length);
  const parsed = Math.min(step, INVOICE.length);
  const done = step >= INVOICE.length;
  return (
    <div ref={ref} className="absolute inset-0" style={{ color: UI_INK }}>
      <TopBar
        title="Pricebook · Invoice reader"
        right={<Chip tone={done ? "green" : "dark"}>{done ? "Pricebook updated" : "Reading invoice…"}</Chip>}
      />
      <div className="grid h-[506px] gap-5 p-6" style={{ gridTemplateColumns: "0.9fr 1.1fr" }}>
        {/* paper */}
        <div className="relative rounded-xl bg-white p-5 overflow-hidden" style={{ border: `1px solid ${UI_LINE}` }}>
          <div className="text-[11px] font-mono" style={{ color: UI_MUTED }}>
            VALLEY FARMS WHOLESALE
          </div>
          <div className="text-[18px] font-bold mt-0.5">Invoice #20418</div>
          <div className="mt-4 space-y-[13px]">
            {INVOICE.map((r, i) => (
              <div
                key={r.n}
                className="flex justify-between font-mono text-[12px] pb-2 transition-colors duration-300"
                style={{
                  borderBottom: `1px dashed ${UI_LINE}`,
                  background: i === parsed - 1 && !done ? "rgba(49,227,39,0.2)" : "transparent",
                }}
              >
                <span>{r.n}</span>
                <span style={{ color: UI_MUTED }}>
                  {r.q} · ${r.c.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 font-mono text-[11px]" style={{ color: UI_MUTED }}>
            TOTAL DUE · $142.00
          </div>
          {!done && <div className="scan-line" />}
        </div>
        {/* pricebook */}
        <div className="rounded-xl bg-white overflow-hidden flex flex-col" style={{ border: `1px solid ${UI_LINE}` }}>
          <div
            className="grid px-5 h-10 items-center text-[11px] uppercase tracking-[0.1em]"
            style={{ gridTemplateColumns: "1.5fr 0.7fr 0.7fr 0.7fr", color: UI_MUTED, borderBottom: `1px solid ${UI_LINE}` }}
          >
            <span>Item</span>
            <span>Cost</span>
            <span>Price</span>
            <span className="text-right">Margin</span>
          </div>
          {INVOICE.map((r, i) =>
            i < parsed ? (
              <div
                key={r.n}
                className="grid px-5 h-[58px] items-center text-[14px] row-in"
                style={{ gridTemplateColumns: "1.5fr 0.7fr 0.7fr 0.7fr", borderBottom: `1px solid ${UI_LINE}` }}
              >
                <span className="font-semibold">{r.n.split(" ").slice(0, 2).join(" ")}</span>
                <span className="tabular-nums" style={{ color: UI_MUTED }}>
                  {usd(r.c / 12)}
                </span>
                <span className="tabular-nums font-semibold">{usd(r.p)}</span>
                <span className="text-right">
                  <Chip tone="green">{r.m}%</Chip>
                </span>
              </div>
            ) : (
              <div key={r.n} className="h-[58px]" style={{ borderBottom: `1px solid ${UI_LINE}` }} />
            )
          )}
          <div className="mt-auto px-5 py-4 flex items-center justify-between text-[13px]" style={{ background: "rgba(11,13,11,0.04)" }}>
            <span style={{ color: UI_MUTED }}>{parsed} of 5 lines matched to UPC</span>
            <div className="w-28 h-1.5 rounded-full bg-black/10 overflow-hidden">
              <div className="h-full bg-[#31e327] transition-all duration-500" style={{ width: `${(parsed / 5) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* 4. Back office dashboard                                            */
/* ------------------------------------------------------------------ */
const HOURS = [22, 30, 38, 55, 70, 62, 80, 92, 74, 66, 84, 58];

export const DashScreen: React.FC = () => {
  const [ref, inView] = useInView<HTMLDivElement>("100px");
  const step = useLoopStep(6, 2800, inView, 0);
  const sales = useTween(4812 + step * 137, 900);
  const baskets = useTween(286 + step * 4, 900);
  return (
    <div ref={ref} className="absolute inset-0" style={{ color: UI_INK }}>
      <TopBar
        title="Back office · All stores"
        right={
          <>
            <Chip>Today</Chip>
            <Chip tone="green">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0b0d0b] pulse-dot" /> Live
            </Chip>
          </>
        }
      />
      <div className="p-6 h-[506px] flex flex-col gap-4">
        <div className="grid grid-cols-4 gap-4">
          {[
            ["Net sales", "$" + Math.round(sales).toLocaleString("en-US")],
            ["Gross margin", "31.4%"],
            ["Baskets", String(Math.round(baskets))],
            ["Spoilage", "1.2%"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-2xl bg-white p-4" style={{ border: `1px solid ${UI_LINE}` }}>
              <div className="text-[12px]" style={{ color: UI_MUTED }}>
                {l}
              </div>
              <div className="mt-1 text-[28px] font-extrabold tracking-tight tabular-nums leading-none">{v}</div>
              <div className="mt-2 text-[11.5px] font-semibold" style={{ color: i === 3 ? "#c2410c" : "#14a50f" }}>
                {i === 3 ? "▼ 0.3 pts vs last wk" : "▲ vs last week"}
              </div>
            </div>
          ))}
        </div>
        <div className="grid flex-1 gap-4" style={{ gridTemplateColumns: "1.7fr 1fr" }}>
          <div className="rounded-2xl bg-white p-5 flex flex-col" style={{ border: `1px solid ${UI_LINE}` }}>
            <div className="text-[13px] font-semibold">Sales by hour</div>
            <div className="mt-3 flex-1 flex items-end gap-2.5">
              {HOURS.map((h, i) => (
                <div key={i} className="flex-1 rounded-t-md bg-[#31e327]/25 relative" style={{ height: `${h}%` }}>
                  <div
                    className="absolute inset-0 rounded-t-md bg-[#31e327] bar-loop"
                    style={{ animationDelay: `${i * 0.12}s` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[10.5px] font-mono mt-2" style={{ color: UI_MUTED }}>
              <span>8a</span>
              <span>12p</span>
              <span>4p</span>
              <span>8p</span>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5" style={{ border: `1px solid ${UI_LINE}` }}>
            <div className="text-[13px] font-semibold">Top departments</div>
            <div className="mt-4 space-y-4">
              {[
                ["Produce", 82],
                ["Dairy", 54],
                ["Bakery", 38],
                ["Grocery", 66],
              ].map(([n, v]) => (
                <div key={n as string}>
                  <div className="flex justify-between text-[12.5px] mb-1.5">
                    <span className="font-semibold">{n}</span>
                    <span style={{ color: UI_MUTED }}>{v}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-black/[0.07] overflow-hidden">
                    <div className="h-full rounded-full bg-[#0b0d0b]" style={{ width: `${v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
