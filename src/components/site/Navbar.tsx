import React, { useEffect, useState } from "react";
import { VoriLogo } from "../vori/VoriLogo";

interface NavbarProps {
  onBookDemo: (context?: string) => void;
}

const LINKS: { label: string; id: string; page?: string }[] = [
  { label: "How it works", id: "system" },
  { label: "Hardware", id: "hardware" },
  { label: "Download", id: "download" },
  { label: "Partnerships", id: "partnerships", page: "/partnerships" },
];

export const Navbar: React.FC<NavbarProps> = ({ onBookDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const home = window.location.pathname.replace(/\/+$/, "") === "";

  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 24);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => (e: React.MouseEvent) => {
    setOpen(false);
    if (home) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
          scrolled || open || !home
            ? "bg-ink/90 backdrop-blur-xl border-white/[0.08]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[80rem] h-[68px] sm:h-[76px] px-5 sm:px-10 flex items-center justify-between">
          <a
            href="/"
            aria-label="Produce Ai home"
            onClick={(e) => {
              setOpen(false);
              if (home) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <VoriLogo theme="dark" size="nav" />
          </a>

          <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={l.page ?? `/#${l.id}`}
                onClick={l.page ? () => setOpen(false) : go(l.id)}
                className="link-draw text-[14.5px] text-white/65 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <button
                type="button"
                onClick={() => onBookDemo("Navbar — Get free hardware")}
                className="btn btn-neon h-10 px-5 text-[14px]"
              >
                Get free hardware
              </button>
            </div>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden -mr-2 w-11 h-11 flex items-center justify-center text-white"
            >
              <span className="relative block w-6 h-3">
                <span className={`absolute left-0 right-0 h-[1.5px] bg-white transition-all duration-300 ${open ? "top-1/2 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 right-0 h-[1.5px] bg-white transition-all duration-300 ${open ? "top-1/2 -rotate-45" : "bottom-0"}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* full-screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink md:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col justify-center px-8 gap-1 pb-10">
          {LINKS.map((l, i) => (
            <a
              key={l.id}
              href={l.page ?? `/#${l.id}`}
              onClick={l.page ? () => setOpen(false) : go(l.id)}
              className="py-5 text-[32px] font-bold tracking-tight text-white/90"
              style={{
                transform: open ? "none" : "translateY(16px)",
                transition: `transform .6s cubic-bezier(.16,1,.3,1) ${i * 70}ms`,
              }}
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onBookDemo("Mobile menu — Get free hardware");
            }}
            className="btn btn-neon mt-10 h-14 text-[16px] w-full"
          >
            Get free hardware
          </button>
          <a href="tel:+13472130687" className="mt-5 text-center text-white/50 tabular-nums">
            +1 (347) 213-0687
          </a>
        </div>
      </div>
    </>
  );
};
