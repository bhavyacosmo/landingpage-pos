import React, { useState } from "react";
import { CheckCircle2, PhoneCall } from "lucide-react";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "kJSJ7GLAX";

interface LeadFormProps {
  context?: string;
  onDone?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ context, onDone }) => {
  const [name, setName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [lanes, setLanes] = useState("1 to 2 Registers");
  const [address, setAddress] = useState("");
  const [addHandheld, setAddHandheld] = useState(false);
  const [addEsl, setAddEsl] = useState(false);
  const [addDualDisplay, setAddDualDisplay] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submit, submitting] = useFormspark({ formId: FORMSPARK_FORM_ID });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(false);

    const extras = [
      addHandheld && "Handheld Store Scanner",
      addEsl && "Digital Shelf Price Tags (ESL)",
      addDualDisplay && "Dual Customer Display & Smart PIN Pad",
    ].filter(Boolean);

    try {
      await submit({
        name,
        storeName,
        email,
        phone,
        registers: lanes,
        cityAndZip: address,
        extras: extras.length ? extras.join(", ") : "None selected",
        source: context ?? "Website",
      });
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    }
  };

  if (submitted) {
    return (
          <div className="py-6 text-center">
        <div className="w-14 h-14 rounded-full bg-[#ecfdf5] text-[#10b981] flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-sans font-extrabold text-[25px] text-[#0f0f0f]">
          Thank you
        </h3>
        <p className="mt-2.5 text-[14.5px] text-[#555555] leading-relaxed">
          Thank you, <strong className="text-[#0f0f0f]">{name}</strong>. A
          scale technician will contact you regarding{" "}
          <strong className="text-[#0f0f0f]">{storeName}</strong> ({lanes})
          to schedule your free basic hardware setup.
        </p>
        <button
          type="button"
          onClick={onDone}
          className="mt-6 px-7 py-3 rounded-full bg-[#0f0f0f] text-white text-[14px] font-bold"
        >
          Done
        </button>
      </div>
    );
  }

  return (
    <>
            <h3 className="font-sans font-extrabold text-[28px] sm:text-[32px] leading-[1.1] tracking-[-0.025em] text-[#0f0f0f]">
        Get free hardware
      </h3>
      <p className="mt-3 text-[15.5px] leading-[1.55] text-[#555555]">
        Free POS scale, receipt printer and cash drawer, installed at your counter.
        {context ? (
          <span className="hidden">
            {context}
          </span>
        ) : null}
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[14px] font-medium text-[#404040] mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Marcus Sterling"
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#e0e0e0] focus:border-[#10b981] focus:outline-none text-[15px]"
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#404040] mb-1.5">
              Store Name *
            </label>
            <input
              type="text"
              required
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              placeholder="Bronx Fresh Produce Market"
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#e0e0e0] focus:border-[#10b981] focus:outline-none text-[15px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[14px] font-medium text-[#404040] mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="marcus@store.com"
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#e0e0e0] focus:border-[#10b981] focus:outline-none text-[15px]"
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#404040] mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(347) 555-0192"
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#e0e0e0] focus:border-[#10b981] focus:outline-none text-[15px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[14px] font-medium text-[#404040] mb-1.5">
              How Many Registers?
            </label>
            <select
              value={lanes}
              onChange={(e) => setLanes(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#e0e0e0] focus:border-[#10b981] focus:outline-none text-[15px]"
            >
              <option value="1 to 2 Registers">1 to 2 Registers</option>
              <option value="3 to 5 Registers">3 to 5 Registers</option>
              <option value="6+ Registers">6+ Registers</option>
            </select>
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#404040] mb-1.5">
              Store City &amp; Zip *
            </label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Bronx, NY 10458"
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#e0e0e0] focus:border-[#10b981] focus:outline-none text-[15px]"
            />
          </div>
        </div>

        {/* Optional Hardware Available to Purchase */}
        <div className="pt-1 flex flex-col gap-3">
          <span className="text-[14px] font-medium text-[#404040]">
            Interested in extras? (sold separately)
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[#262626] text-[15px]">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={addHandheld}
                onChange={(e) => setAddHandheld(e.target.checked)}
                className="rounded accent-[#10b981] w-4 h-4"
              />
              <span>Handheld Store Scanner</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={addEsl}
                onChange={(e) => setAddEsl(e.target.checked)}
                className="rounded accent-[#10b981] w-4 h-4"
              />
              <span>Digital Shelf Price Tags (ESL)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer sm:col-span-2">
              <input
                type="checkbox"
                checked={addDualDisplay}
                onChange={(e) => setAddDualDisplay(e.target.checked)}
                className="rounded accent-[#10b981] w-4 h-4"
              />
              <span>Dual Customer Display &amp; Smart PIN Pad</span>
            </label>
          </div>
        </div>

        {submitError && (
          <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-[14px] text-red-800">
            Something went wrong sending your request. Please try again, or call us at (347) 213-0687.
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 rounded-full bg-[#10b981] hover:bg-[#059669] active:scale-[0.99] text-white text-[16px] font-semibold transition-all mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending…" : "Send request"}
        </button>

        <div className="pt-1 flex items-center justify-center gap-2 text-[14px] text-[#666666]">
          <PhoneCall className="w-3.5 h-3.5 text-[#10b981]" />
          <span>
            Questions? Call{" "}
            <a
              href="tel:3472130687"
              className="font-medium text-[#0f0f0f] underline underline-offset-4"
            >
              (347) 213-0687
            </a>
          </span>
        </div>
      </form>
    </>
  );
};
