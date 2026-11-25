export type Block = string | string[];
export interface LegalSection {
  /** A plain statement, so the heading alone tells you the answer. */
  title: string;
  /** Short label used in the page index. */
  nav: string;
  body: Block[];
}
export interface LegalDoc {
  slug: "privacy-policy" | "terms-of-service";
  title: string;
  updated: string;
  /** Three lines a reader can take away without scrolling. */
  summary: string[];
  intro: string;
  sections: LegalSection[];
  contactHeading: string;
}

export const PRIVACY: LegalDoc = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  updated: "November 4, 2026",
  contactHeading: "Questions, or want your data deleted?",
  summary: [
    "We never sell your data.",
    "No ads. No trackers.",
    "Delete your account in the app, any time.",
  ],
  intro:
    "This covers what Produce AI POS Inc. collects when you use our register software, apps, web back office and this website.",
  sections: [
    {
      nav: "What we collect",
      title: "We collect only what a store needs to run checkout",
      body: [
        [
          "Account: store name, address, your name, email and phone.",
          "Sign-in: your email, and one-time codes sent to it.",
          "Staff: names, roles, permissions, clock-ins and an action log. PINs are stored scrambled, never as plain text.",
          "Shoppers, as entered by the store: contact details, tax ID, loyalty points, purchase history, store credit and marketing choices.",
          "Sales and stock: items, prices, weights, payments, refunds, shifts, costs, spoilage and vendors.",
          "Files you add: invoices, tax-exemption papers, product images and screen media.",
          "Devices: model, versions, equipment connection events and error reports.",
          "Website forms: whatever you type, such as a free hardware request.",
          "Payment companies: whether a payment went through, and the last four card digits.",
        ],
      ],
    },
    {
      nav: "Who is in charge",
      title: "The store controls its shoppers’ data. We handle it for them",
      body: [
        "A store decides what staff and shopper information goes into the system. If you shop at one of our stores, ask that store about your information. We will help them respond.",
      ],
    },
    {
      nav: "App permissions",
      title: "The app asks for access only when a feature needs it",
      body: [
        "You can turn any of these off in device settings. Only the related feature stops.",
        [
          "Camera: to scan barcodes and photograph invoices, only while the scanner is open.",
          "Photos and files: to attach invoices, tax papers and media you pick.",
          "Bluetooth and local network: to find printers and store equipment.",
          "Location, older Android only: Android requires it to find Bluetooth printers. We never collect, save or share it.",
          "Built-in barcode scanners: read only while the app is open.",
        ],
      ],
    },
    {
      nav: "How we use it",
      title: "We use it to run your store, and for nothing else",
      body: [
        [
          "Run checkout, scales, printers, offline mode and the back office.",
          "Verify email, link devices and apply staff permissions.",
          "Build sales, shift, profit and stock reports.",
          "Read invoices and update your costs and prices.",
          "Run your promotions and loyalty program.",
          "Provide support, installation and hardware service.",
          "Prevent fraud and fix technical problems.",
          "Meet legal, tax, weights-and-measures and card-network rules.",
        ],
      ],
    },
    {
      nav: "Marketing messages",
      title: "Shopper messages go out only when a store sends them",
      body: [
        [
          "Stores can text, email or WhatsApp shoppers about offers and rewards.",
          "Only shoppers who agreed receive them. The store must get that permission.",
          "Shoppers can reply STOP, use the unsubscribe link, or ask the store to remove them.",
          "We never use shopper data to market our own products.",
        ],
      ],
    },
    {
      nav: "AI and invoices",
      title: "AI reads an invoice only when you scan one",
      body: [
        "AI picks out the vendor, invoice number, items and prices so you can check them. The file is used for nothing else, and nothing is saved until you confirm.",
      ],
    },
    {
      nav: "Card payments",
      title: "We never store full card numbers",
      body: [
        "No card numbers, security codes or stripe data touch our registers or servers. Cards go through PCI-DSS Level 1 certified terminals and processors. EBT SNAP and WIC go through approved benefit processors.",
      ],
    },
    {
      nav: "Who we share with",
      title: "We share data only with the companies that help us run the service",
      body: [
        "We don’t sell data, and we don’t share it with advertisers or data brokers. Each company below is bound in writing to protect it and use it only for us.",
        [
          "Cloud hosting and database providers",
          "Payment and EBT/WIC processors",
          "AI providers, for reading invoices",
          "Email providers, for sign-in codes",
          "Text, email and WhatsApp providers, for store messages",
          "Google Fonts, which sees your IP address when fonts load",
          "Error-reporting and support tools",
        ],
        "We may also share data if the law requires it, or if the company is sold. We will tell you first.",
      ],
    },
    {
      nav: "On your device",
      title: "The app keeps two tokens on your device, and clears them when you sign out",
      body: [
        [
          "A sign-in token keeps staff signed in. It is removed on sign-out and expires on its own.",
          "A device token and store ID let staff sign in with a PIN. They are removed when you choose “Sign in with a different email” or delete your account. On iPhones this can remain after uninstalling until removed that way.",
          "Printer and layout settings are cleared when you uninstall.",
        ],
      ],
    },
    {
      nav: "Ads and tracking",
      title: "No ads, no tracking",
      body: [
        "We don’t follow you across other apps or sites, and we don’t use your data for third-party ads. We don’t use your advertising ID. The app has no ad or analytics software.",
      ],
    },
    {
      nav: "Keeping data",
      title: "We keep data while your account is active",
      body: [
        [
          "Sales records: up to seven years where tax or accounting law requires.",
          "Error logs: up to 90 days.",
        ],
      ],
    },
    {
      nav: "Delete your account",
      title: "Delete your account in the app, or by email",
      body: [
        [
          "In the app: Settings, then Delete account, then confirm.",
          "By email: write to support@producepos.app from the account’s email address.",
        ],
        "We delete or anonymize the account and its personal data within 30 days. We keep only records the law requires, such as tax-related sales. Deleting a store owner’s account closes the store and removes its staff, shopper and store data. Admins can also archive staff and remove shopper records in the back office at any time.",
      ],
    },
    {
      nav: "Your choices",
      title: "You can see, correct, export or delete your data",
      body: [
        [
          "Ask for a copy of what we hold.",
          "Withdraw permission by turning off camera, Bluetooth or photo access, or by unsubscribing.",
          "Ask us to delete your account and personal data.",
          "Opt out of non-essential email with the unsubscribe link.",
          "In California or another U.S. state with privacy laws, use the rights those laws give you. We won’t treat you differently.",
        ],
      ],
    },
    {
      nav: "Security",
      title: "Your data is encrypted in transit and at rest",
      body: [
        "We also scramble staff PINs, send one-time codes for new devices, limit access by role and run regular security reviews. No system is perfectly safe. Where the law requires, we will tell you about a breach.",
      ],
    },
    {
      nav: "Children",
      title: "This service is for businesses, not for children under 13",
      body: [
        "We don’t knowingly collect children’s information. If you think a child has given us any, tell us and we will delete it.",
      ],
    },
    {
      nav: "Changes",
      title: "We post changes here, with a new date",
      body: [
        "For important changes we also tell you in the app or by email.",
      ],
    },
  ],
};

