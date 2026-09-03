import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle2, Send, HelpCircle, ChevronDown } from 'lucide-react'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    storeName: '',
    storeType: 'Grocery Market',
    lanes: '1-3 Lanes',
    message: '',
  })

  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const faqs = [
    {
      q: 'Does Produce POS connect directly to hardware weight scales?',
      a: 'Yes! Produce POS includes native drivers for Zebra MP7000, Magellan, CAS, and standard serial/USB scale bridges. Weight is read automatically in 0.1 seconds at checkout.',
    },
    {
      q: 'What happens if our internet goes down during store hours?',
      a: 'Produce POS features 100% offline register resilience. Cashiers can continue ringing up sales, scanning barcodes, weighing items, and printing receipts without internet. When internet returns, sales automatically sync to the cloud.',
    },
    {
      q: 'Does Produce POS support EBT SNAP, WIC, and OTC payments?',
      a: 'Yes! Produce POS fully supports split tenders, including EBT SNAP Food Stamps, state WIC programs, OTC health benefit cards, credit, debit, and cash.',
    },
    {
      q: 'Can we access the Backoffice from home or on a mobile phone?',
      a: 'Yes! The standalone Web Backoffice allows store owners and managers to monitor live register sales, update prices, manage inventory, and view profit reports from any browser on phone, tablet, or laptop.',
    },
  ]

  return (
    <div className="space-y-20 pb-20 pt-8">
      {/* Page Title */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#4ade80]/30 bg-[#4ade80]/10 px-4 py-1.5 text-xs font-semibold text-[#4ade80]">
          <span>Get Started Today</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
          Book a Live <span className="gradient-accent-text">Store Demonstration</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
          See how Produce POS can streamline your checkout lanes and automate inventory management.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 space-y-6">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4ade80]/20 text-[#4ade80] mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">Demo Request Received!</h3>
                <p className="text-xs text-zinc-400 max-w-md mx-auto">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. One of our Produce POS retail specialists will contact you at <span className="text-[#4ade80]">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/10"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Reid"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-[#4ade80] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. marcus@jamaicanmarket.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-[#4ade80] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(718) 555-0100"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-[#4ade80] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">Store Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mommy Jamaican Market"
                      value={formData.storeName}
                      onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-[#4ade80] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">Store Type</label>
                    <select
                      value={formData.storeType}
                      onChange={(e) => setFormData({ ...formData, storeType: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#121215] px-4 py-3 text-xs text-white focus:border-[#4ade80] focus:outline-none"
                    >
                      <option>Grocery Market</option>
                      <option>Produce & Meat Market</option>
                      <option>Caribbean / Ethnic Supermarket</option>
                      <option>Convenience Store</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">Number of POS Register Lanes</label>
                    <select
                      value={formData.lanes}
                      onChange={(e) => setFormData({ ...formData, lanes: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#121215] px-4 py-3 text-xs text-white focus:border-[#4ade80] focus:outline-none"
                    >
                      <option>1-3 Lanes</option>
                      <option>4-8 Lanes</option>
                      <option>9+ Lanes (Multi-Store Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-2">Special Requirements / Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your store requirements, scales, or printers..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-[#4ade80] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#4ade80] py-4 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#3bce70] shadow-lg shadow-[#4ade80]/20"
                >
                  <span>Submit Demo Request</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Office info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 space-y-6">
              <h3 className="font-heading font-bold text-lg text-white">Direct Contact</h3>
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4ade80]/10 text-[#4ade80] shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Call Sales Support</div>
                    <div className="text-zinc-400 mt-0.5">(800) 555-PRODUCE</div>
                    <div className="text-[10px] text-zinc-500">Mon–Sat: 8:00 AM – 8:00 PM EST</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4ade80]/10 text-[#4ade80] shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email Us</div>
                    <div className="text-zinc-400 mt-0.5">sales@producepos.com</div>
                    <div className="text-[10px] text-zinc-500">24/7 Rapid Email Response</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4ade80]/10 text-[#4ade80] shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Headquarters</div>
                    <div className="text-zinc-400 mt-0.5">New York, NY 10001 · USA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hardware badge */}
            <div className="rounded-3xl border border-[#4ade80]/30 bg-[#4ade80]/5 p-6 text-xs space-y-2">
              <div className="font-bold text-[#4ade80] uppercase tracking-wider">Fast Hardware Onboarding</div>
              <p className="text-zinc-300 leading-relaxed">
                Our support team helps you set up Zebra weight scales, barcode printers, and dual customer screens in under 1 hour.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 space-y-8 pt-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-[#4ade80]">Client Questions</div>
          <h2 className="font-heading text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="flex w-full items-center justify-between p-6 text-left font-heading font-semibold text-sm text-white hover:text-[#4ade80] transition"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${openFaq === idx ? 'rotate-180 text-[#4ade80]' : 'text-zinc-500'}`} />
              </button>
              {openFaq === idx && (
                <div className="border-t border-white/5 px-6 pb-6 pt-2 text-xs leading-relaxed text-zinc-400">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
