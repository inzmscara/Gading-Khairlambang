# Portofolio — React.js

Converted from the single-file `Portofolio.html` into a React 18 + Vite project.
Same design, same content, same behavior — split into components.

## Run locally

```powershell
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```powershell
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

```powershell
npm i -g vercel
vercel
```

Or drag the `dist/` folder into Vercel's dashboard, or connect this folder as a
GitHub repo and import it in Vercel.

## Structure

- `src/App.jsx` — view state, menu state, page transitions, hash routing
- `src/index.css` — the full design system (light/dark adaptive)
- `src/components/Intro.jsx` — multilingual greeting + rounded curtain reveal
- `src/components/SiteNav.jsx` — top navigation bar
- `src/components/MenuOverlay.jsx` — fullscreen index overlay
- `src/components/PageTransition.jsx` — transition cover between views
- `src/components/views/` — `Home.jsx`, `About.jsx`, `Work.jsx`, `Path.jsx`, `Contact.jsx`

All personal content lives inside the view components — edit them directly.
