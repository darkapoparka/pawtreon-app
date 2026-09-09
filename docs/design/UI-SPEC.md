# Mobile UI and interaction specification

Proposed design baseline. Geometry is a starting contract for browser review, not an assertion that the generated image has these measured dimensions.

## Viewports and shell

Design at 390x844 CSS pixels. Verify 320x740, 360x800, 390x844, 430x932, 768x1024 and desktop 1440x900. These are browser content dimensions, not stretched phone artwork. No artificial Dynamic Island, status bar or home indicator inside the website. Use dynamic viewport units and actual safe-area insets. Content must scroll naturally; do not compress four complete cards and a large hero above the fold.

Mobile page gutter 16px; grid gap 12px; section gap 24px; card radius 14px; hero radius 18px. Header content height 56px. Search input 44-48px high with a 44px filter button. Filter chips have at least a 44px tap area, though the visible pill may be 34px high. Icon buttons have a 44x44px hit target. Form text is at least 16px.

The bottom dock has three equal-width action areas, 64px content height plus `env(safe-area-inset-bottom)`, a subtle top border and no large shadow, scallop or raised center circle. Icons are 22-24px; labels 11-12px with adequate contrast. Create uses a small same-plane square/plus and an accessible label. Main content has sufficient bottom padding. Hide the dock on form/detail task screens and use one context footer where necessary. Respect keyboard resizing; a footer must not cover focused fields.

## Color and type tokens

Surface #FFFFFF; subtle surface #F5F6F7; text #14212B; muted text #56616C; border #E3E7E9; action #087C78; action foreground #FFFFFF; urgency #B42318 on #FEF3F2. No gradients outside a necessary photo text scrim. Recheck contrast on actual rendered backgrounds, including translucent hero overlays.

Use a system sans stack for the wireframes. Product typography should remain sans for all navigation, forms, metadata and case titles; a restrained editorial serif can be used only for campaign hero headings. Production font choice must support Bulgarian Cyrillic. Body 16/24; card title 15/20, at most two visually truncated lines with full accessible name; metadata 12-13/18; section title 20/26; home hero 26/29; detail hero 30/34. No tiny helper copy to force content to fit.

## Discovery hierarchy

Header -> search/filter -> species pills -> compact campaign banner -> section controls -> case grid. Home hero target height 200-240px at 390px, not half the screen. One clear support action; no fake urgency countdown, decorative handwriting or stock impact counters.

Case grid starts at 375px viewport width. Cards have image ratio 4:3, one urgency/need badge when relevant, a two-line title, named organizer/type and compact progress with unambiguous raised/goal labels. A save button is a separate accessible control, never nested in the card's link. For non-financial cases replace the progress area with the help needed. Funding metadata is not an excuse to hide organizer identity.

The section control row provides sort and map/list behavior. Advanced selected filters may wrap in a removable summary; otherwise do not show a second pill toolbar. A query or explicit urgent search suppresses the home campaign banner and displays a result count; clearing filters restores the browsing view. The species pills and filter sheet always edit the same canonical query state.

## Detail pages

Case page: animal gallery, title/status, responsible organizer, approximate area, requested help, funds if applicable, story, budget/evidence summaries, updates and reporting. Campaign page: immersive photograph/heading, white content sheet, named organizer, objective, budget, funding progress, related cases, dated updates and optional coarse-area map. Avoid horizontal tabs that conceal critical recipient/budget information before a donation.

One sticky detail footer offers Donate and, when applicable, Help another way. A completed/paused/ineligible fundraiser must not show an enabled donate action. A foster-only case shows Offer help. Saved/share controls must not crowd the primary action. Back restores discovery filters and scroll position.

## Sheets, forms and error handling

Sheets use accessible dialog primitives with a title, close control, focus containment/return and Escape support. Provide an explicit dismiss button; dragging cannot be the only way to close. A mobile filter sheet has Reset and Show results; edits are temporary until applied. Cancel preserves previously applied state.

Wizard: identity/basics -> story/photos -> funding/evidence -> review -> submitted state. Show a clear step label and Save draft. Back preserves values. Auth interruption returns to the intended route. Do not expose multiple competing publish buttons. Submission can return needs-changes or pending review; no fake instant approval.

Errors are adjacent to fields with a summary when useful, linked through aria-describedby, and retain inputs. Loading reserves layout with skeletons. Empty states explain the active filters and offer a useful reset action. Offline never looks like success. Long organization names, Bulgarian copy and 200% zoom must not break the page.

## Accessibility and motion

Target WCAG 2.2 AA and a project-standard 44px minimum touch area. Keyboard-operable controls, visible focus, programmatic labels, logical headings, status announcements and error association are required. Verify dark-on-light contrast; do not rely on color alone. Respect prefers-reduced-motion; no autoplay hero carousel. W3C reference: https://www.w3.org/TR/WCAG22/ . Formal conformance is not established by the wireframes.

## Desktop

Keep the same information hierarchy. Use a centered content area, normal top navigation, a three/four-column discovery grid where appropriate and a detail content/summary split. The mobile dock is not a giant desktop footer. Workspace navigation becomes a sidebar. Do not stretch mobile photo crops across an entire desktop viewport.
