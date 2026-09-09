# Pawtreon engineering contract

Read `PRD.md`, `TECHSTACK.md`, `ARCHITECTURE.md`, `TASKS.md` and the relevant design route/flow specification before editing. Nested instructions, when added, also apply.

## Identity and change safety

Work only in the clone whose origin is `https://github.com/darkapoparka/pawtreon-app.git`. Initial integration branch is `main`; this does not authorize writes to other Pawtreon repositories. Inspect status before editing. Preserve other agents' or owners' changes; never reset, clean, force-push or replace an existing application to make setup easier. No production deployment or paid resource creation without explicit approval.

## Design contract

`docs/design/UI-SPEC.md` and `docs/design/routes.json` govern behavior and geometry. Image-generated concepts communicate art direction only; they do not override accessibility, route semantics or payment truthfulness. The owner liked the right-hand immersive campaign composition in the two-phone concept, but has not approved every screen or declared pixel-perfect acceptance.

Use real 390x844 and 360x800 browser viewports. Do not squeeze an entire scrollable page into an elongated phone mockup. One species filter row, one compact section control row, consistent flat bottom navigation. Task screens replace the global dock with their own focused footer. No huge floating plus, ornamental counters, duplicated filters or fake trust badges.

## Architecture

One Next.js App Router application. Server-render public data; isolate interactive client components. Keep domain rules outside view components. Read route params/searchParams using the installed Next.js API. Authentication and authorization are different checks: verify both on every protected read/write. Never rely on hidden UI as authorization.

Prefer official CLI-installed primitives; customize tokens deliberately. No monorepo, parallel Svelte implementation, second ORM, generic agent framework or new state-management library without demonstrated need. Read current official documentation before new integrations. Install through pnpm and commit the lockfile.

## Truthfulness and safety

Prototype data must remain explicitly labeled and separated from production loaders. Never represent a localStorage session as authentication, a timer/redirect as payment success, an uploaded document as verification, or an optimistic number as funds received. No invented donors, urgency, clinic approval, receipts or impact statistics.

Never publish precise stray-colony locations or expose private veterinary records, personal identity documents, email addresses or donor details. Strip image EXIF; private documents require short-lived signed access. Generated animal imagery may illustrate prototypes, not substantiate real rescue cases.

Fundraising processor eligibility is an unresolved launch gate. Do not turn on card collection, connected accounts or disbursement without written provider approval for this business model and jurisdiction. Keep provider secrets server-side and webhook handling idempotent.

## Completion evidence

A page is not complete because its file exists. Verify the happy path and relevant failure/empty/loading/permission states, keyboard access, touch targets, scroll restoration and small-screen overflow. Record commands actually run and their outcomes. Never tick production checkboxes based on a wireframe or image. Update existing canonical documents rather than creating redundant roadmaps.
