# Help others discover this

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `share`

**Surface:** overlay

**Planned path:** `overlay: share`

**Access:** public

**Family:** Overlays

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Draw the actual modal sheet above a lightly dimmed initiating screen. Title, explicit close, focus return and one apply/confirm action. Do not add an independent bottom dock inside the sheet.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Native share when supported
2. Copy canonical public URL with correct locale
3. No private drafts/evidence/guest receipt tokens
4. Confirmation only after copy succeeds

## Composition

1. Native share when supported
2. Copy canonical public URL with correct locale
3. No private drafts/evidence/guest receipt tokens
4. Confirmation only after copy succeeds

## Actions and transitions

- **Return to campaign** -> [campaign](../campaign-detail/README.md)
- **Back to case** -> [case](../case-detail/README.md)
- **Back:** [campaign](../campaign-detail/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

No additional data-entry fields are enumerated. Search/filter controls still follow the hierarchy and shared flows above; do not invent extra personal-data collection.

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| default | Normal content; actions reflect access and readiness. Illustrative data only. |
| copied | Confirm only after public canonical URL copying succeeds. |
| copy-failed | Manual copy or alternative share method; no false success toast. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#share) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
