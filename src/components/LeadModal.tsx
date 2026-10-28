import React from 'react';
import { LeadForm } from './LeadForm';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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

        <LeadForm />

      </div>
    </div>
  );
};
