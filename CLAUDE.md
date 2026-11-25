# Produce AI POS: landing site (project context)

Handoff from the redesign session (Nov 2026). Read this first in any new chat.

## What this is
Product showcase site for **Produce AI POS**, a grocery / fresh-produce point of sale (software + free hardware kit).
Main action everywhere: **"Get free hardware"** (opens lead modal). Phone (347) 213-0687, support@produceai.co,
3508 White Plains Rd, Bronx NY. These come from the client's live site https://www.produceai.co/ (keep as is).

## Stack
React 18 + Vite + TypeScript + Tailwind 3 + GSAP (ScrollTrigger) + lucide-react.
- `npm run dev` -> http://localhost:3000   (`npm run build` = tsc + vite build, output `dist/`, git-ignored)
- Routes are path-based inside `src/App.tsx`: `/`, `/privacy-policy`, `/terms-of-service`, `/contact`.
- Remote: github.com/choudharyprince03/stitch_produce_pos_landing_page--1- (branch `main`).
  Last pushed commit: redesign (510259d). Legal/contact rewrite + this file are NOT pushed yet unless git log says otherwise.

## Brand and look (decided)
- Brand: black + neon green **#31e327** (from the client's brand guidelines). Logos in `public/images/brand/`
  (`logo-on-dark.svg`, `logo-on-light.svg`, `app-icon.*`). Brand source files: `~/Downloads/ALL- ASSETS  2/`.
- Tokens: ink `#07080a`, panel `#0e100e`, neon `#31e327`, paper `#f1f0ea`, readable green on light `#14a50f`.
- Type: Rethink Sans (heavy display + UI), Instrument Serif italic only as an accent on a few headline words,
  Fragment Mono for small data labels.
- Direction the user asked for: **minimalist, lots of whitespace, few words, direct plain copy, not "AI-made" looking,
  fully responsive.** Headings state the point plainly. Don't add copy back. Don't add cards/gradients for decoration.
- Built under the `design-taste-frontend` skill rules: no caption under images, no invented stats/reviews,
  hover = lift 2px / photo zoom 1.03 / buttons step + press, nothing animates on scroll except the two authored
  moments (pinned "Four screens, one system" section and the big "Free scale / Free printer / Free cash drawer" text pass).
  UI-mock numbers inside the live screens are demo data only.

## Files
- `src/App.tsx` page assembly + lead modal.
- `src/components/site/`  Navbar, Hero (+Marquee), Story (pinned scroll), Features (2x2 live cards), Hardware, SpecsFaq, Footer (`compact` on legal/contact), `screens.tsx` (live HTML POS screens), `hooks.ts`.
- `src/components/vori/` LegalPage (sticky index + scroll-spy), ContactPage, LeadForm, BookDemoModal, legalContent.ts (privacy + terms text, condensed), VoriLogo.
- `src/media.ts` **the image slots** (see below). `src/index.css` tokens, buttons, keyframes.
- Old unused components remain in `src/components/*.tsx` and `.backup-before-minimal/`. Safe to ignore/delete later.
- `.impeccable/config.json` design-hook ignores (fonts: Rethink Sans, Instrument Serif, Fragment Mono, chosen on purpose; `DESIGN.md` is a stale Stitch export).

## Image workflow (NEXT STEP)
The user will supply RAW images of the hardware and the POS screens. Task for the next chat:
1. Raw files go in `raw-images/` (never edit originals).
2. Clean / improve (crop, straighten, exposure, remove clutter, upscale) and, where a shot is missing, generate it
   with the **nanobanana** MCP (`claude mcp list` showed `nanobanana: npx -y @nanobanana/mcp` connected; it may need
   a fresh session / `/mcp` to appear as tools). Abracadabrax and Canva image tools also exist (credits / auth).
   Keep generated hardware faithful to the user's real devices; ask before inventing product details.
3. Export finished files to `public/images/slots/` (web-sized: JPG/WebP, <= ~400 KB each; transparent PNG/WebP for hero cut-out).
4. Wire each file by setting its path in `src/media.ts` (`MEDIA`). Anything left `null` keeps its stand-in.
5. Rebuild, screenshot at 1440 and 390, and check nothing is cropped badly. Then tell the user; push only when asked.

### Slot map (where each image appears)
| MEDIA key | Where | Size / ratio | Notes |
|---|---|---|---|
| `heroHardware` | Hero, right side, replaces the live terminal | ~1600x1200, transparent PNG/WebP, whole POS setup (terminal + scale + printer), shown ~700px wide | no caption; dark page, so soft shadow only |
| `screens.checkout` | Scroll story, chapter 01 "Register" | 16:10 (900x560), min 1600px wide | real POS screen capture, shown in device frame |
| `screens.invoice` | Chapter 02 "Pricebook" | 16:10 | invoice reader / pricebook screen |
| `screens.backoffice` | Chapter 03 "Back office" | 16:10 | web dashboard |
| `hardware.scale` | Free kit card 01 "POS scale" | 4:3, min 1200px | NTEP scanner scale |
| `hardware.printer` | Free kit card 02 "Thermal receipt printer" | 4:3 | |
| `hardware.drawer` | Free kit card 03 "Cash drawer" | 4:3 | current stand-in is the whole setup, replace with a drawer shot |
| `hardware.customerDisplay` | Available to buy: "Customer display & PIN pad" | 4:3 | |
| `hardware.handheld` | Available to buy: "Handheld scanner" | 4:3 | |
| `hardware.shelfTags` | Available to buy: "Electronic shelf tags" | 4:3 | |
| `storeLane` | Closing section background (darkened, grayscale, 22% opacity) | wide, 2400px | a real store lane |

Current stand-ins are AI-generated placeholders in `public/images/*.jpg`; replace, then delete unused ones.
Alt text: describe the device, not marketing. No captions under images (house rule).

## Open items / ideas
- Replace all stand-in photos; add real POS screen captures (then the live HTML screens only remain in hero + features).
- Hero image decision: if the user's hardware shot is strong, use `heroHardware`; otherwise keep the live screen.
- Lead form (`LeadForm.tsx`) only shows a thank-you state; it does not send anywhere yet. Needs an endpoint (ask user: Formspree, email service, their backend).
- Not run: skill's `consistency.mjs` / `check.mjs` / `perf.mjs` (they expect the plain-HTML starter). Only screenshots via `shoot.mjs` were reviewed (1440 and 390). 1024/820/768 not reviewed.
- Reduced-motion and hover states were coded but not browser-tested.
- Scroll story runs all three screen loops at once on desktop; could pause the inactive ones.
