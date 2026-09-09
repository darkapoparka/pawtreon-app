# Review a submission

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `review-detail`

**Surface:** planned route

**Planned path:** `/admin/reviews/[reviewId]`

**Access:** assigned/authorized platform reviewer

**Family:** Review and help

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Calm, task-first pages using shared typography and controls. Admin screens need explicit permissions, reasons and evidence separation; support/legal screens need readable text. No ornamental animal hero or consumer dock inside a review decision task.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Public preview beside restricted evidence
2. Identity and factual evidence checks are separate
3. Approve / request changes / reject with reason
4. Immutable audit and no approval of own submission

## Composition

1. Public preview beside restricted evidence
2. Identity and factual evidence checks are separate
3. Approve / request changes / reject with reason
4. Immutable audit and no approval of own submission

## Actions and transitions

- **Record review decision (prototype)** -> [review-queue](../review-queue/README.md)
- **View public preview** -> [campaign](../campaign-detail/README.md)
- **Back:** [review-queue](../review-queue/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

| Label | Input | Contract example/options |
| --- | --- | --- |
| Decision | select | Request changes\|Approve content\|Reject |
| Reason and feedback | textarea | Not specified |

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| default | Normal content; actions reflect access and readiness. Illustrative data only. |
| locked | Another reviewer is editing; prevent conflicting decisions. |
| already-reviewed | Show recorded decision and audit context; no duplicate decision. |
| permission-denied | No private content; explain safe sign-in/access recovery. |
| error | Useful retry; preserve query, input and intended destination. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#review-detail) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
