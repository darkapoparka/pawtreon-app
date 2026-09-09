# Winter homes for street cats

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `campaign`

**Surface:** planned route

**Planned path:** `/campaigns/[slug]`

**Access:** public

**Family:** Stories

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Earlier two-phone concept, RIGHT composition: immersive cat photograph and editorial heading above a white content sheet.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Immersive cat photograph and editorial headline
2. White sheet: organizer and campaign purpose
3. Funding progress and itemized shelter budget
4. Related cases and dated evidence-backed updates
5. Optional approved coarse-area map

## Composition

1. Use an approximately 280-320px immersive campaign image at 390px, with a restrained scrim and a short editorial serif headline.
2. Transition into a white rounded-top content section with responsible organizer, purpose and funding progress.
3. Show an itemized shelter budget, installation/maintenance plan and dated construction updates below the fold.
4. Related cases are secondary. Include a coarse-area map only when useful to this initiative, not a generic discovery feed.
5. Use one sticky Support campaign footer. Remove decorative statistics, handwriting and duplicated donation buttons.

## Actions and transitions

- **Support campaign** -> [donate](../donation/README.md)
- **See updates** -> [campaign-updates](../campaign-updates/README.md)
- **Organization profile** -> [organization](../organization-profile/README.md)
- **Share** -> [share](../share/README.md)
- **Report concern** -> [report](../report/README.md)
- **Back:** [campaigns](../campaigns/README.md)

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
| completed | Show completed campaign/outcome, not an active fundraiser CTA. |
| funding-unavailable | Explain unavailable giving; offer relevant practical help. |

## Review checklist

- [ ] The initial viewport must expose who organizes the campaign and the start of the funding/context section.
- [ ] A later scrolled concept covers budget and updates; do not compress both into one first-fold image.
- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#campaign) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
