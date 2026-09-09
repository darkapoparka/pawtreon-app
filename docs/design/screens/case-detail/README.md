# Help Misho recover

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `case`

**Surface:** planned route

**Planned path:** `/cases/[slug]`

**Access:** public

**Family:** Stories

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Pawtreon animal-led cards extended into detail; GoFundMe organizer/story/progress flow.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Animal gallery; status and need
2. Named personal organizer and coarse area
3. Raised / target if financial
4. Story, budget and evidence summary
5. Latest update; report link

## Composition

1. Start with a 4:3 animal gallery and discreet back/share/save controls.
2. Below the image, show need/status, a short case title, named organizer and approximate area.
3. Show unambiguous funding progress only for financial cases. Foster-only cases show practical help instead.
4. Story, budget/evidence summary and dated updates continue naturally below the fold.
5. One sticky footer: Donate plus a secondary practical-help action when applicable. No global dock on this task.

## Actions and transitions

- **Donate** -> [donate](../donation/README.md)
- **Help another way** -> [offer-help](../offer-help/README.md)
- **Read updates** -> [case-updates](../case-updates/README.md)
- **Organizer profile** -> [person](../personal-profile/README.md)
- **Share** -> [share](../share/README.md)
- **Report concern** -> [report](../report/README.md)
- **Back:** [home](../homepage/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

No additional data-entry fields are enumerated. Search/filter controls still follow the hierarchy and shared flows above; do not invent extra personal-data collection.

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| default | Normal content; actions reflect access and readiness. Illustrative data only. |
| loading | Reserve layout with skeletons; no blank page or jumping footer. |
| error | Useful retry; preserve query, input and intended destination. |
| offline | Retain context; never imply payment or server writes succeeded. |
| not-found | Safe missing/removed message; recover through browse or search. |
| paused | Explicit paused state; no enabled donation action. |
| resolved | Show outcome and updates; remove ongoing urgency and donation action. |
| funding-unavailable | Explain unavailable giving; offer relevant practical help. |

## Review checklist

- [ ] Create separate visual states for paused, resolved and funding unavailable; never leave an active donation CTA.
- [ ] Do not bury organizer and recipient under hidden tabs.
- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#case) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
