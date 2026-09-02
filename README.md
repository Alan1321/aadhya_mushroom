# Aadhya Mushroom Seeds — website

Marketing site for **Aadhya Mushroom Seeds & Research Center**, Bhaktapur, Nepal.

Static, frontend-only: React 19 + Vite 8, no backend. Deployed to GitHub Pages at
**https://alan1321.github.io/aadhya_mushroom/**

## Develop

```bash
npm install
npm run dev      # http://localhost:5173/aadhya_mushroom/
npm run build    # static output → dist/
npm run preview  # serve the real dist/ build locally
npm run lint     # oxlint
```

## Editing content

All copy, contact details, and the product list live in **`src/data/site.js`**.
Components read from it — nothing is hardcoded in JSX, so most content changes are a
one-file edit.

- `products` is an **empty array** on purpose. While it is empty, the Products section
  shows a "contact us for current availability" card instead of a catalogue. Add entries
  in the documented shape and the grid appears automatically.
- Fields marked `TODO(confirm with owner)` (phone, address, hours) are blank because they
  have not been confirmed. The Contact section hides each row while its value is empty,
  so the page never shows a placeholder detail.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes
`dist/` to GitHub Pages.

One-time repo setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

`vite.config.js` sets `base: '/aadhya_mushroom/'` because a GitHub Pages project site is
served from a subpath. If the site moves to a custom domain, change `base` to `'/'` and
update the absolute `og:` URLs in `index.html`.
