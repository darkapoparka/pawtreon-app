# This sign-in link expired

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `auth-error`

**Surface:** planned route

**Planned path:** `/auth/error`

**Access:** public

**Family:** Identity

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

One human login, then optional organization setup. Compact logo and calm forms, no mandatory splash carousel. All input text remains readable with the software keyboard. Do not copy password/social-login options that are not in the route contract.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Clear recovery without leaking account status
2. Request a fresh link
3. Restore intended destination after valid login

## Composition

1. Clear recovery without leaking account status
2. Request a fresh link
3. Restore intended destination after valid login

## Actions and transitions

- **Request another link** -> [sign-in](../sign-in/README.md)
- **Browse cases** -> [home](../homepage/README.md)
- **Back:** [sign-in](../sign-in/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

No additional data-entry fields are enumerated. Search/filter controls still follow the hierarchy and shared flows above; do not invent extra personal-data collection.

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| expired | Explain expiry and the relevant reissue/reverification action. |
| invalid-link | Safe invalid-link message with fresh-link recovery. |
| error | Useful retry; preserve query, input and intended destination. |
| offline | Retain context; never imply payment or server writes succeeded. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#auth-error) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.expired.v1.png`. Later browser evidence: `verification/browser-390.expired.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
