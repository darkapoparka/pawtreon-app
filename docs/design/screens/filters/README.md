# Find the right cause

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `filters`

**Surface:** overlay

**Planned path:** `overlay: filters`

**Access:** public

**Family:** Overlays

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Draw the actual modal sheet above a lightly dimmed initiating screen. Title, explicit close, focus return and one apply/confirm action. Do not add an independent bottom dock inside the sheet.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Draft filter state separate from applied state
2. Need, urgency, organizer type and radius
3. Reset all / show results with honest count
4. Cancel returns without applying changes

## Composition

1. Draft filter state separate from applied state
2. Need, urgency, organizer type and radius
3. Reset all / show results with honest count
4. Cancel returns without applying changes

## Actions and transitions

- **Apply filters (prototype)** -> [search](../search/README.md)
- **Reset and browse** -> [home](../homepage/README.md)
- **Back:** [home](../homepage/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

| Label | Input | Contract example/options |
| --- | --- | --- |
| Need | select | Any need\|Medical\|Food\|Shelter\|Foster |
| Organizer | select | Any organizer\|Personal\|Clinic\|Store\|Organization |
| Urgent only | checkbox | Not specified |
| Evidence reviewed only | checkbox | Not specified |

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

[Existing low-fidelity wireframe](../../wireframes/index.html#filters) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
