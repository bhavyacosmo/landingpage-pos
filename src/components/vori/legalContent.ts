export type Block = string | string[];
export interface LegalSection {
  title: string;
  body: Block[];
}
export interface LegalDoc {
  title: string;
  updated: string;
  intro: string[];
  sections: LegalSection[];
  contactHeading: string;
}

export const PRIVACY: LegalDoc = {
  title: "Privacy Policy",
  updated: "November 4, 2026",
  contactHeading: "Questions about this policy, or want your data deleted?",
  intro: [
    "This page explains what information Produce AI POS Inc. (“we”, “us”) collects when you use our register software, mobile apps, web back office and this website, what we do with it, and the choices you have.",
    "Our customers are stores. A store decides what information about its own staff and shoppers goes into the system. For that information, the store is in charge and we only handle it on the store’s behalf. If you are a shopper at a store that uses us, please ask that store about your information.",
  ],
  sections: [
    {
      title: "What we collect",
      body: [
        "Only what’s needed to run a store’s checkout and back office:",
        [
          "Account details: business and store name, address, your name, email and phone number, and anything you give us when you sign up or request hardware.",
          "Sign-in details: your email, and the one-time codes we send to it to confirm a new device. Staff can get their own login email from the store’s admin.",
          "Staff details: names, roles, what each person is allowed to do, sign-in PINs (saved only in scrambled form, never as plain text), clock-in and clock-out times, and a log of actions taken in the system.",
          "Shopper details the store enters: name, phone, email, address, tax ID, tax-exemption papers, loyalty points, purchase history, store credit or balances, and marketing preferences.",
          "Sales and stock: items sold, prices, weights, discounts, payment types, refunds, held orders, shifts, products, stock levels, costs, spoilage records and vendors.",
          "Files you choose to add: photos and files of vendor invoices, tax-exemption papers, product images, and pictures or videos for customer screens. We only get files you pick.",
          "Device information: device model, system version, app version, printer, scale and scanner connection events, and error reports.",
          "Website forms: whatever you type into forms on this site, such as the free hardware request.",
        ],
      ],
    },
    {
      title: "What the app asks to use on your device",
      body: [
        "The app asks only when a feature needs it, and you can switch any of these off in your device settings. The related feature simply stops working until you turn it back on.",
        [
          "Camera: to scan barcodes and photograph vendor invoices, only while you have the scanner open.",
          "Photos and files: to attach invoices, tax papers and ad media that you choose.",
          "Bluetooth and local network: to find label printers and connect to equipment in your store.",
          "Location (older Android phones only): Android requires this to search for nearby Bluetooth printers. We don’t collect, save or share your location.",
          "Built-in barcode scanners: on handheld devices, the app reads scans only while it’s open.",
        ],
      ],
    },
    {
      title: "How we get your information",
      body: [
        [
          "Straight from you, when you create an account, verify your email, add staff or shoppers, upload files, fill in a form or contact support.",
          "Automatically from the register, scale, scanner, printer and app while you use them.",
          "From payment companies, limited to whether a payment went through and the last four digits of the card, so your books match.",
        ],
      ],
    },
    {
      title: "What we use it for",
      body: [
        [
          "Running the checkout, scale and printer connections, offline mode and back office.",
          "Setting up your store, verifying your email and linking your devices.",
          "Signing staff in and applying their permissions, clock-ins and activity records.",
          "Building sales reports, end-of-shift reports, profit views and stock updates.",
          "Reading the vendor invoices you upload and updating your costs and prices.",
          "Running your store’s promotions and loyalty program, and sending the messages your store sets up.",
          "Support, installation, scale calibration and hardware service.",
          "Preventing fraud and fixing security and technical problems.",
          "Meeting legal, tax, weights-and-measures and card-network rules.",
        ],
      ],
    },
    {
      title: "Shoppers and marketing messages",
      body: [
        "Stores can use the system to text, email or WhatsApp their shoppers about offers and loyalty rewards.",
        [
          "Messages go out only when the store tells us to, and only to shoppers who agreed to get them. The store is responsible for getting that permission.",
          "Shoppers can stop texts by replying STOP, and stop emails with the unsubscribe link. They can also ask the store to remove them.",
          "We never use a store’s shopper information to market our own products, and we never sell it.",
        ],
      ],
    },
    {
      title: "AI reading of invoices",
      body: [
        "When you scan or upload a vendor invoice, AI reads it to pick out the vendor, invoice number, items and prices so you can check them. The file is used only for that. Nothing is saved to your records until you confirm it.",
      ],
    },
    {
      title: "Card payments",
      body: [
        "We don’t store full card numbers, security codes or magnetic-stripe data on registers, devices or our servers. Card payments go through PCI-DSS Level 1 certified payment terminals and processors. EBT SNAP and WIC payments go through approved benefit processors.",
      ],
    },
    {
      title: "Who we share it with",
      body: [
        "We don’t sell your data, and we don’t share it with advertisers or data brokers. We share it only with companies that help us run the service, and only as much as they need:",
        [
          "Cloud hosting and database providers",
          "Payment and benefit (EBT/WIC) processors",
          "AI providers, for reading invoices",
          "Email providers, for sign-in codes",
          "Text, email and WhatsApp providers, for store messages",
          "Google Fonts, which supplies our fonts and sees your device’s IP address when they download",
          "Error-reporting and support tools",
        ],
        "Each of these companies has agreed in writing to protect your data as well as we do and to use it only to serve us. We may also share information if the law requires it, or if our company is bought or merges (we’ll tell you first).",
      ],
    },
    {
      title: "What stays on your device",
      body: [
        "The app keeps two things in your device’s protected storage:",
        [
          "A sign-in token, so staff stay signed in. It’s removed when you sign out and expires on its own.",
          "A device token and your store’s ID, saved after you verify your email once, so staff can sign in on that device with a PIN. It’s removed when you choose “Sign in with a different email” or delete your account in the app. On iPhones, this item can remain after the app is uninstalled until it’s removed that way.",
        ],
        "The app also remembers settings like printer and layout choices. Uninstalling the app clears those.",
      ],
    },
    {
      title: "Tracking and ads",
      body: [
        "We don’t follow you across other companies’ apps or websites and we don’t use your data for third-party ads. We don’t use your device’s advertising ID, and the app has no ad or analytics software built in.",
      ],
    },
    {
      title: "How long we keep data, and deleting your account",
      body: [
        "We keep a store’s account and data while the account is active. Sales records may be kept up to seven years where tax or accounting law requires it. Error logs are kept up to 90 days.",
        "To delete your account:",
        [
          "In the app: open Settings, choose Delete account, and confirm.",
          "By email: write to support@produceai.co from the email address on the account.",
        ],
        "We’ll confirm your request and delete or anonymize the account and its personal data within 30 days, except records the law makes us keep, such as tax-related sales records. Deleting a store owner’s account closes the store and removes its staff, shopper and store data the same way.",
        [
          "Store admins can archive staff, remove a staff member’s login email, and remove shopper records in the back office at any time.",
          "Shoppers should contact the store they shop at to see or delete their information. We’ll help the store respond.",
        ],
      ],
    },
    {
      title: "Your choices",
      body: [
        [
          "See, correct or get a copy of the information we hold about you.",
          "Take back your permission any time, by turning off camera, Bluetooth or photo access, or by unsubscribing from messages.",
          "Ask us to delete your account and personal data.",
          "Opt out of non-essential emails with the unsubscribe link.",
          "If you live in California or another U.S. state with privacy laws, you can use the rights those laws give you. We won’t treat you differently for doing so.",
        ],
      ],
    },
    {
      title: "Security",
      body: [
        "We protect data with encryption while it travels and while it’s stored, scrambled staff PINs, one-time email codes for new devices, access limited by role, and regular security reviews. No system is perfectly safe, but we work hard on it, and we’ll tell you about a data breach where the law requires.",
      ],
    },
    {
      title: "Children",
      body: [
        "This service is built for businesses, not for children under 13, and we don’t knowingly collect their information. If you think a child has given us information, tell us and we’ll delete it.",
      ],
    },
    {
      title: "Changes to this policy",
      body: [
        "If we update this policy, we’ll post the new version here with a new date, and tell you in the app or by email about any important changes.",
      ],
    },
  ],
};

