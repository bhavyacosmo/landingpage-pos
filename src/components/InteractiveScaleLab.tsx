import React, { useState } from 'react';

interface ProduceItem {
  id: string;
  name: string;
  code: string;
  pricePerLb: number;
  weight: number;
  isUnit?: boolean;
  isEbtEligible: boolean;
  category: string;
}

const PRODUCE_INVENTORY: ProduceItem[] = [
  { id: 'yam', name: "Jamaican Yellow Yam", code: "#4819", pricePerLb: 2.99, weight: 2.45, isEbtEligible: true, category: "Tubers" },
  { id: 'apples', name: "Honeycrisp Apples", code: "#4173", pricePerLb: 1.99, weight: 1.65, isEbtEligible: true, category: "Fruits" },
  { id: 'avocado', name: "Hass Avocado", code: "#4225", pricePerLb: 1.49, weight: 1.20, isEbtEligible: true, category: "Fruits" },
  { id: 'plantains', name: "Green Plantains", code: "#4235", pricePerLb: 0.89, weight: 3.40, isEbtEligible: true, category: "Tropical" },
  { id: 'tomatoes', name: "Roma Tomatoes", code: "#4087", pricePerLb: 1.99, weight: 2.10, isEbtEligible: true, category: "Produce" },
  { id: 'kale', name: "Fresh Kale", code: "#4627", pricePerLb: 2.49, weight: 1.00, isUnit: true, isEbtEligible: true, category: "Greens" },
];

