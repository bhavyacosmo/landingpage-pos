import React, { useState } from "react";
import { Plus } from "lucide-react";

interface VoriFaqSectionProps {
  onBookDemo: (context?: string) => void;
}

const FAQ_ITEMS = [
  {
    q: "Does it connect directly to my weight scale?",
    a: "Yes. Native drivers cover Zebra MP7000, Magellan, CAS and standard serial or USB scales. Weight is read at checkout with automatic bag tare, and the scale is NTEP Class III legal for trade.",
  },
  {
    q: "What happens if the internet goes down?",
    a: "Registers keep ringing sales, scanning, weighing and printing receipts. When the connection returns, local logs sync to the cloud with no lost transactions.",
  },
  {
    q: "Does it support EBT SNAP, WIC and OTC payments?",
    a: "Yes. Split a basket across EBT SNAP, WIC, OTC cards, credit, debit and cash. Eligible produce is separated from taxable items in a single tap.",
  },
  {
    q: "How do installation and cashier training work?",
    a: "A certified technician delivers your equipment, connects the scale, printer and cash drawer, and walks your cashiers through the photo-button interface so they can start ringing right away.",
  },
];

export const VoriFaqSection: React.FC<VoriFaqSectionProps> = ({
  onBookDemo,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-32 sm:py-44">
      <div className="max-w-[80rem] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="font-sans font-extrabold text-[36px] sm:text-[48px] leading-[1.1] tracking-[-0.025em]">
            Questions
          </h2>
          <p className="mt-5 text-[16px] leading-[1.6] text-[#555555]">
            Something else?{" "}
            <button
              type="button"
              onClick={() => onBookDemo("FAQ — Contact Specialist")}
              className="link-draw text-[#0f0f0f] font-medium"
            >
              Talk with our team
            </button>
          </p>
        </div>

        <div className="lg:col-span-8 border-t border-black/[0.08]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.q} className="border-b border-black/[0.08]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left flex items-center justify-between gap-6 py-7 group"
                >
                  <span className="font-sans font-semibold text-[18px] sm:text-[20px] leading-[1.35] group-hover:text-[#059669] transition-colors">
                    {item.q}
                  </span>
                  <Plus
                    className={`w-5 h-5 shrink-0 text-[#737373] group-hover:text-[#10b981] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 pr-10 text-[16.5px] leading-[1.7] text-[#555555] max-w-[40rem]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
