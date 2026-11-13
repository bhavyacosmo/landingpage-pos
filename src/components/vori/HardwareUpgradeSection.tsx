import React from "react";

interface HardwareUpgradeSectionProps {
  onBookDemo: (context?: string) => void;
}

const FREE_BASIC_HARDWARE = [
  {
    title: "POS scale",
    description: "Touchscreen terminal with an NTEP-certified scanner scale.",
    image: "/images/bioptic_scale.jpg",
  },
  {
    title: "Thermal receipt printer",
    description: "Jam-free printing for receipts and shift Z-reports.",
    image: "/images/pinpad_printer.jpg",
  },
  {
    title: "Cash drawer",
    description: "Heavy-duty steel, opens automatically on every cash sale.",
    image: "/images/hardware_suite.jpg",
  },
];

const OPTIONAL_HARDWARE = [
  {
    title: "Customer display & PIN pad",
    description: "Shopper-facing screen and card reader for EBT, WIC, OTC, Apple Pay and chip.",
  },
  {
    title: "Handheld scanner",
    description: "Walk the aisles, audit coolers and scan incoming deliveries.",
  },
  {
    title: "Electronic shelf tags",
    description: "Shelf prices update wirelessly when you change them in the back office.",
  },
];

const SYSTEM_SPECS = [
  {
    label: "Scale bridge",
    value: "Native drivers for Zebra MP7000, Magellan, CAS and serial/USB scales",
  },
  {
    label: "Scale certification",
    value: "NTEP Class III, legal for trade in all 50 states",
  },
  {
    label: "Payments",
    value: "EBT SNAP, WIC, OTC cards, Apple Pay, chip, debit and cash",
  },
  {
    label: "Invoice scanner",
    value: "Reads vendor costs, quantities and UPC barcodes from paper bills",
  },
  {
    label: "Offline mode",
    value: "Local SQLite engine keeps lanes ringing if the internet drops",
  },
  {
    label: "Back office",
    value: "Live sales, pricebook and reports on phone or laptop",
  },
];

export const HardwareUpgradeSection: React.FC<HardwareUpgradeSectionProps> = ({
  onBookDemo,
}) => (
  <>
    <section
      id="hardware"
      data-nav-theme="dark"
      className="bg-[#0f0f0f] text-white py-32 sm:py-44"
    >
      <div className="max-w-[80rem] mx-auto px-6 sm:px-10">
        <h2 className="font-sans font-extrabold text-[36px] sm:text-[52px] leading-[1.1] tracking-[-0.025em] max-w-[40rem] text-balance">
          Free hardware to start.{" "}
          <span className="text-white/55">More when you need it.</span>
        </h2>
        <p className="mt-6 text-[18px] leading-[1.6] text-white/70 max-w-[32rem]">
          The core checkout setup is delivered and installed at your counter for
          $0 upfront.
        </p>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
          {FREE_BASIC_HARDWARE.map((item) => (
            <div key={item.title} className="group">
              <div className="overflow-hidden rounded-[18px] bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-6 font-sans font-bold text-[21px] leading-[1.25]">
                {item.title}
              </h3>
              <p className="mt-2 text-[16px] leading-[1.6] text-white/65">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 sm:mt-32 pt-10 border-t border-white/15">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-10">
            <h3 className="font-sans font-bold text-[22px]">Available to buy</h3>
            <button
              type="button"
              onClick={() => onBookDemo("Hardware Pricing Inquiry")}
              className="link-draw self-start text-[16px] text-[#34d399]"
            >
              Request pricing
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
            {OPTIONAL_HARDWARE.map((item) => (
              <div key={item.title}>
                <h4 className="font-sans font-semibold text-[18px]">
                  {item.title}
                </h4>
                <p className="mt-2 text-[15.5px] leading-[1.6] text-white/60 max-w-[22rem]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section
      id="specs"
      className="bg-white py-32 sm:py-44 border-b border-black/[0.06]"
    >
      <div className="max-w-[80rem] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <h2 className="lg:col-span-4 font-sans font-extrabold text-[36px] sm:text-[48px] leading-[1.1] tracking-[-0.025em]">
          The spec sheet.
        </h2>
        <dl className="lg:col-span-8 border-t border-black/[0.08]">
          {SYSTEM_SPECS.map((spec) => (
            <div
              key={spec.label}
              className="py-6 border-b border-black/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-6"
            >
              <dt className="font-sans font-semibold text-[16px]">
                {spec.label}
              </dt>
              <dd className="sm:col-span-2 text-[16px] leading-[1.55] text-[#555555]">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  </>
);
