# Aurora N&N Business Solutions Inc. — Awwwards‑level Website Brief + Paste‑Ready Build Prompt

**Brand**: Aurora N&N Business Solutions Inc.  
**Domain**: aurorabusiness.ca  
**Services**: (1) Taxation services for people in Canada (BC‑forward), (2) Web design for small businesses across Canada (esp. British Columbia).  
**Hosting**: Vercel  
**Goal**: Create an Awwwards‑worthy, animation‑rich, modern website with impeccable performance, accessibility, and credibility for a professional services brand.

---

## Big Concept — “Guided by the Northern Lights”
Use the **Aurora Borealis** as a living metaphor for guidance and clarity:
- A **WebGL aurora shader** in the hero (react‑three‑fiber) paints flowing light ribbons that subtly shift based on cursor movement and scroll, evoking *navigation, transparency, and expertise*.
- A persistent **dual‑service toggle** (“Taxation ↔ Web Design”) swaps copy, iconography, and accent colors site‑wide with **smooth page transitions** and **shared layout animations**. The brand feels like one studio with two bright paths.
- The site narrates a journey: **Discover → Choose a Path → See Proof → Act (Book)**.

**Visual language**:
- Palette inspired by aurora: deep space (#0B1020), ink black (#070A12), aurora cyan (#3BF0E5), lime‑green (#A6FF9A), magenta (#FF5CA8), ice purple (#B19CFF). Use gradients and glassmorphism sparingly.
- Typography: **Space Grotesk** for headlines (display), **Inter** for UI/body. Both via `next/font/google`.
- Motion feel: **calm, precise, and deliberate**; no gimmicks. Defaults obey `prefers-reduced-motion`.

---

## Information Architecture
- **Home** (storytelling scroll + hero shader + dual‑service toggle)
- **Services**
  - **Taxation (BC‑forward)**: personal tax, small business, GST/PST registration & filings, CRA correspondence, bookkeeping.
  - **Web Design**: discovery → design systems → Next.js builds → SEO/analytics → maintenance.
- **Case Studies** (filterable; show both tax outcomes and web projects)
- **Pricing** (cards with comparison; transparent starting points)
- **Calculators** (micro‑apps; client‑side):
  - GST/PST estimator for BC small businesses
  - Simple personal tax refund estimator (disclaimer)
- **Resources / Blog** (MDX)
- **About** (team, values, methodology, credentials, partners)
- **Contact / Book** (calendar embed + form)

---

## Signature Interactions
1. **Hero Aurora Canvas** (react‑three‑fiber):
   - GPU shader (noise‑driven) ribbons, subtle parallax stars.
   - Cursor influence (<1% movement) and scroll‑driven intensity via `useScroll`.
   - Low‑poly fallback gradient for reduced motion.
2. **Dual‑Service Switch** (Taxation/Web):
   - Toggles theme tokens, copy variants, and illustrative SVGs.
   - Animates with **Framer Motion**: shared layout + color transitions (200–350ms), `spring` for switches.
3. **Route Transitions**:
   - Sliding color‑veil transition (300ms in / 300ms out), **page progress bar** at top.
4. **Scroll‑Told Home**:
   - Sticky sections with reveal animations (opacity+Y 20px, 250ms, 40ms stagger).
5. **Micro‑Interactions**:
   - **Magnetic CTA** buttons, haptic hover, animated counters, testimonial marquee.
   - SVG path drawings for icons (tax files, GST/PST tags, code brackets).
6. **Calculators**:
   - Smooth input feedback; realtime formulas; downloadable PDF of results.

**Motion Standards**:
- Global durations: 180–400ms; long reveals: 600–900ms.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (easeOutExpo‑like);
- Use absolute transforms + `will-change`; avoid layout thrash; throttle scroll.

---

## Tech Stack (Production)
- **Framework**: **Next.js 14+ (App Router, TypeScript)** on **Vercel**
- **Styling**: Tailwind CSS + CSS variables for themes; **shadcn/ui** (Radix primitives)
- **Animation**: **Framer Motion** (page & component), **react‑three‑fiber + drei** (hero shader)
- **Scrolling**: **Lenis** for smooth scroll (optional), `framer-motion` `useScroll` for triggers
- **Forms**: React Hook Form + Zod; submit via Vercel Functions; **Resend** for email
- **Content**: MDX + **Contentlayer** (or **Sanity** if you prefer a headless CMS UI)
- **Images**: `next/image`; OG images via `@vercel/og`
- **Data**: Vercel KV/Postgres (optional, e.g., lead store)
- **Analytics**: Vercel Analytics + PostHog (session replays, funnels)
- **Testing**: Playwright (e2e), Vitest + React Testing Library (unit)
- **QA**: Lighthouse CI (>95 perf, >95 a11y), Axe, Type‑Safe everywhere

---

## SEO & Trust
- Structured data (Organization, LocalBusiness, Article)
- Per‑page OG images; canonical; sitemap/robots
- Trust badges: CRA‑relevant experience, testimonials, case figures, partner logos
- Security & privacy page with PIPEDA/GDPR statements

---

## Deliverables & Acceptance Criteria
- **Performance**: LCP < 2.5s on 4G; First Input Delay < 100ms; CLS < 0.05
- **Accessibility**: WCAG 2.2 AA; keyboard reachable; focus visible
- **Animation Quality**: no jank; all motion has purpose and is cancelable (reduced motion)
- **Design System**: documented tokens (colors, radii, spacing), components catalog
- **Content**: copy written for both service tracks with toggle variants

---

## Sample Copy (feel free to adapt)
**Hero H1**: *Clarity for your business—taxes and websites, guided by the Northern Lights.*  
**Sub**: We help Canadians file smarter and small businesses launch faster—with modern Next.js websites and BC‑savvy tax services.  
**CTA**: *Book a free consult* / *See work*

**Value Props**:  
1) **BC‑first Tax Expertise**: GST/PST, CRA support, and real‑world small business filing.  
2) **Next.js Craft**: High‑performance websites designed to rank and convert.  
3) **One Partner**: Finance + web under one roof—fast feedback loops.

