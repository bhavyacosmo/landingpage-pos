import { ShoppingBag, Sparkles, Menu, X, Phone } from 'lucide-react'
import { useState } from 'react'

interface NavbarProps {
  currentPage: 'home' | 'features' | 'terms' | 'privacy'
  setCurrentPage: (page: 'home' | 'features' | 'terms' | 'privacy') => void
}

export function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems: Array<{ id: 'home' | 'features' | 'terms' | 'privacy'; label: string }> = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
  ]

  const handleNavClick = (id: 'home' | 'features' | 'terms' | 'privacy') => {
    setCurrentPage(id)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#09090b]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left transition hover:opacity-90"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#4ade80] to-[#16a34a] text-black shadow-lg shadow-[#4ade80]/20">
            <ShoppingBag className="h-6 w-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="font-heading font-extrabold text-lg tracking-wider text-white flex items-center gap-1.5">
              PRODUCE <span className="text-[#4ade80]">POS</span>
            </div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-zinc-400">
              Grocery & Retail Systems
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition ${
                currentPage === item.id
                  ? 'bg-[#4ade80] text-black shadow-md shadow-[#4ade80]/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Call Support CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:3472130687"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[#4ade80] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#3bce70] shadow-lg shadow-[#4ade80]/20"
          >
            <Phone className="h-4 w-4" />
            <span>Call (347) 213-0687</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-white/10 bg-[#09090b] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                  currentPage === item.id
                    ? 'bg-[#4ade80] text-black font-bold'
                    : 'text-zinc-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:3472130687"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#4ade80] py-3 text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-[#4ade80]/20"
            >
              <Phone className="h-4 w-4" />
              <span>Call (347) 213-0687</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
