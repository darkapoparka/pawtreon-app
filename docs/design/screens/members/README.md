# Your team

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `members`

**Surface:** planned route

**Planned path:** `/workspaces/[workspaceId]/members`

**Access:** owner; manager limited read

**Family:** Workspace

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Mobile operational UI with readable lists and clear status, not a desktop table squeezed into a phone. Keep active organizer and permissions visible. Surface actions needing attention; do not fabricate donation balances, payouts or performance charts.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Members and role descriptions
2. Invite by email; expiry and revoke
3. Prevent removing the last owner
4. No contributor escalation through client fields

## Composition

1. Members and role descriptions
2. Invite by email; expiry and revoke
3. Prevent removing the last owner
4. No contributor escalation through client fields

## Actions and transitions

- **Preview invitation** -> [invitation](../invitation/README.md)
- **Return to workspace** -> [workspace](../workspace/README.md)
- **Back:** [workspace](../workspace/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

| Label | Input | Contract example/options |
| --- | --- | --- |
| Invite email | email | Not specified |
| Role | select | Manager\|Contributor\|Viewer |

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| default | Normal content; actions reflect access and readiness. Illustrative data only. |
| pending-invite | Invite, role and status with authorized revoke/resend actions. |
| expired | Explain expiry and the relevant reissue/reverification action. |
| last-owner-blocked | Explain last-owner protection and ownership-transfer recovery. |
| permission-denied | No private content; explain safe sign-in/access recovery. |
| error | Useful retry; preserve query, input and intended destination. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#members) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
