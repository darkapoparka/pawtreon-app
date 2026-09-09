# Choose your area

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `location`

**Surface:** overlay

**Planned path:** `overlay: location`

**Access:** public

**Family:** Overlays

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Draw the actual modal sheet above a lightly dimmed initiating screen. Title, explicit close, focus return and one apply/confirm action. Do not add an independent bottom dock inside the sheet.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Manual city search first
2. Use location only after user request
3. Denied permission keeps manual selection working
4. Area radius never exposes colony coordinates

## Composition

1. Manual city search first
2. Use location only after user request
3. Denied permission keeps manual selection working
4. Area radius never exposes colony coordinates

## Actions and transitions

- **Use selected city** -> [home](../homepage/README.md)
- **Cancel** -> [home](../homepage/README.md)
- **Back:** [home](../homepage/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

| Label | Input | Contract example/options |
| --- | --- | --- |
| City | select | Varna\|Sofia\|Plovdiv\|Other |
| Radius | select | City only\|5 km\|10 km\|25 km |

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| default | Normal content; actions reflect access and readiness. Illustrative data only. |
| searching | Keep city query visible; reserve result area. |
| empty | Explain what is absent; offer relevant browse, create or reset action. |
| location-denied | Keep manual city selection usable; no repeated permission prompt. |
| offline | Retain context; never imply payment or server writes succeeded. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#location) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
