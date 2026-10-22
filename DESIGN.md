---
name: Warm Editorial Botanical
colors:
  surface: '#faf9f3'
  surface-dim: '#dbdad4'
  surface-bright: '#faf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ee'
  surface-container: '#efeee8'
  surface-container-high: '#e9e8e2'
  surface-container-highest: '#e3e3dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#424843'
  inverse-surface: '#30312d'
  inverse-on-surface: '#f2f1eb'
  outline: '#727973'
  outline-variant: '#c1c8c2'
  surface-tint: '#456553'
  primary: '#032517'
  on-primary: '#ffffff'
  primary-container: '#1b3b2b'
  on-primary-container: '#83a590'
  inverse-primary: '#abcfb8'
  secondary: '#006c4a'
  on-secondary: '#ffffff'
  secondary-container: '#82f5c1'
  on-secondary-container: '#00714e'
  tertiary: '#351800'
  on-tertiary: '#ffffff'
  tertiary-container: '#542a00'
  on-tertiary-container: '#ea841a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c7ebd4'
  primary-fixed-dim: '#abcfb8'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#2d4d3c'
  secondary-fixed: '#85f8c4'
  secondary-fixed-dim: '#68dba9'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#faf9f3'
  on-background: '#1b1c19'
  surface-variant: '#e3e3dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 4.5rem
    fontWeight: '600'
    lineHeight: 4.75rem
    letterSpacing: -0.025em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 2.75rem
    fontWeight: '600'
    lineHeight: 3rem
    letterSpacing: -0.02em
  display-md:
    fontFamily: Playfair Display
    fontSize: 3.25rem
    fontWeight: '600'
    lineHeight: 3.5rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 2.25rem
    fontWeight: '500'
    lineHeight: 2.625rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 1.875rem
    letterSpacing: -0.01em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: 1.5rem
    letterSpacing: '0'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: '0'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.6875rem
    fontWeight: '700'
    lineHeight: 0.875rem
    letterSpacing: 0.14em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3.5rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system embodies an organic, intellectual, and human-centered aesthetic. It balances the literary heritage of high-end editorial publications with the modern restraint of digital-native consultancies and boutique software platforms. 

The visual tone is warm, deliberate, and grounded. Rather than cold corporate starkness or sterile tech grays, the interface leverages tactile warmth—evoking linen stationary, unbleached cotton paper, and deep botanical foliage. The experience feels grounded yet forward-looking, establishing immediate credibility, thoughtful care, and relaxed sophistication.

The design movement combines **Minimalist Editorial** with **Organic Tactility**:
- Crisp, oversized editorial display serifs paired with disciplined, geometric sans-serif body type.
- Soft canvas backdrops with faint, structural micro-dot grid textures.
- Gentle, low-contrast structural dividers and pill badges that soften rigorous typographic grids.

## Colors

The palette establishes warmth and organic authority through deep forest pigments and tactile neutral substrates:

- **Primary (`#1B3B2B`)**: Deep Pine / Forest Emerald. Serves as the primary anchor for dominant titles, prominent pill buttons, solid interactive states, and core iconography. Replaces standard harsh blacks to create an organic, ink-on-paper depth.
- **Secondary (`#059669`)**: Vibrant Spring Foliage. Used for accents, badges, key interactive highlights, status signifiers, and micro-illustrations.
- **Tertiary (`#D97706`)**: Warm Terracotta / Amber. Applied sparingly for subtle category eyebrow tags, highlights, and contextual notifications.
- **Neutral Surface (`#F7F6F0`)**: Warm Oat / Cream. The canvas backdrop that sets an inviting, physical feel. Accompanied by `#FFFFFF` for elevated foreground cards and `#E5E2D9` for delicate low-contrast borders.
- **Neutral Dark (`#232D27` / `#163323`)**: Botanical Charcoal for high-legibility body copy and subheadings.

Color tokens should avoid harsh black (`#000000`) and pure cold gray (`#F3F4F6`), preserving warmth throughout all interaction states.

## Typography

The typography system pairs high-character editorial presence with functional UI readability. 

- **Display & Large Headlines (`Playfair Display`)**: Conveys literary depth and authority. Headings feature tight letterforms with graceful ligatures and curved descenders, drawing direct inspiration from classical typesetting and high-end print mastheads.
- **Body & Functional UI (`Plus Jakarta Sans`)**: Delivers clear legibility, geometric balance, and an approachable rhythm. Its wide apertures and soft curves complement the warmth of the background.
- **Category Labels & Metadata (`label-caps`)**: Styled in tracked uppercase sans-serif (`0.14em`), serving as precise navigational anchors and category badges across both cards and hero headers.

