# Workspace settings

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `workspace-settings`

**Surface:** planned route

**Planned path:** `/workspaces/[workspaceId]/settings`

**Access:** owner/manager; operation-specific checks

**Family:** Workspace

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Mobile operational UI with readable lists and clear status, not a desktop table squeezed into a phone. Keep active organizer and permissions visible. Surface actions needing attention; do not fabricate donation balances, payouts or performance charts.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Name, entity type and service area
2. Intentional public contacts; precise colony data never public
3. Membership ownership changes protected
4. Archive policy retains financial records

## Composition

1. Name, entity type and service area
2. Intentional public contacts; precise colony data never public
3. Membership ownership changes protected
4. Archive policy retains financial records

## Actions and transitions

- **Save settings (prototype)** -> [workspace](../workspace/README.md)
- **Preview profile** -> [organization](../organization-profile/README.md)
- **Back:** [workspace](../workspace/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

| Label | Input | Contract example/options |
| --- | --- | --- |
| Public name | text | Not specified |
| Service area | text | Not specified |
| Public contact email (optional) | email | Not specified |

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

[Existing low-fidelity wireframe](../../wireframes/index.html#workspace-settings) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
