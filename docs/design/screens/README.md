# Pawtreon individual screens

53 screen/overlay/boundary packets generated from the existing catalogue. This is not 53 finished high-fidelity screens.

Start with [homepage](homepage/README.md), [case detail](case-detail/README.md), [campaign detail](campaign-detail/README.md), [donation](donation/README.md) and [create](create/README.md).

Each folder has a specification and a separate image-generation brief. One screen and state per image. The earlier homepage/campaign pair remains the visual reference; multi-screen boards are exploration only.

[Workflow](../SCREEN-WORKFLOW.md) · [Reference apps](../REFERENCE-APPS.md) · [Shared geometry/tokens](../UI-SPEC.md) · [Coverage manifest](manifest.json)

| Folder | Canonical ID | Planned path | Family |
| --- | --- | --- | --- |
| [homepage](homepage/README.md) | home | `/` | Discovery |
| [campaigns](campaigns/README.md) | campaigns | `/campaigns` | Discovery |
| [search](search/README.md) | search | `/search` | Discovery |
| [map](map/README.md) | map | `/map` | Discovery |
| [case-detail](case-detail/README.md) | case | `/cases/[slug]` | Stories |
| [campaign-detail](campaign-detail/README.md) | campaign | `/campaigns/[slug]` | Stories |
| [case-updates](case-updates/README.md) | case-updates | `/cases/[slug]/updates` | Stories |
| [campaign-updates](campaign-updates/README.md) | campaign-updates | `/campaigns/[slug]/updates` | Stories |
| [personal-profile](personal-profile/README.md) | person | `/people/[handle]` | Stories |
| [organization-profile](organization-profile/README.md) | organization | `/organizations/[slug]` | Stories |
| [offer-help](offer-help/README.md) | offer-help | `/cases/[slug]/help` | Donations |
| [help-sent](help-sent/README.md) | help-sent | `/cases/[slug]/help/status` | Donations |
| [donation](donation/README.md) | donate | `/donate/[fundraiserId]` | Donations |
| [donation-status](donation-status/README.md) | donation-status | `/donations/[donationId]/status` | Donations |
| [receipt](receipt/README.md) | receipt | `/donations/[donationId]/receipt` | Donations |
| [sign-in](sign-in/README.md) | sign-in | `/sign-in` | Identity |
| [sign-up](sign-up/README.md) | sign-up | `/sign-up` | Identity |
| [check-email](check-email/README.md) | check-email | `/auth/check-email` | Identity |
| [auth-error](auth-error/README.md) | auth-error | `/auth/error` | Identity |
| [onboarding](onboarding/README.md) | onboarding | `/onboarding` | Identity |
| [organization-new](organization-new/README.md) | organization-new | `/organizations/new` | Identity |
| [invitation](invitation/README.md) | invitation | `/invitations/[token]` | Identity |
| [account](account/README.md) | account | `/account` | Personal |
| [settings](settings/README.md) | settings | `/account/settings` | Personal |
| [saved](saved/README.md) | saved | `/account/saved` | Personal |
| [donations](donations/README.md) | donations | `/account/donations` | Personal |
| [notifications](notifications/README.md) | notifications | `/account/notifications` | Personal |
| [create](create/README.md) | create | `/create` | Publishing |
| [create-basics](create-basics/README.md) | create-basics | `/create/[kind]/[draftId]/basics` | Publishing |
| [create-story](create-story/README.md) | create-story | `/create/[kind]/[draftId]/story` | Publishing |
| [create-funding](create-funding/README.md) | create-funding | `/create/[kind]/[draftId]/funding` | Publishing |
| [create-review](create-review/README.md) | create-review | `/create/[kind]/[draftId]/review` | Publishing |
| [create-status](create-status/README.md) | create-status | `/create/[kind]/[draftId]/status` | Publishing |
| [workspace](workspace/README.md) | workspace | `/workspaces/[workspaceId]` | Workspace |
| [manage-list](manage-list/README.md) | manage-list | `/workspaces/[workspaceId]/fundraisers` | Workspace |
| [manage-fundraiser](manage-fundraiser/README.md) | manage-fundraiser | `/workspaces/[workspaceId]/fundraisers/[fundraiserId]` | Workspace |
| [update-editor](update-editor/README.md) | update-editor | `/workspaces/[workspaceId]/fundraisers/[fundraiserId]/updates/new` | Workspace |
| [payouts](payouts/README.md) | payouts | `/workspaces/[workspaceId]/payouts` | Workspace |
| [members](members/README.md) | members | `/workspaces/[workspaceId]/members` | Workspace |
| [verification](verification/README.md) | verification | `/workspaces/[workspaceId]/verification` | Workspace |
| [workspace-settings](workspace-settings/README.md) | workspace-settings | `/workspaces/[workspaceId]/settings` | Workspace |
| [report](report/README.md) | report | `/report?subject=[type:id]` | Review and help |
| [review-queue](review-queue/README.md) | review-queue | `/admin/reviews` | Review and help |
| [review-detail](review-detail/README.md) | review-detail | `/admin/reviews/[reviewId]` | Review and help |
| [admin-reports](admin-reports/README.md) | admin-reports | `/admin/reports` | Review and help |
| [support](support/README.md) | support | `/help` | Review and help |
| [terms](terms/README.md) | terms | `/legal/terms` | Review and help |
| [privacy](privacy/README.md) | privacy | `/legal/privacy` | Review and help |
| [donation-policy](donation-policy/README.md) | donation-policy | `/legal/donations` | Review and help |
| [not-found](not-found/README.md) | not-found | `not-found.tsx` | Review and help |
| [filters](filters/README.md) | filters | `overlay: filters` | Overlays |
| [location](location/README.md) | location | `overlay: location` | Overlays |
| [share](share/README.md) | share | `overlay: share` | Overlays |

## Maintenance

Run `node scripts/generate-screen-folders.mjs` or add `--check` for a non-writing consistency check. Edit packets through canonical inputs. Actual PNGs and REVIEW.md are never generated, deleted or treated as approvals by this script.
