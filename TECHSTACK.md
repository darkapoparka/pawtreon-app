# Technology decision

Decision date: 2026-09-09. Scope: one mobile-first responsive web application, not native mobile apps.

## Framework decision: Next.js

Choose Next.js App Router with TypeScript. The owner already has a React/Next.js workflow; keeping that ecosystem avoids learning and maintaining a second framework while trying to launch. SvelteKit is technically capable of this product and supports server rendering and form actions. It would not, by itself, fix navigation, donation trust, layout density or mobile ergonomics. This is a delivery decision, not a claim that Next.js is universally faster or more beautiful.

Do not use next-forge or a multi-application monorepo for v1. Public pages, account screens, organizer tools and reviewer routes can share one app and one design system. Route groups separate shells, not deployment units.

## Selected foundation

| Layer | Decision | Status |
| --- | --- | --- |
| Runtime | Existing Node.js 24 LTS line; record installed patch | Local prerequisite |
| Package manager | pnpm, pinned to the observed compatible version | Local prerequisite |
| Framework | Latest stable Next.js returned by the registry at setup, then exact pin | CLI installation |
| Language | TypeScript version compatible with the generated framework | CLI installation |
| UI runtime | React and React DOM, matched exact versions | CLI installation |
| Styling | Tailwind CSS, CSS variables, neutral white/ink palette | CLI installation |
| Primitives | shadcn/ui through its official CLI; Radix base; own source in components/ui | CLI installation |
| Icons | lucide-react; one consistent stroke and size | Frontend dependency |
| Forms | React Hook Form + Zod + resolver | Frontend dependency |
| Localization | next-intl; production Bulgarian and English | Frontend dependency; integration later |
| Browser testing | Playwright + axe-core integration | Dev dependency |
| Auth/data/storage | Supabase Auth, Postgres, Storage in an appropriate EU region | Selected architecture; not provisioned |
| Money movement | Provider-hosted checkout/onboarding behind a payment adapter | Provider eligibility unresolved |
| Hosting | Vercel-compatible Next.js; no deployment in this foundation task | Planned, not provisioned |

Do not install database/payment/analytics SDKs merely to make the dependency list look complete. Add them with the first approved, tested integration. No paid resources, API keys, identity-provider configuration or payment accounts are created by this design task.

## Installation policy

Use official create-next-app, then official shadcn init/add. Do not hand-write a pretend framework scaffold. Capture CLI output and resolved versions; commit the lockfile. The design documentation is committed first. Because the clone already contains those documents, run create-next-app into a temporary, newly-created `cli-bootstrap` directory with `--skip-install --disable-git`; move its generated application/config files into the clone, preserving the authored README and documents. Install at the real repository root, then remove only that task-created staging directory.

Never rewrite the unrelated `M:\pawtreon-app` application. Never use global package-manager configuration changes to bypass an unrelated project's constraints. After initialization, use frozen-lockfile installs for repeatability. Exact executed commands and verification evidence belong in `docs/SETUP-RECORD.md`.

## Planned source layout

`src/app` for route groups and server entry points; `src/components/ui` for CLI primitives; `src/components/pawtreon` for product components; `src/features` for case/campaign/account features; `src/lib` for domain utilities and adapters; `messages` for locale dictionaries; `supabase/migrations` for reviewed SQL and policies once data implementation starts; `tests` for browser and integration evidence.

Public routes use locale prefixes in production (`/bg`, `/en`); the route catalogue omits those prefixes for readability. `/design` remains an explicitly labeled, noindex prototype workbench, not a public application route.

## Current official references

- Next.js installation: https://nextjs.org/docs/app/getting-started/installation
- Next.js CLI: https://nextjs.org/docs/app/api-reference/cli/create-next-app
- SvelteKit capabilities: https://svelte.dev/docs/kit/introduction
- shadcn CLI: https://ui.shadcn.com/docs/cli
- Supabase server-side auth: https://supabase.com/docs/guides/auth/server-side/creating-a-client
- Supabase grants and RLS: https://supabase.com/docs/guides/database/postgres/row-level-security
- Stripe restricted businesses: https://stripe.com/legal/restricted-businesses
- Stripe fundraising FAQ: https://support.stripe.com/questions/prohibited-and-restricted-businesses-list-faqs

Sources reviewed on the decision date. Re-check provider eligibility and integration APIs at implementation; documentation here is not legal or processor approval.
