# Welcome back

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `sign-in`

**Surface:** planned route

**Planned path:** `/sign-in`

**Access:** public

**Family:** Identity

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

One human login, then optional organization setup. Compact logo and calm forms, no mandatory splash carousel. All input text remains readable with the software keyboard. Do not copy password/social-login options that are not in the route contract.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Email-link sign-in
2. Optional supported social login after setup
3. Return-to-route preserved
4. No simulated authenticated production session

## Composition

1. Email-link sign-in
2. Optional supported social login after setup
3. Return-to-route preserved
4. No simulated authenticated production session

## Actions and transitions

- **Preview email step** -> [check-email](../check-email/README.md)
- **Create an account** -> [sign-up](../sign-up/README.md)
- **Back:** [home](../homepage/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

| Label | Input | Contract example/options |
| --- | --- | --- |
| Email address | email | Not specified |

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| default | Normal content; actions reflect access and readiness. Illustrative data only. |
| submitting | One pending action; prevent duplicate submission. |
| invalid-email | Adjacent email guidance without account enumeration. |
| rate-limited | Show safe retry timing; retain input and destination. |
| error | Useful retry; preserve query, input and intended destination. |
| offline | Retain context; never imply payment or server writes succeeded. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#sign-in) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
