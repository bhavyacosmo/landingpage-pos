import React from "react";
import { LegalDoc } from "./legalContent";

export const LegalPage: React.FC<{ doc: LegalDoc }> = ({ doc }) => (
  <section className="bg-white pt-40 sm:pt-48 pb-32 sm:pb-44">
    <div className="max-w-[80rem] mx-auto px-6 sm:px-10">
      <div className="max-w-[44rem]">
        <h1 className="font-sans font-extrabold text-[40px] sm:text-[60px] leading-[1.05] tracking-[-0.03em] text-balance">
          {doc.title}
        </h1>
        <p className="mt-5 text-[15px] text-[#737373]">Last updated {doc.updated}</p>

        <div className="mt-10 space-y-5 text-[18px] leading-[1.7] text-[#333]">
          {doc.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          {doc.sections.map((s) => (
            <section key={s.title} className="py-10 border-t border-black/[0.08]">
              <h2 className="font-sans font-bold text-[24px] leading-[1.25] tracking-[-0.01em]">
                {s.title}
              </h2>
              <div className="mt-5 space-y-4 text-[17px] leading-[1.7] text-[#555555]">
                {s.body.map((b, i) =>
                  typeof b === "string" ? (
                    <p key={i}>{b}</p>
                  ) : (
                    <ul key={i} className="list-disc pl-5 space-y-2.5 marker:text-[#10b981]">
                      {b.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            </section>
          ))}

          <section className="py-10 border-t border-black/[0.08]">
            <h2 className="font-sans font-bold text-[24px] leading-[1.25] tracking-[-0.01em]">
              {doc.contactHeading}
            </h2>
            <div className="mt-5 space-y-1.5 text-[17px] leading-[1.7] text-[#555555]">
              <p>Produce AI POS Inc., 3508 White Plains Rd, Bronx, NY, USA</p>
              <p>
                Email:{" "}
                <a href="mailto:support@produceai.co" className="link-draw text-[#059669] font-medium">
                  support@produceai.co
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:3472130687" className="link-draw text-[#0f0f0f] font-medium tabular-nums">
                  (347) 213-0687
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
);
