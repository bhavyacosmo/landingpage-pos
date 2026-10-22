# Stitch Produce OS — Futuristic Grocery POS & Operations Platform

A modern, minimalist, futuristic grocery operating system and produce point-of-sale landing page built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**, taking architectural and aesthetic inspiration from [Vori](https://www.vori.com/) while purpose-built for independent fresh produce markets.

---

## 🚀 Quick Start

### 1. Development Mode
Run the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
Type-check and bundle the application for production:
```bash
npm run build
```

### 3. Preview Production Build
Locally preview the built distribution:
```bash
npm run preview
```

---

## 🌟 Key Features

1. **Futuristic Minimalist Aesthetic**:
   - Deep botanical pine (`#032517`), spring emerald accents (`#10B981` / `#00F59B`), warm oat canvas (`#FBFBF8`), and hairline glassmorphism (`glass-nav`).
   - Pairing *Playfair Display* editorial serif headings with *Plus Jakarta Sans* UI body text and *JetBrains Mono* real-time telemetry readout fonts.

2. **Real Hardware & Device Suite**:
   - **15.6" Dual IPS Produce POS Terminal**: Touchscreen with customer price-facing unit.
   - **In-Counter Bi-Optic Produce Scale**: Flush stainless steel platter with sapphire 360° laser array.
   - **Wireless Inventory & Receiving Terminal (TC52 Handheld)**: Wholesale delivery OCR and cooler stock audit.
   - **Electronic Shelf Labels (ESL Tags)**: E-paper displays syncing prices across aisles in < 5 seconds.
   - **Thermal Receipt Printer & Smart Contactless PIN Pad**: Apple Pay, EMV chip, and SNAP/EBT split.
   - **Turnkey Produce Lane Workstation Bundle**: Complete hardware suite provided at $0 upfront.

3. **Produce-Specific Engineering**:
   - **0.08s Zero-Lag Scale Bridge**: Real RS-232 serial telemetry lock without Bluetooth delay.
   - **Visual 1-Tap PLU Matrix**: 1,400+ photo tiles for fast cashier ringing without code memorization.
   - **Automatic SNAP / EBT Basket Separation**: 1-tap split for eligible produce vs non-food items.
   - **Daily Wholesale Invoice OCR**: Smartphone scan of Hunts Point / Baldor delivery manifests to protect 38.4% gross profit margins.

4. **Interactive Components**:
   - **Hero Device Stage**: Interactive hover hotspots on the physical POS terminal.
   - **Dual Workstation Switcher**: Interactive tabs between Front-Lane Cashier Register and Cloud Backoffice Dashboard.
   - **Live Tare & Weigh-In Simulator**: Clickable produce items (*Honeycrisp Apples, Hass Avocado, Plantains, Roma Tomatoes, Jamaican Yellow Yam, Tuscan Kale*) with simulated live weight locking and SNAP eligibility tags.
   - **ROI Comparison Matrix**: Side-by-side comparison against Clover / Square and legacy NCR / Toshiba systems.
   - **Interactive FAQ Accordion**: Expandable answers for store owners.
   - **Hardware Grant Reservation Modal**: Interactive booking dialog with store details, lane count, and hardware component checklist.

---

## 📁 Project Structure

```
├── public/
│   └── images/                     # High-res local device & produce photography
│       ├── pos_terminal_hero.jpg
│       ├── bioptic_scale.jpg
│       ├── handheld_scanner.jpg
│       ├── electronic_shelf_labels.jpg
│       ├── backoffice_dashboard.jpg
│       ├── pinpad_printer.jpg
│       ├── hardware_suite.jpg
│       └── produce_ambient.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Floating glassmorphic header with live status
│   │   ├── Hero.tsx                # Hero section with interactive 3D device stage
│   │   ├── MetricsMarquee.tsx      # Social proof & key performance statistics
│   │   ├── HardwareSuite.tsx       # 6-card physical hardware device grid
│   │   ├── ProduceEngine.tsx       # 4 core grocery perishable challenges
│   │   ├── DualWorkstations.tsx    # Cashier terminal vs Backoffice switcher
│   │   ├── TareSimulator.tsx       # Interactive produce scale simulation lab
│   │   ├── RoiMatrix.tsx           # Comparative performance matrix
│   │   ├── Testimonials.tsx        # Verified independent grocer reviews
│   │   ├── HardwareGrantBanner.tsx # $5,000 hardware grant CTA banner
│   │   ├── FaqAccordion.tsx        # Stateful grocer FAQ accordion
│   │   ├── LeadModal.tsx           # Interactive reservation modal with state
│   │   └── Footer.tsx              # Full architectural footer with compliance
│   ├── App.tsx                     # Main layout and modal state management
│   ├── index.css                   # Tailwind styles, glows & glassmorphism
│   └── main.tsx                    # React DOM entry point
├── index.html                      # HTML root with Google Fonts & Material Symbols
├── package.json                    # Project dependencies and npm scripts
├── tailwind.config.js              # Theme extension & custom color tokens
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite bundler configuration
```
