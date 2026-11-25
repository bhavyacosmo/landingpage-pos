import React from "react";
import { LeadForm } from "./LeadForm";
import { PageTabs } from "./LegalPage";

const WAYS = [
  { label: "Call", value: "+1 (347) 213-0687", href: "tel:+13472130687", note: "Support is open 24/7" },
  { label: "Email", value: "support@producepos.app", href: "mailto:support@producepos.app" },
  { label: "Visit", value: "3508 White Plains Rd, Bronx, NY" },
];

export const ContactPage: React.FC = () => (
  <section className="bg-paper text-ink pt-28 sm:pt-36 pb-24 sm:pb-36">
    <div className="max-w-[80rem] mx-auto px-5 sm:px-10">
      <PageTabs current="contact" />

      <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
        <div className="lg:col-span-5">
          <h1 className="text-[44px] sm:text-[64px] font-extrabold tracking-[-0.035em] leading-[1.02] text-balance">
            Request free hardware, or ask us anything.
          </h1>

          <dl className="mt-14 border-t border-ink/15">
            {WAYS.map((w) => (
              <div key={w.label} className="grid grid-cols-[5rem_1fr] gap-4 py-5 border-b border-ink/15">
                <dt className="eyebrow text-ink/40 pt-[5px]">{w.label}</dt>
                <dd className="text-[19px] leading-snug">
                  {w.href ? (
                    <a href={w.href} className="link-draw tabular-nums">
                      {w.value}
                    </a>
                  ) : (
                    w.value
                  )}
                  {w.note && <span className="block mt-1 text-[14.5px] text-ink/50">{w.note}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-7 rounded-[28px] bg-white p-7 sm:p-12 border border-ink/[0.07]">
          <LeadForm context="Contact page" />
        </div>
      </div>
    </div>
  </section>
);
