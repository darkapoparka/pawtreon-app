# How will you help?

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `onboarding`

**Surface:** planned route

**Planned path:** `/onboarding`

**Access:** signed-in

**Family:** Identity

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

One human login, then optional organization setup. Compact logo and calm forms, no mandatory splash carousel. All input text remains readable with the software keyboard. Do not copy password/social-login options that are not in the route contract.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Personal profile basics
2. Default city and language
3. Optional create/join organization next
4. Skip organization setup; no fundraising claim yet

## Composition

1. Personal profile basics
2. Default city and language
3. Optional create/join organization next
4. Skip organization setup; no fundraising claim yet

## Actions and transitions

- **Continue to account** -> [account](../account/README.md)
- **Set up an organization** -> [organization-new](../organization-new/README.md)
- **Back:** [home](../homepage/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

| Label | Input | Contract example/options |
| --- | --- | --- |
| Display name | text | Not specified |
| City | select | Varna\|Sofia\|Plovdiv\|Other |
| Language | select | Bulgarian\|English |

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

[Existing low-fidelity wireframe](../../wireframes/index.html#onboarding) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
