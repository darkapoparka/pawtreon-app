# Donation and funding policy

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `donation-policy`

**Surface:** planned route

**Planned path:** `/legal/donations`

**Access:** public

**Family:** Review and help

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Calm, task-first pages using shared typography and controls. Admin screens need explicit permissions, reasons and evidence separation; support/legal screens need readable text. No ornamental animal hero or consumer dock inside a review decision task.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Recipient and processor; platform fee disclosure
2. Refunds, disputes, unused funds and cancellation
3. No guaranteed outcome or automatic tax deduction
4. Provider approval and reviewed legal text required

## Composition

1. Recipient and processor; platform fee disclosure
2. Refunds, disputes, unused funds and cancellation
3. No guaranteed outcome or automatic tax deduction
4. Provider approval and reviewed legal text required

## Actions and transitions

- **Contact support** -> [support](../support/README.md)
- **Return to campaign** -> [campaign](../campaign-detail/README.md)
- **Back:** [support](../support/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

No additional data-entry fields are enumerated. Search/filter controls still follow the hierarchy and shared flows above; do not invent extra personal-data collection.

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| default | Normal content; actions reflect access and readiness. Illustrative data only. |
| loading | Reserve layout with skeletons; no blank page or jumping footer. |
| empty | Explain what is absent; offer relevant browse, create or reset action. |
| error | Useful retry; preserve query, input and intended destination. |
| offline | Retain context; never imply payment or server writes succeeded. |
| permission-denied | No private content; explain safe sign-in/access recovery. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#donation-policy) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
