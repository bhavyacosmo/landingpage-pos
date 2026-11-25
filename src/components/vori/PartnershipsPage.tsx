import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageTabs } from "./LegalPage";

const FIELD =
  "w-full px-4 py-3 rounded-xl bg-white border border-[#07080a]/20 focus:border-[#07080a] focus:outline-none text-[15px] placeholder:text-[#07080a]/35";
const LABEL = "block text-[13.5px] font-medium text-[#07080a]/70 mb-1.5";

const STEPS = [
  ["You have the terminals", "Your merchants already run on your payment terminals."],
  ["We supply the software", "Produce Ai POS runs on those terminals, with checkout, inventory and back office."],
  ["You keep selling", "You keep your terminal business and earn commissions."],
];

export const PartnershipsPage: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-paper text-ink pt-28 sm:pt-36 pb-24 sm:pb-36">
      <div className="max-w-[80rem] mx-auto px-5 sm:px-10">
        <PageTabs current="partnerships" />

        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          <div className="lg:col-span-6">
            <h1 className="text-[44px] sm:text-[64px] font-extrabold tracking-[-0.035em] leading-[1.02] text-balance">
              Partner with Produce Ai.
            </h1>
            <p className="mt-8 text-[19px] leading-[1.55] text-ink/70 max-w-[32rem]">
              For ISOs and ISPs that sell payment terminals but have no software to run on them.
            </p>

            <ol className="mt-14 border-t border-ink/15">
              {STEPS.map(([t, d], i) => (
                <li key={t} className="grid grid-cols-[3rem_1fr] gap-4 py-6 border-b border-ink/15">
                  <span className="eyebrow text-ink/40 pt-[6px]">0{i + 1}</span>
                  <div>
                    <h2 className="text-[22px] font-bold tracking-tight">{t}</h2>
                    <p className="mt-1.5 text-[16px] leading-[1.55] text-ink/60 max-w-[28rem]">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-6 rounded-[28px] bg-white p-7 sm:p-12 border border-ink/[0.07]">
            {sent ? (
              <div className="py-6 text-center">
                <div className="w-14 h-14 rounded-full bg-[#ecfdf5] text-[#14a50f] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-extrabold text-[25px]">Request sent</h3>
                <p className="mt-2.5 text-[15px] text-[#555] leading-relaxed">
                  Thanks, <strong className="text-ink">{name}</strong>. We will be in touch.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-extrabold text-[28px] sm:text-[32px] leading-[1.1] tracking-[-0.025em]">Apply to partner</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="mt-8 space-y-5"
                >
                  <p className="text-[13px] text-[#07080a]/55">
                    <span className="text-[#d92d20]">*</span> Required
                  </p>
                  <div>
                    <label className={LABEL} htmlFor="pn-name">Name<span className="text-[#d92d20] ml-0.5" aria-hidden="true">*</span></label>
                    <input id="pn-name" required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="e.g. Maria Lopez" className={FIELD} />
                  </div>
                  <div>
                    <label className={LABEL} htmlFor="pn-phone">Phone number<span className="text-[#d92d20] ml-0.5" aria-hidden="true">*</span></label>
                    <input id="pn-phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" placeholder="e.g. +1 (347) 555-0123" className={FIELD} />
                  </div>
                  <div>
                    <label className={LABEL} htmlFor="pn-email">Email<span className="text-[#d92d20] ml-0.5" aria-hidden="true">*</span></label>
                    <input id="pn-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" placeholder="e.g. maria@example.com" className={FIELD} />
                  </div>
                  <button type="submit" className="btn btn-neon h-14 px-8 text-[16px] w-full">
                    Send
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
