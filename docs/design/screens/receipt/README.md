# Contribution receipt

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `receipt`

**Surface:** planned route

**Planned path:** `/donations/[donationId]/receipt`

**Access:** owner or expiring guest token

**Family:** Donations

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Quiet, focused giving or practical-help task. Show recipient, total and the actual next action. No global dock, guilt prompts, fabricated payment badges or preselected subscriptions. External reference: ShareTheMeal simplicity and GoFundMe fundraiser context.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Recipient and case/campaign reference
2. Amount/currency, fee treatment and date
3. Provider transaction reference, no card secrets
4. Receipt is not automatically a tax-deductibility certificate

## Composition

1. Recipient and case/campaign reference
2. Amount/currency, fee treatment and date
3. Provider transaction reference, no card secrets
4. Receipt is not automatically a tax-deductibility certificate

## Actions and transitions

- **View donation history** -> [donations](../donations/README.md)
- **Contact support** -> [support](../support/README.md)
- **Return to campaign** -> [campaign](../campaign-detail/README.md)
- **Back:** [donation-status](../donation-status/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

No additional data-entry fields are enumerated. Search/filter controls still follow the hierarchy and shared flows above; do not invent extra personal-data collection.

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| default | Normal content; actions reflect access and readiness. Illustrative data only. |
| loading | Reserve layout with skeletons; no blank page or jumping footer. |
| error | Useful retry; preserve query, input and intended destination. |
| permission-denied | No private content; explain safe sign-in/access recovery. |
| not-found | Safe missing/removed message; recover through browse or search. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#receipt) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