---

# PASTE‑READY SUPER PROMPT (for Cursor/Claude/Copilot)

**ROLE**: You are a senior Next.js engineer, motion designer, and DX perfectionist. Build an Awwwards‑level, animation‑rich website for **Aurora N&N Business Solutions Inc.** hosted on **Vercel**.

**OBJECTIVE**: Ship a production‑ready Next.js 14 App Router site with r3f hero shader, Framer Motion page/component animations, a dual‑service theme switch (Taxation/Web Design), case studies, calculators, and a high‑converting contact flow.

**REQUIREMENTS**:
1) **Stack**: Next.js 14 + TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, react‑three‑fiber + drei, Contentlayer (MDX), React Hook Form + Zod, Resend (email), Vercel Functions, Vercel Analytics.
2) **Architecture**: App Router; server components by default; client components for animated/interactive sections; absolute imports/aliases; lightweight utilities; ESLint + Prettier.
3) **Pages & Routes**:
   - `/` (Home): hero aurora canvas; dual‑service switch; marquee logos; featured case study; CTA.
   - `/services/taxation` (BC‑forward); `/services/web-design`.
   - `/case-studies` (filterable grid + detail pages from MDX/Contentlayer).
   - `/pricing` (cards; FAQs; CTA).
   - `/calculators/gst-pst-bc` and `/calculators/personal-tax-estimator` (client components; schema validation; disclaimer; export PDF).
   - `/resources` (blog index) and `/resources/[slug]` (MDX article).
   - `/about` and `/contact` (calendar embed + form).
4) **Global Components**:
   - `AuroraCanvas` (r3f shader; stars; reduced‑motion fallback gradient).
   - `ServiceSwitch` (Taxation/Web theme toggle; stores in zustand or context; persists in `localStorage`).
   - `PageTransition` (veil + progress bar), `MagneticButton`, `Marquee`, `TestimonialCard`, `StatCounter`, `StickyTabs`, `AccordionFAQ`.
5) **Theme System**:
   - Two themes with CSS variables: `--accent`, `--bg`, `--text`, `--glow`.
   - Taxation accents: cyan/green; Web accents: magenta/purple. Smooth animated color transitions.
6) **Animation Specs**:
   - Framer Motion: defaults `duration: 0.28–0.38`, `ease: [0.22, 1, 0.36, 1]`.
   - Entrance variants: `{opacity: 0, y: 20}` → `{opacity: 1, y: 0}` (stagger 0.04).
   - Shared layout transitions for content swaps; route transition veil 300ms in/out; counter spring for stats.
   - Use `prefers-reduced-motion` to disable heavy effects.
