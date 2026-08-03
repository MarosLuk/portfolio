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
- **Animations** — scroll reveal (IntersectionObserver), staggered cards, cursor-follow glow on project cards; respects `prefers-reduced-motion`
- **Responsive** — 375px → 1440px+

## Design system

| Token | Value |
|-------|-------|
| Headings | Archivo |
| Body | Space Grotesk |
| Background | `#FAFAFA` / dark `#0A0A0B` |
| Text | `#09090B` / dark `#FAFAFA` |
| Accent | `#2563EB` (blue) |

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
3. Add a project card to the grid in `index.html`.

## Screenshots & production links

- App screenshots live in `assets/img/<slug>/shot-N.(webp|jpg|png)` and render in the
  "App screenshots" gallery on each detail page (`.gallery`, or `.gallery--wide` for
  desktop/web screenshots).
- Production links (website / App Store / Google Play) are in the "Links" aside card
  (`.link-list`) on each detail page.
- Mobile app screenshots were pulled from the official App Store / Google Play listings;
  web project images are viewport screenshots of the live production sites.
