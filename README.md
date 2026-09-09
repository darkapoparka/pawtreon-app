# Pawtreon

A mobile-first animal-help platform for Bulgaria. People, clinics, stores and organizations can publish animal cases and community fundraising campaigns.

## Current phase

Design-first foundation. This repository is intentionally new. Wireframes, route contracts and flow specifications precede production feature implementation. Prototype data is illustrative; no live donations, authentication, verification or payouts are implied.

Start with [PRD](PRD.md), [design decisions](docs/design/DECISIONS.md), [UI specification](docs/design/UI-SPEC.md), [route catalogue](docs/design/ROUTES.md) and [journeys](docs/design/FLOWS.md). Open `docs/design/wireframes/index.html` for the standalone clickable wireframe workbench.

Screen-by-screen design: [53 individual folders](docs/design/screens/README.md), [generation/review workflow](docs/design/SCREEN-WORKFLOW.md), and [current reference apps](docs/design/REFERENCE-APPS.md). Each screen has a specification, relevant states and its own image brief. The high-fidelity images are not yet imported or approved.

Implementation guidance: [AGENTS.md](AGENTS.md), [TECHSTACK.md](TECHSTACK.md), [ARCHITECTURE.md](ARCHITECTURE.md), [TASKS.md](TASKS.md), [security and payments](docs/SECURITY-AND-PAYMENTS.md), [acceptance](docs/ACCEPTANCE.md).

## Workspace identity

- Repository: `darkapoparka/pawtreon-app`.
- Branch: `main` (the linked repository was empty at initialization).
- New checkout: `M:\pawtreon-app-20260909`.
- Do not confuse this with `M:\pawtreon-app`: that existing folder points to `darkapoparka/pawtreon-next` and contained extensive uncommitted work. It was not modified.

## Development

The official create-next-app and shadcn CLIs initialize the application after the design documentation commit. Exact installed versions and command outcomes are recorded in `docs/SETUP-RECORD.md` after execution.

Use the package manager pinned in `package.json`. Once installed: `pnpm install --frozen-lockfile`, `pnpm dev`, `pnpm lint`, `pnpm typecheck`, `pnpm build`.

The initial `/design` workbench is a prototype, not the public launch product. It contains route wireframes and simulated navigation, never a real payment form. Product routes in the catalogue are contracts to implement, not claims of working backends.
