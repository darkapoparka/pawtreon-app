# Donation status

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `donation-status`

**Surface:** planned route

**Planned path:** `/donations/[donationId]/status`

**Access:** owner or expiring guest token

**Family:** Donations

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Quiet, focused giving or practical-help task. Show recipient, total and the actual next action. No global dock, guilt prompts, fabricated payment badges or preselected subscriptions. External reference: ShareTheMeal simplicity and GoFundMe fundraiser context.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Pending while server verifies the payment
2. Confirmed outcome only from trusted provider event
3. Failure/retry without creating duplicate charges
4. Receipt and return links after success

## Composition

1. Pending while server verifies the payment
2. Confirmed outcome only from trusted provider event
3. Failure/retry without creating duplicate charges
4. Receipt and return links after success

## Actions and transitions

- **Preview receipt** -> [receipt](../receipt/README.md)
- **Return to campaign** -> [campaign](../campaign-detail/README.md)
- **Try another amount** -> [donate](../donation/README.md)
- **Back:** [donate](../donation/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

No additional data-entry fields are enumerated. Search/filter controls still follow the hierarchy and shared flows above; do not invent extra personal-data collection.

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| pending | Await trusted confirmation; no receipt or automatic second charge. |
| succeeded | Server-confirmed outcome and receipt, not success inferred from redirect. |
| failed | Explain failed operation and offer safe retry/support with context retained. |
| canceled | Cancellation with a return path, not a completed contribution. |
| offline | Retain context; never imply payment or server writes succeeded. |
| not-found | Safe missing/removed message; recover through browse or search. |
| permission-denied | No private content; explain safe sign-in/access recovery. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#donation-status) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.pending.v1.png`. Later browser evidence: `verification/browser-390.pending.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
