# Plan the help needed

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `create-funding`

**Surface:** planned route

**Planned path:** `/create/[kind]/[draftId]/funding`

**Access:** draft owner or contributor

**Family:** Publishing

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Keep one consistent wizard shell: back/title, acting identity, step label, form, save status and one primary next action. Campaign and case share components but have different content. Preserve all fields on Back and explain private evidence separately.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Step 3 of 4; money, practical help, or both
2. Budget rows and target in minor units
3. Beneficiary readiness and private evidence
4. No-money case skips target and shows help request

## Composition

1. Step 3 of 4; money, practical help, or both
2. Budget rows and target in minor units
3. Beneficiary readiness and private evidence
4. No-money case skips target and shows help request

## Actions and transitions

- **Review draft** -> [create-review](../create-review/README.md)
- **Save draft and exit** -> [workspace](../workspace/README.md)
- **Back:** [create-story](../create-story/README.md)

Edge cases and persistence follow [FLOWS.md](../../FLOWS.md). Prototype labels do not establish live actions.

## Inputs

| Label | Input | Contract example/options |
| --- | --- | --- |
| Help requested | select | Money and practical help\|Practical help only\|Money only |
| Target in EUR | number | Not specified |
| Budget and use of funds | textarea | Not specified |
| Private estimate or supporting document | file | Not specified |

## States to design separately

| State | Visual/interaction requirement |
| --- | --- |
| default | Normal content; actions reflect access and readiness. Illustrative data only. |
| validation-error | Inline errors and useful summary; preserve values and focus first error. |
| upload-failed | Retry/remove affected file without losing story or successful uploads. |
| beneficiary-not-ready | Content progress and payment readiness are separate. |
| save-conflict | Explain conflicting edit; compare/reload, never silently overwrite. |
| offline | Retain context; never imply payment or server writes succeeded. |

## Review checklist

- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#create-funding) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
