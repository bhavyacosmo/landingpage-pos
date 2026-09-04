import { ShieldCheck, FileText, Scale } from 'lucide-react'

export function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8 space-y-10 text-zinc-300">
      <div className="border-b border-white/10 pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#4ade80]/30 bg-[#4ade80]/10 px-4 py-1.5 text-xs font-semibold text-[#4ade80]">
          <FileText className="h-3.5 w-3.5" />
          <span>Legal Agreement</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
          Terms & Conditions
        </h1>
        <p className="text-xs text-zinc-400">
          Effective Date: January 1, 2026 · Last Updated: September 3, 2026
        </p>
      </div>

      <div className="space-y-8 text-xs leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-white">1. Acceptance of Terms</h2>
          <p>
            By licensing, installing, accessing, or using the Produce AI POS software application (the "Software"), hardware peripherals, or cloud services provided by Produce AI POS Inc. ("Company", "we", "us", or "our"), you ("Client", "Licensee", or "User") agree to be bound by these Terms and Conditions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-white">2. Software License Grant & Hardware Use</h2>
          <p>
            Subject to payment of applicable subscription or hardware licensing fees, Produce AI POS grants Client a non-exclusive, non-transferable, revocable license to execute the Produce AI POS application across authorized store registers and backoffice terminals.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-zinc-400">
            <li>Software may be installed exclusively on Client-owned or leased register devices.</li>
            <li>Client shall not reverse-engineer, decompile, or modify native scale drivers, IPC wrappers, or backend binaries.</li>
            <li>Weight scale calibration must comply with state and local Weights & Measures regulations.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-white">3. Payment Tenders, EBT & WIC Compliance</h2>
          <p>
            Produce AI POS provides multi-tender checkout capabilities, including Cash, Credit Card, Debit Card, EBT SNAP Food Stamps, state WIC benefits, and OTC benefit cards. Client is solely responsible for maintaining valid merchant processing accounts, EBT SNAP merchant authorizations, and compliance with state WIC department rules.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-white">4. Data Backup & Offline Operation</h2>
          <p>
            Produce AI POS features local SQLite database caching to ensure 100% register uptime during internet service interruptions. While the system automatically synchronizes stored transactions to the cloud upon reconnection, Client is advised to maintain internet connectivity for real-time cloud analytics and remote pricebook updates.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-white">5. Limitation of Liability</h2>
          <p>
            In no event shall Produce AI POS Inc. or its affiliates be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, inventory spoilage, or business interruption arising out of the use or inability to use the POS system. Total aggregate liability shall not exceed the subscription fees paid by Client during the preceding twelve (12) months.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-white">6. Contact Information</h2>
          <p>
            If you have questions regarding these Terms & Conditions, please email us at <span className="text-[#4ade80]">legal@produceaipos.com</span> or write to Produce AI POS Inc., New York, NY 10001, USA.
          </p>
        </section>
      </div>
    </div>
  )
}