7) **Hero Shader**:
   - Perlin/simplex noise animated strips (GPU); pointer moves a light probe; intensity increases slightly on scroll.
   - Use `three`, `react-three-fiber`, `drei`’s `ShaderMaterial`; separate component; memoized uniforms; 60fps budget.
8) **Calculators**:
   - Zod‑validated forms; componentized formula logic; display breakdown tables; “Download PDF” via `react-pdf`.
9) **Content**:
   - MDX for case studies/resources; per‑page OG image generator (`/api/og`).
10) **SEO**:
   - Metadata API, OpenGraph, Twitter cards; dynamic canonical; structured data JSON‑LD (Organization, LocalBusiness, Article).
11) **Forms & Email**:
   - Vercel Function at `/api/contact`; server‑side validation; **Resend** to `n@aurorabusiness.ca`; thank‑you page with animation.
12) **Analytics**: Vercel Analytics + PostHog; track CTA clicks, calculator conversions.
13) **Performance/A11y**:
   - `next/image`, font subsetting with `next/font`; code‑split; lazy mount heavy components; Lighthouse >95; Axe clean.
14) **Testing/CI**:
   - Unit tests for utils/components (Vitest + RTL); Playwright smoke tests; GitHub Actions + Lighthouse CI.
15) **Deliverables**:
   - Source code; README with setup; design tokens doc; component story‑style catalog page.

**INITIAL TASKS** — generate code now:
- Create project scaffolding with the dependencies above.
- Implement global layout with the dual‑service theme system; header with `ServiceSwitch` that flips tokens and copy.
- Build `AuroraCanvas` hero with reduced‑motion fallback.
- Create Home sections: value props, marquee, featured case study, CTA.
- Add `/contact` with validated form and Resend integration (ENV placeholders).
- Add two calculator skeleton routes with forms and result panes.
- Add Contentlayer config and a sample MDX case study.
- Add SEO metadata and OG image endpoint.
- Add page transition component used in `layout.tsx`.
- Add basic tests and CI config.

**PACKAGE EXTRAS** (include in `package.json`):
```
next, react, react-dom, typescript, tailwindcss, class-variance-authority, framer-motion,
@radix-ui/react-* , lucide-react, @vercel/og, contentlayer, next-contentlayer, remark-gfm,
react-hook-form, zod, @hookform/resolvers, @vercel/analytics, @vercel/speed-insights,
three, @react-three/fiber, @react-three/drei, lenis, react-pdf, playwright, vitest,
@testing-library/react, @testing-library/user-event, axe-core, posthog-js, resend
```

**FILE STRUCTURE (target)**:
```
app/
  layout.tsx
  page.tsx
  providers.tsx
  (routes)/
    services/
      taxation/page.tsx
      web-design/page.tsx
    case-studies/page.tsx
    calculators/
      gst-pst-bc/page.tsx
      personal-tax-estimator/page.tsx
    resources/[slug]/page.mdx
    about/page.tsx
    contact/page.tsx
  api/
    contact/route.ts
    og/route.tsx
components/
  AuroraCanvas.tsx
  ServiceSwitch.tsx
  PageTransition.tsx
  MagneticButton.tsx
  ...
lib/
  seo.ts
  analytics.ts
  formulas/
    gstPst.ts
    personalTax.ts
content/
  case-studies/*.mdx
  posts/*.mdx
styles/
  globals.css (tailwind)
```

**QUALITY BAR**:
- Smooth at 60fps on modern laptops/phones; no layout shifts; animations are intentional; a11y pass; strong copy with BC‑relevant tax language.

**NEXT STEPS AFTER SCAFFOLD**:
- Implement calculators’ actual math and PDF export.
- Add 2–3 real case studies (1 tax, 2 web) in MDX.
- Integrate calendar booking (Cal.com or Calendly) on Contact.
- Replace placeholder copy with final content; run Lighthouse CI and fix.

---

## Optional Add‑Ons
- **Rive** for vector micro‑animations (icons), if needed.
- **Sanity** studio at `/studio` for non‑technical editing.
- **Vercel Speed Insights** and error monitoring with Sentry.

---

## Notes for the Brand Owner
- Keep case study metrics concrete (e.g., “Saved $X in CRA penalties”, “+38% conversion after site relaunch”).
- Publish a single authoritative **BC GST/PST guide** as a pillar page to earn backlinks.
- Create a yearly **Tax Season Launchpad** landing page with deadlines and checklists.

