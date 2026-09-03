import { Shield, Lock, Eye } from 'lucide-react'

export function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8 space-y-10 text-zinc-300">
      <div className="border-b border-white/10 pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#4ade80]/30 bg-[#4ade80]/10 px-4 py-1.5 text-xs font-semibold text-[#4ade80]">
          <Shield className="h-3.5 w-3.5" />
          <span>Data Security & Compliance</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
          Privacy Policy
        </h1>
        <p className="text-xs text-zinc-400">
          Effective Date: January 1, 2026 · Last Updated: September 3, 2026
        </p>
      </div>

      <div className="space-y-8 text-xs leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-white">1. Information We Collect</h2>
          <p>
            Produce POS Inc. ("Company", "we", "us") respects the privacy of store owners, cashiers, and store customers. We collect information necessary to operate point-of-sale registers, process transactions, and deliver cloud backoffice analytics:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-zinc-400">
            <li><strong>Store Account Data:</strong> Business name, store address, phone number, email address, tax ID, and user account credentials.</li>
            <li><strong>Transaction & Register Logs:</strong> Sales records, item quantities, prices, weight measurements, payment tender methods, discount history, and cashier shift logs.</li>
            <li><strong>System & Hardware Diagnostics:</strong> Scale connectivity events, printer status, local SQLite sync status, and system performance logs.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-white">2. PCI-DSS Security & Credit Card Privacy</h2>
          <p>
            Produce POS does <strong>NOT</strong> store or retain raw credit card numbers, CVVs, or card magnetic stripe data on local register hard drives or cloud servers. All payment processing is transmitted directly through PCI-DSS Level 1 compliant payment terminals and gateways.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-white">3. How We Use Information</h2>
          <p>
            The collected data is used exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-zinc-400">
            <li>Render live transaction receipts and maintain store inventory records.</li>
            <li>Generate profit & loss dashboards, Z-reports, and audit activity trails.</li>
            <li>Synchronize pricebook changes and electronic shelf labels across registers.</li>
            <li>Provide technical customer support and hardware scale calibration assistance.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-white">4. Data Sharing & Third-Party Services</h2>
          <p>
            We do <strong>NOT</strong> sell, rent, or trade your store data, sales history, or customer information to third-party advertisers. Information is disclosed only to essential service providers (such as cloud hosting infrastructure and payment processing networks) required to operate the POS service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-white">5. Security & Encryption</h2>
          <p>
            We implement robust administrative, physical, and electronic security measures to safeguard data against unauthorized access, disclosure, alteration, or destruction. All cloud data transmissions utilize TLS 1.3 encryption protocols.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-white">6. Contact Privacy Team</h2>
          <p>
            If you have questions or concerns regarding our Privacy Policy or data handling practices, please contact us at <span className="text-[#4ade80]">privacy@producepos.com</span>.
          </p>
        </section>
      </div>
    </div>
  )
}
