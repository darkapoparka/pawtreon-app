# Misho’s progress

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `case-updates`

**Surface:** planned route

**Planned path:** `/cases/[slug]/updates`

**Access:** public

**Family:** Stories

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Make the animal or initiative the visual focus. Organizer identity, need and funding status must be legible. Use the editorial campaign style only where appropriate; do not turn case records into marketing posters. External reference: GoFundMe campaign context, with Pawtreon art direction.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Dated animal-care timeline
2. Responsible author for each update
3. Treatment progress and redacted spend evidence
4. Resolved outcome shown without ongoing urgency

## Composition

1. Dated animal-care timeline
2. Responsible author for each update
3. Treatment progress and redacted spend evidence
4. Resolved outcome shown without ongoing urgency

## Actions and transitions

- **Back to case** -> [case](../case-detail/README.md)
- **Follow updates** -> [sign-in](../sign-in/README.md)
- **Back:** [case](../case-detail/README.md)

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

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#case-updates) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
