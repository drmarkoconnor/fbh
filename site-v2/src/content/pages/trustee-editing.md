---
layout: layouts/page.njk
title: Trustee editing guide
permalink: /trustee-editing/
sectionLabel: Trustee guide
intro: A simple handover guide for publishing routine content without developer involvement.
---

The new site is designed so trustees can manage day-to-day content updates directly.

## What can be edited

- updates and articles;
- activities and schedules;
- FAQs;
- document links and summaries;
- trustee profiles.

## Local development workflow

If you are reviewing or testing the site locally:

1. Run `npm install` inside `site-v2/`.
2. Run `npm run dev` to start the site preview.
3. Run `npm run cms` to start the local CMS proxy.
4. Open `/admin/` in the browser and edit content.

## Live trustee login

For the live site, trustees can use an email/password login rather than GitHub accounts.

1. Deploy the site to Netlify.
2. Enable **Netlify Identity**.
3. Enable **Git Gateway**.
4. Invite each trustee by email.
5. Send trustees the `/admin/` link so they can sign in and edit content.

Git still sits behind the scenes, but trustees do not need direct repository access for normal editing.

## Rollout checklist

- enable Netlify Identity and Git Gateway;
- invite the initial trustee editors;
- add the remaining operational documents and trustee profiles;
- review key pages for accessibility and plain-English wording;
- confirm who approves updates before publishing;
- test the live admin login flow before launch.

## Current status

The local trustee admin is already live in development, and the intended live path is now email/password access through Netlify Identity and Git Gateway.

## Looking ahead

If the Hub later needs booking workflows, finance data, reporting, marketing automation or wider operational tooling, that should become a separate custom application with its own database. This content admin can remain the lightweight publishing layer until then.
