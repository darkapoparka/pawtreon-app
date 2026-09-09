# Join a Pawtreon team

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `invitation`

**Surface:** planned route

**Planned path:** `/invitations/[token]`

**Access:** invited authenticated identity

**Family:** Identity

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

One human login, then optional organization setup. Compact logo and calm forms, no mandatory splash carousel. All input text remains readable with the software keyboard. Do not copy password/social-login options that are not in the route contract.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Inviting organization and inviter
2. Explicit role and permission summary
3. Accept / decline; expiry and revoked state
4. Confirm matching email without exposing other invitations

## Composition

1. Inviting organization and inviter
2. Explicit role and permission summary
3. Accept / decline; expiry and revoked state
4. Confirm matching email without exposing other invitations

## Actions and transitions

- **Accept invitation (prototype)** -> [workspace](../workspace/README.md)
- **Decline and return** -> [account](../account/README.md)
- **Back:** [account](../account/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

No additional data-entry fields are enumerated. Search/filter controls still follow the hierarchy and shared flows above; do not invent extra personal-data collection.

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| default | Normal content; actions reflect access and readiness. Illustrative data only. |
| expired | Explain expiry and the relevant reissue/reverification action. |
| revoked | No protected workspace content; explain unavailable access. |
| already-accepted | Show existing membership status without accepting twice. |
| wrong-account | Appropriate sign-in recovery without exposing other invitations. |
| error | Useful retry; preserve query, input and intended destination. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#invitation) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
