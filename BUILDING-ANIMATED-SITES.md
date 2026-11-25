# How to build a site like Nikxel (soft, bouncy, alive)

A step-by-step guide to the techniques behind <https://nixel-nine.vercel.app/>.
Everything here was found by reading that site's own HTML, CSS and JS, then
written as snippets you can drop into a **React + Tailwind** project (this
project is Vite + React + Tailwind 3, so the examples match).

> The look comes from **taste plus consistency**, not from heavy tech: one
> easing curve, one reveal pattern, one character, lots of whitespace.

---

## 1. The stack

| Piece | What Nikxel uses | What you need |
|---|---|---|
| Framework | Next.js (on Vercel) | Vite + React works the same |
| Styling | Tailwind CSS v4 + a few hand-written CSS rules | Tailwind 3 or 4 |
| Animation | Framer Motion (the `motion` package) | `npm i motion` |
| Scroll hero | Sticky section + JS-driven transform | `useScroll` from `motion/react` |
| Fonts | DM Sans (body) + Caveat (handwriting) | Google Fonts |
| Art | A pixel sprite sheet (`sprites.png`) | Any illustrated character or product image |

Install:

```bash
npm i motion
```

Import from `motion/react`:

```tsx
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
```

---

## 2. Design tokens (do this first)

Define the look once, in CSS variables. Everything else uses them.

```css
/* src/index.css */
:root {
  --paper: #f6faf5;          /* page background, slightly tinted, never pure white */
  --ink: #25302a;            /* text, never pure black */
  --muted: #5c6a60;
  --line: #d7e9d6;           /* hairline borders */
  --accent: #23864d;
  --blush: #e2f4d9;          /* soft hover/tint background */

  /* THE most important line: a spring that overshoots slightly */
  --spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* soft, tinted shadow, not grey */
  --shadow: 0 14px 34px rgba(60, 100, 70, 0.14), 0 1px 3px rgba(0, 0, 0, 0.04);
}
```

Rules that make it look "designed":
- Tint your background and text slightly. Avoid `#fff` and `#000`.
- Shadows are large, soft and low-opacity, tinted with the brand colour.
- Big headlines: weight 800, tracking about `-0.045em`, line-height about `1.0`.
- Use `clamp()` for fluid headings: `font-size: clamp(46px, 6vw, 92px)`.

---

## 3. Fonts

```html
<!-- index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Caveat:wght@600&display=swap" rel="stylesheet" />
```

Use the handwriting font **sparingly** (a note, an arrow label), never for body text.

---

## 4. The spring button (biggest feel upgrade, 5 minutes)

```css
.pill {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 15px 26px; border-radius: 999px;
  font-weight: 700; font-size: 17px;
  transition: transform 0.35s var(--spring);
}
.pill:hover  { transform: translateY(-2px) scale(1.04); }
.pill:active { transform: scale(0.97); }
```

Tailwind version:

```tsx
<button className="rounded-full px-6 py-4 font-bold transition-transform duration-[350ms]
  ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:scale-105 active:scale-[0.97]">
  Get started
</button>
```

Apply the same spring to cards (lift) and icons (small rotate).

---

## 5. Scroll reveal (one pattern, used everywhere)

Make one wrapper and use it for every section. Same motion everywhere is what
makes it feel premium.