export const TERMS: LegalDoc = {
  title: "Terms of Service",
  updated: "October 22, 2026",
  contactHeading: "Questions about these terms?",
  intro: [
    "These terms are an agreement between you and Produce AI POS Inc. (“we”, “us”) about using our register software, apps, web back office, hardware program and this website. By downloading, installing or using any of it, you agree to these terms.",
  ],
  sections: [
    {
      title: "Who this agreement is with",
      body: [
        "This agreement is only between you and Produce AI. It is not with Apple or Google. We, not Apple or Google, are responsible for the service and what’s in it.",
      ],
    },
    {
      title: "What you’re allowed to do",
      body: [
        "We give you a limited, non-exclusive, non-transferable license, which we can withdraw, to use the service for your store’s business. If you get our app from the Apple App Store, you can use it on Apple devices you own or control, as Apple’s rules allow.",
        [
          "Don’t copy, change, take apart or resell the service, its scale drivers or its software.",
          "Don’t use it for anything illegal or against card-network rules.",
          "Keep your login details safe. You’re responsible for everything done under your account.",
        ],
      ],
    },
    {
      title: "Your account and your data",
      body: [
        "Give us accurate information when you sign up. Your store data stays yours. You let us handle it only to provide the service, as our Privacy Policy explains. You can delete your account any time in the app.",
      ],
    },
    {
      title: "Free hardware program",
      body: [
        "Free hardware goes to qualified stores, first come, first served, and may come with a separate hardware agreement. Scale installation and calibration must follow your state and local weights-and-measures rules.",
      ],
    },
    {
      title: "Payments, EBT and WIC",
      body: [
        "You’re responsible for keeping your payment-processing account, your USDA EBT SNAP authorization and your state WIC approvals in good standing and following their rules. Subscription fees, if there are any, are billed as agreed when you sign up and aren’t refundable unless the law says otherwise.",
      ],
    },
    {
      title: "Help and support",
      body: [
        "We alone are responsible for maintenance and support of the service, as described here or as the law requires. Apple has no duty to provide support for the app.",
      ],
    },
    {
      title: "Warranty",
      body: [
        "To the fullest extent the law allows, the service is provided “as is” and “as available”. We alone are responsible for any product warranties that aren’t legally disclaimed.",
        "If the app doesn’t meet a warranty that applies, you can tell Apple and Apple will refund the purchase price, if any. Beyond that, Apple has no warranty duty for the app, and any other claims or losses from a failed warranty are our responsibility.",
      ],
    },
    {
      title: "Claims",
      body: [
        "We, not Apple, handle any claims from you or anyone else about the app or your use of it. That includes claims about product safety, claims that the app breaks a legal or regulatory rule, and claims under consumer-protection or privacy laws.",
      ],
    },
    {
      title: "Who owns what",
      body: [
        "The service, including its software, design, logos and content, belongs to Produce AI and is protected by law. If someone claims the app infringes their intellectual property, we, not Apple, will investigate, defend and settle that claim.",
      ],
    },
    {
      title: "Legal rules",
      body: [
        "You confirm that you’re not in a country under a U.S. Government embargo or listed as a “terrorist supporting” country, and that you’re not on any U.S. Government list of prohibited or restricted parties.",
      ],
    },
    {
      title: "Other companies’ terms",
      body: [
        "You must also follow the terms of other services you use with ours, such as your mobile data plan and your payment processor’s merchant agreement.",
      ],
    },
    {
      title: "Limits on our responsibility",
      body: [
        "As far as the law allows, we aren’t responsible for indirect or knock-on losses, such as lost profits, spoiled stock or time your business is interrupted. For any claim, the most we owe is what you paid us in the 12 months before it.",
      ],
    },
    {
      title: "Ending this agreement",
      body: [
        "You can stop using the service and delete your account any time. We can suspend or end your access if you break these terms. Parts of these terms that are meant to keep applying afterward will.",
      ],
    },
    {
      title: "Which law applies",
      body: ["These terms are governed by the laws of the State of New York, USA."],
    },
    {
      title: "Apple’s rights",
      body: [
        "You and we agree that Apple and its subsidiaries are third-party beneficiaries of these terms. Once you accept them, Apple can enforce them against you.",
      ],
    },
    {
      title: "Changes to these terms",
      body: [
        "If we update these terms, we’ll post the new version here with a new date. If you keep using the service after that, you accept the update.",
      ],
    },
  ],
};
