# Foundation setup record

Date: 2026-09-09. This is design/setup evidence, not production acceptance.

## Repository and workspace

The requested repository was empty. The new checkout is `M:\pawtreon-app-20260909`, origin `darkapoparka/pawtreon-app`, branch `main`.
The existing `M:\pawtreon-app` instead targets `pawtreon-next` and has extensive uncommitted work. It was not modified.
Design-first commit: `ce8362d` (before framework initialization).

## Executed setup

- Node 24.18.0; pnpm 11.4.0; Git 2.47.1.windows.2.
- Official `pnpm dlx create-next-app@16.3.4 cli-bootstrap --typescript --tailwind --eslint --app --src-dir --use-pnpm --import-alias @/* --empty --skip-install --disable-git --yes`.
- Generated files moved into the new clone, preserving authored docs and appending generated agent guidance.
- Official `pnpm dlx shadcn@4.21.0 init --base radix --defaults --yes --no-monorepo`.
- Official shadcn add: input, label, textarea, select, sheet, tabs, dialog, badge, skeleton, progress and sonner; button was installed by init.
- Installed React Hook Form, Zod/resolver, next-intl, Lucide, Playwright and axe.
- Selectively approved required build scripts for `@parcel/watcher` and `@swc/core`; no blanket build-script approval.
- Application versions: Next 16.3.4, React/React DOM 19.2.8, Tailwind 4.3.3, TypeScript 6.0.3.

## Compatibility limitation

The latest observed TypeScript was 7.0.2, but the lint parser declared support below 6.1. TypeScript 6.0.3 was selected. ESLint 10 conflicted with three Next lint plugins, so the official scaffold's compatible ESLint 9.39.5 was retained. It carries an upstream deprecation warning. This tooling upgrade remains a maintenance task, not a hidden waived check. `pnpm peers check` returned no peer conflicts after correction.

## Verification performed

- `pnpm peers check`: no dependency peer conflicts.
- `pnpm lint`: passed.
- `pnpm typecheck`: passed, including generated route types.
- `pnpm build`: passed; actual Next routes are `/`, `/design` and the not-found boundary.
- Agent-browser opened the Next workbench and found the screen selector, mobile content and navigation.
- Playwright rendered all 53 screen contracts at 320, 360, 390 and 430px: 212 checks, zero blank screens, zero horizontal overflow findings and zero JavaScript page errors.
- Automated axe checks passed on home, campaign, create-basics, donate and account. A wizard ARIA-role issue found in the first pass was corrected and the checks rerun.
- Screenshot and JSON evidence is in `docs/verification/`. Home and campaign screenshots were visually inspected.

These are foundation checks, not proof of every state or real service journey. Advanced filters, sorting, map tiles, draft persistence, authentication, payment, receipt and moderation behavior remain prototype/implementation contracts. Mobile operating-system keyboard, screen-reader and real-device checks remain pending.

## Running locally

The production build was started with `pnpm start --hostname 127.0.0.1 --port 4183`. Open `http://127.0.0.1:4183/design` on the authorized computer. The standalone file `docs/design/wireframes/index.html` also opens without a server.

## Assets and services

No cloud project, payment account or production deployment was created. Image-generation briefs are committed; generated chat images are not automatically imported onto the Windows machine. Track their actual import and owner approval separately. Wireframe screenshots are present and are not the same as high-fidelity image-generation concept boards.
