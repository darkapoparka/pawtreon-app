# Review before submitting

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `create-review`

**Surface:** planned route

**Planned path:** `/create/[kind]/[draftId]/review`

**Access:** owner/manager publishes; contributor submits for review

**Family:** Publishing

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Keep one consistent wizard shell: back/title, acting identity, step label, form, save status and one primary next action. Campaign and case share components but have different content. Preserve all fields on Back and explain private evidence separately.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Step 4 of 4; public preview
2. Budget, location privacy and acting identity
3. Unresolved fields and processor readiness clearly listed
4. Publishing agreements and honest review expectation

## Composition

1. Step 4 of 4; public preview
2. Budget, location privacy and acting identity
3. Unresolved fields and processor readiness clearly listed
4. Publishing agreements and honest review expectation

## Actions and transitions

- **Submit for review (prototype)** -> [create-status](../create-status/README.md)
- **Edit story** -> [create-story](../create-story/README.md)
- **Save draft and exit** -> [workspace](../workspace/README.md)
- **Back:** [create-funding](../create-funding/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

| Label | Input | Contract example/options |
| --- | --- | --- |
| I confirm the information is accurate | checkbox | Not specified |

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| default | Normal content; actions reflect access and readiness. Illustrative data only. |
| validation-error | Inline errors and useful summary; preserve values and focus first error. |
| permission-denied | No private content; explain safe sign-in/access recovery. |
| submitting | One pending action; prevent duplicate submission. |
| error | Useful retry; preserve query, input and intended destination. |
| offline | Retain context; never imply payment or server writes succeeded. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#create-review) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
