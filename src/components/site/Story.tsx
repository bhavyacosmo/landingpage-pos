import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MEDIA } from "../../media";
import { DashScreen, DeviceFrame, InvoiceScreen, KeysScreen, ScaledScreen } from "./screens";
import { prefersReducedMotion, useMedia } from "./hooks";

gsap.registerPlugin(ScrollTrigger);

const CHAPTERS = [
  {
    key: "checkout" as const,
    n: "01",
    title: "Register",
    lead: "Weigh, scan and ring up in one lane.",
    points: ["Scale sync with automatic tare", "EBT, WIC and OTC split in one tap", "Keeps selling when the internet drops"],
    Screen: KeysScreen,
  },
  {
    key: "scale" as const,
    n: "02",
    title: "Scale",
    lead: "Weigh and print price labels from the register.",
    points: [],
    Screen: KeysScreen,
  },
  {
    key: "payment" as const,
    n: "03",
    title: "Checkout",
    lead: "EBT, WIC, card and cash. One tap each.",
    points: ["EBT, WIC and OTC split in one tap", "Cash change and exact tender", "Loyalty points at the register"],
    Screen: InvoiceScreen,
  },
  {
    key: "backoffice" as const,
    n: "04",
    title: "Back office",
    lead: "Pricebook, stock and reports from your phone or laptop.",
    points: ["Live sales and profit by department", "Z-reports and shift audits", "Staff roles and multi-store view"],
    Screen: DashScreen,
  },
];

const ScreenOrImage: React.FC<{ c: (typeof CHAPTERS)[number] }> = ({ c }) => {
  const src = MEDIA.screens[c.key];
  return src ? (
    <div className="aspect-[1600/977]">
      <img src={src} alt={`Produce Ai ${c.title} screen`} className="slot-img" />
    </div>
  ) : (
    <ScaledScreen>
      <c.Screen />
    </ScaledScreen>
  );
};

export const Story: React.FC = () => {
  const desktop = useMedia("(min-width: 1024px)");
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    if (!desktop || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".story-pin",
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const i = Math.min(CHAPTERS.length - 1, Math.floor(self.progress * CHAPTERS.length));
          setActive(i);
          gsap.set(".story-fill", { scaleY: self.progress });
        },
      });
    }, root);
    return () => ctx.revert();
  }, [desktop]);

  const heading = (
    <h2 data-reveal="head" className="h-display h-section max-w-[34rem] text-balance !leading-[1.04]">
      Your whole store, one system.
    </h2>
  );

  if (!desktop) {
    return (
      <section id="system" className="paper-ground seam-in seam-out text-ink py-28 sm:py-40">
        <div className="max-w-[80rem] mx-auto px-5 sm:px-10">
          {heading}
          <div className="mt-20 space-y-28">
            {CHAPTERS.map((c) => (
              <div key={c.key}>
                <DeviceFrame>
                  <ScreenOrImage c={c} />
                </DeviceFrame>
                <div className="mt-7">
                  <h3 className="text-[26px] font-extrabold tracking-tight">{c.title}</h3>
                </div>
                <p className="mt-2 text-[18px] text-ink/60">{c.lead}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="system" ref={root} className="paper-ground seam-in seam-out text-ink">
      <div className="story-pin min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 ground-grid-light opacity-60 pointer-events-none" />
        <div className="relative w-full max-w-[80rem] mx-auto px-10 pt-28 pb-14 grid grid-cols-12 gap-16 items-center">
          <div className="col-span-5">
            {heading}
            <div className="mt-16 relative pl-8">
              <div className="absolute left-0 top-1 bottom-1 w-px bg-ink/15" />
              <div className="story-fill absolute left-0 top-1 bottom-1 w-px bg-[#14a50f] origin-top" style={{ transform: "scaleY(0)" }} />
              {CHAPTERS.map((c, i) => {
                const on = i === active;
                return (
                  <div key={c.key} className="py-3.5">
                    <div className="flex items-baseline gap-3">
                      <h3
                        className={`text-[24px] font-extrabold tracking-tight transition-colors duration-300 ${
                          on ? "text-ink" : "text-ink/55"
                        }`}
                      >
                        {c.title}
                      </h3>
                    </div>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                        on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-2 pb-1 text-[17px] text-ink/60 max-w-[24rem]">{c.lead}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-7 relative">
            <div className="absolute -inset-10 bg-[radial-gradient(closest-side,rgba(49,227,39,0.22),transparent_70%)] pointer-events-none" />
            <DeviceFrame className="relative">
              <div className="relative aspect-[1600/977]">
                <span key={active} aria-hidden className="glint z-10" />
                {CHAPTERS.map((c, i) => (
                  <div
                    key={c.key}
                    className="absolute inset-0 transition-[opacity,transform,filter] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      opacity: i === active ? 1 : 0,
                      filter: i === active ? "blur(0px)" : "blur(6px)",
                      transform: i === active ? "none" : `translateY(${i < active ? "-4%" : "4%"}) scale(.97)`,
                      pointerEvents: i === active ? "auto" : "none",
                    }}
                    aria-hidden={i !== active}
                  >
                    <ScreenOrImage c={c} />
                  </div>
                ))}
              </div>
            </DeviceFrame>
          </div>
        </div>
      </div>
    </section>
  );
};
