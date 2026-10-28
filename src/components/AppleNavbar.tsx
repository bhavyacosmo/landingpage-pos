import React, { useState } from 'react';

interface AppleNavbarProps {
  onOpenModal: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const AppleNavbar: React.FC<AppleNavbarProps> = ({ onOpenModal, theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-white/75 dark:bg-[#090b0e]/80 border-b border-black/5 dark:border-white/10 transition-all duration-300 shadow-xs">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="/" className="flex items-center group">
            <div className="h-9 sm:h-10 px-2 py-1 rounded-xl bg-black border border-white/10 shadow-xs flex items-center justify-center group-hover:border-emerald-500/40 group-hover:scale-105 transition-all duration-300">
              <img 
                src="/images/produce_ai_logo.png" 
                alt="Produce Ai" 
                className="h-full w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-neutral-600 dark:text-neutral-300 tracking-tight">
            <a href="/#pillars" className="hover:text-black dark:hover:text-white transition-colors">
              System Features
            </a>
            <a href="/#faq" className="hover:text-black dark:hover:text-white transition-colors">
              FAQs
            </a>
            <a href="/contact" className="hover:text-black dark:hover:text-white transition-colors">
              Contact Us
            </a>
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Dark / Light Mode Toggle Button (Hidden on phone view) */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle dark mode"
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="hidden sm:flex w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700/80 bg-neutral-100/80 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs backdrop-blur-md"
            >
              {theme === 'dark' ? (
                <span className="material-symbols-outlined text-lg text-amber-300 transition-transform hover:rotate-45">
                  light_mode
                </span>
              ) : (
                <span className="material-symbols-outlined text-lg text-neutral-700 transition-transform hover:-rotate-12">
                  dark_mode
                </span>
              )}
            </button>

            {/* Direct Phone Line */}
            <a 
              href="tel:3472130687" 
              className="hidden md:inline-flex text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors font-mono-telemetry"
            >
              (347) 213-0687
            </a>

            {/* Free Hardware CTA Button (Hidden on phone view) */}
            <button 
              onClick={onOpenModal}
              className="hidden sm:inline-flex px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-black dark:bg-emerald-500 text-white dark:text-black text-xs font-bold tracking-tight hover:bg-neutral-800 dark:hover:bg-emerald-400 transition-all cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Free Hardware
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center cursor-pointer border border-neutral-200 dark:border-neutral-700"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full bg-white/95 dark:bg-[#0c0e12]/95 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 px-6 py-5 flex flex-col gap-4 text-sm font-semibold text-neutral-800 dark:text-neutral-200 animate-in fade-in slide-in-from-top-2 duration-200">
            <a 
              href="/#pillars" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-emerald-600 transition-colors"
            >
              System Features
            </a>
            <a 
              href="/#faq" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-emerald-600 transition-colors"
            >
              FAQs
            </a>
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-600 transition-colors"
            >
              Contact Us
            </a>
            <div className="pt-2 flex items-center justify-between sm:hidden">
              <span className="text-xs text-neutral-500 font-medium">Appearance</span>
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm text-amber-400 dark:text-amber-300">
                  {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full py-3 rounded-full bg-black dark:bg-emerald-500 text-white dark:text-black text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md"
            >
              Get Free Hardware
            </button>
            <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono-telemetry">
              <span>Call store specialist:</span>
              <a href="tel:3472130687" className="font-bold text-emerald-600 dark:text-emerald-400">
                (347) 213-0687
              </a>
            </div>
          </div>
        )}
      </header>
  );
};
