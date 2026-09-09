# Choose your contribution

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `donate`

**Surface:** planned route

**Planned path:** `/donate/[fundraiserId]`

**Access:** public; provider eligibility gate

**Family:** Donations

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

ShareTheMeal focused amount-selection pattern; GoFundMe recipient/fundraiser context. Retain Pawtreon tokens.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Recipient and supported case/campaign
2. Suggested amounts plus custom amount
3. Transparent total and fees; no prechecked tip
4. Receipt email and public-name privacy
5. Provider-hosted payment handoff; no card fields in prototype

## Composition

1. Compact back/title row, followed by a small fundraiser thumbnail and recipient summary.
2. Suggested one-time amounts and custom amount share a clear selected treatment.
3. Receipt email and public donor-name privacy are separate, clearly labeled fields.
4. Place a readable total and any applicable fee disclosure before the provider handoff.
5. One focused continue button; no global dock, invented card fields, prechecked tip or monthly-giving switch.

## Actions and transitions

- **Preview payment status** -> [donation-status](../donation-status/README.md)
- **Return to fundraiser** -> [campaign](../campaign-detail/README.md)
- **Back:** [campaign](../campaign-detail/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

| Label | Input | Contract example/options |
| --- | --- | --- |
| Amount in EUR | number | 20 |
| Receipt email | email | Not specified |
| Keep my name private | checkbox | Not specified |

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| default | Normal content; actions reflect access and readiness. Illustrative data only. |
| loading | Reserve layout with skeletons; no blank page or jumping footer. |
| error | Useful retry; preserve query, input and intended destination. |
| offline | Retain context; never imply payment or server writes succeeded. |
| funding-unavailable | Explain unavailable giving; offer relevant practical help. |
| invalid-amount | Inline amount error; retain recipient and typed input. |
| goal-reached | Explain funding policy and eligibility, not an unexplained request for more. |

## Review checklist

- [ ] A generated screen cannot establish provider approval or payment success.
- [ ] Pending, failed and confirmed result screens are distinct from amount selection.
- [ ] Use the same radius, type scale and button geometry as the accepted discovery/detail screens.
- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#donate) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
