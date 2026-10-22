import React, { useState } from 'react';

export const WorkstationCompare: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  const [tab, setTab] = useState<'front' | 'back'>('front');

  return (
    <section className="w-full py-16 sm:py-24 md:py-28 bg-[#fafaf9] dark:bg-[#09090b] border-b border-neutral-200 dark:border-neutral-800 transition-colors" id="workstations">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        
        {/* Header with Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="text-[11px] font-mono-telemetry uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold mb-2">
              HOW IT WORKS
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black dark:text-white uppercase">
              Register + Manager.
            </h2>
          </div>

          {/* Minimal Tab Switcher */}
          <div className="inline-flex p-1 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 self-start sm:self-auto">
            <button
              onClick={() => setTab('front')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold tracking-tight transition-all cursor-pointer ${
                tab === 'front' 
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-xs' 
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white'
              }`}
            >
              For Cashiers
            </button>
            <button
              onClick={() => setTab('back')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold tracking-tight transition-all cursor-pointer ${
                tab === 'back' 
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-xs' 
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white'
              }`}
            >
              For Store Owners
            </button>
          </div>
        </div>

        {/* Display Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-white dark:bg-[#151518] p-5 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-neutral-200/80 dark:border-neutral-800 shadow-sm">
          
          {/* Visual (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200 dark:border-neutral-800 aspect-[16/10] relative group">
            <img 
              src={tab === 'front' ? '/images/pos_terminal_hero.jpg' : '/images/backoffice_dashboard.jpg'} 
              alt={tab === 'front' ? 'Cashier Register' : 'Store Manager Portal'} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-emerald-400 font-mono-telemetry text-[10px] sm:text-[11px] font-bold">
              {tab === 'front' ? 'AT THE REGISTER: ZERO CHECKOUT DELAY' : 'ON YOUR PHONE: LIVE STORE SALES & PROFITS'}
            </div>
          </div>

          {/* Copy (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-5">
            {tab === 'front' ? (
              <>
                <div className="text-xs font-mono-telemetry uppercase text-emerald-700 dark:text-emerald-400 font-bold tracking-wider">
                  FAST AT CHECKOUT
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white tracking-tight uppercase leading-snug">
                  Cashiers learn in 5 minutes. Lines move fast.
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
                  Color photo buttons for fruits and greens. The scale subtracts the bag weight automatically. Food stamps and cash split on their own with one tap.
                </p>
                <div className="pt-2">
                  <button 
                    onClick={onOpenModal}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold tracking-tight hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all cursor-pointer shadow-xs"
                  >
                    See Register Demo &rarr;
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="text-xs font-mono-telemetry uppercase text-emerald-700 dark:text-emerald-400 font-bold tracking-wider">
                  CHECK IN FROM ANYWHERE
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white tracking-tight uppercase leading-snug">
                  Check store sales and profits from your phone.
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
                  See what is selling and your live profit margins in real time. Take a quick photo of delivery bills to change shelf prices on all registers in seconds.
                </p>
                <div className="pt-2">
                  <button 
                    onClick={onOpenModal}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold tracking-tight hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all cursor-pointer shadow-xs"
                  >
                    See Manager Demo &rarr;
                  </button>
                </div>
              </>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
