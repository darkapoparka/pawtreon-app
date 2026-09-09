# Cases near you

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `home`

**Surface:** planned route

**Planned path:** `/`

**Access:** public

**Family:** Discovery

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Earlier two-phone concept, LEFT homepage: Warm Homes, Brighter Tomorrows. Airbnb 2026 discovery is a secondary benchmark, not a replacement.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Compact wordmark / Varna selector / account
2. Search and species filters
3. Winter-shelter campaign banner
4. Sort and map control
5. Animal-led two-column case cards

## Composition

1. 56px header: compact Pawtreon wordmark, plain city selector, small avatar; no tagline or outlined location capsule.
2. Search and filter share one row; a single species row follows. Urgency/need/organizer details live in the filter sheet.
3. A 200-240px editorial winter-shelter banner uses a real-looking cat photo, short serif headline and one support action. No impact-counter strip or extra toolbar.
4. Below the banner: Cases near you, a compact sort action and Map; then a two-column grid at 390px with 16px gutters and 12px gap.
5. Card: 4:3 photo, optional need/urgency badge, two-line title, named organizer/type, then raised/goal and a thin progress bar. No paragraph description in the narrow grid.
6. Flat 64px navigation: Cases / Create / Campaigns. Equal action areas, 22-24px icons, small same-plane plus, no raised circle or large shadow.
7. Allow the lower portion of the first card row to continue below the viewport. Do not shrink the UI to reveal every card.

## Actions and transitions

- **Open a case** -> [case](../case-detail/README.md)
- **Support winter homes** -> [campaign](../campaign-detail/README.md)
- **View map** -> [map](../map/README.md)
- **Back:** [home](../homepage/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

No additional data-entry fields are enumerated. Search/filter controls still follow the hierarchy and shared flows above; do not invent extra personal-data collection.

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

- [ ] Show search results without the promotional banner when an explicit query/urgent search is applied.
- [ ] Save is a separate accessible control; no nested link/button targets.
- [ ] At 360px use the specified single-column layout, not tiny two-column copy.
- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#home) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
