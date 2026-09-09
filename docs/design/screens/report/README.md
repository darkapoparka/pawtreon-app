# Report a concern

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `report`

**Surface:** planned route

**Planned path:** `/report?subject=[type:id]`

**Access:** public with abuse prevention

**Family:** Review and help

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Calm, task-first pages using shared typography and controls. Admin screens need explicit permissions, reasons and evidence separation; support/legal screens need readable text. No ornamental animal hero or consumer dock inside a review decision task.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Subject being reported
2. Fraud, misleading evidence, animal welfare or privacy reason
3. Optional private contact; no public accusation page
4. Acknowledgement and review expectations

## Composition

1. Subject being reported
2. Fraud, misleading evidence, animal welfare or privacy reason
3. Optional private contact; no public accusation page
4. Acknowledgement and review expectations

## Actions and transitions

- **Preview report acknowledgement** -> [support](../support/README.md)
- **Return to case** -> [case](../case-detail/README.md)
- **Back:** [case](../case-detail/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

| Label | Input | Contract example/options |
| --- | --- | --- |
| Reason | select | Misleading fundraiser\|Animal welfare\|Privacy\|Other |
| What concerns you? | textarea | Not specified |
| Contact email (optional) | email | Not specified |

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

[Existing low-fidelity wireframe](../../wireframes/index.html#report) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
