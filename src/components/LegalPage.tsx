import React, { useEffect } from 'react';

const CONTACT_EMAIL = 'sharmabhavya400@gmail.com';
const EFFECTIVE_DATE = 'October 22, 2026';

interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface LegalDocument {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  sections: LegalSection[];
}

const PRIVACY: LegalDocument = {
  eyebrow: 'DATA PRIVACY & PROTECTION',
  title: 'Privacy',
  accent: 'Policy.',
  intro:
    'This Privacy Policy explains what information Produce AI POS Inc. ("Produce AI", "we", "us") collects through the Produce AI POS apps, register software, web backoffice and this website (together, the "Service"), how we use it, who we share it with, how long we keep it, and the choices you have — including how to delete your data.',
  sections: [
    {
      title: 'Information We Collect',
      paragraphs: ['We only collect information needed to run your store\'s point of sale and backoffice:'],
      bullets: [
        'Account & Contact Information — business name, store address, owner and staff names, email address, phone number and login credentials you provide when you sign up or request hardware.',
        'Store & Transaction Data — sales, items, PLU codes, prices, weights, discounts, tender types, refunds, shift and cashier activity logs.',
        'Inventory & Vendor Data — products, stock levels, purchase prices and vendor invoices you scan or upload for AI digitization.',
        'Device & Diagnostic Data — device model, operating system, app version, scale and printer connection events, crash logs and performance data.',
        'Camera Access — used only when you choose to scan a barcode or vendor invoice. Images are processed for that purpose only.',
        'Website Data — information you submit through forms on this site, such as the hardware reservation form.'
      ]
    },
    {
      title: 'How We Collect Information',
      bullets: [
        'Directly from you when you create an account, fill out a form, or contact support.',
        'Automatically from the register, scale, scanner and app while you use the Service.',
        'From payment processors, limited to the transaction status and the last four digits of a card, for reconciliation.'
      ]
    },
    {
      title: 'How We Use Information',
      bullets: [
        'To provide, operate and maintain the POS, scale integration, offline sync and backoffice.',
        'To generate sales reports, Z-reports, profit dashboards and inventory updates for your store.',
        'To digitize vendor invoices you upload and update your cost and pricing records.',
        'To provide customer support, installation, scale calibration and hardware service.',
        'To detect, prevent and fix fraud, security incidents and technical problems.',
        'To comply with legal, tax, Weights & Measures and payment network obligations.'
      ]
    },
    {
      title: 'Payment Card Data',
      paragraphs: [
        'Produce AI POS does not store full card numbers, CVV codes or magnetic stripe data on registers or on our servers. Card payments are handled by PCI-DSS Level 1 certified payment terminals and processors. EBT SNAP and WIC transactions are routed through authorized benefit processors.'
      ]
    },
    {
      title: 'Sharing & Third Parties',
      paragraphs: [
        'We do not sell your data, and we do not share it with advertisers or data brokers. We share information only with service providers that help us run the Service — such as cloud hosting, payment processing, crash reporting and customer support tools — and only as needed to provide it.',
        'Every third party we share data with is bound by a written agreement to protect it with the same or equal protection as described in this policy, and to use it only to provide services to us. We may also disclose information when required by law, or as part of a merger or acquisition, with notice to you.'
      ]
    },
    {
      title: 'Tracking & Advertising',
      paragraphs: [
        'We do not track you across apps or websites owned by other companies, and we do not use your data for third-party advertising. We do not use the device advertising identifier (IDFA).'
      ]
    },
    {
      title: 'Data Retention & Deletion',
      paragraphs: [
        'We keep your account and store data for as long as your account is active. Transaction records may be kept for up to seven (7) years where tax or accounting law requires it. Diagnostic logs are kept for up to 90 days.',
        'You can delete your account at any time from within the app\'s account settings or by emailing us. When an account is deleted, we delete or anonymize the associated personal data within 30 days, except where we must keep certain records by law.'
      ]
    },
    {
      title: 'Your Rights & Choices',
      bullets: [
        'Access, correct or export the information we hold about you.',
        'Withdraw consent at any time — for example, turn off camera access in your device settings.',
        'Request deletion of your account and personal data.',
        'Opt out of non-essential emails using the unsubscribe link.',
        'California and other U.S. state residents may exercise the rights provided by applicable state privacy laws. We will not discriminate against you for exercising them.'
      ]
    },
    {
      title: 'Security',
      paragraphs: [
        'We protect data using TLS encryption in transit, encryption at rest, access controls and regular security reviews. No system is 100% secure, but we work to protect your information and will notify you of a data breach where required by law.'
      ]
    },
    {
      title: "Children's Privacy",
      paragraphs: [
        'The Service is built for businesses and is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has given us information, contact us and we will delete it.'
      ]
    },
    {
      title: 'Changes to This Policy',
      paragraphs: [
        'We may update this Privacy Policy from time to time. We will post the new version on this page with a new effective date, and notify you in the app or by email of any material changes.'
      ]
    }
  ]
};

const TERMS: LegalDocument = {
  eyebrow: 'LICENSE AGREEMENT',
  title: 'Terms of',
  accent: 'Service.',
  intro:
    'These Terms of Service (the "Terms") are a legal agreement between you and Produce AI POS Inc. ("Produce AI", "we", "us") for the use of the Produce AI POS apps, register software, web backoffice, hardware program and this website (together, the "Service"). By downloading, installing or using the Service, you agree to these Terms.',
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
            Effective Date: {EFFECTIVE_DATE}
          </p>
        </div>

        {/* Document Body */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3.5">
          <div className="reveal-on-scroll rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-[#121418]/80 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl p-5 sm:p-6 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
            {doc.intro}
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
                {section.paragraphs?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-5 space-y-1.5">
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
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
                Questions about this {type === 'privacy' ? 'Privacy Policy' : 'agreement'}?
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
