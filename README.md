# Yuvraj Singh – 3D Portfolio

React + Vite + Tailwind + Three.js portfolio.

## Run locally
```
npm install
npm run dev
```

## Edit content
All text lives in `src/constants/index.js` (profile links, skills, experience, projects).
Update `profile.linkedin` and `profile.github` there. Add project links via `source_code_link` / `live_website_link`.

## Contact form
Copy `.env.example` to `.env` and add your own EmailJS service, template and public key.
Without them the form falls back to opening the visitor's email app.
On Netlify/Vercel, set the same three `VITE_EMAILJS_*` variables in the site settings.

## Deploy
- Netlify: build command `npm run build`, publish directory `dist` (SPA redirect already in `public/_redirects`).
- Vercel: import the repo; framework preset Vite.
