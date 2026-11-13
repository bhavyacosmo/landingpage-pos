import React from "react";
import { LeadForm } from "./LeadForm";

const HIGHLIGHTS = [
  { title: "Scale sync", text: "Native scale bridge locks produce weight instantly with automatic tare." },
  { title: "Invoice reader", text: "Snap a paper invoice and costs, items and prices update for you." },
  { title: "Works offline", text: "Keep ringing sales when the internet drops. Everything syncs back later." },
  { title: "$0 upfront", text: "Scale, receipt printer and cash drawer, installed for free." },
];

export const ContactPage: React.FC = () => (
  <section className="bg-white pt-36 sm:pt-44 pb-32 sm:pb-44">
    <div className="max-w-[80rem] mx-auto px-6 sm:px-10">
      <h1 className="font-sans font-extrabold text-[40px] sm:text-[64px] leading-[1.05] tracking-[-0.03em] max-w-[44rem] text-balance">
        Get in touch. <span className="text-[#059669]">We’re here to help.</span>
      </h1>
      <p className="mt-6 text-[19px] leading-[1.6] text-[#555555] max-w-[36rem]">
        Tell us about your store and a specialist will get back to you to set
        up your free equipment.
      </p>

      <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <ul className="border-t border-black/[0.08]">
            {HIGHLIGHTS.map((h) => (
              <li key={h.title} className="py-6 border-b border-black/[0.08]">
                <h2 className="font-sans font-semibold text-[18px]">{h.title}</h2>
                <p className="mt-1.5 text-[16px] leading-[1.6] text-[#555555]">{h.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 space-y-1.5 text-[17px] leading-[1.7]">
            <h2 className="font-sans font-semibold text-[18px] mb-3">Reach us directly</h2>
            <p>
              <a href="tel:3472130687" className="link-draw tabular-nums">(347) 213-0687</a>
              <span className="text-[#737373]"> · support line open 24/7</span>
            </p>
            <p>
              <a href="mailto:support@produceai.co" className="link-draw">support@produceai.co</a>
            </p>
            <p className="text-[#555555]">3508 White Plains Rd, Bronx, NY</p>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 rounded-[24px] bg-[#f4f3f1] p-7 sm:p-10">
          <LeadForm context="Contact page" />
        </div>
      </div>
    </div>
  </section>
);
