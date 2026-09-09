# What needs help?

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `create`

**Surface:** planned route

**Planned path:** `/create`

**Access:** signed-in; return-to after auth

**Family:** Publishing

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

Task-focused creation patterns informed by GoFundMe; one Pawtreon publishing system.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Acting personal/organization identity
2. Animal case: specific animal or small group
3. Campaign: coordinated community initiative
4. Existing resumable drafts

## Composition

1. Compact back/title header with the acting personal or organization identity directly below.
2. Only two primary choices: Animal case and Community campaign, each with an icon and a short purpose statement.
3. Existing drafts appear in a quiet secondary section; resume opens the saved step.
4. No third Event or Adoption product. Foster/adoption help remains a case need according to PRD.
5. Do not show a global dock and an additional fixed task footer at the same time.

## Actions and transitions

- **Start an animal case** -> [create-basics](../create-basics/README.md)
- **Start a campaign** -> [create-basics](../create-basics/README.md)
- **Resume draft** -> [create-story](../create-story/README.md)
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

- [ ] Both choices must preserve kind and acting identity through login and the wizard.
- [ ] A clinic/store/organization selector does not grant permissions.
- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#create) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