```tsx
// src/components/Reveal.tsx
import { motion, useReducedMotion } from "motion/react";

export function Reveal({ children, delay = 0, y = 48, className }:
  { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.08, once: true }}   // Nikxel uses once:false (replays); true is calmer
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

Use: `<Reveal><h2>…</h2></Reveal>`, with `delay={0.1}` to stagger siblings.

Also add a no-JS fallback so content never stays hidden:

```html
<noscript><style>[data-reveal]{opacity:1!important;transform:none!important}</style></noscript>
```

---

## 6. Load-in animation for the hero (pure CSS)

```css
@keyframes enter {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: none; }
}
.enter { animation: enter 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; animation-delay: var(--d, 0s); }
```

```tsx
<h1 className="enter" style={{ "--d": "0.08s" } as React.CSSProperties}>…</h1>
<p  className="enter" style={{ "--d": "0.16s" } as React.CSSProperties}>…</p>
```

---

## 7. The sticky hero where a window slides up over the headline

This is the signature scroll moment. Structure:

- Outer section is tall (about `210vh`).
- Inner block is `position: sticky; top: 0; height: 100vh`, so the headline stays put.
- The big image/window starts below the fold and moves up as you scroll.

```tsx
// src/components/StickyHero.tsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function StickyHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // 0 → 1 as you scroll through the section; map it to a vertical position
  const y = useTransform(scrollYProgress, [0, 1], ["100%", "-5%"]);

  return (
    <section ref={ref} className="relative h-[210vh]">
      <div className="sticky top-0 grid h-screen justify-items-center overflow-x-clip pt-32">
        <div className="px-5 text-center">
          <h1 className="text-[clamp(46px,6vw,92px)] font-extrabold leading-[0.98] tracking-[-0.05em]">
            Your headline here
          </h1>
        </div>

        <motion.div
          style={{ y }}
          className="absolute left-1/2 top-0 w-[min(1100px,88vw)] -translate-x-1/2 will-change-transform"
        >
          <img src="/images/your-product-screenshot.png" alt="" className="w-full rounded-2xl shadow-[var(--shadow)]" />
        </motion.div>
      </div>
    </section>
  );
}
```

**Important:** turn it off on phones. Nikxel switches to a plain layout on small
screens:

```css
@media (max-width: 767px) {
  .hero { height: auto; }
  .hero-sticky { position: relative; height: auto; }
  /* and render the image as a normal block (no absolute, no y transform) */
}
```

---

## 8. A character or mascot (what gives it personality)

Nikxel's feel comes from a small animated character. Use whatever fits your brand
(a mascot, an illustrated product, a logo mark). Two approaches:

**A. Sprite sheet (frames in one PNG)**, switch the background position:

```tsx
function Sprite({ frame = 0, size = 128 }: { frame?: number; size?: number }) {
  return (
    <div
      role="img"
      aria-label="Mascot"
      style={{
        width: size, height: size,
        backgroundImage: "url(/sprites.png)",
        backgroundSize: `${size * 4}px ${size * 10}px`,   // 4 frames wide, 10 moods tall
        backgroundPosition: `-${frame * size}px 0px`,
        imageRendering: "pixelated",                       // keeps pixel art crisp
      }}
    />
  );
}
```

**B. CSS keyframes** for idle motion:

```css
@keyframes hop-loop { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
.hopper { animation: hop-loop 3.4s ease-in-out infinite; }
```

React to input (click, drag, typing) by changing the `frame`, the way Nikxel's
playground section does.

---

## 9. Hand-drawn wobble on edges (optional, signature detail)

An SVG filter bends edges slightly so shapes look hand-made. Put this once near
the top of `<body>`:

```html
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <filter id="wobs">
    <feTurbulence type="fractalNoise" baseFrequency=".03" numOctaves="2" seed="9" />
    <feDisplacementMap in="SourceGraphic" scale="3" />
  </filter>
</svg>
```

Apply it to a **background layer** only, so the text isn't distorted:

```css
.pill { position: relative; isolation: isolate; }
.pill::before {
  content: ""; position: absolute; inset: 0; z-index: -1; border-radius: inherit;
  background: #fff; box-shadow: inset 0 0 0 1.5px var(--line), 0 8px 22px rgba(60,100,70,.12);
  filter: url(#wobs);
}
```

Skip this for serious or corporate brands.

---

## 10. Floating pill navbar

```tsx
<header className="fixed left-1/2 top-3.5 z-50 flex w-[min(1240px,calc(100%-32px))] -translate-x-1/2
  items-center justify-between rounded-full bg-white/80 py-2 pl-3 pr-2.5 backdrop-blur-lg
  shadow-[0_10px_30px_rgba(60,100,70,.1),inset_0_0_0_1px_#e1eee0]">
  {/* logo · links · button */}
</header>
```

Nav links are plain pills that tint on hover (`transition: background .2s`).

---

## 11. Custom cursor (optional, small touch)

Build the cursor from tiny SVG squares so it matches the pixel art, then set it
as a CSS variable:

```css
:root { --cursor-arrow: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='38' shape-rendering='crispEdges'>…rects…</svg>") 0 0, auto; }
body { cursor: var(--cursor-arrow); }
```

Make sure the cursor stays visible on every background.

---

## 12. Accessibility and performance (don't skip)

- **Reduced motion:** the `Reveal` component already checks `useReducedMotion()`.
  For CSS, add:
  ```css
  @media (prefers-reduced-motion: reduce) { .enter, .hopper { animation: none; } }
  ```
- Animate only `transform` and `opacity` where possible.
- Add `will-change: transform` only to the one element that moves on scroll.
- Give images `width`/`height` (or `aspect-ratio`) so nothing jumps while loading.
- Keep color contrast at 4.5:1 or better for text.
- Give every interactive element a visible `:focus-visible` outline.

---

## 13. Build order (follow this)

1. Set tokens (colors, `--spring`, shadow) and fonts. (Sections 2–3)
2. Build the page in plain static form first, with all sections and copy.
3. Add the spring buttons and hover states. (Section 4)
4. Add `Reveal` to every section. (Section 5)
5. Add the hero load-in. (Section 6)
6. Add the sticky scroll hero, with the mobile fallback. (Section 7)
7. Add your mascot or character and one interactive section. (Section 8)
8. Optional: wobble, cursor, floating nav. (Sections 9–11)
9. Test: reduced motion, phone width, slow connection. (Section 12)

---

## 14. Rules that keep it looking good

- **One** easing curve and **one** reveal pattern across the whole site.
- **One** "big" scroll moment. Everything else stays quiet.
- Lots of whitespace, with section padding of 120px or more on desktop.
- Motion should help understanding; skip it if it doesn't.
- Don't copy another site's code, pictures or character. Learn the techniques,
  then make your own art and copy.

---

## Quick reference: what Nikxel actually ships

- Spring: `cubic-bezier(.34,1.56,.64,1)`
- Reveal: fade + 48px rise, 0.8s, ease `[.22,1,.36,1]`, triggers at 8% visible
- Hero load-in: 0.8s, ease `cubic-bezier(.22,1,.36,1)`, staggered by `--d`
- Hero scroll: `210vh` section, sticky inner block, window starts at `top:100%`
- Button hover: `translateY(-2px) scale(1.04)`, press `scale(.97)`
- Mascot idle: hop loop 3.4s `ease-in-out`
- Headline: weight 800, tracking `-0.045em`, line-height about `1.0`
