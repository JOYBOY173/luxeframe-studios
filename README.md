# LuxeFrame Studios

A single-page, editorial-cinematic landing page for a fictional premium
photography & videography studio in Lagos, Nigeria. Built as a portfolio /
client-style project with React, Vite and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # optional, serves the production build locally
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects the Vite framework preset — no configuration needed.
4. Deploy.

## Project structure

```
src/
  components/      One component per section (Navbar, Hero, FeaturedWork, ...)
  hooks/
    useReveal.js   Lightweight IntersectionObserver hook for scroll reveals
  App.jsx          Composes all sections in order
  index.css        Tailwind directives + a handful of hand-written utilities
```

## Design notes

- **Palette:** obsidian `#111111`, ivory `#F3EFE8`, stone `#A8A39A`, bronze
  `#A78B68` used sparingly as an accent, per the brief.
- **Type:** Fraunces (display serif) paired with Manrope (sans) for an
  editorial contrast between headlines and UI text.
- **Signature motif:** thin bronze "viewfinder corner brackets" on gallery
  hover and around the hero — a quiet nod to the studio's name.
- **Imagery:** curated, cohesive black-and-white photography sourced from
  Unsplash (Unsplash License — free for commercial use, no attribution
  required). Swap the URLs in each component for your own photography
  before using this for a real client.
- **Content:** all copy, pricing, stats and testimonials are fictional
  placeholder content for this portfolio project, not verified claims.

## Notes for future edits

- No backend, database, CMS or payment processing is included by design —
  the booking form is a validated, frontend-only enquiry form.
- Animations are intentionally restrained (fade/slide reveals, hover
  transitions) and respect `prefers-reduced-motion`.
