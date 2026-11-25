import React, { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { prefersReducedMotion } from "./hooks";

export const ScrollTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed z-40 right-4 sm:right-8 bottom-[max(16px,env(safe-area-inset-bottom))] sm:bottom-8 flex flex-col items-center gap-2.5">
      <button
        type="button"
        aria-label="Back to top"
        tabIndex={show ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" })}
        className={`h-10 w-10 rounded-full bg-ink text-white border border-white/20 flex items-center justify-center shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] transition-[opacity,transform] duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
          show ? "opacity-100" : "opacity-0 pointer-events-none translate-y-3"
        }`}
      >
        <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
      </button>
      <a
        href="tel:+13472130687"
        aria-label="Call +1 (347) 213-0687"
        className="sm:hidden h-10 w-10 rounded-full bg-neon text-ink flex items-center justify-center shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] transition-transform duration-200 active:scale-95"
      >
        <Phone className="w-4 h-4" strokeWidth={2.25} />
      </a>
    </div>
  );
};
