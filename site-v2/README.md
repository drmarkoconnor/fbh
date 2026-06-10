# Flax Bourton Hub v2

This folder contains the phase 1 rebuild of the Flax Bourton Hub site.

The repository root is intentionally slim. Netlify builds from this folder via
the root `netlify.toml`, so future development should happen here unless the
deployment model changes.

## Local development

1. `npm install`
2. `npm run dev`
3. `npm run cms`

The site preview runs on `http://127.0.0.1:8080` and the local CMS proxy runs on `http://127.0.0.1:8081`.

Run commands from this `site-v2/` directory so local builds use the locked
Eleventy dependency rather than any globally installed `eleventy` binary.

## Live trustee access

The live admin is configured for **Decap CMS + Netlify Identity + Git Gateway**:

1. deploy the repository via Netlify using the root `netlify.toml`;
2. enable **Identity** in the Netlify site settings;
3. enable **Git Gateway** in the same Netlify settings area;
4. invite trustees by email from the Netlify Identity panel;
5. give trustees the `/admin/` URL so they can log in with email/password and edit content.

Local development still uses `local_backend: true`, so the `npm run cms` proxy remains the right workflow when testing changes on a machine.

## Current phase 1 scope

- modernised information architecture;
- trustee-editable updates and activities;
- structured FAQs, documents and trustee profile data;
- improved accessibility and lighter assets;
- third-party booking kept in place for safety.

## Cleanup handoff

On 2026-06-10, after the v2 overhaul, the legacy root-level Eleventy site was
moved out of the Git repository to:

`/Users/moc/repos/simple-template-legacy-archive-2026-06-10`

That archive contains the old root `_site/`, root assets, old Liquid includes,
old root content, old root package files and two unused v2 images:

- `site-v2/src/assets/images/fbh-84.jpg`
- `site-v2/src/assets/images/hero-community.jpg`

Keep active work in `site-v2/`. The archive is only for local recovery or
historical reference and should not be copied back into the repository unless a
specific asset or page is intentionally restored.

Also note that FAQ data is shaped as `faqs.items`. The home page FAQ preview and
the `/faqs/` page should both use that shape.

## Next content to migrate

- trustee names, roles, bios and images;
- additional operational documents from the booking platform;
- any final hire guidance on opening up, security and invoicing.

## Longer-term direction

This CMS setup is the right phase 1 editing model, but it should be treated as a stepping stone. If the Hub later needs bookings, reporting, finance data, marketing automation, or richer permissions, the next step is a custom application and database rather than trying to stretch the Git-backed CMS too far.
