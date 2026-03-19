# RailingWorld Website

Premium 5-page static website — no backend required.

## Pages
- `index.html` — Home
- `about.html` — About Us
- `products.html` — All Products (with filter by category)
- `category.html` — Category deep-dive pages
- `contact.html` — Contact + Enquiry Form

## Files
- `style.css` — All styles
- `components.js` — Shared navbar & footer (injected via JS)
- `vercel.json` — Vercel config for clean URLs

## Deploy to Vercel via GitHub

1. Push this folder to a GitHub repository
2. Go to https://vercel.com → New Project
3. Import your GitHub repo
4. Framework: **Other** (it's plain HTML)
5. Root Directory: leave as `/` (or the folder name)
6. Click **Deploy** — done! ✅

## Images
Images are loaded directly from `https://www.railingworld.in` public URLs.
Fallback images from Unsplash CDN are used if the original images don't load.

## Customization
- Replace phone/email in `contact.html` and `components.js`
- Add real Google Maps embed in `contact.html`
- Update company details in `about.html`
- Add/remove products in `products.html`
