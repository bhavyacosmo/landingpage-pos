import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Does Stitch Produce OS connect directly to commercial weighing scales?",
    answer: "Yes. Stitch Produce OS features direct native RS-232 serial and USB integration with Zebra MP7000, Datalogic Magellan, and CAS scale systems. Platter weight is locked in 0.08 seconds without cashiers manually typing tare numbers or waiting for Bluetooth stabilization."
  },
  {
    question: "What happens if the supermarket internet drops during busy store hours?",
    answer: "The terminal operates on an automatic dual-mesh local offline kernel. Cashiers continue weighing produce, scanning items, and accepting cash or stored card payments with zero lag. All tickets automatically reconcile to the backoffice cloud the millisecond connectivity returns."
  },
  {
    question: "How does automated EBT SNAP and WIC separation work?",
    answer: "Full USDA and state SNAP compliance is baked directly into the pricebook engine. When a transaction contains both food produce and non-food goods, the terminal automatically calculates the SNAP-eligible balance. The customer simply swipes their EBT card, and the remaining non-food balance is paid via cash or credit card in one smooth transaction."
  },
  {
    question: "Can I monitor gross profit margins and change produce prices from home?",
    answer: "Yes. The responsive backoffice portal is accessible from any iPhone, Android phone, iPad, or home laptop. You can monitor live store sales, update PLU prices across all registers and Electronic Shelf Labels instantly, and audit employee cashier shifts from anywhere."
  },
  {
    question: "How does the $0 Free Hardware Grant work?",
    answer: "Independent supermarkets processing qualifying monthly card volume receive the complete $5,000 hardware kit at zero upfront capital expense. This includes dual-touchscreen terminals, in-counter bi-optic scales, thermal receipt printers, and PIN pads. A certified technician is dispatched directly to your store for white-glove setup."
  }
];

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 lg:py-20 bg-surface-warm border-t border-border-hairline" id="faq">
      <div className="max-w-[840px] mx-auto px-4 sm:px-8 flex flex-col gap-10">
        
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-mono-telemetry text-[11px] font-bold text-slate-600 bg-white border border-border-hairline px-3 py-1 rounded-full uppercase tracking-widest">
            GROCER FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl text-slate-900 font-semibold tracking-tight">
            Clear Answers for Store Owners
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.question} 
                className="bg-white rounded-2xl border border-border-hairline p-6 transition-all duration-200 shadow-2xs"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left gap-4 font-editorial text-lg sm:text-xl text-slate-900 font-semibold cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className={`material-symbols-outlined text-2xl transition-transform duration-200 ${isOpen ? 'text-emerald-accent' : 'text-text-subtle'}`}>
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {isOpen && (
                  <div className="pt-3 text-xs sm:text-sm text-text-muted leading-relaxed">
                    {faq.answer}
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
