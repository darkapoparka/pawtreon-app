# Help in your area

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `map`

**Surface:** planned route

**Planned path:** `/map`

**Access:** public

**Family:** Discovery

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Use the compact discovery shell and animal-led imagery. Share one applied query model between search, chips, sort and map. Prefer the earlier Pawtreon homepage over the smaller multi-screen boards. External reference: Airbnb discovery; adapt to fundraising rather than travel.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Manual city selection; permission only on request
2. Coarse-area map and cluster pins
3. Selected case preview sheet
4. List/map switch with filters retained

## Composition

1. Manual city selection; permission only on request
2. Coarse-area map and cluster pins
3. Selected case preview sheet
4. List/map switch with filters retained

## Actions and transitions

- **Open selected case** -> [case](../case-detail/README.md)
- **Back to list** -> [home](../homepage/README.md)
- **Choose city** -> [location](../location/README.md)
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
| location-denied | Keep manual city selection usable; no repeated permission prompt. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#map) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
