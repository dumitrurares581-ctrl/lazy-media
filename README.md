# Lazy Media — Cinematic Studio Portfolio

Static site for Lazy Media, a cinematic photo & video production studio. Built from the
"Cinematic Studio Portfolio" Stitch design (Nocturne Production System — dark, sharp-cornered,
Inter typeface, lime-green accent) and merged into two responsive pages (desktop + mobile
breakpoints from the original Stitch screens, combined with Tailwind's `md:` breakpoint).

## Pages

- `index.html` — Work: project grid (desktop) / vertical masonry (mobile)
- `about.html` — About & Contact: founder profiles + contact form

## Stack

Plain HTML + Tailwind CSS (via CDN, no build step) + a few lines of vanilla JS for the mobile
nav toggle and contact form feedback. No framework, no bundler — deploys as-is.

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy

Static site — works on Vercel, GitHub Pages, Netlify, or any static host with zero config.

## Notes

- The contact form is client-side only right now (shows a confirmation message, doesn't send
  anywhere). Wire it to a real endpoint (e.g. Formspree, or a Vercel Serverless/Edge Function)
  before relying on it for real inquiries.
- All imagery was downloaded from the Stitch project and is self-hosted under `images/` so the
  site has no external asset dependencies.
