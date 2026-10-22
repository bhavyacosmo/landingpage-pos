import { useState, useEffect } from 'react';
import { AppleNavbar } from './components/AppleNavbar';
import { HeroMinimal } from './components/HeroMinimal';
import { InteractiveScaleLab } from './components/InteractiveScaleLab';
import { InvoiceScannerDemo } from './components/InvoiceScannerDemo';
import { DeviceGallery } from './components/DeviceGallery';
import { ProducePillars } from './components/ProducePillars';
import { RoiCalculator } from './components/RoiCalculator';
import { AppleSpecs } from './components/AppleSpecs';
import { FaqSection } from './components/FaqSection';
import { GrantCallout } from './components/GrantCallout';
import { AppleFooter } from './components/AppleFooter';
import { LeadModal } from './components/LeadModal';
import { LegalPage } from './components/LegalPage';

const LEGAL_ROUTES: Record<string, 'privacy' | 'terms'> = {
  '/privacy-policy': 'privacy',
  '/terms-of-service': 'terms'
};

export default function App() {
  const legalPage = LEGAL_ROUTES[window.location.pathname.replace(/\/+$/, '')];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('stitch_theme');
      if (saved === 'light' || saved === 'dark') return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'dark'; // Default dark for futuristic sleek visual impact
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(progress);

      if (window.scrollY > 260) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for fluid Apple-grade scroll reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Jump to the requested section when arriving from another page (e.g. /#faq)
    let hashTimer: number | undefined;
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      hashTimer = window.setTimeout(() => target?.scrollIntoView({ behavior: 'instant' }), 150);
    }

    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-scale, .reveal-fade');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      window.clearTimeout(hashTimer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('stitch_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#fafaf9] dark:bg-[#090b0e] text-black dark:text-white font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-500 dark:selection:bg-emerald-400/20 dark:selection:text-emerald-400 transition-colors duration-300">
      
      {/* Sleek Apple-Grade Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 z-50 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(16,185,129,0.85)] pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Frosted Glass Navigation with Active Theme Toggle */}
      <AppleNavbar 
        onOpenModal={() => setIsModalOpen(true)} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Experience Stream */}
      <main className="w-full">
        {legalPage ? (
          <LegalPage type={legalPage} />
        ) : (
        <>
        {/* 1. Nike + Apple Monumental Hero with Produce AI Intel */}
        <HeroMinimal onOpenModal={() => setIsModalOpen(true)} />

        {/* 2. Interactive Live Register & Zebra Scale Simulator */}
        <InteractiveScaleLab />

        {/* 3. AI Paper Vendor Invoice Digitizer (Signature Produce AI Feature) */}
        <InvoiceScannerDemo />

        {/* 4. Complete Hardware Suite Showcase ($0 Free Equipment) */}
        <DeviceGallery onOpenModal={() => setIsModalOpen(true)} />

        {/* 5. Complete 3-Pillar Architecture from ProduceAI.co */}
        <ProducePillars />

        {/* 6. Product Manager ROI Store Savings Calculator */}
        <RoiCalculator onOpenModal={() => setIsModalOpen(true)} />

        {/* 7. Clean Technical & Certification Specifications */}
        <AppleSpecs />

        {/* 8. Verified FAQs from ProduceAI.co */}
        <FaqSection />

        {/* 9. High-Conversion Free Hardware Callout */}
        <GrantCallout onOpenModal={() => setIsModalOpen(true)} />
        </>
        )}
      </main>

      {/* Minimalist Apple Footer */}
      <AppleFooter />

      {/* Friction-Free Hardware Reservation Dialog */}
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Phone View: Floating Go on Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Go to top"
        className={`sm:hidden fixed bottom-6 right-5 z-40 w-12 h-12 rounded-full bg-black/90 dark:bg-emerald-500 text-white dark:text-black shadow-2xl border border-white/20 dark:border-black/20 flex items-center justify-center transition-all duration-300 backdrop-blur-md cursor-pointer active:scale-90 ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <span className="material-symbols-outlined text-2xl font-bold">arrow_upward</span>
      </button>
    </div>
  );
}
