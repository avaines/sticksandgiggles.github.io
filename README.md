# Sticks and Giggles website

Simple Eleventy landing page for **Sticks and Giggles**.

## What it does

- Static site build (works with GitHub Pages)
- Link-in-bio style buttons
- Large show banners at the top
- Content driven by one JSON file: `src/_data/site.json`

## Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run locally:

   ```bash
   npm run dev
   ```

3. Build static output:

   ```bash
   npm run build
   ```

Output is generated in `_site/`.

## Editing content

Update this file:

- `src/_data/site.json`

You can edit:

- Show banners (`shows`)
- Link buttons (`links`)
- Brand text (`brands`)
- Hero/footer text

## GitHub Pages

- Workflow file: `.github/workflows/deploy.yml`
- Custom domain file: `src/CNAME` (currently `sticksandgiggles.uk`)

After first push, in GitHub repo settings:

1. Open **Settings → Pages**
2. Set source to **GitHub Actions**
3. Ensure DNS records for `sticksandgiggles.uk` point to GitHub Pages
