# FitZone Landing Page

A responsive landing page for a fictional gym, built with **React** and **Vite**.

**Live site:** https://YOUR-PROJECT.vercel.app  <!-- replace with your Vercel link -->

## Sections
Navbar, Hero, Features, About, Contact, Footer.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Structure
- `src/components/` — one component per section, plus a reusable `Card`
- Repeated cards are rendered from arrays with `.map()` and receive their data through props
- Styling: plain CSS (`src/index.css`), responsive for mobile, tablet and desktop
