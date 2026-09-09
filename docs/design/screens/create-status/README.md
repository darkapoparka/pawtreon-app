# Submission status

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `create-status`

**Surface:** planned route

**Planned path:** `/create/[kind]/[draftId]/status`

**Access:** draft owner or workspace member

**Family:** Publishing

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Keep one consistent wizard shell: back/title, acting identity, step label, form, save status and one primary next action. Campaign and case share components but have different content. Preserve all fields on Back and explain private evidence separately.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Pending review, changes needed, published or rejected
2. Specific actionable reviewer feedback
3. Payment readiness remains separate from content approval
4. Resume editing without duplicating a fundraiser

## Composition

1. Pending review, changes needed, published or rejected
2. Specific actionable reviewer feedback
3. Payment readiness remains separate from content approval
4. Resume editing without duplicating a fundraiser

## Actions and transitions

- **View in workspace** -> [manage-fundraiser](../manage-fundraiser/README.md)
- **Edit draft** -> [create-story](../create-story/README.md)
- **Browse cases** -> [home](../homepage/README.md)
- **Back:** [create-review](../create-review/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

No additional data-entry fields are enumerated. Search/filter controls still follow the hierarchy and shared flows above; do not invent extra personal-data collection.

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| submitted | Submission received, not automatically published or payout-ready. |
| needs-changes | Specific corrections and return to the affected form step. |
| published | Content publication and monetary readiness remain distinct. |
| rejected | Decision, permitted reason and correction/appeal/support route. |
| error | Useful retry; preserve query, input and intended destination. |
| permission-denied | No private content; explain safe sign-in/access recovery. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#create-status) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.submitted.v1.png`. Later browser evidence: `verification/browser-390.submitted.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
