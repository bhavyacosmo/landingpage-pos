import React, { useEffect } from 'react';

const CONTACT_EMAIL = 'privacy@producepos.app';

// A paragraph (string) or a bulleted list (string[])
type LegalBlock = string | string[];

interface LegalSection {
  title: string;
  // Content in display order; used instead of paragraphs/bullets/closing when set
  blocks?: LegalBlock[];
  paragraphs?: string[];
  bullets?: string[];
  closing?: string;
}

const sectionBlocks = (section: LegalSection): LegalBlock[] =>
  section.blocks ?? [
    ...(section.paragraphs ?? []),
    ...(section.bullets ? [section.bullets] : []),
    ...(section.closing ? [section.closing] : [])
  ];

interface LegalDocument {
  eyebrow: string;
  title: string;
  accent: string;
  effectiveDate: string;
  intro: string[];
  sections: LegalSection[];
}

const PRIVACY: LegalDocument = {
  eyebrow: 'DATA PRIVACY & PROTECTION',
  title: 'Privacy',
  accent: 'Policy.',
  effectiveDate: 'November 4, 2026',
  intro: [
    'This Privacy Policy explains what information Produce AI POS Inc. ("Produce AI", "we", "us") collects through the Produce AI POS mobile apps, register software, web backoffice and this website (together, the "Service"), how we use it, who we share it with, how long we keep it, and the choices you have, including how to delete your account and data.',
    'The Service is used by businesses ("Stores"). Stores enter information about their staff and their own customers into the Service. For that information, the Store decides what is collected and why, and we process it on the Store\'s behalf. If you are a customer of a Store, please contact that Store about your information.'
  ],
  sections: [
    {
      title: 'Information We Collect',
      blocks: [
        'We only collect information needed to run a Store\'s point of sale and backoffice:',
        [
          'Account & Contact Information: business name, store name, store address, store type, owner name, email address, phone number and the details you provide when you create a store, sign up or request hardware.',
          'Sign-in Information: the email address you use to sign in, and the one-time codes we send to it to verify a device. Staff members can be given a login email by their Store\'s administrator so they can sign in on their own device.',
          'Staff Information: staff names, roles, access levels and permissions, sign-in PINs (stored only in hashed form, never in plain text), time-clock entries recorded when staff sign in and out, and activity logs of actions taken in the Service.',
          'Store Customer Information (entered by the Store): customer name, phone number, email address, business address, tax ID, tax-exemption certificates, loyalty membership and points, purchase history, store credit or customer loan balances, and marketing preferences.',
          'Store & Transaction Data: sales, items, PLU codes, prices, weights, discounts, promotions, tender types, refunds, returns, held orders, shift and cashier activity.',
          'Inventory & Vendor Data: products, stock levels, purchase prices, shrinkage records, vendors and the vendor invoices you scan or upload.',
          'Files & Photos You Choose: invoice photos and documents (PDF, CSV, XLSX), tax-exemption certificates, product and label images, and advertising images or videos for customer displays. We only receive files you select.',
          'Device & Diagnostic Data: device model, operating system, app version, printer, scale and scanner connection events, and error and performance information.',
          'Website Data: information you submit through forms on this website, such as the hardware reservation form.'
        ]
      ]
    },
    {
      title: 'Device Permissions',
      blocks: [
        'The app asks for these permissions only when a feature needs them:',
        [
          'Camera: to scan barcodes and photograph vendor invoices, only when you open the scanner. Images are used only for that purpose.',
          'Photos & Files: to attach invoice images, tax-exemption certificates and advertising media you choose.',
          'Bluetooth & Local Network: to find and print on label printers and connect to store hardware on your store\'s network.',
          'Location (Android 11 and earlier only): Android requires this permission to search for nearby Bluetooth printers. We do not collect, store or share your location.',
          'Built-in Barcode Scanners: on handheld devices, the app reads scans from the device\'s scanner only while the app is open.'
        ],
        'You can turn off any permission in your device settings. The related feature will stop working until it is turned back on.'
      ]
    },
    {
      title: 'How We Collect Information',
      blocks: [
        [
          'Directly from you when you create a store or account, verify your email, add staff or customers, upload files, fill out a form, or contact support.',
          'Automatically from the register, scale, scanner, printer and app while you use the Service.',
          'From payment processors, limited to the transaction status and the last four digits of a card, for reconciliation.'
        ]
      ]
    },
    {
      title: 'How We Use Information',
      blocks: [
        [
          'To provide, operate and maintain the POS, scale and printer integration, offline sync and backoffice.',
          'To create your store, verify your email with one-time codes, and link your devices to your store.',
          'To sign staff in, apply their roles and permissions, and keep time-clock and activity records.',
          'To generate sales reports, Z-reports, profit dashboards and inventory updates for the Store.',
          'To read vendor invoices you upload and update cost and pricing records.',
          'To run the Store\'s promotions and loyalty program and send the marketing messages the Store creates (see Section 05).',
          'To provide customer support, installation, scale calibration and hardware service.',
          'To detect, prevent and fix fraud, security incidents and technical problems.',
          'To comply with legal, tax, Weights & Measures and payment network obligations.'
        ]
      ]
    },
    {
      title: 'Store Customers & Marketing Messages',
      blocks: [
        'Stores can use the Service to manage their customers and send SMS, email or WhatsApp messages about offers and their loyalty program.',
        [
          'Messages are sent only on the Store\'s instructions and only to customers who have agreed to receive them. The Store is responsible for collecting that consent.',
          'Customers can stop SMS messages by replying STOP, and can unsubscribe from emails using the link in each email. They can also ask the Store to remove them.',
          'We do not use Store customer information to market our own products, and we never sell it.'
        ]
      ]
    },
    {
      title: 'AI Processing',
      blocks: [
        'When you scan or upload a vendor invoice, the file is processed by artificial intelligence to read the vendor, invoice number, items and prices, so you can review and save them. Files are used only to read that invoice. Nothing is saved to your records until you confirm it.'
      ]
    },
    {
      title: 'Payment Card Data',
      blocks: [
        'Produce AI POS does not store full card numbers, CVV codes or magnetic stripe data on registers, devices or our servers. Card payments are handled by PCI-DSS Level 1 certified payment terminals and processors. EBT SNAP and WIC transactions are routed through authorized benefit processors.'
      ]
    },
    {
      title: 'Sharing & Third Parties',
      blocks: [
        'We do not sell your data, and we do not share it with advertisers or data brokers. We share information only with service providers that help us run the Service, and only as needed to provide it:',
        [
          'Cloud hosting and database providers',
          'Payment and benefit (EBT/WIC) processors',
          'AI service providers, for invoice reading (Section 06)',
          'Email providers, to deliver one-time sign-in codes',
          'Messaging providers for SMS, email and WhatsApp (Section 05)',
          'Google Fonts, which delivers the app\'s fonts and receives the device\'s IP address when fonts are downloaded',
          'Error reporting and customer support tools'
        ],
        'Every third party we share data with is bound by a written agreement to protect it with the same or equal protection as described in this policy, and to use it only to provide services to us. We may also disclose information when required by law, or as part of a merger or acquisition, with notice to you.'
      ]
    },
    {
      title: 'Data Stored on Your Device',
      blocks: [
        'The app keeps two items in your device\'s encrypted storage (Keychain on iOS, encrypted storage on Android):',
        [
          'A sign-in token, so staff stay signed in. It is removed when you sign out, and it expires on its own.',
          'A device pairing token and your store\'s ID, saved after you verify your email once, so staff can sign in on this device with their PIN. It is removed when you choose "Sign in with a different email" or delete your account in the app. On iOS, Keychain items can remain on the device after the app is uninstalled until they are removed this way.'
        ],
        'The app also stores settings such as printer, display and layout preferences on the device. Apart from the iOS Keychain items described above, uninstalling the app removes this information from the device.'
      ]
    },
    {
      title: 'Tracking & Advertising',
      blocks: [
        'We do not track you across apps or websites owned by other companies, and we do not use your data for third-party advertising. We do not use the device advertising identifier (IDFA / Android Advertising ID). The app contains no advertising or analytics SDKs.'
      ]
    },
    {
      title: 'Data Retention & Deletion',
      blocks: [
        'We keep the Store\'s account and store data for as long as the account is active. Transaction records may be kept for up to seven (7) years where tax or accounting law requires it. Diagnostic logs are kept for up to 90 days.',
        'How to delete your account:',
        [
          'In the app: open Settings and choose Delete account. You will be asked to confirm.',
          `By email: write to ${CONTACT_EMAIL} from the email address on the account.`
        ],
        'We will confirm the request and delete or anonymize the account and its associated personal data within 30 days, except records we must keep by law (such as transaction records required for tax purposes). Deleting a store owner\'s account closes the Store and deletes its staff, customer and store data on the same terms.',
        [
          'Staff and customers: Store administrators can archive staff users, remove a staff member\'s login email, and remove customer records in the backoffice at any time.',
          'Store customers: if you are a customer of a Store, contact that Store to access or delete your information. We will help the Store respond.'
        ]
      ]
    },
    {
      title: 'Your Rights & Choices',
      blocks: [
        [
          'Access, correct or export the information we hold about you.',
          'Withdraw consent at any time, for example by turning off camera, Bluetooth or photo access in your device settings, or by unsubscribing from messages.',
          'Request deletion of your account and personal data (Section 11).',
          'Opt out of non-essential emails using the unsubscribe link.',
          'California and other U.S. state residents may exercise the rights provided by applicable state privacy laws. We will not discriminate against you for exercising them.'
        ]
      ]
    },
    {
      title: 'Security',
      blocks: [
        'We protect data using TLS encryption in transit, encryption at rest, hashed staff PINs, one-time email codes to verify new devices, role-based access controls and regular security reviews. No system is 100% secure, but we work to protect your information and will notify you of a data breach where required by law.'
      ]
    },
    {
      title: "Children's Privacy",
      blocks: [
        'The Service is built for businesses and is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has given us information, contact us and we will delete it.'
      ]
    },
    {
      title: 'Changes to This Policy',
      blocks: [
        'We may update this Privacy Policy from time to time. We will post the new version on this page with a new effective date, and notify you in the app or by email of any material changes.'
      ]
    }
  ]
};

