# Create your organization

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `organization-new`

**Surface:** planned route

**Planned path:** `/organizations/new`

**Access:** signed-in

**Family:** Identity

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

One human login, then optional organization setup. Compact logo and calm forms, no mandatory splash carousel. All input text remains readable with the software keyboard. Do not copy password/social-login options that are not in the route contract.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Clinic / store / organization entity type
2. Public name and service area
3. Authority-to-represent declaration
4. Verification and payout setup are separate next steps

## Composition

1. Clinic / store / organization entity type
2. Public name and service area
3. Authority-to-represent declaration
4. Verification and payout setup are separate next steps

## Actions and transitions

- **Create workspace (prototype)** -> [workspace](../workspace/README.md)
- **Use personal profile** -> [account](../account/README.md)
- **Back:** [onboarding](../onboarding/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

| Label | Input | Contract example/options |
| --- | --- | --- |
| Entity type | select | Clinic\|Store\|Organization |
| Organization name | text | Not specified |
| City | text | Not specified |
| I am authorized to represent this organization | checkbox | Not specified |

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

[Existing low-fidelity wireframe](../../wireframes/index.html#organization-new) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
