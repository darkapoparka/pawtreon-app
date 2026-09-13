# Pawtreon product requirements

Status: proposed v1 scope, 2026-09-09. Product owner: the repository owner. Initial market: Bulgaria; Bulgarian-first production copy and optional English. Varna and euro amounts in concepts are illustrative, not confirmation of an organizer address, campaign target or funds raised.

## Purpose and first launch story

Make it possible to find animals needing help, understand who is responsible, contribute safely, and see what changed. First use case: a neighborhood carer creates a transparent winter-shelter campaign for street cats, with materials, target budget, construction updates and proof of delivery. The product must also support veterinary care and daily food needs.

The launch is not a social network, pet-shop marketplace, public animal-abuser blacklist or a national logistics company. Prioritize trustworthy cases, campaigns, organizer identities and updates over engagement mechanics.

## Case versus campaign

A **case** represents a particular animal or defined small group and a concrete need: treatment, food, shelter or foster placement. A case may request money, non-monetary help, or both. Do not show funding progress for a foster-only case.

A **campaign** is a coordinated initiative with a budget and outcome, potentially involving multiple cases: winter shelters for one neighborhood, a feeding program or a sterilization initiative. A case linked to a campaign keeps its own identity. Linking must not double-count donations. Each payment targets one fundraiser ledger; allocation between linked needs is explicit and auditable.

A shared **fundraiser** holds financial settings for either a case or a campaign. A campaign does not automatically become a registered charity, and a store/clinic label is not verification.

## External source links, reposting and canonical cases

Pawtreon does not recreate X/Facebook-style reposts inside a social feed. A user may start a Pawtreon draft from an external post or URL, but the result is a normal canonical **case** or **campaign** with Pawtreon's own structured fields, responsible organizer, status and help request. The external item is source material, not a new content type and not proof that the poster authorized fundraising.

A source-assisted draft must preserve source attribution and the original URL where appropriate, detect obvious duplicate URLs/cases, and never import likes, repost counts, follower counts or other engagement metrics as trust signals. Before money can be enabled, the responsible organizer/beneficiary, permissions, evidence and payment readiness must be established through the same workflow as any other fundraiser.

Sharing works outward too: users share the canonical Pawtreon case/campaign URL to X, Facebook, messaging apps or elsewhere. Sharing spreads one case; it must not create duplicate fundraiser ledgers or duplicate donation totals.

## Identities and permissions

A human signs in once and owns a personal profile. They can also create or join organization workspaces typed `clinic`, `store`, or `organization`. Account switching changes the active acting identity; it must not create four incompatible login systems.

Workspace roles: owner, manager, contributor, viewer. Owner controls payout onboarding and membership. Managers edit/publish and post updates. Contributors prepare drafts; publication requires manager or owner review. Viewers read permitted workspace data. Platform reviewers separately moderate content; finance permissions are not implied by moderation.

Visitors browse and share without logging in. Saving, following, publishing, applying to help, and managing a workspace require authentication. Donation should allow guest checkout when the approved provider supports it; a receipt email must not silently create an account or marketing subscription.

## MVP capabilities

1. Discover cases/campaigns by city, species, need, urgency and organizer type; open a list or privacy-preserving map. Search and filter state survives navigation/back.
2. Open a case/campaign with clear story, responsible organizer, approximate area, budget, evidence summary, updates and an honest funding status. Distinguish identity verification, evidence review and payout readiness.
3. Use a transparent donation journey: amount, recipient, total/fees, optional display-name privacy, provider-hosted payment, server-confirmed result and receipt. Gate this entire capability on processor eligibility.
4. Publish via a resumable wizard: identity, subject, location, need, story, photos, budget/evidence, review and submit. A source URL may prefill a draft, but never bypasses required ownership, evidence, moderation or payout checks. Moderation and payment onboarding are explicit states, not invisible reasons why a button fails.
5. Maintain personal and organization profiles, saved items, donations, follows/notifications and organizer workspaces. Invite staff and scope their access.
6. Post progress updates, record case resolution, request non-monetary help and report suspicious content. Reviewers have queues, evidence access controls, reasons and audit history.

## Minimum trust information

Every published item shows the responsible organizer, created/updated dates, help requested, location precision, status and a contact/report mechanism. Money-enabled items also show beneficiary, budget, provider-backed readiness, raised/goal with defined refund treatment, and use-of-funds explanation. Public financial history must distinguish donated, refunded, disputed, pending and paid-out money.

## First campaign content requirements

Use the owner's real photographs and an itemized plan before publishing. Record how many shelters are planned, materials, per-shelter cost, permissions for installation, maintenance responsibility and contingency for a shortfall or surplus. The app must not fabricate those quantities, permissions, a deadline, endorsements or donations. Completed shelter photos and receipts become dated updates after the work happens.

## Non-goals for v1

Recurring giving, multi-currency settlement, live animal tracking, public exact colony pins, AI medical advice, automated case verification, private messaging, social feeds, shopping carts, subscription billing, advanced CRM, rewards/raffles, native iOS/Android applications and automatic paid cloud provisioning. Later work requires a concrete user need and an approved task.

## Success and release criteria

Instrument discovery-to-detail, detail-to-donation-start, provider-confirmed donation conversion, draft completion, time to moderation decision, and update frequency. Define numeric business targets after a pilot instead of inventing baselines. Release requires the acceptance matrix, real authorization tests, payment approval, refund/dispute handling, verified content and an accountable moderation process.
