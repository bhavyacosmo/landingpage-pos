import React from "react";

interface OutcomeTabsSectionProps {
  onBookDemo?: (context?: string) => void;
}

const PILLARS = [
  {
    title: "Front-lane register",
    lead: "Weigh, scan and ring up in one lane, even when the internet drops.",
    items: [
      "Zebra, Magellan and CAS scale sync with automatic tare",
      "Photo buttons for produce",
      "EBT, WIC and OTC split tender in one tap",
      "Offline mode that syncs when you reconnect",
    ],
  },
  {
    title: "Pricebook & inventory",
    lead: "Know your costs and protect your margin.",
    items: [
      "Smart pricebook with margin rules",
      "AI reader for paper vendor invoices",
      "Shrinkage and spoilage log",
      "Low-stock alerts and electronic shelf tag sync",
    ],
  },
  {
    title: "Web back office",
    lead: "Run the store from your phone or laptop.",
    items: [
      "Live sales and profit dashboard",
      "Z-reports and shift audits",
      "Staff roles and permissions",
      "Department sales and multi-store view",
    ],
  },
];

export const OutcomeTabsSection: React.FC<OutcomeTabsSectionProps> = () => (
  <section
    id="pillars"
    className="bg-white py-32 sm:py-44 border-b border-black/[0.06]"
  >
    <div className="max-w-[80rem] mx-auto px-6 sm:px-10">
      <h2 className="font-sans font-extrabold text-[36px] sm:text-[52px] leading-[1.1] tracking-[-0.025em] max-w-[40rem] text-balance">
        Everything your grocery store needs.{" "}
        <span className="text-[#059669]">In one system.</span>
      </h2>

      <div className="mt-20 sm:mt-28 border-t border-black/[0.08]">
        {PILLARS.map((p) => (
          <div
            key={p.title}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 sm:py-14 border-b border-black/[0.08]"
          >
            <h3 className="md:col-span-4 font-sans font-bold text-[24px] leading-[1.2] tracking-[-0.01em]">
              {p.title}
            </h3>
            <div className="md:col-span-8">
              <p className="text-[19px] leading-[1.5] text-[#0f0f0f] max-w-[34rem]">
                {p.lead}
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-[16px] leading-[1.55] text-[#555555]">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 sm:mt-28 overflow-hidden rounded-[20px] bg-[#f4f3f1] group">
        <img
          src="/images/backoffice_dashboard.jpg"
          alt="Produce AI web back office on a desktop monitor and tablet"
          loading="lazy"
          className="w-full aspect-[16/9] sm:aspect-[2/1] object-cover object-[50%_45%] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </div>
    </div>
  </section>
);
