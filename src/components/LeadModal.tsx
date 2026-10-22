import React, { useState } from 'react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    storeName: '',
    email: '',
    phone: '',
    currentPos: 'ncr',
    lanes: '1-2',
    address: '',
    dualScreen: true,
    biopticScale: true,
    handheldPda: true,
    eslKit: true
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div className="relative w-full max-w-xl rounded-[2rem] sm:rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 p-5 sm:p-9 shadow-2xl flex flex-col gap-5 max-h-[94vh] overflow-y-auto bg-white dark:bg-[#121216] text-black dark:text-white">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-neutral-900 dark:bg-neutral-800 text-emerald-400 text-[10px] font-mono-telemetry uppercase tracking-wider mb-2">
              12 Free Packages Remaining
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white tracking-tight uppercase">
              Get Free Hardware
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-1">
              Zero upfront equipment cost. Delivered, plugged in, and calibrated in your store for free.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {/* Modal Form */}
        <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300 uppercase">Your Name *</label>
              <input 
                required 
                type="text" 
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-11 px-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-[#1a1a20] text-xs font-medium focus:border-black dark:focus:border-white focus:outline-none" 
                placeholder="Marcus Sterling" 
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300 uppercase">Store Name *</label>
              <input 
                required 
                type="text" 
                value={formData.storeName}
                onChange={e => setFormData({ ...formData, storeName: e.target.value })}
                className="w-full h-11 px-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-[#1a1a20] text-xs font-medium focus:border-black dark:focus:border-white focus:outline-none" 
                placeholder="Bronx Fresh Produce Market" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300 uppercase">Email Address *</label>
              <input 
                required 
                type="email" 
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-11 px-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-[#1a1a20] text-xs font-medium focus:border-black dark:focus:border-white focus:outline-none" 
                placeholder="marcus@store.com" 
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300 uppercase">Phone Number *</label>
              <input 
                required 
                type="tel" 
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-11 px-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-[#1a1a20] text-xs font-medium focus:border-black dark:focus:border-white focus:outline-none" 
                placeholder="(347) 555-0192" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300 uppercase">How Many Registers?</label>
              <select 
                value={formData.lanes}
                onChange={e => setFormData({ ...formData, lanes: e.target.value })}
                className="w-full h-11 px-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-[#1a1a20] text-xs font-medium focus:border-black dark:focus:border-white focus:outline-none"
              >
                <option value="1-2">1 to 2 Registers</option>
                <option value="3-5">3 to 5 Registers</option>
                <option value="6+">6+ Registers</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300 uppercase">Store City &amp; Zip *</label>
              <input 
                required 
                type="text" 
                value={formData.address}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
                className="w-full h-11 px-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-[#1a1a20] text-xs font-medium focus:border-black dark:focus:border-white focus:outline-none" 
                placeholder="Bronx, NY 10458" 
              />
            </div>
          </div>

          {/* Simple Hardware List */}
          <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-[#1a1a20] border border-neutral-200 dark:border-neutral-800 text-xs flex flex-col gap-2">
            <span className="text-[10px] font-mono-telemetry font-bold text-neutral-500 dark:text-neutral-400 uppercase">
              Free Equipment Included ($0 Due):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-medium text-neutral-800 dark:text-neutral-200 text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={formData.dualScreen} 
                  onChange={e => setFormData({ ...formData, dualScreen: e.target.checked })}
                  className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4" 
                />
                <span>Dual Touchscreen Register</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={formData.biopticScale} 
                  onChange={e => setFormData({ ...formData, biopticScale: e.target.checked })}
                  className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4" 
                />
                <span>Fast Scanner Scale</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={formData.handheldPda} 
                  onChange={e => setFormData({ ...formData, handheldPda: e.target.checked })}
                  className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4" 
                />
                <span>Handheld Store Scanner</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={formData.eslKit} 
                  onChange={e => setFormData({ ...formData, eslKit: e.target.checked })}
                  className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4" 
                />
                <span>Digital Shelf Price Tags</span>
              </label>
            </div>
          </div>

          {submitted && (
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-xs text-emerald-950 dark:text-emerald-200 font-medium">
              &check; Request received! A scale technician will call you within 15 minutes to schedule your free setup.
            </div>
          )}

          <button 
            type="submit" 
            className="w-full py-3.5 sm:py-4 rounded-full bg-black dark:bg-emerald-500 text-white dark:text-black text-xs sm:text-sm font-black uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-emerald-400 transition-all cursor-pointer shadow-lg mt-1"
          >
            Claim 100% Free Equipment &rarr;
          </button>
        </form>

      </div>
    </div>
  );
};
