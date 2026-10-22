import React, { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
  tag: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Does Produce AI POS connect directly to hardware weight scales?",
    a: "Yes! Produce AI POS includes native drivers for Zebra MP7000, Magellan, CAS, and standard serial/USB scale bridges. Weight is read automatically in 0.1 seconds at checkout, with automatic plastic tare deduction and legal-for-trade NTEP Class III certification.",
    tag: "HARDWARE SCALES"
  },
  {
    q: "What happens if our internet goes down during store hours?",
    a: "Produce AI POS features 100% offline register resilience. Cashiers can continue ringing up sales, scanning barcodes, weighing items, and printing receipts without internet. When internet returns, local SQLite logs automatically sync back to the cloud with zero lost transactions.",
    tag: "OFFLINE RESILIENCE"
  },
  {
    q: "Does Produce AI POS support EBT SNAP, WIC, and OTC payments?",
    a: "Yes! Produce AI POS fully supports split tenders, including EBT SNAP Food Stamps, state WIC programs, OTC health benefit cards, credit, debit, and cash. It automatically separates eligible produce from taxable household items in a single tap.",
    tag: "PAYMENT TENDERS"
  },
  {
    q: "Can we access the Backoffice from home or on a mobile phone?",
    a: "Yes! The standalone Web Backoffice allows store owners and managers to monitor live register sales, update prices, manage inventory, and view profit reports from any browser on phone, tablet, or laptop from anywhere in the world.",
    tag: "MOBILE BACKOFFICE"
  },
  {
    q: "How is the complete hardware package 100% free ($0 due)?",
    a: "Under the 2026 Fresh Produce Merchant Program, certified equipment packages (including dual-screen terminal, scanner scale, handheld PDA, and electronic shelf tags) are deployed with zero upfront capital expenditure to qualified grocery stores.",
    tag: "FREE HARDWARE"
  },
  {
    q: "How fast is in-store installation and cashier training?",
    a: "A certified technician arrives at your store, sets up the scale, integrates with your existing counter, and trains cashiers in less than 30 minutes. Cashiers learn the photo-button interface immediately.",
    tag: "INSTALLATION"
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-16 sm:py-24 md:py-28 bg-[#fafaf9] dark:bg-[#090b0e] border-b border-neutral-200 dark:border-neutral-800/80 transition-colors" id="faq">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="reveal-on-scroll mb-10 sm:mb-14 text-center max-w-2xl mx-auto">
          <div className="text-[11px] font-mono-telemetry uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold mb-2">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black dark:text-white uppercase leading-tight">
            Got Questions? <br />
            <span className="text-emerald-600 dark:text-emerald-400">We've Got Answers.</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="reveal-on-scroll delay-150 max-w-3xl mx-auto flex flex-col gap-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-[#121418]/80 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/50 dark:hover:bg-white/5 transition-colors"
                >
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-[10px] font-mono-telemetry uppercase text-emerald-700 dark:text-emerald-400 font-bold">
                      {faq.tag}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-black dark:text-white tracking-tight">
                      {faq.q}
                    </span>
                  </div>
                  <span className={`material-symbols-outlined text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    keyboard_arrow_down
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed border-t border-neutral-100 dark:border-neutral-800/60 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
