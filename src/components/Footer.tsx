import { ShoppingBag, Shield, Mail, Phone, MapPin } from 'lucide-react'

interface FooterProps {
  setCurrentPage: (page: 'home' | 'features' | 'contact' | 'terms' | 'privacy') => void
}

export function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (page: 'home' | 'features' | 'contact' | 'terms' | 'privacy') => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-[#060608] text-zinc-400 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4ade80] text-black font-bold">
                <ShoppingBag className="h-5 w-5 stroke-[2.5]" />
              </div>
              <div className="font-heading font-extrabold text-lg text-white tracking-wider">
                PRODUCE <span className="text-[#4ade80]">POS</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              The next-generation Point of Sale & Backoffice Intelligence system built exclusively for produce markets, grocery stores, and retail markets.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#4ade80] font-medium">
              <Shield className="h-4 w-4" />
              <span>PCI-DSS & EBT / WIC Compliant System</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-heading font-semibold text-xs uppercase tracking-widest text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-[#4ade80] transition">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('features')} className="hover:text-[#4ade80] transition">
                  Full Feature Deep-Dive
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-[#4ade80] transition">
                  Request a Demo
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('terms')} className="hover:text-[#4ade80] transition">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('privacy')} className="hover:text-[#4ade80] transition">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Hardware & Compatibility */}
          <div className="space-y-3">
            <div className="font-heading font-semibold text-xs uppercase tracking-widest text-white">
              Hardware Supported
            </div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>• Zebra CoreScanner & Scale Bridges</li>
              <li>• Dual-Screen Customer Displays</li>
              <li>• Electronic Shelf Labels (ESL)</li>
              <li>• Thermal Receipt & Label Printers</li>
              <li>• Automated Cash Drawer Kickers</li>
              <li>• Multi-Register Offline Sync</li>
            </ul>
          </div>

          {/* Contact Support */}
          <div className="space-y-3">
            <div className="font-heading font-semibold text-xs uppercase tracking-widest text-white">
              Sales & Support
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#4ade80]" />
                <a href="tel:3472130687" className="hover:text-[#4ade80] transition">(347) 213-0687</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#4ade80]" />
                <a href="mailto:Admin@producepos.app" className="hover:text-[#4ade80] transition">Admin@producepos.app</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#4ade80] shrink-0 mt-0.5" />
                <span>3508 White Plains Road, Bronx, NY 10467</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div>
            © {new Date().getFullYear()} Produce POS Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNavClick('terms')} className="hover:text-zinc-300">
              Terms & Conditions
            </button>
            <button onClick={() => handleNavClick('privacy')} className="hover:text-zinc-300">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
