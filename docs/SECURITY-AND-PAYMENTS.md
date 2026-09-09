# Security, trust and funding launch gates

## Provider approval is a hard gate

As reviewed on 2026-09-09, Stripe lists crowdfunding/fundraising restrictions and limited availability for crowdfunding platforms. Its FAQ distinguishes approved Connect crowdfunding platforms from direct personal fundraising. Merely opening a Stripe account does not prove that Pawtreon's Bulgarian platform, personal fundraisers or particular recipient categories are supported.

Before selecting a live provider or connecting recipients, obtain written confirmation for the actual operator, country, personal/clinic/store/organization recipient types, donation flow and settlement model. Document fee/refund/dispute liability, reserves, payout schedule and who is merchant/beneficiary. Stripe Connect is a candidate, not an approved integration. Do not promise payout timing, tax deductibility, full donor protection or universal recipient eligibility.

Official sources: https://stripe.com/legal/restricted-businesses and https://support.stripe.com/questions/prohibited-and-restricted-businesses-list-faqs . Re-check before implementation. This design document is not legal advice or provider approval. An appropriate Bulgarian adviser must review the operator structure, fundraising model, terms, privacy and financial obligations before launch.

## Payment implementation invariants

Use hosted checkout and hosted beneficiary onboarding where supported. Validate amount, currency, fundraiser status, beneficiary and actor on the server. Never trust a client-supplied recipient ID or amount without binding it to server data. Use provider idempotency keys and unique event identifiers. Verify webhook signatures on the exact required payload; reject invalid events. Persist receipt of an event transactionally before applying ledger changes. Retries and out-of-order events must not inflate funding totals.

Browser redirects show pending until server confirmation. Keep append-only ledger entries and separate refund/dispute/payout states. Treat bank-account changes as sensitive operations requiring recent auth and the provider's verification. The app never acts as an informal pooled personal wallet. No live money movement, connected-account creation, payout change or fee collection is authorized during foundation work.

## Identity and data protection

Database grants plus RLS protect user/workspace boundaries. Credentials with elevated privileges remain server-only. Public read models deliberately omit donor emails, private contacts, evidence documents and precise animal locations. Audit privileged reads and writes. Strip image EXIF and use quarantined/private uploads with bounded size/type and signed access. No public document URL may be used as evidence access control.

Do not publish full bank details, identity documents, license scans or unredacted invoices in public case updates. Display verification precisely: entity identity, evidence review and payment readiness are different. Provide review reasons and an appeal channel. Generated cats, generated receipts, invented urgent histories or fake supporter counts must never appear as evidence of a real rescue.

## Public location and safeguarding

Default to city/neighborhood, not precise colony pins. Exact rescue/colony location and helper contact are restricted to an explicitly authorized operational workflow. Do not expose those details through image metadata, map URLs, API responses or share-card text. Deliberately published clinic/store addresses are a separate business-location type. Denied geolocation must not block use.

## Release checklist

- [ ] Operator identity and legal documents reviewed for the actual Bulgarian model.
- [ ] Payment provider explicitly approves the platform and intended recipient categories.
- [ ] Beneficiary onboarding and payout requirements verified with real test accounts.
- [ ] Signed, duplicate and out-of-order webhook tests pass.
- [ ] Guest and signed-in receipts cannot be enumerated or accessed across accounts.
- [ ] Refund, dispute, cancellation, unused-funds and reconciliation journeys verified.
- [ ] Personal/org/member authorization and revocation tests pass.
- [ ] Public/private evidence and location privacy tested from unauthenticated requests.
- [ ] Moderation staffing, reporting, appeal and incident response are assigned.
- [ ] Privacy retention/export/deletion and consent behavior reviewed and tested.
