# Offer practical help

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `offer-help`

**Surface:** planned route

**Planned path:** `/cases/[slug]/help`

**Access:** signed-in

**Family:** Donations

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Quiet, focused giving or practical-help task. Show recipient, total and the actual next action. No global dock, guilt prompts, fabricated payment badges or preselected subscriptions. External reference: ShareTheMeal simplicity and GoFundMe fundraiser context.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Choose food, materials, transport or foster help
2. Describe availability and approximate area
3. Private contact-consent statement
4. Sent request is not an accepted placement

## Composition

1. Choose food, materials, transport or foster help
2. Describe availability and approximate area
3. Private contact-consent statement
4. Sent request is not an accepted placement

## Actions and transitions

- **Send help offer (prototype)** -> [help-sent](../help-sent/README.md)
- **Back to case** -> [case](../case-detail/README.md)
- **Back:** [case](../case-detail/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

| Label | Input | Contract example/options |
| --- | --- | --- |
| Help type | select | Food\|Shelter materials\|Transport\|Foster care |
| What can you offer? | textarea | Not specified |
| Contact email | email | Not specified |
| Share my contact with the organizer | checkbox | Not specified |

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

[Existing low-fidelity wireframe](../../wireframes/index.html#offer-help) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