const TERMS: LegalDocument = {
  eyebrow: 'LICENSE AGREEMENT',
  title: 'Terms of',
  accent: 'Service.',
  effectiveDate: 'October 22, 2026',
  intro: [
    'These Terms of Service (the "Terms") are a legal agreement between you and Produce AI POS Inc. ("Produce AI", "we", "us") for the use of the Produce AI POS apps, register software, web backoffice, hardware program and this website (together, the "Service"). By downloading, installing or using the Service, you agree to these Terms.'
  ],
  sections: [
    {
      title: 'Acknowledgement',
      paragraphs: [
        'These Terms are concluded between you and Produce AI only, and not with Apple Inc. or Google LLC. Produce AI, not Apple, is solely responsible for the Service and its content.'
      ]
    },
    {
      title: 'License Grant',
      paragraphs: [
        'Subject to these Terms and payment of any applicable fees, we grant you a limited, non-exclusive, non-transferable, revocable license to use the Service for your store\'s business operations. If you download our app from the Apple App Store, you may use it on any Apple-branded products that you own or control, as permitted by the Usage Rules in the Apple Media Services Terms and Conditions.'
      ],
      bullets: [
        'You may not copy, modify, reverse-engineer, decompile or resell the Service, its scale drivers or its software.',
        'You may not use the Service for any illegal purpose or in violation of payment network rules.',
        'You are responsible for keeping your login credentials secure and for all activity under your account.'
      ]
    },
    {
      title: 'Accounts & Store Data',
      paragraphs: [
        'You must provide accurate information when creating an account. You keep ownership of your store data. You grant us permission to process it only to provide the Service, as described in our Privacy Policy. You may delete your account at any time from within the app.'
      ]
    },
    {
      title: 'Free Hardware Program',
      paragraphs: [
        'Hardware provided under the Free Hardware Package is offered to qualified stores on a first-come, first-served basis and may be subject to a separate hardware agreement. Scale installation and calibration must comply with state and local Weights & Measures regulations.'
      ]
    },
    {
      title: 'Payments, EBT & WIC',
      paragraphs: [
        'You are responsible for maintaining valid merchant processing accounts, USDA EBT SNAP authorization and state WIC approvals, and for complying with their rules. Subscription fees, if any, are billed as agreed when you sign up and are non-refundable except where required by law.'
      ]
    },
    {
      title: 'Maintenance & Support',
      paragraphs: [
        'Produce AI is solely responsible for providing maintenance and support for the Service, as described in these Terms or as required by law. Apple has no obligation whatsoever to provide any maintenance or support services for the app.'
      ]
    },
    {
      title: 'Warranty',
      paragraphs: [
        'The Service is provided "as is" and "as available" to the maximum extent permitted by law. Produce AI is solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed.',
        'If the app fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any) for the app to you. To the maximum extent permitted by law, Apple will have no other warranty obligation with respect to the app, and any other claims, losses, liabilities, damages, costs or expenses attributable to a failure to conform to any warranty are Produce AI\'s sole responsibility.'
      ]
    },
    {
      title: 'Product Claims',
      paragraphs: [
        'Produce AI, not Apple, is responsible for addressing any claims by you or any third party relating to the app or your possession and use of it, including: (i) product liability claims; (ii) any claim that the app fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection, privacy or similar legislation.'
      ]
    },
    {
      title: 'Intellectual Property',
      paragraphs: [
        'The Service, including its software, design, logos and content, is owned by Produce AI and protected by intellectual property laws. In the event of any third-party claim that the app or your use of it infringes that third party\'s intellectual property rights, Produce AI, not Apple, will be solely responsible for the investigation, defense, settlement and discharge of that claim.'
      ]
    },
    {
      title: 'Legal Compliance',
      paragraphs: [
        'You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.'
      ]
    },
    {
      title: 'Third-Party Terms',
      paragraphs: [
        'You must comply with applicable third-party terms of agreement when using the Service, such as your wireless data service agreement and your payment processor\'s merchant agreement.'
      ]
    },
    {
      title: 'Limitation of Liability',
      paragraphs: [
        'To the maximum extent permitted by law, Produce AI will not be liable for any indirect, incidental, special, consequential or punitive damages, including lost profits, inventory spoilage or business interruption. Our total liability for any claim will not exceed the fees you paid us in the twelve (12) months before the claim.'
      ]
    },
    {
      title: 'Termination',
      paragraphs: [
        'You may stop using the Service and delete your account at any time. We may suspend or terminate your access if you violate these Terms. Sections that by their nature should survive termination will survive.'
      ]
    },
    {
      title: 'Governing Law',
      paragraphs: [
        'These Terms are governed by the laws of the State of New York, USA, without regard to its conflict-of-law rules.'
      ]
    },
    {
      title: 'Third-Party Beneficiary',
      paragraphs: [
        'You and Produce AI acknowledge and agree that Apple and Apple\'s subsidiaries are third-party beneficiaries of these Terms, and that, upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary.'
      ]
    },
    {
      title: 'Changes to These Terms',
      paragraphs: [
        'We may update these Terms from time to time. We will post the new version on this page with a new effective date. Continued use of the Service after changes means you accept the updated Terms.'
      ]
    }
  ]
};

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const doc = type === 'privacy' ? PRIVACY : TERMS;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'} | Produce AI POS`;
  }, [type]);

  return (
    <section className="w-full py-16 sm:py-24 md:py-28 bg-[#fafaf9] dark:bg-[#090b0e] border-b border-neutral-200 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">

        {/* Page Header */}
        <div className="reveal-on-scroll mb-10 sm:mb-14 text-center max-w-2xl mx-auto">
          <div className="text-[11px] font-mono-telemetry uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold mb-2">
            {doc.eyebrow}
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black dark:text-white uppercase leading-tight">
            {doc.title} <span className="text-emerald-600 dark:text-emerald-400">{doc.accent}</span>
          </h1>
          <p className="mt-4 text-[11px] font-mono-telemetry uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Effective Date: {doc.effectiveDate}
          </p>
        </div>

        {/* Document Body */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3.5">
          <div className="reveal-on-scroll rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-[#121418]/80 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl p-5 sm:p-6 flex flex-col gap-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
            {doc.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {doc.sections.map((section, idx) => (
            <div
              key={section.title}
              className="reveal-on-scroll rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-[#121418]/80 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl p-5 sm:p-6"
            >
              <div className="flex flex-col gap-1 mb-3">
                <span className="text-[10px] font-mono-telemetry uppercase text-emerald-700 dark:text-emerald-400 font-bold">
                  Section {String(idx + 1).padStart(2, '0')}
                </span>
                <h2 className="text-sm sm:text-base font-bold text-black dark:text-white tracking-tight">
                  {section.title}
                </h2>
              </div>
              <div className="flex flex-col gap-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
                {sectionBlocks(section).map((block, blockIdx) =>
                  typeof block === 'string' ? (
                    <p key={blockIdx}>{block}</p>
                  ) : (
                    <ul key={blockIdx} className="list-disc pl-5 space-y-1.5">
                      {block.map((b) => {
                        // Bold a leading "Label:" so labelled items scan easily
                        const match = b.match(/^([A-Z][^:]{0,60}):\s(.*)$/s);
                        return (
                          <li key={b}>
                            {match ? (
                              <>
                                <span className="font-semibold text-black dark:text-white">{match[1]}:</span> {match[2]}
                              </>
                            ) : (
                              b
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )
                )}
              </div>
            </div>
          ))}

          {/* Contact Card */}
          <div className="reveal-on-scroll rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-[#121418]/80 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl p-5 sm:p-6">
            <div className="flex flex-col gap-1 mb-3">
              <span className="text-[10px] font-mono-telemetry uppercase text-emerald-700 dark:text-emerald-400 font-bold">
                Contact Us
              </span>
              <h2 className="text-sm sm:text-base font-bold text-black dark:text-white tracking-tight">
                {type === 'privacy' ? 'Questions about this Privacy Policy or a deletion request?' : 'Questions about this agreement?'}
              </h2>
            </div>
            <div className="flex flex-col gap-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
              <p>Produce AI POS Inc., 3508 White Plains Rd, Bronx, NY, USA</p>
              <p>
                Email:{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:3472130687" className="font-mono-telemetry text-black dark:text-white font-semibold">
                  (347) 213-0687
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
