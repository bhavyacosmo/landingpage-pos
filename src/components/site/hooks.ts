import type React from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** True while the element is on screen (so loops only run when seen). */
export function useInView<T extends HTMLElement>(margin = "0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { rootMargin: margin, threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);
  return [ref, inView] as const;
}

/**
 * Steps 0..steps-1 on a timer. `holds` can override the delay per step.
 * Under reduced motion it rests on `restAt`.
 */
export function useLoopStep(
  steps: number,
  delay: number | ((step: number) => number),
  active: boolean,
  restAt = steps - 1
) {
  const [step, setStep] = useState(restAt);
  const reduced = prefersReducedMotion();
  useEffect(() => {
    if (reduced) {
      setStep(restAt);
      return;
    }
    if (!active) return;
    const d = typeof delay === "function" ? delay(step) : delay;
    const t = window.setTimeout(() => setStep((s) => (s + 1) % steps), d);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, step, reduced]);
  return step;
}

/** Smoothly eases a number toward its target. */
export function useTween(target: number, ms = 650) {
  const [v, setV] = useState(target);
  const from = useRef(target);
  useEffect(() => {
    if (prefersReducedMotion()) {
      from.current = target;
      setV(target);
      return;
    }
    const a = from.current;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / ms);
      const e = 1 - Math.pow(1 - p, 3);
      const cur = a + (target - a) * e;
      from.current = cur;
      setV(cur);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return v;
}

export const usd = (n: number) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function useMedia(query: string, initial = false) {
  const [m, setM] = useState(() =>
    typeof window === "undefined" ? initial : window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setM(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return m;
}

/** Cursor-follow light for `.spot` cards. */
export const spotMove = (e: React.MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};


/**
 * Three authored entrances, one ease: headings rise out of a clip,
 * cards lift in with a soft blur, photos open from an inset frame.
 * Content is visible until JS runs, and nothing runs under reduced motion.
 */
export function useReveal(enabled: boolean) {
  useLayoutEffect(() => {
    if (!enabled || prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const ease = "expo.out";
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal='head']").forEach((el) => {
        gsap.set(el, { clipPath: "inset(0 0 100% 0)", y: 34 });
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () =>
            gsap.to(el, {
              clipPath: "inset(-12% -3% -30% -3%)",
              y: 0,
              duration: 1.15,
              ease,
              clearProps: "clipPath,transform",
            }),
        });
      });

      gsap.set("[data-reveal='rise']", { opacity: 0, y: 44, filter: "blur(8px)" });
      ScrollTrigger.batch("[data-reveal='rise']", {
        start: "top 92%",
        once: true,
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.05,
            ease,
            stagger: 0.09,
            overwrite: true,
            clearProps: "transform,filter",
          }),
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal='media']").forEach((el) => {
        const img = el.querySelector("img");
        gsap.set(el, { clipPath: "inset(12% 12% 12% 12% round 24px)" });
        if (img) gsap.set(img, { scale: 1.16 });
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(el, { clipPath: "inset(0% 0% 0% 0% round 24px)", duration: 1.2, ease, clearProps: "clipPath" });
            if (img) gsap.to(img, { scale: 1, duration: 1.5, ease, clearProps: "transform" });
          },
        });
      });
    });
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [enabled]);
}
