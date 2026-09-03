import {
  ShoppingBag,
  Zap,
  Scale,
  Monitor,
  FileText,
  TrendingUp,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BarChart3,
  Cpu,
  RefreshCw,
  Users,
} from 'lucide-react'

interface PageProps {
  setCurrentPage: (page: 'home' | 'features' | 'contact' | 'terms' | 'privacy') => void
}

export function HomePage({ setCurrentPage }: PageProps) {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 lg:pt-20">
        <div className="absolute top-1/4 left-1/2 -z-10 h-[450px] w-[600px] -translate-x-1/2 rounded-full bg-[#4ade80]/15 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4ade80]/30 bg-[#4ade80]/10 px-4 py-1.5 text-xs font-semibold text-[#4ade80] shadow-inner mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Built Specifically for Produce & Grocery Stores</span>
          </div>

          {/* Main Title */}
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight">
            The Fastest POS & Backoffice System for <span className="gradient-accent-text">Grocery Markets</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Eliminate cashier checkout queues, automate weight scale readings, sync electronic shelf tags, and control inventory with precision intelligence.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage('contact')}
              className="flex items-center gap-2 rounded-xl bg-[#4ade80] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-[#3bce70] shadow-xl shadow-[#4ade80]/20"
            >
              <span>Schedule Free Store Demo</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setCurrentPage('features')}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <span>Explore Features</span>
            </button>
          </div>

          {/* Live Interface Preview Mockup */}
          <div className="mt-16 relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#0d0d10] p-4 shadow-2xl shadow-black/80">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 px-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-zinc-500">Produce POS - Live Lane Register v1.0</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-[#4ade80]">
                <div className="h-2 w-2 rounded-full bg-[#4ade80] animate-pulse" />
                <span>Zebra Scale Connected: 2.45 lb</span>
              </div>
            </div>

            {/* Dashboard Mock Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-left">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 space-y-2">
                <div className="text-xs text-zinc-400 font-medium">Jamaican Yellow Yam</div>
                <div className="text-2xl font-bold font-heading text-white">$2.99 / lb</div>
                <div className="text-xs text-[#4ade80]">2.45 lb × $2.99 = $7.33</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 space-y-2">
                <div className="text-xs text-zinc-400 font-medium">Daily Register Sales</div>
                <div className="text-2xl font-bold font-heading text-white">$4,850.40</div>
                <div className="text-xs text-zinc-400">142 Transactions Today</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 space-y-2">
                <div className="text-xs text-zinc-400 font-medium">Inventory Health</div>
                <div className="text-2xl font-bold font-heading text-[#4ade80]">99.8%</div>
                <div className="text-xs text-zinc-400">Zero Stock Outages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#4ade80]">Engineered For High-Speed Markets</div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Everything Your Grocery Store Needs In One System
          </h2>
          <p className="text-sm text-zinc-400">
            From lightning-fast weight scale checkout to automated AI invoice scanning and shelf label printing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Scale,
              title: 'Zebra Scale & Scanner Sync',
              desc: 'Seamlessly reads weights directly from integrated scale stations with 0.1s hardware speed.',
            },
            {
              icon: Zap,
              title: 'Sub-3 Second Checkout',
              desc: 'Optimized cashier interface reduces item lookup time and keeps register queues moving fast.',
            },
            {
              icon: Monitor,
              title: 'Dual Customer Display',
              desc: 'Show real-time item prices, totals, promotions, and customer ads on dedicated second monitors.',
            },
            {
              icon: CreditCard,
              title: 'EBT, WIC & Split Tenders',
              desc: 'Supports EBT Food Stamps, WIC eligibility auto-checks, OTC, credit, debit, and cash payouts.',
            },
            {
              icon: FileText,
              title: 'AI Vendor Invoice Scanner',
              desc: 'Automatically reads paper vendor invoices, updates pricebook costs, and adjusts inventory levels.',
            },
            {
              icon: TrendingUp,
              title: 'Live Backoffice Analytics',
              desc: 'Real-time profit & loss, Z-reports, department sales, shrinkage logs, and employee timeclock.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-[#4ade80]/50 hover:bg-white/[0.04]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4ade80]/10 text-[#4ade80] transition group-hover:scale-110">
                <item.icon className="h-6 w-6 stroke-[2.2]" />
              </div>
              <h3 className="mt-6 font-heading font-bold text-lg text-white group-hover:text-[#4ade80] transition">
                {item.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics Stats */}
      <section className="border-y border-white/10 bg-white/[0.01] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading text-4xl font-extrabold text-[#4ade80] sm:text-5xl">&lt; 3.0s</div>
              <div className="mt-2 text-xs font-medium text-zinc-400 uppercase tracking-wider">Average Checkout Time</div>
            </div>
            <div>
              <div className="font-heading text-4xl font-extrabold text-[#4ade80] sm:text-5xl">99.9%</div>
              <div className="mt-2 text-xs font-medium text-zinc-400 uppercase tracking-wider">Inventory Precision</div>
            </div>
            <div>
              <div className="font-heading text-4xl font-extrabold text-[#4ade80] sm:text-5xl">100%</div>
              <div className="mt-2 text-xs font-medium text-zinc-400 uppercase tracking-wider">Offline POS Resilience</div>
            </div>
            <div>
              <div className="font-heading text-4xl font-extrabold text-[#4ade80] sm:text-5xl">15%</div>
              <div className="mt-2 text-xs font-medium text-zinc-400 uppercase tracking-wider">Labor Overhead Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#4ade80]/30 bg-gradient-to-br from-[#4ade80]/15 via-[#0d0d10] to-[#09090b] p-10 lg:p-16 text-center shadow-2xl">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
            Ready to Upgrade Your Store POS?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            Book a personalized demonstration with our grocery POS specialists and experience the difference.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setCurrentPage('contact')}
              className="flex items-center gap-2 rounded-xl bg-[#4ade80] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-[#3bce70] shadow-xl shadow-[#4ade80]/20"
            >
              <span>Book Live Demo</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
