import React, { useEffect, useState } from "react";
import { VoriLogo } from "./VoriLogo";

interface VoriNavbarProps {
  onBookDemo: (context?: string) => void;
}

export const VoriNavbar: React.FC<VoriNavbarProps> = ({ onBookDemo }) => {
  const [isOverDark, setIsOverDark] = useState(true);
  const [isAtVeryTop, setIsAtVeryTop] = useState(true);

  useEffect(() => {
    const check = () => {
      setIsAtVeryTop(window.scrollY < 24);
      const probeY = 36;
      let overDark = false;
      document
        .querySelectorAll<HTMLElement>('[data-nav-theme="dark"]')
        .forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top <= probeY && r.bottom >= probeY) overDark = true;
        });
      setIsOverDark(overDark);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  const surface = isOverDark
    ? isAtVeryTop
      ? "bg-transparent text-white border-transparent"
      : "bg-[#0f0f0f]/95 text-white border-white/[0.08]"
    : "bg-white/95 text-[#0f0f0f] border-black/[0.06]";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${surface}`}
    >
      <div className="max-w-[80rem] mx-auto px-6 sm:px-10 h-[72px] flex items-center justify-between">
        <a
          href="/"
          aria-label="Produce Ai home"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <VoriLogo theme={isOverDark ? "dark" : "light"} size="nav" />
        </a>

        <div className="flex items-center gap-6">
          <a
            href="/contact"
            className={`text-[14.5px] transition-opacity hover:opacity-70 ${
              isOverDark ? "text-white/80" : "text-[#0f0f0f]/70"
            }`}
          >
            Contact
          </a>
          <a
            href="tel:3472130687"
            className={`hidden sm:block text-[14.5px] tabular-nums transition-opacity hover:opacity-70 ${
              isOverDark ? "text-white/80" : "text-[#0f0f0f]/70"
            }`}
          >
            (347) 213-0687
          </a>
          <button
            type="button"
            onClick={() => onBookDemo("Navbar — Get Free Hardware")}
            className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-200 active:scale-[0.97] ${
              isOverDark
                ? "bg-white text-[#0f0f0f] hover:bg-[#ecfdf5]"
                : "bg-[#10b981] text-white hover:bg-[#059669]"
            }`}
          >
            Get free hardware
          </button>
        </div>
      </div>
    </header>
  );
};