## Layout & Spacing

The layout is built around a structured 12-column grid system that emphasizes breathing room, generous white space, and asymmetric visual balance.

- **Canvas & Background Texture**: The base canvas is grounded by a warm ivory surface `#F7F6F0`, layered with a subtle micro-dot grid (dots spaced at 24px intervals with `#1B3B2B` at 6% opacity) to provide architectural structure without clutter.
- **Desktop (12 Columns)**: 12-column fluid grid, max container width of `1280px` with `3.5rem` outer margins and `1.5rem` gutters. Allows hero content to span 7–8 columns while cards and supporting metadata nest in 4–5 column modules.
- **Tablet (8 Columns)**: 8-column grid with `2rem` margins and `1.25rem` gutters. Complex multi-column sections collapse into alternating 4-column blocks.
- **Mobile (4 Columns)**: 4-column fluid grid with `1.25rem` outer margins and `1rem` gutters. Elements stack vertically, preserving line lengths of 45–65 characters for comfortable reading.

## Elevation & Depth

Visual hierarchy is communicated through **tonal layering and low-contrast outlines** rather than heavy drop shadows:

- **Surface Levels**:
  - *Base Layer*: The textured cream canvas (`#F7F6F0`).
  - *Mid Layer*: Raised container surfaces (`#FFFFFF` or `#FCFBF7`) with a delicate hairline border (`1px solid #E5E2D9`).
  - *Top Layer*: Interactive floating pills and contextual dropdowns.
- **Shadow Philosophy**: Ambient and organic. Shadows use an ultra-diffused, pine-tinted formulation (`rgba(27, 59, 43, 0.04)` to `rgba(27, 59, 43, 0.08)`) with blur radii spanning 16px to 32px and minimal Y-axis offset.
- **Borders & Dividers**: Hairline borders are thin (`1px`), rendered in `#E5E2D9` or `#EAE8DF`. Within cards, internal dividers use subtle inset rules that stop short of the outer card borders to echo classic book design.

## Shapes

The design system employs a soft, pill-forward shape hierarchy:

- **Pill Geometry (Full Radius / `9999px`)**: Reserved for primary action buttons, contextual filter chips, navigation badges, and header status indicators.
- **Container Curvature (`rounded-xl` / `1.5rem` - `2rem`)**: Applied to content cards, modal windows, and hero modules. Generous radii soften the overall page architecture, lending a friendly, human quality.
- **Internal Form Inputs (`rounded-lg` / `0.75rem` - `1rem`)**: Intermediate rounding that keeps inputs clean, accessible, and grounded within pill-heavy card structures.

## Components

### Buttons
- **Primary Button**: Pill-shaped (`rounded-full`), solid Forest Pine (`#1B3B2B`), text in pure white or warm cream, styled in tracked uppercase (`label-caps`). On hover, transitions to `#163323` with a subtle elevation lift (`0 4px 16px rgba(27, 59, 43, 0.12)`).
- **Secondary Button**: Pill-shaped with a transparent background, `1px` border in `#1B3B2B`, and pine text.
- **Tertiary / Ghost Button**: Unbordered with subtle underline transitions or inline directional arrow glyphs.

### Badges & Eyebrow Chips
- **Outlined Pill Chips**: Enclosed in a 1px border (`#E5E2D9`), warm cream background, uppercase tracked typography (`label-caps`), with text colored in warm amber-terracotta (`#D97706`) or deep pine (`#1B3B2B`).

### Cards & Panels
- **Editorial Content Card**: Off-white background (`#FFFFFF`), rounded with `1.5rem` to `2rem` radii, and outlined with `1px solid #E5E2D9`. Cards feature a generous internal padding (`space-lg`), faint horizontal hairline section dividers, and organic background accents (such as soft, low-opacity sage or beige circles).

### Lists & Row Items
- **Structured Metric / Feature Rows**: Border-bottom dividers (`1px solid #ECE9E1`), generous vertical padding (`space-sm` to `space-md`), paired with delicate botanical icons (leaf or organic node glyphs) in `#1B3B2B` or `#059669`. Text is styled in tracked uppercase sans-serif.

### Form Inputs
- **Input Fields**: Off-white background (`#FFFFFF`), `1px solid #E0DDD4`, `0.75rem` border radius, and deep botanical charcoal typography. Active and focus states transition the border to `#1B3B2B` without harsh drop shadows.
- **Checkboxes & Radios**: Custom organic tick marks, `#1B3B2B` fill on selection, and soft rounded-sm corners for checkboxes.

### Ancillary Components
- **Micro-Dot Surface**: An SVG dot-pattern background component providing an unobtrusive 24px-grid texture behind hero sections and major layout breaks.