# Pawtreon architecture

Status: implementation contract, not a claim that the backend already exists.

## Boundaries

One Next.js app has public discovery/detail routes, authenticated personal routes, organization workspaces and restricted reviewer routes. Server components load server-authorized data. Small client components own sheets, input state, map interaction and optimistic non-financial actions. Domain functions enforce permissions and state transitions. Supabase supplies identity, Postgres and object storage; access must be controlled by grants plus RLS, not UI visibility.

Use route groups `(public)`, `(auth)`, `(account)`, `(workspace)`, `(admin)` under `[locale]`. Route groups must not create duplicate URLs. Public metadata and share cards use absolute canonical URLs and real content. Unpublished/private records must never leak through metadata, sitemap, search indexes or static caches.

## Core model

| Entity | Important fields / invariants |
| --- | --- |
| users/profiles | auth identity, handle, display name, locale, private contact preferences |
| organizations | name, slug, kind clinic/store/organization, public area, private legal details |
| memberships | user, organization, role; unique pair; active/revoked state |
| organizer_contexts | personal user or organization; never a caller-supplied authorization shortcut |
| animal_cases | owner context, subject, species, need, urgency evidence, coarse area, status |
| campaigns | owner context, objective, budget, coarse area, start/end policy, status |
| campaign_cases | explicit links, consent and provenance; no implicit funds transfer |
| fundraisers | exactly one case or campaign target, currency, goal in minor units, beneficiary, readiness |
| budget_items | quantity, unit amount, category, evidence reference, approved amendments |
| media | owner context, purpose, public/private storage path, moderation/EXIF status |
| evidence | private document, review state, reviewer audit; public redacted summary separately |
| updates | parent case/campaign, author identity, timeline, media, optional spend evidence |
| donations | immutable provider identity, fundraiser, amount/currency, private donor link, status |
| ledger_entries | append-only movement, source event, signed minor-unit amount, reconciliation reference |
| payment_events | provider event ID unique, payload hash, receive/process status, retry metadata |
| help_requests | case, helper, type, private contact consent, disposition |
| saves/follows | user + subject unique; explicit notification preferences |
| notifications | user, event, delivery/read state, deduplication key |
| reports/reviews | subject, restricted evidence, reporter privacy, reason, decision, appeal history |
| audit_events | actor, acting identity, action, before/after references, request ID, timestamp |

Store all money as integer minor units and a currency. Goal edits after receipt of funds need a visible explanation and audit history. Financial totals are derived from trusted ledger entries; browser state cannot increment them. Treat refund, dispute and payout state independently. A campaign may associate many cases, but no donation is counted as both case revenue and campaign revenue.

## State machines

Content: `draft -> submitted -> needs_changes | published | rejected`; published items may become paused, resolved or archived. Reopening a resolved case requires a reason. Moderation approval never implies payment readiness.

Verification: `not_started -> submitted -> reviewing -> approved | needs_changes | rejected | expired`. Separate subject/evidence review from organizer identity verification. Display the exact meaning and date of each public badge.

Money: `created -> pending -> succeeded | failed | canceled`; later refunds and disputes are additional recorded events, not overwritten success flags. A redirect from a payment site only opens a pending result page. A trusted webhook or authenticated server query establishes the outcome. Payouts have their own `not_ready/pending/paid/failed/held` state.

## Authorization

Resolve authenticated user server-side, verify active membership, check operation-specific role, then enforce row ownership and allowed state transitions. Recheck on every mutation, upload URL issue, document read, invitation and financial action. Server-only service credentials must not be used as an unrestricted ordinary-user data path. Set explicit database grants, enable RLS, constrain INSERT/UPDATE checks, and avoid security-definer view leakage. Tests must include cross-workspace and revoked-member access.

Personal organizers receive an equivalent private workspace context so their management screens do not require a fake clinic/org. An organization type describes the entity; a membership role describes a human's access.

## Search and location

Canonical shareable query keys: `q`, `city`, `species`, `need`, `urgent`, `organizer`, `verified`, `sort`, `view`, `cursor`. Validate and bound all inputs. Initial search can use Postgres text search and indexed facets; do not add a search SaaS without measured need. Remember applied state across detail/back navigation.

Require an explicit user action before browser geolocation. Manual city selection must always work. Public animal pins show approved coarse areas, never automatically use photo coordinates or precise colony locations. Clinic/store business addresses may be public only when intentionally published by that organization. Load map code only on map view; no mandatory map SDK on the homepage.

## Drafts and uploads

Authenticated drafts are saved server-side with version checks. A local recovery buffer may supplement them but cannot substitute for persistence. Validate filename/type/size, quarantine new uploads, strip EXIF, scan documents, constrain storage ownership and serve private evidence through short-lived signed URLs. On interrupted uploads preserve other fields and support retry/removal. Do not publish generated rescue imagery as documentary evidence.

## Resilience and operations

Use server request IDs, structured redacted logs and error boundaries. Exclude private content, donation details and auth responses from shared caches and offline caches. Public read-only content may be cached with a clear freshness strategy; offline UI cannot imply an action succeeded. Transactional notifications use durable outbox/deduplication patterns when the backend is added. Run migration and restore checks on isolated environments before production. No automatic migration or paid deployment is authorized in this foundation.
