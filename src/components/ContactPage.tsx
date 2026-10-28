import React, { useEffect } from 'react';
import { LeadForm } from './LeadForm';

const HIGHLIGHTS = [
  { tag: 'SCALE SYNC', title: '0.1s Zebra Scale Weighing', text: 'Native scale bridge locks produce weight instantly with automatic tare.' },
  { tag: 'AI SCANNER', title: 'AI Vendor Invoice Digitizer', text: 'Snap a paper invoice and costs, items and prices update for you.' },
  { tag: 'OFFLINE', title: '100% Offline Resilience', text: 'Keep ringing sales when the internet drops. Everything syncs back later.' },
  { tag: 'FREE HARDWARE', title: '$0 Upfront Equipment', text: 'Register, scanner scale, handheld and shelf tags, installed for free.' }
];

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us | Produce AI POS';
  }, []);

  return (
    <section className="w-full py-16 sm:py-24 md:py-28 bg-[#fafaf9] dark:bg-[#090b0e] border-b border-neutral-200 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">

        {/* Page Header */}
        <div className="reveal-on-scroll mb-10 sm:mb-14 text-center max-w-2xl mx-auto">
          <div className="text-[11px] font-mono-telemetry uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold mb-2">
            CONTACT US
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black dark:text-white uppercase leading-tight">
            Let's Talk. <br />
            <span className="text-emerald-600 dark:text-emerald-400">Get Free Hardware.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
            Produce AI POS is the point-of-sale and backoffice system built for supermarkets and fresh produce markets. Tell us about your store and a specialist will reach out to set up your free equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">

          {/* About & Contact Details */}
          <div className="flex flex-col gap-3.5">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="reveal-on-scroll rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-[#121418]/80 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl p-5 sm:p-6"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono-telemetry uppercase text-emerald-700 dark:text-emerald-400 font-bold">
                    {item.tag}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-black dark:text-white tracking-tight">
                    {item.title}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}

            <div className="reveal-on-scroll rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-[#121418]/80 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl p-5 sm:p-6">
              <div className="text-[10px] font-mono-telemetry uppercase text-emerald-700 dark:text-emerald-400 font-bold mb-3">
                Produce POS Direct
              </div>
              <ul className="space-y-2 font-mono-telemetry text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400">
                <li>
                  <a href="tel:3472130687" className="text-black dark:text-white font-bold text-sm hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    (347) 213-0687
                  </a>
                </li>
                <li>
                  <a href="mailto:support@produceai.co" className="hover:text-black dark:hover:text-white transition-colors">
                    support@produceai.co
                  </a>
                </li>
                <li>3508 White Plains Rd, Bronx, NY</li>
                <li className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">24/7 Produce Support Line</li>
              </ul>
            </div>
          </div>

          {/* Free Hardware Request Form (same form as the popup) */}
          <div className="reveal-on-scroll w-full rounded-[2rem] sm:rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 p-5 sm:p-9 shadow-2xl flex flex-col gap-5 bg-white dark:bg-[#121216] text-black dark:text-white">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-neutral-900 dark:bg-neutral-800 text-emerald-400 text-[10px] font-mono-telemetry uppercase tracking-wider mb-2">
                12 Free Packages Remaining
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-black dark:text-white tracking-tight uppercase">
                Get Free Hardware
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-1">
                Zero upfront equipment cost. Delivered, plugged in, and calibrated in your store for free.
              </p>
            </div>
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  );
};
