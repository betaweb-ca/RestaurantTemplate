# Restaurant Website Template

A clean, JSON-driven React + Vite restaurant website template. Customize the entire site by editing JSON files — no component changes required for most business updates.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     Reusable UI (Header, Footer, cards, buttons)
  pages/          Home and Menu pages
  data/           All business-specific content (edit these)
  styles/         Global CSS and theme tokens
  utils/          Theme and image helpers
public/
  images/         Add your business photos here
```

## JSON content files

| File | Controls |
|------|----------|
| `business.json` | Business name, tagline, phone, email, address, hours, social links, copyright |
| `navigation.json` | Navbar links, routes, header CTA label |
| `homepage.json` | Hero, highlights, featured dishes, about, menu preview, gallery, CTA banner |
| `menu.json` | Menu categories, all menu items, chef's special, order/reservation cards |
| `theme.json` | Colors, fonts, button labels, diet badge styles |
| `contact.json` | Contact section labels and map embed settings |
| `testimonials.json` | Reserved for future testimonials section |
| `faqs.json` | Reserved for future FAQ section |

## Customize for a new business

1. **Business info** — Edit `src/data/business.json` (name, phone, address, hours, social).
2. **Branding** — Edit `src/data/theme.json` colors and fonts.
3. **Homepage copy** — Edit `src/data/homepage.json` (hero headline, about story, section titles).
4. **Menu** — Edit `src/data/menu.json` (categories, dishes, prices, chef's special).
5. **Navigation** — Edit `src/data/navigation.json` if you need different nav labels or routes.
6. **Buttons** — Edit label text in `theme.json` under `buttons`.
7. **Contact / map** — Edit `contact.json`; paste a Google Maps embed URL into `map.embedUrl`.

Components read from these files automatically. You should not need to touch React files for typical content changes.

## Replace images

1. Add your images to `public/images/` (e.g. `hero.jpg`, `about.jpg`, `dish-salmon.jpg`).
2. Update image paths in `homepage.json` and `menu.json` to match your filenames:
   ```json
   "image": "/images/hero.jpg"
   ```
3. Each image entry also supports `imageFallback` (or `fallback` for gallery items) — useful as a temporary remote URL until local files are added. If the primary path fails to load, the fallback is used automatically.

## Deploy on Vercel

1. Push this project to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Use the default settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy.

SPA routing is configured via `vercel.json`, so `/menu` and other routes work in production.

## Tech stack

- React 18 + Vite 6
- React Router
- Plain CSS with CSS variables (no Tailwind)
- Lucide React icons

No backend, CMS, database, or authentication — just static content from JSON.
