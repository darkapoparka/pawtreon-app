# Organization profile

Generated packet: edit [routes.json](../../routes.json) and [art direction](../../screen-art-direction.json), then regenerate.

**Screen ID:** `organization`

**Surface:** planned route

**Planned path:** `/organizations/[slug]`

**Access:** public

**Family:** Stories

This is not a finished image, implemented production route or owner approval. Product paths omit locale prefixes.

## Visual reference

GoFundMe organizer context; Patreon only for profile/update hierarchy, not memberships.

[Reference research](../../REFERENCE-APPS.md) · [Shared UI specification](../../UI-SPEC.md) · [Screen workflow](../../SCREEN-WORKFLOW.md)

## Information hierarchy

1. Logo, clinic/store/organization type
2. Published contact details and intentional business location
3. Named responsible team and verification scope
4. Cases, campaigns and outcome updates

## Composition

1. A restrained logo/name header with the actual entity type and verification scope.
2. Shared profile template for clinic, store and organization, with appropriately labeled contact/service information.
3. Show active cases/campaigns and public updates using the accepted card components.
4. Only intentional public business addresses may be precise; never reveal stray-colony coordinates.

## Actions and transitions

- **View campaign** -> [campaign](../campaign-detail/README.md)
- **View case** -> [case](../case-detail/README.md)
- **Report profile** -> [report](../report/README.md)
- **Back:** [campaign](../campaign-detail/README.md)

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

- [ ] Prepare content variants for clinic, store and organization without inventing three independent authentication systems.
- [ ] Match accepted type, colors, controls and spacing; do not independently redesign this screen.
- [ ] Review long Bulgarian copy, mobile widths, visible focus, 44px touch areas and keyboard/safe-area behavior.
- [ ] Use one context-appropriate footer, never stacked global and task bars.
- [ ] Verify relevant states before considering the screen complete.
- [ ] Public browsing must not become sign-in-gated; permission handling applies only where an action or record requires it.

## Artifacts

[Existing low-fidelity wireframe](../../wireframes/index.html#organization) · [Individual image brief](IMAGEGEN.md)

Future concept naming: `concepts/mobile-390.default.v1.png`. Later browser evidence: `verification/browser-390.default.png`. These are naming conventions, not existing-file claims. Record exact owner-approved files and remaining issues in REVIEW.md after review.
