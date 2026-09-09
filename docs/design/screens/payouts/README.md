# Funding and payouts

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `payouts`

**Surface:** planned route

**Planned path:** `/workspaces/[workspaceId]/payouts`

**Access:** owner/finance-authorized; recent auth

**Family:** Workspace

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Mobile operational UI with readable lists and clear status, not a desktop table squeezed into a phone. Keep active organizer and permissions visible. Surface actions needing attention; do not fabricate donation balances, payouts or performance charts.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Provider approval and beneficiary readiness
2. Hosted onboarding; no bank-detail collection in prototype
3. Pending/available/paid/refunded/disputed amounts separate
4. Payout failure reasons and reconciliation history

## Composition

1. Provider approval and beneficiary readiness
2. Hosted onboarding; no bank-detail collection in prototype
3. Pending/available/paid/refunded/disputed amounts separate
4. Payout failure reasons and reconciliation history

## Actions and transitions

- **Read funding policy** -> [donation-policy](../donation-policy/README.md)
- **Contact support** -> [support](../support/README.md)
- **Return to workspace** -> [workspace](../workspace/README.md)
- **Back:** [workspace](../workspace/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

No additional data-entry fields are enumerated. Search/filter controls still follow the hierarchy and shared flows above; do not invent extra personal-data collection.

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| not-ready | Explain prerequisites; no fabricated balance or active payout action. |
| pending-verification | Show pending review and the available next steps. |
| ready | Name the precise capability available; do not imply unrelated verification. |
| held | Permitted hold explanation and support; not paid-out money. |
| failed | Explain failed operation and offer safe retry/support with context retained. |
| permission-denied | No private content; explain safe sign-in/access recovery. |
| offline | Retain context; never imply payment or server writes succeeded. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#payouts) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.not-ready.v1.png`. Later browser evidence: `verification/browser-390.not-ready.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
