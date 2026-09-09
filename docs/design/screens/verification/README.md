# Organizer verification

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `verification`

**Surface:** planned route

**Planned path:** `/workspaces/[workspaceId]/verification`

**Access:** owner or authorized manager

**Family:** Workspace

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Mobile operational UI with readable lists and clear status, not a desktop table squeezed into a phone. Keep active organizer and permissions visible. Surface actions needing attention; do not fabricate donation balances, payouts or performance charts.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. What verification does and does not mean
2. Private organization/clinic supporting documents
3. Review status and corrections
4. Payout-provider verification is separate

## Composition

1. What verification does and does not mean
2. Private organization/clinic supporting documents
3. Review status and corrections
4. Payout-provider verification is separate

## Actions and transitions

- **Submit evidence (prototype)** -> [workspace](../workspace/README.md)
- **Contact support** -> [support](../support/README.md)
- **Back:** [workspace](../workspace/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

| Label | Input | Contract example/options |
| --- | --- | --- |
| Public organization name | text | Not specified |
| Private supporting document | file | Not specified |
| Context for the reviewer | textarea | Not specified |

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| not-started | Explain required evidence and privacy before beginning. |
| submitted | Submission received, not automatically published or payout-ready. |
| reviewing | Evidence under review; no premature approval badge. |
| approved | Exact scope and date of approval, not an unlimited trust claim. |
| needs-changes | Specific corrections and return to the affected form step. |
| rejected | Decision, permitted reason and correction/appeal/support route. |
| expired | Explain expiry and the relevant reissue/reverification action. |
| permission-denied | No private content; explain safe sign-in/access recovery. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#verification) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.not-started.v1.png`. Later browser evidence: `verification/browser-390.not-started.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
