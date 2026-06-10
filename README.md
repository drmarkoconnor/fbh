# Flax Bourton Hub

This repository now deploys the rebuilt Flax Bourton Hub site from `site-v2/`.

Netlify is configured in `netlify.toml` with:

- `base = "site-v2"`
- `command = "npm run build"`
- `publish = "dist"`

## Current Source Of Truth

Use `site-v2/` for all active site development, content, assets, Decap CMS config and Eleventy build work.

The previous root-level Eleventy site was removed from Git on 2026-06-10 after the v2 overhaul. A local copy was moved outside the repository to:

`/Users/moc/repos/simple-template-legacy-archive-2026-06-10`

That archive keeps the old root site and unused v2 images on this machine, but because it is outside this Git repository it will not be pushed to GitHub or deployed by Netlify.

## Cleanup Notes

- The home page FAQ preview should loop over `faqs.items`, matching the shape used by `/faqs/`.
- `site-v2/src/assets/images/fbh-84.jpg` and `site-v2/src/assets/images/hero-community.jpg` were not referenced by the v2 source and were moved to the local archive.
- The old root build output `_site/`, root assets, old Liquid includes, old root content and old root package files were moved to the local archive.
