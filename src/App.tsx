import { useEffect, useState } from "react";
import { VoriNavbar } from "./components/vori/VoriNavbar";
import { VoriHero } from "./components/vori/VoriHero";
import { OutcomeTabsSection } from "./components/vori/OutcomeTabsSection";
import { HardwareUpgradeSection } from "./components/vori/HardwareUpgradeSection";
import { VoriFaqSection } from "./components/vori/VoriFaqSection";
import { VoriFooter } from "./components/vori/VoriFooter";
import { BookDemoModal } from "./components/vori/BookDemoModal";
import { LegalPage } from "./components/vori/LegalPage";
import { ContactPage } from "./components/vori/ContactPage";
import { PRIVACY, TERMS } from "./components/vori/legalContent";

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoContext, setDemoContext] = useState<string | undefined>(undefined);

  const openBookDemo = (context?: string) => {
    setDemoContext(context);
    setDemoModalOpen(true);
  };

  useEffect(() => {
    const titles: Record<string, string> = {
      "/privacy-policy": "Privacy Policy | Produce AI POS",
      "/terms-of-service": "Terms of Service | Produce AI POS",
      "/contact": "Contact Us | Produce AI POS",
    };
    if (titles[path]) document.title = titles[path];
    window.scrollTo(0, 0);
  }, [path]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDemoModalOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-[#0f0f0f] font-sans antialiased selection:bg-[#d1fae5] selection:text-[#065f46]">
      {/* Sticky Minimalist Header */}
      <VoriNavbar onBookDemo={openBookDemo} />

      <main className="w-full">
        {path === "/privacy-policy" ? (
          <LegalPage doc={PRIVACY} />
        ) : path === "/terms-of-service" ? (
          <LegalPage doc={TERMS} />
        ) : path === "/contact" ? (
          <ContactPage />
        ) : (
          <>
            {/* 1. Dark Editorial Hero */}
            <VoriHero onBookDemo={openBookDemo} />

            {/* 2. Complete 3-Pillar System Architecture (Generous White Space) */}
            <OutcomeTabsSection onBookDemo={openBookDemo} />

            {/* 3. Free Basic Hardware Setup + Optional Hardware Add-Ons + Spec Sheet */}
            <HardwareUpgradeSection onBookDemo={openBookDemo} />

            {/* 4. Frequently Asked Questions */}
            <VoriFaqSection onBookDemo={openBookDemo} />
          </>
        )}
      </main>

      {/* 5. Free Hardware Program Callout & Footer */}
      <VoriFooter onBookDemo={openBookDemo} />

      {/* Lead Capture Modal */}
      <BookDemoModal
        isOpen={demoModalOpen}
        context={demoContext}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
