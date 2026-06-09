# Flax Bourton Hub v2

This folder contains the phase 1 rebuild of the Flax Bourton Hub site.

## Local development

1. `npm install`
2. `npm run dev`
3. `npm run cms`

The site preview runs on `http://127.0.0.1:8080` and the local CMS proxy runs on `http://127.0.0.1:8081`.

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

## Next content to migrate

- trustee names, roles, bios and images;
- additional operational documents from the booking platform;
- any final hire guidance on opening up, security and invoicing.

## Longer-term direction

This CMS setup is the right phase 1 editing model, but it should be treated as a stepping stone. If the Hub later needs bookings, reporting, finance data, marketing automation, or richer permissions, the next step is a custom application and database rather than trying to stretch the Git-backed CMS too far.
