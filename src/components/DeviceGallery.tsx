import React, { useState } from 'react';

interface DeviceItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  spec: string;
  image: string;
  val: string;
}

const DEVICES: DeviceItem[] = [
  {
    id: 'terminal',
    category: 'CHECKOUT',
    title: 'Dual Touchscreens',
    tagline: 'Two big screens. One for the cashier to ring, one for the shopper to see prices.',
    spec: 'Water-Resistant &bull; Clear 1080p Screen',
    image: '/images/pos_terminal_hero.jpg',
    val: '$1,450 Value &bull; 100% Free'
  },
  {
    id: 'scale',
    category: 'SCALE',
    title: 'Built-In Scanner Scale',
    tagline: 'Flat glass scale that scans barcodes and weighs produce in under a second.',
    spec: 'Heavy-Duty Glass &bull; Legal Scale Certified',
    image: '/images/bioptic_scale.jpg',
    val: '$1,850 Value &bull; 100% Free'
  },
  {
    id: 'handheld',
    category: 'PORTABLE',
    title: 'Handheld Store Scanner',
    tagline: 'Walk the aisles to count stock in the cooler and change shelf prices.',
    spec: 'Drops Proof &bull; Long-Life Battery',
    image: '/images/handheld_scanner.jpg',
    val: '$850 Value &bull; 100% Free'
  },
  {
    id: 'esl',
    category: 'SHELF TAGS',
    title: 'Digital Price Tags',
    tagline: 'Change a price once on your computer. All shelf tags in the store update in 4 seconds.',
    spec: 'Battery Lasts 5 Years &bull; Wire-Free',
    image: '/images/electronic_shelf_labels.jpg',
    val: '$650 Value &bull; 100% Free'
  },
  {
    id: 'pinpad',
    category: 'PAYMENTS',
    title: 'Card Reader & Silent Printer',
    tagline: 'Fast tap for Apple Pay, credit cards, and food stamps (EBT). Quiet receipt printer.',
    spec: 'Fast Printing &bull; Zero Paper Jams',
    image: '/images/pinpad_printer.jpg',
    val: '$780 Value &bull; 100% Free'
  },
  {
    id: 'bundle',
    category: 'FULL SETUP',
    title: 'Complete Register Package',
    tagline: 'Everything delivered, plugged in, and set up in your store with zero upfront cost.',
    spec: 'Free In-Store Setup by Tech',
    image: '/images/hardware_suite.jpg',
    val: '$5,000 Setup &bull; 100% Free'
  }
];

export const DeviceGallery: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredDevices = filter === 'all' 
    ? DEVICES 
    : DEVICES.filter(d => d.id === filter);

  return (
    <section className="w-full py-16 sm:py-24 md:py-28 bg-white dark:bg-[#0d0f14] border-b border-neutral-200 dark:border-neutral-800/80 transition-colors" id="hardware">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="text-[11px] font-mono-telemetry uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              THE COMPLETE EQUIPMENT SUITE
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black dark:text-white uppercase">
              Meet The Hardware.
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 font-medium max-w-md text-sm sm:text-base tracking-tight">
            Commercial grade. Minimalist form. Engineered specifically for high-volume grocery. All delivered and installed for free.
          </p>
        </div>

        {/* Minimal Pill Filters */}
        <div className="reveal-on-scroll delay-100 flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all cursor-pointer whitespace-nowrap ${
              filter === 'all' 
                ? 'bg-black dark:bg-white text-white dark:text-black shadow-xs' 
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
          >
            All Equipment
          </button>
          {DEVICES.map(d => (
            <button 
              key={d.id}
              onClick={() => setFilter(d.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all cursor-pointer whitespace-nowrap ${
                filter === d.id 
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-xs' 
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              {d.title}
            </button>
          ))}
        </div>

        {/* Device Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredDevices.map((device, idx) => (
            <div 
              key={device.id} 
              className={`reveal-scale ${idx % 3 === 1 ? 'delay-150' : idx % 3 === 2 ? 'delay-300' : ''} card-hover-effect group rounded-3xl bg-neutral-50 dark:bg-[#151518] border border-neutral-200/80 dark:border-neutral-800 overflow-hidden flex flex-col justify-between`}
            >
              {/* Image Container */}
              <div className="w-full aspect-[16/11] overflow-hidden bg-neutral-900 relative">
                <img 
                  src={device.image} 
                  alt={device.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-emerald-400 font-mono-telemetry text-[10px] font-bold">
                  {device.val}
                </span>
              </div>

              {/* Text Information */}
              <div className="p-5 sm:p-6 flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono-telemetry text-neutral-500 dark:text-neutral-400">
                  <span>{device.category}</span>
                  <span dangerouslySetInnerHTML={{ __html: device.spec }}></span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-black dark:text-white">
                  {device.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                  {device.tagline}
                </p>

                <div className="pt-3 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between mt-auto">
                  <span className="text-[11px] font-mono-telemetry text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">check_circle</span> 100% Free Equipment
                  </span>
                  <button 
                    onClick={onOpenModal}
                    className="text-xs font-bold text-black dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    Get Free &rarr;
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
