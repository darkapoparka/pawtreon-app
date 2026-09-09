# Your help offer

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `help-sent`

**Surface:** planned route

**Planned path:** `/cases/[slug]/help/status`

**Access:** signed-in

**Family:** Donations

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Quiet, focused giving or practical-help task. Show recipient, total and the actual next action. No global dock, guilt prompts, fabricated payment badges or preselected subscriptions. External reference: ShareTheMeal simplicity and GoFundMe fundraiser context.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Request status: submitted, seen, accepted or declined
2. Organizer response expectations
3. Cancel request / contact support
4. No location or contact details publicly exposed

## Composition

1. Request status: submitted, seen, accepted or declined
2. Organizer response expectations
3. Cancel request / contact support
4. No location or contact details publicly exposed

## Actions and transitions

- **Return to case** -> [case](../case-detail/README.md)
- **View notifications** -> [notifications](../notifications/README.md)
- **Back:** [case](../case-detail/README.md)

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
| permission-denied | No private content; explain safe sign-in/access recovery. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#help-sent) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
