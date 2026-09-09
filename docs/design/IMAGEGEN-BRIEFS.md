# Image-generation route boards

Purpose: visual exploration for the wireframed route system. Use the last two-phone concept in this conversation as art-direction input, especially the right-hand immersive campaign composition. Do not use its arbitrary numbers, giant layouts or duplicated chrome as an implementation specification. Generated images may have typography/layout artifacts; browser implementation still needs verification.

## Shared direction

White, dark ink and restrained teal. Small header. Animal-led photography. Editorial serif only for campaign hero headings; clean sans-serif everywhere else. Flat Cases / Create / Campaigns dock with equal-height actions and a small same-plane plus. On tasks and detail pages use the appropriate single focused footer. Actual mobile proportions, not an elongated device crammed with all content. No decorative handwriting, fake donor faces, invented trust badges, ornamental counters or warm beige application chrome. Every board is labeled concept/illustrative data outside the phone surfaces.

## Eight coordinated board families

1. **Discovery:** home, campaign directory, search, map, filter sheet, location sheet. Compact banner plus real result controls. Map uses coarse areas.
2. **Cases and campaigns:** case detail, immersive campaign detail, their two update timelines, personal profile, organization profile, share sheet. Show recipient/budget visibility and a useful sticky help/donate footer.
3. **Giving and practical help:** contribution selection, provider handoff/pending, success/failure states, receipt, practical-help offer and request status. Never draw invented functional card collection or imply a processor is approved.
4. **Identity:** sign-in, sign-up, check email, expired-link recovery, onboarding, organization creation, team invitation. One identity system, not four login products.
5. **Personal account:** account/identity switcher, settings, saved items, donation history, notifications. Keep role and privacy distinctions clear.
6. **Publishing:** create choice, basics, story/photos, budget/evidence, review and submission status. Preserve the visible step sequence and draft-save affordance.
7. **Organizer workspace:** overview, managed cases/campaigns, fundraiser management, update editor, payout-readiness screen, team, verification and organization settings. No fabricated paid-out balance.
8. **Review, support and policy:** review queue, review detail, reported content, user report, help/contact, legal page template for terms/privacy/donation policy, not-found state. Dense admin work should have a coherent mobile adaptation, not a fake desktop table squeezed into a phone.

## Coverage and storage rules

`routes.json` is the complete screen index, including shared-template routes. The wireframe workbench covers every index entry and lists applicable states. The eight image families are grouped concept boards, not proof of a separately polished image for every possible failure state. Keep generated boards separate from actual animal evidence. Chat-generated images are not automatically present on the remote Windows filesystem; only mark an image imported after its actual file has been copied and inspected. Do not create a manifest entry claiming an image exists when only a brief exists.

Suggested eventual import paths: `docs/design/concepts/01-discovery.png` through `08-review-support.png`. These are planned paths, not existing assets. The final approved assets must have source/provenance entries and per-screen acceptance notes.
