# Visual direction and information architecture

## Reference interpretation

The latest two-phone concept in this conversation contains two exploratory compositions. The left has search, a winter banner and a two-column case feed. The right has an immersive photograph, campaign message, a white content sheet, summary figures and a map/list area. It is not evidence of an implemented page. The owner said the right-hand composition looks nice; no complete route set or final acceptance was supplied.

Use the left composition's useful browsing structure for `/`. Use the right composition's immersive image plus white-sheet transition for `/campaigns/[slug]`. Do not turn every homepage into a full-screen marketing hero, remove search from discovery or insert fictitious global impact statistics just because the generated image contains them.

## Proposed v1 decisions

- Clean white surfaces, dark ink, one restrained teal accent and animal photography. Neutral, not warm beige page chrome. Hero photography may naturally contain warm light.
- Compact header: small Pawtreon wordmark, plain city selector and avatar. No tagline, large location capsule or oversized paw logo.
- Search and filter button share one row. One horizontal species row: All, Cats, Dogs, Other. Need, urgency, organizer kind, evidence status and radius live in the filter sheet.
- Home's seasonal banner is compact and editorial. The full campaign story belongs on the detail page.
- Under the home banner, one section-control row has a title, sort selector and map/list control. These are functional controls for the feed, not another duplicated filter carousel. Active advanced filters have removable summary chips only when selected.
- Use an animal-led two-column grid where cards have enough width. One-column layout below 375 CSS px. Details, search list mode and workspace records may use full-width rows.
- Bottom navigation has Cases / Create / Campaigns, aligned in one flat bar. The create action is not a third selected page or a large floating decoration. Keep its text label. Account remains in the header.
- On details, donation, creation and moderation screens, replace global navigation with the appropriate focused actions. Never show two fixed bottom bars.
- Map discovery is optional. A map below campaign details appears only when it contributes to that initiative and uses approved coarse areas.

## Homepage refinement, 2026-09-13

The current reviewed home reference is `screens/homepage/concepts/mobile-home-reference-2026-09-13.svg`, with detailed notes in `screens/homepage/REVIEW.md`. Where this section conflicts with the older exploratory homepage bullets above, use the 2026-09-13 reference for the home screen while keeping the older notes as history.

- Header: location at upper left, compact Pawtreon paw-heart mark centered, account/avatar at upper right.
- Show the inline search field in the first viewport; do not duplicate it with another search icon. Quick filter pills sit directly below search.
- Do not show a generic home statistics strip. Result counts belong to search/filter results when useful.
- Keep the compact photo-led campaign banner followed by `Cases near you` and animal-led case cards.
- Map is now a first-class alternate discovery surface sharing the same canonical filter/location state as the list.
- The current visual reference tests Cases / Map / Create / Messages / Campaigns in the dock. Map is accepted discovery direction. Messages remains exploratory product scope, not automatic v1 acceptance; private messaging still requires an explicit coordination/privacy/abuse-control decision.
- The large header should not remain fully sticky. A compact scroll-up/search treatment may be explored without duplicating controls.

## What the concept does not decide

It does not establish real supporter counts, beneficiary eligibility, veterinary evidence, shelter permissions, dates, campaign budgets, privacy consent, or payment-provider approval. Do not import mockup numbers as live seeded fundraising claims.

## Review order

Review flows and real-size wireframes before adding polished photos. Review the home, one case, campaign detail, donation and publish journey as a coherent set. Then extend the same component language to account and organization management. Image-generated boards remain visual review assets until matched to the route catalogue and explicitly accepted. Do not label this design perfect or pixel-verified from an image alone.

## Individual-screen review decision, 2026-09-09

The owner preferred the earlier homepage quality over the later multi-screen boards and requested a folder per screen. Preserve that earlier pair as a reference, not a claim of final acceptance. Home uses the left browsing composition; campaign detail uses the right immersive composition.

Use the [individual screen catalogue](screens/README.md) and [screen workflow](SCREEN-WORKFLOW.md). First refine home, case detail and campaign detail, then extend their accepted components to other routes. Generate one screen and one state per image, not another whole-app collage.

[Reference-app research](REFERENCE-APPS.md) recommends Airbnb 2026 discovery as an external visual benchmark, GoFundMe for fundraising journeys, ShareTheMeal for focused giving and Patreon only as a secondary profile/update reference. These are recommendations, not owner approval of a new clone or permission to import unrelated features. The existing framework and product scope are unchanged.