export const InteractiveScaleLab: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ProduceItem>(PRODUCE_INVENTORY[0]);
  const [isWeighing, setIsWeighing] = useState<boolean>(false);
  const [ebtSplitActive, setEbtSplitActive] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'cashier' | 'customer'>('cashier');

  const handleSelectItem = (item: ProduceItem) => {
    setIsWeighing(true);
    setSelectedItem(item);
    setTimeout(() => {
      setIsWeighing(false);
    }, 120);
  };

  const itemTotal = selectedItem.isUnit 
    ? selectedItem.pricePerLb 
    : Number((selectedItem.pricePerLb * selectedItem.weight).toFixed(2));

  // Non-food household item in mock cart to show SNAP / EBT split
  const mockNonFoodItem = { name: "Paper Grocery Bags & Napkins", price: 3.50, isEbtEligible: false };
  const grandTotal = Number((itemTotal + mockNonFoodItem.price).toFixed(2));
  const ebtCovered = itemTotal;
  const cashRemaining = mockNonFoodItem.price;

  return (
    <section className="w-full py-16 sm:py-24 md:py-28 bg-white dark:bg-[#0d0f14] border-b border-neutral-200 dark:border-neutral-800/80 transition-colors" id="register-demo">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="text-[11px] font-mono-telemetry uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              LIVE LANE REGISTER SIMULATOR
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black dark:text-white uppercase">
              Try The Fast Scale.
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 font-medium max-w-md text-sm sm:text-base tracking-tight">
            Tap any produce button. Watch the Zebra scale bridge lock the exact weight in under 0.1 seconds, and test the 1-tap EBT Food Stamps split.
          </p>
        </div>

        {/* Live Simulator Workbench */}
        <div className="reveal-scale delay-150 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Cashier Touchpad Tiles (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono-telemetry uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-bold">
                TAP PRODUCE PHOTO TO WEIGH:
              </span>
              <span className="text-[10px] font-mono-telemetry px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                Zebra MP7000 Native Bridge
              </span>
            </div>

            {/* Produce Buttons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {PRODUCE_INVENTORY.map((item) => {
                const isSelected = selectedItem.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectItem(item)}
                    className={`p-3 sm:p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[92px] border ${
                      isSelected
                        ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-lg scale-[1.02]'
                        : 'bg-neutral-50/80 dark:bg-[#15181e] text-neutral-900 dark:text-neutral-200 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 hover:bg-neutral-100 dark:hover:bg-[#1a1f26]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1">
                      <span className="font-bold text-xs leading-snug line-clamp-2">{item.name}</span>
                      <span className={`text-[9px] font-mono-telemetry font-bold shrink-0 ${isSelected ? 'text-emerald-400 dark:text-emerald-700' : 'text-neutral-500 dark:text-neutral-400'}`}>
                        {item.code}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between mt-2 pt-1 border-t border-black/10 dark:border-white/10 text-[11px] font-mono-telemetry">
                      <span className={isSelected ? 'text-neutral-300 dark:text-neutral-700' : 'text-neutral-500 dark:text-neutral-400'}>
                        ${item.pricePerLb.toFixed(2)}/lb
                      </span>
                      <span className={`font-bold ${isSelected ? 'text-emerald-300 dark:text-emerald-700' : 'text-emerald-600 dark:text-emerald-400'}`}>
                        {item.weight.toFixed(2)} lb
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Scale Hardware Specs & Bag Tare Bar */}
            <div className="p-4 rounded-2xl bg-neutral-50/90 dark:bg-[#15181e] border border-neutral-200 dark:border-neutral-800 text-xs flex flex-col gap-2">
              <div className="flex items-center justify-between text-neutral-600 dark:text-neutral-300 font-mono-telemetry text-[11px]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <strong>Bag Tare Weight:</strong> 0.015 lb Subtracted Auto
                </span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">0.08s LATENCY</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono-telemetry text-neutral-500 dark:text-neutral-400 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                <span>Hardware: Zebra MP7000 / Magellan / CAS</span>
                <span className="text-black dark:text-white font-bold">NTEP CERTIFIED CLASS III</span>
              </div>
            </div>

            {/* 1-Tap EBT Split Button */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-black dark:text-white flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-base">call_split</span>
                  Automatic EBT SNAP Split Demo
                </div>
                <div className="text-[11px] text-neutral-600 dark:text-neutral-400">
                  Separates eligible produce from household items with 1 click.
                </div>
              </div>
              <button
                onClick={() => setEbtSplitActive(!ebtSplitActive)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono-telemetry transition-all cursor-pointer shadow-xs ${
                  ebtSplitActive
                    ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                    : 'bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800'
                }`}
              >
                {ebtSplitActive ? '✓ EBT Split Applied' : 'Simulate 1-Tap Split'}
              </button>
            </div>

          </div>

          {/* Right Column: High-Tech Glassmorphic Terminal Screen (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-[2.5rem] bg-[#0a0c10] p-6 sm:p-8 text-white shadow-2xl border border-neutral-800 flex flex-col gap-6 relative overflow-hidden">
              
              {/* Subtle radiant glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/12 blur-[100px] pointer-events-none"></div>

              {/* Terminal Screen Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono-telemetry">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-emerald-400 font-bold uppercase tracking-wider">
                    {activeTab === 'cashier' ? 'LANE #01 REGISTER TERMINAL' : '15.6" CUSTOMER DISPLAY'}
                  </span>
                </div>
                
                {/* Switch between cashier screen and customer screen */}
                <div className="inline-flex p-0.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[10px]">
                  <button
                    onClick={() => setActiveTab('cashier')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'cashier' ? 'bg-emerald-500 text-black font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Cashier
                  </button>
                  <button
                    onClick={() => setActiveTab('customer')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'customer' ? 'bg-emerald-500 text-black font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Customer
                  </button>
                </div>
              </div>

              {/* Live Weight Readout HUD */}
              <div className="p-5 rounded-2xl bg-neutral-950/80 border border-white/10 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-mono-telemetry text-neutral-400">
                  <span>SCALE STATUS</span>
                  <span className={isWeighing ? 'text-amber-400 font-bold' : 'text-emerald-400 font-bold'}>
                    {isWeighing ? 'WEIGHING PLATTER...' : 'WEIGHT LOCKED & STABILIZED'}
                  </span>
                </div>

                <div className="flex items-baseline justify-between pt-1">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {selectedItem.name}
                    </div>
                    <div className="text-xs font-mono-telemetry text-neutral-400 mt-0.5">
                      PLU Code: {selectedItem.code} &bull; Category: {selectedItem.category}
                    </div>
                  </div>
                  
                  <div className="text-right font-mono-telemetry">
                    <div className="text-3xl sm:text-4xl font-black text-emerald-400">
                      ${itemTotal.toFixed(2)}
                    </div>
                    <div className="text-xs text-neutral-400">
                      {selectedItem.weight.toFixed(2)} lb @ ${selectedItem.pricePerLb.toFixed(2)}/lb
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Receipt Cart Breakdown */}
              <div className="flex flex-col gap-2.5 font-mono-telemetry text-xs">
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-bold">
                  ACTIVE TRANSACTION CART:
                </span>
                
                {/* Item 1: Selected Produce */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="text-white font-medium">{selectedItem.name} ({selectedItem.weight} lb)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">EBT</span>
                    <span className="text-white font-bold">${itemTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Item 2: Mock Non-food item */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                    <span className="text-neutral-300 font-medium">{mockNonFoodItem.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 font-bold">NON-EBT</span>
                    <span className="text-white font-bold">${mockNonFoodItem.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Totals & Split Checkout Bar */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3 font-mono-telemetry">
                {ebtSplitActive ? (
                  <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex flex-col gap-2 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-emerald-300 font-bold">1. EBT FOOD STAMPS CHARGE:</span>
                      <span className="text-emerald-400 font-black text-sm">${ebtCovered.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-300">2. CASH / DEBIT REMAINING:</span>
                      <span className="text-white font-black text-sm">${cashRemaining.toFixed(2)}</span>
                    </div>
                    <div className="text-[10px] text-emerald-400 font-sans mt-0.5">
                      ✓ Zero cashier calculation errors &bull; Automatically audited by USDA EBT standards.
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-400">REGISTER TOTAL:</span>
                    <span className="text-2xl font-black text-white">${grandTotal.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-1">
                  <span>If Store Internet Drops:</span>
                  <span className="text-emerald-400 font-bold">100% Offline SQLite Active</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