export const TERMS: LegalDoc = {
  slug: "terms-of-service",
  title: "Terms of Service",
  updated: "October 22, 2026",
  contactHeading: "Questions about these terms?",
  summary: [
    "Your store data stays yours.",
    "Free hardware goes to qualified stores, first come first served.",
    "Stop using it and delete your account any time.",
  ],
  intro:
    "These terms are an agreement between you and Produce AI POS Inc. They cover our register software, apps, web back office, hardware program and this website. By downloading, installing or using any of it, you agree.",
  sections: [
    {
      nav: "Who this is with",
      title: "This agreement is with us, not with Apple or Google",
      body: [
        "We, not Apple or Google, are responsible for the service and what is in it.",
      ],
    },
    {
      nav: "What you can do",
      title: "You may use the service for your store’s business",
      body: [
        "We give you a limited, non-exclusive, non-transferable license, which we can withdraw. If you get the app from the Apple App Store, you can use it on Apple devices you own or control.",
        [
          "Don’t copy, change, take apart or resell the service, its scale drivers or its software.",
          "Don’t use it for anything illegal or against card-network rules.",
          "Keep your login safe. You are responsible for everything done under your account.",
        ],
      ],
    },
    {
      nav: "Your account",
      title: "Your store data stays yours",
      body: [
        "Give us accurate information when you sign up. You let us handle your data only to provide the service, as our Privacy Policy explains. You can delete your account in the app any time.",
      ],
    },
    {
      nav: "Free hardware",
      title: "Free hardware goes to qualified stores, first come first served",
      body: [
        "It may come with a separate hardware agreement. Scale installation and calibration must follow your state and local weights-and-measures rules.",
      ],
    },
    {
      nav: "Payments",
      title: "You keep your payment, EBT and WIC approvals in good standing",
      body: [
        "That means your payment-processing account, your USDA EBT SNAP authorization and your state WIC approvals, and following their rules. Subscription fees, if any, are billed as agreed at sign-up and are not refundable unless the law says so.",
      ],
    },
    {
      nav: "Support",
      title: "We, not Apple, provide support",
      body: [
        "We alone maintain and support the service, as described here or as the law requires.",
      ],
    },
    {
      nav: "Warranty",
      title: "The service is provided “as is”",
      body: [
        "To the fullest extent the law allows, the service is “as is” and “as available”. We alone are responsible for any product warranty we have not legally disclaimed.",
        "If the app fails a warranty that applies, you can tell Apple, and Apple will refund the purchase price, if any. Beyond that, Apple has no warranty duty for the app. Any other claim or loss from a failed warranty is our responsibility.",
      ],
    },
    {
      nav: "Claims",
      title: "We handle claims about the app, not Apple",
      body: [
        "That includes claims about product safety, claims that the app breaks a legal or regulatory rule, and claims under consumer-protection or privacy law.",
      ],
    },
    {
      nav: "Ownership",
      title: "The service belongs to Produce AI",
      body: [
        "That includes the software, design, logos and content. If someone claims the app infringes their intellectual property, we, not Apple, investigate, defend and settle it.",
      ],
    },
    {
      nav: "Legal rules",
      title: "You confirm you’re not barred from using U.S. services",
      body: [
        "You are not in a country under a U.S. Government embargo or listed as a “terrorist supporting” country, and you are not on any U.S. Government list of prohibited or restricted parties.",
      ],
    },
    {
      nav: "Other terms",
      title: "You also follow the terms of the services you connect",
      body: [
        "For example, your mobile data plan and your payment processor’s merchant agreement.",
      ],
    },
    {
      nav: "Our liability",
      title: "Our liability is capped at what you paid in the last 12 months",
      body: [
        "As far as the law allows, we aren’t responsible for indirect losses such as lost profits, spoiled stock or time your business is interrupted.",
      ],
    },
    {
      nav: "Ending this",
      title: "You can leave any time. We can suspend you if you break these terms",
      body: [
        "Parts of these terms that are meant to keep applying afterward will.",
      ],
    },
    {
      nav: "Governing law",
      title: "New York law applies",
      body: ["These terms are governed by the laws of the State of New York, USA."],
    },
    {
      nav: "Apple’s rights",
      title: "Apple can enforce these terms against you",
      body: [
        "You and we agree that Apple and its subsidiaries are third-party beneficiaries. Once you accept the terms, Apple can enforce them.",
      ],
    },
    {
      nav: "Changes",
      title: "We post changes here, with a new date",
      body: ["If you keep using the service after that, you accept the update."],
    },
  ],
};
