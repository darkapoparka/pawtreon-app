# Image brief: Donation status

One screen, not a flow collage. Read [screen contract](README.md), [UI-SPEC](../../UI-SPEC.md) and [workflow](../../SCREEN-WORKFLOW.md). This brief is not an existing generation.

## Target

Screen: `donation-status`; initial state: `pending`; surface: planned route. Compose one readable first viewport at 390x844 browser-content proportions. Other states (succeeded, failed, canceled, offline, not-found, permission-denied) require separate images when applicable.

## Direction

Quiet, focused giving or practical-help task. Show recipient, total and the actual next action. No global dock, guilt prompts, fabricated payment badges or preselected subscriptions. External reference: ShareTheMeal simplicity and GoFundMe fundraiser context.

Quiet, focused giving or practical-help task. Show recipient, total and the actual next action. No global dock, guilt prompts, fabricated payment badges or preselected subscriptions. External reference: ShareTheMeal simplicity and GoFundMe fundraiser context.

White surfaces, dark ink and restrained teal. Editorial serif only for campaign headings; readable sans-serif elsewhere. Reuse an actual attached accepted Pawtreon reference; a filename alone is not an attachment.

## Draw

1. Pending while server verifies the payment
2. Confirmed outcome only from trusted provider event
3. Failure/retry without creating duplicate charges
4. Receipt and return links after success

## Content and state

Keep the contract's defined inputs, actions, organizer identity and access rules. Initial state: Await trusted confirmation; no receipt or automatic second charge. Deeper content scrolls; do not shrink text to fit it all. Use clearly labeled illustrative concept data, never invented real donations or verified status.

## Avoid

No multi-phone boards, hardware, fake iOS status bar, beige chrome, huge floating plus, handwriting, mismatched icons, copied third-party branding, preselected monthly giving or invented features. No precise colony pins. Payment UI must not imply provider approval or functional card capture.

## Output and review

Import and inspect the actual image before recording `concepts/mobile-390.pending.v1.png` as present. Compare with accepted homepage/detail components. A PNG does not prove working interactions or finish the route.
