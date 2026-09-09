# Acceptance matrix

Design work is not production readiness. Test on the actual candidate commit and record command output. An image is not browser evidence.

## Foundation acceptance

The route catalogue has unique IDs, valid prototype destinations, explicit access rules, layout sections, primary actions and failure states. Every route has a reachable wireframe. The workbench visibly labels simulation, never collects card details, and does not claim actual authentication or payment. CLI initialization, install, lint, typecheck and build outcomes are recorded, including failures rather than concealed by waived checks.

## Mobile acceptance

At 320, 360, 390 and 430px: no horizontal document overflow, clipped primary controls or overlapping sticky bars. Use real content height and scroll. Header and dock meet the UI contract; no fake device chrome in the web app. Verify safe areas, keyboard-open forms, dynamic browser chrome and long translated copy. At 200% zoom the primary tasks remain possible. Grid becomes one column below 375px. Cards use full accessible names even when visual titles truncate.

## Accessibility

Automated axe checks support but do not replace manual keyboard/screen-reader checks. Verify labels, errors, focus order/return, headings, alt text, reduced motion and contrast. Sheet/dialog behavior uses accessible primitives in the actual app. No nested interactive controls. Donation outcomes and form errors are announced without moving focus unexpectedly.

## Journeys to prove before launch

| Journey | Required evidence |
| --- | --- |
| Discovery | Manual city, denied GPS, filter apply/cancel/reset, search empty/error, map/list, Back scroll |
| Details | Current status, true organizer, evidence privacy, share, paused/resolved CTA |
| Identity | Email delivery, callback validation, expiry/resend, account creation, session expiry |
| Membership | Invite/accept/expire/revoke, identity switch, role boundaries, last-owner protection |
| Publish | Draft persistence, refresh/back, file retry, validation, concurrency, review feedback |
| Money | Provider approval, real sandbox checkout, pending/success/failure, duplicate/out-of-order events |
| Receipts | Guest token/access expiry, account ownership, refund/dispute visibility, email retry |
| Practical help | Consent, submission, notification, acceptance/decline/cancel without public contact leak |
| Updates | Authorized publish, redacted evidence, budget amendment, resolve/pause behavior |
| Moderation | Private evidence access, conflict-of-interest restriction, reason/audit, appeal |
| Privacy | Public read redaction, EXIF stripping, precise-location protection, data-request workflow |

## Desktop acceptance

Use a sensible max-width and grid. Discovery is not a stretched phone screenshot. Workspaces use a sidebar; detail pages have a readable main column and contribution summary. No giant mobile dock on desktop. URLs and permissions remain the same across form factors.

## Status terminology

`specified` = route/flow contract written. `wireframed` = screen and navigation exist in the prototype. `visual-concept` = an illustrative image exists. `implemented` = real behavior exists. `verified` = behavior was exercised with evidence on a known SHA. `approved` = owner accepted the design/candidate. Never treat these as interchangeable.
