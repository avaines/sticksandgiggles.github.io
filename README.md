# Sticks & Giggles website

An Eleventy site for the Sticks & Giggles collaboration between Bits and Bobyns and The Yorkshire Garage.

## Local development

```bash
npm install
npm run dev
```

Create the production site with:

```bash
npm run build
```

The generated site is written to `_site/`.

## GitHub Codespaces

1. Open the repository on GitHub.
2. Select **Code**, then **Codespaces**.
3. Create a codespace on the `main` branch.
4. Wait for the container to finish setting up.
5. In the Codespaces terminal, run:

   ```bash
   npm run dev
   ```

Codespaces will forward port `8080` and open the website preview. Dependencies are installed automatically when the codespace is first created.

## Everyday content

Most shared content lives in `src/_data/site.json`, including:

- contact details and navigation
- homepage introduction and hero
- both maker profiles
- featured work
- upcoming shows
- social accounts
- gallery event descriptions

### Adding a gallery event

1. Add a directory under `src/assets/gallery/`, for example `202608_oakwell`.
2. Put that event's image files in the directory.
3. Add one matching entry to `galleryEvents` in `src/_data/site.json`.

The build discovers every image in the directory automatically. `cover` can name the photograph used to represent the event. Per-image descriptions can optionally be added with an `imageAlts` object.

### Adding a journal article

Add a Markdown file under `src/journal/` using `first-look.md` as the structural example. Give it the `journal` tag so it appears on the Journal page.

The included first-look article is deliberately marked as placeholder copy and should be replaced when the real story is ready.

## Deployment

Pushing to `main` deploys the generated site to GitHub Pages. The custom domain is configured by `src/CNAME`.
