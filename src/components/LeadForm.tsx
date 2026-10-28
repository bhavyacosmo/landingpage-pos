import React, { useState } from 'react';
import { useFormspark } from '@formspark/use-formspark';

const FORMSPARK_FORM_ID = 'kJSJ7GLAX';

// Free hardware request form, shared by the popup modal and the Contact page
export const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submit, submitting] = useFormspark({ formId: FORMSPARK_FORM_ID });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(false);

    const equipment = [
      formData.dualScreen && 'Dual Touchscreen Register',
      formData.biopticScale && 'Fast Scanner Scale',
      formData.handheldPda && 'Handheld Store Scanner',
      formData.eslKit && 'Digital Shelf Price Tags'
    ].filter(Boolean);

    try {
      await submit({
        name: formData.name,
        storeName: formData.storeName,
        email: formData.email,
        phone: formData.phone,
        registers: formData.lanes,
        cityAndZip: formData.address,
        equipment: equipment.length ? equipment.join(', ') : 'None selected'
      });
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    }
  };

  return (
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
  
      {submitError && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-300 dark:border-red-800 text-xs text-red-900 dark:text-red-200 font-medium">
          Something went wrong sending your request. Please try again, or call us at (347) 213-0687.
        </div>
      )}
  
      <button
        type="submit"
        disabled={submitting || submitted}
        className="w-full py-3.5 sm:py-4 rounded-full bg-black dark:bg-emerald-500 text-white dark:text-black text-xs sm:text-sm font-black uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-emerald-400 transition-all cursor-pointer shadow-lg mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending…' : <>Claim 100% Free Equipment &rarr;</>}
      </button>
    </form>
  );
};
