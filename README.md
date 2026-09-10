# Slowburn

Marketing site for **Slowburn**, an AI growth system for solo founders.

Built on the warm dark "embers on saddle leather" design system: espresso
canvas, warm cream ink, one amber signal colour, pill controls on squared
surfaces.

## Stack

Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Page structure

`app/page.tsx` composes the homepage from `components/`:

| Section | Component | Notes |
| --- | --- | --- |
| Navigation | `Nav.tsx` | Transparent over hero, solid espresso on scroll, full mobile menu |
| Hero | `Hero.tsx` | Split composition, hero-xl headline, amber pill + arrow circle |
| Feature 3-up | `FeatureGrid.tsx` | No card fill, walnut hairline bottom border |
| Problem | `Mirror.tsx` | Recognition list before any teaching |
| The system | `SystemSteps.tsx` | Five parts of the loop |
| How it runs | `Dial.tsx` | Signature dot-dial graphic on the deepest surface |
| Pricing | `Pricing.tsx` | Three tiers, amber on the featured card only |
| FAQ | `Faq.tsx` | Inverted cream band, native `<details>` accordion, no JS |
| Capture | `Capture.tsx` | Pill input, amber focus border |
| Footer | `Footer.tsx` | Midnight cocoa, one step below the canvas |

## Swapping the placeholders

**Images.** `public/hero.svg`, `public/loop.svg` and `public/founder.svg` are
generated placeholders, labelled as such on the image itself. Drop real files
in `public/` and update the `src` in the component. Once no SVG images remain,
delete the `images` block in `next.config.mjs`; it exists only to let Next's
optimizer serve SVG.

**Typeface.** The system specifies PP Neue Montreal, which is a paid Pangram
Pangram licence. Inter Tight stands in with the same geometry and the same
tolerance for tight negative tracking. To swap: buy the licence, add the
`@font-face` rules, and put `'PP Neue Montreal'` at the front of `--font-sans`
in `app/globals.css`. Nothing else changes.

**Email capture.** `app/api/subscribe/route.ts` is a stub that validates the
address and redirects. It stores nothing. Wire it to the real provider before
launch.

## Deliberate deviations from the source system

Four changes were made because the spec as written would have shipped broken.

1. **CTA text colour.** The spec's component list put Warm Cream text on the
   amber fill, which measures about 1.5:1 and is unreadable. Espresso on amber
   measures about 10:1, which is what the spec's own prompt guide says. The
   buttons use espresso.

2. **Muted body colour.** Driftwood `#85796c` sits at roughly 4.5:1 on
   Espresso, right at the AA threshold, and the spec assigned it to 14px body
   copy. A warm `--color-sand: #b0a596` clears about 8:1 and carries body text.
   Driftwood is kept for small non-essential labels.

3. **Responsive behaviour.** The spec listed fixed pixel type sizes with no
   responsive rules; an 81px hero at 0.8 line-height breaks on a phone. Every
   display size now clamps between a mobile and desktop value and keeps the
   specified tracking ratio. Section rhythm holds at 52px on mobile and opens
   to about 112px on desktop, where 52px reads cramped on a text-led page.

4. **States the spec omitted.** Hover, active and focus-visible states for
   every control, a mobile navigation pattern, long-form reading styles, and a
   reduced-motion rule. Focus uses a hard 2px amber outline with offset, since
   the system forbids glows.

One implementation note worth keeping: the spacing scale is declared as
`--space-*` in `:root`, **not** as `--spacing-*` inside `@theme`. Naming them
`--spacing-N` in the theme block overwrites Tailwind's numeric scale and
silently turns `h-10` into 10px instead of 40px.
