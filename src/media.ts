/**
 * MEDIA SLOTS — drop your real images here.
 *
 * 1. Put the file in  /public/images/slots/  (e.g. public/images/slots/hero-pos.png)
 * 2. Set the path below, e.g.  heroHardware: "/images/slots/hero-pos.png"
 *
 * Anything left as `null` keeps its built-in stand-in (a live HTML screen
 * or the current placeholder photo), so the page never shows an empty box.
 *
 * Sizes that work best:
 *  - heroHardware:   transparent PNG/WebP of the full POS setup, ~1600x1200
 *  - screens.*:      POS screen captures, 16:10, min 1600px wide
 *  - hardware.*:     4:3 photos, min 1200px wide
 */
export const MEDIA = {
  /** Hero: the whole POS (terminal, scale, printer). Replaces the live demo screen frame. */
  heroHardware: null as string | null, // was "/images/slots/hero.jpg"; null shows the live animated POS screen

  /** Hero: animated screen recording shown inside the device frame (used when heroHardware is null). */
  heroScreen: "/images/slots/hero-screen.gif" as string | null,

  /** Real POS screen captures. Each replaces the built-in live screen in the "three screens" section. */
  screens: {
    checkout: "/images/slots/checkout.jpg" as string | null,
    payment: "/images/slots/payment.jpg" as string | null,
    scale: "/images/slots/scale-station.jpg" as string | null,
    pricebook: "/images/slots/pricebook.jpg" as string | null,
    backoffice: "/images/slots/backoffice.jpg" as string | null,
  },

  /** Free hardware kit + optional add-ons. Stand-in photos are used until you set these. */
  hardware: {
    scale: "/images/slots/scale.jpg" as string | null,
    /** Second scale shot, shown on hover over the scale card. */
    scaleOpen: "/images/slots/scale-open.jpg" as string | null,
    /** Epson thermal receipt printer (free kit). Save the photo as public/images/slots/receipt-printer.jpg and set this path. */
    printer: "/images/slots/receipt-printer.jpg" as string | null,
    /** Zebra ZQ610 Plus label printer (paid, paired with the handheld). */
    /** Second printer shot (lid open), shown on hover over the printer card. */
    printerOpen: "/images/slots/receipt-printer-open.jpg" as string | null,
    labelPrinter: "/images/slots/label-printer.jpg" as string | null,
    labelPrinterOpen: "/images/slots/printer-open.jpg" as string | null,
    drawer: "/images/slots/drawer.jpg" as string | null,
    /** Second drawer shot (drawer open), shown on hover over the drawer card. */
    drawerOpen: "/images/slots/drawer-open.jpg" as string | null,
    customerDisplay: "/images/slots/customer-display.jpg" as string | null,
    handheld: "/images/slots/handheld.jpg" as string | null,
    /** PAX A35 Android PIN pad (product render from paxtechnology.com/a35). */
    pinpadPax: "/images/slots/pinpad-pax-a35.png" as string | null,
    /** Dejavoo P17 Android PIN pad (product render from dejavoo.io). */
    pinpadDejavoo: "/images/slots/pinpad-dejavoo-p17.png" as string | null,
    shelfTags: null as string | null,
  },

  /** Full-bleed photo of a real store lane, shown behind the closing call to action. */
  storeLane: null as string | null,
};

/** Current stand-in photographs. Replace via MEDIA above. */
export const STAND_IN = {
  scale: "/images/bioptic_scale.jpg",
  printer: "/images/pinpad_printer.jpg",
  drawer: "/images/hardware_suite.jpg",
  customerDisplay: "/images/pos_terminal_hero.jpg",
  handheld: "/images/handheld_scanner.jpg",
  shelfTags: "/images/electronic_shelf_labels.jpg",
  storeLane: "/images/produce_ambient.jpg",
};
