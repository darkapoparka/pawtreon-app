# Image brief: Choose your area

One screen, not a flow collage. Read [screen contract](README.md), [UI-SPEC](../../UI-SPEC.md) and [workflow](../../SCREEN-WORKFLOW.md). This brief is not an existing generation.

## Target

Screen: `location`; initial state: `default`; surface: overlay. Compose one readable first viewport at 390x844 browser-content proportions. Other states (searching, empty, location-denied, offline) require separate images when applicable.

## Direction

Draw the actual modal sheet above a lightly dimmed initiating screen. Title, explicit close, focus return and one apply/confirm action. Do not add an independent bottom dock inside the sheet.

Draw the actual modal sheet above a lightly dimmed initiating screen. Title, explicit close, focus return and one apply/confirm action. Do not add an independent bottom dock inside the sheet.

White surfaces, dark ink and restrained teal. Editorial serif only for campaign headings; readable sans-serif elsewhere. Reuse an actual attached accepted Pawtreon reference; a filename alone is not an attachment.

## Draw

1. Manual city search first
2. Use location only after user request
3. Denied permission keeps manual selection working
4. Area radius never exposes colony coordinates

## Content and state

Keep the contract's defined inputs, actions, organizer identity and access rules. Initial state: Normal content; actions reflect access and readiness. Illustrative data only. Deeper content scrolls; do not shrink text to fit it all. Use clearly labeled illustrative concept data, never invented real donations or verified status.

## Avoid

No multi-phone boards, hardware, fake iOS status bar, beige chrome, huge floating plus, handwriting, mismatched icons, copied third-party branding, preselected monthly giving or invented features. No precise colony pins. Payment UI must not imply provider approval or functional card capture.

## Output and review

Import and inspect the actual image before recording `concepts/mobile-390.default.v1.png` as present. Compare with accepted homepage/detail components. A PNG does not prove working interactions or finish the route.
