import {
  Scale,
  Zap,
  Monitor,
  CreditCard,
  FileText,
  TrendingUp,
  Tag,
  ShieldCheck,
  Printer,
  Users,
  Clock,
  QrCode,
  Layers,
  ArrowRight,
  CheckCircle,
  Phone,
} from 'lucide-react'

interface PageProps {
  setCurrentPage: (page: 'home' | 'features' | 'terms' | 'privacy') => void
}

export function FeaturesPage({ setCurrentPage }: PageProps) {
  return (
    <div className="space-y-20 pb-20 pt-8">
      {/* Page Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#4ade80]/30 bg-[#4ade80]/10 px-4 py-1.5 text-xs font-semibold text-[#4ade80]">
          <span>Complete System Architecture</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
          Produce AI POS <span className="gradient-accent-text">Feature Deep-Dive</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
          Built from the ground up for high-traffic produce markets, grocery stores, and meat departments.
        </p>
      </div>

      {/* Feature Section 1: POS Register Lane */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 lg:p-12 space-y-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4ade80]">
                <Zap className="h-4 w-4" />
                <span>Front-Lane POS Register</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                Cashier Checkout & Hardware Integration
              </h2>
            </div>
            <a
              href="tel:3472130687"
              className="flex items-center gap-2 rounded-xl bg-[#4ade80] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#3bce70]"
            >
              <Phone className="h-4 w-4" />
              <span>Call (347) 213-0687</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: 'Zebra Scale Bridge',
                desc: 'Direct hardware connection to Zebra MP7000, Magellan, and CAS scales for instant weight calculation.',
              },
              {
                icon: Monitor,
                title: 'Dual Customer Display',
                desc: 'Render customer receipts, promotional banners, and totals on dedicated secondary display monitors.',
              },
              {
                icon: CreditCard,
                title: 'EBT, WIC & OTC Payment',
                desc: 'Seamlessly split tenders across Cash, Credit, Debit, EBT SNAP Food Stamps, WIC, and OTC cards.',
              },
              {
                icon: Printer,
                title: 'Thermal Printers & Drawers',
                desc: 'Direct raw thermal receipt printing and automated cash drawer kick commands via high-speed IPC.',
              },
              {
                icon: QrCode,
                title: 'Scale Station Printing',
                desc: 'Integrated deli and produce scale station barcode printing for pre-weighed packaging.',
              },
              {
                icon: ShieldCheck,
                title: '100% Offline Resilience',
                desc: 'POS lanes continue ringing sales even if internet drops. Local SQLite syncs when reconnected.',
              },
            ].map((f, i) => (
              <div key={i} className="space-y-3 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4ade80]/10 text-[#4ade80]">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-bold text-white text-base">{f.title}</h3>
                <p className="text-xs leading-relaxed text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section 2: Smart Pricebook & Inventory */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 lg:p-12 space-y-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4ade80]">
                <Tag className="h-4 w-4" />
                <span>Pricebook & Stock Management</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                Catalog, Margin Calculator & Shrinkage
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Tag,
                title: 'Smart Pricebook',
                desc: 'Manage item cost, retail price, margin percentages, and bulk department pricing rules with ease.',
              },
              {
                icon: Layers,
                title: 'Electronic Shelf Tags (ESL)',
                desc: 'Sync item price updates live to digital shelf labels across every aisle simultaneously.',
              },
              {
                icon: FileText,
                title: 'AI Vendor Invoice Reader',
                desc: 'AI extracts item cost, quantities, and UPC barcodes from scanned paper vendor invoices.',
              },
              {
                icon: TrendingUp,
                title: 'Shrinkage & Spoilage Log',
                desc: 'Track damaged produce, expired goods, and shrinkage loss with detailed reason codes.',
              },
              {
                icon: Clock,
                title: 'Low Stock Alerts',
                desc: 'Automated warnings when produce inventory falls below minimum safety stock levels.',
              },
              {
                icon: Users,
                title: 'Vendor Manager',
                desc: 'Store vendor profiles, purchase orders, account numbers, and payment terms in one place.',
              },
            ].map((f, i) => (
              <div key={i} className="space-y-3 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4ade80]/10 text-[#4ade80]">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-bold text-white text-base">{f.title}</h3>
                <p className="text-xs leading-relaxed text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section 3: Financial Analytics & Control */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 lg:p-12 space-y-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4ade80]">
                <TrendingUp className="h-4 w-4" />
                <span>Financials & Audit Control</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                Live Store Analytics, Z-Reports & RBAC
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Real-Time P&L Dashboard',
                desc: 'Track daily gross revenue, net profit, tax collected, cash overage/shortage, and sales trends.',
              },
              {
                icon: FileText,
                title: 'Z-Reports & End Shift',
                desc: 'Print comprehensive end-of-shift drawer counts, cashier reconciliations, and tender audit reports.',
              },
              {
                icon: Users,
                title: 'Employee Roles & RBAC',
                desc: 'Granular permissions control for cashiers, managers, inventory clerks, and accountants.',
              },
            ].map((f, i) => (
              <div key={i} className="space-y-3 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4ade80]/10 text-[#4ade80]">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-bold text-white text-base">{f.title}</h3>
                <p className="text-xs leading-relaxed text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
