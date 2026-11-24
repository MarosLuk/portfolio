# Maroš Lukáč — Personal Portfolio

Minimalist, bilingual (EN default / SK) static portfolio website. No build step, no dependencies — plain HTML + CSS + vanilla JS.

## Structure

```
index.html              Landing page (hero, about, skills, experience, projects, contact)
projects/<slug>.html    One detail subpage per project
assets/css/style.css    Design system + all styles (light/dark themes)
assets/js/main.js       i18n engine, theme toggle, reveal animations, mobile menu
assets/js/i18n.js       All EN/SK translations (single source of truth)
assets/img/             Images, screenshots (add per project over time)
```

## Features

- **EN / SK language toggle** — English is default; choice persists in `localStorage`
- **Light / dark theme** — follows system preference, manual toggle persists
- **Animations** — quiet scroll reveal (IntersectionObserver, each element on its own); respects `prefers-reduced-motion`
- **Responsive** — 375px → 1440px+

## Design system

Layout and components follow the FitJam website (fitjam.app): fixed glass nav with a
language pill and a CTA, two-column hero with a phone mockup and floating stat chips,
centred section headings (eyebrow · title · sub), rounded cards with soft shadows,
a tech chip cloud, a timeline, stat cards and a dark contact card. One font family;
weight and tracking carry the hierarchy. Colours stay paper, ink and warm greys.

| Token | Value |
|-------|-------|
| Font | Outfit (400–700) |
| Background | `#F6F5F1` / dark `#111111` |
| Cards | `#FDFCFA` / dark `#1A1A1A` |
| Text | `#151515` / dark `#ECEBE6` |
| Lines | `#DCD9D1` / dark `#292928` |
| Primary buttons, contact card | ink `#151515` (light text) |
| Live status dot | `#2E7D4F` / dark `#6CBF8C` |

All tokens live at the top of `assets/css/style.css`. Fonts load from Google Fonts in each page's `<head>`.
When you change CSS or JS, bump the `?v=` number on the `<link>`/`<script>` tags in every page.

## Run locally

Any static server works:

```bash
cd maros-portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## Adding a new project

1. Copy an existing page in `projects/` and rename it (e.g. `projects/my-app.html`).
2. Add the project's EN + SK texts in `assets/js/i18n.js` under `cards.<slug>` and `p.<slug>`.
3. Add it to `index.html` — an `a.work-card` in "Selected work" (with screenshots) or an `a.feature-card` in "More projects" — and fix the prev/next links in the neighbouring pages.

## Screenshots & production links

- App screenshots live in `assets/img/<slug>/shot-N.(webp|jpg|png)` and render in the
  "App screenshots" gallery on each detail page (`.gallery`, or `.gallery--wide` for
  desktop/web screenshots).
- Production links (website / App Store / Google Play) are in the "Links" aside card
  (`.link-list`) on each detail page.
- Mobile app screenshots were pulled from the official App Store / Google Play listings;
  web project images are viewport screenshots of the live production sites.
- Homepage: projects with screenshots are cards in "Selected work" (`.work-grid`, `a.work-card`).
  Mobile apps show three thumbnails `assets/img/<slug>/card-1..3.webp` (360 px wide);
  websites show one `card-1.webp` (1100 px wide) in a frame (`.work-card__frame`).
  Projects without screenshots are cards in "More projects" (`.feature-grid`, `a.feature-card`).
  The hero visual is a generic browser + phone pair drawn in HTML/CSS (`.hero-stage`, no project
  screenshot), so it stays neutral. Make card thumbnails with:
  `magick shot-1.webp -resize 360x -strip -quality 82 card-1.webp`
